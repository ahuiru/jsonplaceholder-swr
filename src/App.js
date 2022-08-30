import React from 'react';
import './App.css';
import GetPost from './components/GetPost';
import GetAlbum from './components/GetAlbum';

const App = () => {
  return (
    <div>
      <p>posts</p>
      <GetPost />
      <p>albums</p>
      <GetAlbum />
    </div>
  );
}

export default App;
