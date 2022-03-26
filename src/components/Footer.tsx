import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div>
        <footer>
                <div className="footer-main">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="footer-widget">
                                    <h4>About ThewayShop</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                    <ul>
                                        <li><a href="#"><i className="fab fa-facebook" aria-hidden="true" /></a></li>
                                        <li><a href="#"><i className="fab fa-twitter" aria-hidden="true" /></a></li>
                                        <li><a href="#"><i className="fab fa-linkedin" aria-hidden="true" /></a></li>
                                        <li><a href="#"><i className="fab fa-google-plus" aria-hidden="true" /></a></li>
                                        <li><a href="#"><i className="fa fa-rss" aria-hidden="true" /></a></li>
                                        <li><a href="#"><i className="fab fa-pinterest-p" aria-hidden="true" /></a></li>
                                        <li><a href="#"><i className="fab fa-whatsapp" aria-hidden="true" /></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="footer-link">
                                    <h4>Information</h4>
                                    <ul>
                                        <li><a href="#">About Us</a></li>
                                        <li><a href="#">Customer Service</a></li>
                                        <li><a href="#">Our Sitemap</a></li>
                                        <li><a href="#">Terms &amp; Conditions</a></li>
                                        <li><a href="#">Privacy Policy</a></li>
                                        <li><a href="#">Delivery Information</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="footer-link-contact">
                                    <h4>Contact Us</h4>
                                    <ul>
                                        <li>
                                            <p><i className="fas fa-map-marker-alt" />Address: Số 5LK39 <br />Trịnh Văn Bô,<br /> KS 67213 </p>
                                        </li>
                                        <li>
                                            <p><i className="fas fa-phone-square" />Phone: <a href="tel:+1-888705770">0963209332</a></p>
                                        </li>
                                        <li>
                                            <p><i className="fas fa-envelope" />Email: <a href="mailto:contactinfo@gmail.com">dactrong2001@gmail.com</a></p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="footer-copyright">
                <p className="footer-company">All Rights Reserved. © 2018 <a href="#">ThewayShop</a> Design By :
                    <a href="https://html.design/">html design</a></p>
            </div>
    </div>
  )
}

export default Footer