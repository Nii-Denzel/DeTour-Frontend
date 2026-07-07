export type Attraction = {
  id: string;
  name: string;
  location: string;
  rating: number;
  reviews: number;
  image: string;
  category: "attraction" | "beach" | "park" | "heritage";
  distance?: string;
  entryFee?: string;
  openHours?: string;
  description?: string;
  amenities?: string[];
};

export type Booking = {
  id: string;
  attractionName: string;
  image: string;
  date: string;
  time: string;
  guide?: string;
  people: number;
  status: "upcoming" | "completed" | "cancelled";
  totalAmount: number;
};

export type Transaction = {
  id: string;
  name: string;
  date: string;
  amount: number;
  status: "paid" | "pending";
};

export type Guide = {
  id: string;
  name: string;
  title: string;
  rating: number;
  reviews: number;
  image: string;
  pricePerGroup: number;
};

export type PhraseEntry = {
  twi: string;
  ga?: string;
  ewe?: string;
  hausa?: string;
  english: string;
};

export type SafetyAlert = {
  id: string;
  message: string;
  datetime: string;
  severity: "warning" | "danger";
};
