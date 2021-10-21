import React from 'react';

const styles = {
    icon: {
        color: 'white',
        paddingRight: '15px',
        fontSize: '75%',
    },
    styleFoot: {
        position: 'absolute',
        bottom: '0',
        padding: '30px',
    }
}

function Footer() {
    return (
        <footer style={styles.styleFoot}>
            {/* <a href='https://www.linkedin.com/in/laurarweiner/' style={styles.icon}>
                <i class='fab fa-linkedin fa-4x'></i>
            </a>
            <a href='https://github.com/lweine01' style={styles.icon}>
                <i class='fab fa-github-square fa-4x'></i>
            </a> */}
        </footer>
    );
}

export default Footer;