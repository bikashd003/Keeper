import React from 'react'
const time=new Date()


export default function Footer() {
  return (
    <footer><p>Copyright © {time.getFullYear()}</p></footer>
  )
}
