import Footer from "@/src/components/shared/footer";
import NavBar from "@/src/components/shared/navbar";
import "./globals.css";

export const metadata = {
  title: "Tutor Me",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main>
          <NavBar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
