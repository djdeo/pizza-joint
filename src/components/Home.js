import {Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="home container">
        <h2>Welcome to Pizza Joint</h2>
        <h4>What kind of pizza do you like</h4>
        <Link to="/base"><button>Create Pizza</button></Link>
    </div>
  );
};

export default Home;
