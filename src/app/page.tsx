import { Button } from "@/components/ui/Button/Button";
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

      <Button variant="primary">Primary</Button>

      <Button variant="primary" disabled>
        Primary disabled
      </Button>

      <Button variant="secondary">Secondary</Button>

      <Button variant="secondary" disabled>
        Secondary disabled
      </Button>
    </div>
  );
}
