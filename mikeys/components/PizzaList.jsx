import styles from "../styles/PizzaList.module.css"
import Pizzacard from "./PizzaCard"

const PizzaList = () => {
    return (
        <div className={styles.container}>
            <h1 className="styles.title">The Best Pizza in Town</h1>
            <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div className={styles.wrapper}>
                <Pizzacard />
            </div>
        </div>
    )
}

export default PizzaList
