import React, { useRef } from 'react';
import type { NextPage } from 'next';
import Header from '@/components/header';
import Info from '@/components/info';
import Services from '@/components/services';
import Footer from '@/components/footer';
import Prepare from '@/components/prepare';
import Filter from '@/components/filter';
import Schedule from '@/components/schedule';
import Reviews from '@/components/reviews';
import Benefits from '@/components/benefits';
import SwitchLanguage from '@/components/switchLanguage';
import ReviewsTouch from '@/components/reviews/components/reviewsTouch';

const Index: NextPage = () => {
  const servicesRef = useRef<HTMLDivElement | null>(null);
  const scheduleRef = useRef<HTMLDivElement | null>(null);
  const footerRef = useRef<HTMLDivElement | null>(null);
  return (
    <>
      <SwitchLanguage />
      <Header
        servicesRef={servicesRef}
        scheduleRef={scheduleRef}
        footerRef={footerRef}
      />
      <Info />
      <div ref={servicesRef}>
        <Services />
      </div>
      <Benefits />
      <Filter />
      <div ref={scheduleRef}>
        <Schedule />
      </div>
      <Prepare />
      <Reviews />
      <div ref={footerRef}>
        <Footer />
      </div>
    </>
  );
};

export default Index;
