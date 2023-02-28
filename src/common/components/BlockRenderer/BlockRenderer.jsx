import { Cover } from '../Cover';

export const BlockRenderer = ({ blocks }) => {
  return blocks.map((block) => {
    switch (block.name) {
      case 'core/cover': {
        return (
          <Cover key={block.id} background={block.attribute.url}>
            core cover
          </Cover>
        );
      }
      default:
        return null;
    }
  });
};
