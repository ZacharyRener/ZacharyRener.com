import styles from '../../styles/Home.module.css'
import { useState } from 'react';

export default function Mainstage() {

    return (
        <section id='mainstage' className={styles.mainstage}>
            <div className='container'>
                <section className={styles.content}>
                    <div>Hi.</div>
                    <div>I'm Zach,</div>
                    <div>A Web Developer</div>
                </section>
            </div>
            <section className={styles.videoWrapper}>
                <video className={styles.video} autoPlay muted >
                    <source src='/output.mp4' type="video/mp4"  />
                </video>
                <div className={styles.controlSpace}></div>
            </section>
            <section className={styles.gradientOverlay}></section>
            
        </section>
    );
}