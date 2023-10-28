"use client";
import { MenuItem, Select } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useState } from "react";
import { Dayjs } from "dayjs";

export default function HospitalDateReserve({
  onDateChanged,
  onLocationChanged,
}: {
  onDateChanged: Function;
  onLocationChanged: Function;
}) {
  const [bookDate, setBookDate] = useState<Dayjs | null>(null);
  const [hospital, setHospital] = useState("");

  return (
    <div className="flex flex-row justify-center items-center space-x-5 space-y--2 w-fit px-10 py-5 bg-slate-100 rounded-lg">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          value={bookDate}
          onChange={(value) => {
            setBookDate(value);
            onDateChanged(value);
          }}
          className="bg-white"
        />
      </LocalizationProvider>
      <Select
        variant="standard"
        name="hospital"
        id="hospital"
        value={hospital}
        onChange={(e) => {
          setHospital(e.target.value);
          onLocationChanged(e.target.value);
        }}
        className="h-[2rem] w-[200px]"
      >
        <MenuItem value="Chulalongkorn">Chulalongkorn Hospital</MenuItem>
        <MenuItem value="Rajavithi">Rajavithi Hospital</MenuItem>
        <MenuItem value="Thammasat University">
          Thammasat University Hospital
        </MenuItem>
      </Select>
    </div>
  );
}
