import { useEffect } from 'react';
import { useRouter } from 'next/router';

const SampleEcardRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace('/#sample-ecard');
  }, [router]);

  return null;
};

export default SampleEcardRedirect;
