// ProductsData.js

const genders = ["male", "female", "both"];
const products = [
  {
    id: 1,
    label: "shoe",
    category: "sports",
    gender: genders[2],
    name: "CULTSPORT",
    short: "CULTSPORT Speedster Mens Running Shoes | Enhanced Grip | Breathable | Cushioned Sole | Running Shoes",
    about: ` 
    Sole: Rubber 
    Closure: Lace-Up
    Fit Type: Regular
    Shoe Width: Medium
    BREATHABLE textile UPPER: The high-quality stretchable textile upper allows your feet to breathe, keeping them cool and comfortable during workouts while the Sockfit construction makes slipping in and out a breeze.
    COMPRESSED EVA MIDSOLE: The compressed EVA midsole is lightweight, highly cushioned, and flexible offering the right balance of comfort and support.
    CUSHIONED FLEXIBILITY: Experience plush cushioning in the front part of the midsole, providing flexible comfort and superior energy return. Additionally, a harder insert in the heel offers added stability.
    GERMAN-ENGINEERED INSOLE: These runner shoes for men feature a German-engineered insole made from ELASTOPAN material in collaboration with BASF which ensures the utmost comfort, cushioning, and stability.
    DURABLE CARBON RUBBER OUTSOLE: The high-quality carbon rubber outsole in these cult.sport shoes are built for durability, offering enhanced grip, exceptional traction, and flexibility.
    MULTI-PURPOSE USAGE: These shoes are versatile and can be worn for a wide range of activities including running, walking, gym workouts, aerobics, Zumba, S&C, cycling, HRX workout, functional fitness, badminton, volleyball, hand-ball, kho-kho, cricket, golf, trekking, strength training, cross-training, hiking, recreational tennis, other casual sports, hockey, marathon, CrossFit, party and hangouts, outdoor activities, travel, office, and everyday wear. `,
    description: "Need something for your daily runs or a pair that provides comfort all day long? Look no further. Introducing the Cultsport Speedster. With a German engineered insole, these runners give you the cushioning and rebound you need. An 8mm heel to toe drop, and an overall combination of durability and support these shoes make every run a smooth one. A must-have for the everyday athlete!",
    imageURL: "/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg",
    imagess: ["/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg", "/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg", "/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg"],
    originalPrice: 72 + "$",
    price: parseInt(72 * (1 - parseFloat("55") / 100)),
    discount: "55%",
    EMI: "starts at ₹130. No Cost EMI available",
    offers: ["NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE"],
    delivery: "FREE delivery",
    deliveryDate: "2 days",
    clientName: "Cocoblu Retail",
    productQuantity: 20,
    DeleveryCharges: 20,
  },
  {
    id: 2,
    label: "shoe",
    category: "sports",
    gender: genders[0],
    name: "Bourge",
    short: "Mens Vega-m3 Running Shoes",
    about: "",
    description:
      "Bourge is the leading manufacturer of sports shoes, school shoes, Casual Shoes, sliders, sandals, and slippers, both for men’s & women’s. Bourge offers performance and sport-inspired lifestyle products in categories such as running, Training, and Fitness. Using high technology and design innovation, Bourge continually creates what is aspired and not just what is necessary. All Bourge products are meant to deliver high performance, durability, and great comfort. This Bourge sports Running shoe for men is extremely stylish. It has an eva bounce-back sole which gives extreme comfort during walking, jogging, running, and in extreme playing conditions. This product has a soft foam insert for amazing comfort. Bourge has a wide range of floaters, of which one can choose as per occasion. Apart from trendy, it’s also comfortable, has good breathability and grip.",
    imageURL: "/images/Bourge Mens Vega-m3 Running Shoes.jpg",
    imagess: ["/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg", "/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg", "/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg"],
    originalPrice: 18 + "$",
    discount: "67%",
    price: parseInt(18 * (1 - parseFloat("67") / 100)),
    EMI: "starts at ₹130. No Cost EMI available",
    offers: ["NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE"],
    delivery: "FREE delivery",
    deliveryDate: "2 days",
    clientName: "Cocoblu Retail",
    productQuantity: 50,
    DeleveryCharges: "Free",
  },
  {
    id: 3,
    label: "shoe",
    category: "sports",
    gender: genders[0],
    name: "Skechers",
    short: "Skechers Men's GOrun Consistent-Athletic",
    description:
      "Skechers GOrun Consistent is a well-cushioned lace up runner and trainer perfect for a variety of workouts in and out of the gym. The responsive ULTRA GO cushioning midsole and a smooth leather and mesh fabric upper offer an incredibly responsive workout shoe. The company's success stems from it's high quality, diversified, and affordable product line that meets consumers' Various lifestyle needs. Since it's inception in 1992, the Skechers diverse product offering has grown from utility style boots to include seven Skechers brands and five uniquely branded fashion lines for men and women. Skechers is an award-winning global leader in lifestyle footwear offering shoes that appeal to trend-savvy men, women and kids everywhere. The brand's styles include the latest innovative athletic, casual and fashion sneakers as well as sandals and boots—with many collections featuring Skechers air-cooled memory foam insoles for added comfort. Plus, Skechers offers a range of slip-resistant work FOOTWEAR for men and women, as well as cool, fun, playful and lighted styles that boys and girls love. Always ahead of the fashion curve, Skechers has made its sport, casual and dress casual shoes essential to every closet.",
    imageURL: "/images/Skechers Men's GOrun Consistent-Athletic Workout Running Walking Shoe Sneaker with Air Cooled Foam.jpg",
    imagess: ["/images/Skechers Men's GOrun Consistent-Athletic Workout Running Walking Shoe Sneaker with Air Cooled Foam.jpg", "/images/Skechers Men's GOrun Consistent-Athletic Workout Running Walking Shoe Sneaker with Air Cooled Foam.jpg", "/images/Skechers Men's GOrun Consistent-Athletic Workout Running Walking Shoe Sneaker with Air Cooled Foam.jpg"],
    originalPrice: 55 + "$",
    discount: "27%",
    price: parseInt(55 * (1 - parseFloat("27") / 100)),
    EMI: "starts at ₹130. No Cost EMI available",
    offers: ["NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE"],
    delivery: "FREE delivery",
    deliveryDate: "2 days",
    clientName: "Cocoblu Retail",
    productQuantity: 50,
    DeleveryCharges: 20,
  },
  {
    id: 4,
    label: "shoe",
    category: "sports",
    gender: genders[2],
    name: "Skechers",
    short: "Skechers Men's Moreno Canvas Oxford Shoe",
    description:
      "Skechers GOrun Consistent is a well-cushioned lace up runner and trainer perfect for a variety of workouts in and out of the gym. The responsive ULTRA GO cushioning midsole and a smooth leather and mesh fabric upper offer an incredibly responsive workout shoe. The company's success stems from it's high quality, diversified, and affordable product line that meets consumers' Various lifestyle needs. Since it's inception in 1992, the Skechers diverse product offering has grown from utility style boots to include seven Skechers brands and five uniquely branded fashion lines for men and women. Skechers is an award-winning global leader in lifestyle footwear offering shoes that appeal to trend-savvy men, women and kids everywhere. The brand's styles include the latest innovative athletic, casual and fashion sneakers as well as sandals and boots—with many collections featuring Skechers air-cooled memory foam insoles for added comfort. Plus, Skechers offers a range of slip-resistant work FOOTWEAR for men and women, as well as cool, fun, playful and lighted styles that boys and girls love. Always ahead of the fashion curve, Skechers has made its sport, casual and dress casual shoes essential to every closet.",
    imageURL: "/images/Lace Up Canvas.jpg",
    imagess: ["/images/Lace Up Canvas.jpg", "/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg", "/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg", "/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg"],

    originalPrice: 70 + "$",
    discount: "34%",
    price: parseInt(70 * (1 - parseFloat("34") / 100)),
    EMI: "starts at ₹130. No Cost EMI available",
    offers: ["NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE"],
    delivery: "FREE delivery",
    deliveryDate: "2 days",
    clientName: "Cocoblu Retail",
    productQuantity: 50,
    DeleveryCharges: 20,
  },
  {
    id: 5,
    label: "shoe",
    category: "sports",
    gender: genders[2],
    name: "DREAM",
    short: "DREAM PAIRS Women's Debbie Mid Wedge Heel",
    description: "Lace Up Canvas",
    imageURL: "/images/Dream Shoe.jpg",
    imagess: ["/images/Dream Shoe.jpg", "/images/Lace Up Canvas.jpg", "/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg", "/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg", "/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg"],

    originalPrice: 69 + "$",
    discount: "43%",
    price: parseInt(69 * (1 - parseFloat("43") / 100)),
    EMI: "starts at ₹130. No Cost EMI available",
    offers: ["NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE"],
    delivery: "FREE delivery",
    deliveryDate: "2 days",
    clientName: "Cocoblu Retail",
    productQuantity: 50,
    DeleveryCharges: "Free",
  },
  {
    id: 6,
    label: "smart watch",
    category: "watch",
    gender: genders[2],
    name: "AGPTEK",
    short: "Smartwatch for Android and iOS Phones",
    description: "AGPTEK IP68 Waterproof Smartwatch Rose Gold Case with Pink Band YOUR TRAINING COACH- Get a personal fitness coach on your wrist for free, to help you know more about yourself and lead a healthier lifestyle! ITS ROUND, ITS CLASSIC- The bright, round full-touch display with an elegant watch face, brings an outstanding and more comfortable viewing experience.",
    imageURL: "/images/AGPTEKSmartWatch.jpg",
    imagess: ["/images/AGPTEKSmartWatch.jpg", "/images/Dream Shoe.jpg", "/images/Lace Up Canvas.jpg", "/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg", "/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg", "/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg"],

    originalPrice: 62 + "$",
    discount: "43%",
    price: parseInt(62 * (1 - parseFloat("43") / 100)),
    EMI: "starts at ₹130. No Cost EMI available",
    offers: ["NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE"],
    delivery: "FREE delivery",
    deliveryDate: "2 days",
    clientName: "Cocoblu Retail",
    productQuantity: 50,
    DeleveryCharges: 20,
  },
  {
    id: 7,
    label: "smart watch",
    category: "watch",
    gender: genders[2],
    name: "Blackview",
    short: "Blackview for Android Phones and iOS Phones",
    description: "Balck view",
    imageURL: "/images/Blackview Smart Watch.jpg",
    imagess: ["/images/Blackview Smart Watch.jpg", "/images/AGPTEKSmartWatch.jpg", "/images/Dream Shoe.jpg", "/images/Lace Up Canvas.jpg", "/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg", "/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg", "/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg"],

    originalPrice: 62 + "$",
    discount: "43%",
    price: parseInt(62 * (1 - parseFloat("43") / 100)),
    EMI: "starts at ₹130. No Cost EMI available",
    offers: ["NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE"],
    delivery: "FREE delivery",
    deliveryDate: "2 days",
    clientName: "Cocoblu Retail",
    productQuantity: 50,
    DeleveryCharges: 20,
  },
  {
    id: 8,
    label: "smart watch",
    category: "watch",
    gender: genders[2],
    name: "Blackview",
    short: "Blackview for Android Phones and iOS Phones",
    description: "Balck view",
    imageURL: "/images/Blackview Smart Watch.jpg",
    imagess: [
      "/images/Blackview Smart Watch.jpg",
      "/images/Blackview Smart Watch.jpg",
      "/images/AGPTEKSmartWatch.jpg",
      "/images/Dream Shoe.jpg",
      "/images/Lace Up Canvas.jpg",
      "/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg",
      "/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg",
      "/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg",
    ],

    originalPrice: 62 + "$",
    discount: "43%",
    price: parseInt(62 * (1 - parseFloat("43") / 100)),
    EMI: "starts at ₹130. No Cost EMI available",
    offers: ["NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE"],
    delivery: "FREE delivery",
    deliveryDate: "2 days",
    clientName: "Cocoblu Retail",
    productQuantity: 50,
    DeleveryCharges: "Free",
  },
  {
    id: 9,
    label: "shoe",
    category: "sports",
    gender: genders[2],
    name: "CULTSPORT",
    short: "Speedster Mens Running Shoes",
    description: "Need something for your daily runs or a pair that provides comfort all day long? Look no further. Introducing the Cultsport Speedster. With a German engineered insole, these runners give you the cushioning and rebound you need. An 8mm heel to toe drop, and an overall combination of durability and support these shoes make every run a smooth one. A must-have for the everyday athlete!",
    imageURL: "/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg",
    imagess: [
      "/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg",
      "/images/Blackview Smart Watch.jpg",
      "/images/Blackview Smart Watch.jpg",
      "/images/AGPTEKSmartWatch.jpg",
      "/images/Dream Shoe.jpg",
      "/images/Lace Up Canvas.jpg",
      "/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg",
      "/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg",
      "/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg",
    ],
    originalPrice: 72 + "$",
    discount: "55%",
    price: parseInt(72 * (1 - parseFloat("55") / 100)),
    EMI: "starts at ₹130. No Cost EMI available",
    offers: ["NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE"],
    delivery: "FREE delivery",
    deliveryDate: "2 days",
    clientName: "Cocoblu Retail",
    productQuantity: 50,
    DeleveryCharges: "Free",
  },
  {
    id: 10,
    label: "shoe",
    category: "sports",
    gender: genders[2],
    name: "Bourge",
    short: "Mens Vega-m3 Running Shoes",
    description:
      "Bourge is the leading manufacturer of sports shoes, school shoes, Casual Shoes, sliders, sandals, and slippers, both for men’s & women’s. Bourge offers performance and sport-inspired lifestyle products in categories such as running, Training, and Fitness. Using high technology and design innovation, Bourge continually creates what is aspired and not just what is necessary. All Bourge products are meant to deliver high performance, durability, and great comfort. This Bourge sports Running shoe for men is extremely stylish. It has an eva bounce-back sole which gives extreme comfort during walking, jogging, running, and in extreme playing conditions. This product has a soft foam insert for amazing comfort. Bourge has a wide range of floaters, of which one can choose as per occasion. Apart from trendy, it’s also comfortable, has good breathability and grip.",
    imageURL: "/images/Bourge Mens Vega-m3 Running Shoes.jpg",
    imagess: [
      "/images/Bourge Mens Vega-m3 Running Shoes.jpg",
      "/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg",
      "/images/Blackview Smart Watch.jpg",
      "/images/Blackview Smart Watch.jpg",
      "/images/AGPTEKSmartWatch.jpg",
      "/images/Dream Shoe.jpg",
      "/images/Lace Up Canvas.jpg",
      "/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg",
      "/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg",
      "/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg",
    ],
    originalPrice: 18 + "$",
    discount: "67%",
    price: parseInt(18 * (1 - parseFloat("67") / 100)),
    EMI: "starts at ₹130. No Cost EMI available",
    offers: ["NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE"],
    delivery: "FREE delivery",
    deliveryDate: "2 days",
    clientName: "Cocoblu Retail",
    productQuantity: 50,
    DeleveryCharges: "Free",
  },
  {
    id: 11,
    label: "shoe",
    category: "sports",
    gender: genders[2],
    name: "CULTSPORT",
    short: "CULTSPORT Speedster Mens Running Shoes | Enhanced Grip | Breathable | Cushioned Sole | Running Shoes",
    about: ` 
    Sole: Rubber 
    Closure: Lace-Up
    Fit Type: Regular
    Shoe Width: Medium
    BREATHABLE textile UPPER: The high-quality stretchable textile upper allows your feet to breathe, keeping them cool and comfortable during workouts while the Sockfit construction makes slipping in and out a breeze.
    COMPRESSED EVA MIDSOLE: The compressed EVA midsole is lightweight, highly cushioned, and flexible offering the right balance of comfort and support.
    CUSHIONED FLEXIBILITY: Experience plush cushioning in the front part of the midsole, providing flexible comfort and superior energy return. Additionally, a harder insert in the heel offers added stability.
    GERMAN-ENGINEERED INSOLE: These runner shoes for men feature a German-engineered insole made from ELASTOPAN material in collaboration with BASF which ensures the utmost comfort, cushioning, and stability.
    DURABLE CARBON RUBBER OUTSOLE: The high-quality carbon rubber outsole in these cult.sport shoes are built for durability, offering enhanced grip, exceptional traction, and flexibility.
    MULTI-PURPOSE USAGE: These shoes are versatile and can be worn for a wide range of activities including running, walking, gym workouts, aerobics, Zumba, S&C, cycling, HRX workout, functional fitness, badminton, volleyball, hand-ball, kho-kho, cricket, golf, trekking, strength training, cross-training, hiking, recreational tennis, other casual sports, hockey, marathon, CrossFit, party and hangouts, outdoor activities, travel, office, and everyday wear. `,
    description: "Need something for your daily runs or a pair that provides comfort all day long? Look no further. Introducing the Cultsport Speedster. With a German engineered insole, these runners give you the cushioning and rebound you need. An 8mm heel to toe drop, and an overall combination of durability and support these shoes make every run a smooth one. A must-have for the everyday athlete!",
    imageURL: "/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg",
    imagess: ["/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg", "/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg", "/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg"],
    originalPrice: 72 + "$",
    price: parseInt(72 * (1 - parseFloat("55") / 100)),
    discount: "55%",
    EMI: "starts at ₹130. No Cost EMI available",
    offers: ["NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE"],
    delivery: "FREE delivery",
    deliveryDate: "2 days",
    clientName: "Cocoblu Retail",
    productQuantity: 50,
    DeleveryCharges: "Free",
  },
  {
    id: 12,
    label: "shoe",
    category: "sports",
    gender: genders[2],
    name: "CULTSPORT",
    short: "CULTSPORT Speedster Mens Running Shoes | Enhanced Grip | Breathable | Cushioned Sole | Running Shoes",
    about: ` 
    Sole: Rubber 
    Closure: Lace-Up
    Fit Type: Regular
    Shoe Width: Medium
    BREATHABLE textile UPPER: The high-quality stretchable textile upper allows your feet to breathe, keeping them cool and comfortable during workouts while the Sockfit construction makes slipping in and out a breeze.
    COMPRESSED EVA MIDSOLE: The compressed EVA midsole is lightweight, highly cushioned, and flexible offering the right balance of comfort and support.
    CUSHIONED FLEXIBILITY: Experience plush cushioning in the front part of the midsole, providing flexible comfort and superior energy return. Additionally, a harder insert in the heel offers added stability.
    GERMAN-ENGINEERED INSOLE: These runner shoes for men feature a German-engineered insole made from ELASTOPAN material in collaboration with BASF which ensures the utmost comfort, cushioning, and stability.
    DURABLE CARBON RUBBER OUTSOLE: The high-quality carbon rubber outsole in these cult.sport shoes are built for durability, offering enhanced grip, exceptional traction, and flexibility.
    MULTI-PURPOSE USAGE: These shoes are versatile and can be worn for a wide range of activities including running, walking, gym workouts, aerobics, Zumba, S&C, cycling, HRX workout, functional fitness, badminton, volleyball, hand-ball, kho-kho, cricket, golf, trekking, strength training, cross-training, hiking, recreational tennis, other casual sports, hockey, marathon, CrossFit, party and hangouts, outdoor activities, travel, office, and everyday wear. `,
    description: "Need something for your daily runs or a pair that provides comfort all day long? Look no further. Introducing the Cultsport Speedster. With a German engineered insole, these runners give you the cushioning and rebound you need. An 8mm heel to toe drop, and an overall combination of durability and support these shoes make every run a smooth one. A must-have for the everyday athlete!",
    imageURL: "/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg",
    imagess: ["/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg", "/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg", "/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg"],
    originalPrice: 72 + "$",
    price: parseInt(72 * (1 - parseFloat("55") / 100)),
    discount: "55%",
    EMI: "starts at ₹130. No Cost EMI available",
    offers: ["NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE"],
    delivery: "FREE delivery",
    deliveryDate: "2 days",
    clientName: "Cocoblu Retail",
    productQuantity: 50,
    DeleveryCharges: 20,
  },
  {
    id: 13,
    label: "shoe",
    category: "sports",
    gender: genders[2],
    name: "CULTSPORT",
    short: "CULTSPORT Speedster Mens Running Shoes | Enhanced Grip | Breathable | Cushioned Sole | Running Shoes",
    about: ` 
    Sole: Rubber 
    Closure: Lace-Up
    Fit Type: Regular
    Shoe Width: Medium
    BREATHABLE textile UPPER: The high-quality stretchable textile upper allows your feet to breathe, keeping them cool and comfortable during workouts while the Sockfit construction makes slipping in and out a breeze.
    COMPRESSED EVA MIDSOLE: The compressed EVA midsole is lightweight, highly cushioned, and flexible offering the right balance of comfort and support.
    CUSHIONED FLEXIBILITY: Experience plush cushioning in the front part of the midsole, providing flexible comfort and superior energy return. Additionally, a harder insert in the heel offers added stability.
    GERMAN-ENGINEERED INSOLE: These runner shoes for men feature a German-engineered insole made from ELASTOPAN material in collaboration with BASF which ensures the utmost comfort, cushioning, and stability.
    DURABLE CARBON RUBBER OUTSOLE: The high-quality carbon rubber outsole in these cult.sport shoes are built for durability, offering enhanced grip, exceptional traction, and flexibility.
    MULTI-PURPOSE USAGE: These shoes are versatile and can be worn for a wide range of activities including running, walking, gym workouts, aerobics, Zumba, S&C, cycling, HRX workout, functional fitness, badminton, volleyball, hand-ball, kho-kho, cricket, golf, trekking, strength training, cross-training, hiking, recreational tennis, other casual sports, hockey, marathon, CrossFit, party and hangouts, outdoor activities, travel, office, and everyday wear. `,
    description: "Need something for your daily runs or a pair that provides comfort all day long? Look no further. Introducing the Cultsport Speedster. With a German engineered insole, these runners give you the cushioning and rebound you need. An 8mm heel to toe drop, and an overall combination of durability and support these shoes make every run a smooth one. A must-have for the everyday athlete!",
    imageURL: "/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg",
    imagess: ["/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg", "/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg", "/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg"],
    originalPrice: 72 + "$",
    price: parseInt(72 * (1 - parseFloat("55") / 100)),
    discount: "55%",
    EMI: "starts at ₹130. No Cost EMI available",
    offers: ["NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE"],
    delivery: "FREE delivery",
    deliveryDate: "2 days",
    clientName: "Cocoblu Retail",
    productQuantity: 50,
    DeleveryCharges: 20,
  },
  {
    id: 14,
    label: "shoe",
    category: "sports",
    gender: genders[2],
    name: "CULTSPORT",
    short: "CULTSPORT Speedster Mens Running Shoes | Enhanced Grip | Breathable | Cushioned Sole | Running Shoes",
    about: ` 
    Sole: Rubber 
    Closure: Lace-Up
    Fit Type: Regular
    Shoe Width: Medium
    BREATHABLE textile UPPER: The high-quality stretchable textile upper allows your feet to breathe, keeping them cool and comfortable during workouts while the Sockfit construction makes slipping in and out a breeze.
    COMPRESSED EVA MIDSOLE: The compressed EVA midsole is lightweight, highly cushioned, and flexible offering the right balance of comfort and support.
    CUSHIONED FLEXIBILITY: Experience plush cushioning in the front part of the midsole, providing flexible comfort and superior energy return. Additionally, a harder insert in the heel offers added stability.
    GERMAN-ENGINEERED INSOLE: These runner shoes for men feature a German-engineered insole made from ELASTOPAN material in collaboration with BASF which ensures the utmost comfort, cushioning, and stability.
    DURABLE CARBON RUBBER OUTSOLE: The high-quality carbon rubber outsole in these cult.sport shoes are built for durability, offering enhanced grip, exceptional traction, and flexibility.
    MULTI-PURPOSE USAGE: These shoes are versatile and can be worn for a wide range of activities including running, walking, gym workouts, aerobics, Zumba, S&C, cycling, HRX workout, functional fitness, badminton, volleyball, hand-ball, kho-kho, cricket, golf, trekking, strength training, cross-training, hiking, recreational tennis, other casual sports, hockey, marathon, CrossFit, party and hangouts, outdoor activities, travel, office, and everyday wear. `,
    description: "Need something for your daily runs or a pair that provides comfort all day long? Look no further. Introducing the Cultsport Speedster. With a German engineered insole, these runners give you the cushioning and rebound you need. An 8mm heel to toe drop, and an overall combination of durability and support these shoes make every run a smooth one. A must-have for the everyday athlete!",
    imageURL: "/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg",
    imagess: ["/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg", "/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg", "/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg"],
    originalPrice: 72 + "$",
    price: parseInt(72 * (1 - parseFloat("55") / 100)),
    discount: "55%",
    EMI: "starts at ₹130. No Cost EMI available",
    offers: ["NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE"],
    delivery: "FREE delivery",
    deliveryDate: "2 days",
    clientName: "Cocoblu Retail",
    productQuantity: 50,
    DeleveryCharges: 20,
  },
  {
    id: 15,
    label: "shoe",
    category: "sports",
    gender: genders[2],
    name: "CULTSPORT",
    short: "CULTSPORT Speedster Mens Running Shoes | Enhanced Grip | Breathable | Cushioned Sole | Running Shoes",
    about: ` 
    Sole: Rubber 
    Closure: Lace-Up
    Fit Type: Regular
    Shoe Width: Medium
    BREATHABLE textile UPPER: The high-quality stretchable textile upper allows your feet to breathe, keeping them cool and comfortable during workouts while the Sockfit construction makes slipping in and out a breeze.
    COMPRESSED EVA MIDSOLE: The compressed EVA midsole is lightweight, highly cushioned, and flexible offering the right balance of comfort and support.
    CUSHIONED FLEXIBILITY: Experience plush cushioning in the front part of the midsole, providing flexible comfort and superior energy return. Additionally, a harder insert in the heel offers added stability.
    GERMAN-ENGINEERED INSOLE: These runner shoes for men feature a German-engineered insole made from ELASTOPAN material in collaboration with BASF which ensures the utmost comfort, cushioning, and stability.
    DURABLE CARBON RUBBER OUTSOLE: The high-quality carbon rubber outsole in these cult.sport shoes are built for durability, offering enhanced grip, exceptional traction, and flexibility.
    MULTI-PURPOSE USAGE: These shoes are versatile and can be worn for a wide range of activities including running, walking, gym workouts, aerobics, Zumba, S&C, cycling, HRX workout, functional fitness, badminton, volleyball, hand-ball, kho-kho, cricket, golf, trekking, strength training, cross-training, hiking, recreational tennis, other casual sports, hockey, marathon, CrossFit, party and hangouts, outdoor activities, travel, office, and everyday wear. `,
    description: "Need something for your daily runs or a pair that provides comfort all day long? Look no further. Introducing the Cultsport Speedster. With a German engineered insole, these runners give you the cushioning and rebound you need. An 8mm heel to toe drop, and an overall combination of durability and support these shoes make every run a smooth one. A must-have for the everyday athlete!",
    imageURL: "/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg",
    imagess: ["/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg", "/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg", "/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg"],
    originalPrice: 72 + "$",
    price: parseInt(72 * (1 - parseFloat("55") / 100)),
    discount: "55%",
    EMI: "starts at ₹130. No Cost EMI available",
    offers: ["NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE"],
    delivery: "FREE delivery",
    deliveryDate: "2 days",
    clientName: "Cocoblu Retail",
    productQuantity: 50,
    DeleveryCharges: 20,
  },
  {
    id: 16,
    label: "shoe",
    category: "sports",
    gender: genders[2],
    name: "CULTSPORT",
    short: "CULTSPORT Speedster Mens Running Shoes | Enhanced Grip | Breathable | Cushioned Sole | Running Shoes",
    about: ` 
    Sole: Rubber 
    Closure: Lace-Up
    Fit Type: Regular
    Shoe Width: Medium
    BREATHABLE textile UPPER: The high-quality stretchable textile upper allows your feet to breathe, keeping them cool and comfortable during workouts while the Sockfit construction makes slipping in and out a breeze.
    COMPRESSED EVA MIDSOLE: The compressed EVA midsole is lightweight, highly cushioned, and flexible offering the right balance of comfort and support.
    CUSHIONED FLEXIBILITY: Experience plush cushioning in the front part of the midsole, providing flexible comfort and superior energy return. Additionally, a harder insert in the heel offers added stability.
    GERMAN-ENGINEERED INSOLE: These runner shoes for men feature a German-engineered insole made from ELASTOPAN material in collaboration with BASF which ensures the utmost comfort, cushioning, and stability.
    DURABLE CARBON RUBBER OUTSOLE: The high-quality carbon rubber outsole in these cult.sport shoes are built for durability, offering enhanced grip, exceptional traction, and flexibility.
    MULTI-PURPOSE USAGE: These shoes are versatile and can be worn for a wide range of activities including running, walking, gym workouts, aerobics, Zumba, S&C, cycling, HRX workout, functional fitness, badminton, volleyball, hand-ball, kho-kho, cricket, golf, trekking, strength training, cross-training, hiking, recreational tennis, other casual sports, hockey, marathon, CrossFit, party and hangouts, outdoor activities, travel, office, and everyday wear. `,
    description: "Need something for your daily runs or a pair that provides comfort all day long? Look no further. Introducing the Cultsport Speedster. With a German engineered insole, these runners give you the cushioning and rebound you need. An 8mm heel to toe drop, and an overall combination of durability and support these shoes make every run a smooth one. A must-have for the everyday athlete!",
    imageURL: "/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg",
    imagess: ["/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg", "/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg", "/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg"],
    originalPrice: 72 + "$",
    price: parseInt(72 * (1 - parseFloat("55") / 100)),
    discount: "55%",
    EMI: "starts at ₹130. No Cost EMI available",
    offers: ["NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE"],
    delivery: "FREE delivery",
    deliveryDate: "2 days",
    clientName: "Cocoblu Retail",
    productQuantity: 50,
    DeleveryCharges: 20,
  },
  {
    id: 17,
    label: "shoe",
    category: "sports",
    gender: genders[2],
    name: "CULTSPORT",
    short: "CULTSPORT Speedster Mens Running Shoes | Enhanced Grip | Breathable | Cushioned Sole | Running Shoes",
    about: ` 
    Sole: Rubber 
    Closure: Lace-Up
    Fit Type: Regular
    Shoe Width: Medium
    BREATHABLE textile UPPER: The high-quality stretchable textile upper allows your feet to breathe, keeping them cool and comfortable during workouts while the Sockfit construction makes slipping in and out a breeze.
    COMPRESSED EVA MIDSOLE: The compressed EVA midsole is lightweight, highly cushioned, and flexible offering the right balance of comfort and support.
    CUSHIONED FLEXIBILITY: Experience plush cushioning in the front part of the midsole, providing flexible comfort and superior energy return. Additionally, a harder insert in the heel offers added stability.
    GERMAN-ENGINEERED INSOLE: These runner shoes for men feature a German-engineered insole made from ELASTOPAN material in collaboration with BASF which ensures the utmost comfort, cushioning, and stability.
    DURABLE CARBON RUBBER OUTSOLE: The high-quality carbon rubber outsole in these cult.sport shoes are built for durability, offering enhanced grip, exceptional traction, and flexibility.
    MULTI-PURPOSE USAGE: These shoes are versatile and can be worn for a wide range of activities including running, walking, gym workouts, aerobics, Zumba, S&C, cycling, HRX workout, functional fitness, badminton, volleyball, hand-ball, kho-kho, cricket, golf, trekking, strength training, cross-training, hiking, recreational tennis, other casual sports, hockey, marathon, CrossFit, party and hangouts, outdoor activities, travel, office, and everyday wear. `,
    description: "Need something for your daily runs or a pair that provides comfort all day long? Look no further. Introducing the Cultsport Speedster. With a German engineered insole, these runners give you the cushioning and rebound you need. An 8mm heel to toe drop, and an overall combination of durability and support these shoes make every run a smooth one. A must-have for the everyday athlete!",
    imageURL: "/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg",
    imagess: ["/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg", "/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg", "/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg"],
    originalPrice: 72 + "$",
    price: parseInt(72 * (1 - parseFloat("55") / 100)),
    discount: "55%",
    EMI: "starts at ₹130. No Cost EMI available",
    offers: ["NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE"],
    delivery: "FREE delivery",
    deliveryDate: "2 days",
    clientName: "Cocoblu Retail",
    productQuantity: 50,
    DeleveryCharges: 20,
  },
  {
    id: 18,
    label: "shoe",
    category: "sports",
    gender: genders[2],
    name: "CULTSPORT",
    short: "CULTSPORT Speedster Mens Running Shoes | Enhanced Grip | Breathable | Cushioned Sole | Running Shoes",
    about: ` 
    Sole: Rubber 
    Closure: Lace-Up
    Fit Type: Regular
    Shoe Width: Medium
    BREATHABLE textile UPPER: The high-quality stretchable textile upper allows your feet to breathe, keeping them cool and comfortable during workouts while the Sockfit construction makes slipping in and out a breeze.
    COMPRESSED EVA MIDSOLE: The compressed EVA midsole is lightweight, highly cushioned, and flexible offering the right balance of comfort and support.
    CUSHIONED FLEXIBILITY: Experience plush cushioning in the front part of the midsole, providing flexible comfort and superior energy return. Additionally, a harder insert in the heel offers added stability.
    GERMAN-ENGINEERED INSOLE: These runner shoes for men feature a German-engineered insole made from ELASTOPAN material in collaboration with BASF which ensures the utmost comfort, cushioning, and stability.
    DURABLE CARBON RUBBER OUTSOLE: The high-quality carbon rubber outsole in these cult.sport shoes are built for durability, offering enhanced grip, exceptional traction, and flexibility.
    MULTI-PURPOSE USAGE: These shoes are versatile and can be worn for a wide range of activities including running, walking, gym workouts, aerobics, Zumba, S&C, cycling, HRX workout, functional fitness, badminton, volleyball, hand-ball, kho-kho, cricket, golf, trekking, strength training, cross-training, hiking, recreational tennis, other casual sports, hockey, marathon, CrossFit, party and hangouts, outdoor activities, travel, office, and everyday wear. `,
    description: "Need something for your daily runs or a pair that provides comfort all day long? Look no further. Introducing the Cultsport Speedster. With a German engineered insole, these runners give you the cushioning and rebound you need. An 8mm heel to toe drop, and an overall combination of durability and support these shoes make every run a smooth one. A must-have for the everyday athlete!",
    imageURL: "/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg",
    imagess: ["/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg", "/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg", "/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg"],
    originalPrice: 72 + "$",
    price: parseInt(72 * (1 - parseFloat("55") / 100)),
    discount: "55%",
    EMI: "starts at ₹130. No Cost EMI available",
    offers: ["NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE"],
    delivery: "FREE delivery",
    deliveryDate: "2 days",
    clientName: "Cocoblu Retail",
    productQuantity: 50,
    DeleveryCharges: 20,
  },
  {
    id: 19,
    label: "shoe",
    category: "sports",
    gender: genders[2],
    name: "CULTSPORT",
    short: "CULTSPORT Speedster Mens Running Shoes | Enhanced Grip | Breathable | Cushioned Sole | Running Shoes",
    about: ` 
    Sole: Rubber 
    Closure: Lace-Up
    Fit Type: Regular
    Shoe Width: Medium
    BREATHABLE textile UPPER: The high-quality stretchable textile upper allows your feet to breathe, keeping them cool and comfortable during workouts while the Sockfit construction makes slipping in and out a breeze.
    COMPRESSED EVA MIDSOLE: The compressed EVA midsole is lightweight, highly cushioned, and flexible offering the right balance of comfort and support.
    CUSHIONED FLEXIBILITY: Experience plush cushioning in the front part of the midsole, providing flexible comfort and superior energy return. Additionally, a harder insert in the heel offers added stability.
    GERMAN-ENGINEERED INSOLE: These runner shoes for men feature a German-engineered insole made from ELASTOPAN material in collaboration with BASF which ensures the utmost comfort, cushioning, and stability.
    DURABLE CARBON RUBBER OUTSOLE: The high-quality carbon rubber outsole in these cult.sport shoes are built for durability, offering enhanced grip, exceptional traction, and flexibility.
    MULTI-PURPOSE USAGE: These shoes are versatile and can be worn for a wide range of activities including running, walking, gym workouts, aerobics, Zumba, S&C, cycling, HRX workout, functional fitness, badminton, volleyball, hand-ball, kho-kho, cricket, golf, trekking, strength training, cross-training, hiking, recreational tennis, other casual sports, hockey, marathon, CrossFit, party and hangouts, outdoor activities, travel, office, and everyday wear. `,
    description: "Need something for your daily runs or a pair that provides comfort all day long? Look no further. Introducing the Cultsport Speedster. With a German engineered insole, these runners give you the cushioning and rebound you need. An 8mm heel to toe drop, and an overall combination of durability and support these shoes make every run a smooth one. A must-have for the everyday athlete!",
    imageURL: "/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg",
    imagess: ["/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg", "/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg", "/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg"],
    originalPrice: 72 + "$",
    price: parseInt(72 * (1 - parseFloat("55") / 100)),
    discount: "55%",
    EMI: "starts at ₹130. No Cost EMI available",
    offers: ["NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE"],
    delivery: "FREE delivery",
    deliveryDate: "2 days",
    clientName: "Cocoblu Retail",
    productQuantity: 50,
    DeleveryCharges: 20,
  },
  {
    id: 20,
    label: "shoe",
    category: "sports",
    gender: genders[2],
    name: "CULTSPORT",
    short: "CULTSPORT Speedster Mens Running Shoes | Enhanced Grip | Breathable | Cushioned Sole | Running Shoes",
    about: ` 
    Sole: Rubber 
    Closure: Lace-Up
    Fit Type: Regular
    Shoe Width: Medium
    BREATHABLE textile UPPER: The high-quality stretchable textile upper allows your feet to breathe, keeping them cool and comfortable during workouts while the Sockfit construction makes slipping in and out a breeze.
    COMPRESSED EVA MIDSOLE: The compressed EVA midsole is lightweight, highly cushioned, and flexible offering the right balance of comfort and support.
    CUSHIONED FLEXIBILITY: Experience plush cushioning in the front part of the midsole, providing flexible comfort and superior energy return. Additionally, a harder insert in the heel offers added stability.
    GERMAN-ENGINEERED INSOLE: These runner shoes for men feature a German-engineered insole made from ELASTOPAN material in collaboration with BASF which ensures the utmost comfort, cushioning, and stability.
    DURABLE CARBON RUBBER OUTSOLE: The high-quality carbon rubber outsole in these cult.sport shoes are built for durability, offering enhanced grip, exceptional traction, and flexibility.
    MULTI-PURPOSE USAGE: These shoes are versatile and can be worn for a wide range of activities including running, walking, gym workouts, aerobics, Zumba, S&C, cycling, HRX workout, functional fitness, badminton, volleyball, hand-ball, kho-kho, cricket, golf, trekking, strength training, cross-training, hiking, recreational tennis, other casual sports, hockey, marathon, CrossFit, party and hangouts, outdoor activities, travel, office, and everyday wear. `,
    description: "Need something for your daily runs or a pair that provides comfort all day long? Look no further. Introducing the Cultsport Speedster. With a German engineered insole, these runners give you the cushioning and rebound you need. An 8mm heel to toe drop, and an overall combination of durability and support these shoes make every run a smooth one. A must-have for the everyday athlete!",
    imageURL: "/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg",
    imagess: ["/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg", "/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg", "/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg"],
    originalPrice: 72 + "$",
    price: parseInt(72 * (1 - parseFloat("55") / 100)),
    discount: "55%",
    EMI: "starts at ₹130. No Cost EMI available",
    offers: ["NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE"],
    delivery: "FREE delivery",
    deliveryDate: "2 days",
    clientName: "Cocoblu Retail",
    productQuantity: 50,
    DeleveryCharges: 20,
  },
  {
    id: 21,
    label: "shoe",
    category: "sports",
    gender: genders[2],
    name: "CULTSPORT",
    short: "CULTSPORT Speedster Mens Running Shoes | Enhanced Grip | Breathable | Cushioned Sole | Running Shoes",
    about: ` 
    Sole: Rubber 
    Closure: Lace-Up
    Fit Type: Regular
    Shoe Width: Medium
    BREATHABLE textile UPPER: The high-quality stretchable textile upper allows your feet to breathe, keeping them cool and comfortable during workouts while the Sockfit construction makes slipping in and out a breeze.
    COMPRESSED EVA MIDSOLE: The compressed EVA midsole is lightweight, highly cushioned, and flexible offering the right balance of comfort and support.
    CUSHIONED FLEXIBILITY: Experience plush cushioning in the front part of the midsole, providing flexible comfort and superior energy return. Additionally, a harder insert in the heel offers added stability.
    GERMAN-ENGINEERED INSOLE: These runner shoes for men feature a German-engineered insole made from ELASTOPAN material in collaboration with BASF which ensures the utmost comfort, cushioning, and stability.
    DURABLE CARBON RUBBER OUTSOLE: The high-quality carbon rubber outsole in these cult.sport shoes are built for durability, offering enhanced grip, exceptional traction, and flexibility.
    MULTI-PURPOSE USAGE: These shoes are versatile and can be worn for a wide range of activities including running, walking, gym workouts, aerobics, Zumba, S&C, cycling, HRX workout, functional fitness, badminton, volleyball, hand-ball, kho-kho, cricket, golf, trekking, strength training, cross-training, hiking, recreational tennis, other casual sports, hockey, marathon, CrossFit, party and hangouts, outdoor activities, travel, office, and everyday wear. `,
    description: "Need something for your daily runs or a pair that provides comfort all day long? Look no further. Introducing the Cultsport Speedster. With a German engineered insole, these runners give you the cushioning and rebound you need. An 8mm heel to toe drop, and an overall combination of durability and support these shoes make every run a smooth one. A must-have for the everyday athlete!",
    imageURL: "/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg",
    imagess: ["/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg", "/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg", "/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg"],
    originalPrice: 72 + "$",
    price: parseInt(72 * (1 - parseFloat("55") / 100)),
    discount: "55%",
    EMI: "starts at ₹130. No Cost EMI available",
    offers: ["NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE"],
    delivery: "FREE delivery",
    deliveryDate: "2 days",
    clientName: "Cocoblu Retail",
    productQuantity: 50,
    DeleveryCharges: 20,
  },
  {
    id: 22,
    label: "shoe",
    category: "sports",
    gender: genders[2],
    name: "CULTSPORT",
    short: "CULTSPORT Speedster Mens Running Shoes | Enhanced Grip | Breathable | Cushioned Sole | Running Shoes",
    about: ` 
    Sole: Rubber 
    Closure: Lace-Up
    Fit Type: Regular
    Shoe Width: Medium
    BREATHABLE textile UPPER: The high-quality stretchable textile upper allows your feet to breathe, keeping them cool and comfortable during workouts while the Sockfit construction makes slipping in and out a breeze.
    COMPRESSED EVA MIDSOLE: The compressed EVA midsole is lightweight, highly cushioned, and flexible offering the right balance of comfort and support.
    CUSHIONED FLEXIBILITY: Experience plush cushioning in the front part of the midsole, providing flexible comfort and superior energy return. Additionally, a harder insert in the heel offers added stability.
    GERMAN-ENGINEERED INSOLE: These runner shoes for men feature a German-engineered insole made from ELASTOPAN material in collaboration with BASF which ensures the utmost comfort, cushioning, and stability.
    DURABLE CARBON RUBBER OUTSOLE: The high-quality carbon rubber outsole in these cult.sport shoes are built for durability, offering enhanced grip, exceptional traction, and flexibility.
    MULTI-PURPOSE USAGE: These shoes are versatile and can be worn for a wide range of activities including running, walking, gym workouts, aerobics, Zumba, S&C, cycling, HRX workout, functional fitness, badminton, volleyball, hand-ball, kho-kho, cricket, golf, trekking, strength training, cross-training, hiking, recreational tennis, other casual sports, hockey, marathon, CrossFit, party and hangouts, outdoor activities, travel, office, and everyday wear. `,
    description: "Need something for your daily runs or a pair that provides comfort all day long? Look no further. Introducing the Cultsport Speedster. With a German engineered insole, these runners give you the cushioning and rebound you need. An 8mm heel to toe drop, and an overall combination of durability and support these shoes make every run a smooth one. A must-have for the everyday athlete!",
    imageURL: "/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg",
    imagess: ["/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg", "/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg", "/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg"],
    originalPrice: 72 + "$",
    price: parseInt(72 * (1 - parseFloat("55") / 100)),
    discount: "55%",
    EMI: "starts at ₹130. No Cost EMI available",
    offers: ["NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE"],
    delivery: "FREE delivery",
    deliveryDate: "2 days",
    clientName: "Cocoblu Retail",
    productQuantity: 50,
    DeleveryCharges: 20,
  },
  {
    id: 23,
    label: "shoe",
    category: "sports",
    gender: genders[2],
    name: "CULTSPORT",
    short: "CULTSPORT Speedster Mens Running Shoes | Enhanced Grip | Breathable | Cushioned Sole | Running Shoes",
    about: ` 
    Sole: Rubber 
    Closure: Lace-Up
    Fit Type: Regular
    Shoe Width: Medium
    BREATHABLE textile UPPER: The high-quality stretchable textile upper allows your feet to breathe, keeping them cool and comfortable during workouts while the Sockfit construction makes slipping in and out a breeze.
    COMPRESSED EVA MIDSOLE: The compressed EVA midsole is lightweight, highly cushioned, and flexible offering the right balance of comfort and support.
    CUSHIONED FLEXIBILITY: Experience plush cushioning in the front part of the midsole, providing flexible comfort and superior energy return. Additionally, a harder insert in the heel offers added stability.
    GERMAN-ENGINEERED INSOLE: These runner shoes for men feature a German-engineered insole made from ELASTOPAN material in collaboration with BASF which ensures the utmost comfort, cushioning, and stability.
    DURABLE CARBON RUBBER OUTSOLE: The high-quality carbon rubber outsole in these cult.sport shoes are built for durability, offering enhanced grip, exceptional traction, and flexibility.
    MULTI-PURPOSE USAGE: These shoes are versatile and can be worn for a wide range of activities including running, walking, gym workouts, aerobics, Zumba, S&C, cycling, HRX workout, functional fitness, badminton, volleyball, hand-ball, kho-kho, cricket, golf, trekking, strength training, cross-training, hiking, recreational tennis, other casual sports, hockey, marathon, CrossFit, party and hangouts, outdoor activities, travel, office, and everyday wear. `,
    description: "Need something for your daily runs or a pair that provides comfort all day long? Look no further. Introducing the Cultsport Speedster. With a German engineered insole, these runners give you the cushioning and rebound you need. An 8mm heel to toe drop, and an overall combination of durability and support these shoes make every run a smooth one. A must-have for the everyday athlete!",
    imageURL: "/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg",
    imagess: ["/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg", "/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg", "/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg"],
    originalPrice: 72 + "$",
    price: parseInt(72 * (1 - parseFloat("55") / 100)),
    discount: "55%",
    EMI: "starts at ₹130. No Cost EMI available",
    offers: ["NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE"],
    delivery: "FREE delivery",
    deliveryDate: "2 days",
    clientName: "Cocoblu Retail",
    productQuantity: 50,
    DeleveryCharges: 20,
  },
  {
    id: 24,
    label: "shoe",
    category: "sports",
    gender: genders[2],
    name: "CULTSPORT",
    short: "CULTSPORT Speedster Mens Running Shoes | Enhanced Grip | Breathable | Cushioned Sole | Running Shoes",
    about: ` 
    Sole: Rubber 
    Closure: Lace-Up
    Fit Type: Regular
    Shoe Width: Medium
    BREATHABLE textile UPPER: The high-quality stretchable textile upper allows your feet to breathe, keeping them cool and comfortable during workouts while the Sockfit construction makes slipping in and out a breeze.
    COMPRESSED EVA MIDSOLE: The compressed EVA midsole is lightweight, highly cushioned, and flexible offering the right balance of comfort and support.
    CUSHIONED FLEXIBILITY: Experience plush cushioning in the front part of the midsole, providing flexible comfort and superior energy return. Additionally, a harder insert in the heel offers added stability.
    GERMAN-ENGINEERED INSOLE: These runner shoes for men feature a German-engineered insole made from ELASTOPAN material in collaboration with BASF which ensures the utmost comfort, cushioning, and stability.
    DURABLE CARBON RUBBER OUTSOLE: The high-quality carbon rubber outsole in these cult.sport shoes are built for durability, offering enhanced grip, exceptional traction, and flexibility.
    MULTI-PURPOSE USAGE: These shoes are versatile and can be worn for a wide range of activities including running, walking, gym workouts, aerobics, Zumba, S&C, cycling, HRX workout, functional fitness, badminton, volleyball, hand-ball, kho-kho, cricket, golf, trekking, strength training, cross-training, hiking, recreational tennis, other casual sports, hockey, marathon, CrossFit, party and hangouts, outdoor activities, travel, office, and everyday wear. `,
    description: "Need something for your daily runs or a pair that provides comfort all day long? Look no further. Introducing the Cultsport Speedster. With a German engineered insole, these runners give you the cushioning and rebound you need. An 8mm heel to toe drop, and an overall combination of durability and support these shoes make every run a smooth one. A must-have for the everyday athlete!",
    imageURL: "/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg",
    imagess: ["/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg", "/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg", "/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg"],
    originalPrice: 72 + "$",
    price: parseInt(72 * (1 - parseFloat("55") / 100)),
    discount: "55%",
    EMI: "starts at ₹130. No Cost EMI available",
    offers: ["NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE"],
    delivery: "FREE delivery",
    deliveryDate: "2 days",
    clientName: "Cocoblu Retail",
    productQuantity: 50,
    DeleveryCharges: 20,
  },
  {
    id: 25,
    label: "shoe",
    category: "sports",
    gender: genders[2],
    name: "CULTSPORT",
    short: "CULTSPORT Speedster Mens Running Shoes | Enhanced Grip | Breathable | Cushioned Sole | Running Shoes",
    about: ` 
    Sole: Rubber 
    Closure: Lace-Up
    Fit Type: Regular
    Shoe Width: Medium
    BREATHABLE textile UPPER: The high-quality stretchable textile upper allows your feet to breathe, keeping them cool and comfortable during workouts while the Sockfit construction makes slipping in and out a breeze.
    COMPRESSED EVA MIDSOLE: The compressed EVA midsole is lightweight, highly cushioned, and flexible offering the right balance of comfort and support.
    CUSHIONED FLEXIBILITY: Experience plush cushioning in the front part of the midsole, providing flexible comfort and superior energy return. Additionally, a harder insert in the heel offers added stability.
    GERMAN-ENGINEERED INSOLE: These runner shoes for men feature a German-engineered insole made from ELASTOPAN material in collaboration with BASF which ensures the utmost comfort, cushioning, and stability.
    DURABLE CARBON RUBBER OUTSOLE: The high-quality carbon rubber outsole in these cult.sport shoes are built for durability, offering enhanced grip, exceptional traction, and flexibility.
    MULTI-PURPOSE USAGE: These shoes are versatile and can be worn for a wide range of activities including running, walking, gym workouts, aerobics, Zumba, S&C, cycling, HRX workout, functional fitness, badminton, volleyball, hand-ball, kho-kho, cricket, golf, trekking, strength training, cross-training, hiking, recreational tennis, other casual sports, hockey, marathon, CrossFit, party and hangouts, outdoor activities, travel, office, and everyday wear. `,
    description: "Need something for your daily runs or a pair that provides comfort all day long? Look no further. Introducing the Cultsport Speedster. With a German engineered insole, these runners give you the cushioning and rebound you need. An 8mm heel to toe drop, and an overall combination of durability and support these shoes make every run a smooth one. A must-have for the everyday athlete!",
    imageURL: "/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg",
    imagess: ["/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg", "/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg", "/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg"],
    originalPrice: 72 + "$",
    price: parseInt(72 * (1 - parseFloat("55") / 100)),
    discount: "55%",
    EMI: "starts at ₹130. No Cost EMI available",
    offers: ["NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE"],
    delivery: "FREE delivery",
    deliveryDate: "2 days",
    clientName: "Cocoblu Retail",
    productQuantity: 50,
    DeleveryCharges: 20,
  },
  {
    id: 26,
    label: "shoe",
    category: "sports",
    gender: genders[2],
    name: "CULTSPORT",
    short: "CULTSPORT Speedster Mens Running Shoes | Enhanced Grip | Breathable | Cushioned Sole | Running Shoes",
    about: ` 
    Sole: Rubber 
    Closure: Lace-Up
    Fit Type: Regular
    Shoe Width: Medium
    BREATHABLE textile UPPER: The high-quality stretchable textile upper allows your feet to breathe, keeping them cool and comfortable during workouts while the Sockfit construction makes slipping in and out a breeze.
    COMPRESSED EVA MIDSOLE: The compressed EVA midsole is lightweight, highly cushioned, and flexible offering the right balance of comfort and support.
    CUSHIONED FLEXIBILITY: Experience plush cushioning in the front part of the midsole, providing flexible comfort and superior energy return. Additionally, a harder insert in the heel offers added stability.
    GERMAN-ENGINEERED INSOLE: These runner shoes for men feature a German-engineered insole made from ELASTOPAN material in collaboration with BASF which ensures the utmost comfort, cushioning, and stability.
    DURABLE CARBON RUBBER OUTSOLE: The high-quality carbon rubber outsole in these cult.sport shoes are built for durability, offering enhanced grip, exceptional traction, and flexibility.
    MULTI-PURPOSE USAGE: These shoes are versatile and can be worn for a wide range of activities including running, walking, gym workouts, aerobics, Zumba, S&C, cycling, HRX workout, functional fitness, badminton, volleyball, hand-ball, kho-kho, cricket, golf, trekking, strength training, cross-training, hiking, recreational tennis, other casual sports, hockey, marathon, CrossFit, party and hangouts, outdoor activities, travel, office, and everyday wear. `,
    description: "Need something for your daily runs or a pair that provides comfort all day long? Look no further. Introducing the Cultsport Speedster. With a German engineered insole, these runners give you the cushioning and rebound you need. An 8mm heel to toe drop, and an overall combination of durability and support these shoes make every run a smooth one. A must-have for the everyday athlete!",
    imageURL: "/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg",
    imagess: ["/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg", "/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg", "/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg"],
    originalPrice: 72 + "$",
    price: parseInt(72 * (1 - parseFloat("55") / 100)),
    discount: "55%",
    EMI: "starts at ₹130. No Cost EMI available",
    offers: ["NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE"],
    delivery: "FREE delivery",
    deliveryDate: "2 days",
    clientName: "Cocoblu Retail",
    productQuantity: 50,
    DeleveryCharges: 20,
  },
  {
    id: 27,
    label: "shoe",
    category: "sports",
    gender: genders[2],
    name: "CULTSPORT",
    short: "CULTSPORT Speedster Mens Running Shoes | Enhanced Grip | Breathable | Cushioned Sole | Running Shoes",
    about: ` 
    Sole: Rubber 
    Closure: Lace-Up
    Fit Type: Regular
    Shoe Width: Medium
    BREATHABLE textile UPPER: The high-quality stretchable textile upper allows your feet to breathe, keeping them cool and comfortable during workouts while the Sockfit construction makes slipping in and out a breeze.
    COMPRESSED EVA MIDSOLE: The compressed EVA midsole is lightweight, highly cushioned, and flexible offering the right balance of comfort and support.
    CUSHIONED FLEXIBILITY: Experience plush cushioning in the front part of the midsole, providing flexible comfort and superior energy return. Additionally, a harder insert in the heel offers added stability.
    GERMAN-ENGINEERED INSOLE: These runner shoes for men feature a German-engineered insole made from ELASTOPAN material in collaboration with BASF which ensures the utmost comfort, cushioning, and stability.
    DURABLE CARBON RUBBER OUTSOLE: The high-quality carbon rubber outsole in these cult.sport shoes are built for durability, offering enhanced grip, exceptional traction, and flexibility.
    MULTI-PURPOSE USAGE: These shoes are versatile and can be worn for a wide range of activities including running, walking, gym workouts, aerobics, Zumba, S&C, cycling, HRX workout, functional fitness, badminton, volleyball, hand-ball, kho-kho, cricket, golf, trekking, strength training, cross-training, hiking, recreational tennis, other casual sports, hockey, marathon, CrossFit, party and hangouts, outdoor activities, travel, office, and everyday wear. `,
    description: "Need something for your daily runs or a pair that provides comfort all day long? Look no further. Introducing the Cultsport Speedster. With a German engineered insole, these runners give you the cushioning and rebound you need. An 8mm heel to toe drop, and an overall combination of durability and support these shoes make every run a smooth one. A must-have for the everyday athlete!",
    imageURL: "/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg",
    imagess: ["/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg", "/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg", "/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg"],
    originalPrice: 72 + "$",
    price: parseInt(72 * (1 - parseFloat("55") / 100)),
    discount: "55%",
    EMI: "starts at ₹130. No Cost EMI available",
    offers: ["NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE"],
    delivery: "FREE delivery",
    deliveryDate: "2 days",
    clientName: "Cocoblu Retail",
    productQuantity: 50,
    DeleveryCharges: 20,
  },
  {
    id: 28,
    label: "shoe",
    category: "sports",
    gender: genders[2],
    name: "CULTSPORT",
    short: "CULTSPORT Speedster Mens Running Shoes | Enhanced Grip | Breathable | Cushioned Sole | Running Shoes",
    about: ` 
    Sole: Rubber 
    Closure: Lace-Up
    Fit Type: Regular
    Shoe Width: Medium
    BREATHABLE textile UPPER: The high-quality stretchable textile upper allows your feet to breathe, keeping them cool and comfortable during workouts while the Sockfit construction makes slipping in and out a breeze.
    COMPRESSED EVA MIDSOLE: The compressed EVA midsole is lightweight, highly cushioned, and flexible offering the right balance of comfort and support.
    CUSHIONED FLEXIBILITY: Experience plush cushioning in the front part of the midsole, providing flexible comfort and superior energy return. Additionally, a harder insert in the heel offers added stability.
    GERMAN-ENGINEERED INSOLE: These runner shoes for men feature a German-engineered insole made from ELASTOPAN material in collaboration with BASF which ensures the utmost comfort, cushioning, and stability.
    DURABLE CARBON RUBBER OUTSOLE: The high-quality carbon rubber outsole in these cult.sport shoes are built for durability, offering enhanced grip, exceptional traction, and flexibility.
    MULTI-PURPOSE USAGE: These shoes are versatile and can be worn for a wide range of activities including running, walking, gym workouts, aerobics, Zumba, S&C, cycling, HRX workout, functional fitness, badminton, volleyball, hand-ball, kho-kho, cricket, golf, trekking, strength training, cross-training, hiking, recreational tennis, other casual sports, hockey, marathon, CrossFit, party and hangouts, outdoor activities, travel, office, and everyday wear. `,
    description: "Need something for your daily runs or a pair that provides comfort all day long? Look no further. Introducing the Cultsport Speedster. With a German engineered insole, these runners give you the cushioning and rebound you need. An 8mm heel to toe drop, and an overall combination of durability and support these shoes make every run a smooth one. A must-have for the everyday athlete!",
    imageURL: "/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg",
    imagess: ["/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg", "/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg", "/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg"],
    originalPrice: 72 + "$",
    price: parseInt(72 * (1 - parseFloat("55") / 100)),
    discount: "55%",
    EMI: "starts at ₹130. No Cost EMI available",
    offers: ["NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE"],
    delivery: "FREE delivery",
    deliveryDate: "2 days",
    clientName: "Cocoblu Retail",
    productQuantity: 50,
    DeleveryCharges: 20,
  },
  {
    id: 29,
    label: "shoe",
    category: "sports",
    gender: genders[2],
    name: "CULTSPORT",
    short: "CULTSPORT Speedster Mens Running Shoes | Enhanced Grip | Breathable | Cushioned Sole | Running Shoes",
    about: ` 
    Sole: Rubber 
    Closure: Lace-Up
    Fit Type: Regular
    Shoe Width: Medium
    BREATHABLE textile UPPER: The high-quality stretchable textile upper allows your feet to breathe, keeping them cool and comfortable during workouts while the Sockfit construction makes slipping in and out a breeze.
    COMPRESSED EVA MIDSOLE: The compressed EVA midsole is lightweight, highly cushioned, and flexible offering the right balance of comfort and support.
    CUSHIONED FLEXIBILITY: Experience plush cushioning in the front part of the midsole, providing flexible comfort and superior energy return. Additionally, a harder insert in the heel offers added stability.
    GERMAN-ENGINEERED INSOLE: These runner shoes for men feature a German-engineered insole made from ELASTOPAN material in collaboration with BASF which ensures the utmost comfort, cushioning, and stability.
    DURABLE CARBON RUBBER OUTSOLE: The high-quality carbon rubber outsole in these cult.sport shoes are built for durability, offering enhanced grip, exceptional traction, and flexibility.
    MULTI-PURPOSE USAGE: These shoes are versatile and can be worn for a wide range of activities including running, walking, gym workouts, aerobics, Zumba, S&C, cycling, HRX workout, functional fitness, badminton, volleyball, hand-ball, kho-kho, cricket, golf, trekking, strength training, cross-training, hiking, recreational tennis, other casual sports, hockey, marathon, CrossFit, party and hangouts, outdoor activities, travel, office, and everyday wear. `,
    description: "Need something for your daily runs or a pair that provides comfort all day long? Look no further. Introducing the Cultsport Speedster. With a German engineered insole, these runners give you the cushioning and rebound you need. An 8mm heel to toe drop, and an overall combination of durability and support these shoes make every run a smooth one. A must-have for the everyday athlete!",
    imageURL: "/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg",
    imagess: ["/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg", "/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg", "/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg"],
    originalPrice: 72 + "$",
    price: parseInt(72 * (1 - parseFloat("55") / 100)),
    discount: "55%",
    EMI: "starts at ₹130. No Cost EMI available",
    offers: ["NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE"],
    delivery: "FREE delivery",
    deliveryDate: "2 days",
    clientName: "Cocoblu Retail",
    productQuantity: 50,
    DeleveryCharges: 20,
  },
  {
    id: 30,
    label: "shoe",
    category: "sports",
    gender: genders[2],
    name: "CULTSPORT",
    short: "CULTSPORT Speedster Mens Running Shoes | Enhanced Grip | Breathable | Cushioned Sole | Running Shoes",
    about: ` 
    Sole: Rubber 
    Closure: Lace-Up
    Fit Type: Regular
    Shoe Width: Medium
    BREATHABLE textile UPPER: The high-quality stretchable textile upper allows your feet to breathe, keeping them cool and comfortable during workouts while the Sockfit construction makes slipping in and out a breeze.
    COMPRESSED EVA MIDSOLE: The compressed EVA midsole is lightweight, highly cushioned, and flexible offering the right balance of comfort and support.
    CUSHIONED FLEXIBILITY: Experience plush cushioning in the front part of the midsole, providing flexible comfort and superior energy return. Additionally, a harder insert in the heel offers added stability.
    GERMAN-ENGINEERED INSOLE: These runner shoes for men feature a German-engineered insole made from ELASTOPAN material in collaboration with BASF which ensures the utmost comfort, cushioning, and stability.
    DURABLE CARBON RUBBER OUTSOLE: The high-quality carbon rubber outsole in these cult.sport shoes are built for durability, offering enhanced grip, exceptional traction, and flexibility.
    MULTI-PURPOSE USAGE: These shoes are versatile and can be worn for a wide range of activities including running, walking, gym workouts, aerobics, Zumba, S&C, cycling, HRX workout, functional fitness, badminton, volleyball, hand-ball, kho-kho, cricket, golf, trekking, strength training, cross-training, hiking, recreational tennis, other casual sports, hockey, marathon, CrossFit, party and hangouts, outdoor activities, travel, office, and everyday wear. `,
    description: "Need something for your daily runs or a pair that provides comfort all day long? Look no further. Introducing the Cultsport Speedster. With a German engineered insole, these runners give you the cushioning and rebound you need. An 8mm heel to toe drop, and an overall combination of durability and support these shoes make every run a smooth one. A must-have for the everyday athlete!",
    imageURL: "/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg",
    imagess: ["/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg", "/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg", "/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg"],
    originalPrice: 72 + "$",
    price: parseInt(72 * (1 - parseFloat("55") / 100)),
    discount: "55%",
    EMI: "starts at ₹130. No Cost EMI available",
    offers: ["NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE"],
    delivery: "FREE delivery",
    deliveryDate: "2 days",
    clientName: "Cocoblu Retail",
    productQuantity: 50,
    DeleveryCharges: 20,
  },
  {
    id: 31,
    label: "shoe",
    category: "sports",
    gender: genders[2],
    name: "CULTSPORT",
    short: "CULTSPORT Speedster Mens Running Shoes | Enhanced Grip | Breathable | Cushioned Sole | Running Shoes",
    about: ` 
    Sole: Rubber 
    Closure: Lace-Up
    Fit Type: Regular
    Shoe Width: Medium
    BREATHABLE textile UPPER: The high-quality stretchable textile upper allows your feet to breathe, keeping them cool and comfortable during workouts while the Sockfit construction makes slipping in and out a breeze.
    COMPRESSED EVA MIDSOLE: The compressed EVA midsole is lightweight, highly cushioned, and flexible offering the right balance of comfort and support.
    CUSHIONED FLEXIBILITY: Experience plush cushioning in the front part of the midsole, providing flexible comfort and superior energy return. Additionally, a harder insert in the heel offers added stability.
    GERMAN-ENGINEERED INSOLE: These runner shoes for men feature a German-engineered insole made from ELASTOPAN material in collaboration with BASF which ensures the utmost comfort, cushioning, and stability.
    DURABLE CARBON RUBBER OUTSOLE: The high-quality carbon rubber outsole in these cult.sport shoes are built for durability, offering enhanced grip, exceptional traction, and flexibility.
    MULTI-PURPOSE USAGE: These shoes are versatile and can be worn for a wide range of activities including running, walking, gym workouts, aerobics, Zumba, S&C, cycling, HRX workout, functional fitness, badminton, volleyball, hand-ball, kho-kho, cricket, golf, trekking, strength training, cross-training, hiking, recreational tennis, other casual sports, hockey, marathon, CrossFit, party and hangouts, outdoor activities, travel, office, and everyday wear. `,
    description: "Need something for your daily runs or a pair that provides comfort all day long? Look no further. Introducing the Cultsport Speedster. With a German engineered insole, these runners give you the cushioning and rebound you need. An 8mm heel to toe drop, and an overall combination of durability and support these shoes make every run a smooth one. A must-have for the everyday athlete!",
    imageURL: "/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg",
    imagess: ["/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg", "/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg", "/images/CULTSPORT Speedster Mens Running Shoes _ Enhanced Grip _ Breathable _ Cushioned Sole _ Running Shoes.jpg"],
    originalPrice: 72 + "$",
    price: parseInt(72 * (1 - parseFloat("55") / 100)),
    discount: "55%",
    EMI: "starts at ₹130. No Cost EMI available",
    offers: ["NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE", "NO OFFERS AVAILABLE"],
    delivery: "FREE delivery",
    deliveryDate: "2 days",
    clientName: "Cocoblu Retail",
    productQuantity: 50,
    DeleveryCharges: 20,
  },
];
export default products;
