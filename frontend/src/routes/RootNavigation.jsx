import { BrowserRouter, Route, Routes } from "react-router-dom";

import Body from "../pages/Body.jsx";


const RootNavigation = () => {
    return (
		<BrowserRouter basename={process.env.PUBLIC_URL}>
			<Routes>
				<Route path="/" element={<Body  />}>    
				</Route>
			</Routes>
	  </BrowserRouter>
	);
}


export default RootNavigation;