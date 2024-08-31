import React from 'react';
import ImageCard from '../ImageCard/ImageCard';
import { nanoid } from 'nanoid';
import css from "./ImageGallery.module.css";
import { Photo } from '../../photos-api';

interface ImageGalleryProps {
  items: Photo[];
  onImageClick: (imageUrl: string) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ items, onImageClick }) => {
  return (
    <ul className={css.list}>
      {items.map((item) => (
        <li key={nanoid()} className={css.item}>
          <ImageCard data={item} onImageClick={onImageClick} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;