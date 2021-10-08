import React from 'react';
import './Main.scss';
import CanvasGradient from '../canvas-gradient/CanvasGradient';

const Main = () => {
  return (
    <section class='section_top'>
      <div class='section-container'>
        <div class='section-layout-container container-medium with-padding'>
          <div class='section-layout'>
            <div class='gradient-area'>
              <div class='gradient-title-area'>
                <h1 class='text text-above section-title-1'>
                  Payments infrastructure for the internet
                </h1>
                <div class='section_background-wrap'>
                  <CanvasGradient />
                </div>
                <div class='text text-under text-under-blended section-title-1'>
                  Payments infrastructure for the internet
                </div>
                <div class='text text-under text-under-overlay section-title-1'>
                  Payments infrastructure for the internet
                </div>
              </div>
            </div>
            <h2 class='section-title-2 subtitle'>
              Learn how to create the tilted gradient effect on Stripe's new
              website.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
