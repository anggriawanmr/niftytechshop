import { Cover } from '../Cover';
import { Heading } from '../Heading';

export const BlockRenderer = ({ blocks }) => {
  return blocks.map((block) => {
    switch (block.name) {
      case 'core/heading': {
        return <Heading key={block.id}></Heading>;
      }
      case 'core/cover': {
        console.log('Block: ', block);
        return (
          <Cover key={block.id} background={block.attributes.url}>
            core cover
          </Cover>
        );
      }
      default:
        return null;
    }
  });
};
