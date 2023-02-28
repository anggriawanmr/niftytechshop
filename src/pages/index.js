import { gql } from '@apollo/client';
import { cleanAndTransformBlocks } from 'src/common/utils/cleanAndTransformBlocks';
import { BlockRenderer } from 'src/common/components/BlockRenderer';

import client from '../../client';

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
      query NewQuery {
        nodeByUri(uri: "/") {
          ... on Page {
            id
            title
            blocksJSON
          }
        }
      }
    `,
  });

  const blocks = cleanAndTransformBlocks(data.nodeByUri.blocksJSON);

  return {
    props: {
      blocks,
    },
  };
};
