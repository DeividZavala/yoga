import React from 'react';
import styled, { withTheme } from 'styled-components';
import { oneOf, node } from 'prop-types';
import Text from '../../Text';

export const StyledTag = styled.View`
  justify-content: center;
  align-items: center;

  ${({
    full,
    variant,
    theme: {
      yoga: {
        colors: {
          text,
          elements,
          feedback: {
            [variant]: color = { dark: text.secondary },
            [variant]: borderColor = { dark: elements.selectionAndIcons },
          },
        },
        components: { tag },
      },
    },
  }) => `
    width: ${full ? '100%' : 'auto'};
    padding:
      ${tag.padding.top}px
      ${tag.padding.right}px
      ${tag.padding.bottom}px
      ${tag.padding.left}px;

    color: ${color.light};
    border-radius: ${tag.border.radius}px;
    border: ${tag.border.width}px solid;
    border-color: ${borderColor.dark};
  `}
`;

export const StyledText = styled(Text)`
  ${({
    variant,
    theme: {
      yoga: {
        colors: { text, [variant]: color = text.secondary },
        components: { tag },
      },
    },
  }) => `
    color: ${color};

    font-size: ${tag.font.size}px;
    line-height: ${tag.font.lineHeight}px;
    font-weight: ${tag.font.weight};
  `}
`;

/** Use Tag component when you want to categorize your content */
const Tag = ({ children, ...props }) => (
  <StyledTag {...props}>
    <StyledText {...props}>{children}</StyledText>
  </StyledTag>
);

Tag.propTypes = {
  /** style the card following the theme (success, informative, attention) */
  variant: oneOf(['', 'success', 'informative', 'attention']),
  children: node.isRequired,
};

Tag.defaultProps = {
  variant: '',
};

export default withTheme(Tag);
