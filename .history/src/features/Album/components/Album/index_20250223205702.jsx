import React from 'react';
import PropTypes from 'prop-types';

Album.propTypes = {};

function Album({ title, thumbnailUrl }) {
  return (
    <li>
      <img src={thumbnailUrl} />
    </li>
  );
}

export default Album;
