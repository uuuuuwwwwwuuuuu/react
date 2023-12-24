import React from 'react';
import './errorMessage.scss';
import img from './error.svg';

export default function ErrorMessage(props) {
  return (
    <div className='d-flex justify-content-center'>
      <span>{props.message}</span>
      <img src={img} alt='error'/>
    </div>
  ) 
}