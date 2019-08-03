import React, { useState } from "react"
import { Link, graphql } from "gatsby"
import { NavMenu } from '../components/nav';
import { GitHub, Twitter, Mail, Home as HomeIcon, Box, User, Package, Feather } from 'react-feather'
import _ from 'lodash';
import '../helpers/styles'
//@ts-ignore
const menuHeaders = {
  blog: "Blog Posts",
  game: "My Games",
  work: "Stuff I wrote",
  sket: "My Programmer Sketchbook"
}

const prepare = (data: any, menu: string) =>
  _.reverse(
    _.sortBy(
      _.filter(data, ({ node: post }) =>
        post.frontmatter.group === menu),
      ({ node: post }) => new Date(post.frontmatter.date)))

const BlogIndex = ({ data }) => {
  const { edges: posts } = data.allMdx
  const menus = {
    blog: prepare(posts, 'blog'),
    game: prepare(posts, 'games'),
    work: prepare(posts, 'work'),
    sket: prepare(posts, 'sketching'),
  }
  const [menu, setMenu] = useState({ head: 'Blog Posts', menu: menus['blog'] })
  const click = (w: string) => {
    setMenu({
      head: menuHeaders[w],
      menu: menus[w]
    })
  }
  return (
    <div id={"root"}>
      <div id={"app"}>
        <div id="navheader">
          <h1>
            moh.page
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

        <NavMenu head={menu.head} menu={menu.menu} />

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
      </div>
    </div>
  )
}
export const pageQuery = graphql`
  query blogIndex {
    allMdx {
      edges {
        node {
          id
          excerpt
          frontmatter {
            group
            title
            date
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
export default BlogIndex