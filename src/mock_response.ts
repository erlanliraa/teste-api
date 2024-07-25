import { ItineraryResponse } from './types';

export const mocked_response: ItineraryResponse = {
  budget_for_all_days: {
    activities_average_cost: 'R$ 2050',
    food_average_cost: 'R$ 2800',
    hosting_average_cost: 'R$ 3850',
    total_average_cost: 'R$ 10200',
    transportation_average_cost: 'R$ 1500',
  },
  itinerary: [
    {
      afternoon: [
        {
          activity: 'Visit to Alto da Sé',
          address: 'Rua Bispo Coutinho, Olinda - PE',
          average_cost: 'Free',
          description:
            'Visit the Alto da Sé, offering stunning views of Olinda and Recife.',
          latitude: '-7.995961',
          longitude: '-34.844409',
          time: '13:00 - 16:00',
        },
      ],
      date_day: '2024-07-26',
      morning: [
        {
          activity: 'Nas ladeiras de Olinda',
          address: 'Olinda, PE',
          average_cost: 'Free',
          description:
            'Explore the historic city of Olinda, a UNESCO World Heritage Site known for its colonial architecture and vibrant culture.',
          latitude: '-7.993157',
          longitude: '-34.842056',
          time: '11:00 - 12:00',
        },
        {
          activity: 'Nas ladeiras de Olinda2',
          address: 'Olindas, PE',
          average_cost: 'Free',
          description:
            'Explore the historic city of Olinda, a UNESCO World Heritage Site known for its colonial architecture and vibrant culture.',
          latitude: '-7.993157',
          longitude: '-34.842056',
          time: '11:00 - 12:00',
        },
      ],
      night: [
        {
          activity: 'Dinner at Oficina do Sabor',
          address: 'Rua do Amparo, 335, Amparo, Olinda - PE',
          average_cost: 'R$ 120',
          description:
            "Enjoy a delicious meal at one of Olinda's most famous restaurants, known for its creative cuisine.",
          latitude: '-7.995601',
          longitude: '-34.849793',
          time: '19:00 - 21:00',
        },
      ],
    },
    {
      afternoon: [
        {
          activity: 'Parque Dona Lindu',
          address: 'Avenida Boa Viagem, Recife - PE',
          average_cost: 'Free',
          description:
            'A beautiful park located near Boa Viagem Beach, perfect for a relaxing afternoon.',
          latitude: '-8.122918',
          longitude: '-34.892267',
          time: '13:00 - 16:00',
        },
      ],
      date_day: '2024-07-22',
      morning: [
        {
          activity: 'Boa Viagem Beach',
          address: 'Avenida Boa Viagem, Recife - PE',
          average_cost: 'Free',
          description:
            'Relax and enjoy the sun at Boa Viagem Beach, one of the most famous beaches in Recife.',
          latitude: '-8.120009',
          longitude: '-34.892841',
          time: '09:00 - 12:00',
        },
      ],
      night: [
        {
          activity: 'Live Music at UK Pub',
          address: 'Rua Francisco da Cunha, 165, Boa Viagem, Recife - PE',
          average_cost: 'R$ 50',
          description:
            'Enjoy live music and drinks at the famous UK Pub in Boa Viagem.',
          latitude: '-8.113882',
          longitude: '-34.894570',
          time: '20:00 - 23:00',
        },
      ],
    },
    {
      afternoon: [
        {
          activity: 'Shopping at RioMar Recife',
          address: 'Avenida República do Líbano, 251, Pina, Recife - PE',
          average_cost: 'R$ 50',
          description:
            'Enjoy some shopping and dining at RioMar, one of the largest shopping malls in Recife.',
          latitude: '-8.081352',
          longitude: '-34.893089',
          time: '13:00 - 16:00',
        },
      ],
      date_day: '2024-07-27',
      morning: [
        {
          activity: 'Casa da Cultura',
          address: 'Rua Floriano Peixoto, 905, Santo Antônio, Recife - PE',
          average_cost: 'Free',
          description:
            'Visit the Casa da Cultura, a cultural center housed in a former prison, offering local crafts and souvenirs.',
          latitude: '-8.063003',
          longitude: '-34.878134',
          time: '09:00 - 12:00',
        },
      ],
      night: [
        {
          activity: 'Final Night Dinner at Parraxaxá',
          address: 'Rua Baltazar Pereira, 32, Boa Viagem, Recife - PE',
          average_cost: 'R$ 80',
          description:
            'Celebrate the last night of your trip with a traditional northeastern Brazilian feast.',
          latitude: '-8.113105',
          longitude: '-34.894341',
          time: '19:00 - 21:00',
        },
      ],
    },
    {
      afternoon: [
        {
          activity: 'Museu Cais do Sertão',
          address: 'Avenida Alfredo Lisboa, Recife - PE',
          average_cost: 'R$ 10',
          description:
            'A museum dedicated to the culture and history of the Sertão region of Brazil.',
          latitude: '-8.060658',
          longitude: '-34.871101',
          time: '13:00 - 16:00',
        },
      ],
      date_day: '2024-07-21',
      morning: [
        {
          activity: 'Visiting Recife Antigo',
          address: 'Rua do Bom Jesus, Recife - PE',
          average_cost: 'Free',
          description:
            'Explore the historic neighborhood of Recife Antigo, known for its colonial architecture, cultural sites, and vibrant atmosphere.',
          latitude: '-8.062015',
          longitude: '-34.872622',
          time: '09:00 - 12:00',
        },
      ],
      night: [
        {
          activity: 'Dinner at Restaurante Leite',
          address: 'Praça Joaquim Nabuco, 147, Santo Antônio, Recife - PE',
          average_cost: 'R$ 150',
          description:
            'Fine dining at one of the oldest and most prestigious restaurants in Recife.',
          latitude: '-8.064854',
          longitude: '-34.877063',
          time: '19:00 - 21:00',
        },
      ],
    },
    {
      afternoon: [
        {
          activity: 'Marco Zero Square',
          address: 'Avenida Alfredo Lisboa, Recife - PE',
          average_cost: 'Free',
          description:
            'Visit the landmark square that marks the starting point of Recife, with various cultural attractions nearby.',
          latitude: '-8.064235',
          longitude: '-34.871139',
          time: '13:00 - 16:00',
        },
      ],
      date_day: '2024-07-25',
      morning: [
        {
          activity: 'Catamaran Tour',
          address: 'Cais das Cinco Pontas, Recife - PE',
          average_cost: 'R$ 60',
          description:
            'Take a catamaran tour through the rivers and canals of Recife, enjoying scenic views of the city.',
          latitude: '-8.065090',
          longitude: '-34.877281',
          time: '09:00 - 12:00',
        },
      ],
      night: [
        {
          activity: 'Nightlife at Downtown Pub',
          address: 'Rua Vigário Tenório, 105, Recife Antigo, Recife - PE',
          average_cost: 'R$ 50',
          description:
            "Experience Recife's nightlife at Downtown Pub, a popular spot for music and dancing.",
          latitude: '-8.063139',
          longitude: '-34.871158',
          time: '21:00 - 01:00',
        },
      ],
    },
    {
      afternoon: [
        {
          activity: 'Jardim Botânico do Recife',
          address: 'Avenida Caxangá, 3274, Dois Irmãos, Recife - PE',
          average_cost: 'Free',
          description:
            'Explore the beautiful botanical gardens and enjoy nature at its best.',
          latitude: '-8.028405',
          longitude: '-34.934944',
          time: '13:00 - 16:00',
        },
      ],
      date_day: '2024-07-23',
      morning: [
        {
          activity: 'Instituto Ricardo Brennand',
          address: 'Alameda Antônio Brennand, Várzea, Recife - PE',
          average_cost: 'R$ 30',
          description:
            'A unique museum featuring a vast collection of historical artifacts, art, and medieval weaponry.',
          latitude: '-8.048552',
          longitude: '-34.964818',
          time: '09:00 - 12:00',
        },
      ],
      night: [
        {
          activity: 'Dinner at Chica Pitanga',
          address: 'Rua Petrolina, 19, Boa Viagem, Recife - PE',
          average_cost: 'R$ 80',
          description:
            'Enjoy traditional Brazilian cuisine in a cozy and charming setting.',
          latitude: '-8.113105',
          longitude: '-34.894341',
          time: '19:00 - 21:00',
        },
      ],
    },
    {
      afternoon: [
        {
          activity: 'Natural Pools of Porto de Galinhas',
          address: 'Porto de Galinhas, Ipojuca - PE',
          average_cost: 'R$ 30',
          description:
            'Swim in the natural pools formed by coral reefs, a unique and breathtaking experience.',
          latitude: '-8.497247',
          longitude: '-35.009364',
          time: '13:00 - 16:00',
        },
      ],
      date_day: '2024-07-24',
      morning: [
        {
          activity: 'Praia de Porto de Galinhas',
          address: 'Porto de Galinhas, Ipojuca - PE',
          average_cost: 'R$ 50',
          description:
            'A day trip to one of the most beautiful beaches in Brazil, located about an hour south of Recife.',
          latitude: '-8.497247',
          longitude: '-35.009364',
          time: '08:00 - 12:00',
        },
      ],
      night: [
        {
          activity: 'Dinner at Beijupirá',
          address: 'Rua Beijupirá, Porto de Galinhas, Ipojuca - PE',
          average_cost: 'R$ 100',
          description:
            'Dine at a renowned restaurant in Porto de Galinhas, offering delicious seafood and local dishes.',
          latitude: '-8.497247',
          longitude: '-35.009364',
          time: '19:00 - 21:00',
        },
      ],
    },
  ],
  local_currency: 'BRL',
  local_currency_symbol: 'R$',
  recommended_accommodations: [
    {
      address: 'Avenida Boa Viagem, 5426, Boa Viagem, Recife - PE',
      average_cost: 'R$ 600 per night',
      description:
        'A luxurious hotel located right on Boa Viagem Beach, offering stunning ocean views and top-notch amenities.',
      latitude: '-8.121936',
      longitude: '-34.897539',
      name: 'Hotel Atlante Plaza',
      type: 'Hotel',
    },
    {
      address: 'Avenida Boa Viagem, 1906, Boa Viagem, Recife - PE',
      average_cost: 'R$ 550 per night',
      description:
        'A modern hotel with excellent facilities and a prime location on Boa Viagem Beach.',
      latitude: '-8.111233',
      longitude: '-34.895724',
      name: 'Radisson Recife',
      type: 'Hotel',
    },
    {
      address: 'Rua do Amparo, 199, Amparo, Olinda - PE',
      average_cost: 'R$ 400 per night',
      description:
        'A charming guesthouse located in the historic city of Olinda, offering a unique and authentic experience.',
      latitude: '-7.993647',
      longitude: '-34.850084',
      name: 'Pousada do Amparo',
      type: 'Guesthouse',
    },
  ],
  recommended_restaurants: [
    {
      address: 'Praça Joaquim Nabuco, 147, Santo Antônio, Recife - PE',
      average_cost: 'R$ 150 per person',
      description:
        'One of the oldest and most prestigious restaurants in Recife, offering fine dining and exquisite cuisine.',
      latitude: '-8.064854',
      longitude: '-34.877063',
      name: 'Restaurante Leite',
      type: 'Fine Dining',
    },
    {
      address: 'Rua Petrolina, 19, Boa Viagem, Recife - PE',
      average_cost: 'R$ 80 per person',
      description:
        'A cozy restaurant known for its delicious traditional Brazilian dishes and friendly atmosphere.',
      latitude: '-8.113105',
      longitude: '-34.894341',
      name: 'Chica Pitanga',
      type: 'Traditional Cuisine',
    },
    {
      address: 'Rua do Amparo, 335, Amparo, Olinda - PE',
      average_cost: 'R$ 120 per person',
      description:
        'A renowned restaurant in Olinda, known for its creative and innovative dishes that blend local flavors with modern cuisine.',
      latitude: '-7.995601',
      longitude: '-34.849793',
      name: 'Oficina do Sabor',
      type: 'Creative Cuisine',
    },
  ],
  tips_and_observations: [
    'Recife has a tropical climate, so expect warm temperatures and occasional rain.',
    'The local culture is rich and vibrant, with a strong emphasis on music, dance, and festivals.',
    'The people of Recife are known for their warmth and hospitality.',
  ],
};
