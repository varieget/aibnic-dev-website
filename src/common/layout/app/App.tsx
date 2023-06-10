import './styles/App.scss';

import React from 'react';
import classNames from 'classnames';

import Header from '../header/Header';
import Footer from '../footer/Footer';

interface Props {
  children: React.ReactNode;
}

function App({ children }: Props) {
  return (
    <>
      <Header />
      <div className={classNames('main', 'app')}>{children}</div>
      <Footer />
    </>
  );
}

export default App;
