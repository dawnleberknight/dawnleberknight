import React from 'react'

export default function ExternalLink(props) {
  const { children, href, spaceBefore = true } = props
  return (
    <>
      {spaceBefore && <span> </span>}
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    </>
  )
}
