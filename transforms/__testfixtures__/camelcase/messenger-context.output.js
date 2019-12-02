async function App(context) {
  await context.sendMessage(
    {
      text: 'Hello!',
    },
    {
      messagingType: 'RESPONSE',
    }
  );
  await context.sendAudio({ attachmentId: '55688' });
  await context.sendImage({ attachmentId: '55688' });
  await context.sendVideo({ attachmentId: '55688' });
  await context.sendFile({ attachmentId: '55688' });
  await context.sendTemplate({
    templateType: 'button',
    text: 'title',
    buttons: [
      {
        type: 'postback',
        title: 'Start Chatting',
        payload: 'USER_DEFINED_PAYLOAD',
      },
    ],
  });
  await context.sendGenericTemplate(
    [
      {
        title: "Welcome to Peter's Hats",
        imageUrl: 'https://petersfancybrownhats.com/company_image.png',
        subtitle: "We've got the right hat for everyone.",
        defaultAction: {
          type: 'web_url',
          url: 'https://peterssendreceiveapp.ngrok.io/view?item=103',
          messengerExtensions: true,
          webviewHeightRatio: 'tall',
          fallbackUrl: 'https://peterssendreceiveapp.ngrok.io/',
        },
        buttons: [
          {
            type: 'postback',
            title: 'Start Chatting',
            payload: 'DEVELOPER_DEFINED_PAYLOAD',
          },
        ],
      },
    ],
    { imageAspectRatio: 'square' }
  );
  await context.sendMediaTemplate([
    {
      mediaType: 'image',
      attachmentId: '1854626884821032',
      buttons: [
        {
          type: 'web_url',
          url: 'https://en.wikipedia.org/wiki/Rickrolling',
          title: 'View Website',
        },
      ],
    },
  ]);
  await context.sendReceiptTemplate({
    recipientName: 'Stephane Crozatier',
    orderNumber: '12345678902',
    currency: 'USD',
    paymentMethod: 'Visa 2345',
    orderUrl: 'http://petersapparel.parseapp.com/order?order_id=123456',
    timestamp: '1428444852',
    elements: [
      {
        title: 'Classic White T-Shirt',
        subtitle: '100% Soft and Luxurious Cotton',
        quantity: 2,
        price: 50,
        currency: 'USD',
        imageUrl: 'http://petersapparel.parseapp.com/img/whiteshirt.png',
      },
      {
        title: 'Classic Gray T-Shirt',
        subtitle: '100% Soft and Luxurious Cotton',
        quantity: 1,
        price: 25,
        currency: 'USD',
        imageUrl: 'http://petersapparel.parseapp.com/img/grayshirt.png',
      },
    ],
    address: {
      street1: '1 Hacker Way',
      street2: '',
      city: 'Menlo Park',
      postalCode: '94025',
      state: 'CA',
      country: 'US',
    },
    summary: {
      subtotal: 75.0,
      shippingCost: 4.95,
      totalTax: 6.19,
      totalCost: 56.14,
    },
    adjustments: [
      {
        name: 'New Customer Discount',
        amount: 20,
      },
      {
        name: '$10 Off Coupon',
        amount: 10,
      },
    ],
  });
  await context.sendAirlineBoardingPassTemplate({
    introMessage: 'You are checked in.',
    locale: 'en_US',
    boardingPass: [
      {
        passengerName: 'SMITH/NICOLAS',
        pnrNumber: 'CG4X7U',
        travelClass: 'business',
        seat: '74J',
        auxiliaryFields: [
          {
            label: 'Terminal',
            value: 'T1',
          },
          {
            label: 'Departure',
            value: '30OCT 19:05',
          },
        ],
        secondaryFields: [
          {
            label: 'Boarding',
            value: '18:30',
          },
          {
            label: 'Gate',
            value: 'D57',
          },
          {
            label: 'Seat',
            value: '74J',
          },
          {
            label: 'Sec.Nr.',
            value: '003',
          },
        ],
        logoImageUrl: 'https://www.example.com/en/logo.png',
        headerImageUrl: 'https://www.example.com/en/fb/header.png',
        qrCode: 'M1SMITH/NICOLAS  CG4X7U nawouehgawgnapwi3jfa0wfh',
        aboveBarCodeImageUrl: 'https://www.example.com/en/PLAT.png',
        flightInfo: {
          flightNumber: 'KL0642',
          departureAirport: {
            airportCode: 'JFK',
            city: 'New York',
            terminal: 'T1',
            gate: 'D57',
          },
          arrivalAirport: {
            airportCode: 'AMS',
            city: 'Amsterdam',
          },
          flightSchedule: {
            departureTime: '2016-01-02T19:05',
            arrivalTime: '2016-01-05T17:30',
          },
        },
      },
      {
        passengerName: 'JONES/FARBOUND',
        pnrNumber: 'CG4X7U',
        travelClass: 'business',
        seat: '74K',
        auxiliaryFields: [
          {
            label: 'Terminal',
            value: 'T1',
          },
          {
            label: 'Departure',
            value: '30OCT 19:05',
          },
        ],
        secondaryFields: [
          {
            label: 'Boarding',
            value: '18:30',
          },
          {
            label: 'Gate',
            value: 'D57',
          },
          {
            label: 'Seat',
            value: '74K',
          },
          {
            label: 'Sec.Nr.',
            value: '004',
          },
        ],
        logoImageUrl: 'https://www.example.com/en/logo.png',
        headerImageUrl: 'https://www.example.com/en/fb/header.png',
        qrCode: 'M1JONES/FARBOUND  CG4X7U nawouehgawgnapwi3jfa0wfh',
        aboveBarCodeImageUrl: 'https://www.example.com/en/PLAT.png',
        flightInfo: {
          flightNumber: 'KL0642',
          departureAirport: {
            airportCode: 'JFK',
            city: 'New York',
            terminal: 'T1',
            gate: 'D57',
          },
          arrivalAirport: {
            airportCode: 'AMS',
            city: 'Amsterdam',
          },
          flightSchedule: {
            departureTime: '2016-01-02T19:05',
            arrivalTime: '2016-01-05T17:30',
          },
        },
      },
    ],
  });
  await context.sendAirlineCheckinTemplate({
    introMessage: 'Check-in is available now.',
    locale: 'en_US',
    pnrNumber: 'ABCDEF',
    flightInfo: [
      {
        flightNumber: 'f001',
        departureAirport: {
          airportCode: 'SFO',
          city: 'San Francisco',
          terminal: 'T4',
          gate: 'G8',
        },
        arrivalAirport: {
          airportCode: 'SEA',
          city: 'Seattle',
          terminal: 'T4',
          gate: 'G8',
        },
        flightSchedule: {
          boardingTime: '2016-01-05T15:05',
          departureTime: '2016-01-05T15:45',
          arrivalTime: '2016-01-05T17:30',
        },
      },
    ],
    checkinUrl: 'https://www.airline.com/check-in',
  });
  await context.sendAirlineItineraryTemplate({
    introMessage: "Here's your flight itinerary.",
    locale: 'en_US',
    pnrNumber: 'ABCDEF',
    passengerInfo: [
      {
        name: 'Farbound Smith Jr',
        ticketNumber: '0741234567890',
        passengerId: 'p001',
      },
      {
        name: 'Nick Jones',
        ticketNumber: '0741234567891',
        passengerId: 'p002',
      },
    ],
    flightInfo: [
      {
        connectionId: 'c001',
        segmentId: 's001',
        flightNumber: 'KL9123',
        aircraftType: 'Boeing 737',
        departureAirport: {
          airportCode: 'SFO',
          city: 'San Francisco',
          terminal: 'T4',
          gate: 'G8',
        },
        arrivalAirport: {
          airportCode: 'SLC',
          city: 'Salt Lake City',
          terminal: 'T4',
          gate: 'G8',
        },
        flightSchedule: {
          departureTime: '2016-01-02T19:45',
          arrivalTime: '2016-01-02T21:20',
        },
        travelClass: 'business',
      },
      {
        connectionId: 'c002',
        segmentId: 's002',
        flightNumber: 'KL321',
        aircraftType: 'Boeing 747-200',
        travelClass: 'business',
        departureAirport: {
          airportCode: 'SLC',
          city: 'Salt Lake City',
          terminal: 'T1',
          gate: 'G33',
        },
        arrivalAirport: {
          airportCode: 'AMS',
          city: 'Amsterdam',
          terminal: 'T1',
          gate: 'G33',
        },
        flightSchedule: {
          departureTime: '2016-01-02T22:45',
          arrivalTime: '2016-01-03T17:20',
        },
      },
    ],
    passengerSegmentInfo: [
      {
        segmentId: 's001',
        passengerId: 'p001',
        seat: '12A',
        seatType: 'Business',
      },
      {
        segmentId: 's001',
        passengerId: 'p002',
        seat: '12B',
        seatType: 'Business',
      },
      {
        segmentId: 's002',
        passengerId: 'p001',
        seat: '73A',
        seatType: 'World Business',
        productInfo: [
          {
            title: 'Lounge',
            value: 'Complimentary lounge access',
          },
          {
            title: 'Baggage',
            value: '1 extra bag 50lbs',
          },
        ],
      },
      {
        segmentId: 's002',
        passengerId: 'p002',
        seat: '73B',
        seatType: 'World Business',
        productInfo: [
          {
            title: 'Lounge',
            value: 'Complimentary lounge access',
          },
          {
            title: 'Baggage',
            value: '1 extra bag 50lbs',
          },
        ],
      },
    ],
    priceInfo: [
      {
        title: 'Fuel surcharge',
        amount: '1597',
        currency: 'USD',
      },
    ],
    basePrice: '12206',
    tax: '200',
    totalPrice: '14003',
    currency: 'USD',
  });
  await context.sendAirlineFlightUpdateTemplate({
    introMessage: 'Your flight is delayed',
    updateType: 'delay',
    locale: 'en_US',
    pnrNumber: 'CF23G2',
    updateFlightInfo: {
      flightNumber: 'KL123',
      departureAirport: {
        airportCode: 'SFO',
        city: 'San Francisco',
        terminal: 'T4',
        gate: 'G8',
      },
      arrivalAirport: {
        airportCode: 'AMS',
        city: 'Amsterdam',
        terminal: 'T4',
        gate: 'G8',
      },
      flightSchedule: {
        boardingTime: '2015-12-26T10:30',
        departureTime: '2015-12-26T11:30',
        arrivalTime: '2015-12-27T07:30',
      },
    },
  });
  await context.sendText('Pick a color:', {
    quickReplies: [
      {
        contentType: 'text',
        title: 'Red',
        payload: 'DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_RED',
      },
    ],
  });
}
