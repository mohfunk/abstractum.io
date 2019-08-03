import React from 'react';


import TransitionLink, { TransitionState } from 'gatsby-plugin-transition-link'
import { Spring } from 'react-spring/renderprops'

const Anim = ({ text }) => (
    <TransitionState>
        {({ mount }) => (
            <Spring
                to={{
                    transform: `translatey(${mount ? 0 : '10px'})`,
                    opacity: mount ? 1 : 0,
                }}
            >
                {props => <div style={props}>
                    {text}
                </div>}
            </Spring>
        )}
    </TransitionState>
)
export const NavMenu = (props: any) => {
    //@ts-ignore

    return (<div className={"navContainer"}>
        <h2>{props.head}</h2>
        {props.menu.map(({ node: post }) =>
            <div className="navItem" key={post.frontmatter.title}>
                <h3 className="date">
                    <Anim text={post.frontmatter.date}/>
                </h3>
                <h3 className="title">
                    <TransitionLink
                        to={post.fields.slug}
                        exit={{
                            length: 1
                        }}
                        entry={{
                            delay: 0.5
                        }}
                    >
                            <Anim text={post.frontmatter.title}/>
                    </TransitionLink>
                </h3>
            </div>
        )} </div>)
}

