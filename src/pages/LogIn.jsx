import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { login } from '../utils/helpers';
import { setAuthenticated } from '../store/reducers/auth';
import services from '../services';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const formElement = e.target;
    if (formElement.checkValidity()) {
      const payload = {
        ...Object.fromEntries(new FormData(formElement).entries()),
      };
      services
        .login(payload)
        .then((res) => {
          login(res?.data?.data);
          dispatch(setAuthenticated(true));
          navigate('/')
        })
        .catch((err) => console.log('err', err));
    }
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
          Log In
        </h1>
        <form
          className='card-body d-flex flex-column justify-content-center'
          onSubmit={handleLogin}
        >
          <div className=''>
            <div className='d-flex flex-column mt-2'>
              <label className='form-label fw-bold'>Email</label>
              <input
                className='form-control'
                type='email'
                name='email'
                required
              />
            </div>
            <div className='d-flex flex-column mt-2'>
              <label className='form-label fw-bold'>Password</label>
              <input
                className='form-control'
                type='password'
                name='password'
                required
              />
            </div>
          </div>
          <div className='d-flex justify-content-between align-items-center mt-3'>
            <Link
              to={'#'}
              className='fw-bold mt-2'
              style={{ color: '#2d98d9', textDecoration: 'none' }}
            >
              Forgot password?
            </Link>
            <button
              className='btn btn-primary mt-3 px-4'
              style={{ backgroundColor: '#2d98d9', border: 'none' }}
            >
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
