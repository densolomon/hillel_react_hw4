import { useUser } from '../contexts/UserContext'
import { useParams } from 'react-router-dom'
import { useEffect } from "react";
import UserInfo from '../components/UserInfo/UserInfo'

const UserInfoPage = () => {
	const { user, setUser } = useUser();
	const { id } = useParams();

	useEffect(() => {
		const fetchUserById = async () => {
			try {
				const request = await fetch(
					`https://jsonplaceholder.typicode.com/users/${id}`
				);
				const response = await request.json();
				setUser(response);
			} catch (error) {
				console.log(error.message);
			}
		};
		fetchUserById();
	}, [id,setUser]);

	return (
		<>
			<UserInfo user={user}/>
		</>
	);
};

export default UserInfoPage;