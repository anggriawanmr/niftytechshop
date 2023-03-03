import { BlockRenderer } from '../BlockRenderer';
import { MainMenu } from '../MainMenu';
import { PageWrapper } from 'src/context/page';

export const Page = (props) => {
  console.log('Page Props: ', props);
  return (
    <PageWrapper value={{ featuredImage: props.featuredImage }}>
      <MainMenu
        items={props.mainMenuItems}
        callToActionLabel={props.callToActionLabel}
        callToActionDestination={props.callToActionDestination}
      />
      <BlockRenderer blocks={props.blocks} />
    </PageWrapper>
  );
};
