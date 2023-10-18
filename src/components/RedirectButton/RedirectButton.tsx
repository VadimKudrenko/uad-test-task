import React from 'react'
import './RedirectButton.css'

interface RedirectButtonProps {
  title: string;
  href?: string;
  className: string;
}

export default function RedirectButton({title, href, className}:RedirectButtonProps) {
  const redirectFunction = () => {
    // redirect to ...
  }
  
  return (
    // <button className='redirect-btn' onClick={e => redirectFunction()}>{title}</button>
    
    <div className='redirect-btn-wrapper'>
      <button className={className} onClick={e => redirectFunction()}>{title}</button>

      {/* <button className={className} value={href}>{title}</button> */}
    </div>
  )
}
