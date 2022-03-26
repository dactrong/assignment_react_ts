import React from 'react'
import { NavLink } from 'react-router-dom'
import Banner from './Banner'

type Props = {}

const Header = (props: Props) => {
    return (
        <div><div className="main-top">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div className="text-slid-box">
                            <div id="offer-box" className="carouselTicker">
                                <ul className="offer-box">
                                    <li>
                                        <i className="fab fa-opencart" /> Off 10%! Shop Now Man
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                       
                        <div className="right-phone-box">
                            <p>PHONE - <a href="#"> 0963209332</a></p>
                        </div>
                        <div className="our-link">
                            <ul>
                                <li><a href="#">My Account</a></li>
                                <li><a href="#">Our location</a></li>
                                <li><a href="#">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            {/* End Main Top */}
            {/* Start Main Top */}
            <header className="main-header">
                {/* Start Navigation */}
                <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-default bootsnav">
                    <div className="container">
                        {/* Start Header Navigation */}
                        <div className="navbar-header">
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-menu" aria-controls="navbars-rs-food" aria-expanded="false" aria-label="Toggle navigation">
                                <i className="fa fa-bars" />
                            </button>
                            <a className="navbar-brand" href="index.html"> <NavLink to ="/"><img src="images/logo.png" className="logo"  /></NavLink></a>
                        </div>
                        {/* End Header Navigation */}
                        {/* Collect the nav links, forms, and other content for toggling */}
                        <div className="collapse navbar-collapse" id="navbar-menu">
                            <ul className="nav navbar-nav ml-auto" data-in="fadeInDown" data-out="fadeOutUp">
                            
                                <li className="nav-item "><a className="nav-link" ><NavLink to ="/product">Home</NavLink> </a></li>
                                <li className="nav-item"><a className="nav-link" href="about.html">About Us</a></li>
                                <li className="nav-item"><a className="nav-link" href="about.html">Product</a></li>
                                <li className="nav-item"><a className="nav-link" href="about.html">Shop</a></li>
                                <li className="nav-item"><a className="nav-link" href="service.html">Our Service</a></li>
                                <li className="nav-item"><a className="nav-link" href="contact-us.html">Contact Us</a></li>
                            </ul>
                        </div>
                        {/* /.navbar-collapse */}
                        {/* Start Atribute Navigation */}
                        <div className="attr-nav">
                            <ul>
                                <li className="search"><a href="#"><i className="fa fa-search" /></a></li>
                                <li className="side-menu"><a href="#">
                                    <i className="fa fa-shopping-bag" />
                                    <span className="badge">3</span>
                                </a></li>
                            </ul>
                        </div>
                        {/* End Atribute Navigation */}
                    </div>
                    {/* Start Side Menu */}
                    <div className="side">
                        <a href="#" className="close-side"><i className="fa fa-times" /></a>
                        <li className="cart-box">
                            <ul className="cart-list">
                                <li>
                                    <a href="#" className="photo"><img src="images/img-pro-01.jpg" className="cart-thumb"  /></a>
                                    <h6><a href="#">Delica omtantur </a></h6>
                                    <p>1x - <span className="price">$80.00</span></p>
                                </li>
                                <li>
                                    <a href="#" className="photo"><img src="images/img-pro-02.jpg" className="cart-thumb"  /></a>
                                    <h6><a href="#">Omnes ocurreret</a></h6>
                                    <p>1x - <span className="price">$60.00</span></p>
                                </li>
                                <li>
                                    <a href="#" className="photo"><img src="images/img-pro-03.jpg" className="cart-thumb"  /></a>
                                    <h6><a href="#">Agam facilisis</a></h6>
                                    <p>1x - <span className="price">$40.00</span></p>
                                </li>
                                <li className="total">
                                    <a href="#" className="btn btn-default hvr-hover btn-cart">VIEW CART</a>
                                    <span className="float-right"><strong>Total</strong>: $180.00</span>
                                </li>
                            </ul>
                        </li>
                    </div>
                    {/* End Side Menu */}
                </nav>
                {/* End Navigation */}
            </header>
            {/* End Main Top */}
            {/* Start Top Search */}
            <div className="top-search">
                <div className="container">
                    <div className="input-group">
                        <span className="input-group-addon"><i className="fa fa-search" /></span>
                        <input type="text" className="form-control" placeholder="Search" />
                        <span className="input-group-addon close-search"><i className="fa fa-times" /></span>
                    </div>
                </div>
            </div>
           
            </div>
    )
}

export default Header