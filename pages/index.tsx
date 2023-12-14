import Image from 'next/image';
import { Inter } from 'next/font/google';
import Upload from '../components/Upload';
import SEO from '../components/SEO';
import Login from '../components/Login';
import Header from '../components/Header';
import EtsyIntegration from '../components/EtsyIntegration';
import OptimizeButton from '../components/OptimizeButton';

const inter = Inter({ subsets: ['latin'] });

interface HomeProps {
  productName: string;
}

export default function Home({ productName }: HomeProps) {
  return (
    <main
      className={`min-h-screen p-24 flex flex-col items-center justify-between ${inter.className}`} // Corrected order of Tailwind CSS classnames
    >
      <Header />
      <Upload />
      <SEO productName={productName} />
      <Login />
      <EtsyIntegration />
      <OptimizeButton />
    </main>
  );
}

export async function getStaticProps() {
  // Replace this with your actual logic to fetch product name
  const productName = 'Your Product Name';

  return {
    props: {
      productName,
    },
  };
}