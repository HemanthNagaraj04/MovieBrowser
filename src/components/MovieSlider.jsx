import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

const MovieSlider = ({ title, movies }) => {
  return (
    <div className="slider-section">
      <h2 className="slider-title">{title}</h2>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        slidesPerView={6}
        breakpoints={{
          0: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
        }}
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.imdbID}>
            <div className="movie-slide-card">
              <img
                src={movie.Poster !== "N/A" ? movie.Poster : "no-movie.png"}
                alt={movie.Title}
              />
              <p>{movie.Title}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MovieSlider;
