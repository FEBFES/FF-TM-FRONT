import styled, { RuleSet, css } from 'styled-components';
import { AvatarSizesType } from './avatar';

export type StyledVariants<E extends string> = {
  [key in E]?: RuleSet;
};

const sizes: StyledVariants<AvatarSizesType> = {
  '2xs': css`
    width: 12px;
    height: 12px;
  `,
  'xs': css`
    width: 16px;
    height: 16px;
  `,
  's': css`
    min-width: 24px;
    min-height: 24px;
    max-width: 24px;
    max-height: 24px;
  `,
  'm': css`
    width: 32px;
    height: 32px;
  `,
  'l': css`
    width: 48px;
    height: 48px;
  `,
  'xl': css`
    width: 64px;
    height: 64px;
  `,
  '2xl': css`
    width: 128px;
    height: 128px;
  `,
  'fit': css`
    width: 100%;
    height: 100%;
  `,
};

export const SAvatar = styled.img<{
  size: AvatarSizesType;
  bordered: boolean;
}>`
  ${({ size }) => sizes[size]};
  padding: 0;
  margin: 0;
  border-radius: 100px;
  object-fit: cover;
  background: var(--bg-0);
  text-indent: 100%;
  white-space: nowrap;
  overflow: hidden;
  border: ${({ bordered }) =>
    bordered ? '1px solid var(--bg-border)' : 'none'};
`;
