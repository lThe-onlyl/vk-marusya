import type { Metadata } from "next";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import "@/styles/_global.scss";

export const metadata: Metadata = {
  title: "Маруся",
  description: "Онлайн-платформа для поиска и просмотра фильмов",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <div className="app">
          <Header />

          <main className="main">{children}</main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
