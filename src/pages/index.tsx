import React, { useState } from "react"
import { graphql } from "gatsby"
import { NavMenu } from '../components/nav';
import Footer from '../components/footer';

import _ from 'lodash';
import '../helpers/styles'
import Header from '../components/header';
//@ts-ignore
const menuHeaders = {
  blog: "Blog Posts",
  game: "My Games",
  work: "Stuff I Wrote",
  sket: "My Programmer Sketchbook"
}
let prevClick = 'blog';
export const pclick = (w: string) => prevClick = w;

const prepare = (data: any, menu: string) =>
  _.reverse(
    _.sortBy(
      _.filter(data, ({ node: post }) =>
        post.frontmatter.group === menu),
      ({ node: post }) => new Date(
        post.frontmatter.date.split('.')[0],
        post.frontmatter.date.split('.')[1],
        post.frontmatter.date.split('.')[2]
      )))

const BlogIndex = ({ data }) => {
  const { edges: posts } = data.allMdx
  const menus = {
    blog: prepare(posts, 'blog'),
    game: prepare(posts, 'games'),
    work: prepare(posts, 'work'),
    sket: prepare(posts, 'sketchbook'),
  }
  const [menu, setMenu] = useState({ head: menuHeaders[prevClick], menu: menus[prevClick] })
   const click = (w: string) => {
    setMenu({
      //@ts-ignore
      head: menuHeaders[w],
      //@ts-ignore
      menu: menus[w]
    })
  }
  return (
    <div id={"app"}>
      <Header click={click}/>
      <NavMenu head={menu.head} menu={menu.menu} />
      <Footer />
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