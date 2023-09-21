import {  Divider } from "antd";

import './index.css'
import { Link, Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { ResetPasswordForm } from "./components/ResetPasswordForm";
import { LoginForm } from "./components/LoginForm";

function WrapperElement() {
	return (
		<main className="flex justify-center items-center h-screen">
	<div className="w-[300px] border rounded p-4">
		<Outlet />
	</div>
	</main>
	)
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <WrapperElement />,
		children: [
			{
				path: "/",
				element: (
					<>
						<LoginForm />
		
		<Divider />
		
		<Link to="/reset-password">Reset password</Link>
					</>
				),
			},
			{
				path: "reset-password",
				element: <>
					<ResetPasswordForm />
		
					<Divider />
		
					<Link to="/">Back to login</Link>
				</>,
			}
		]
	}
], {
	basename: import.meta.env.BASE_PATH
});

export default function App() {
	return <RouterProvider router={router} />
} 
