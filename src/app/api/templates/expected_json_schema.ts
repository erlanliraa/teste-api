const activityTemplate = {
    "activity": "string",
    "description" :"string",
    "address": "string",
    "latitude": "string",
    "longitude": "string",
    "time": "string",
    "average_cost": "string"
};

const recommendationTemplate = {
    "name": "string",
    "description" :"string",
    "address": "string",
    "latitude": "string",
    "longitude": "string",
    "average_cost": "string",
    "type": "string"
};

const dayTemplate = {
    "date_day": "string",
    "morning": [activityTemplate],
    "afternoon": [activityTemplate],
    "night": [activityTemplate]
};

const budgetTemplate = {
    "hosting_average_cost": "string",
    "food_average_cost": "string",
    "transportation_average_cost": "string",
    "activities_average_cost": "string",
    "total_average_cost": "string"
};

export const expectedJsonSchema = {
    "ISO_3166_A3_COUNTRY_CODE": "string",
    "local_currency_symbol": "string",
    "local_currency": "string",
    "itinerary": [dayTemplate],
    "tips_and_observations": ["string"],
    "recommended_accommodations": [recommendationTemplate],
    "recommended_restaurants": [recommendationTemplate],
    "budget_for_all_days":  budgetTemplate 
};