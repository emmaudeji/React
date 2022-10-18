import { useNavigate } from 'react-router-dom';

const NoMatch = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>Page Not Found</h1>
      <br />
      <button onClick={() => navigate('/') }>
        <h1>Back to Home</h1>
      </button>
    </>
    
  )
}

export default NoMatch