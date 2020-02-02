import { create } from 'axios';

const axiosInstance = create({
  baseURL: 'http://127.0.0.1:3333/api/v1',
    headers: {
      'Authorization': 'Bearer b32c332c94be77bd8ae4203670e19289TLExEPR3N3LCPvIyFDq3Sz8wCQa6BEThr+0huwTcWsfTCoKObRn5SBf9iNop+ZN0'
    }
});

export default axiosInstance;