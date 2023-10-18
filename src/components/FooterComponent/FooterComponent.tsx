import {useState} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './FooterComponent.css';

export default function FooterComponent() {
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const [moreInfoBtnClassName, setMoreInfoBtnClassName] = useState('footer__description-more-info-btn--sm');
  const [moreInfoRowClassName, setMoreInfoRowClassName] = useState('footer_description-wrapper--sm');

  const showMoreInfoBtnHandler = () => {
    if(showMoreInfo) setShowMoreInfo(false)
    else {
      setShowMoreInfo(true);
      setMoreInfoRowClassName(moreInfoRowClassName + '-more-info');
      setMoreInfoBtnClassName(moreInfoBtnClassName + '-hidden');
    }
  }

  
  return (
    <footer className='footer-component'>
        <Container>
          <div className='footer__title-wrapper'>
            <h3 className='footer__title'>Chat With Ukrainian Single Women</h3>
          </div>
          <Row className={moreInfoRowClassName}>
            <Col sm="6">
              <div className='footer__description-wrapper'>
                <div className='footer__description'>
                  <p className='footer__description-title'>Premier Ukraine Dating: Dive into the world of Ukrainian dating with our cutting-edge platform, designed to help you find your ideal match effortlessly.</p>
                </div>
              </div>
              <div className='footer__description-wrapper'>
                <div className='footer__description'>
                  <p className='footer__description-title'>Connect Instantly: Engage in lively chats and exchanges with Ukraine women through our user-friendly messaging system. Explore profiles, strike up conversations, and connect on a deeper level with Ukrainian single ladies.</p>
                </div>
              </div>
              <div className='footer__description-wrapper'>
                <div className='footer__description'>
                  <p className='footer__description-title'>Eastern Europe's Finest Dating: Immerse yourself in the rich cultural tapestry of Eastern Europe. Meet Ukrainian singles and ignite a spark with someone special who understands your passions and aspirations.</p>
                </div>
              </div>
              <div className='footer__description-wrapper'>
                <div className='footer__description'>
                  <p className='footer__description-title'>Ukraine's Gems: Our platform boasts a stunning array of Ukrainian singles, including the mesmerizing 'Kyiv Queens' and the charming 'Odessa Beauties.' Explore their profiles and find your perfect match among Ukrainian women personals.</p>
                </div>
              </div>
            </Col>

            <Col sm="6">
              <div className='footer__description-wrapper'>
                <div className='footer__description'>
                  <p className='footer__description-title'>Love Knows No Boundaries: Whether you're in search of hot Ukraine women or a Ukraine single woman looking for a husband, our diverse community caters to various preferences and aspirations.</p>
                </div>
              </div>
              <div className='footer__description-wrapper'>
                <div className='footer__description'>
                  <p className='footer__description-title'>Authenticity Matters: Say goodbye to worries about fake profiles. Our dedicated team ensures a safe and secure environment, so you can focus on forging genuine connections.</p>
                </div>
              </div>
              <div className='footer__description-wrapper'>
                <div className='footer__description'>
                  <p className='footer__description-title'>Join us today and unlock a world of dating possibilities!</p>
                </div>
              </div>
              <div className='footer__description-wrapper'>
                <div className='footer__description'>
                  <p className='footer__description-title'>Experience the magic of Ukraine dating sites, where every click brings you closer to a heartfelt connection. Whether you're enchanted by the elegance of Slavic beauties, intrigued by Kiev dating prospects, or seeking the companionship of single women in Odessa, we're here to make your dreams a reality.</p>
                </div>
              </div>
              <div className='footer__description-wrapper'>
                <div className='footer__description'>
                  <p className='footer__description-title'>Sign up now and embark on an unforgettable journey to discover your Ukrainian soulmate!"</p>
                </div>
              </div>
            </Col>
          </Row>
          <div className='footer__description-more-info-btn-wrapper'>
            <button onClick={e => showMoreInfoBtnHandler()} className={moreInfoBtnClassName}>Read more</button>
          </div>
        </Container>
      </footer>
  )
}
