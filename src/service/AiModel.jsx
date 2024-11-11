    import { GoogleGenerativeAI } from "@google/generative-ai";
  
  const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
   export const chatSession = model.startChat({
      generationConfig,
   
      history: [
        {
          role: "user",
          parts: [
            {text: "Generate Travel Plan for Location: Las Vegas, for 3 Days for Couple with a Cheap budget ,Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, rating, Time travel each of the location for 3 days with each day plan with best time to visit in JSON format."},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"hotels\": [\n    {\n      \"hotelName\": \"The D Las Vegas\",\n      \"hotelAddress\": \"301 Fremont Street, Las Vegas, NV 89101\",\n      \"price\": \"$60-$100/night\",\n      \"hotelImageUrl\": \"https://www.thed.com/wp-content/uploads/2022/09/The-D-Las-Vegas-Exterior-Wide-Shot.jpg\",\n      \"geoCoordinates\": \"36.1699, -115.1423\",\n      \"rating\": \"4.0 stars\",\n      \"description\": \"A budget-friendly hotel located in the heart of downtown Las Vegas, offering a vibrant casino, live entertainment, and a rooftop pool.\"\n    },\n    {\n      \"hotelName\": \"Plaza Hotel & Casino\",\n      \"hotelAddress\": \"1 South Main Street, Las Vegas, NV 89101\",\n      \"price\": \"$70-$120/night\",\n      \"hotelImageUrl\": \"https://www.plazahotelcasino.com/wp-content/uploads/2021/05/Plaza-Exterior.jpg\",\n      \"geoCoordinates\": \"36.1689, -115.1418\",\n      \"rating\": \"4.5 stars\",\n      \"description\": \"A historic hotel with modern amenities, offering a casino, dining options, and live entertainment in the heart of Fremont Street.\"\n    },\n    {\n      \"hotelName\": \"Golden Nugget Las Vegas\",\n      \"hotelAddress\": \"129 E Fremont Street, Las Vegas, NV 89101\",\n      \"price\": \"$80-$150/night\",\n      \"hotelImageUrl\": \"https://www.goldennugget.com/las-vegas/media/images/GNLV-Hero-Image-04-28-2022.jpg\",\n      \"geoCoordinates\": \"36.1687, -115.1411\",\n      \"rating\": \"4.0 stars\",\n      \"description\": \"A luxurious hotel with a focus on entertainment, featuring a casino, a world-class aquarium, and live music.\"\n    },\n    {\n      \"hotelName\": \"The Orleans Hotel & Casino\",\n      \"hotelAddress\": \"4500 W Tropicana Ave, Las Vegas, NV 89103\",\n      \"price\": \"$50-$80/night\",\n      \"hotelImageUrl\": \"https://www.orleanscasino.com/media/images/hero-images/orleans-hotel-casino-hero-image-02-27-2023.jpg\",\n      \"geoCoordinates\": \"36.0989, -115.1984\",\n      \"rating\": \"3.5 stars\",\n      \"description\": \"A spacious hotel with a large casino, various dining options, and a pool complex, located away from the Strip.\"\n    }\n  ],\n  \"itinerary\": [\n    {\n      \"day\": 1,\n      \"plan\": [\n        {\n          \"placeName\": \"Fremont Street Experience\",\n          \"placeDetails\": \"Walk under the iconic canopy of lights, enjoy free live entertainment, and soak up the vibrant atmosphere.\",\n          \"placeImageUrl\": \"https://www.visitlasvegas.com/media/10731/freemont-street-experience-canopy-lights-las-vegas-nevada.jpg\",\n          \"geoCoordinates\": \"36.1692, -115.1424\",\n          \"ticketPricing\": \"Free\",\n          \"rating\": \"4.5 stars\",\n          \"time\": \"Evening (7:00 PM - 10:00 PM)\"\n        },\n        {\n          \"placeName\": \"The D Las Vegas\",\n          \"placeDetails\": \"Enjoy a budget-friendly dinner and drinks at one of the many casual dining options.\",\n          \"placeImageUrl\": \"https://www.thed.com/wp-content/uploads/2022/09/The-D-Las-Vegas-Exterior-Wide-Shot.jpg\",\n          \"geoCoordinates\": \"36.1699, -115.1423\",\n          \"ticketPricing\": \"N/A\",\n          \"rating\": \"4.0 stars\",\n          \"time\": \"Dinner (8:00 PM - 10:00 PM)\"\n        }\n      ]\n    },\n    {\n      \"day\": 2,\n      \"plan\": [\n        {\n          \"placeName\": \"The Strip\",\n          \"placeDetails\": \"Explore the iconic Strip, walk along the sidewalks, admire the lights, and take photos.\",\n          \"placeImageUrl\": \"https://www.visitlasvegas.com/media/14705/las-vegas-strip-at-night-view-from-above.jpg\",\n          \"geoCoordinates\": \"36.1146, -115.1729\",\n          \"ticketPricing\": \"Free\",\n          \"rating\": \"5.0 stars\",\n          \"time\": \"Afternoon (1:00 PM - 5:00 PM)\"\n        },\n        {\n          \"placeName\": \"Bellagio Fountains\",\n          \"placeDetails\": \"Watch the spectacular water and music show in front of the Bellagio Hotel.\",\n          \"placeImageUrl\": \"https://www.visitlasvegas.com/media/8627/bellagio-fountains-show-las-vegas.jpg\",\n          \"geoCoordinates\": \"36.1123, -115.1734\",\n          \"ticketPricing\": \"Free\",\n          \"rating\": \"4.5 stars\",\n          \"time\": \"Evening (8:00 PM - 9:00 PM)\"\n        },\n        {\n          \"placeName\": \"Linq Promenade\",\n          \"placeDetails\": \"Enjoy a casual dinner and drinks at one of the many restaurants along the promenade.\",\n          \"placeImageUrl\": \"https://www.caesars.com/content/dam/caesars/las-vegas/linq-promenade/linq-promenade-hero-mobile.jpg\",\n          \"geoCoordinates\": \"36.1175, -115.1715\",\n          \"ticketPricing\": \"N/A\",\n          \"rating\": \"4.0 stars\",\n          \"time\": \"Dinner (9:00 PM - 11:00 PM)\"\n        }\n      ]\n    },\n    {\n      \"day\": 3,\n      \"plan\": [\n        {\n          \"placeName\": \"Hoover Dam\",\n          \"placeDetails\": \"Take a day trip to the iconic Hoover Dam, marvel at its engineering feat, and enjoy scenic views.\",\n          \"placeImageUrl\": \"https://www.visitlasvegas.com/media/3935/hoover-dam-las-vegas-nevada.jpg\",\n          \"geoCoordinates\": \"36.0045, -114.9884\",\n          \"ticketPricing\": \"$30/person\",\n          \"rating\": \"4.5 stars\",\n          \"time\": \"Morning (9:00 AM - 1:00 PM)\"\n        },\n        {\n          \"placeName\": \"Red Rock Canyon National Conservation Area\",\n          \"placeDetails\": \"Explore the stunning landscapes of Red Rock Canyon, hike scenic trails, and enjoy the beauty of nature.\",\n          \"placeImageUrl\": \"https://www.nps.gov/redr/planyourvisit/images/redrock_canyon_panorama-1.jpg\",\n          \"geoCoordinates\": \"36.1079, -115.2950\",\n          \"ticketPricing\": \"$15/vehicle\",\n          \"rating\": \"4.5 stars\",\n          \"time\": \"Afternoon (2:00 PM - 5:00 PM)\"\n        }\n      ]\n    }\n  ]\n}\n```"},
          ],
        },
      ],
    });
  
 
  
  
