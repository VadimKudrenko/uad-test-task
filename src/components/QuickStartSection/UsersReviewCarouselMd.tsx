import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import OptionCard from './OptionCard'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function UsersReviewCarouselMd() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex:any) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} controls={true} onSelect={handleSelect} indicators={false} touch={true} interval={null}>
      <Carousel.Item>
        <Container>
          <Row>
            <Col md='6'>
              <OptionCard 
              title='Create profile'
              subTitle='Create your profile within few seconds with our easy sign-up steps. Don`t forget to add a photo!'
              imageUrl='./img/QuickStartSection/Welcome.svg'
              />
            </Col>
            <Col md='6'>
              <OptionCard 
                title='Confirm your profile'
                subTitle='Check your mail and follow the link from a letter. Confirmed members get additional bonuses!'
                imageUrl='./img/QuickStartSection/Hello.svg'
              />  
            </Col>
          </Row>
        </Container>
      </Carousel.Item>
      <Carousel.Item>
        <Container>
          <Row>
            <Col md='6'>
              <OptionCard 
                title='Start communicating'
                subTitle='Explore our Gallery of Ladies and find a woman who matches your criteria using filters. Write her a letter or invite to video chat, and start your love story!'
                imageUrl='./img/QuickStartSection/Social-Distancing.svg'
              />
            </Col>
            <Col md='6'>
              <OptionCard 
                title='Find love'
                subTitle='Communicate with your match and discover as much as possible about each other. Meet with your beloved and build serious relationship in real. '
                imageUrl='./img/QuickStartSection/Couple.svg'
              />
            </Col>
          </Row>
        </Container>
      </Carousel.Item>
    </Carousel>
  );
}

export default UsersReviewCarouselMd;