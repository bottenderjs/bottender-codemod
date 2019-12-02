async function App(context) {
  await context.postMessage('Hello!', { asUser: true });
  await context.postMessage(
    {
      text: 'Hello!',
      attachments: [
        {
          text: 'Choose a game to play',
          fallback: 'You are unable to choose a game',
          callbackId: 'wopr_game',
          color: '#3AA3E3',
          attachmentType: 'default',
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
      asUser: true,
    }
  );
  await context.postEphemeral('Hello!', { asUser: true });
}
