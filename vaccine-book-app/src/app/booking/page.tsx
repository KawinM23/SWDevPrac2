import Form from "@/components/Form";
import getUserProfile from "@/libs/getUserProfile";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function page() {
  const session = await getServerSession(authOptions);
  let userProfile;
  if (session?.user.token) {
    userProfile = await getUserProfile(session.user.token);
  }
  var createdAt = new Date(userProfile?.data.createdAt);

  return (
    <main className="w-full flex flex-col items-center space-y-4">
      {session && (
        <div id="UserProfile" className="p-4 mt-5 rounded-lg bg-gray-200">
          <table className="table-auto border-separate border-spacing-1">
            <thead>
              <tr>
                <td className="font-bold text-lg">{userProfile.data.name}</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Email:</td>
                <td>{userProfile.data.email}</td>
              </tr>
              <tr>
                <td>Tel.</td>
                <td>{userProfile.data.tel}</td>
              </tr>
              <tr>
                <td>Member Since:</td>
                <td>{createdAt.toUTCString()}</td>
              </tr>
            </tbody>
          </table>
          <p> </p>
        </div>
      )}
      <h1 className="mt-8 text-blue-900">Vaccination Booking</h1>
      <Form />
    </main>
  );
}
