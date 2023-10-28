"use client";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import { removeBooking } from "@/redux/features/bookSlice";

export default function MyBooking() {
  const bookItems = useAppSelector((state) => state.bookSlice.bookingItems);
  const dispatch = useDispatch<AppDispatch>();

  if (bookItems.length == 0) {
    return <div>No Vaccine Booking</div>;
  }

  return (
    <div>
      {bookItems.map((bookingItem, index) => {
        return (
          <div className="bg-slate-200 rounded px-5 mx-5 py-2 my-2" key={index}>
            <div className="text-xl">
              Name: {bookingItem.firstname} {bookingItem.lastname}
            </div>
            <div className="text-lg">ID: {bookingItem.idNumber}</div>
            <div className="text-lg">
              Hospital: {bookingItem.bookedHospital}
            </div>
            <div className="text-lg">Date: {bookingItem.bookedDate}</div>
            <button
              className="my-1 py-2 px-3 text-white bg-red-800 hover:bg-red-500 rounded"
              onClick={() => {
                dispatch(removeBooking(bookingItem));
              }}
            >
              Cancel
            </button>
          </div>
        );
      })}
    </div>
  );
}
