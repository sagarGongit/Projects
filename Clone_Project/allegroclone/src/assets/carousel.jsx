import { useState,useEffect } from "react";
import {BsArrowRightCircleFill,BsArrowLeftCircleFill} from 'react-icons/bs'


export default function Carousel(){
     const [slide,setslide] = useState(0);

    const images = [
        {
            "src" : "https://i.imgur.com/RrukRQI.png",
            "alt" : "first"
        },
        {
            "src" : "https://i.imgur.com/BLys3jl.png",
            "alt" : "second"
        },
        {
            "src" : "https://i.imgur.com/t3wnJtF.png",
            "alt" : "first"
        },
        {
            "src" : "https://i.imgur.com/uZ3e4dD.png",
            "alt" : "first"
        }
    ]


     const nextSlide = ()=>{
          setslide(slide >= images.length-1 ? 0 : slide+1)
     }
     const prevSlide = ()=>{
          setslide(slide<=0 ? images.length-1 : slide-1)
    }

   useEffect(()=>{
        const interval = setInterval(()=>{
             setslide(slide === images.length-1 ? 0 : slide+1)
        },10000)
        return ()=>clearInterval(interval)
   },[slide])


    return (
     <>
     <div id="slider">
     {images && images.map((item,idx)=>{
            return (
            <img src={item.src} alt={item.alt} key={idx} className={slide === idx ? "slider-img" : "hidden-slider"} />
            )
        })}
        <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevSlide}/>
        <BsArrowRightCircleFill className="arrow arrow-right" onClick={nextSlide}/>


        <span className="indicators">
            {images && images.map((_,idx)=> {
                return <button key={idx} onClick={()=>setslide(idx)} className={slide===idx ? "indicator" : "indicator indicator-inactive"}></button>
            })}
        </span>
     </div>
     <br /><br />
     </>
    )
}