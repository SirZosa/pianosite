import styles from "./aboutme.module.css" 


export default function Aboutme() {

    return (
        <div className={styles.container}>
                <h2>About me</h2>
                <div className={styles.content}>
                    <div className={styles.p1}>
                        <h4>Beggining</h4>
                        <p>When I was around 12 years old (2009), I was given as a birthday present a Casio keyboard which had some melodies saved that cab be learned. That was the beggining, but I left the keyboard for some years by different reasons.</p>
                    </div>
                    <img className={styles.img1} src="img/piano.jpg" alt="my actual piano"></img>
                    <div className={styles.p2}>
                    <h4>Later years</h4>
                    <p>At some point of 2016, I gave another chance to my old Casio keyboard, I practiced many songs and I was enjoying it and learning, thats when I decided to start this channel, to record my progress and later on I bought a Yamaha keyboard.</p>
                    </div>
                    <img className={styles.img2} src="img/piano2.jpg" alt="my actual piano"></img>
                    
                </div>
        </div>  
    )
  }