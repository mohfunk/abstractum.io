import React from 'react';
import { Link } from 'gatsby';
import { NavMenuProps, MenuItem } from '../interfaces'

export const NavMenu = (props: any) => <div className={"navContainer"}>
    <div id="skt" />
    <h2>{props.head}</h2>
    {props.menu.map(({ node: post }) =>
        <div className="navItem" key={post.frontmatter.title}>
            <h3 className="date">
                {post.frontmatter.date}
            </h3>
            <h3 className="title">
                <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
            </h3>
        </div>
    )}

</div>
