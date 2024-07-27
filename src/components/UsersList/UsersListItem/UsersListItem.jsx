import { Link } from 'react-router-dom'

const UsersListItem = ({ index, user }) => {
	return (
		<li className="list-item">
			<Link to={`/users/${user.id}`} className="user-link">
				{user.id}.{user.name}
			</Link>
		</li>
	);
};

export default UsersListItem;