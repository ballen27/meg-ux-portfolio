

import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import './layout.css'
import resumePDF from '../images/MeganAllen_Resume2021.pdf'

function Header() {
  return (
    <footer style={styles.footer}>
      <div  style={styles.row}>
        <div style={styles.column}>
          <h2>Megan Allen</h2>
          <p>Experience Designer</p>
        </div>
        <div style={styles.column}>
          <div style={styles.bar}></div>
        </div>
        <div style={styles.column}>
          <h2>Connect</h2>
          <div style={styles.iconLinks}>
            <a href="https://www.linkedin.com/in/megan-thomas14/" target="_blank" rel="noreferrer">
              <StaticImage alt="Megan Allen Logo" width={40} src="../images/icon-linkedIn.png" />
            </a>
            <a href="https://instagram.com/megspics2.0" target="_blank" rel="noreferrer">
              <StaticImage alt="Megan Allen Logo" width={40} src="../images/icon-instagram.png" />
            </a>
            <a href="mailto:allen.megc@gmail.com" target="_blank" rel="noreferrer">
              <StaticImage alt="Megan Allen Logo" width={40} src="../images/icon-mail.png" />
            </a>
          </div>
        </div>
        <div style={styles.column}>
          <div style={styles.bar}></div>
        </div>
        <div style={styles.column}>
          <h2><a href={resumePDF} download="MeganAllen_Resume">Download Resume</a></h2>

        </div>
      </div>
      <div style={styles.row}>
        <div style={styles.column}>
          <div>
          © {new Date().getFullYear()} &middot; Built by
          <a href="https://www.bronsonzallen.com" style={{marginLeft: '5px'}}>Bronson Z Allen</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

const styles = {
  footer: {
    marginTop: `var(--space-5)`,
    fontSize: `var(--font-sm)`,
    width: '100%',
    height: '300px',
    backgroundColor: '#EEF7FA',
    padding: '53px'
  },
  row: {
    maxWidth: `var(--size-content)`,
    margin: `0 auto`,
    display: 'flex',
    padding: '0 40px',
    alignItems: 'center',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    flexBasis: '100%',
    alignItems: 'center',
  },
  bar: {
    width: '1px',
    backgroundColor: '#202020',
    height: '200px',
  },
  iconLinks: {
    width: '80%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  }

}

export default Header;