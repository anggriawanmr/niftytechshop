import { gql } from '@apollo/client';
import { cleanAndTransformBlocks } from 'src/common/utils/cleanAndTransformBlocks';
import { BlockRenderer } from 'src/common/components/BlockRenderer';

import client from '../../client';
import { mapMainMenuItems } from 'src/common/utils/mapMainMenuItems';

export default function Home(props) {
  console.log('Props: ', props);
  return (
    <div>
      <BlockRenderer blocks={props.blocks} />
    </div>
  );
}

export const getStaticProps = async () => {
  const { data } = await client.query({
    query: gql`
      query PageQuery {
        nodeByUri(uri: "/") {
          ... on Page {
            id
            title
            blocksJSON
          }
        }

        acfOptionsMainMenu {
          mainMenu {
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
  });

  const blocks = cleanAndTransformBlocks(data.nodeByUri.blocksJSON);

  return {
    props: {
      mainMenuItems: mapMainMenuItems(
        data.acfOptionsMainMenu.mainMenu.menuItems
      ),
      blocks,
    },
  };
};
