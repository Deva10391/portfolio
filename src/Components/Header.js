import React from 'react'
import Download from './Download';

export default function Header() {
  return (
    <header className="container header active" id="home">
      <div className="header-content">
        <div className="left-header">
          <div className="h-shape"></div>
          <div className="image">
            <img src="img/hero.png" alt="" />
          </div>
        </div>
        <div className="right-header">
          <h1 className="name">
            Hello, I'm <span>Devashish.</span>
          </h1><h1>
            A Web Developer
          </h1>
          <p>
          I believe organized efforts result from coordinated specialized knowledge in planned arrangements. I look forward to applying my MERN stack skills to contribute to these organized efforts.
          </p>
          <Download />
        </div>
      </div>
    </header>
  )
}
