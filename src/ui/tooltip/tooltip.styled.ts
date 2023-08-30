import styled, { css, RuleSet } from 'styled-components';
import { PlacementType } from './tooltip';

export const SRelativeContainer = styled.div`
  position: relative;
`;

export type StyledVariants<E extends string> = {
  [key in E]?: RuleSet;
};

const tooltipPlacements: StyledVariants<PlacementType> = {
  left: css`
    top: 50%;
    transform: translateY(-50%);
    right: 120%;
  `,
  top: css`
    bottom: 120%;
    left: 50%;
    transform: translateX(-50%);
  `,
  right: css`
    top: 50%;
    transform: translateY(-50%);
    left: 120%;
  `,
  bottom: css`
    top: 120%;
    left: 50%;
    transform: translateX(-50%);
  `,
};

export const STooltip = styled.div<{ placement: PlacementType }>`
  ${({ placement }) => tooltipPlacements[placement]};
  font-size: 12px;
  color: var(--font-defautl);
  min-width: fit-content;
  position: absolute;
  background: var(--bg-0);
  border: 1px solid var(--bg-border);
  padding: 4px;
  border-radius: 4px;
`;
