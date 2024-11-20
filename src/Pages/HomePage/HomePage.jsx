import React, { useState } from 'react';
import Hashtag from '../../Components/Hashtag/Hashtag';
import Header from '../../Components/Header/header'; // Import Header
import Sidebar from '../../Components/Sidebar/sidebar'; // Import Sidebar
import './ArtworksPage.css';

const ArtworksPage = ({ artworks }) => {
  const [selectedHashtag, setSelectedHashtag] = useState('');

  // Lọc các tác phẩm theo hashtag nếu có
  const filteredArtworks = selectedHashtag
    ? artworks.filter((a) => a.Artwork_tag.includes(selectedHashtag))
    : artworks;

  // Hàm xử lý lọc theo hashtag
  const handleFilter = (hashtag) => {
    setSelectedHashtag(hashtag); // Cập nhật selectedHashtag
  };

  return (
    <div className="my_container">
      {/* Sidebar */}
      <Sidebar />

      <div className="content">
        {/* Header */}
        <Header />

        {/* Nội dung chính */}
        <div className="list-artwork">
          {/* Hiển thị Hashtag */}
          <Hashtag onFilter={handleFilter} />

          {/* Hiển thị danh sách tác phẩm */}
          <div className="container_0">
            {filteredArtworks.map((a) => (
              <div
                className="card"
                key={a._id}
                style={{ width: '240px', height: '320px' }}
              >
                <div>
                  <img
                    className="card-img-top"
                    src={a.Artwork_image}
                    alt={a.Artwork_name}
                  />
                </div>
                <div className="card-body">
                  <div className="card-title truncated-text">
                    {a.Artwork_name}
                  </div>
                  <div>@{a.Creator_ID.Name}</div>
                </div>
                <div className="container_1">
                  <span className="badge bg-warning category">
                    {a.Category_ID.Category_name}
                  </span>
                  <div className="price">{a.Unit_price}đ</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtworksPage;

