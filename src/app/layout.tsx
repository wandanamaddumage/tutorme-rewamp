import "./globals.css";
import Navbar from "../components/Navbar/index";
import Footer from "../components/Footer/index";

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
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
