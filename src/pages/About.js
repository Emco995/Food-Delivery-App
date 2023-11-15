// import React from "react";
// import MultiplePizzas from "../assets/home1.webp";
// import "../styles/About.css";
// function About() {
//   return (
//     <div className="about">
//       <div
//         className="aboutTop"
//         style={{ backgroundImage: `url(${MultiplePizzas})` }}
//       ></div>
//       <div className="aboutBottom">
//         <h1> ABOUT US</h1>
//         <p className="pprvi">
//           Welcome to SDelivery – your friendly neighborhood food delivery
//           solution!
//         </p>
//         <p className="pdrugi">
//           {" "}
//           We're not your typical food delivery service. We're not here to bore
//           you with formalities or corporate jargon. We're here to satisfy your
//           cravings, one delicious dish at a time. So, what's the deal with
//           SDelivery? It's straightforward: we're your dependable choice for all
//           your food delivery needs. Whether you're in the mood for a steaming
//           hot pizza, your favorite comfort food, or a culinary delight from a
//           local restaurant, we've got you covered.{" "}
//         </p>
//         <p className="ptreci">
//           {" "}
//           We don't just deliver food; we deliver a taste of convenience. Our
//           team is a group of food aficionados who take pride in getting your
//           favorite dishes to you as swiftly as possible. We may not wear chef
//           hats, but we do wear smiles, and we're always ready to dash (or drive)
//           to bring your orders straight to your doorstep. We know you're hungry
//           and busy, so we've made it incredibly easy to use our service.{" "}
//         </p>
//         <p>
//           {" "}
//           Just a few taps on our website or a click on our app, and your meal is
//           on its way. No fuss, no hassle – that's the SDelivery guarantee. We
//           recognize the importance of trust in the food delivery business, and
//           that's why we take security seriously. Your orders are handled with
//           care, and your information is protected. You can rely on us to treat
//           your meals like our own. At SDelivery, we're not just a food delivery
//           service; we're your friendly neighbor who's always there when hunger
//           strikes. Join our ever-growing community of satisfied foodies and let
//           us take care of your culinary cravings. Life's too short to worry
//           about cooking – leave the food delivery to us. We've got your taste
//           buds covered! Whether it's a late-night snack, a special dinner, or a
//           quick lunch, think SDelivery. We're here to make your mealtime a
//           little more delightful, one delivery at a time.
//           <p className="pcetvrti">
//             Welcome to the SDelivery family of food lovers!
//           </p>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default About;

import React, {useEffect} from "react";
import aboutCover from '../assets/grasak.jpeg';
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

