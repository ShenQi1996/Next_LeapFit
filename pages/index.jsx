import React from 'react';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { clearUser } from '../store/store';


import styles from "./style/index.module.scss";


const HomePage = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(clearUser());
  };



  
  //console.log(useSelector((state) => state))

  return (
    <div className={styles.Homepage}>
      {/* {user ? (
        <div>
          <p>Hello, {user.username}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <Link href="/login">
          Login
        </Link>
      )}
      <Link href="/about">
        About Us
      </Link>
      <Link href="/create-user">
        Create User
      </Link> */}
      <div className={styles.div1}>
        <div className={styles.logo}> </div>
      </div>
      <div className={styles.div2}>
        <h3>"Elevating standards, one <span>leap</span> at a time"</h3>
      </div>
      <div className={styles.div3}>
        <div className={styles.leaf}></div>
        <div className={styles.leafButton}>
         <a className={styles.link} href='https://calendly.com/leapfit2024' target='_blank'>Schedule Fit Test</a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
