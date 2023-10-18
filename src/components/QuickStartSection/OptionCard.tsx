import React from 'react'
import './QuickStartSection.css'

interface OptionCardProps {
  title: string;
  subTitle: string;
  imageUrl: string;
}

export default function OptionCard({title, subTitle, imageUrl}: OptionCardProps) {
  return (
    <div className='quick-start__option-card'>
      <div className='quick-start__option-card-photo-wrapper'>
        <img className='quick-start__option-card-photo' src={imageUrl} alt="" />
      </div>
      <p className='quick-start__option-card-title'>{title}</p>
      <p className='quick-start__option-card-subtitle'>{subTitle}</p>
    </div>
  )
}
