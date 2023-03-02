import { theme } from 'theme';
import { CallToActionButton } from '../CallToActionButton';
import { Columns } from '../Columns';
import { Cover } from '../Cover';
import { Heading } from '../Heading';
import { Paragraph } from '../Paragraph';

export const BlockRenderer = ({ blocks }) => {
  return blocks.map((block) => {
    switch (block.name) {
      case 'acf/ctabutton': {
        return (
          <CallToActionButton
            key={block.id}
            buttonLabel={block.attributes.data.label}
            destination={block.attributes.data.destination || '/'}
            align={block.attributes.data.align}
          />
        );
      }
      case 'core/paragraph': {
        return (
          <Paragraph
            key={block.id}
            content={block.attributes.content}
            textAlign={block.attributes.align}
            textColor={
              theme[block.attributes.textColor] ||
              block.attributes.style?.color?.text
            }
          />
        );
      }
      case 'core/heading': {
        return (
          <Heading
            key={block.id}
            level={block.attributes.level}
            content={block.attributes.content}
            textAlign={block.attributes.textAlign}
          />
        );
      }
      case 'core/cover': {
        console.log('Block: ', block);
        return (
          <Cover key={block.id} background={block.attributes.url}>
            <BlockRenderer blocks={block.innerBlocks} />
          </Cover>
        );
      }
      case 'core/columns': {
        return (
          <Columns
            key={block.id}
            stackOnMovile={block.attributes.isStackedOnMobile}
          ></Columns>
        );
      }
      default:
        console.log('UNKNOWN: ', block);
        return null;
    }
  });
};
