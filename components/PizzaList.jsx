import styles from "../styles/PizzaList.module.css"
import Pizzacard from "./PizzaCard"

const PizzaList = ({pizzaList}) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>The Best Pizza in Town</h1>
            <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div className={styles.wrapper}>
                {pizzaList.map((pizza) => (
                 <Pizzacard key={pizza._id} pizza={pizza} />
                ))}
            </div>
        </div>
    )
}

export default PizzaList
