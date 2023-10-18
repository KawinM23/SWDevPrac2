import MenuBar from "@/components/MenuBar";
import "../app/global.css";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import NextAuthProvider from "@/provider/NextAuthProvider";

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
        <NextAuthProvider session={session}>
          <MenuBar />
          <div className="mt-20">{children}</div>
        </NextAuthProvider>
      </body>
    </html>
  );
}
