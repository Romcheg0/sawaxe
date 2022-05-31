import React from "react"
import { Link } from "react-router-dom"
import "../../style/Duties.css"
export default function Duties() {
  return (
    <div id="wrapper">
      <div id="heading">
        <h1>Сфера нашей деятельности</h1>
        <Link to="services/" id="viewAllLink">
          Смотреть все
        </Link>
      </div>
      <div id="body">
        <div className="duties">
          <img src="assets/spil.png" alt="duty pic" className="dutiesPic" />
          <h1 className="dutiesTitle">Спил деревьев</h1>
          <p className="dutiesDescription">
            Услуги по спилу деревьев любой высоты с помощью автовышек,
            промышленных альпинистов и других технологий
          </p>
          <Link to="services/spil" className="dutiesLink">
            Подробнее...
          </Link>
        </div>
        <div className="duties">
          <img src="assets/gazon.png" alt="duty pic" className="dutiesPic" />
          <h1 className="dutiesTitle">Постил газона</h1>
          <p className="dutiesDescription">
            Постил рулонного декоративного газона для озеленения придомовой
            територии
          </p>
          <Link to="services/postil_gazona" className="dutiesLink">
            Подробнее...
          </Link>
        </div>
        <div className="duties">
          <img src="assets/klumba.png" alt="duty pic" className="dutiesPic" />
          <h1 className="dutiesTitle">Высаживание клумб</h1>
          <p className="dutiesDescription">
            Проектирование фасадов клумб, оценка сочетания окраски цветов и
            оградки
          </p>
          <Link to="services/vysadka_klumb" className="dutiesLink">
            Подробнее...
          </Link>
        </div>
        <div className="duties">
          <img src="assets/uchastok.png" alt="duty pic" className="dutiesPic" />
          <h1 className="dutiesTitle">Планирование придомовой територии</h1>
          <p className="dutiesDescription">
            Услуги по планированию ландшафтного дизайна, оценка стоимости и
            сроков работ на участке
          </p>
          <Link to="services/planirovanie_uchastka" className="dutiesLink">
            Подробнее...
          </Link>
        </div>
        <div className="duties">
          <img
            src="assets/kronirovanie.png"
            alt="duty pic"
            className="dutiesPic"
          />
          <h1 className="dutiesTitle">Кронирование деревьев</h1>
          <p className="dutiesDescription">
            Обслуживание крон деревьев, декоративная обрезка, устранение
            аварийных ситуаций
          </p>
          <Link to="services/kronirovanie" className="dutiesLink">
            Подробнее...
          </Link>
        </div>
        <div className="duties">
          <img
            src="assets/vysadka_dereview.png"
            alt="duty pic"
            className="dutiesPic"
          />
          <h1 className="dutiesTitle">Высаживание деревьев</h1>
          <p className="dutiesDescription">
            Высаживание деревьев высотой до одного яруса, консультация по уходу
          </p>
          <Link to="services/vysadka_dereview" className="dutiesLink">
            Подробнее...
          </Link>
        </div>
        <div className="duties">
          <img
            src="assets/korchevanie.png"
            alt="duty pic"
            className="dutiesPic"
          />
          <h1 className="dutiesTitle">Корчевание деревьев и пней</h1>
          <p className="dutiesDescription">
            Удаление пней, корчевание и вырубка оставшихся корневых систем любой
            сложности
          </p>
          <Link to="services/korchevanie" className="dutiesLink">
            Подробнее...
          </Link>
        </div>
        <div className="duties">
          <img
            src="assets/posadka_frukt.png"
            alt="duty pic"
            className="dutiesPic"
          />
          <h1 className="dutiesTitle">Посадка фруктовых садов</h1>
          <p className="dutiesDescription">
            Проектирование и засадка фруктовых и декоративных деревьев,
            кустарников, цветов и др.
          </p>
          <Link to="services/posadka_fruktovih_sadov" className="dutiesLink">
            Подробнее...
          </Link>
        </div>
      </div>
    </div>
  )
}
