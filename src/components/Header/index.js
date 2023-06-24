import React, { useEffect } from 'react';

const Header = ({ spot }) => {
  return <h2 className='title'>{spot}</h2>;
};

export const SubTitle = ({ spot }) => {
  return <h3 className='subtitle card-measure'>{spot}</h3>;
};

export const BackwardNavigation = ({ subtitle }) => {
  useEffect(() => {
    document.title = `${subtitle} - App Store`;
  }, []);

  return (
    <header className='sticky depth panel flex justify-between items-center'>
      <h1 className='card-sub card-measure'>{subtitle}</h1>
    </header>
  );
};

export default Header;
