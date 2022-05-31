import React from "react"
import Navigation from "../Navigation/Navigation"
import "../../style/MainPage.css"
import Banner from "../Banner/Banner"
import Duties from "../Duties/Duties"
export default function MainPage() {
  return (
    <section id="mainSection">
      <Banner />
      <Duties />
    </section>
  )
}
