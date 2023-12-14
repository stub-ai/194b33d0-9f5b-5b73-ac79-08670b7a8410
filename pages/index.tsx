import Image from 'next/image';
import { Inter } from 'next/font/google';
import Upload from '../components/Upload';
import SEO from '../components/SEO';
import Login from '../components/Login';
import Header from '../components/Header';
import EtsyIntegration from '../components/EtsyIntegration';
import OptimizeButton from '../components/OptimizeButton'; // Import OptimizeButton

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const productName = 'Your Product Name'; // Replace this with actual product name

  return (
    <main
      className={`flex items-center justify-between min-h-screen p-24 flex-col ${inter.className}`}
    >
      <Header />
      <Upload />
      <SEO productName={productName} />
      <Login />
      <EtsyIntegration />
      <OptimizeButton /> {/* Use OptimizeButton */}
    </main>
  );
}