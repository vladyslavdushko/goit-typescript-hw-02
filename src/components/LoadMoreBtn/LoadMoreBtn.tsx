import React from 'react';
import css from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  onClick: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick }) => {
  return (
    <div className={css.button}>
      <button onClick={onClick}>Load more</button>
    </div>
  );
};

export default LoadMoreBtn;