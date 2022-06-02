import React from "react"
import "../../style/Navigation.css"
import { Link, NavLink } from "react-router-dom"
export default function Navigation() {
  return (
    <nav>
      <Link to="/">
        <img src="assets/logo.png" alt="logo" id="logoPic" />
      </Link>
      <NavLink to="/" id="mainPageAnchor" className="pageAnchor">
        <div>ГЛАВНАЯ</div>
      </NavLink>
      <NavLink to="/services" id="servicesAnchor" className="pageAnchor">
        <div>УСЛУГИ</div>
      </NavLink>
      <NavLink to="news" id="newsAnchor" className="pageAnchor">
        <div>НОВОСТИ</div>
      </NavLink>
      <NavLink to="prices" id="pricesAnchor" className="pageAnchor">
        <div>ЦЕНЫ</div>
      </NavLink>
      <NavLink to="photos" id="photosAnchor" className="pageAnchor">
        <div>ФОТО РАБОТ</div>
      </NavLink>
      <NavLink to="faq" id="faqAnchor" className="pageAnchor">
        <div>FAQ</div>
      </NavLink>
      <div id="searchBlock">
        <input type="text" id="searchInput" placeholder="Поиск..." />
        <img src="assets/search_icon.png" alt="search" id="searchIcon" />
      </div>
    </nav>
  )
}
