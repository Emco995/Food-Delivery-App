import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import logo from '../assets/roze.png';
import introImg from '../assets/yyy.jpg';
import introOrderImage from '../assets/photo1.jpg';


function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <div> 
    <div className="home">
      <div className="headerContainer">
        <img className="logo" src={logo} alt=""></img>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
    
    <div className="intro">
      <p className="introText">Utilizing the freshest ingredients and Amir's (Master Chef) deft touch in the kitchen, the restaurant is a long beloved mainstay in the neighborhood.</p>
      <img className="introImage" src={introImg} alt=""></img>
    </div>

    <div className="introOrder">
       <img src={introOrderImage}  alt=""></img>
       <h2>Ready To Order ?</h2>
       <Link to="/menu">
          <button> MENU </button>
        </Link>
    </div>

    <div className="introMap">
       <h2>How to find us ?</h2>
       <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2876.812425932935!2d18.4308904!3d43.85971635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4758c8c901383e0f%3A0x4b6dcd6504896c49!2sBa%C5%A1%C4%8Dar%C5%A1ija%2C%20Sarajevo%2071000%2C%20Bosna%20i%20Hercegovina!5e0!3m2!1shr!2sde!4v1699868707517!5m2!1shr!2sde" style={{width: "1000px", height: "450px", border: 'none', borderRadius: "20px", paddingBottom: '60px'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    </div>
  );
}

export default Home;
