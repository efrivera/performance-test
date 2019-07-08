import React from 'react';

/* eslint-disable react/prop-types */
const Image = ({
  alt,
  imageUrl,
  sizes,
  ...rest
}) => {
  const [size] = sizes;
  const odnUrl = `${imageUrl}?odnWidth=${size}`;

  return (
    <img src={odnUrl} alt={alt} {...rest} />
  );
};

export default Image;
