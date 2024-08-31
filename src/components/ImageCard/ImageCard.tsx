import React from 'react';
import css from "./ImageCard.module.css";
import { Photo } from '../../photos-api';

interface ImageCardProps {
  data: Photo;
  onImageClick: (imageUrl: string) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ data, onImageClick }) => {
  const handleClick = () => {
    onImageClick(data.urls.regular);
  };

  return (
    <div>
      <img
        src={data.urls.small}
        alt="photo"
        className={css.photo}
        onClick={handleClick}
      />
    </div>
  );
};

export default ImageCard;