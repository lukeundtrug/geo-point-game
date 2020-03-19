import React from 'react';

import logo from '../logo.svg';
import Image from './Image';

export interface Props {
  /** The path to the image */
  image: string;
  /** An alt tag to be shown to search engines */
  alt?: string;
}

const App: React.FC = () => {
  return (
    <header className="App-header">
      <Image image={logo} />
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  );
};

export default App;
