import React from 'react';

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      role='none'
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    />
  );
};

export default SamplePrevArrow;