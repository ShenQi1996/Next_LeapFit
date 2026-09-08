import Image from 'next/image';
import logoOnDark from '../pages/images/logo-on-dark.png';

const BrandLogo = ({ className }) => (
  <Image
    className={className}
    src={logoOnDark}
    alt="Secure Fit LLC"
    quality={100}
  />
);

export default BrandLogo;
