export const promptTemplate = `
You will be a travel expert, your role is to create travel itineraries based on some information that will be provided below
Choose the most popular and famous activities in that location
Please create a detailed travel itinerary with the following information:

The destination of interest is: {destination};
The travel period is: {travel_period}  
The travel budget for the trip is: {budget};

Generate a travel plan in the following JSON format: {expected_json_schema}


- Dont return \`\`\`json\`\`\`

Make sure the answer is in brazilian portuguese;

Make sure to include tips and observations about the destination in 
Make sure there are 3 accommodation recommendations in: "recommended_accommodations" and a brief description about the accommodation;
Make sure there are 3 restaurants recommendations in: "recommended_restaurants and a brief description about the restaurant;
Make sure activities at close times are relatively close together;
the zipcode in the address and the format should be "street_name, number, neighborhood, city - state".



`;

export const toolsRoadMap = {
  type: 'function',
  function: {
    name: 'generate_detailed_itinerary',
    description:
      'Generates a detailed travel itinerary including activities, lodging recommendations, and budgeting based on user inputs.',
    parameters: {
      type: 'object',
      properties: {
        days: {
          type: 'array',
          description: 'Array of day objects for each day of travel',
          items: {
            type: 'object',
            properties: {
              date_day: {
                type: 'string',
                description:
                  'The specific day the itinerary is being described',
              },
              morning: {
                type: 'array',
                description: 'List of morning activities',
                items: {
                  type: 'object',
                  properties: {
                    activity: {
                      type: 'string',
                      description: 'Name of the place to be visited',
                    },
                    description: {
                      type: 'string',
                      description:
                        'A brief description of the destination and the types of activities that can be done there',
                    },
                    address: {
                      type: 'string',
                      description: 'Activity address',
                    },
                    latitude: {
                      type: 'number',
                      description: 'Activity latitude',
                    },
                    longitude: {
                      type: 'number',
                      description: 'Activity longitude',
                    },
                    time: {
                      type: 'string',
                      description: 'Time at which the activity will take place',
                    },
                    average_cost: {
                      type: 'string',
                      description: 'Approximate cost of the activity',
                    },
                  },
                  required: [
                    'activity',
                    'address',
                    'latitude',
                    'longitude',
                    'time',
                    'description',
                    'average_cost',
                  ],
                },
              },
              tarde: {
                type: 'array',
                description: 'List of afternoon activities',
                items: {
                  type: 'object',
                  properties: {
                    activity: {
                      type: 'string',
                      description: 'Name of the place to be visited',
                    },
                    description: {
                      type: 'string',
                      description:
                        'A brief description of the destination and the types of activities that can be done there',
                    },
                    address: {
                      type: 'string',
                      description: 'Activity address',
                    },
                    latitude: {
                      type: 'number',
                      description: 'Activity latitude',
                    },
                    longitude: {
                      type: 'number',
                      description: 'Activity longitude',
                    },
                    time: {
                      type: 'string',
                      description: 'Time at which the activity will take place',
                    },
                    average_cost: {
                      type: 'string',
                      description: 'Approximate cost of the activity',
                    },
                  },
                  required: [
                    'activity',
                    'address',
                    'latitude',
                    'longitude',
                    'time',
                    'description',
                    'average_cost',
                  ],
                },
              },
              noite: {
                type: 'array',
                description: 'List of evening activities',
                items: {
                  type: 'object',
                  properties: {
                    activity: {
                      type: 'string',
                      description: 'Name of the place to be visited',
                    },
                    description: {
                      type: 'string',
                      description:
                        'A brief description of the destination and the types of activities that can be done there',
                    },
                    address: {
                      type: 'string',
                      description: 'Activity address',
                    },
                    latitude: {
                      type: 'number',
                      description: 'Activity latitude',
                    },
                    longitude: {
                      type: 'number',
                      description: 'Activity longitude',
                    },
                    time: {
                      type: 'string',
                      description: 'Time at which the activity will take place',
                    },
                    average_cost: {
                      type: 'string',
                      description: 'Approximate cost of the activity',
                    },
                  },
                  required: [
                    'activity',
                    'address',
                    'latitude',
                    'longitude',
                    'time',
                    'description',
                    'average_cost',
                  ],
                },
              },
            },
            required: ['date_day', 'morning', 'afternoon', 'night'],
          },
        },
      },
      required: ['days'],
    },
  },
};

export const toolsHost = {
  type: 'function',
  function: {
    name: 'generate_hosting_recommendations',
    description: 'Provides hosting recommendations based on user preferences.',
    parameters: {
      type: 'object',
      properties: {
        recommendations: {
          type: 'array',
          description: 'List containing 3 objects with hosting recommendations',
          items: {
            type: 'object',
            properties: {
              name: {
                type: 'string',
                description: 'Accommodation name',
              },
              description: {
                type: 'string',
                description: 'Description of accommodation',
              },
              address: {
                type: 'string',
                description: 'Accommodation address',
              },
              latitude: {
                type: 'number',
                description: 'Accommodation latitude',
              },
              longitude: {
                type: 'number',
                description: 'Accommodation longitude',
              },
              average_cost: {
                type: 'string',
                description: 'Average price per night',
              },
              type: {
                type: 'string',
                description: 'Type of accommodation',
              },
            },
            required: [
              'name',
              'address',
              'description',
              'type',
              'latitude',
              'longitude',
              'average_cost',
            ],
          },
        },
      },
      required: ['recommendations'],
    },
  },
};

export const toolsBudget = {
  type: 'function',
  function: {
    name: 'calculate_budget',
    description:
      'Calculates the average expected spending in the travel period.',
    parameters: {
      type: 'object',
      properties: {
        hosting_average_cost: {
          type: 'string',
          description: 'Average expenditure with hosting',
        },
        food_average_cost: {
          type: 'string',
          description: 'Average expenditure on food',
        },
        activities_average_cost: {
          type: 'string',
          description: 'Average expenditure with activities',
        },
        transportation_average_cost: {
          type: 'string',
          description: 'Average expenditure with transports',
        },
        total_average_cost: {
          type: 'string',
          description: 'Average total expenditure',
        },
      },
      required: [
        'hosting_average_cost',
        'food_average_cost',
        'activities_average_cost',
        'transportation_average_cost',
        'total_average_cost',
      ],
    },
  },
};

export const toolsTips = {
  type: 'function',
  function: {
    name: 'provide_travel_tips',
    description: 'Offers various tips to enhance the travel experience.',
    parameters: {
      type: 'object',
      properties: {
        tips: {
          type: 'array',
          description: 'Tips and observation about the weather, the culture, the people, etc',
          items: {
            type: 'string',
            description: 'Tip or observation about the travel and place',
          },
        },
      },
      required: ['tips'],
    },
  },
};

export const toolsRestaurants = {
  type: 'function',
  function: {
    name: 'provide_list_restaurants',
    description:
      'Provides restaurant recommendations based on user preferences.',
    parameters: {
      type: 'object',
      properties: {
        recommendations: {
          type: 'array',
          description:
            'List containing 3 objects with restaurants recommendations',
          items: {
            type: 'object',
            properties: {
              name: {
                type: 'string',
                description: 'Restaurant name',
              },
              description: {
                type: 'string',
                description: 'Description of Restaurant',
              },
              address: {
                type: 'string',
                description: 'Restaurant address',
              },
              latitude: {
                type: 'number',
                description: 'Restaurant latitude',
              },
              longitude: {
                type: 'number',
                description: 'Restaurant longitude',
              },
              average_cost: {
                type: 'string',
                description: 'Average cost per meal at the restaurant',
              },
              type: {
                type: 'string',
                description: 'Type of restaurant',
              },
            },
            required: [
              'name',
              'address',
              'description',
              'type',
              'latitude',
              'longitude',
              'average_cost',
            ],
          },
        },
      },
      required: ['recommendations'],
    },
  },
};

export const toolsSymbol = {
  type: 'function',
  function: {
    name: 'get_coin',
    description: 'Get the currency name, the coin symbol and country code',
    parameters: {
      type: 'object',
      properties: {
        local_currency: {
          type: 'string',
          description: 'Location currency',
        },
        local_currency_symbol: {
          type: 'string',
          description: 'Location currency symbol',
        },
        ISO_3166_A3_COUNTRY_CODE: {
          type: 'string',
          description:
            "Three-letter country code based on ISO 3166-1 alpha-3 standard, representing the location's country.",
        },
      },
      required: [
        'local_currency',
        'local_currency_symbol',
        'ISO_3166_A3_COUNTRY_CODE',
      ],
    },
  },
};
