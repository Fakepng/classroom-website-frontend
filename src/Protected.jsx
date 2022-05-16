import { Navigate } from "react-router-dom";

const Protected = ({ isUser, children }) => {
	if (!isUser) return <Navigate to={"/login"} />;
	return children;
};

export default Protected;
