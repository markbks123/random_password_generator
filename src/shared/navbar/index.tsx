import Link from "next/link";
import { navbarProp } from "./navbar.types";
import styles from "./navbar.module.css";
import { FaLock } from "react-icons/fa";
const MyNavBar: React.FC<navbarProp> = ({ logo, links }) => {
  return (
    <div className={styles.container}>
      <FaLock className={styles.icon} />
      <ul>
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyNavBar;
