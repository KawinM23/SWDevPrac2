import MenuBar from "@/components/MenuBar";
import "../app/global.css";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import NextAuthProvider from "@/provider/NextAuthProvider";
import ReduxProvider from "@/redux/ReduxProvider";

export const metadata = {
  title: "Vaccination Service",
  description: "Generated by Next.js",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        <ReduxProvider>
          <NextAuthProvider session={session}>
            <MenuBar />
            <div className="mt-20">{children}</div>
          </NextAuthProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
