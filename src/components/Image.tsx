import React from 'react';

import logo from '../logo.svg';

export interface Props {
  /** The path to the image */
  image?: string;
  /** An alt tag to be shown to search engines */
  alt?: string;
}

const Image: React.FC<Props> = ({ image = logo, alt = '' }) => {
  return <img src={image} alt={alt} />;
};

export default Image;
