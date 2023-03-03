import { gql } from '@apollo/client';
import client from 'client';

const handler = async (req, res) => {
  try {
    const { data } = await client.query({
      query: gql`
        query MainMenuQuery {
          products {
            nodes {
              databaseId
              title
              uri
              featuredImage {
                node {
                  uri
                  sourceUrl
                }
              }
              productFeatures {
                core
                memory
                price
                ram
              }
            }
          }
        }
      `,
    });
    return res.status(200).json({
      products: data.products.nodes,
    });
  } catch (error) {
    console.log('Error: ', error);
  }
};

export default handler;
