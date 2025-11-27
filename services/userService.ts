import api from '@/axios/axios.instance';

import { UserInterface } from '@/interfaces/user.interface';

const getUserService = async (): Promise<{
  user?: UserInterface;
  error?: string;
  userNotFound?: boolean;
}> => {
  try {
    const res = await api.get('/user');
    return res.data;
  } catch (error: any) {
    return { error: error.message || 'Erreur inconnue' };
  }
};

export { getUserService };
