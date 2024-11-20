import React from "react";
import './sidebar.css'

import logo from '../Assets/Data/Logo.png'
import userAvatar from '../Assets/Data/user.png'

const Sidebar = () => {
    return (
        <div class="sidebar">
    <div class="logo">
        <img src={logo} alt="Artistry Logo"/>
    </div>

    <ul class="menu">
        <li><a href="#"><i class="fas fa-home"></i>
          &nbsp;  Trang chủ</a></li>
        <li><a href="#"><i class="fas fa-heart"></i> &nbsp; Tác phẩm</a></li>
        <li><a href="#"><i class="fas fa-users"></i> &nbsp;  Diễn đàn</a></li>
        <li><a href="#"><i class="fas fa-comments"></i> &nbsp; Trò chuyện</a></li>
        <li><a href="#"><i class="fas fa-book"></i> &nbsp; Về Artistry</a></li>
        <li><a href="#"><i class="fas fa-cog"></i> &nbsp; Cài đặt</a></li>
    </ul>

    <div class="user-info">
        <img src={userAvatar} alt="User Avatar"/>
        <p>Tên khách hàng</p>
        <span>Khách hàng</span>
    </div>
</div>


    )
}

export default Sidebar


