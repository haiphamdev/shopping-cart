// eslint-disable-next-line no-unused-vars
import React from 'react';
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
