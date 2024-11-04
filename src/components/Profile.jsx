
function Profile(props) {
	const { info } = props;
	return (
		<>
			<div className="profile">
				<img src={info.avatarUrl} />
				<span>{info.name}</span>
			</div>
		</>
	)
}

export default Profile
