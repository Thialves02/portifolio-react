import React from 'react'
import './Button.css'

export default function Button({children,className,component:Component,...restProps}) {
  return (
    <Component className={`button ${className}`} {...restProps}>
      {children}
    </Component>
  )
}

Button.defaultProps = {
  component:'a',
  className:''
}