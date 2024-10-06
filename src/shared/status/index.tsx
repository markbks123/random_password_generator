import { StatusProps } from "./status.types";
import styles from"./status.module.css";
import cx from"classnames"

const Status:React.FC<StatusProps> = ({className,title,values}) => {
    return <div className={cx(styles.container, className)}>
        {title && <p>{title}</p>}
        {values.map(
            (element, index) => element.value !== "-" && (
                <div key={index} className={styles[element.color]}>
                    <p>{element.value}</p>
                </div>
            )
        )}
    </div>;

}

export default  Status