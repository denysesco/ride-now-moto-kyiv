import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Fallback in-memory store if Supabase not configured
const memoryStore = [];

export async function saveBooking(data) {
  if (supabaseUrl && supabaseAnonKey) {
    const { data: result, error } = await supabase
      .from('bookings')
      .insert([{ ...data, created_at: new Date().toISOString() }])
      .select();
    if (error) throw error;
    return result[0];
  }

  // Fallback: save to memory
  const booking = {
    id: memoryStore.length + 1,
    ...data,
    created_at: new Date().toISOString(),
  };
  memoryStore.push(booking);
  return booking;
}

export async function getBookings() {
  if (supabaseUrl && supabaseAnonKey) {
    const { data, error } = await supabase
      .from('bookings')
      .select('*')
      .order('created_at', { ascending: false });
    if (error) throw error;
    return data;
  }
  return [...memoryStore].reverse();
}

export async function updateBookingStatus(id, status) {
  if (supabaseUrl && supabaseAnonKey) {
    const { data, error } = await supabase
      .from('bookings')
      .update({ status, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select();
    if (error) throw error;
    return data[0];
  }

  const idx = memoryStore.findIndex(b => b.id === id);
  if (idx >= 0) {
    memoryStore[idx].status = status;
    return memoryStore[idx];
  }
  return null;
}
