import React from "react";
import { Link } from 'react-router-dom';
import Header from "../../components/header/Header.jsx";
import Footer from "../../components/footer/Footer.jsx";
import './Home.css';
import jumbotron from '../../images/jumbotron_768.jpg';


function Home() {
    return (
        <>
            <Header />
            <div className="jumbotron">
                <img src={jumbotron} alt="Picture of restaurant" className="img-responsive visible-xs" />
            </div>
            <div id="home-tiles" className="row">
                <div className="col-md-4 col-sm-6 col-xs-12 menuContainer">
                    <Link to="/menu">
                        <div id="menu-tile"><span>menu</span></div>
                    </Link>
                </div>
                <div className="col-md-4 col-sm-6 col-xs-12 specialsContainer">
                    <Link to="/category/SP">
                        <div id="specials-tile"><span>specials</span></div>
                    </Link>
                </div>
                <div className="col-md-4 col-sm-12 col-xs-12 mapContainer">
                    <a href="https://www.google.com/maps/place/David+Chu's+China+Bistro/@39.3635874,-76.7138622,17z/data=!4m6!1m3!3m2!1s0x89c81a14e7817803:0xab20a0e99daa17ea!2sDavid+Chu's+China+Bistro!3m1!1s0x89c81a14e7817803:0xab20a0e99daa17ea" target="_blank">
                        <div id="map-tile">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3084.675372390488!2d-76.71386218529199!3d39.3635874269356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c81a14e7817803%3A0xab20a0e99daa17ea!2sDavid+Chu&#39;s+China+Bistro!5e0!3m2!1sen!2sus!4v1452824864156" width="100%" height="250" frameborder="0" style={{ border: 0 }} allowfullscreen></iframe>
                            <span>map</span>
                        </div>
                    </a>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Home;


