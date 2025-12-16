// feautures/banner/BannerSlider.tsx
import React from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "../../app/providers/StoreProvider";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./BannerSlider.css";

export const BannerSlider: React.FC = observer(() => {
  const { bannerStore } = useStore();

  return (
    <section className="banner">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        loop
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="banner__swiper"
      >
        {bannerStore.slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="banner__slide">
              <h1 className="banner__title">{slide.title}</h1>
              {slide.videoUrl ? (
                <video
                  className="banner__media"
                  src={slide.videoUrl}
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              ) : (
                <img
                  className="banner__media"
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