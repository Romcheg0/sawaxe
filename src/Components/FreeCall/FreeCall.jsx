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
				<button
					id="call"
					onClick={(e) => {
						e.preventDefault()
						document.getElementById("freeCallPopUp").className = "show"
					}}
				>
					Заказать
				</button>
			</div>
			<div id="freeCallPopUp" className="hidden">
				<h1>Оставьте заявку, и мы с вами свяжемся</h1>
				<button
					id="freeCallClose"
					onClick={(e) => {
						e.preventDefault()
						document.getElementById("freeCallPopUp").className = "hidden"
					}}
				>
					<img src="assets/cross.png" alt="close" />
				</button>
				<form action="submit">
					<table>
						<tbody>
							<tr>
								<td>
									<span>Как можно к вам обращаться?</span>
								</td>
								<td>
									<input type="text" />
								</td>
							</tr>
							<tr>
								<td>
									<span>Ваш номер телефона</span>
								</td>
								<td>
									<input type="text" />
								</td>
							</tr>
							<tr>
								<td>
									<span>Ваш адрес</span>
								</td>
								<td>
									<input type="text" />
								</td>
							</tr>
						</tbody>
					</table>
					<button
						id="freeCallSubmit"
						type="submit"
						onClick={(e) => {
							e.preventDefault()
							document.getElementById("freeCallPopUp").className = "hidden"
						}}
					>
						Отправить
					</button>
				</form>
			</div>
		</div>
	)
}
