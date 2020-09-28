import React from "react";
import "../css/content.css";
import profile_picture from "../images/profile-final.jpg";

import html_picture from "../images/tech/html5-logo.png";
import css3_picture from "../images/tech/css3-logo.png";
import javascript_picture from "../images/tech/javascript-logo.png";
import es6_picture from "../images/tech/es6-logo.png";

import babel_picture from "../images/tech/babel-logo.png";
import angular_picture from "../images/tech/angular-logo.png";
import laravel_picture from "../images/tech/laravel-logo.png";
import backbone_picture from "../images/tech/backbone-logo.png";

import php_picture from "../images/tech/php-logo.png";
import python_picture from "../images/tech/python-logo.png";
import java_picture from "../images/tech/java-logo.png";
import bash_picture from "../images/tech/bash-logo.png";

function Welcome() {
    var heading = (
        <header className="jumbotron jumbotron-fluid text-center" id="home">
            <p className="display-3">Bob Bryson</p>
        </header>
    );

    return heading;
}

function Profile() {

    var heading = (
        <div className="jumbotron jumbotron-fluid text-center">
            <p className="display-4">Profile</p>
        </div>
    );

    var content = (
        <div className="container">
            <div className="text-center">
                <img className="profile-pic img--round" alt="This is my profile pic" src={profile_picture} />
            </div>
            <hr />

            <div className="profile-content">
                <ul className="profile-detail">
                    <li>
                        <label>Name</label>
                        <div className="value">
                            <p>Bob Bryson</p>
                        </div>
                    </li>
                    <li>
                        <label>BirthDay</label>
                        <div className="value">
                            <p>June 4, 2003</p>
                        </div>
                    </li>
                    <li>
                        <label>Titles</label>
                        <div className="value">
                            <p>Student</p>
                            <p>Developer</p>
                        </div>
                    </li>
                    <li>
                        <label>Hobbies</label>
                        <div className="value">
                            <p>Watching Movies</p>
                            <p>Reading Novels</p>
                            <p>Football Diehard</p>
                            <p>Gaming</p>
                            <p>Coding</p>
                        </div>
                    </li>
                    <li>
                        <label>Locations</label>
                        <div className="value">
                            <p>Nairobi, Kenya</p>
                            <p>Washington - D.C, U.S.A</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );

    var section = (
        <section className="section" id="profile">
            {heading}
            {content}
        </section>
    );

    return section;
}

function Technologies() {

    var heading = (
        <div className="jumbotron jumbotron-fluid text-center">
            <p className="display-4">Technologies</p>
        </div>
    );

    function Card(props) {

        let element = (
            <div className="card text-center">
                <img className="card-img-top" src={props.image} alt={props.imgAlt} />
                <span className={props.border ? "border-top" : ""}></span>
                <div className="card-title text-center h3">{props.text}</div>
            </div>
        )

        return element;
    }

    function CardContainer({ elem }) {

        let element = (
            <div className="col-lg-2 col-md-3 col-xs-6 col-sm-4 col-6">
                { elem }
            </div>
        );

        return element;
    }

    var content = (
        <div className="container">
            <p className="title-text">Web Technologies</p>
            <hr className="white-line" />

            <div className="row text-center">
                <CardContainer
                    elem={<Card border={true} image={html_picture} text="HTML5" imgAlt="Html 5 Logo" />}
                />
                <CardContainer
                    elem={<Card border={true} image={css3_picture} text="CSS3" imgAlt="CSS3 Logo" />}
                />
                <CardContainer
                    elem={<Card border={false} image={javascript_picture} text="Javascript" imgAlt="Javascript Logo" />}
                />
                <CardContainer
                    elem={<Card border={false} image={es6_picture} text="ES6" imgAlt="ES6 Logo" />}
                />
            </div>
        </div>
    )

    var last_content = (
        <div className="container">
            <p className="title-text">Web Frameworks</p>
            <hr className="white-line" />

            <div className="row text-center">
                <CardContainer
                    elem={<Card border={true} image={backbone_picture} text="Backbone" imgAlt="BackboneJS" />}
                />
                <CardContainer
                    elem={<Card border={true} image={laravel_picture} text="Laravel" imgAlt="Laravel" />}
                />
                <CardContainer
                    elem={<Card border={true} image={babel_picture} text="Babel" imgAlt="Babel Logo" />}
                />
                <CardContainer
                    elem={<Card border={true} image={angular_picture} text="Angular" imgAlt="Angular Logo" />}
                />
            </div>
        </div>
    )

    var middle_content = (
        <div className="container">
            <p className="title-text">Other Interests</p>
            <hr className="white-line" />

            <div className="row text-center">
                <CardContainer
                    elem={<Card border={true} image={python_picture} text="Python" imgAlt="Python" />}
                />
                <CardContainer
                    elem={<Card border={true} image={php_picture} text="PHP" imgAlt="Php Logo" />}
                />
                <CardContainer
                    elem={<Card border={true} image={java_picture} text="Java" imgAlt="Java" />}
                />
                <CardContainer
                    elem={<Card border={true} image={bash_picture} text="Bash" imgAlt="Bash" />}
                />
            </div>
        </div>
    )

    var section = (
        <section className="section" id="technologies">
            {heading}
            {content}
            {last_content}
            {middle_content}
        </section>
    );

    
    return section;
}

function Content() {

    var elem = (
        <div>
            <Welcome />
            <Profile />
            <Technologies />
        </div>
    )

    return elem;
}

export default Content;