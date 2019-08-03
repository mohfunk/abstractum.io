
import React from 'react';
import { Link } from 'gatsby';

const NavItem = ({ click, Comp, name }) => 
    <Link to={'/'}>
    <div className={"svg"} onClick={() => click(name)}>
            <Comp />
        </div>
    </Link>
export default NavItem