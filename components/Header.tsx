import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-500 text-white p-5 w-full flex items-center justify-between">
      <h1 className="font-bold text-2xl">Listify</h1>
      <nav>
        <ul className="flex items-center space-x-4">
          <li><Link href="/"><a className="hover:text-gray-300">Home</a></Link></li>
          <li><Link href="/about"><a className="hover:text-gray-300">About</a></Link></li>
          <li><Link href="/contact"><a className="hover:text-gray-300">Contact</a></Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;