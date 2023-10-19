import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import CheckLoginStatus from "./CheckLoginStatus";

import { Home, UserRegister, UserLogin, UserDashboard } from "../pages";

const AppRoutes = () => {
	return (
		<>
			<Router>
				<div className="min-h-screen">
					<Routes>
						{/* Public Routes */}
						<Route path="/" element={<Home />} />
						<Route path="/user/register" element={<UserRegister />} />

						   {/* Check Login Status User */}
						<Route exact path="/user/login" element={<CheckLoginStatus />}>
							<Route exact path="/user/login" element={<UserLogin />} />
						</Route>

						{/* User Private Routes */}
						<Route exact path="/user" element={<PrivateRoute permissionLevel="USER" />}>
						<Route exact path="/user" element={<UserDashboard />} />
						</Route>

					</Routes>
				</div>
			</Router>
		</>
	);
};

export default AppRoutes;
