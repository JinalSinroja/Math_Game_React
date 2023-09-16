import { useSelector } from 'react-redux';

const Result = () => {
  const result = useSelector((state) => state.answers.answers);
  const totalScore = result.filter((el) => el.isAnswerTrue);
  return (
    <div className='d-flex justify-content-center mt-5'>
      <div
        className='card '
        style={{
          height: 'fit-content',
          width: 'fit-content',
          boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
          margin: '10px',
          padding: '2rem',
        }}
      >
        <h1 className='text-center' style={{ color: '#2d98d9' }}>
          Result
        </h1>
        <h3>
          {' '}
          <span className='fw-bold'>Score :</span> {totalScore.length}/10
        </h3>
        <div>
          {result.map((el) => (
            <div className='d-flex'>
              <p>Question {el.id} : </p>
              <p
                className='fw-bold mx-2'
                style={{
                  color: el.answer
                    ? el.isAnswerTrue
                      ? 'green'
                      : 'red'
                    : 'grey',
                }}
              >
                {el.answer
                  ? el.isAnswerTrue
                    ? 'Rigth'
                    : 'Wrong'
                  : 'Timed Out'}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Result;
