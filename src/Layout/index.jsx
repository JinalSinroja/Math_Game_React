import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles.module.css';
import { isLoggedIn, logout } from '../utils/helpers';
import { setAuthenticated } from '../store/reducers/auth';
import { useEffect } from 'react';

const Layout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    dispatch(setAuthenticated(isLoggedIn()));
  });

  const handleLogout = () => {
    logout();
    dispatch(setAuthenticated(false));
    navigate('/logout')
  };

  return (
    <header
      className='d-flex justify-content-between'
      style={{ backgroundColor: '#2d98d9b5', height: '3.5rem' }}
    >
      <div className='fw-bold m-3'>
        <Link className={`mx-2 ${styles.links}`} to={'/'}>
          Start Game
        </Link>
      </div>

      <div className='d-flex ms-3'>
        {!isAuthenticated && (
          <div className='fw-bold my-3 me-4'>
            <Link className={`mx-3 ${styles.links}`} to={'/login'}>
              Log In
            </Link>
            <Link className={`${styles.links}`} to={'/signup'}>
              Sign Up
            </Link>
          </div>
        )}
        {isAuthenticated && (
          <>
            <div className='fw-bold my-3 me-4'>
              <Link
                className={`${styles.links}`}
                to={'/login'}
                onClick={handleLogout}
              >
                Log out
              </Link>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Layout;
