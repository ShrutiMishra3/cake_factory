import cake_intro from "/images/cake-intro.jpg";
import "../style/hero.css"

export default function Hero() {
    return (
        <>
            <section id="one">
                <div className="shop_intro">
                    <img src={cake_intro} className="shop_intro-image" alt="cake-intro" />
                    <div className="shop_intro-description">
                        <h1 className="shop_intro-title">Hey sugar!</h1>
                        <p className="shop_intro-subtitle">
                            Our cake bakery is small but with a big love for wonderful desserts.
                        </p>
                    </div>
                </div>
                {/* <!--     <a href="#products" class="btn btn-dark" id="explore_btn" >Explore More..</a> --> */}
            </section>
        </>
    )
}