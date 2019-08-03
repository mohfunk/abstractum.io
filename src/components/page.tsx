import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Header from './header'
import Footer from './footer';
import { pclick } from '../pages/index';

import { TransitionState } from 'gatsby-plugin-transition-link'
import { Spring } from 'react-spring/renderprops'


const Anim = ({ data }) => (
  <TransitionState>
    {({ mount }) => (
      <Spring
        to={{
          transform: `translatey(${mount ? 0 : '50px'})`,
          opacity: mount ? 1 : 0,
        }}
      >
        {props => <div style={props}>
          <div className={"Post"}>
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
            {data.mdx.frontmatter.group === "sketchbook" ? console.log("sketc"): console.log("not sketch")}
          </div>
         
        </div>}
      </Spring>
    )}
  </TransitionState>
)
const PageTemplate = ({ data }) => 
  <div id={"app"}>
    <Header click={pclick}/>
    <Anim data={data} />
    <Footer />
  </div>
  export default PageTemplate
  
  export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        group
      }
    }
  }
`