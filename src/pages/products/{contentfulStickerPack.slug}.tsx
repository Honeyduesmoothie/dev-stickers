import { graphql, PageProps } from "gatsby";
import React from "react";
import Layout from "../../components/layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function Product({ data }: PageProps<Queries.ProductQuery>) {
  const image = getImage(data.contentfulStickerPack?.preview?.gatsbyImageData!);
  return (
    <Layout title="">
      <div>
        <GatsbyImage image={image!} alt={data.contentfulStickerPack?.name!} />
        <h2>{data.contentfulStickerPack?.name}</h2>
        <h4>{data.contentfulStickerPack?.price}</h4>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query Product($slug: String!) {
    contentfulStickerPack(slug: { eq: $slug }) {
      preview {
        gatsbyImageData(width: 400, placeholder: BLURRED)
      }
      name
      price
    }
  }
`;
