import { BrowserRouter, Route, Routes } from "react-router-dom";

import Body from "../pages/Body.jsx";
import Main from "../pages/Main.jsx";
import Home from "../pages/Home.jsx";
import Login from "../pages/Login.jsx";
import { Navigate } from "react-router";

const RootNavigation = () => {

	const authToken = localStorage.getItem('authToken');

    return (
		<BrowserRouter basename={process.env.PUBLIC_URL}>
			<Routes>
				<Route path="/" element={<Body  />}>
					<Route 
						path="/" 
						element={
							authToken != null ? <Home  /> : <Navigate to="/login"  />
						} 
					/>
					<Route path="/main" element={<Main  />} />
					<Route path="/home" element={<Home  />} />
					<Route path="/login" element={<Login  />} />  	
				</Route>
			</Routes>
	  </BrowserRouter>
	);
}


export default RootNavigation;