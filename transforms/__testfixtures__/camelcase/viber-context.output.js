async function App(context) {
  await context.sendFile({
    media: 'http://www.images.com/file.doc',
    size: 10000,
    fileName: 'name_of_file.doc',
  });
  await context.sendContact({
    name: 'Itamar',
    phoneNumber: '+972511123123',
  });
  await context.sendCarouselContent({
    type: 'rich_media',
    buttonsGroupColumns: 6,
    buttonsGroupRows: 7,
    bgColor: '#FFFFFF',
    buttons: [
      {
        columns: 6,
        rows: 3,
        actionType: 'open-url',
        actionBody: 'https://www.google.com',
        image: 'http://html-test:8080/myweb/guy/assets/imageRMsmall2.png',
      },
      {
        columns: 6,
        rows: 2,
        text:
          '<font color=#323232><b>Headphones with Microphone, On-ear Wired earphones</b></font><font color=#777777><br>Sound Intone </font><font color=#6fc133>$17.99</font>',
        actionType: 'open-url',
        actionBody: 'https://www.google.com',
        textSize: 'medium',
        textVAlign: 'middle',
        textHAlign: 'left',
      },
      {
        columns: 6,
        rows: 1,
        actionType: 'reply',
        actionBody: 'https://www.google.com',
        text: '<font color=#ffffff>Buy</font>',
        textSize: 'large',
        textVAlign: 'middle',
        textHAlign: 'middle',
        image: 'https://s14.postimg.org/4mmt4rw1t/Button.png',
      },
      {
        columns: 6,
        rows: 1,
        actionType: 'reply',
        actionBody: 'https://www.google.com',
        text: '<font color=#8367db>MORE DETAILS</font>',
        textSize: 'small',
        textVAlign: 'middle',
        textHAlign: 'middle',
      },
      {
        columns: 6,
        rows: 3,
        actionType: 'open-url',
        actionBody: 'https://www.google.com',
        image: 'https://s16.postimg.org/wi8jx20wl/image_RMsmall2.png',
      },
      {
        columns: 6,
        rows: 2,
        text:
          "<font color=#323232><b>Hanes Men's Humor Graphic T-Shirt</b></font><font color=#777777><br>Hanes</font><font color=#6fc133>$10.99</font>",
        actionType: 'open-url',
        actionBody: 'https://www.google.com',
        textSize: 'medium',
        textVAlign: 'middle',
        textHAlign: 'left',
      },
      {
        columns: 6,
        rows: 1,
        actionType: 'reply',
        actionBody: 'https://www.google.com',
        text: '<font color=#ffffff>Buy</font>',
        textSize: 'large',
        textVAlign: 'middle',
        textHAlign: 'middle',
        image: 'https://s14.postimg.org/4mmt4rw1t/Button.png',
      },
      {
        columns: 6,
        rows: 1,
        actionType: 'reply',
        actionBody: 'https://www.google.com',
        text: '<font color=#8367db>MORE DETAILS</font>',
        textSize: 'small',
        textVAlign: 'middle',
        textHAlign: 'middle',
      },
    ],
  });
  await context.sendText('Hello', {
    keyboard: {
      defaultHeight: true,
      bgColor: '#FFFFFF',
      buttons: [
        {
          columns: 6,
          rows: 1,
          bgColor: '#2db9b9',
          bgMediaType: 'gif',
          bgMedia: 'http://www.url.by/test.gif',
          bgLoop: true,
          actionType: 'open-url',
          actionBody: 'www.tut.by',
          image: 'www.tut.by/img.jpg',
          text: 'Key text',
          textVAlign: 'middle',
          textHAlign: 'center',
          textOpacity: 60,
          textSize: 'regular',
        },
      ],
    },
  });
}
