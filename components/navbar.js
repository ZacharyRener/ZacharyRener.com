import globals from "../styles/Global.module.css";
import styles from "../styles/Navbar.module.css";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {

  const [ scrolled, setScrolled ] = useState( "" );
  const [ mobileMenuClass, setMobileMenuClass ] = useState( "" );

  useEffect( () => {
    window.addEventListener( "scroll", () => {
      if ( window.scrollY > 0 ) {
        setScrolled( "scrolled" );
      } else {
        setScrolled( "" );
      }
    });
  });

  const toggleMobileMenu = () => {
    if ( mobileMenuClass == "active" ) {
      setMobileMenuClass( "" );
    } else {
      setMobileMenuClass( "active" );
    }
  };

  return (
    <div>
      <section className={ "mobileMenu" + " " + mobileMenuClass }>
        <div className={ styles.mobileLinkWrapper }>
          <Link href="/projects">
            <a className={ styles.mobileLink }>Projects</a>
          </Link>
          <Link href="/contact">
            <a className={ styles.mobileLink + " " + styles.cta }>Contact</a>
          </Link>
        </div>
      </section>
      <section className={ styles.navbar + " " + scrolled }>
        <nav className={ styles.navbarWrapper + " " }>
          <div className={ styles.wrapper }>
            <div className={ styles.left }>
              <Link href="/">
                <span className={ styles.logo }>ZR</span>
              </Link>
            </div>
            <div className={ styles.right }>
              <a href="https://github.com/ZacharyRener" target="_blank">
                <span className={ styles.link }>GitHub</span>
              </a>
              <a href="https://docs.google.com/document/d/1TIZ4wakhXfRBrbQAm_x_dapY2KwqyK7dH9bMZ-bk4Nw/edit?usp=sharing" target="_blank">
                <span className={ styles.link }>Resume</span>
              </a>
              <Link href="/contact">
                <span className={ styles.link + " " + styles.cta }>Contact</span>
              </Link>
              <div
                className={ styles.hamburgerWrapper + " " + globals.hasPointer }
                onClick={ toggleMobileMenu }>
                <div className={ styles.hamburger }></div>
              </div>
            </div>
          </div>
        </nav>
      </section>
    </div>
  );
}