import { gql } from '@apollo/client';

import client from 'client';
import { Page } from 'src/common/components/Page';
import { getPageStaticProps } from 'src/common/utils/getPageStaticProps';

export default Page;

export const getStaticProps = getPageStaticProps;

export const getStaticPaths = async () => {
  const { data } = await client.query({
    query: gql`
      query AllPagesQuery {
        pages {
          nodes {
            uri
          }
        }
        products {
          nodes {
            title
            uri
          }
        }
      }
    `,
  });

  return {
    paths: [...data.pages.nodes, ...data.products.nodes].map((page) => ({
      params: {
        slug: page.uri.substring(1, page.uri.length - 1).split('/'),
      },
    })),
    fallback: false,
  };
};
