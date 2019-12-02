async function App(context) {
  context.event.rawEvent.message.isEcho;

  const event = context.event;
  event.rawEvent.message.isEcho;

  const rawEvent = context.event.rawEvent;
  rawEvent.message.isEcho;

  context.event.gamePlay.gameId;

  context.event.payment.requestedUserInfo.shippingAddress;
}

async function App2(context) {
  const { event } = context;
  event.rawEvent.message.isEcho;

  const { event: evt } = context;
  evt.rawEvent.message.isEcho;

  const { rawEvent } = context.event;
  rawEvent.message.isEcho;

  const { rawEvent: raw } = context.event;
  raw.message.isEcho;
}
