import { create } from 'axios';

const axiosInstance = create({
  baseURL: 'http://127.0.0.1:3333/api/v1',
    headers: {
      'Authorization': 'Bearer 2d662d4d3b86df2697c87a5a88764627A+CvuYJLmEHSWmE1cG/q3p8b47zf/2jAD8udUUzpQy6ewahZEzE1b0ZQnw9q06is'
    }
});

export default axiosInstance;