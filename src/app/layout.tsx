import type { Metadata } from "next";
import { Header } from "@/components/Layout/Header/Header";
import { Footer } from "@/components/Layout/Footer/Footer";
import { AuthProvider } from "@/context/AuthContext";
import "@/styles/_global.scss";
import { FavoritesProvider } from "@/context/FavoritesContext";
import { AuthModalHost } from "@/components/Auth/AuthModalHost/AuthModalHost";

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
        <AuthProvider>
          <FavoritesProvider>
            <div className="app">
              <Header />

              <main className="main">{children}</main>

              <Footer />
            </div>
            <AuthModalHost />
          </FavoritesProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
