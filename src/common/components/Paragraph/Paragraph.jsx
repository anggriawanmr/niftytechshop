import { getTextAlign } from 'src/common/utils/fonts';
import { relativeToAbsoluteUrls } from 'src/common/utils/relativeToAbsoluteUrls';

export const Paragraph = ({ textAlign = 'left', content, textColor }) => {
  return (
    <p
      className={`max-w-5xl mx-auto ${getTextAlign(textAlign)}`}
      style={{ color: textColor }}
      dangerouslySetInnerHTML={{ __html: relativeToAbsoluteUrls(content) }}
    ></p>
  );
};
