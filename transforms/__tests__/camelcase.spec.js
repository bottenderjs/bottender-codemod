const { defineTest } = require('jscodeshift/dist/testUtils');

defineTest(__dirname, 'camelcase', null, 'camelcase/messenger-context');
defineTest(__dirname, 'camelcase', null, 'camelcase/messenger-event');
defineTest(__dirname, 'camelcase', null, 'camelcase/slack-context');
defineTest(__dirname, 'camelcase', null, 'camelcase/slack-event');
defineTest(__dirname, 'camelcase', null, 'camelcase/telegram-context');
defineTest(__dirname, 'camelcase', null, 'camelcase/telegram-event');
defineTest(__dirname, 'camelcase', null, 'camelcase/viber-context');
defineTest(__dirname, 'camelcase', null, 'camelcase/viber-event');
