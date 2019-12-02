async function App(context) {
  await context.postMessage('Hello!', { as_user: true });
  await context.postMessage(
    {
      text: 'Hello!',
      attachments: [
        {
          text: 'Choose a game to play',
          fallback: 'You are unable to choose a game',
          callback_id: 'wopr_game',
          color: '#3AA3E3',
          attachment_type: 'default',
          actions: [
            {
              name: 'game',
              text: 'Chess',
              type: 'button',
              value: 'chess',
            },
          ],
        },
      ],
    },
    {
      as_user: true,
    }
  );
  await context.postEphemeral('Hello!', { as_user: true });
}
