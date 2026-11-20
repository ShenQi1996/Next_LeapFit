import Image from 'next/image';
import logoOnDark from '../assets/logo-on-dark.png';

const BrandLogo = ({ className, alt = 'Secure Fit LLC' }) => (
  <Image
    className={className}
    src={logoOnDark}
    alt={alt}
    quality={100}
  />
);

export default BrandLogo;
