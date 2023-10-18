import React from 'react'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './ReviewsSection.css'
import UserCommentCard from './UserCommentCard'
import UsersReviewCarousel from './UsersReviewCarousel'
import RedirectButton from '../RedirectButton/RedirectButton';


export default function ReviewsSection() {
  return (
    <section className='reviews-section'>
      <div className='reviews__title-wrapper'>
        <h3 className='reviews__title'>What people say about UaBrand</h3>
      </div>
      <Container>
        <div className='reviews__content--lg'>
          <Row>
            <Col md='3'>
              <UserCommentCard 
                cardTitle='Very useful system' 
                cardSubtitle='UaBrand has created very useful system where it’s possible to learn many details and character traits of any woman of interest. This helps in the search process so you have a sense of what kind of lady she is before contact. UaBrand seem to have an endless supply of beautiful women making it easier to take your time to find the right one for your personality.h' 
                userPhotoUrl='./img/ReviewsSection/user-photo-1.png' 
                userTitle='Cory from United States' 
                userSubtitle='7 April 2023'
              />
            </Col>
            <Col md='3'>
              <UserCommentCard 
                cardTitle='Support and services' 
                cardSubtitle='I would like to thank you for all your support and services in 2022, you have been very patient and understanding with translating my letters and video chats.
                You have many beautiful ladies here on your website but I am so happy to have met my lady who has really melted my heart, I just hope that she likes me as much as I like her.' 
                userPhotoUrl='./img/ReviewsSection/user-photo-2.png' 
                userTitle='Matt from United Kingdom' 
                userSubtitle='4 January 2023'
              />
            </Col>
            <Col md='3'>
              <UserCommentCard 
                cardTitle='Very useful system' 
                cardSubtitle='Hi guys! I am writing this, to let you know with the help of UaBrand I got to meet amazing my lady. Me and my lady are very excited for our future.
                I highly recommend UaBrand, their service is perfect, the price structure is good, you know exactly what it costs.
                All the best guys in your search.' 
                userPhotoUrl='./img/ReviewsSection/user-photo-3.png' 
                userTitle='Des from Australia' 
                userSubtitle='3 January 2023'
              />
            </Col>
            <Col md='3'>
              <UserCommentCard 
                cardTitle='Very useful system' 
                cardSubtitle='I am very satisfied with the service! I helped us both a lot to facilitate the first contact and to exchange without barriers.
                I can wholeheartedly recommend UaBrand service. As for My Lady herself, I can only say that she is my lifelong dream and I hope that we will grow together step by step into a good and stable relationship.
                Thank you the whole team.' 
                userPhotoUrl='./img/ReviewsSection/user-photo-4.png' 
                userTitle='Des from Australia' 
                userSubtitle='21 February 2023'
              />
            </Col>
          </Row>
        </div>

        <div className='reviews__content--md'>
          <Row>
            <Col md='6'>
              <UserCommentCard 
                cardTitle='Very useful system' 
                cardSubtitle='UaBrand has created very useful system where it’s possible to learn many details and character traits of any woman of interest. This helps in the search process so you have a sense of what kind of lady she is before contact. UaBrand seem to have an endless supply of beautiful women making it easier to take your time to find the right one for your personality.h' 
                userPhotoUrl='./img/ReviewsSection/user-photo-1.png' 
                userTitle='Cory from United States' 
                userSubtitle='7 April 2023'
              />
            </Col>
            <Col md='6'> 
              <UserCommentCard 
                cardTitle='Support and services' 
                cardSubtitle='I would like to thank you for all your support and services in 2022, you have been very patient and understanding with translating my letters and video chats.
                You have many beautiful ladies here on your website but I am so happy to have met my lady who has really melted my heart, I just hope that she likes me as much as I like her.' 
                userPhotoUrl='./img/ReviewsSection/user-photo-2.png' 
                userTitle='Matt from United Kingdom' 
                userSubtitle='4 January 2023'
              />
            </Col>
          </Row>
        </div>

        <div className='reviews__content--sm reviews__content--sm-carousel'>
          <UsersReviewCarousel />
        </div>

        <div className='reviews__more-btn-wrapper'>
          <RedirectButton className='redirect-btn' title='more testimonial' href='/'/>
        </div>
      </Container>
    </section>
  )
}
