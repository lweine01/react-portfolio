import React from 'react';
import selfie from '../../assets/images/laura.jpg'

const styles = {
    sectionStyle: {
        padding: '30px',
        color: 'white',
        marginTop: '30px',
    },
    selfie: {
        borderRadius: '50%',
        border: 'solid 7px black',
        maxWidth: '100%',
        height: 'auto',
    }
}

function About() {
    return (
        <section style={styles.sectionStyle} className='row'>
            <div className='col-8'>
                <h3>What's up, I'm Laura.</h3>
                <p>Welcome to my portfolio! I am a motivated and energetic full stack web developer who enjoys a challenge, problem solving and logical thinking. Quickly able to learn and retain information as shown through excelling at the  UNCC Coding Bootcamp. I have a diverse workplace experience in Human Resources and Hospital Administration with proven skills in leadership and collaboration.</p>
                <p>Some of my skills include JavaScript,  React, HTML, CSS, NodeJS, MySQL, MongoDB, API’s, OOP, Test Driven Development, and Model View Controller</p>
                <p>Fun facts: I am born and raised in Charlotte, NC, I also enjoy swimming, weight training, hiking and wine tasting with friends. </p>
            </div>
            {/* <div className='col-1'></div> */}
            <div className='col-4'>
                <img src={selfie} alt="selfie of me" style={styles.selfie} />
            </div>
        </section>
    );
}

export default About;