import React from 'react';
import scss from './cardImg.module.scss'

const CardImg = ({ imgUrl, name, date, children }) => {

  console.log(children)
  return (
    <div className={scss.card}>
      <img src={imgUrl} alt={name} />
      <div className={scss.card__infoBlock}>
        <p className={scss.card__name} title={scss.card__name}>
          {name !== '' ? name : 'No name'}
        </p>
        <hr />
        {
          children ? children : null
        }
        <small className={scss.card__date}>Загружено в {date}</small>
      </div>
    </div>
  );
}

export default CardImg;



