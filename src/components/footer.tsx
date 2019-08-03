import React from 'react'
import { Link } from 'gatsby'
import { User, Twitter, GitHub, Mail } from 'react-feather';

const Footer = () =>
    <div className={"NavIcons Foot"} >
        <div className={'svg'}>
            <Link to={"/about"}>
                <User id="user" />
            </Link>
            <a href={'https://twitter.com/mohfunk'}>
                <Twitter id="twitter" />
            </a>
            <a href={'https://github.com/mohfunk'}>
                <GitHub id='github' />
            </a>
            <a className="mailgo" data-address="moh" data-domain="monupon.com" href="">
                <Mail id='mail' />
            </a>
        </div>
        </div>
    
export default Footer