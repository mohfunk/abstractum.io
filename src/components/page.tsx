import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Header from './header'
import Footer from './footer';
import { pclick } from '../pages/index';

import { TransitionState } from 'gatsby-plugin-transition-link'
import { Spring } from 'react-spring/renderprops'
import P5Wrapper from 'react-p5-wrapper';
import cube from '../content/sketchbook/cube';

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
            {data.mdx.frontmatter.group === "sketchbook" ? (<P5Wrapper sketch={cube} />) : <></>}
            <MDXRenderer>
              {data.mdx.body}
             
            </MDXRenderer>
            
          </div>
         
        </div>}
        
      </Spring>
    )}
  </TransitionState>
)
const PageTemplate = ({ data }) => 
  <div id={"app"}>
    <Header click={pclick} />
    
    <Anim data={data}/>
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