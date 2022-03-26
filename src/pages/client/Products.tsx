import React from 'react'

type Props = {}

const Products = (props: Props) => {
    return (
        <div>
            
           
          
            <div className="shop-box-inner">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-sm-12 col-xs-12 sidebar-shop-left">
                            <div className="product-categori">
                                <div className="search-product">
                                    <form action="#">
                                        <input className="form-control" placeholder="Search here..." type="text" />
                                        <button type="submit"> <i className="fa fa-search" /> </button>
                                    </form>
                                </div>
                                <div className="filter-sidebar-left">
                                    <div className="title-left">
                                        <h3>Categories</h3>
                                    </div>
                                    <div className="list-group list-group-collapse list-group-sm list-group-tree" id="list-group-men" data-children=".sub-men">
                                        <div className="list-group-collapse sub-men">
                                            <a className="list-group-item list-group-item-action" href="#sub-men1" data-toggle="collapse" aria-expanded="true" aria-controls="sub-men1">Clothing <small className="text-muted">(100)</small>
                                            </a>
                                            <div className="collapse show" id="sub-men1" data-parent="#list-group-men">
                                                <div className="list-group">
                                                    <a href="#" className="list-group-item list-group-item-action active">T-Shirts <small className="text-muted">(50)</small></a>
                                                    <a href="#" className="list-group-item list-group-item-action">Polo T-Shirts <small className="text-muted">(10)</small></a>
                                                    <a href="#" className="list-group-item list-group-item-action">Round Neck T-Shirts <small className="text-muted">(10)</small></a>
                                                    <a href="#" className="list-group-item list-group-item-action">V Neck T-Shirts <small className="text-muted">(10)</small></a>
                                                    <a href="#" className="list-group-item list-group-item-action">Hooded T-Shirts <small className="text-muted">(20)</small></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="list-group-collapse sub-men">
                                            <a className="list-group-item list-group-item-action" href="#sub-men2" data-toggle="collapse" aria-expanded="false" aria-controls="sub-men2">Footwear
                                                <small className="text-muted">(50)</small>
                                            </a>
                                            <div className="collapse" id="sub-men2" data-parent="#list-group-men">
                                                <div className="list-group">
                                                    <a href="#" className="list-group-item list-group-item-action">Sports Shoes <small className="text-muted">(10)</small></a>
                                                    <a href="#" className="list-group-item list-group-item-action">Sneakers <small className="text-muted">(20)</small></a>
                                                    <a href="#" className="list-group-item list-group-item-action">Formal Shoes <small className="text-muted">(20)</small></a>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="#" className="list-group-item list-group-item-action"> Men  <small className="text-muted">(150) </small></a>
                                        <a href="#" className="list-group-item list-group-item-action">Accessories <small className="text-muted">(11)</small></a>
                                        <a href="#" className="list-group-item list-group-item-action">Bags <small className="text-muted">(22)</small></a>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <div className="col-xl-9 col-lg-9 col-sm-12 col-xs-12 shop-content-right">
                            <div className="right-product-box">
                                <div className="product-item-filter row">
                                    <div className="col-12 col-sm-8 text-center text-sm-left">
                                        <div className="toolbar-sorter-right">
                                            <span>Sort by </span>
                                            <select id="basic" className="selectpicker show-tick form-control" data-placeholder="$ USD">
                                                <option data-display="Select">Nothing</option>
                                                <option value={1}>Popularity</option>
                                                <option value={2}>High Price → High Price</option>
                                                <option value={3}>Low Price → High Price</option>
                                                <option value={4}>Best Selling</option>
                                            </select>
                                        </div>
                                        <p>Showing all 4 results</p>
                                    </div>
                                    <div className="col-12 col-sm-4 text-center text-sm-right">
                                        <ul className="nav nav-tabs ml-auto">
                                            <li>
                                                <a className="nav-link active" href="#grid-view" data-toggle="tab"> <i className="fa fa-th" /> </a>
                                            </li>
                                            <li>
                                                <a className="nav-link" href="#list-view" data-toggle="tab"> <i className="fa fa-list-ul" /> </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="row product-categorie-box">
                                    <div className="tab-content">
                                        <div role="tabpanel" className="tab-pane fade show active" id="grid-view">
                                            <div className="row">
                                                <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                                                    <div className="products-single fix">
                                                        <div className="box-img-hover">
                                                            <div className="type-lb">
                                                                <p className="sale">Sale</p>
                                                            </div>
                                                            <img src="images/img-pro-01.jpg" className="img-fluid" alt="Image" />
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
                                                            <h4>Lorem ipsum dolor sit amet</h4>
                                                            <h5> $9.79</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                                                    <div className="products-single fix">
                                                        <div className="box-img-hover">
                                                            <div className="type-lb">
                                                                <p className="new">New</p>
                                                            </div>
                                                            <img src="images/img-pro-02.jpg" className="img-fluid" alt="Image" />
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
                                                            <h4>Lorem ipsum dolor sit amet</h4>
                                                            <h5> $9.79</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                                                    <div className="products-single fix">
                                                        <div className="box-img-hover">
                                                            <div className="type-lb">
                                                                <p className="sale">Sale</p>
                                                            </div>
                                                            <img src="images/img-pro-03.jpg" className="img-fluid" alt="Image" />
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
                                                            <h4>Lorem ipsum dolor sit amet</h4>
                                                            <h5> $9.79</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                              
                                            </div>
                                        </div>
                                        <div role="tabpanel" className="tab-pane fade" id="list-view">
                                            <div className="list-view-box">
                                                <div className="row">
                                                    <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                                                        <div className="products-single fix">
                                                            <div className="box-img-hover">
                                                                <div className="type-lb">
                                                                    <p className="new">New</p>
                                                                </div>
                                                                <img src="images/img-pro-01.jpg" className="img-fluid" alt="Image" />
                                                                <div className="mask-icon text-left">
                                                                    <ul>
                                                                        <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye" /></a></li>
                                                                        <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i className="fas fa-sync-alt" /></a></li>
                                                                        <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i className="far fa-heart" /></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6 col-md-6 col-lg-8 col-xl-8">
                                                        <div className="why-text full-width">
                                                            <h4>Lorem ipsum dolor sit amet</h4>
                                                            <h5> <del>$ 60.00</del> $40.79</h5>
                                                            <p>Integer tincidunt aliquet nibh vitae dictum. In turpis sapien, imperdiet quis magna nec, iaculis ultrices ante. Integer vitae suscipit nisi. Morbi dignissim risus sit amet orci porta, eget aliquam purus
                                                                sollicitudin. Cras eu metus felis. Sed arcu arcu, sagittis in blandit eu, imperdiet sit amet eros. Donec accumsan nisi purus, quis euismod ex volutpat in. Vestibulum eleifend eros ac lobortis aliquet.
                                                                Suspendisse at ipsum vel lacus vehicula blandit et sollicitudin quam. Praesent vulputate semper libero pulvinar consequat. Etiam ut placerat lectus.</p>
                                                            <a className="btn hvr-hover" href="#">Add to Cart</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="list-view-box">
                                                <div className="row">
                                                    <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                                                        <div className="products-single fix">
                                                            <div className="box-img-hover">
                                                                <div className="type-lb">
                                                                    <p className="sale">Sale</p>
                                                                </div>
                                                                <img src="images/img-pro-02.jpg" className="img-fluid" alt="Image" />
                                                                <div className="mask-icon">
                                                                    <ul>
                                                                        <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye" /></a></li>
                                                                        <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i className="fas fa-sync-alt" /></a></li>
                                                                        <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i className="far fa-heart" /></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6 col-md-6 col-lg-8 col-xl-8">
                                                        <div className="why-text full-width">
                                                            <h4>Lorem ipsum dolor sit amet</h4>
                                                            <h5> <del>$ 60.00</del> $40.79</h5>
                                                            <p>Integer tincidunt aliquet nibh vitae dictum. In turpis sapien, imperdiet quis magna nec, iaculis ultrices ante. Integer vitae suscipit nisi. Morbi dignissim risus sit amet orci porta, eget aliquam purus
                                                                sollicitudin. Cras eu metus felis. Sed arcu arcu, sagittis in blandit eu, imperdiet sit amet eros. Donec accumsan nisi purus, quis euismod ex volutpat in. Vestibulum eleifend eros ac lobortis aliquet.
                                                                Suspendisse at ipsum vel lacus vehicula blandit et sollicitudin quam. Praesent vulputate semper libero pulvinar consequat. Etiam ut placerat lectus.</p>
                                                            <a className="btn hvr-hover" href="#">Add to Cart</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="list-view-box">
                                                <div className="row">
                                                    <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                                                        <div className="products-single fix">
                                                            <div className="box-img-hover">
                                                                <div className="type-lb">
                                                                    <p className="sale">Sale</p>
                                                                </div>
                                                                <img src="images/img-pro-03.jpg" className="img-fluid" alt="Image" />
                                                                <div className="mask-icon">
                                                                    <ul>
                                                                        <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye" /></a></li>
                                                                        <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i className="fas fa-sync-alt" /></a></li>
                                                                        <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i className="far fa-heart" /></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6 col-md-6 col-lg-8 col-xl-8">
                                                        <div className="why-text full-width">
                                                            <h4>Lorem ipsum dolor sit amet</h4>
                                                            <h5> <del>$ 60.00</del> $40.79</h5>
                                                            <p>Integer tincidunt aliquet nibh vitae dictum. In turpis sapien, imperdiet quis magna nec, iaculis ultrices ante. Integer vitae suscipit nisi. Morbi dignissim risus sit amet orci porta, eget aliquam purus
                                                                sollicitudin. Cras eu metus felis. Sed arcu arcu, sagittis in blandit eu, imperdiet sit amet eros. Donec accumsan nisi purus, quis euismod ex volutpat in. Vestibulum eleifend eros ac lobortis aliquet.
                                                                Suspendisse at ipsum vel lacus vehicula blandit et sollicitudin quam. Praesent vulputate semper libero pulvinar consequat. Etiam ut placerat lectus.</p>
                                                            <a className="btn hvr-hover" href="#">Add to Cart</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Shop Page */}
            {/* Start Instagram Feed  */}
           
          
        </div>

    )
}

export default Products