import { useUser } from '../../contexts/UserContext'
import UserInfoItem from "../UserInfo/UserInfoItem/UserInfoItem.jsx";

const UserAddress = () => {
	const { user } = useUser();
	const { address } = user;

	return (
		<ul className="user-details">
			<UserInfoItem label="Street" value={address?.street}/>
			<UserInfoItem label="Suite" value={address?.suite}/>
			<UserInfoItem label="City" value={address?.city}/>
			<UserInfoItem label="Zipcode" value={address?.zipcode}/>
		</ul>
	);
};

export default UserAddress;