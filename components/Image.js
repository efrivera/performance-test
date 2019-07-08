import React, { useContext } from 'react';
import DeviceContext from '../contexts/DeviceContext';

export const getSize = ({
  sizes,
  isMobile,
  isTablet,
}) => {
  let finalSize;

  if (isMobile) {
    [finalSize] = sizes;
  }

  if (isMobile && isTablet) {
    finalSize = sizes[1] || sizes[0];
  }

  if (!isMobile) {
    finalSize = sizes[2] || sizes[1] || sizes[0];
  }

  return finalSize;
};

/* eslint-disable react/prop-types */
const Image = ({
  alt,
  imageUrl,
  sizes,
  ...rest
}) => {
  const {
    isMobile,
    isTablet,
  } = useContext(DeviceContext);
  console.log('isMobile:', isMobile, 'isTablet:', isTablet);
  const size = getSize({
    sizes,
    isMobile,
    isTablet,
  });
  const odnUrl = `${imageUrl}?odnWidth=${size}`;

  return (
    <img src={odnUrl} alt={alt} {...rest} />
  );
};

export default Image;
