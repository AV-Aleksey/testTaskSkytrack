import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { changePageAC } from '../../../../Redux/Actions/actions-history'
import _ from 'lodash'

const Pagination = () => {
  const dispatch = useDispatch()

  const data = useSelector((state) => state.historyReducer.imgCollection)
  const { pageSize, currentPage } = useSelector((state) => state.historyReducer)

  const imgChunk = _.chunk(data, pageSize)
  const pages = imgChunk.map((item, i) => i + 1)


  const changePage = (e) => {
    e.preventDefault()
    const currentPage = e.target.dataset.currentpage
    dispatch(changePageAC(currentPage))
  }

  const changePagePlus = (e) => {
    e.preventDefault()
    if (currentPage < pages.length) {
      dispatch(changePageAC(currentPage + 1))
    }
  }

  const changePageMinus = (e) => {
    e.preventDefault()
    if (currentPage > 1) {
      dispatch(changePageAC(currentPage - 1))
    }
  }

  return (
    <nav className={pages.length > 1 ? "nav-pagination" : "d-none"} aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item">
          <a className="page-link" href="#" aria-label="Previous" onClick={changePageMinus}>
            <span aria-hidden="true">&laquo;</span>
            <span className="sr-only">Previous</span>
          </a>
        </li>
        {
          pages.map(link => {
            return <li key={link} className="page-item">
              <a
                onClick={changePage}
                data-currentpage={link}
                className={+link === +currentPage ? "page-link activeLink" : "page-link"}
                href="#"
                id={'pageLink-' + link}>
                {link}
              </a>
            </li>
          })
        }

        <li className="page-item">
          <a className="page-link" href="#" aria-label="Next" onClick={changePagePlus}>
            <span aria-hidden="true">&raquo;</span>
            <span className="sr-only">Next</span>
          </a>
        </li>
      </ul>
    </nav >
  );
}

export default Pagination;

