import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { BookingItem } from "../../../interface";

type BookState = {
  bookingItems: BookingItem[];
};

const initialState: BookState = { bookingItems: [] };

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    addBooking: (state, action: PayloadAction<BookingItem>) => {
      // state.bookingItems.push(action.payload);
      state.bookingItems = [action.payload];
    },
    removeBooking: (state, action: PayloadAction<BookingItem>) => {
      const remainItems = state.bookingItems.filter((obj) => {
        obj.bookedHospital !== action.payload.bookedHospital ||
          obj.bookedDate !== action.payload.bookedDate;
      });

      state.bookingItems = remainItems;
    },
  },
});

export const { addBooking, removeBooking } = bookSlice.actions;
export default bookSlice.reducer;
