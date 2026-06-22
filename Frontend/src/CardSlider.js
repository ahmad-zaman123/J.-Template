import React from "react";
import Slider from "react-slick";
import { Button } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CardSlider = () => {
    const products = [
        {
            id: 1,
            title: "GREY COTTON KURTA",
            price: "PKR 5,265.00",
            originalPrice: "PKR 10,530.00",
            discount: "50% OFF",
            imageUrl: "https://www.junaidjamshed.com/media/catalog/product/3/2/32895_2_.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds",
        },
        {
            id: 2,
            title: "MAROON COTTON KURTA",
            price: "PKR 4,712.00",
            originalPrice: "PKR 5,890.00",
            discount: "20% OFF",
            imageUrl: "https://www.junaidjamshed.com/media/catalog/product/j/j/jjk-33094_1_.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds",
        },
        {
            id: 3,
            title: "GREY COTTON KURTA",
            price: "PKR 3,380.00",
            imageUrl: "https://www.junaidjamshed.com/media/catalog/product/j/j/jjk-33142_1_.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds",
        },
        {
            id: 4,
            title: "BLACK COTTON KURTA",
            price: "PKR 3,380.00",
            imageUrl: "https://www.junaidjamshed.com/media/catalog/product/9/0/90441_3_.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds",
        },
    ];

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                    centerPadding: "20px",
                },
            },
        ],
    };

    return (
        <div className="my-4">
            <h1 style={{ fontSize: "30px", textAlign: "center" }} className="text">
                RELATED PRODUCTS
            </h1>
            <br /><br />
            <div style={{ padding: "0 20px" }}>
                <Slider {...sliderSettings}>
                    {products.map((product) => (
                        <div key={product.id} className="px-2">
                            <div
                                className="h-100 mx-auto"
                                style={{
                                    height: "280px",
                                    maxWidth: "200px",
                                    margin: "0 auto",
                                }}
                            >
                                <img
                                    style={{ height: "250px", objectFit: "cover"}}
                                    src={product.imageUrl}
                                    alt={product.title}
                                />
                                <div className="d-flex flex-column mt-2">
                                    <p
                                        style={{
                                            fontSize: "13px",
                                            textAlign: "center",
                                        }}
                                    >
                                        {product.title}
                                    </p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <h5
                                                style={{ fontSize: "17px" }}
                                                className="text-danger mb-0"
                                            >
                                                {product.price}
                                            </h5>
                                            {product.originalPrice && (
                                                <h5
                                                    style={{
                                                        fontSize: "15px",
                                                    }}
                                                    className="text-decoration-line-through mb-0"
                                                >
                                                    {product.originalPrice}
                                                </h5>
                                            )}
                                        </div>
                                        {product.discount && (
                                            <span
                                                className="badge bg-danger"
                                                style={{
                                                    fontSize: "12px",
                                                    padding: "5px",
                                                }}
                                            >
                                                {product.discount}
                                            </span>
                                        )}
                                    </div>
                                    <Button
                                        variant="primary"
                                        className="mt-3 bg-dark border-dark text-white mx-auto"
                                        style={{ width: "60%" }}
                                    >
                                        Add to Bag
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default CardSlider;