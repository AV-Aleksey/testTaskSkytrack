import React from 'react';
import scss from './cardImg.module.scss'
import { deleteImgAC } from '../../../Redux/Actions/actions-history'
import { useDispatch } from 'react-redux'

const CardImg = ({ imgUrl, name, date, children, id }) => {
  const dispatch = useDispatch()
  const deleteImg = (e) => {
    e.preventDefault()
    const id = e.target.closest('.cardWrapImg').getAttribute('id')
    dispatch(deleteImgAC(id))
  }

  return (
    <div className={scss.card + ' cardWrapImg'} id={id}>
      <img src={imgUrl} alt={name} />
      <div className={scss.card__infoBlock}>
        <p className={scss.card__name} title={scss.card__name}>
          {name !== '' ? name : 'No name'}
        </p>
        <hr />
        {
          children ? <button className='btnDeleteImg' onClick={deleteImg}>x</button> : null
        }
        <small className={scss.card__date}>Загружено в {date}</small>
      </div>
    </div>
  );
}

export default CardImg;



