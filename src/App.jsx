import { BrowserRouter, Routes, Route } from "react-router-dom";
import { isExpired, decodeToken } from "react-jwt";
import Protected from "./Protected";
import Header from "./components/Header";
import AdminHeader from "./components/AdminHeader";
import EditHomework from "./pages/EditHomework";
import Homework from "./pages/Homework";
import Login from "./pages/Login";
import NewUser from "./pages/NewUser";
import Schedule from "./pages/Schedule";
import PageNotFound from "./PageNotFound";
import PageUndercon from "./PageUndercon";

function App() {
	const token = localStorage.getItem("accessToken");
	const user = localStorage.getItem("user");
	const isTokenExpired = isExpired(token);
	const tokenOwner = decodeToken(token)?.username;

	const isUser = token && !isTokenExpired && tokenOwner === user;

	return (
		<BrowserRouter>
			{isUser ? <AdminHeader /> : <Header />}
			<Routes>
				<Route exact path='/' element={<Schedule />} />
				<Route path='/homework' element={<Homework />} />
				<Route path='/login' element={<Login />} />
				<Route path='/students' element={<PageUndercon />} />
				<Route
					path='/new-user'
					element={
						<Protected isUser={isUser}>
							<NewUser />
						</Protected>
					}
				/>
				<Route
					path='/edit-homework'
					element={
						<Protected isUser={isUser}>
							<EditHomework />
						</Protected>
					}
				/>
				<Route path='*' element={<PageNotFound />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
