// import axios from 'axios';

// class ExampleService {
//   constructor() {
//     this.myAPI = 'http://localhost:3000';
//   }

//   // Phương thức lấy tất cả tác phẩm nghệ thuật
//   getAllArtworks() {
//     return axios
//       .get(`${this.myAPI}/artworks`) // Sử dụng template literal với dấu nháy đơn hoặc kép
//       .then(response => response.data);
//   }

//   // Phương thức lấy tất cả người sáng tạo
//   getAllCreators() {
//     return axios
//       .get(`${this.myAPI}/creators`) // Sử dụng template literal với dấu nháy đơn hoặc kép
//       .then(response => response.data);
//   }
// }

// export default new ExampleService();


import axios from 'axios';

class ExampleService {
  myAPI = 'http://localhost:3000';

  getAllArtworks() {
    return axios.get(`${this.myAPI}/artworks`).then(response => response.data);
  }

  getAllCreators() {
    return axios.get(`${this.myAPI}/creators`).then(response => response.data);
  }
}

const exampleServiceInstance = new ExampleService();  // Gán vào biến

export default exampleServiceInstance;  // Export biến instance
