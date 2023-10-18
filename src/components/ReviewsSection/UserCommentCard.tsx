import React from 'react'
import './ReviewsSection.css'

interface UserCommentCardProps {
  cardTitle: string;
  cardSubtitle: string;
  userPhotoUrl: string;
  userTitle: string;
  userSubtitle: string;
}

export default function UserCommentCard({cardTitle, cardSubtitle, userPhotoUrl, userTitle, userSubtitle}:UserCommentCardProps) {
  return (
    <div className='reviews__comment-card'>
      <div className='reviews__comment-card-review-wrapper'>
        <div className='reviews__comment-card-review'>
          <p className='reviews__comment-card-title'>{cardTitle}</p>
          <p className='reviews__comment-card-subtitle'>{cardSubtitle}</p>
        </div>
      </div>
      <div className='reviews__comment-card-user'>
        <div className='reviews__comment-card-user-photo-wrapper'>
          <img className='reviews__comment-card-user-photo' src={userPhotoUrl} alt="4" />
        </div>
        <p className='reviews__comment-card-title'>{userTitle}</p>
        <p className='reviews__comment-card-subtitle'>{userSubtitle}</p>
      </div>
    </div>
  )
}
