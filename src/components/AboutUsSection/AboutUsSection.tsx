import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AboutUsOptionCard from './AboutUsOptionCard';
import './AboutUsSection.css'
import AboutUsCarousel from './AboutUsCarousel';

export default function AboutUsSection() {
  return (
    <section className='about-us'>
      <Container>
        <div className='about-us--lg'>
          <div className='about-us__content'>
            <div className='about-us__option-card-wrapper'>
              <Row>
                <Col md='3'>
                  <AboutUsOptionCard title='+250' subtitle='new members' smallerSubtitle='every month'/>
                </Col>
                <Col md='3'>
                  <AboutUsOptionCard title='17+' subtitle='years' smallerSubtitle=' in dating business!'/>
                </Col>
                <Col md='3'>
                  <AboutUsOptionCard title='100%' subtitle='verified members' smallerSubtitle='with our Anti-scam policy!'/>
                </Col>
                <Col md='3'>
                  <AboutUsOptionCard title='Free' subtitle='letters and chat' smallerSubtitle='let ladies know more about you'/>
                </Col>
              </Row>
            </div>
          </div>
        </div>

        <div className='about-us--sm'>
          <AboutUsCarousel />
        </div>
      </Container>
    </section>
  )
}
