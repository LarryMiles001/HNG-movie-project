import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Toaster, toast } from "react-hot-toast";

const Card = ({ posterBaseUrl, movie }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const showToast = () => {
    const action = isFavorite ? "Removed from" : "Added to";
    toast[isFavorite ? 'error' : 'success'](`${movie.title} ${action} favorites!`);
  };

  const toggleFavorite = () => {
    setIsFavorite(prev => !prev);
    showToast();
  };

  return (
    <div
      className="flex flex-col justify-center bg-white rounded-lg shadow-md"
      data-testid="movie-card"
    >
      <Link to={`/movie/${movie.id}`}>
        <img
          src={`${posterBaseUrl}${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-auto"
          data-testid="movie-poster"
        />
        <div className="p-4 ">
          <h2 className="text-xl font-semibold" data-testid="movie-title">
            {movie.title}
          </h2>
          <p className="text-gray-600" data-testid="movie-release-date">
            {movie.release_date.slice(0, 4)}
          </p>
        </div>
      </Link>
      <button
        onClick={toggleFavorite}
        className={`p-2 text-xl cursor-pointer ${
          isFavorite ? "text-red-500" : "text-gray-400"
        }`}
        data-testid="favorite-button"
      >
        <FontAwesomeIcon
          icon={faHeart}
          className="text-2xl"
          data-testid="heart-icon"
        />
      </button>
      <Toaster />
    </div>
  );
};

export default Card;
