import React from "react"
import { Link } from "react-router-dom"
import "../../style/Footer.css"
export default function Footer() {
  return (
    <div id="footerWrapper">
      <div className="footerBlock">
        <h1 className="footerBlockHeader">Для клиентов</h1>
        <ul className="linksList">
          <li className="linksListItem">
            <Link className="footerLink" to="/">
              На главную
            </Link>
          </li>
          <li className="linksListItem">
            <Link className="footerLink" to="/services">
              Услуги
            </Link>
          </li>
          <li className="linksListItem">
            <Link className="footerLink" to="/news">
              Новости
            </Link>
          </li>
          <li className="linksListItem">
            <Link className="footerLink" to="/prices">
              Цены
            </Link>
          </li>
          <li className="linksListItem">
            <Link className="footerLink" to="/photos">
              Фото работ
            </Link>
          </li>
        </ul>
      </div>
      <div className="footerBlock">
        <h1 className="footerBlockHeader">Полезные ссылки</h1>
        <ul className="linksList">
          <li className="linksListItem">
            <Link className="footerLink" to="/faq">
              Популярные вопросы
            </Link>
          </li>
          <li className="linksListItem">
            <Link className="footerLink" to="/faq">
              Популярные вопросы
            </Link>
          </li>
          <li className="linksListItem">
            <Link className="footerLink" to="/services/make-order">
              Сделать заказ
            </Link>
          </li>
          <li className="linksListItem">
            <Link className="footerLink" to="/services">
              Сферы деятельности
            </Link>
          </li>
          <li className="linksListItem">
            <Link className="footerLink" to="/free-call">
              Вызов оценщика
            </Link>
          </li>
          <li className="linksListItem">
            <Link className="footerLink" to="/comment">
              Оставить отзыв
            </Link>
          </li>
          <li className="linksListItem">
            <Link className="footerLink" to="comment-requirements">
              Требования к публикации отзывов
            </Link>
          </li>
          <li className="linksListItem">
            <Link className="footerLink" to="/for-attendees">
              Для соискателей работы
            </Link>
          </li>
          <li className="linksListItem">
            <Link className="footerLink" to="/law-docs">
              Нормативно-правовая база
            </Link>
          </li>
        </ul>
      </div>
      <div className="footerBlock">
        <h1 className="footerBlockHeader">Мы в соцсетях</h1>
        <ul className="linksList">
          <li className="linksListItem">
            <a className="footerLink" href="https://www.instagram.com/sawaxe">
              <img
                className="socMediaFooterPic"
                src="/assets/instagramLogo.png"
                alt="instagram"
              />{" "}
              Instagram
            </a>
          </li>
          <li className="linksListItem">
            <a className="footerLink" href="https://www.meta.com/SawaxeCo.">
              <img
                className="socMediaFooterPic"
                src="/assets/Facebook_logo.png"
                alt="meta(facebook)"
              />
              Meta (Facebook)
            </a>
          </li>
        </ul>
      </div>
      <div className="footerBlock">
        <h1 className="footerBlockHeader">Связаться с нами</h1>
        <ul className="linksList">
          <li className="linksListItem">
            <a className="footerLink" href="mailto: sawaxeco@gmail.com">
              sawaxeco@gmail.com
            </a>
          </li>
          <li className="linksListItem">
            <a className="footerLink" href="phone: +380954472192">
              +(380)-95-447-21-92
            </a>
            <br />
            <a className="footerLink" href="phone: +380974472192">
              +(380)-97-447-21-92
            </a>
            <br />
            <a className="footerLink" href="phone: +380504472192">
              +(380)-50-447-21-92
            </a>
            <br />
            <a className="footerLink">(Telegram, Viber, WhatsApp)</a>
          </li>
        </ul>
      </div>
    </div>
  )
}
