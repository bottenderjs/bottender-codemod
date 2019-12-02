async function App(context) {
  await context.sendMessage('hi', {
    disable_web_page_preview: true,
    disable_notification: true,
  });
  await context.sendPhoto('https://example.com/image.png', {
    caption: 'gooooooodPhoto',
    disable_notification: true,
  });
  await context.sendAudio('https://example.com/audio.mp3', {
    caption: 'gooooooodAudio',
    disable_notification: true,
  });
  await context.sendDocument('https://example.com/doc.gif', {
    caption: 'gooooooodDocument',
    disable_notification: true,
  });
  await context.sendSticker('CAADAgADQAADyIsGAAE7MpzFPFQX5QI', {
    disable_notification: true,
  });
  await context.sendVideo('https://example.com/video.mp4', {
    caption: 'gooooooodVideo',
    disable_notification: true,
  });
  await context.sendVoice('https://example.com/voice.ogg', {
    caption: 'gooooooodVoice',
    disable_notification: true,
  });
  await context.sendVideoNote('https://example.com/video_note.mp4', {
    duration: 40,
    disable_notification: true,
  });
  await context.sendLocation(
    {
      latitude: 30,
      longitude: 45,
    },
    {
      disable_notification: true,
    }
  );
  await context.sendVenue(
    {
      latitude: 30,
      longitude: 45,
      title: 'a_title',
      address: 'an_address',
    },
    {
      disable_notification: true,
    }
  );
  await context.sendContact(
    {
      phone_number: '886123456789',
      first_name: 'first',
    },
    { last_name: 'last' }
  );
  await context.editMessageReplyMarkup({
    keyboard: [[{ text: 'new_button_1' }, { text: 'new_button_2' }]],
    resize_keyboard: true,
    one_time_keyboard: true,
  });
  await context.kickChatMember(USER_ID, { until_date: UNIX_TIME });
  await context.restrictChatMember(USER_ID, { can_send_messages: true });
  await context.promoteChatMember(USER_ID, {
    can_change_info: true,
    can_invite_users: true,
  });
  await context.sendInvoice({
    title: 'product name',
    description: 'product description',
    payload: 'bot-defined invoice payload',
    provider_token: 'PROVIDER_TOKEN',
    start_parameter: 'pay',
    currency: 'USD',
    prices: [
      { label: 'product', amount: 11000 },
      { label: 'tax', amount: 11000 },
    ],
  });
  await context.answerInlineQuery(
    [
      {
        type: 'photo',
        id: 'UNIQUE_ID',
        photo_file_id: 'FILE_ID',
        title: 'PHOTO_TITLE',
      },
      {
        type: 'audio',
        id: 'UNIQUE_ID',
        audio_file_id: 'FILE_ID',
        caption: 'AUDIO_TITLE',
      },
    ],
    {
      cache_time: 1000,
    }
  );
}
