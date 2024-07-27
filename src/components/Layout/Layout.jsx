import { NavLink, Outlet } from 'react-router-dom'
import { UserProvider } from '../../contexts/UserContext'
import './style.scss'

const Layout = () => {
	return (
		<>
			<header>
				<NavLink className="header-link" to={"/"}>Home</NavLink>
				<NavLink className="header-link" to={"/users"}>Users</NavLink>
			</header>
			<main>
				<UserProvider>
					<Outlet />
				</UserProvider>
			</main>
		</>
	);
};

export default Layout;