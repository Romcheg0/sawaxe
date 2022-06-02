import React from "react"
import "../../style/MainPage.css"
import Banner from "../Banner/Banner"
import Duties from "../Duties/Duties"
import FreeCall from "../FreeCall/FreeCall"
import Swiper from "../Swiper/Swiper"
import worksPics from "../../worksPics"
import comments from "../../comments.js"
import Reviews from "../Reviews/Reviews"
export default function MainPage() {
  return (
    <section id="mainSection">
      <Banner />
      <Duties />
      <FreeCall />
      <Swiper works={worksPics} />
      <Reviews comments={comments} />
    </section>
  )
}
