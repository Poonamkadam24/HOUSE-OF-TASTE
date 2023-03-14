import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Home from './Home';

function Services(props){
    return(
        
        <section className="services" id="services">
        <div className="top">
          <h2><span className="yellow">Why</span> We are the Best</h2>
          <p>
            Here are some of our features
          </p>
        </div>
  
        <div className="bottom">
          <div className="box">
            <img src="https://thumbs.dreamstime.com/b/delivery-guy-delivering-pizza-yellow-motobike-man-riding-scooter-171468629.jpg" alt="" />
            <h4>Free Delivery</h4>
            <p>
              You can order your favourite food by your convinience at your doorstep.
            </p>
            {/* <!-- <a href="#">View More <img src="assets/images/btn-arrow.svg" alt="" /> </a> --> */}
          </div>
          <div className="box">
            <img src="https://tse2.mm.bing.net/th?id=OIP.S0aPsRKnXlN7Zft0nG3xcgAAAA&pid=Api&P=0" alt="" />
            <h4>Healthy Foods</h4>
            <p>
              With the taste of the food we also provide quality of the food.
            </p>
            
          </div>
          <div className="box">
            <img src="https://tse4.mm.bing.net/th?id=OIP.-I6oDwbwXfrwasAcJkKq9wHaHa&pid=Api&P=0" alt="" />
            <h4>Online Ordering</h4>
            <p>
              You can order just by one click on your mobile phone.
            </p>
            {/* <!-- <a href="#">View More <img src="assets/images/btn-arrow.svg" alt="" /> </a> --> */}
          </div>
        </div>
      </section>
        
    )
}

Header.propTypes={

}
export default Services