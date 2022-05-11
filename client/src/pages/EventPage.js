import React, { useState } from 'react';
// import '../../styles/style.css';
import EventCard from '../components/EventCard';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const events = [
  {
    name: 'King Gizzard and the Lizard Wizard',
    type: 'event',
    id: 'G5vYZ4UxciPeK',
    test: false,
    url: 'https://www.ticketmaster.com/king-gizzard-and-the-lizard-wizard-berkeley-california-10-02-2022/event/1C005768ADB25093',
    locale: 'en-us',
    images: [
      {
        ratio: '16_9',
        url: 'https://s1.ticketm.net/dam/a/893/63a684a6-46a1-49ed-8f6c-352ac40b7893_1441701_RETINA_PORTRAIT_16_9.jpg',
        width: 640,
        height: 360,
        fallback: false,
      },
      {
        ratio: '16_9',
        url: 'https://s1.ticketm.net/dam/a/893/63a684a6-46a1-49ed-8f6c-352ac40b7893_1441701_EVENT_DETAIL_PAGE_16_9.jpg',
        width: 205,
        height: 115,
        fallback: false,
      },
      {
        ratio: '4_3',
        url: 'https://s1.ticketm.net/dam/a/893/63a684a6-46a1-49ed-8f6c-352ac40b7893_1441701_CUSTOM.jpg',
        width: 305,
        height: 225,
        fallback: false,
      },
      {
        ratio: '3_2',
        url: 'https://s1.ticketm.net/dam/a/893/63a684a6-46a1-49ed-8f6c-352ac40b7893_1441701_TABLET_LANDSCAPE_3_2.jpg',
        width: 1024,
        height: 683,
        fallback: false,
      },
      {
        ratio: '16_9',
        url: 'https://s1.ticketm.net/dam/a/893/63a684a6-46a1-49ed-8f6c-352ac40b7893_1441701_TABLET_LANDSCAPE_16_9.jpg',
        width: 1024,
        height: 576,
        fallback: false,
      },
      {
        ratio: '16_9',
        url: 'https://s1.ticketm.net/dam/a/893/63a684a6-46a1-49ed-8f6c-352ac40b7893_1441701_TABLET_LANDSCAPE_LARGE_16_9.jpg',
        width: 2048,
        height: 1152,
        fallback: false,
      },
      {
        ratio: '3_2',
        url: 'https://s1.ticketm.net/dam/a/893/63a684a6-46a1-49ed-8f6c-352ac40b7893_1441701_RETINA_PORTRAIT_3_2.jpg',
        width: 640,
        height: 427,
        fallback: false,
      },
      {
        ratio: '3_2',
        url: 'https://s1.ticketm.net/dam/a/893/63a684a6-46a1-49ed-8f6c-352ac40b7893_1441701_ARTIST_PAGE_3_2.jpg',
        width: 305,
        height: 203,
        fallback: false,
      },
      {
        ratio: '16_9',
        url: 'https://s1.ticketm.net/dam/a/893/63a684a6-46a1-49ed-8f6c-352ac40b7893_1441701_RECOMENDATION_16_9.jpg',
        width: 100,
        height: 56,
        fallback: false,
      },
      {
        ratio: '16_9',
        url: 'https://s1.ticketm.net/dam/a/893/63a684a6-46a1-49ed-8f6c-352ac40b7893_1441701_RETINA_LANDSCAPE_16_9.jpg',
        width: 1136,
        height: 639,
        fallback: false,
      },
    ],
    sales: {
      public: {
        startDateTime: '2019-11-15T18:00:00Z',
        startTBD: false,
        startTBA: false,
        endDateTime: '2022-10-03T01:00:00Z',
      },
      presales: [
        {
          startDateTime: '2019-11-14T18:00:00Z',
          endDateTime: '2019-11-15T06:00:00Z',
          name: 'APE Presale',
        },
        {
          startDateTime: '2019-11-13T18:00:00Z',
          endDateTime: '2019-11-15T06:00:00Z',
          name: 'Artist Presale',
        },
      ],
    },
    dates: {
      start: {
        localDate: '2022-10-02',
        localTime: '18:00:00',
        dateTime: '2022-10-03T01:00:00Z',
        dateTBD: false,
        dateTBA: false,
        timeTBA: false,
        noSpecificTime: false,
      },
      initialStartDate: {
        localDate: '2021-10-03',
        localTime: '18:00:00',
        dateTime: '2021-10-04T01:00:00Z',
      },
      timezone: 'America/Los_Angeles',
      status: {
        code: 'rescheduled',
      },
      spanMultipleDays: false,
    },
    classifications: [
      {
        primary: true,
        segment: {
          id: 'KZFzniwnSyZfZ7v7nJ',
          name: 'Music',
        },
        genre: {
          id: 'KnvZfZ7vAeA',
          name: 'Rock',
        },
        subGenre: {
          id: 'KZazBEonSMnZfZ7v6dt',
          name: 'Alternative Rock',
        },
        type: {
          id: 'KZAyXgnZfZ7v7nI',
          name: 'Undefined',
        },
        subType: {
          id: 'KZFzBErXgnZfZ7v7lJ',
          name: 'Undefined',
        },
        family: false,
      },
    ],
    promoter: {
      id: '824',
      name: 'ANOTHER PLANET',
      description: 'ANOTHER PLANET / REG / WEST',
    },
    promoters: [
      {
        id: '824',
        name: 'ANOTHER PLANET',
        description: 'ANOTHER PLANET / REG / WEST',
      },
    ],
    info: 'All events are rain or shine. This show is entirely general admission. A general admission ticket will allow you access to all areas of the Greek Theatre on a first-come, first-served basis. This event has been rescheduled to October 2, 2022. Tickets for the previous dates will be honored at the new date.',
    pleaseNote:
      'By purchasing tickets, you confirm that you will either be fully vaccinated (2 weeks past final dose) or received a negative COVID-19 test within 48hrs from entry to the event. You also agree that if you are not fully vaccinated you will wear a mask for the duration of the event. Please note that these requirements will apply to all members of your party and are subject to change at any time. COVID Warning: An inherent risk of exposure to COVID-19 exists in any place where people gather. You assume all risks, hazards, and dangers arising from or relating in any way to the risk of contracting COVID-19 or any other communicable disease or illness, whether occurring before, during, or after the event, however caused or contracted, and voluntarily waive all claims and potential claims against the Event Organizers, and their affiliated companies relating to such risks. You expressly agree to comply with all laws and the rules of the Event Organizers while attending event',
    priceRanges: [
      {
        type: 'standard',
        currency: 'USD',
        min: 45.0,
        max: 45.0,
      },
    ],
    seatmap: {
      staticUrl:
        'https://maps.ticketmaster.com/maps/geometry/3/event/1C005768ADB25093/staticImage?type=png&systemId=HOST',
    },
    accessibility: {
      info: 'The venue can accommodate wheelchair and limited mobility patrons.  Please select Wheelchair Accessible for the type of accessible ticket below, regardless of your specific need, and include any companions (up to three) in the ticket quantity.  Seats for additional companions will need to be purchased from standard inventory.',
      ticketLimit: 4,
    },
    ticketLimit: {
      info: 'There is an 8 ticket limit per household.',
    },
    ageRestrictions: {
      legalAgeEnforced: false,
    },
    code: 'NCA:EGT0418',
    _links: {
      self: {
        href: '/discovery/v2/events/G5vYZ4UxciPeK?locale=en-us',
      },
      attractions: [
        {
          href: '/discovery/v2/attractions/K8vZ9173QDf?locale=en-us',
        },
        {
          href: '/discovery/v2/attractions/K8vZ91790T7?locale=en-us',
        },
      ],
      venues: [
        {
          href: '/discovery/v2/venues/KovZpZAFadlA?locale=en-us',
        },
      ],
    },
    _embedded: {
      venues: [
        {
          name: 'Greek Theatre-U.C. Berkeley',
          type: 'venue',
          id: 'KovZpZAFadlA',
          test: false,
          url: 'https://www.ticketmaster.com/greek-theatreuc-berkeley-tickets-berkeley/venue/229421',
          locale: 'en-us',
          images: [
            {
              ratio: '16_9',
              url: 'https://s1.ticketm.net/dbimages/5944v.jpg',
              width: 205,
              height: 115,
              fallback: false,
            },
            {
              ratio: '3_1',
              url: 'https://s1.ticketm.net/dam/v/e72/ddf07b85-b32b-4b75-8818-93c23e58be72_380541_SOURCE.jpg',
              width: 1500,
              height: 500,
              fallback: false,
            },
          ],
          postalCode: '94720',
          timezone: 'America/Los_Angeles',
          city: {
            name: 'Berkeley',
          },
          state: {
            name: 'California',
            stateCode: 'CA',
          },
          country: {
            name: 'United States Of America',
            countryCode: 'US',
          },
          address: {
            line1: '2001 Gayley Road',
          },
          location: {
            longitude: '-122.2555418',
            latitude: '37.8740742',
          },
          markets: [
            {
              name: 'N. California/N. Nevada',
              id: '41',
            },
          ],
          dmas: [
            {
              id: 250,
            },
            {
              id: 273,
            },
            {
              id: 282,
            },
            {
              id: 341,
            },
            {
              id: 368,
            },
            {
              id: 374,
            },
            {
              id: 382,
            },
          ],
          social: {
            twitter: {
              handle: '@apeconcerts',
            },
          },
        },
      ],
    },
  },
];

const styles = {
  events: {
    padding: 20,
    background: 'red',
    borderStyle: 'solid',
    borderWdith: 15,
    borderColor: 'black',
    color: 'white',
  },
};

function EventPage() {
  return (
    <div>
      <EventCard events={events} />
    </div>
  );
}

export default EventPage;
