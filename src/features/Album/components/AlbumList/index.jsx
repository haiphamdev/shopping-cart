import React from 'react';
import PropTypes from 'prop-types';
import Album from '../Album';
import './style.scss';

AlbumList.propTypes = {};

function AlbumList({ albumList }) {
  return (
    <ul className='album-list'>
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
