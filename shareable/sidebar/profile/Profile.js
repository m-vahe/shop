const Profile = ({userName}) => {
    const userName = 'MARTA'
    return (
        <div>
        <ul>
            <li>LOGGED IN AS:</li>
            <li>{userName}</li>
            <li>LOG OUT</li>
        </ul>
        </div>
    )
}

export default Profile
