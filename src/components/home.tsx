
import React, { useState } from 'react';
import { Router, Switch, Route, Link } from 'react-router-dom';
import * as Menus from '../helpers/construct';
import { NavMenu } from './nav';
import Page from './page'
import { content, history, constants, svg } from '../helpers/imports';
import { Gamepad, WorkIcon, SketchIcon, TwitterIcon } from '../helpers/svgs';
import Anime from 'react-anime';
import { GitCommit, GitHub, Twitter, Mail, Home as HomeIcon, Box, User, Package, Feather } from 'react-feather'
let animeProps = {
    opacity: [0, 1],
    duration: 2000,
    translateX: [-20, 0],
};
const Home = () => {
    const [menu, setMenu] = useState({ head: 'Blog Posts', menu: Menus['blog'] })
    const click = (w: string) => {
        setMenu({
            head: constants[w],
            //@ts-ignore
            menu: Menus[w]
        })

    }
    return <>
        <Router history={history}>
            <div id="navheader">
                <h1>
                    {constants.main}
                </h1>
                <div className={"NavIcons"}>
                    <Link to={'/'}>
                        <div className={'svg'} onClick={() => click('blog')}>
                            <HomeIcon />
                        </div>
                    </Link>
                    <Link to={'/'}>
                        <div className={'svg'} onClick={() => click('game')}>
                            <Box />
                        </div>
                    </Link>
                    <Link to={'/'}>
                        <div className={'svg'} onClick={() => click('work')}>
                            <Package />
                        </div>
                    </Link>
                    <Link to={'/'}>
                        <div className={'svg'} onClick={() => click('sket')}>
                            <Feather />
                        </div>
                    </Link>
                </div>
            </div>
            <Switch>
                <Route exact path={"/"} render={() => <NavMenu head={menu.head} menu={menu.menu} />} />
                <Page />
            </Switch>

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
        </Router>
    </>
}

export default Home