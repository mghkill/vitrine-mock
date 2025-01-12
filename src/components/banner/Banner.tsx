import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";

// Componentes das setas
const PrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow`}
      style={{
        ...style,
        display: "block",
        left: "10px",
        zIndex: 1,
      }}
      onClick={onClick}
    >
      
    </div>
  );
};

const NextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow`}
      style={{
        ...style,
        display: "block",
        right: "10px",
        zIndex: 1,
      }}
      onClick={onClick}
    >
    
    </div>
  );
};

// Hook para detectar largura da tela
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
};

export const Banner = () => {
  const isMobile = useIsMobile(); // Verifica se é mobile

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
      {isMobile ? (
        <Slider {...settings}>
          <div>
            <img
              src="https://groomb.com.br/wp-content/uploads/bannermini4-1.png"
              alt="Promoção Mobile 1"
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>
          <div>
            <img
              src="https://img.freepik.com/psd-premium/modelo-de-banner-de-loja-para-instagram-facebook_1083154-71.jpg?semt=ais_hybrid"
              alt="Promoção Mobile 2"
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>
          <div>
            <img
              src="https://groomb.com.br/wp-content/uploads/bannermini4-1.png"
              alt="Promoção Mobile 3"
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>
        </Slider>
      ) : (
        <Slider {...settings}>
          <div>
            <img
              src="https://groomb.com.br/wp-content/uploads/bannermini1-1.png"
              alt="Promoção Desktop 1"
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>
          <div>
            <img
              src="https://groomb.com.br/wp-content/uploads/bannermini5-1.png"
              alt="Promoção Desktop 2"
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>
          <div>
            <img
              src="https://groomb.com.br/wp-content/uploads/bannermini1-1.png"
              alt="Promoção Desktop 3"
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>
        </Slider>
      )}
    </div>
  );
};
