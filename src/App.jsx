import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { isExpired, decodeToken } from "react-jwt";
import Protected from "./Protected";
import Undercon from "./Undercon";
import Header from "./components/Header";
import AdminHeader from "./components/AdminHeader";
import EditHomework from "./pages/EditHomework";
import Home from "./pages/Home";
import Homework from "./pages/Homework";
import Login from "./pages/Login";
import NewUser from "./pages/NewUser";
import Students from "./pages/Students";
import Teachers from "./pages/Teachers";
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
				<Route exact path='/' element={<Home />} />
				<Route path='/homework' element={<Homework />} />
				<Route path='/login' element={<Login />} />
				<Route path='/students' element={<Students />} />
				<Route path='/teachers' element={<Teachers />} />
				<Route
					path='/new-user'
					element={tokenOwner === "krit" ? <NewUser /> : <PageUndercon />}
				/>
				<Route
					path='/edit-homework'
					element={
						<Protected isUser={isUser}>
							<EditHomework />
						</Protected>
					}
				/>
				<Route path='/under-construction' element={<PageUndercon />} />
				<Route path='/404' element={<PageNotFound />} />
				<Route path='*' element={<Navigate to={"/404"} />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
