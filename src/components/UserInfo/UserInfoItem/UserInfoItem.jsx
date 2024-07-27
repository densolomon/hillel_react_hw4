import './style.scss'

const UserInfoItem = ({
	label,
	value
}) => {
	return (
		<li>
			<section className="user-detail">
				<span className="user-detail-label">{label}:{' '}</span>
				<span className="user-detail-value">{value}</span>
			</section>
		</li>
	);
};

export default UserInfoItem;