'use client';

import Login from '../auth/Login';
import Register from '../auth/Register';

import { useState } from 'react';
import { authOptions } from '@/lib/options';

const LandingComponent = () => {
  const [actualAuthOption, setActualAuthOption] = useState(authOptions[0]);

  return (
    <div className="w-full h-screen flex justify-center items-center">
      {actualAuthOption === authOptions[1] ? (
        <Register setActualAuthOption={setActualAuthOption} />
      ) : (
        <Login setActualAuthOption={setActualAuthOption} />
      )}
    </div>
  );
};

export default LandingComponent;
