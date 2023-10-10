import HospitalCatalog from "@/components/hospitalCatalog";
import { getHospitals } from "@/libs/getHospitals";
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";

export default async function Home() {
  const hospitals = getHospitals();

  return (
    <main className="text-center p-5">
      <h1 className="text-xl font-medium">Select Your Hospital</h1>
      <Suspense
        fallback={
          <div>
            Loading.. <LinearProgress />
          </div>
        }
      >
        <HospitalCatalog hospitalJson={hospitals} />
      </Suspense>
    </main>
  );
}
