export interface Product {
  id: string
  name: string
  slug: string
  brand: string
  capacity: string
  power: string
  noise: string
  rating: number
  price: string
  category: "home" | "lab" | "portable"
  description: string
  features: string[]
  specs: {
    [key: string]: string
  }
  amazonLink: string
  image: string
}

export const products: Product[] = [
  {
    id: "1",
    name: "Labconco FreeZone 4.5 Liter Benchtop Freeze Dryer",
    slug: "labconco-freezone-7670041",
    brand: "Labconco",
    capacity: "4.5L",
    power: "750W",
    noise: "42 dB",
    rating: 4.5,
    price: "$8,950",
    category: "lab",
    description:
      "Professional laboratory-grade freeze dryer with PTFE-coated collector for enhanced durability and chemical resistance. Ideal for research and pharmaceutical applications.",
    features: [
      "PTFE-coated collector",
      "Digital control panel",
      "Multiple flask ports",
      "Defrost cycle automation",
      "ISO-certified performance",
    ],
    specs: {
      Capacity: "4.5 liters",
      Dimensions: '20" W x 28" D x 32" H',
      Weight: "145 lbs",
      Voltage: "220V",
      "Cycle Time": "18-30 hours",
      Warranty: "5 years",
    },
    amazonLink: "https://www.amazon.com/Labconco-7670041-FreeZone-PTFE-Coated-Collector/dp/B00BWXNLBY",
    image: "https://m.media-amazon.com/images/I/51tjeCRcRQL._SX522_.jpg",
  },
  {
    id: "2",
    name: "Large Metal Trays for Harvest Right Freeze Dryer",
    slug: "harvest-right-large-trays",
    brand: "ofhedeve",
    capacity: "N/A",
    power: "N/A",
    noise: "N/A",
    rating: 4.5,
    price: "$113.99",
    category: "accessory",
    description:
      "Set of 6 large stainless steel trays designed specifically for Harvest Right home pro freeze dryer. Food-grade material for safe and durable use.",
    features: [
      "Custom design for large Harvest Right",
      "Food-grade stainless steel",
      "Dishwasher safe",
      "Non-stick surface",
      "Rust-resistant",
    ],
    specs: {
      Capacity: "Large-6pcs",
      Dimensions: '20.5" L x 9" W x 0.8" H',
      Weight: "12.92 lbs",
      Material: "Stainless Steel",
      Color: "Stainless Steel",
      Warranty: "1 year",
    },
    amazonLink: "https://www.amazon.com/Large-Harvest-Freeze-freeze-Large-6pcs/dp/B0FM4223RJ",
    image: "https://m.media-amazon.com/images/I/61ubSB9MTtL._AC_SX679_.jpg",
  },
  {
    id: "3",
    name: "Labconco FreeZone 2.5 Liter Benchtop Freeze Dryer",
    slug: "labconco-freezone-7670531",
    brand: "Labconco",
    capacity: "2.5L",
    power: "650W",
    noise: "40 dB",
    rating: 4.5,
    price: "$7,500",
    category: "lab",
    description:
      "Compact laboratory freeze dryer with PTFE-coated collector for corrosion resistance. Suitable for smaller scale research and sample preparation.",
    features: [
      "PTFE-coated collector",
      "Compact design",
      "Data logging capability",
      "Easy maintenance",
      "High efficiency",
    ],
    specs: {
      Capacity: "2.5 liters",
      Dimensions: '18" W x 24" D x 28" H',
      Weight: "120 lbs",
      Voltage: "220V",
      "Cycle Time": "16-28 hours",
      Warranty: "5 years",
    },
    amazonLink: "https://www.amazon.com/Labconco-7670531-FreeZone-PTFE-Coated-Collector/dp/B00BWXNS7Q",
    image: "https://m.media-amazon.com/images/I/51vAOnG3pwL._SX522_.jpg",
  },
  {
    id: "4",
    name: "Fendia Food Dehydrator with 12 Trays",
    slug: "fendia-dehydrator-12-trays",
    brand: "fendia",
    capacity: "12 trays",
    power: "1200W",
    noise: "35 dB",
    rating: 4,
    price: "$163.98",
    category: "dehydrator",
    description:
      "Commercial-grade food dehydrator with 12 stainless steel trays for jerky, fruits, and herbs. Features temperature control and overheat protection.",
    features: [
      "360° airflow circulation",
      "24-hour timer",
      "Ultra-quiet operation",
      "Stainless steel construction",
      "Multiple accessories included",
    ],
    specs: {
      Capacity: "12 trays (11x7.9 inches each)",
      Dimensions: '12.2" D x 11.8" W x 16.1" H',
      Weight: "15 lbs",
      Voltage: "110V",
      Temperature: "86°F-194°F",
      Warranty: "1 year",
    },
    amazonLink: "https://www.amazon.com/Dehydrator-Stainless-Temperature-Overheat-Protection/dp/B0DS5VZBG8",
    image: "https://m.media-amazon.com/images/I/71kFIHlfPGL._AC_SX679_.jpg",
  },
  {
    id: "5",
    name: "Harvest Right Freeze Dryer Accessory Kit",
    slug: "harvest-right-accessory-kit",
    brand: "Harvest Right",
    capacity: "N/A",
    power: "N/A",
    noise: "N/A",
    rating: 4,
    price: "$99.99",
    category: "accessory",
    description:
      "Comprehensive accessory kit for Harvest Right freeze dryers, including trays, lids, and mats for enhanced functionality.",
    features: [
      "Reusable silicone mats",
      "Stackable design",
      "Food-grade materials",
      "Easy cleaning",
      "Compatible with large models",
    ],
    specs: {
      Capacity: "Multiple pieces",
      Dimensions: 'Varies',
      Weight: "5 lbs",
      Material: "Silicone and Stainless Steel",
      Color: "Mixed",
      Warranty: "1 year",
    },
    amazonLink: "https://www.amazon.com/dp/B0F8HG7BWC",
    image: "https://m.media-amazon.com/images/I/81aVkSqeT+L._AC_SX679_.jpg",
  },
  {
    id: "6",
    name: "COSORI Food Dehydrator",
    slug: "cosori-dehydrator",
    brand: "COSORI",
    capacity: "6 trays",
    power: "600W",
    noise: "38 dB",
    rating: 4.5,
    price: "$159.99",
    category: "dehydrator",
    description:
      "Stainless steel food dehydrator with precise temperature control. Perfect for home use in drying fruits, jerky, and herbs.",
    features: [
      "Digital control",
      "Even drying",
      "Dishwasher safe trays",
      "Overheat protection",
      "Compliant with safety standards",
    ],
    specs: {
      Capacity: "6 trays",
      Dimensions: '13.4" x 17.8" x 12.4"',
      Weight: "23.1 lbs",
      Voltage: "110V",
      Temperature: "95°F-165°F",
      Warranty: "2 years",
    },
    amazonLink: "https://www.amazon.com/COSORI-Dehydrator-Stainless-Temperature-Compliant/dp/B07PY5M579",
    image: "https://m.media-amazon.com/images/I/81Gik0nihuL._AC_SX679_.jpg",
  },
  {
    id: "7",
    name: "Anova Culinary Precision Vacuum Sealer Pro",
    slug: "anova-vacuum-sealer-pro",
    brand: "Anova Culinary",
    capacity: "N/A",
    power: "110W",
    noise: "40 dB",
    rating: 4.1,
    price: "$109.00",
    category: "sealer",
    description:
      "Professional vacuum sealer for sous vide and food storage. Includes bag roll and supports wet/dry sealing modes.",
    features: [
      "One-hand operation",
      "Marinade friendly",
      "Built-in bag cutter",
      "Accessory port",
      "2-year warranty",
    ],
    specs: {
      Capacity: "19ft bag roll",
      Dimensions: '14.6" x 5.5" x 3.1"',
      Weight: "3.5 lbs",
      Voltage: "110V",
      Modes: "Wet/Dry/Seal/Pulse",
      Warranty: "2 years",
    },
    amazonLink: "https://www.amazon.com/Anova-Culinary-Precision-Vacuum-Storage/dp/B08F8SMSC4",
    image: "https://m.media-amazon.com/images/I/71oCcvN+13L._AC_SX679_.jpg",
  },
  {
    id: "9",
    name: "Silicone Tray Mats for Harvest Right Freeze Dryer",
    slug: "silicone-mats-harvest-right",
    brand: "Harvest Right",
    capacity: "N/A",
    power: "N/A",
    noise: "N/A",
    rating: 4.5,
    price: "$29.99",
    category: "accessory",
    description:
      "Reusable silicone mats for Harvest Right freeze dryer trays. Non-stick and food-grade for easy food release.",
    features: [
      "Reusable accessory",
      "Food-grade silicone",
      "Easy to clean",
      "Fits large trays",
      "Set of 6",
    ],
    specs: {
      Capacity: "6 PCS",
      Dimensions: '19.75" x 8.4"',
      Weight: "1 lb",
      Material: "Silicone",
      Color: "Gray",
      Warranty: "1 year",
    },
    amazonLink: "https://www.amazon.com/Silicone-harvest-freeze-Harvest-accessories/dp/B0FH9TQPCW",
    image: "https://m.media-amazon.com/images/I/71zv-BM7liL._AC_SX679_.jpg",
  },
]
