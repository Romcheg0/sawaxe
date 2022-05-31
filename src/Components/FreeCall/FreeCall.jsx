import React from "react"
import "../../style/FreeCall.css"
export default function FreeCall() {
  return (
    <div id="freeCallWrapper">
      <div id="info">
        <h1>Бесплатный вызов мастера-оценщика</h1>
        <p>
          Вызовите мастера для оценки вида, количества и стоимости работ и
          других технических ньюансов совершенно бесплатно*
        </p>
        <span>*Только в пределах Херсонской и Николаевской областей.</span>
      </div>
      <div id="middleGradiented"></div>
      <div id="picBlock">
        <img src="assets/worker.png" alt="worker" id="workerPic" />
        <button id="call">Заказать</button>
      </div>
    </div>
  )
}
