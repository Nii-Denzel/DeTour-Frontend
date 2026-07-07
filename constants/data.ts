import {
  Attraction,
  Booking,
  Guide,
  PhraseEntry,
  SafetyAlert,
  Transaction,
} from "../types";

export const ATTRACTIONS: Attraction[] = [
  {
    id: "1",
    name: "Cape Coast Castle",
    location: "Cape Coast, Ghana",
    rating: 4.8,
    reviews: 512,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Cape_Coast_Castle.jpg/1200px-Cape_Coast_Castle.jpg",
    category: "heritage",
    distance: "145 km",
    entryFee: "GHS 50",
    openHours: "9:00 AM – 5:00 PM",
    description:
      "A UNESCO World Heritage Site and one of the most important historical sites in West Africa.",
    amenities: ["Parking", "Guide", "Museum", "Gift Shop"],
  },
  {
    id: "2",
    name: "Kwame Nkrumah Mausoleum",
    location: "Accra, Ghana",
    rating: 4.6,
    reviews: 290,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Kwame_Nkrumah_Memorial_Park.jpg/1200px-Kwame_Nkrumah_Memorial_Park.jpg",
    category: "attraction",
    distance: "3 km",
    entryFee: "GHS 20",
    openHours: "8:00 AM – 6:00 PM",
    description:
      "The mausoleum and memorial park dedicated to Ghana's first president.",
    amenities: ["Parking", "Guide", "Museum"],
  },
  {
    id: "3",
    name: "Kakum National Park",
    location: "Cape Coast, Ghana",
    rating: 4.8,
    reviews: 312,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Kakum_Canopy_Walkway.jpg/1200px-Kakum_Canopy_Walkway.jpg",
    category: "park",
    distance: "150 km",
    entryFee: "GHS 60",
    openHours: "7:00 AM – 5:00 PM",
    description:
      "A tropical forest with a famous canopy walkway 30 meters above the forest floor.",
    amenities: ["Parking", "Guide", "Food", "Rest Area"],
  },
  {
    id: "4",
    name: "Wli Waterfalls",
    location: "Volta Region, Ghana",
    rating: 4.7,
    reviews: 215,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Wli_Waterfalls.jpg/800px-Wli_Waterfalls.jpg",
    category: "attraction",
    distance: "185 km",
    entryFee: "GHS 30",
    openHours: "6:00 AM – 6:00 PM",
    description:
      "The highest waterfall in West Africa and a breathtaking natural wonder.",
    amenities: ["Parking", "Rest Area", "Food", "Guide"],
  },
  {
    id: "5",
    name: "Labadi Beach",
    location: "Accra, Ghana",
    rating: 4.4,
    reviews: 120,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Labadi_beach_accra_ghana.jpg/1200px-Labadi_beach_accra_ghana.jpg",
    category: "beach",
    distance: "2.3 km",
    entryFee: "GHS 10",
    openHours: "7:00 AM – 9:00 PM",
    description:
      "The most popular beach in Accra, known for music, food, and vibrant atmosphere.",
    amenities: ["Parking", "Food", "Rest Area"],
  },
];

export const BOOKINGS: Booking[] = [
  {
    id: "b1",
    attractionName: "Wli Waterfalls Tour",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Wli_Waterfalls.jpg/800px-Wli_Waterfalls.jpg",
    date: "May 25, 2025",
    time: "8:00 AM",
    guide: "Kofi Mensah",
    people: 2,
    status: "upcoming",
    totalAmount: 350,
  },
  {
    id: "b2",
    attractionName: "Cape Coast Castle Tour",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Cape_Coast_Castle.jpg/1200px-Cape_Coast_Castle.jpg",
    date: "June 2, 2025",
    time: "10:00 AM",
    guide: "Ama Yeboah",
    people: 2,
    status: "upcoming",
    totalAmount: 280,
  },
];

export const TRANSACTIONS: Transaction[] = [
  {
    id: "t1",
    name: "Wli Waterfalls Tour",
    date: "May 20, 2025",
    amount: 350,
    status: "paid",
  },
  {
    id: "t2",
    name: "Kakum Park Entry",
    date: "May 18, 2025",
    amount: 40,
    status: "paid",
  },
  {
    id: "t3",
    name: "Aburi Botanical Garden",
    date: "May 16, 2025",
    amount: 30,
    status: "paid",
  },
];

export const GUIDES: Guide[] = [
  {
    id: "g1",
    name: "Kofi Mensah",
    title: "Licensed Guide",
    rating: 4.9,
    reviews: 98,
    image: "",
    pricePerGroup: 350,
  },
  {
    id: "g2",
    name: "Ama Yeboah",
    title: "Licensed Guide",
    rating: 4.7,
    reviews: 64,
    image: "",
    pricePerGroup: 280,
  },
];

export const PHRASES: PhraseEntry[] = [
  {
    english: "Welcome",
    twi: "Akwaaba",
    ga: "Oobakε",
    ewe: "Woezon",
    hausa: "Sannu",
  },
  {
    english: "Thank you",
    twi: "Medaase",
    ga: "Oyiwaladon",
    ewe: "Akpe",
    hausa: "Na gode",
  },
  {
    english: "Goodbye",
    twi: "Yεbeshyia Pa",
    ga: "Wɔbaa kpe",
    ewe: "Hede nyui",
    hausa: "Sai anjima",
  },
  {
    english: "How are you?",
    twi: "Wɔho te sεn?",
    ga: "Tetεnn?",
    ewe: "Efɔa?",
    hausa: "Yaya dai?",
  },
  {
    english: "My name is...",
    twi: "Me din de...",
    ga: "Atsεɔ mi...",
    ewe: "Ŋkɔnyem nye...",
    hausa: "Sunana...",
  },
  {
    english: "What is your name?",
    twi: "Ma wo mpe sεn?",
    ga: "Te atsεɔ bo tεnn?",
    ewe: "Nkɔwo nye?",
    hausa: "Menene sunanka?",
  },
  {
    english: "Please",
    twi: "Mesrε",
    ga: "Ofainε",
    ewe: "Meɖekuku",
    hausa: "Don Allah",
  },
  {
    english: "I am sorry",
    twi: "Kafra",
    ga: "Ofainε",
    ewe: "Hede nyui",
    hausa: "Yi haƙuri",
  },
];

export const SAFETY_ALERTS: SafetyAlert[] = [
  {
    id: "s1",
    message: "Heavy rainfall expected in Volta Region",
    datetime: "May 24, 2025 – 10:30 AM",
    severity: "warning",
  },
];
