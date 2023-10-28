"use client";
import HospitalDateReserve from "@/components/HospitalalDateReserve";
import { Button, TextField } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { BookingItem } from "../../interface";
import { addBooking } from "@/redux/features/bookSlice";

export default function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [id, setId] = useState("");

  const [bookDate, setBookDate] = useState<Dayjs | null>(null);
  const [bookHospital, setBookHospital] = useState("");

  const dispatch = useDispatch<AppDispatch>();

  const makeBooking = () => {
    if (
      firstName != "" &&
      lastName != "" &&
      id != "" &&
      bookDate &&
      bookHospital != ""
    ) {
      const item: BookingItem = {
        firstname: firstName,
        lastname: lastName,
        idNumber: id,
        bookedHospital: bookHospital,
        bookedDate: dayjs(bookDate).format("YYYY/MM/DD"),
      };
      dispatch(addBooking(item));
      alert("Book Success!");
    }
  };

  return (
    <form name="vaccine-booking" className="flex flex-col items-center">
      <div className="w-full mb-5">
        <p className="left-0 text-gray-500 text-xl">Name</p>
        <div className=" w-full flex justify-between px-10 py-5 bg-slate-100 rounded-lg">
          <TextField
            id="name"
            label="Firstname"
            variant="standard"
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
          <TextField
            id="lastname"
            label="Lastname"
            variant="standard"
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        </div>
      </div>

      <div className="w-full mb-5">
        <p className="left-0 text-gray-500 text-xl">Identification Number</p>
        <div className=" w-full flex justify-between px-10 py-5 bg-slate-100 rounded-lg">
          <TextField
            id="idNumber"
            variant="standard"
            fullWidth
            inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
            onChange={(e) => {
              setId(e.target.value);
            }}
          />
        </div>
      </div>

      <div className="w-full mb-5">
        <p className="left-0 text-gray-500 text-xl">Date and Hospital</p>
        <HospitalDateReserve
          onDateChanged={(value: Dayjs) => {
            setBookDate(value);
          }}
          onLocationChanged={(value: string) => {
            setBookHospital(value);
          }}
        />
      </div>

      <Button variant="contained" className="bg-blue-500" onClick={makeBooking}>
        Book
      </Button>
    </form>
  );
}
