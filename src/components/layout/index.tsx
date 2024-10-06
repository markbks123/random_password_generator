import { LayoutContainerProps } from "./layout.types";
import styles from "./layout.module.css";
const Layout: React.FC<LayoutContainerProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <main>
        <div className={styles.content}>{children}</div>
      </main>
    </div>
  );
};

export default Layout;
