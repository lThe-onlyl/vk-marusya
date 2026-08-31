import styles from "./page.module.css";
import { Input } from "@/components/ui/Input/Input";

export default function Home() {
  return (
    <div className="app">
      <Input placeholder="Поиск" />

      <Input placeholder="Имя" />

      <Input placeholder="Фамилия" />

      <Input placeholder="Электронная почта" />

      <Input placeholder="Пароль" />
    </div>
  );
}
