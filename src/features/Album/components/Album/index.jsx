import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

Album.propTypes = {};

function Album({ title, thumbnailUrl }) {
  return (
    <li className='album-item'>
      <img className='album-img' src={thumbnailUrl} />
      <h2>{title}</h2>
    </li>
  );
}

export default Album;
