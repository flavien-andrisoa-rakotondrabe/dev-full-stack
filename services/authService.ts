import api from '@/axios/axios.instance';

const jwtService = async (): Promise<{
  user?: { id: number };
  error?: string;
  notAuthenticated?: boolean;
}> => {
  try {
    const res = await api.get('/auth/jwt');
    return res.data;
  } catch (error: any) {
    return { error: error.message || 'Erreur inconnue' };
  }
};

const loginService = async (data: {
  email: string;
  password: string;
}): Promise<{
  user?: { id: number };
  error?: string;
  userNotFound?: boolean;
  invalidPassword?: boolean;
}> => {
  try {
    const res = await api.post('/auth/login', {
      email: data.email,
      password: data.password,
    });
    return res.data;
  } catch (error: any) {
    return { error: error.message || 'Erreur inconnue' };
  }
};

const registerService = async (data: {
  pseudo: string;
  email: string;
  password: string;
}): Promise<{
  user?: { id: number };
  error?: string;
  alreadyExist?: boolean;
}> => {
  try {
    const res = await api.post('/auth/register', {
      pseudo: data.pseudo,
      email: data.email,
      password: data.password,
    });
    return res.data;
  } catch (error: any) {
    return { error: error.message || 'Erreur inconnue' };
  }
};

const logoutService = async (): Promise<{
  error?: string;
  loggedOut?: boolean;
}> => {
  try {
    const res = await api.get('/auth/logout');
    return res.data;
  } catch (error: any) {
    return { error: error.message || 'Erreur inconnue' };
  }
};

export { jwtService, loginService, registerService, logoutService };
