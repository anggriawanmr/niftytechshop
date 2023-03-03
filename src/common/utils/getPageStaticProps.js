import { gql } from '@apollo/client';
import client from 'client';

import { cleanAndTransformBlocks } from './cleanAndTransformBlocks';
import { mapMainMenuItems } from './mapMainMenuItems';

export const getPageStaticProps = async (context) => {
  const uri = context.params?.slug ? `/${context.params.slug.join('/')}/` : '/';
  const { data } = await client.query({
    query: gql`
      query PageQuery($uri: String!) {
        nodeByUri(uri: $uri) {
          ... on Page {
            id
            title
            blocksJSON
            featuredImage {
              node {
                sourceUrl
              }
            }
          }
          ... on Product {
            id
            title
            blocksJSON
            featuredImage {
              node {
                sourceUrl
              }
            }
          }
        }

        acfOptionsMainMenu {
          mainMenu {
            callToActionButton {
              label
              destination {
                ... on Page {
                  uri
                }
              }
            }
            menuItems {
              menuItems {
                destination {
                  ... on Page {
                    uri
                  }
                }
                label
              }
              items {
                destination {
                  ... on Page {
                    uri
                  }
                }
                label
              }
            }
          }
        }
      }
    `,
    variables: {
      uri,
    },
  });

  const blocks = cleanAndTransformBlocks(data.nodeByUri.blocksJSON);

  return {
    props: {
      title: data.nodeByUri.title,
      featuredImage: data.nodeByUri.featuredImage?.node?.sourceUrl || null,
      mainMenuItems: mapMainMenuItems(
        data.acfOptionsMainMenu.mainMenu.menuItems
      ),
      callToActionLabel:
        data.acfOptionsMainMenu.mainMenu.callToActionButton.label,
      callToActionDestination:
        data.acfOptionsMainMenu.mainMenu.callToActionButton.destination.uri,
      blocks,
    },
  };
};
