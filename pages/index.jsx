import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import { clearUser } from '../store/store';
import image2 from '../pages/images/images2.svg';
import image1 from '../pages/images/images1.svg';
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#00B499" fill-opacity="1" d="M0,256L120,224C240,192,480,128,720,96C960,64,1200,64,1320,64L1440,64L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
      
      
      <div className={styles.divCol1}>
        <div className={styles.div1}>
          <div className={styles.logo}></div>
            <h1>Secure Fit</h1>
        </div>
        <div className={styles.div2}>
          <h3>"Secure Fit: Precision in every  <span>breath</span>."</h3>
        </div>
        <div className={styles.divCol2}>
          <Image className={styles.div1Image} src={image2} alt='stockImage1'/>  
        </div>
        <div className={styles.div3}>
          <div className={styles.leafButton}>
          <a className={styles.link} href='https://calendly.com/Securefit2024' target='_blank'>Schedule Fit Test</a>
          </div>
        </div>
      </div>

      <div className={styles.divCol3}>
        <div>
          <p>On-site fit testing.</p>
          <p>Located: 3rd floor Simulation/ Fit testing Room</p>
          <p> <span>$50</span> per fit test</p>
        </div>
        <dibv>
          <Image className={styles.div1Image} src={image1} alt='stockImage1'/>  
        </dibv>
      </div>
    </div>
  );
};

export default HomePage;
