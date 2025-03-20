import React from 'react';

function Footer() {
  return (
    <footer className="bg-black text-white text-center w-full h-[45px]">
      <p className="text-sm py-3">
        &copy; {new Date().getFullYear()} Developer Anurag Yadav. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
