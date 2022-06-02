import React from "react"
import Navigation from "../Navigation/Navigation"
import { Outlet } from "react-router-dom"
import Footer from "../Footer"
export default function Layout() {
  return (
    <div id="layout">
      <Navigation />
      <div id="main">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
