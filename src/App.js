import React, { useEffect, useState } from 'react';
import './App.css';
import Sidebar from './Components/Sidebar/sidebar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Artworks from './Pages/ArtworksPage/ArtworksPage';
import NotSignIn from './Pages/NotSignIn/NotSignIn';
import ForumPage from './Pages/ForumPage/ForumPage';
import ForumSearch from './Pages/ForumSearch/ForumSearch';
import { Container } from 'react-bootstrap';
import ExampleService from './services/example.service';

function App() {
  // Khai báo trạng thái cho artworks, creators và error
  const [artworks, setArtworks] = useState([]);
  const [creators, setCreators] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Lấy dữ liệu artworks
    ExampleService.getAllArtworks()
      .then(data => setArtworks(data)) // Cập nhật dữ liệu artworks vào state
      .catch(err => setError(err.message)); // Cập nhật lỗi nếu có

    // Lấy dữ liệu creators
    ExampleService.getAllCreators()
      .then(data => setCreators(data)) // Cập nhật dữ liệu creators vào state
      .catch(err => setError(err.message)); // Cập nhật lỗi nếu có
  }, []); // Chạy effect chỉ 1 lần khi component được mount

  return (
    <div className="app-container">
      <BrowserRouter>
        <div className="content-container">
          {/* <Container>  */}
            <Routes>
              {/* Truyền dữ liệu vào trang ArtworksPage */}
              <Route
                path='/'
                element={<Artworks artworks={artworks} creators={creators} error={error} />}
              />
              <Route path='/not-sign-in' element={<NotSignIn />} />
              <Route path='/forum' element={<ForumPage/>} />
              <Route path='/forum-search' element={<ForumSearch/>} />
              
            </Routes>
          {/* </Container> */}
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
