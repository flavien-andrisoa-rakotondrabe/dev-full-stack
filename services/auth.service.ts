import api from '@/axios/axios.instance';

const jwtService = async () => {
  try {
    const res = await api.get('/auth/jwt');
    return res.data;
  } catch (error) {
    return { error: `JWT VERIFICATION ERROR: ${error}` };
  }
};

const loginService = async (data: { email: string; password: string }) => {
  try {
    const res = await api.post('/auth/login', {
      email: data.email,
      password: data.password,
    });
    return res.data;
  } catch (error) {
    return { error: `LOGIN ERROR: ${error}` };
  }
};

const registerService = async (data: {
  pseudo: string;
  email: string;
  password: string;
}) => {
  try {
    const res = await api.post('/auth/register', {
      pseudo: data.pseudo,
      email: data.email,
      password: data.password,
    });
    return res.data;
  } catch (error) {
    return { error: `REGISTER ERROR: ${error}` };
  }
};

const logoutService = async () => {
  try {
    const res = await api.get('/auth/logout');
    return res.data;
  } catch (error) {
    return { error: `LOGOUT ERROR: ${error}` };
  }
};

export { jwtService, loginService, registerService, logoutService };
