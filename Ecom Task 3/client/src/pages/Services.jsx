import { useAuth } from "../store/auth";

const Services = () => {

    const { services } = useAuth();

    if (!Array.isArray(services)) {
        return null;  // Or display a loading spinner, error message, etc.
    }
    return (
        <>
            <section className="section_services">
                <div className="container">
                    <h1 className="main_heading">Services</h1>
                </div>

                <div className="container grid grid-three-cols">

                    {services.map((curElem, index) => {
                        const { price, description, service, provider, image } = curElem;
                        console.log("Imagesss", image)
                        return (
                            <div className="card" key={index}>
                                <div className="product-card">
                                    <img src={image} alt="our service img" width="300" />
                                    <p>{provider}</p>
                                    <h2>{service}</h2>
                                    <p>{description}</p>
                                    <div className="card_prices">
                                        <button>{price}</button>
                                        <button>Add To Cart</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}


                </div>
            </section>
        </>
    )
}

export default Services;