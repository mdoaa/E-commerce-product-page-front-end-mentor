import { useState } from "react";
import Nav from "./Nav";
import "../components style/Home.css";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Stack from "@mui/material/Stack";
import { CartContext } from "./CartContext";
import { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Home = () => {
  const [index, setIndex] = useState(0);
  const [isLightBoxOpen, setIsLightBoxOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const { cartQuantity, setCartQuantity } = useContext(CartContext);

  const handleIncrease = () => setQuantity((q) => q + 1);
  const handleDecrease = () => setQuantity((q) => (q > 1 ? q - 1 : 1));
  const handleAddToCart = () => {
    setCartQuantity(quantity);
  };
  const images = [
    "image-product-1.jpg",
    "image-product-2.jpg",
    "image-product-3.jpg",
    "image-product-4.jpg",
  ];

  const nextImage = () =>
    setIndex((prevIndex) => (prevIndex + 1) % images.length);

  const prevImage = () =>
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);

  const openLightBox = () => setIsLightBoxOpen(true);
  const closeLightBox = () => setIsLightBoxOpen(false);

  return (
    <>
      <Nav />
      <div className="home-container">
        <div className="image-container">
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={10}
            slidesPerView={1}
            className="swiper-container"
          >
            {images.map((img, idx) => (
              <SwiperSlide key={idx}>
                <img
                  src={img}
                  alt={`product ${idx + 1}`}
                  className="swiper-slide-image"
                  onClick={() => {
                    setIndex(idx);
                    openLightBox();
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="thumbnails">
            {images.map((image, idx) => (
              <img
                key={idx}
                src={image}
                alt={`thumbnail ${idx + 1}`}
                onClick={() => setIndex(idx)}
              />
            ))}
          </div>
        </div>
        <div className="product-details">
          <p>
            <span className="product-brand">Sneaker Company</span>
          </p>
          <h1>
            Fall Limited Edition <br /> Sneakers
          </h1>
          <p className="product-description">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
          <p className="product-price">
            $125.00
            <span className="discount">50%</span>
          </p>
          <p className="original-price">$250.00</p>

          <Stack direction="row" spacing={2} alignItems="center">
            <ButtonGroup variant="outlined">
              <Button onClick={handleDecrease} color="warning">
                -
              </Button>
              <Button disabled>{quantity}</Button>
              <Button onClick={handleIncrease} color="warning">
                +
              </Button>
            </ButtonGroup>

            <Button
              variant="contained"
              color="warning"
              startIcon={<ShoppingCartIcon />}
              onClick={handleAddToCart}
              sx={{ px: 4, py: 1.5 }}
            >
              Add to Cart
            </Button>
          </Stack>
        </div>
      </div>

      {isLightBoxOpen && (
        <>
          <div className="lightbox">
            <div className="lightbox-content">
              <img
                src={images[index]}
                alt={`lightbox image ${index + 1}`}
                className="lightbox-image"
              />
              <span className="close-btn" onClick={closeLightBox}>
                &times;
              </span>
              <button className=" nav-btn prev" onClick={prevImage}>
                &#10094;
              </button>
              <button className="nav-btn next" onClick={nextImage}>
                &#10095;
              </button>
            </div>

            <div className="thumbnails">
              {images.map((image, idx) => (
                <img
                  key={idx}
                  src={image}
                  alt={`thumbnail ${idx + 1}`}
                  onClick={() => setIndex(idx)}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default Home;
