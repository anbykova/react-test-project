import axios from 'axios';

const LoginService = {
  login: async ({ username, password }) => {
    const { data: response } = await axios.post(`http://erp.apptrix.ru/api/token/`, { username, password });
    localStorage.setItem('accessToken', response.access);
    localStorage.setItem('refreshToken', response.refresh);
  },
  refreshToken: async (history) => {
    try {
        const { data: response } = await axios.post(`http://erp.apptrix.ru/api/token/refresh/`, { refresh: localStorage.getItem('refreshToken')});
        localStorage.setItem('accessToken', response.access);
    } catch (e) {
        localStorage.removeItem('accessToken');
        history.push('/login');
    }
  },
};

export default LoginService;
