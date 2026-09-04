import "./Footer.scss";
import { Icon } from "../ui/IconProps/IconProps";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <ul className="footer__socials">
          <li className="footer__social">
            <a href="#" className="footer__link">
              <Icon name="icon-vk" className="footer__icon" />
            </a>
          </li>

          <li className="footer__social">
            <a href="#" className="footer__link">
              <Icon name="icon-yt" className="footer__icon" />
            </a>
          </li>

          <li className="footer__social">
            <a href="#" className="footer__link">
              <Icon name="icon-ok" className="footer__icon" />
            </a>
          </li>

          <li className="footer__social">
            <a href="#" className="footer__link">
              <Icon name="icon-tg" className="footer__icon" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
