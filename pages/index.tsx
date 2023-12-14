import Image from 'next/image';
import { Inter } from 'next/font/google';
import Upload from '../components/Upload';
import SEO from '../components/SEO';
import Login from '../components/Login';
import Header from '../components/Header';
import EtsyIntegration from '../components/EtsyIntegration';
import OptimizeButton from '../components/OptimizeButton';
import axios from 'axios';

const inter = Inter({ subsets: ['latin'] });

interface HomeProps {
  productName: string;
  productDescription: string;
}

export default function Home({ productName, productDescription }: HomeProps) {
  return (
    <main
      className={`min-h-screen p-24 flex flex-col items-center justify-between ${inter.className}`}
    >
      <Header />
      <Upload />
      <SEO productName={productName} productDescription={productDescription} />
      <Login />
      <EtsyIntegration />
      <OptimizeButton />
    </main>
  );
}

export async function getStaticProps() {
  // Replace with your actual logic to fetch product name
  const productName = 'Your Actual Product Name';
  const productDescription = 'Your Actual Product Description';

  return {
    props: {
      productName,
      productDescription,
    },
  };
}