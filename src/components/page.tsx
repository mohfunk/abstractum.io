import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
const PageTemplate = ({ data: { mdx } }) => <div id={"root"}>
  <div id={"app"}>
    <div className={"Post"}>
      <MDXRenderer>{mdx.body}</MDXRenderer>
    </div>
  </div>
</div>
export default PageTemplate

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`