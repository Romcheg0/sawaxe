import React, { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import "../../style/Swiper.css"
export default function Swiper({ works }) {
  const [carouselWidth, setCarouselWidth] = useState(0)
  const carousel = useRef()
  useEffect(() => {
    setCarouselWidth(
      carousel.current.scrollWidth - carousel.current.offsetWidth
    )
  }, [])

  return (
    <div id="swiperWrapper">
      <h1 id="swiperHeader">Более десяти лет на рынке</h1>
      <motion.div id="outerCarousel" ref={carousel}>
        <motion.div
          id="innerCarousel"
          drag="x"
          dragConstraints={{ left: -carouselWidth, right: 10 }}
        >
          {works.map((photo) => {
            return (
              <div
                className="pic"
                key={photo}
                style={{ background: `url("/assets/${photo}")` }}
              ></div>
            )
          }, Date.now())}
        </motion.div>
      </motion.div>
    </div>
  )
}
