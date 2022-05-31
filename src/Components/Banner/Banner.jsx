import React from "react"
import { Link } from "react-router-dom"
import "../../style/Banner.css"
export default function Banner() {
  return (
    <div id="banner">
      <h1>Услуги профессионалов по спилу деревьев</h1>
      <h3>и другим ландшафтным работам</h3>
      <Link to="/services/make-order/" id="order">
        Сделать заказ
      </Link>
    </div>
  )
}
