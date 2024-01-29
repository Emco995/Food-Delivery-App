import React, {useEffect} from "react";
import "../styles/About.css";
import firstImage from '../assets/dd.jpg';
import secondImage from '../assets/osma.jpg';
import thirdImage from '../assets/biftekk.jpg';



function About() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
 
  return (
    <div className="about">
      <div className="aboutTitle">
         <h1> - ABOUT US - </h1>
      </div>
        <div className="firstPart">
          <h1>Our Story</h1>
          <div className="firstPotPart">
            <div className="firstPartText">
               <p>At Fit&Delicious, we care passionately about what you put in your body. Dedicated to nourishment you can trust, we use quality locally sourced ingredients, and all natural proteins to ensure quality is always the best for our customers. We provide a warm service that will make you feel right at home, we give you the options you need, regardless of dietary restrictions or choices. Keeping our promise, to offer nourishment you can trust, quality you can depend on, integrity you can rely on, and care in everything we do.</p>
            </div>
            <div className="firstPartImage"><img src={firstImage} alt=""></img></div>
          </div>
        </div>
        <div className="secondPart">
            <img src={secondImage} alt=""></img>
            <p>In 2006, Fit&Delicious opened its doors in Sarajevo, named in memory of my very good friend Oliver. Oliver and a close friend’s child were the inspiration behind Fit&Delicious, being a fitnes lover also contributed to the decision. Fit&Delicious originally was made up of many family recipes that called for fried items, so we decided to give it a more healthy modern twist, removing the fried aspects of the recipe and changing it to a healthier cooking method. From there it proved to be easy making sure everything was either homemade or not processed. Most of our food is healthy and organic, but if we can’t get organic, then we get locally sourced ingredients from certified farms. Our proteins are all natural Antibiotic-free USDA approved. Nothing is processed, nothing is ever frozen. We make everything at the restaurants. A lot of these recipes are actually my grandmother’s recipes from way back when; we just decided to make them a little more healthy.</p>
        </div>
        <div className="thirdPart">
          <p>At Fit&Delicious we want you to be healthy, think positive, feel beautiful and strong and know that your food source is safe, sustainable, nutritious, and delicious. Join us, and don’t just live…Start living your Best life !!</p>
          <img src={thirdImage} alt=""></img>
        </div>
      </div>
  );
}

export default About;


