import React from 'react';
import PropTypes from 'prop-types';
import Album from '../Album';

AlbumList.propTypes = {};

function AlbumList({ albumList }) {
  return (
    <ul>
      {albumList.map((item, index) => (
        <Album
          key={index}
          title={item.title}
          thumbnailUrl={item.thumbnailUrl}
        />
      ))}
    </ul>
  );
}

export default AlbumList;
