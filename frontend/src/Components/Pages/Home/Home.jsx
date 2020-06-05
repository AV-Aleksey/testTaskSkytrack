import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { requestImgAC } from '../../../Redux/Actions/actions-home'
import { Container } from 'react-bootstrap'
import scss from './home.module.scss'

//Components
import Preloader from '../../Common/Preloader'
import CardImg from '../../Common/CardImg/CardImg'

export default function Home() {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.homeReducer)

  const loadingImg = () => {
    dispatch(requestImgAC())
  }

  useEffect(() => {
    if (data.imgUrl === '') {
      dispatch(requestImgAC())
    }
  }, []);

  return (
    <Container>
      <section className={scss.home} >
        <h2 className='sectionTitle'>Главная</h2>
        <div className={scss.offer}>
          {
            data.isLoaded
              ? <CardImg {...data} />
              : <div><Preloader /></div>
          }
        </div>
        <button
          type="button"
          className="btn btn-primary"
          disabled={!data.isLoaded}
          onClick={loadingImg} >
          Загрузить GIF!
        </button >
      </section>
    </Container >
  )
}
