// eslint-disable-next-line no-unused-vars
import React from 'react';
import AlbumList from './components/AlbumList';

AlbumFeature.propTypes = {};

function AlbumFeature() {
  const albumList = [
    {
      id: 1,
      title: 'Đầu Tư Cho Trái Tim',
      thumbnailUrl:
        'https://images.unsplash.com/photo-1740165886179-c2be3d6447ca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8',
    },
    {
      id: 2,
      title: 'Đầu Tư Cho Trái Tim',
      thumbnailUrl:
        'https://images.unsplash.com/photo-1740141340584-a749ceac44a1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8',
    },
    {
      id: 3,
      title: 'Đầu Tư Cho Trái Tim',
      thumbnailUrl:
        'https://images.unsplash.com/photo-1740165886179-c2be3d6447ca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8',
    },
  ];
  return (
    <div>
      <AlbumList albumList={albumList} />
    </div>
  );
}

export default AlbumFeature;
