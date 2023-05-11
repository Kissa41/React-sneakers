import styles from './Card.module.scss';
import React from 'react';

function Card({onFavoriteClick, title, imageUrl, price, onPlusClick}) {
const [isAdded, setIsAdded] = React.useState();

const handlePlus = () => {
  onPlusClick({title, imageUrl, price, isAdded});
  setIsAdded(!isAdded);
}
  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onFavoriteClick}>
        <img src="/img/heart-unliked.svg" alt="Unliked" />
      </div>
      <img width={133} height={112} src={imageUrl} alt="Sneakers" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена  :</span>
          <b>{price}</b>
        </div>
          <img className={styles.plus} onClick={handlePlus} src={isAdded ? "/img/btn-checked.svg" : "/img/btn-unchecked.svg"} alt="Plus" />
      </div>
    </div>
  );
}

export default Card;
