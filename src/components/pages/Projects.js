import React from 'react';
import Ghostly from '../../assets/images/ghostly.png';
import Drinks from '../../assets/images/drinks.png';
import Password from '../../assets/images/password.png';
import Offline from '../../assets/images/offline.png';
import Portfolio from '../../assets/images/portfolio.png';
import Team from '../../assets/images/team.png';

const styles = {
    projcard: {
        color: 'white',
        backgroundColor: 'rgba(0, 0, 0, .2)',
        padding: '10px',
        margin: '20px',
        textAlign: 'center',
        borderRadius: '10px',
    },
    icon: {
        color: 'white',
        fontSize: '75%',
        padding: '10px',
    },
    pStyle: {
        fontSize: '75%',
    }
}

function Projects() {
    return (
        <section className='container'>
            <div className='row'>
                <div className='col-lg-4 col-md-6 col-sm-12'>
                    <div className='card' style={styles.projcard}>
                        <img src={Portfolio} class='card-img-top' alt='Original portfolio screenshot' />
                        <div className="card-body">
                            <h5 className="card-title">OG Portfolio</h5>
                            <p className="card-text" style={styles.pStyle}>Original portfolio created using only HTML and CSS. This is my first project created from scratch.</p>
                            <a href='https://github.com/lweine01/portfolio' style={styles.icon}>
                                <i className='fab fa-github-square fa-4x'></i>
                            </a>
                            <a href='https://lweine01.github.io/portfolio/' style={styles.icon}>
                                <i className='fab fas fa-link fa-4x'></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-12'>
                    <div className='card' style={styles.projcard}>
                        <img src={Offline} class='card-img-top' alt='Budget Tracker Screenshot' />
                        <div className="card-body">
                            <h5 className="card-title">Online/Offline Budget Tracker</h5>
                            <p className="card-text" style={styles.pStyle}>Using MongoDB, service-workers, manifest and caching, this application allows the user to track their budget and add expenses and deposits with or without a connection.</p>
                            <a href='https://github.com/lweine01/offline-budget-tracker' style={styles.icon}>
                                <i className='fab fa-github-square fa-4x'></i>
                            </a>
                            <a href='https://evening-cove-59358.herokuapp.com/' style={styles.icon}>
                                <i className='fab fas fa-link fa-4x'></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-12'>
                    <div className='card' style={styles.projcard}>
                        <img src={Ghostly} class='card-img-top' alt='Ghostly Stories Screenshot' />
                        <div className="card-body">
                            <h5 className="card-title">Ghostly Stories</h5>
                            <p className="card-text" style={styles.pStyle}>A collaborative full-stack project using the MVC paradigm, RESTful APIs, user authentication, and MySQL and Sequelize for the database.</p>
                            <a href='https://github.com/as98250/ghostly-stories' style={styles.icon}>
                                <i className='fab fa-github-square fa-4x'></i>
                            </a>
                            <a href='https://ghostly-stories-10-4-2021.herokuapp.com/' style={styles.icon}>
                                <i className='fab fas fa-link fa-4x'></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-12'>
                    <div className='card' style={styles.projcard}>
                        <img src={Drinks} class='card-img-top' alt='Drink and A Drink Screenshot' />
                        <div className="card-body">
                            <h5 className="card-title">Dinner and a Drink</h5>
                            <p className="card-text" style={styles.pStyle}>A collaborative project that built an interactive web application by developing the front-end and leveraging other people’s servers and APIs.</p>
                            <a href='https://github.com/AshbyLB/dinner-drink-decisions' style={styles.icon}>
                                <i className='fab fa-github-square fa-4x'></i>
                            </a>
                            <a href='https://ashbylb.github.io/dinner-drink-decisions/' style={styles.icon}>
                                <i className='fab fas fa-link fa-4x'></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-12'>
                    <div className='card' style={styles.projcard}>
                        <img src={Password} class='card-img-top' alt='Password Generator Screenshot' />
                        <div className="card-body">
                            <h5 className="card-title">Password Generator</h5>
                            <p className="card-text" style={styles.pStyle}>Using a JavaScript this application allows the user to generate a secure password following a series of prompts.</p>
                            <a href='https://github.com/lweine01/JavaScript-password-generator' style={styles.icon}>
                                <i className='fab fa-github-square fa-4x'></i>
                            </a>
                            <a href='https://lweine01.github.io/JavaScript-password-generator/' style={styles.icon}>
                                <i className='fab fas fa-link fa-4x'></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-12'>
                    <div className='card' style={styles.projcard}>
                        <img src={Team} class='card-img-top' alt='Team Profile Generator' />
                        <div className="card-body">
                            <h5 className="card-title">Team Profile Generator</h5>
                            <p className="card-text" style={styles.pStyle}>This project was created using test driven development (TDD) to add employees into a team profile via prompts in the terminal command line using Node.js</p>
                            <a href='https://github.com/lweine01/team-profile-generator' style={styles.icon}>
                                <i className='fab fa-github-square fa-4x'></i>
                            </a>
                            <a href='https://drive.google.com/file/d/1OiTj6O3vzeopxpGNMMi7mpPTPv7t-9vz/view' style={styles.icon}>
                                <i className='fab fas fa-video fa-4x'></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;