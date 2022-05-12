import { BrowserRouter, Routes, Route } from "react-router-dom";
import { isExpired, decodeToken } from "react-jwt";
import Header from "./components/Header";
import AdminHeader from "./components/AdminHeader";
import EditHomework from "./pages/EditHomework";
import Homework from "./pages/Homework";
import Login from "./pages/Login";
import NewUser from "./pages/NewUser";
import Schedule from "./pages/Schedule";

function App() {
	const token = localStorage.getItem("accessToken");
	const user = localStorage.getItem("user");
	const isTokenExpired = isExpired(token);
	const tokenOwner = decodeToken(token)?.username;

	if (token && !isTokenExpired && tokenOwner === user) {
		return (
			<BrowserRouter>
				<AdminHeader />
				<Routes>
					<Route exact path='/' element={<Schedule />} />
					<Route path='/homework' element={<Homework />} />
					<Route path='/login' element={<Login />} />
					<Route path='/new-user' element={<NewUser />} />
					<Route path='/edit-homework' element={<EditHomework />} />
				</Routes>
			</BrowserRouter>
		);
	}
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route exact path='/' element={<Schedule />} />
				<Route path='/homework' element={<Homework />} />
				<Route path='/login' element={<Login />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
