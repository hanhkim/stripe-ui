import React, { useEffect } from 'react';
import Gradient from './miniGl';
import './CanvasGradient.scss';

const CanvasGradient = () => {
  useEffect(() => {
    const gradient = new Gradient();
    gradient.initGradient('#gradient-canvas');
  }, []);
  return (
    <canvas id='gradient-canvas' data-js-darken-top data-transition-in></canvas>
  );
};

export default CanvasGradient;
