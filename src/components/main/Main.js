import React from 'react';
import './Main.scss';
import CanvasGradient from '../canvas-gradient/CanvasGradient';
import { ReactComponent as PhoneSvg } from '../../assets/phone.svg';

const Main = () => {
  return (
    <section className='section_top'>
      <div className='section_background-wrap'>
        <CanvasGradient />
      </div>
      <div className='section-container'>
        <div className='section-layout-container'>
          <div className='section-layout'>
            <div className='gradient-area'>
              <div className='gradient-title-area'>
                <div className='text text-under text-under-blended section-title-1'>
                  Payments infrastructure for the internet
                </div>
              </div>
            </div>
            <h2 className='section-title-2 subtitle'>
              Millions of companies of all sizes—from startups to Fortune
              500s—use Stripe’s software and APIs to accept payments, send
              payouts, and manage their businesses online.
            </h2>
          </div>
          <div className='section-layout__right'>
            <PhoneSvg />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
