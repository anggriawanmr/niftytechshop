import { theme } from 'theme';
import { CallToActionButton } from '../CallToActionButton';
import { Columns } from '../Columns';
import { Column } from '../Column';
import { Cover } from '../Cover';
import { Heading } from '../Heading';
import { Paragraph } from '../Paragraph';
import Image from 'next/image';
import { PostTitle } from '../PostTitle';
import { ProductSearch } from '../ProductSearch';

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
      case 'core/post-title': {
        return (
          <PostTitle
            key={block.id}
            level={block.attributes.level}
            textAlign={block.attributes.textAlign}
          />
        );
      }
      case 'acf/productsearch': {
        return <ProductSearch key={block.id} />;
      }
      case 'core/cover': {
        console.log('Cover Block: ', block);
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
          >
            <BlockRenderer blocks={block.innerBlocks} />
          </Columns>
        );
      }
      case 'core/block':
      case 'core/group': {
        return <BlockRenderer key={block.id} blocks={block.innerBlocks} />;
      }
      case 'core/column': {
        return (
          <Column key={block.id} width={block.attributes.width}>
            <BlockRenderer blocks={block.innerBlocks} />
          </Column>
        );
      }
      case 'core/image': {
        return (
          <Image
            key={block.id}
            src={block.attributes.url}
            height={block.attributes.height}
            width={block.attributes.width}
            alt={block.attributes.alt || ''}
          />
        );
      }
      default:
        console.log('UNKNOWN: ', block);
        return null;
    }
  });
};
