import React from 'react';

function Footer() {
  const year = new Date().getFullYear(); // Gets the current year

  return (
    <footer className="bg-black text-white text-center py-4 w-full bottom-0 left-0">
    <p className="text-sm">
      &copy; {new Date().getFullYear()} Developer Anurag Yadav. All rights reserved.
    </p>
  </footer>
  );
}

export default Footer;
