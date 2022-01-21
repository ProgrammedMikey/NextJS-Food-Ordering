import styles from "../styles/Footer.module.css"
import Image from "next/image"

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.container}>
                <Image src="/img/bg.png" objectFit="cover" layout="fill" alt="" />
            </div>
            <div className={styles.item}>
                <div className={styles.card}>
                    <h2 className={styles.motto}>
                        Well Baked Slice of PIZZA.
                    </h2>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>Find our Restaurants</h1>
                    <p className={styles.text}>
                        1234 Main Street #304. 
                        <br /> Kissimmee, 85022
                        <br /> (800) 444 4444
                    </p>
                    <p className={styles.text}>
                        1234 Martin Luther #101. 
                        <br /> Orlando, 85069
                        <br /> (800) 444 4445
                    </p>
                </div>
                <div className={styles.card}> 
                    <h1 className={styles.title}>Working Hours</h1>
                    <p className={styles.text}>
                        MONDAY UNTIL FRIDAY 
                        <br /> 9:00AM - 10:00PM
                    </p>
                    <p className={styles.text}>
                        SATURDAY - SUNDAY 
                        <br /> 12:00 - 1200
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer
