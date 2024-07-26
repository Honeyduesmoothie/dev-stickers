import React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/Seo";
import { graphql, Link, PageProps } from "gatsby";

export default function Blog({ data }: PageProps<Queries.BlogPostQuery>) {
  return (
    <Layout title="Blog">
      <section className="grid">
        {data.allMdx.nodes.map((file, index) => (
          <Link to={`/blog/${file.frontmatter?.slug}`}>
            <article>
              <h3>{file.frontmatter?.title}</h3>
              <h4>by {file.frontmatter?.author}</h4>
              <h5>{file.frontmatter?.date}</h5>
              <p>{file.excerpt}</p>
            </article>
          </Link>
        ))}
      </section>
    </Layout>
  );
}

export const query = graphql`
  query BlogPost {
    allMdx {
      nodes {
        frontmatter {
          author
          date(formatString: "YYYY.MM.DD")
          title
          slug
        }
        excerpt(pruneLength: 10)
      }
    }
  }
`;

export const Head = () => <Seo title="Blog"></Seo>;
