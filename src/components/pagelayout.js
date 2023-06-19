import React from 'react'

const PageLayOut = ({header, children, footer}) => {
  return (
    <div>
      <h1>{header}</h1>
      <h6>{children}</h6>
      <h6>{footer}</h6>
    </div>
  )
}

export default PageLayOut
