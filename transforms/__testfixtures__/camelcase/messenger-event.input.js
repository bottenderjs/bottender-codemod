async function App(context) {
  context.event.rawEvent.message.is_echo;

  const event = context.event;
  event.rawEvent.message.is_echo;

  const rawEvent = context.event.rawEvent;
  rawEvent.message.is_echo;

  context.event.gamePlay.game_id;

  context.event.payment.requested_user_info.shipping_address;
}

async function App2(context) {
  const { event } = context;
  event.rawEvent.message.is_echo;

  const { event: evt } = context;
  evt.rawEvent.message.is_echo;

  const { rawEvent } = context.event;
  rawEvent.message.is_echo;

  const { rawEvent: raw } = context.event;
  raw.message.is_echo;
}
