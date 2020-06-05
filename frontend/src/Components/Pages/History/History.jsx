import React from 'react'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import scss from './history.module.scss'
import _ from 'lodash'

//Components
import CardImg from '../../Common/CardImg/CardImg'
import Pagination from './Pagination/Pagination.jsx'


export default function History() {
  const data = useSelector((state) => state.historyReducer.imgCollection)
  const { pageSize, currentPage } = useSelector((state) => state.historyReducer)
  const imgChunk = _.chunk(data, pageSize)

  return (
    <Container>
      <section className={scss.history}>
        <h2 className='sectionTitle'>История загрузок</h2>
        <Pagination />
        <div className={scss.collectionImg__wrap}>
          {
            imgChunk.length > 0
              ? imgChunk[currentPage - 1].map(card => {
                return <CardImg {...card}>
                  <button className='btnDeleteImg'>x</button>
                </CardImg>
              })
              : <small>Нет загруженных картинок...</small>
          }
        </div>
      </section >
    </Container>
  )
}
