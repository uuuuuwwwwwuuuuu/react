import React from 'react';
import './errorMessage.scss';
import img from './error.svg';

export default function ErrorMessage() {
  return (
    <div className='d-flex justify-content-center'>
      <span>Error loading character information</span>
      {/* <img src={process.env.PUBLIC_URL + 'img/error.svg'} alt='error'/>    ссылка на папку паблик */}
      <img src={img} alt='error'/>
    </div>
  ) 
}