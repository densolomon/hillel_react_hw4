import { NavLink } from 'react-router-dom'

const UserInfoLinks = () => {
	return (
		<div className="user-info-links">
			<NavLink
				to={"address"}
				className={({isActive}) => (isActive ? "active" : "")}
			>
				Address
			</NavLink>
		</div>
	);
};

export default UserInfoLinks;