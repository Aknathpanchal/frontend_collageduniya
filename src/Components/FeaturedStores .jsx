import React from 'react';

const FeaturedStores = ({ stores }) => {
    return (
        <div className="top_box">
            <div className="top_box_right">
                <div className="slider_right_head">
                    <h3>Featured Stores</h3>
                    <span><a href="/stores" title="All Stores">View All Stores</a></span>
                </div>
                <section className="featured-stores">
                    <div className="store-slider slider">
                        <button type="button" className="slider-control btn btn-fab btn-raised btn-round btn-info prev">
                            <svg fill="#fff" width="20" height="20"><use xlinkHref='#icon-chevron-left'></use></svg>
                        </button>
                        <div className="slider-overflow-container">
                            <div className="slider-wrapper">
                                {stores.map((store, index) => (
                                    <div key={index} className="store-slider-item slider-item">
                                        <a className="store-slider-card" href={store.link}>
                                            <img className="zoutons-lazyload" src={store.imageSrc} alt={store.name} />
                                            <div className="coupon-count">{store.couponCount} Coupons</div>
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <button type="button" className="slider-control btn btn-fab btn-raised btn-round btn-info next">
                            <svg fill="#fff" width="20" height="20"><use xlinkHref='#icon-chevron-right'></use></svg>
                        </button>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default FeaturedStores;
