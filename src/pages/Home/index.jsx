import { Helmet } from "react-helmet";
import Schedule from "../../components/Schedule";
import Cleaning from "../../components/Cleaning";

const Home = () => {
	return (
		<>
			<Helmet>
				<title>SP 617</title>
				<meta property='og:title' content='SP 617' />
				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://sp617.fakepng.com' />
				<meta
					property='og:image'
					content='https://sp617.fakepng.com/SP512.png'
				/>
			</Helmet>
			<Schedule />
			<Cleaning />
		</>
	);
};

export default Home;
