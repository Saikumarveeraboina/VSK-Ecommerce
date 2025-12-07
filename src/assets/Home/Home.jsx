import { Link } from "react-router-dom";
import Header from "../Header/Header";
import './Home.css'


const Home = () => {
  return (
    <div>
        <Header />
        <div className="home-container">
            <h1 className="home-title">Welcome to VSK Ecommerce</h1>   
            <p className="home-subtitle">Your one-stop destination for the latest fashion trends!</p>
            <Link to="/products"> <button className="shop-now-button">Shop Now</button> </Link>  
        </div>

    </div>
  )
}

export default Home