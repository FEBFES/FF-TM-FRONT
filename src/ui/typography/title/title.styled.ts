import styled, { RuleSet, css } from 'styled-components';
import { TitleLevel } from './title';

export type StyledVariants = {
  [key in TitleLevel]?: RuleSet;
};

const sizes: StyledVariants = {
  h1: css`
    font-weight: 600;
    font-size: 38px;
    color: var(--font-gray);
  `,
  h2: css`
    font-weight: 500;
    font-size: 30px;
    color: var(--font-gray);
  `,
  h3: css`
    font-weight: 500;
    font-size: 24px;
    color: var(--font-gray);
  `,
  h4: css`
    font-weight: 500;
    font-size: 20px;
    color: var(--font-gray);
  `,
  h5: css`
    font-weight: 500;
    font-size: 16px;
    color: var(--font-gray);
  `,
  h6: css`
    font-weight: 500;
    font-size: 14px;
    color: var(--font-gray);
  `,
};

export const STitle = styled.h1<{
  size: TitleLevel;
  cursor?: 'pointer';
  hover?: 'underline';
}>`
  ${({ size }) => sizes[size]};
  cursor: ${({ cursor }) => cursor === 'pointer' && 'pointer'};

  &: hover {
    text-decoration: ${({ hover }) => hover === 'underline' && 'underline'};
  }
`;
