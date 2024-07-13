import React from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

const withAuth = (WrappedComponent) => {
  return (props) => {
    const user = useSelector((state) => state.user);
    const router = useRouter();

    React.useEffect(() => {
      if (!user) {
        router.push('/login');
      }
    }, [user]);
    return user ? <WrappedComponent {...props} /> : null;
  };
};

export default withAuth;
