'use client'
import { faAngleUp, faArrowAltCircleUp, faUpDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from "react";
import styles from './aside.module.css'

export default function Aside(){
    const [btnActive, setBtnActive] = useState(false);
    const scrolltoTop = () =>{
      window.scrollTo({top:0 , behavior:"smooth"})
    }
    useEffect(() => {
      const ShowButton = () => {
          if (window.scrollY > 100) {
            setBtnActive(true)
          } else {
            setBtnActive(false)
          }
      }
  
      window.addEventListener("scroll", ShowButton)
      return () => {
          window.removeEventListener("scroll", ShowButton)
      }
    }, [])
  

    return(
        <>
        {
        btnActive &&
        <>
        <div className="fixed bottom-0 right-0 max-w-full z-[50] ">
          <button type="button" className={`${styles.btnSmart}`}></button>
          <button type='button'  className={`${styles.btnTop}`} onClick={scrolltoTop}></button>
        </div>
        </>
      } 
        </>
    )
}