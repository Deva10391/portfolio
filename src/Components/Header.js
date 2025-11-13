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
            AI & Full-Stack Developer || Computer Vision Developer || Oncoming Researcher
          </h1>
          <div>
            <p>Having completed my Bachelor's degree in Computer Science and Engineering - I've applied my skills in development of multiple projects across Deep Learning and Full-stack Web Development. My work delivers solution to tasks carried out in simulated environments, healthcare applications, finance security, user interaction, and OCR processing.</p>
            <p>Driven with enthusiasm for applying research-based knowledge and noval idea development - I’ve consistently met definite objectives - both in terms of technical outcomes and personal growth.</p>
            <p>As a self-motivated achiever, I have authored multiple peer-reviewed conference papers, and book chapters throughout my journey.</p>
          </div>
          <Download />
        </div>
      </div>
    </header>
  )
}
