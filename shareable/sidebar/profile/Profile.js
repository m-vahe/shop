const userName = 'MARTA';
const Profile = () => {
  console.log('file: Profile.js ~ line 4 ~ Profile ~ history', history);
  return (
    <div className='profile__container'>
      <h2 className='profile__container--mobile'>mein account</h2>
      <ul className='profile__container__list'>
        <li className='profile__container__list--logged'>LOGGED IN AS:</li>
        <li className='profile__container__list--username'>{userName}</li>
        <li className='profile__container__list--logout'>LOG OUT</li>
      </ul>
    </div>
  );
};

export default Profile;
