import { Outlet, useNavigate } from 'react-router-dom'
import ButtonBack from '../ButtonBack/ButtonBack'
import UserInfoItem from './UserInfoItem/UserInfoItem'
import UserInfoLinks from './UserInfoLinks/UserInfoLinks'
import './style.scss'

const UserInfo = ({ user }) => {
	const { username, email } = user;
	const navigate = useNavigate();
	const handleGoBack = () => {
		navigate(-1);
	}
	return (
		<div className="user-info">
			<ButtonBack handleClick={handleGoBack} buttonText="Back"/>
			<ul className="user-details">
				<UserInfoItem label="Username" value={username}/>
				<UserInfoItem label="Email" value={email}/>
			</ul>
			<UserInfoLinks />

			<Outlet />
		</div>
	);
};

export default UserInfo;