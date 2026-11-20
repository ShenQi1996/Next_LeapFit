import Link from 'next/link';
import ExternalLink from './ExternalLink';

const CtaLink = ({ href, external, className, onClick, children, ...props }) => {
  if (external) {
    return (
      <ExternalLink className={className} href={href} onClick={onClick} {...props}>
        {children}
      </ExternalLink>
    );
  }

  if (href.startsWith('#') || href.startsWith('/#')) {
    return (
      <a className={className} href={href} onClick={onClick} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link className={className} href={href} onClick={onClick} {...props}>
      {children}
    </Link>
  );
};

export default CtaLink;
