import axios from 'axios';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { getBase64, login } from '../utils/helpers';
import services from '../services/index.js'
import {setAuthenticated} from '../store/reducers/auth.js'
import { toast } from 'react-toastify';

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formElement = e.target;
    if (formElement.checkValidity()) {
      const payload = {
        ...Object.fromEntries(new FormData(formElement).entries()),
      };

      payload.photo = await getBase64(payload.photo);
      console.log("🚀 ~ file: SignUp.jsx:19 ~ handleSubmit ~ payload:", payload)
      
      services
        .register(payload)
        .then((response) => {
          dispatch(setAuthenticated(true))
          toast.success('User Created Successfully')
          navigate('/login')
        })
        .catch((err) => {
          console.log('🚀 ~ file: index.js:24 ~ handleSubmit ~ err:', err)
        })
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
          Sign Up
        </h1>
        <form
          className='card-body d-flex flex-column justify-content-center'
          onSubmit={handleSubmit}
        >
          <div className='d-flex'>
            <div className='me-3 w-50'>
              <div className='d-flex flex-column mt-2'>
                <label className='form-label fw-bold'>First Name</label>
                <input
                  className='form-control'
                  type='text'
                  name='first_name'
                  required
                />
              </div>
              <div className='d-flex flex-column mt-2'>
                <label className='form-label fw-bold'>Last Name</label>
                <input
                  className='form-control'
                  type='text'
                  name='last_name'
                  required
                />
              </div>
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
            <div className='w-50'>
              <div className='d-flex flex-column mt-2'>
                <label className='form-label fw-bold'>Phone Number</label>
                <input
                  className='form-control'
                  type='number'
                  name='phone'
                  required
                />
              </div>
              <div className='d-flex flex-column mt-2'>
                <label className='form-label fw-bold'>DOB</label>
                <input
                  className='form-control'
                  type='date'
                  name='dob'
                  required
                />
              </div>
              <div className='d-flex flex-column mt-2'>
                <label className='form-label fw-bold'>Profile Picture</label>
                <input
                  className='form-control'
                  type='file'
                  name='photo'
                  required
                />
              </div>
            </div>
          </div>
          <div className='mt-3 d-flex flex-column align-items-center'>
            <Link
              to={'/login'}
              className='fw-bold mt-2'
              style={{ color: '#2d98d9', textDecoration: 'none' }}
            >
              Already have an account?
            </Link>
            <button
              className='btn btn-primary mt-3 px-4 w-50'
              style={{ backgroundColor: '#2d98d9', border: 'none' }}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
