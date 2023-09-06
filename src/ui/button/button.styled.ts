import styled, { css, RuleSet } from 'styled-components';
import { IButtonVariant } from './button';

export const SButtonCloseType = styled.button`
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  outline: none;
  /*border: none;*/
  padding: 10px;
  width: 24px;
  height: 24px;
  font-size: 10px;
  color: var(--font-gray);
  border: 1px solid var(--font-gray);

  &:hover {
    cursor: pointer;
    color: var(--font-defautl);
    border: 1px solid var(--font-defautl);
  }
`;

export type StyledVariants<E extends string> = {
  [key in E]?: RuleSet;
};

const buttonsVariants: StyledVariants<IButtonVariant> = {
  'submit': css`
    background: #168d1b;
    color: #ffffff;

    &:hover {
      background-color: #20b427;
    }
  `,
  'danger': css`
    background: #fc4143;
    color: white;

    &:hover {
      background-color: #ff585a;
    }
  `,
  'primary': css`
    color: white;
    background: var(--bg-primary);

    &:hover {
      background-color: #1677ff;
    }
  `,
  'secondary': css`
    background: #606060;
    color: white;

    &:hover {
      background-color: #606060;
    }
  `,
};

export const SBasicButton = styled.button<{ variant: IButtonVariant }>`
  ${({ variant }) => buttonsVariants[variant]}
  margin: 5px;
  display: flex;
  align-items: center;
  padding: 5px 15px;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  transition: 0.2s;
  max-width: fit-content;
  white-space: nowrap;

  &:hover {
    cursor: pointer;
  }

  &:disabled {
    opacity: 0.5;
  }
`;
