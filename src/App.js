import MainPage from "./Components/MainPage/MainPage"
import "./style/App.css"
import { Route, Routes } from "react-router-dom"
import Layout from "./Components/Layout/Layout"
function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<MainPage />} title="Главная" />
				</Route>
			</Routes>
		</div>
	)
}

export default App
