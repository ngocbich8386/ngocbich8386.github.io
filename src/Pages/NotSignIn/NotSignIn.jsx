import React, { useState } from "react";
import "./NotSignIn.css";
import logo from "../../Components/Assets/Data/Logo.png";
import banner from "../../Components/Assets/Data/banner.jpg";
import banner1 from "../../Components/Assets/Data/banner_1.jpg";
import artwork1 from "../../Components/Assets/Data/artwork1.jpg";
import artwork2 from "../../Components/Assets/Data/artwork2.jpg";
import artwork3 from "../../Components/Assets/Data/artwork3.jpg";

const NotSignIn = () => {
  return (
    // Import hình ảnh
    <>
      <header className="header">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="auth-buttons">
          <button className="login-button">Đăng nhập</button>
          <button className="signup-button">Đăng ký</button>
        </div>
      </header>

      <section className="about-section">
        <div className="title" style={{ backgroundImage: `url(${banner})` }}>
          <h1>ARTISTRY</h1>
          <h2>Unleash Your Creative Essence</h2>
        </div>

        <div className="about-section_intro">
          <h3>VỀ CHÚNG TÔI</h3>
          <p>
            <b>Artistry</b> là một nền tảng trực tuyến sáng tạo dành riêng cho
            những nghệ sĩ yêu thích tranh ảnh và người hâm mộ nghệ thuật. Tại
            Artistry, các nghệ sĩ không chỉ có cơ hội trưng bày các tác phẩm của
            mình mà còn có thể kết nối trực tiếp với những người yêu nghệ thuật
            từ khắp nơi trên thế giới.
          </p>
        </div>

        <div
          className="features"
          style={{ backgroundImage: `url(${banner1})` }}
        >
          <div className="feature">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-heart"
              viewBox="0 0 16 16"
            >
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
            </svg>
            <p>
              <b>Khám phá</b> và <b>sở hữu</b> các tác phẩm nghệ thuật theo yêu
              cầu
            </p>
          </div>
          <div className="feature">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-people"
              viewBox="0 0 16 16"
            >
              <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
            </svg>
            <p>
              Trở thành <b>thành viên</b> của cộng đồng yêu nghệ thuật sáng tạo
            </p>
          </div>
          <div className="feature">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-chat-square-heart"
              viewBox="0 0 16 16"
            >
              <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
              <path d="M8 3.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132" />
            </svg>
            <p>
              <b>Kết nối</b> trực tiếp cùng các họa sĩ và người sáng tạo tài
              năng
            </p>
          </div>
        </div>
      </section>

      <section className="featured-artworks">
        <h3>TÁC PHẨM NỔI BẬT</h3>
        <div className="artworks-grid">
          <img src={artwork1} alt="Artwork 1" />
          <img src={artwork2} alt="Artwork 2" />
          <img src={artwork3} alt="Artwork 3" />
        </div>
      </section>
    </>
  );
};

export default NotSignIn;
