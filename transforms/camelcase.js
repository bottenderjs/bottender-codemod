const { camelcase } = require('messaging-api-common');

module.exports = function(file, api, options) {
  const j = api.jscodeshift;

  const printOptions = options.printOptions || {
    quote: 'single',
    trailingComma: true,
  };
  const root = j(file.source);

  const isRecursive = value => {
    return !!(
      value.id &&
      j(value.body)
        .find(j.Identifier)
        .filter(i => i.node.name === value.id.name)
        .size() !== 0
    );
  };

  root
    .find(j.MemberExpression, {
      object: {
        type: 'Identifier',
        name: 'context',
      },
    })
    .closest(j.CallExpression)
    .find(j.Property, {
      method: false,
      computed: false,
    })
    .filter((key, value) => !isRecursive(value))
    .forEach(prop => {
      if (prop.value.key.type === 'Identifier') {
        prop.value.key = j.identifier(camelcase(prop.value.key.name));
      }
    });

  const transformEventProperties = path => {
    path.value.property = j.identifier(camelcase(path.value.property.name));
    if (path.parentPath.value.type === 'MemberExpression') {
      transformEventProperties(path.parentPath);
    }
  };

  const foundContextEvent = root.find(j.MemberExpression, {
    object: {
      type: 'Identifier',
      name: 'context',
    },
    property: {
      type: 'Identifier',
      name: 'event',
    },
  });

  foundContextEvent.forEach(transformEventProperties);

  foundContextEvent.closest(j.VariableDeclaration).forEach(path => {
    const varNames = path.value.declarations.map(
      declaration => declaration.id.name
    );

    for (let i = 0; i < varNames.length; i++) {
      j(path)
        .closest(j.BlockStatement)
        .find(j.MemberExpression, {
          object: {
            type: 'Identifier',
            name: varNames[i],
          },
        })
        .forEach(transformEventProperties);
    }
  });

  const foundContextEventDestructuring = foundContextEvent.closest(
    j.VariableDeclarator
  );

  foundContextEventDestructuring
    .find(j.Property, {
      method: false,
      computed: false,
    })
    .forEach(path => {
      const varName = path.value.value.name;

      j(path)
        .closest(j.BlockStatement)
        .find(j.MemberExpression, {
          object: {
            type: 'Identifier',
            name: varName,
          },
        })
        .forEach(transformEventProperties);
    });

  const foundContextDestructuring = root.find(j.VariableDeclarator, {
    init: {
      type: 'Identifier',
      name: 'context',
    },
  });

  foundContextDestructuring
    .find(j.Property, {
      method: false,
      computed: false,
      key: {
        type: 'Identifier',
        name: 'event',
      },
    })
    .forEach(path => {
      const varName = path.value.value.name;

      j(path)
        .closest(j.BlockStatement)
        .find(j.MemberExpression, {
          object: {
            type: 'Identifier',
            name: varName,
          },
        })
        .forEach(transformEventProperties);
    });

  return root.toSource(printOptions);
};
