import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import axios from "axios";
import aesjs from "aes-js";
import "./Login.css";

const Login = () => {
	const [user, setUser] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);

	const navigate = useNavigate();

	const handleSubmit = async (event) => {
		event.preventDefault();
		setLoading(true);

		const key = process.env.REACT_APP_AES_KEY.split(", ").map(function (item) {
			return parseInt(item, 10);
		});
		const passwordBytes = aesjs.utils.utf8.toBytes(password);
		const aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(5));
		const encryptedBytes = aesCtr.encrypt(passwordBytes);
		const encryptedHex = aesjs.utils.hex.fromBytes(encryptedBytes);

		axios
			.post(`${process.env.REACT_APP_API_LINK}/user/login`, {
				user,
				password: encryptedHex,
			})
			.then((response) => {
				setLoading(false);
				localStorage.setItem("user", user);
				localStorage.setItem("accessToken", response.data.token);
				alert(`Welcome ${response.data.user}`);
				navigate("/");
				window.location.reload(false);
			});
	};

	return (
		<>
			<Helmet>
				<title>Login</title>
				<meta property='og:title' content='Login' />
				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://sp617.fakepng.com' />
				<meta property='og:image' content='%PUBLIC_URL%/sp517.png' />
			</Helmet>
			<form onSubmit={handleSubmit} className='register'>
				<p className='adminRegisterTitle'>Login</p>
				<label>Username: </label>
				<input
					type='text'
					name='username'
					value={user || ""}
					className='adminUser'
					onChange={(e) => setUser(e.target.value)}
				/>
				<label>Password: </label>
				<input
					type='password'
					name='password'
					value={password || ""}
					className='adminPass'
					onChange={(e) => setPassword(e.target.value)}
				/>
				{loading ? (
					<input type='submit' className='disable adminSub' disable='true' />
				) : (
					<input className='adminSub' type='submit' />
				)}
			</form>
		</>
	);
};

export default Login;
