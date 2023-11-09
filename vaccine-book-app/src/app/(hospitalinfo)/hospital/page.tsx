import HospitalCatalog from "@/components/hospitalCatalog";
import { getHospitals } from "@/libs/getHospitals";
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";
import AddHospitalForm from "@/components/AddHospitalForm";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import getUserProfile from "@/libs/getUserProfile";

export default async function Home() {
  const hospitals = getHospitals();
  const session = await getServerSession(authOptions);
  let userProfile;
  if (session?.user.token) {
    userProfile = await getUserProfile(session.user.token);
  }

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
      {userProfile?.data.role == "admin" && <AddHospitalForm />}
    </main>
  );
}
