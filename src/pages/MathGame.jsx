import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { isLoggedIn } from '../utils/helpers';
import { setAsnwer } from '../store/reducers/answers';

const MathGame = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [currentQues, setCurrentQues] = useState({});
  const [timer, setTimer] = useState(5);

  const questionObj =
    useSelector((state) => state.answers.answers.find((el) => el.id == id)) ||
    {};

  useEffect(() => {
    if (!isLoggedIn()) navigate('/login');
    let timerId = setInterval(() => {
      if (timer <= 0 && !currentQues.answer) {
        handleNext();
      } else {
        setTimer((prev) => prev - 1);
      }
    }, 1000);
    return () => clearInterval(timerId);
  }, [timer, currentQues]);

  useEffect(() => {
    setTimer(5);
  }, [id]);
  useEffect(() => {
    setCurrentQues(questionObj);
  }, [questionObj]);

  const { question, options, actualAnswer } = questionObj;

  const handleChange = (e) => {
    setCurrentQues((prev) => {
      return {
        ...prev,
        answer: parseInt(e.target.value),
        isAnswerTrue: actualAnswer === parseInt(e.target.value),
      };
    });
  };

  const handleNext = (timedOut) => {
    if (parseInt(id) === 10) {
      navigate('/result');
    } else {
      dispatch(setAsnwer(currentQues));
      navigate(`/game/${parseInt(id) + 1}`);
    }
  };

  return (
    <div className='d-flex flex-column align-items-center mt-5'>
      <h1>Timer : {timer}</h1>
      <div
        className='card'
        style={{
          height: 'fit-content',
          width: 'fit-content',
          boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
          margin: '10px',
          padding: '1rem',
        }}
      >
        <h2 className='text-center' style={{ color: '#2d98d9' }}>
          Math Quiz Question {id}
        </h2>
        <div className='d-flex mt-4 justify-content-center'>
          <div className='fs-1'>{question.num1}</div>
          <div className='fs-1'>{question.operator}</div>
          <div className='fs-1'>{question.num2}</div>
        </div>

        <div className='mb-4 mt-2 d-flex flex-column align-items-center'>
          <label className='form-label fw-bold'>Options:</label>
          <div>
            {options.map((el, index) => {
              return (
                <span key={index} className='fs-5'>
                  <input
                    className='ms-3'
                    type='radio'
                    value={el}
                    name='answer'
                    onChange={handleChange}
                    checked={currentQues.answer === el}
                  />
                  {el}
                </span>
              );
            })}
          </div>
        </div>
        <div className='d-flex justify-content-center'>
          <button
            className='btn btn-primary mt-3 px-4 w-50 fw-bold'
            style={{ backgroundColor: '#2d98d9', border: 'none' }}
            onClick={handleNext}
          >
            {parseInt(id) === 10 ? 'Submit' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MathGame;
