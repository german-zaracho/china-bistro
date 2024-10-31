import React from "react";
import Header from "../../components/header/Header.jsx";
import Footer from "../../components/footer/Footer.jsx";
import './Awards.css';

function Awards() {
    return (
        <>
            <Header />
            <div id="awards-view" class="container ng-scope">
                <h2 class="text-center">Awards</h2>

                <p>David Chu's China Bistro is a recepient of multiple awards for its great food and service.</p>
                <p>Details are coming soon.</p>
            </div>
            <Footer />
        </>
    );
}

export default Awards;