import React from "react";
import Header from "../../components/header/Header.jsx";
import Footer from "../../components/footer/Footer.jsx";
import './About.css';

function About() {
    return (
        <>
            <Header />
            <div id="about-view" class="container ng-scope">
                <h2 class="text-center">About This Website</h2>
                <div class="text-center">
                    <p>It may be hard to tell, but this website does much more than just help you choose a delicious dish from this cozy
                        little restaurant. The website of this restaurant has served over 100,000 students all over the world (and counting), teaching them
                        the skills of how to develop a website from scratch.</p>

                    <p>
                        The development of this website was part of the curriculum of 2 <a target="_blank" href="https://www.coursera.org">Coursera.org</a>
                        courses: <a target="_blank" href="https://www.coursera.org/learn/html-css-javascript-for-web-developers">HTML, CSS, and Javascript
                            for Web Developers</a> and <a target="_blank" href="https://www.coursera.org/learn/single-page-web-apps-with-angularjs">Single Page
                                Web Applications with AngularJS</a>.
                        <br />All courses have an option to be taken for free.
                    </p>

                    <p>
                        As of November, 2016, both courses made it to the #1 Top Rated Course spot (among close to 1,800 available courses).
                    </p>

                    <p>
                        To give you a little preview, here is a video from one of the courses:
                    </p><div class="embed-responsive embed-responsive-16by9">
                        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/YR_rIjUIDeE?rel=0" allowfullscreen=""></iframe>
                    </div>
                    <p></p>

                </div>
            </div>
            <Footer />
        </>
    );
}

export default About;