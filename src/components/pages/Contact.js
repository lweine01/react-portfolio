import React from 'react';

const styles = {
    contact: {
        backgroundColor: 'rgba(0, 0, 0, .2)',
        marginTop: '30px',
        padding: '20px',
        borderRadius: '10px',
        width: '75%',
    },
}

function Contact() {
    return (
        <form id='form' className="container col-3 text-white text-center pt-5" style={styles.contact}>
        <div class="mb-3">
            <h6>Fill out this form to contact me and I will return an email to the provided address below as soon as possible.</h6><br></br>
            <input type="text" className='form-control' placeholder='Name'/>
        </div>
        <div className="mb-3">
            <input type="email" class="form-control" placeholder='Email address' />
        </div>
        <div className="mb-3">
            <textarea type="text" class="form-control" placeholder='Please enter a short message here' rows='3'/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    )
}

export default Contact;