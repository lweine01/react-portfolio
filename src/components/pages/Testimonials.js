import React from 'react';

const styles = {
  test: {
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
  }
}

function Testimonials() {
  return (
    <section className='container'>
      <div className='card' style={styles.test}>
        <p>
          "Laura has been a great presence in our cohort. She's usually the first person to speak up and share solutions with the group. She asks great questions, but is always willing to put in the effort to research on her own or within a study group. Laura has a penchant for problem solving. During a coding workshop she was able to quickly grasp Regular Expressions, which can be elusive to many. I feel Laura is going to be a great addition to the web dev community and I wish her much success on her journey."
        </p>
        <p>
          – Anthony Cooper | Lead Instructor
        </p>
        <a href='https://www.linkedin.com/in/anthonydcooper/' style={styles.icon}>
          <i class='fab fa-linkedin fa-4x'></i>
        </a>
      </div>
      <div className='card' style={styles.test}>
        <p>
          "My name is Steven Eddings, my position while working with Ms. Laura Weiner over the course of 12 years was President and General Manger of Carolina Pool Management Northside, Inc.  Our business included operation and management of commercial swimming pools.  Our customers included neighborhood HOA swim clubs, city/county aquatic facilities, and Country Club swimming facilities.  We provided lifeguard staffing, gate attendants, and daily pool cleaning services.</p>
        <p>
          Laura, started work at the young age of 15 as a lifeguard for CPM.  After approximately 4 years working as a lifeguard/gate attendant we had a position for Human Resources open up.  Laura stepped right in and took ownership of that office and position.  Her main responsibilities included the hiring, training, and scheduling of about 200 seasonal staff each year.  She was very organized, personable, and performed her job with very little oversite.  We could always count on her to get the job done.  It was a pleasure getting to know Laura and working alongside her over the many years.
          Laura will be a true asset to your company.  She is loyal, trustworthy, and always a professional."
        </p>
        <p>
          – Steven Eddings | Direct Manager
        </p>
        <a href='https://www.linkedin.com/in/steven-eddings-74682430/' style={styles.icon}>
          <i class='fab fa-linkedin fa-4x'></i>
        </a>
      </div>
      <div className='card' style={styles.test}>
        <p>
          "I am Ashby Blakely, a graduate of the UNCC Full Stack Bootcamp.  I have gotten to know Laura quite well during our time together in the program.  During our time together as students and teammates, Laura has proven just how invaluable she is to have on a programming team.  While working with Laura on several projects during the bootcamp, I got to observe her talent, strengths, and skills.  I am particularly impressed with how passionate she is about making sure that things are not only completed, but completed in the most clean and efficient way.  Laura’s ability to communicate and listen made her a stand out in the class and she was sought after to have as a member of a project team.  Among her many skills, most impressive to me is her ability to problem solve.  Laura’s ability to look at a problem and immediately start coming up with solutions to test, is quite impressive."
        </p>
        <p>
          -Ashby Blakely
        </p>
        <a href='https://www.linkedin.com/in/ashbyleeblakely/' style={styles.icon}>
          <i class='fab fa-linkedin fa-4x'></i>
        </a>
      </div>
      <div className='card' style={styles.test}>
        <p>
          "Amazing work Laura! Absolutely hit the nail on the head with this assignment regarding the requirements. Your table of contents is fully functional, your tutorial includes sections that correspond to each of the components that make up the regex that you chose including examples, code snippets, and more than one sentence describing it. Keep up the great work!"
        </p>
        <p>
          -UNCC Bootcamp Central Grader
        </p>
        <a href='https://gist.github.com/lweine01/2120c4bc70d3421ed7fbd08299569e9e#the-or-operator' style={styles.icon}>
          <i class='fab fa-github-square fa-4x'></i>
        </a>
      </div>
      <div className='card' style={styles.test}>
        <p>
          "Awesome work deploying this application and rendering all your HTML views correctly. Good job doing all the API routes; I was able to create a new workout, add new workouts, view data on both the home and stats page. I like how you used the aggregate to calculate the totalDuration. Your README is also well done with a description, screenshot and link to deployed application. Keep up the good work!"
        </p>
        <p>
          -UNCC Bootcamp Central Grader
        </p>
        <a href='https://github.com/lweine01/workout-tracker' style={styles.icon}>
          <i class='fab fa-github-square fa-4x'></i>
        </a>
      </div>
    </section>


  )
}

export default Testimonials;