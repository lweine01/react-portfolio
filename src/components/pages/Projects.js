import React from 'react';
import Ghostly from '../../assets/images/ghostly.png'

// const styles = {
//     projCard: {
//         backgroundImage: `url(${Ghostly})`,
//     }
// }

function Projects() {
    return (
        <section className='container'>
            <div className='row'>
                <div class='card'>
                    <img src={Ghostly} class='card-img-top' alt='Ghostly Stories Screenshot' />
                    <div class="card-body">
                        <h5 class="card-title">Ghostly Stories</h5>
                        <p class="card-text">A collaborative full-stack project using the MVC paradigm, RESTful APIs, user authentication, and MySQL and Sequelize for the database.</p>
                        <a href='https://github.com/lweine01/workout-tracker'>
                            <i class='fab fa-github-square fa-4x'></i>
                        </a>
                        <a href='https://github.com/lweine01/workout-tracker'>
                            <i class='fab fas fa-link fa-4x'></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;