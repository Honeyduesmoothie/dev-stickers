import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/Seo";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import { graphql, Link, PageProps } from "gatsby";

export default function IndexPage({ data }: PageProps<Queries.StickersQuery>) {
  return (
    <Layout title="Welcome to devstickers!">
      {data.allContentfulStickerPack.nodes.map((sticker) => (
        <article>
          <GatsbyImage
            image={sticker.preview?.gatsbyImageData!}
            alt={sticker.name!}
          />
          <Link to={`/products/${sticker.slug}`}>
            <h2>{sticker.name}</h2>
            <h4>{sticker.price}</h4>
          </Link>
        </article>
      ))}
    </Layout>
  );
}

export const query = graphql`
  query Stickers {
    allContentfulStickerPack {
      nodes {
        name
        price
        slug
        preview {
          gatsbyImageData(placeholder: BLURRED, width: 200)
        }
      }
    }
  }
`;

export const Head = () => <Seo title="Home"></Seo>;
