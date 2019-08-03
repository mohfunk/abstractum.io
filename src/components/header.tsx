import React from 'react';
import { Home as HomeIcon, Box, Package, Feather } from 'react-feather'
import NavItem from './navItem';

const Header = ({ click }) => 
        <div id="navheader">
          <h1>
                moh.page
          </h1>
            <div className={"NavIcons"}>
                <NavItem click={click} Comp={HomeIcon} name={"blog"} />
                <NavItem click={click} Comp={Box} name={"game"} />
                <NavItem click={click} Comp={Package} name={"work"} />
                <NavItem click={click} Comp={Feather} name={"sket"} />
            </div>
        </div>


export default Header;