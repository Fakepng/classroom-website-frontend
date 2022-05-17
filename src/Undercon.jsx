import { Navigate } from "react-router-dom";

const Undercon = ({ isUser, children }) => {
	if (!isUser) return <Navigate to={"/under-construction"} />;
	return children;
};

export default Undercon;
