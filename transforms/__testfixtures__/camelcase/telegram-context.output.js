async function App(context) {
  await context.sendMessage('hi', {
    disableWebPagePreview: true,
    disableNotification: true,
  });
  await context.sendPhoto('https://example.com/image.png', {
    caption: 'gooooooodPhoto',
    disableNotification: true,
  });
  await context.sendAudio('https://example.com/audio.mp3', {
    caption: 'gooooooodAudio',
    disableNotification: true,
  });
  await context.sendDocument('https://example.com/doc.gif', {
    caption: 'gooooooodDocument',
    disableNotification: true,
  });
  await context.sendSticker('CAADAgADQAADyIsGAAE7MpzFPFQX5QI', {
    disableNotification: true,
  });
  await context.sendVideo('https://example.com/video.mp4', {
    caption: 'gooooooodVideo',
    disableNotification: true,
  });
  await context.sendVoice('https://example.com/voice.ogg', {
    caption: 'gooooooodVoice',
    disableNotification: true,
  });
  await context.sendVideoNote('https://example.com/video_note.mp4', {
    duration: 40,
    disableNotification: true,
  });
  await context.sendLocation(
    {
      latitude: 30,
      longitude: 45,
    },
    {
      disableNotification: true,
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
      disableNotification: true,
    }
  );
  await context.sendContact(
    {
      phoneNumber: '886123456789',
      firstName: 'first',
    },
    { lastName: 'last' }
  );
  await context.editMessageReplyMarkup({
    keyboard: [[{ text: 'new_button_1' }, { text: 'new_button_2' }]],
    resizeKeyboard: true,
    oneTimeKeyboard: true,
  });
  await context.kickChatMember(USER_ID, { untilDate: UNIX_TIME });
  await context.restrictChatMember(USER_ID, { canSendMessages: true });
  await context.promoteChatMember(USER_ID, {
    canChangeInfo: true,
    canInviteUsers: true,
  });
  await context.sendInvoice({
    title: 'product name',
    description: 'product description',
    payload: 'bot-defined invoice payload',
    providerToken: 'PROVIDER_TOKEN',
    startParameter: 'pay',
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
        photoFileId: 'FILE_ID',
        title: 'PHOTO_TITLE',
      },
      {
        type: 'audio',
        id: 'UNIQUE_ID',
        audioFileId: 'FILE_ID',
        caption: 'AUDIO_TITLE',
      },
    ],
    {
      cacheTime: 1000,
    }
  );
}
