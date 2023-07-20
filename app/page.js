"use client"
import Nav from "./components/nav "
import Aboutme from "./components/aboutme"
import styles from "./components/main.module.css"
import Footer from "./components/footer"


import { video } from "./data.js"
import { useState } from "react"


export default function Home() {
  const [link, setLink] = useState(0)
  console.log(link)

  function next(){
    setLink(prev => {
      if(prev + 1 === video.length){
        return 0
      }
      else return prev + 1
    })
  }

  function previus(){
    setLink(prev => {
      if(prev === 0){
        return 11
      }
      else return prev - 1
    })
  }
  

  return (
    <main>
      <Nav />
      <Aboutme />
      <div className={styles.container}>
                <h3 id="per">My performances</h3>
                <iframe className={styles.video} 
                src={video[link].link}
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <div className={styles.videoSelector}>
                  <span onClick={previus}>&#8656;</span>
                  <h4>{video[link].name}</h4>
                  <span onClick={next}>&#8658;</span>
                </div>
                
                  <p>These are some of my best performances I recorded. Between recordigs I can see my self how I was improving on the piano, editing the videos and right now I see my self improving in my programing skills as I develop this website my self.</p>
            </div>
            <br></br>
            <Footer />
            
    </main>
  )
}
