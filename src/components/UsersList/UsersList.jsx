import UsersListItem from './UsersListItem/UsersListItem'

const UsersList = ({users}) => {
	return (
		<ul>
			{users.length
				? users.map((user) => <UsersListItem key={user.id} user={user}/>)
				: null}
		</ul>
	);
};

export default UsersList;