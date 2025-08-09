import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export const ImageRotator = ({ images, interval = 3000, aspectRatio = "16/9" }) => {
    return (
        <div style={{ aspectRatio, width: "100%" }}>
            <Swiper
                modules={[Autoplay]}
                autoplay={{ delay: interval, disableOnInteraction: false }}
                loop
                slidesPerView={1}
                speed={0} // Disables transition duration
                allowTouchMove={false} // Disables manual swiping
            >
                {images.map((src, index) => (
                    <SwiperSlide key={index}>
                        <img src={src} alt={`slide-${index}`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
