import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import CTAButton from './CTAButton'

const slides = [
  {
    title: 'AI that works for small businesses',
    subtitle:
      'Practical, affordable automations that save time and grow revenue from day one.',
    theme: 'gradient-1',
  },
  {
    title: 'From no‑code to custom AI, at your pace',
    subtitle:
      'Start fast with low-code tools, scale into tailored AI as you grow.',
    theme: 'gradient-2',
  },
  {
    title: 'Your local GTA AI partner',
    subtitle:
      'PIPEDA-ready solutions built with Canadian privacy and compliance in mind.',
    theme: 'gradient-3',
  },
]

export default function BannerCarousel() {
  return (
    <div className="hero">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={1}
        loop
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        className="hero-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className={`hero-slide ${slide.theme}`}>
              <div className="container hero-content">
                <h1>{slide.title}</h1>
                <p>{slide.subtitle}</p>
                <div className="hero-actions">
                  <CTAButton text="Book a Free Consultation" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}


