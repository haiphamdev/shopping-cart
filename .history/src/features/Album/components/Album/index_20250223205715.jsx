import React from 'react';
import PropTypes from 'prop-types';

Album.propTypes = {};

function Album({ title, thumbnailUrl }) {
  return (
    <li>
      <img src={thumbnailUrl} />
      <h2>{title}</h2>
    </li>
  );
}

export default Album;
