import React from 'react';
import PropTypes from 'prop-types';
import Album from '../Album';

AlbumList.propTypes = {};

function AlbumList({ albumList }) {
  return (
    <ul>
      {albumList.map((item) => (
        <Album key={item.id} />
      ))}
    </ul>
  );
}

export default AlbumList;
