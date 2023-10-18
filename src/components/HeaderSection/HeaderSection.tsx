import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RedirectButton from '../RedirectButton/RedirectButton';
import './HeaderSection.css'
import RegistrationForm from '../RegistrationForm/RegistrationForm';

export default function HeaderSection() {
  return (
    <header className='header-section'>
      <Container>
        <Row>
          <Col md='8'>
            <div className='header__content-wrapper'>
              <div className='header__title-wrapper'>
                <h1 className='header__title'>Dating Ukrainian Single Ladies</h1>
                <p className='header__subtitle'>Join for free and start chatting</p>
                <p className='header__subtitle'>More than a thousand single women are ready for a serious relationship and are waiting for your message</p>
              </div>
              <div className='header__title-counter-wrapper'>
                <p className='header__title header__counter-title'>+2500</p>
                <p className='header__subtitle header__counter-subtitle'>Happy couples</p>
              </div>
              <div className='header__redirect-btn-wrapper'>
                <RedirectButton className='redirect-btn--large' title='view profiles' href='/'/>
              </div>
            </div>
          </Col>

          <Col md='4'>
            <div className="header__registration-form-wrapper">
              <RegistrationForm />
            </div>
          </Col>

        </Row>
      </Container>

        <div className='header__bar--sm'>
          <div className='header__bar-title-wrapper'>
            <h2 className='header__bar-title'> <span className='header__bar-title--red'>Ua</span>Dreams</h2>
          </div>
          <div className='header__bar-redirect-btn-wrapper'>
            <RedirectButton className='redirect-btn--header-bar' title='sign up' href='/'/>
          </div>
        </div>
        
    </header>
  )
}
