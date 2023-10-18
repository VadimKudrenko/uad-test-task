import React from 'react'

interface AboutUsOptionCardProps {
  title: string;
  subtitle: string;
  smallerSubtitle: string;
}

export default function AboutUsOptionCard({title, subtitle, smallerSubtitle}:AboutUsOptionCardProps) {
  return (
    <div className='about-us__option-card'>
      <h3 className='about-us__option-card-title'>{title}</h3>
      <p className='about-us__option-card-subtitle'>{subtitle}</p>
      <p className='about-us__option-card-subtitle--smaller'>{smallerSubtitle}</p>
    </div>
  )
}
