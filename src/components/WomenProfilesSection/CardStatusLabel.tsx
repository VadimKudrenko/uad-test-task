import React from 'react'
interface CardStatusLabelProps {
  title: string;
  backgroundClass: string;
  titleClass: string;
}

export default function CardStatusLabel({title, backgroundClass, titleClass}: CardStatusLabelProps) {
  return (
    <div className={backgroundClass}>
      <p className={titleClass}>{title}</p>
    </div>
  )
}
