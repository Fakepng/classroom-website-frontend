import { Helmet } from "react-helmet";

const PageNotFound = () => {
	return (
		<>
			<Helmet>
				<title>Page Not Found</title>
				<meta property='og:title' content='Page Not Found' />
				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://sp617.fakepng.com' />
				<meta
					property='og:image'
					content='https://sp617.fakepng.com/SP512.png'
				/>
			</Helmet>
			<div
				id='wrapper'
				style={{
					backgroundColor: "#FFE4EA",
					minHeight: "calc(100vh - 54px)",
				}}
				className='d-grid h-100'
			>
				<img
					src='https://i.imgur.com/lKJiT77.png'
					alt='A Dog Ate this Page'
					style={{ maxWidth: "80%", margin: "auto" }}
				/>
				<div
					id='info'
					style={{ maxWidth: "80%", margin: "auto", textAlign: "center" }}
				>
					<h3>A Dog Ate this Page</h3>
					<p>
						Your dog is cute but honestly a menace. Where are my shoes? Where is
						my graduation certificate? Where is the chocolate cake I baked for
						my Aunt’s birthday? And why did you take your dog to the vet on that
						same Thursday?!
					</p>
				</div>
			</div>
		</>
	);
};

export default PageNotFound;
