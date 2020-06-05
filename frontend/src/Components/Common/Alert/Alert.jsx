import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { closeErrorAC } from '../../../Redux/Actions/actions-common'
import './alert.scss'

const Alert = ({ errorMessage }) => {
  const dispatch = useDispatch()
  const { error } = useSelector((state) => state.commonReducer)

  useEffect(() => {
    if (error) {
      setTimeout(() => dispatch(closeErrorAC()), 3000)
    }
  })

  return (
    <div className={error ? "alert alert-warning alert-area" : 'd-none'} role="alert">
      <small>{errorMessage}</small>
    </div>
  );
}

export default Alert;
