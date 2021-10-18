import React from 'react';

const styles = {
    navbarStyle: {
        background: 'green',
        justifyContent: 'flex-end',
    },
};

// We use JSX curly braces to evaluate the style object on the JSX tag

function Nav() {
    return (
        <nav style={styles.navbarStyle} className="navbar">
            <a href="/">Welcome</a>
        </nav>
    );
}

export default Nav;