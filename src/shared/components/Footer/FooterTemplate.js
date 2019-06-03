import React from 'react'
import './FooterTemplate.css'
import { Container } from 'reactstrap'

const FooterTemplate = () => (
  <footer className="footer">
    <Container>
      <div className="d-flex flex-column flex-md-row justify-content-between">
        <section className="">
          <h3>Persona Webapp</h3>
          <p>
            This is a React project to provide a front-end solution for
            sls-persona-webapp.
          </p>
          <a
            href="https://github.com/ronarvaez/persona-webapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fork Me
          </a>
        </section>
        <section>
          <h4>Links</h4>
          <ul>
            <li>Documentation</li>
            <li>Trello</li>
            <li>Issues</li>
          </ul>
        </section>
        <section>
          <h4>Contributors</h4>
          <ul>
            <li>Rodrigo Narvaez</li>
          </ul>
        </section>
      </div>
    </Container>
  </footer>
)

export default FooterTemplate
