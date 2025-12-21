// feautures/banner/BannerSlider.tsx
import React from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "../../app/providers/StoreProvider";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Slider.css";

export const Slider: React.FC = observer(() => {
  const { sliderStore } = useStore();

  return (
    <section className="slider-slider">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        loop
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="slider__swiper"
      >
        {sliderStore.slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="slider__slide">
              {slide.videoUrl ? (
                <video
                  className="slider__media"
                  src={slide.videoUrl}
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              ) : (
                <img
                  className="slider__media"
                  src={slide.imageUrl}
                  alt={slide.title}
                />
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
});