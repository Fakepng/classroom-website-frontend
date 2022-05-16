const PageUndercon = () => {
	return (
		<div
			id='wrapper'
			style={{
				backgroundColor: "#83D9C8",
				minHeight: "calc(100vh - 54px)",
			}}
			className='d-grid h-100'
		>
			<img
				src='https://i.imgur.com/qIufhof.png'
				alt='A Dog Ate this Page'
				style={{ maxWidth: "80%", margin: "auto" }}
			/>
			<div
				id='info'
				style={{
					maxWidth: "80%",
					margin: "auto",
					textAlign: "center",
					color: "#965418",
				}}
			>
				<h3>Caution! This Page is Cordoned Off</h3>
				<p>
					The earthquake was not good to the bike lane on your way to work. A
					large gap in the pavement (too big to be called a pothole) had
					swallowed three oblivious bikers whole. So the city had put up two
					pylons and yellow caution tape. Pretty frustrating for you given your
					propensity to do 360 jumps over the gap.
				</p>
			</div>
		</div>
	);
};

export default PageUndercon;
