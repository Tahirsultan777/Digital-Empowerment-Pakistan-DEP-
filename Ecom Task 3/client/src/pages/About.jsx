import Analytics from "../components/Analytics";
import { useAuth } from "../store/auth";

const About = () => {

    const { user } = useAuth();
    return <>
        <main>
            <section className="section_hero">
                <div className="container grid grid-two-cols">
                    <div className="hero_content">

                        <h2>Welcome {user ? `${user.username} to our website` : `to our website`} </h2>
                        <p>
                            Welcome to our Apple Accessories Store, where quality meets innovation. Founded by a team of Apple enthusiasts, our mission is to provide you with the best accessories that enhance and protect your Apple devices. We understand the importance of reliable and stylish accessories that seamlessly integrate with your lifestyle, and we are dedicated to offering products that meet and exceed your expectations.
                        </p>
                        <p>
                            Our mission is simple: to offer high-quality, functional, and stylish accessories that complement and enhance the Apple experience. We carefully select each product to ensure it meets the highest standards of performance and design, providing you with accessories that not only look great but also offer superior functionality.
                        </p>
                        <div className="btn btn-group">
                            <a href="/contact"><button className="btn">connect now</button></a>
                            <a href="/services"><button className="btn secandary_button">learn more</button></a>
                        </div>
                    </div>

                    {/* hero images */}
                    <div className="hero_images">
                        <img src="/public/about.png" alt="Coding togather" />
                    </div>
                </div>
            </section>

        </main>
        {/* 2nd section */}
        <Analytics />
    </>
}

export default About;