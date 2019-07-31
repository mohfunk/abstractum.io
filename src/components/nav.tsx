import React from 'react';
import { Route, Link } from 'react-router-dom';
//@ts-ignore
import _ from 'lodash';
import { Anime } from '../helpers/imports'

interface NavMenuItemProps {
    head: string,
    date: string,
    link: string,
}
interface NavMenuProps {
    head: string,
    menu: NavMenuItemProps[]
}

let animeProps = {
    opacity: [0, 1],
    translateY: [-10, 0],
    delay: (_el: any, i: any) => i * 200
};

export const NavMenu = (props: NavMenuProps) => <div className={"navContainer"}>
    <div id="skt" />
    <h2>{props.head}</h2>
    {props.menu.map((item: any) =>
        <div className="navItem" key={item.head}>
            <h3 className="date">
                {item.date}
            </h3>
            <h3 className="title">
                <Link to={item.link}>{item.head}</Link>
            </h3>
        </div>
    )}

</div>
