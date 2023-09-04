import HospitalDateReserve from "@/components/HospitalalDateReserve";
import { Button, TextField } from "@mui/material";

export default function Form() {
  return (
    <form name="vaccine-booking" className="flex flex-col items-center">
      <div className="w-full mb-5">
        <p className="left-0 text-gray-500 text-xl">Name</p>
        <div className=" w-full flex justify-between px-10 py-5 bg-slate-100 rounded-lg">
          <TextField id="name" label="Firstname" variant="standard" />
          <TextField id="lastname" label="Lastname" variant="standard" />
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
          />
        </div>
      </div>

      <div className="w-full mb-5">
        <p className="left-0 text-gray-500 text-xl">Date and Hospital</p>
        <HospitalDateReserve />
      </div>

      <Button variant="contained" className="bg-blue-500" type="submit">
        Submit
      </Button>
    </form>
  );
}
