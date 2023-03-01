import { getTextAlign } from 'src/common/utils/fonts';

export const Paragraph = ({ textAlign = 'left', content, textColor }) => {
  return (
    <p
      className={`max-w-5xl mx-auto ${getTextAlign(textAlign)}`}
      style={{ color: textColor }}
      dangerouslySetInnerHTML={{ __html: content }}
    ></p>
  );
};
