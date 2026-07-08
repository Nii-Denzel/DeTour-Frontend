import AsyncStorage from "@react-native-async-storage/async-storage";

export type BookingStatus = "upcoming" | "completed" | "cancelled";

export type Booking = {
  id: string;
  attractionId: string;
  attractionName: string;
  image?: string;
  location?: string;
  date: string; // display date (e.g. "May 25, 2025")
  time: string; // display time (e.g. "8:00 AM")
  people: number;
  guide?: string;
  totalAmount: number;
  status: BookingStatus;
  createdAt: string; // ISO
};

const BOOKINGS_KEY = "DETOUR_BOOKINGS_V1";

export async function getBookings(): Promise<Booking[]> {
  try {
    const raw = await AsyncStorage.getItem(BOOKINGS_KEY);
    return raw ? (JSON.parse(raw) as Booking[]) : [];
  } catch (e) {
    console.warn("getBookings error", e);
    return [];
  }
}

export async function saveBooking(booking: Booking): Promise<void> {
  try {
    const current = await getBookings();
    // Prepend newest booking
    const updated = [booking, ...current];
    await AsyncStorage.setItem(BOOKINGS_KEY, JSON.stringify(updated));
  } catch (e) {
    console.warn("saveBooking error", e);
    throw e;
  }
}

export async function clearBookings(): Promise<void> {
  try {
    await AsyncStorage.removeItem(BOOKINGS_KEY);
  } catch (e) {
    console.warn("clearBookings error", e);
  }
}