import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Home sweet Home</h2>
      <button onClick={() => navigate('/order')}>Order Now</button>
    </div>
  )
}

export default Home;