import React from 'react';

/* eslint-disable react/prop-types */
const Image = ({
  alt,
  imageUrl,
  sizes,
  className,
  ...rest
}) => {
  const odnUrl = `${imageUrl}?odnWidth=${sizes[0]}`;

  return (
    <img className={className} src={odnUrl} alt={alt} {...rest} />
  );
};

export default Image;
