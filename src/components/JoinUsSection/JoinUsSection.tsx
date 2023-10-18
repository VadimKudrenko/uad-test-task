import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import './JoinUsSection.css'

export default function JoinUsSection() {
  return (
    <section className='join-us'>
      <Container>
        <div className='join-us__title-wrapper'>
          <h3 className='join-us__title'>Join for free and get the opportunity</h3>
        </div>
        <Row>
          <Col sm='4'>
            <div className='join-us__option-wrapper'>
              <p className='join-us__option-title'>
                1000+
              </p>
              <p className='join-us__option-subtitle'>
                verified profiles
              </p>
            </div>
          </Col>
          <Col sm='4'>
          <div className='join-us__option-wrapper'>
              <p className='join-us__option-title'>
                Free
              </p>
              <p className='join-us__option-subtitle'>
                bonuses to start communicating
              </p>
            </div>
          </Col>
          <Col sm='4'>
          <div className='join-us__option-wrapper'>
              <p className='join-us__option-title'>
                24/7
              </p>
              <p className='join-us__option-subtitle'>
                friendly support
              </p>
            </div>
          </Col>
        </Row>
{/* default state*/}
        <div className='join-us__registration-form-wrapper'>
          <div className='join-us__registration-form--background-block'>
            <div className='join-us__registration-form'>
              <RegistrationForm />
            </div>
          </div>
        </div>
{/* for max-width 320px */}
      </Container>
        <div className='join-us__registration-form-wrapper--sm'>
          <RegistrationForm />
        </div>
    </section>
  )
}
