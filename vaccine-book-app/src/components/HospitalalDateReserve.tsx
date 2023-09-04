"use client";
import { MenuItem, Select } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export default function HospitalDateReserve() {
  return (
    <div className="flex flex-row justify-center items-center space-x-5 space-y--2 w-fit px-10 py-5 bg-slate-100 rounded-lg">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker className="bg-white" />
      </LocalizationProvider>
      <Select
        variant="standard"
        name="hospital"
        id="hospital"
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
