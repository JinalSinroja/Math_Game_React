import { useEffect, useState } from 'react';
import services from '../services';
import { isLoggedIn } from '../utils/helpers';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';

const UserProfile = () => {
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn()) getUserDetails();
    else navigate('/login');
  }, []);

  const getUserDetails = () => {
    services
      .getUserData()
      .then((res) => {
        console.log('res', res);
        setUserData(res?.data?.data);
      })
      .catch((err) => {
        console.log('err', err);
      });
  };

  return (
    <div className='d-flex justify-content-center mt-5'>
      <div
        className='card '
        style={{
          height: 'fit-content',
          width: 'fit-content',
          boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
          margin: '10px',
          padding: '1rem',
        }}
      >
        <h1 className='text-center' style={{ color: '#2d98d9' }}>
          {userData.first_name + ' ' + userData.last_name}
        </h1>

        <img src={userData.photo} width={500} height={200} />
        <div className='d-flex flex-column align-items-center mt-3'>
          <div className='d-flex'>
            <p className='fw-bold me-3'>Email :</p>
            <span>{userData.email}</span>
          </div>
          <div className='d-flex'>
            <p className='fw-bold me-3'>Phone :</p>
            <span>{userData.phone || "-"}</span>
          </div>
          <div className='d-flex'>
            <p className='fw-bold me-3'>Date Of Birth :</p>
            <span>{moment(userData?.dob).format('DD-MM-YYYY')}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
