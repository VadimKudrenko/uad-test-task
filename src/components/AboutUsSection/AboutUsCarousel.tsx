import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import AboutUsOptionCard from './AboutUsOptionCard';

function AboutUsCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex:any) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} controls={true} indicators={false} onSelect={handleSelect} touch={true} variant={'dark'}>
      <Carousel.Item>
        <AboutUsOptionCard title='+250' subtitle='new members' smallerSubtitle='every month'/>
        
      </Carousel.Item>
      <Carousel.Item>
        <AboutUsOptionCard title='17+' subtitle='years' smallerSubtitle=' in dating business!'/>
        
      </Carousel.Item>
      <Carousel.Item>
        <AboutUsOptionCard title='100%' subtitle='verified members' smallerSubtitle='with our Anti-scam policy!'/>
        
      </Carousel.Item>
      <Carousel.Item>
        <AboutUsOptionCard title='Free' subtitle='letters and chat' smallerSubtitle='let ladies know more about you'/>
        
      </Carousel.Item>
    </Carousel>
  );
}

export default AboutUsCarousel;

