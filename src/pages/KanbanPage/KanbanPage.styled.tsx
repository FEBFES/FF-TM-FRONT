import styled from 'styled-components';

export const SPageWrap = styled.div`
  display: flex;
  width: initial;
`;

export const SKanbanPage = styled.div<{ full: boolean }>`
  display: flex;
  background: var(--bg-0);
  flex-direction: column;
  height: 100vh;
  width: ${({ full }) => (full ? 'calc(100% - 360px)' : '100%')};
`;
