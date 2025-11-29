import React from 'react'
export default function Button({children, onClick, className='btn-primary', type='button'}) {
  return <button type={type} className={'btn '+className} onClick={onClick}>{children}</button>
}
