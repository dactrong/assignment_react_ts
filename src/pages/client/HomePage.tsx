import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../../components/Banner'

import Footer from '../../components/Footer'
import { ProductType } from '../../types/Types'


type HomePageProps = {
    product: ProductType[];
}

function HomePage({ product }: HomePageProps) {
    return (

        <div>
            <Banner />
            
            {/* End Categories */}
            {/* Start Products  */}
            <div className="products-box">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-all text-center">
                                <h1>Sản phẩm nổi bật</h1>
                                <hr />
                            </div>
                        </div>
                    </div>
                
                    <div className="row special-list">
                        {product?.map((product, index) => {
                            return (
                                <div className="col-lg-3 col-md-6 special-grid best-seller" key={index}>
                                    <div className="products-single fix">
                                        <div className="box-img-hover">
                                            <div className="type-lb">
                                                <p className="sale">Sale</p>
                                            </div>
                                            <a href={`/product/${product._id}`}><img src={product.images}  alt="Image"  width="300px" height="350px"/></a>
                                            <div className="mask-icon text-left">
                                                <ul>
                                                    <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye" /></a></li>
                                                    <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i className="fas fa-sync-alt" /></a></li>
                                                    <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i className="far fa-heart" /></a></li>
                                                </ul>
                                                <a className="cart" href="#">Add to Cart</a>
                                            </div>
                                        </div>
                                        <div className="why-text">
                                            <Link to={`product/${product._id}`}><h4>{product.name}</h4></Link>
                                            <h5> {product.price}VNĐ</h5>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}


                    </div>
                </div>
            </div>
            {/* End Products  */}
            {/* Start Blog  */}
            <div className="latest-blog">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-all text-center">
                                <h1>latest blog</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lacus enim.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-lg-4 col-xl-4">
                            <div className="blog-box">
                                <div className="blog-img">
                                    <img className="img-fluid" src="images/blog-img.jpg" />
                                </div>
                                <div className="blog-content">
                                    <div className="title-blog">
                                        <h3>Fusce in augue non nisi fringilla</h3>
                                        <p>Nulla ut urna egestas, porta libero id, suscipit orci. Quisque in lectus sit amet urna dignissim feugiat. Mauris molestie egestas pharetra. Ut finibus cursus nunc sed mollis. Praesent laoreet lacinia elit id lobortis.</p>
                                    </div>
                                    <ul className="option-blog">
                                        <li><a href="#" data-toggle="tooltip" data-placement="right" title="Likes"><i className="far fa-heart" /></a></li>
                                        <li><a href="#" data-toggle="tooltip" data-placement="right" title="Views"><i className="fas fa-eye" /></a></li>
                                        <li><a href="#" data-toggle="tooltip" data-placement="right" title="Comments"><i className="far fa-comments" /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-xl-4">
                            <div className="blog-box">
                                <div className="blog-img">
                                    <img className="img-fluid" src="images/blog-img-01.jpg" />
                                </div>
                                <div className="blog-content">
                                    <div className="title-blog">
                                        <h3>Fusce in augue non nisi fringilla</h3>
                                        <p>Nulla ut urna egestas, porta libero id, suscipit orci. Quisque in lectus sit amet urna dignissim feugiat. Mauris molestie egestas pharetra. Ut finibus cursus nunc sed mollis. Praesent laoreet lacinia elit id lobortis.</p>
                                    </div>
                                    <ul className="option-blog">
                                        <li><a href="#" data-toggle="tooltip" data-placement="right" title="Likes"><i className="far fa-heart" /></a></li>
                                        <li><a href="#" data-toggle="tooltip" data-placement="right" title="Views"><i className="fas fa-eye" /></a></li>
                                        <li><a href="#" data-toggle="tooltip" data-placement="right" title="Comments"><i className="far fa-comments" /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-xl-4">
                            <div className="blog-box">
                                <div className="blog-img">
                                    <img className="img-fluid" src="images/blog-img-02.jpg" />
                                </div>
                                <div className="blog-content">
                                    <div className="title-blog">
                                        <h3>Fusce in augue non nisi fringilla</h3>
                                        <p>Nulla ut urna egestas, porta libero id, suscipit orci. Quisque in lectus sit amet urna dignissim feugiat. Mauris molestie egestas pharetra. Ut finibus cursus nunc sed mollis. Praesent laoreet lacinia elit id lobortis.</p>
                                    </div>
                                    <ul className="option-blog">
                                        <li><a href="#" data-toggle="tooltip" data-placement="right" title="Likes"><i className="far fa-heart" /></a></li>
                                        <li><a href="#" data-toggle="tooltip" data-placement="right" title="Views"><i className="fas fa-eye" /></a></li>
                                        <li><a href="#" data-toggle="tooltip" data-placement="right" title="Comments"><i className="far fa-comments" /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default HomePage