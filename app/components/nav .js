import styles from "./nav.module.css"

export default function Nav() {
    return (
        <header>
        <div className={styles.container}>
            <nav className={styles.nav}>
                <h3>O M A R /<span>/S O S A</span></h3>
            <ul className={styles.navul}>
                <li className={styles.yt}><a href="https://www.youtube.com/@omarsosa8622" target="_blank">Youtube/</a></li>
                <li ><a href="#per">Performances/</a></li>
            </ul>
            </nav>
            <hr></hr>
        </div>
</header>
    )
  }