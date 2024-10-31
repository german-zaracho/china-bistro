import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <>
            <footer className="panel-footer">
                <div className="container">
                    <div className="row">
                        <section id="hours" className="col-sm-4">
                            <span>Hours:</span><br />
                            Sun-Thurs: 11:15am - 10:00pm<br />
                            Fri: 11:15am - 2:30pm<br />
                            Saturday Closed
                            <hr className="visible-xs" />
                        </section>
                        <section id="address" className="col-sm-4">
                            <span>Address:</span><br />
                            7105 Reisterstown Road<br />
                            Baltimore, MD 21215
                            <p>* Delivery area within 3-4 miles, with minimum order of $20 plus $3 charge for all deliveries.</p>
                            <hr className="visible-xs" />
                        </section>
                        <section id="testimonials" className="col-sm-4">
                            <p>"The best Chinese restaurant I've been to! And that's saying a lot, since I've been to many!"</p>
                            <p>"Amazing food! Great service! Couldn't ask for more! I'll be back again and again!"</p>
                        </section>
                    </div>
                    <div className="text-center">&copy; Copyright David Chu's China Bistro 2016</div>
                </div>
            </footer>
        </>
    );
}

export default Footer;