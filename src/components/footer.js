import React from "react"
import {
    Jumbotron,

} from "react-bootstrap";
import "../css/footer.css";

function Footer() {
    const element = (
        <footer>
            <Jumbotron className="jumbotron jumbotron-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 text-center">
                            <h3 className="display-4 white">Useful Links</h3>
                            <ul className="list-group footer-links">
                                <li className="lead"><a href="#profile">Profile</a></li>
                                <li className="lead"><a href="#technologies">Technologies</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Jumbotron>
        </footer>
    );

    return element;
};

export default Footer;