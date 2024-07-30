import Analytics from "../components/Analytics";
import MyCarousel from '../components/My_carousel';
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <>
            <MyCarousel />
            <main>
                <section className="section_hero">
                    <div className="container grid grid-two-cols">
                        <div className="hero_content">
                            <h1>Apple Accessories</h1>
                            <p>
                                Welcome to our premier Apple Accessories Store, your ultimate destination for enhancing your Apple experience with a wide range of high-quality accessories. Whether you are looking to protect your devices, boost your productivity, or simply add a touch of style, we have got you covered with the best products in the market.
                            </p>

                            <div className="btn btn-group">
                                <Link to="/contact"><button className="btn">connect now</button></Link>
                                <Link to="/services"><button className="btn secandary_button">learn more</button></Link>
                            </div>
                        </div>

                        {/* hero images */}
                        <div className="hero_images">
                            <img src="/public/accessories.jpg" alt="Coding togather" />
                        </div>
                    </div>
                </section>
            </main>

            {/* 2nd section */}
            <Analytics />

            {/* Start Accessories  */}
            {/* Start IPHONES  */}
            <section id="mobiles" className="products-section">
                <h1>IPHONES</h1>
                <div className="products-container">
                    <div className="product-card">
                        <img src="https://media.very.co.uk/i/very/VPZ1N_SQ1_0000000020_BLUE_SLf?$300x400_retinamobilex2$&$roundel_very$&p1_img=blank_apple" alt="Mobile 1" />
                        <h3>Iphone 15 Pro </h3>
                        <h3>Iphone 15 Pro Max Series</h3>
                        <Link to='/iphones'><button>More</button></Link>
                    </div>
                    <div className="product-card">
                        <img src="https://www.pakmobizone.pk/wp-content/uploads/2022/12/Apple-iPhone-14-Pro-Max-Silver-4.jpg" alt="Mobile 2" />
                        <h3>Iphone 14 Pro </h3>
                        <h3>Iphone 14 Pro Max Series</h3>
                        <Link to='/iphones'><button>More</button></Link>
                    </div>
                    <div className="product-card">
                        <img src="https://static.ticimax.cloud/40115/uploads/urunresimleri/buyuk/apple-iphone-13-pro-max-256-gb-graphit--f280-.png" alt="Mobile 2" />
                        <h3>Iphone 13 Pro </h3>
                        <h3>Iphone 13 Pro Max Series</h3>
                        <Link to='/iphones'><button>More</button></Link>
                    </div>

                    <div className="product-card">
                        <img src="https://mobileguru.pk/wp-content/uploads/2022/07/iphone-12-pakistan-mobileguru.png" alt="Mobile 2" />
                        <h3>Iphone 12 Pro </h3>
                        <h3>Iphone 12 Pro Max Series</h3>
                        <Link to='/iphones'><button>More</button></Link>
                    </div>
                    <div className="product-card">
                        <img src="https://regen.pk/cdn/shop/files/REGEN-iPhone11-Backfront-Purple-Pakistan.png?v=1684752662" alt="Mobile 2" />
                        <h3>Iphone 11 Pro </h3>
                        <h3>Iphone 11 Pro Max Series</h3>
                        <Link to='/iphones'><button>More</button></Link>
                    </div>

                    {/* <!-- Add more product cards as needed --> */}
                </div>
            </section>
            {/* End IPHONES  */}

            {/* Start MackBooks  */}
            <section id="mobiles" className="products-section">
                <h1>MACBOOKS</h1>
                <div className="products-container">
                    <div className="product-card">
                        <img src="https://www.pakmobizone.pk/wp-content/uploads/2024/01/Apple-MacBook-Air-13-Space-Gray-1.jpg" alt="Mobile 1" />
                        <h3>Macbook pro M1</h3>
                        <Link to='/macbooks'><button>More</button></Link>
                    </div>
                    <div className="product-card">
                        <img src="https://media.ldlc.com/r1600/ld/products/00/06/11/45/LD0006114512.jpg" alt="Mobile 2" />
                        <h3>Macbook Air M3</h3>
                        <Link to='/macbooks'><button>More</button></Link>
                    </div>
                    <div className="product-card">
                        <img src="https://www.mega.pk/items_images/Apple+Macbook+12+MNYK2+Core+M3+Laptop+8GB+LPDDR3+256GB+SSD+Price+in+Pakistan%2C+Specifications%2C+Features_-_17250.webp" alt="Mobile 2" />
                        <h3>Macbook 12</h3>
                        <Link to='/macbooks'><button>More</button></Link>
                    </div>

                    <div className="product-card">
                        <img src="https://photographylife.com/wp-content/uploads/2022/06/Apple_MacBook-Pro_14-16-inch_10182021-1.jpg" alt="Mobile 2" />
                        <h3>Macbook 14</h3>
                        <Link to='/macbooks'><button>More</button></Link>
                    </div>
                    <div className="product-card">
                        <img src="https://myshop.pk/pub/media/catalog/product/cache/26f8091d81cea4b38d820a1d1a4f62be/m/a/macbook_pro-myshop-pk-6_1.jpg" alt="Mobile 2" />
                        <h3>MacBook 13</h3>
                        <Link to='/macbooks'><button>More</button></Link>
                    </div>

                    {/* <!-- Add more product cards as needed --> */}
                </div>
            </section>
            {/* End MackBooks  */}

            {/* Start HeadPhones  */}
            <section id="mobiles" className="products-section">
                <h1>AIRPODS</h1>
                <div className="products-container">
                    <div className="product-card">
                        <img src="https://www.tejar.pk/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/a/p/apple_airpods_max2_-_tejar_1.jpg" alt="HeadPhone 1" />
                        <h3>HeadPhone MGYL3AM</h3>
                        <Link to='/headPhones'><button>More</button></Link>
                    </div>
                    <div className="product-card">
                        <img src="https://www.tejar.pk/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/a/p/apple_airpods_max_-_pink2_-_tejar.jpg" alt="AirPods 2" />
                        <h3>AirPods Max</h3>
                        <Link to='/headPhones'><button>More</button></Link>
                    </div>
                    <div className="product-card">
                        <img src="https://i5.walmartimages.com/seo/Apple-AirPods-Pro-2nd-Generation-Lightning_7e8598be-0a04-4938-98be-765f1fe80447.2f2187eed7001354fb4911fe454dc0d2.jpeg" alt="AirPods 3rd" />
                        <h3>AirPods 3rd</h3>
                        <Link to='/headPhones'><button>More</button></Link>
                    </div>

                    <div className="product-card">
                        <img src="https://i0.wp.com/apple-mart.pk/wp-content/uploads/2021/04/MMTN2.png" alt="Mobile 2" />
                        <h3>Apple Airpods</h3>
                        <Link to='/headPhones'><button>More</button></Link>
                    </div>
                    <div className="product-card">
                        <img src="https://d1iv6qgcmtzm6l.cloudfront.net/product_galleries/lg_WmXtV11alUyjeBk71tcGRlltWA4dmto22mN2PCMJ.gif" alt="Wireless HeadPhones" />
                        <h3>Wireless HeadPhones</h3>
                        <Link to='/headPhones'><button>More</button></Link>
                    </div>

                    {/* <!-- Add more product cards as needed --> */}
                </div>
            </section>
            {/* End HeadPhones  */}
            {/* End Accessories  */}
        </>
    )
}

export default Home;