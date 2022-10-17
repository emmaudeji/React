import { useNavigate } from "react-router-dom"
const NoMatch = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>This is page does not exist</h1>
      <button onClick={() => navigate(-1)}>Go Back Previous page</button>
      <br />
      <button onClick={() => navigate('/home')}>Go Back Home</button>
    </div>
  )
}

export default NoMatch