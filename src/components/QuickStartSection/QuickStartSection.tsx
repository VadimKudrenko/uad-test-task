import React from 'react'
import './QuickStartSection.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import OptionCard from './OptionCard'
import RedirectButton from '../RedirectButton/RedirectButton';
import UsersReviewCarouselMd from './UsersReviewCarouselMd';
import UsersReviewCarouselSm from './UsersReviewCarouselSm';

export default function QuickStartSection() {
  return (
    <section className='quick-start'>
      <Container>
        <div className='quick-start__title-wrapper'>
          <h3 className='quick-start__title'>Find love with ease</h3>
        </div>
        <div className='quick-start__content--lg'>
            <Row>
              <Col md='3'>
                <OptionCard 
                  title='Create profile'
                  subTitle='Create your profile within few seconds with our easy sign-up steps. Don`t forget to add a photo!'
                  imageUrl='./img/QuickStartSection/Welcome.svg'
                />
              </Col>
              <Col md='3'>
                <OptionCard 
                  title='Confirm your profile'
                  subTitle='Check your mail and follow the link from a letter. Confirmed members get additional bonuses!'
                  imageUrl='./img/QuickStartSection/Hello.svg'
                />
              </Col>
              <Col md='3'>
                <OptionCard 
                  title='Start communicating'
                  subTitle='Explore our Gallery of Ladies and find a woman who matches your criteria using filters. Write her a letter or invite to video chat, and start your love story!'
                  imageUrl='./img/QuickStartSection/Social-Distancing.svg'
                />
              </Col>
              <Col md='3'>
                <OptionCard 
                  title='Find love'
                  subTitle='Communicate with your match and discover as much as possible about each other. Meet with your beloved and build serious relationship in real. '
                  imageUrl='./img/QuickStartSection/Couple.svg'
                />
              </Col>
            </Row>
        </div>

        <div className='quick-start__content--md'>
          <UsersReviewCarouselMd />
        </div>

        <div className='quick-start__content--sm'>
          <UsersReviewCarouselSm />
        </div>

        <div className='quick-start__redirect-btn-wrapper'>
          <RedirectButton className='redirect-btn' title='find love now' href='/'/>
        </div>
      </Container>
    </section>
  )
}
