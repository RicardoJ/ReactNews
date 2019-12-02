import React from 'react';

const Header = ({titleHeader}) =>(
<nav className = "nav-wrapper light-blue darken-3">
<a className = "brand-logo center">{titleHeader}</a>
</nav>

);

export default Header;