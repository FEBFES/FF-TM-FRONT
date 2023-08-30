import styled from 'styled-components'

export const SSelect = styled.select<{onlyView: boolean}>`
  font-size: 12px !important;
  color: var(--font-gray);
  background: transparent;
  border: 1px solid var(--bg-border);
  border-radius: 6px;
  text-transform: lowercase;
  padding: 6px 10px;
  outline: none;
  cursor: ${({onlyView}) => onlyView && 'not-allowed'}

  & :hover {
    outline: 1px solid var(--bg-primary);
  }
`

export const SOption = styled.option`
  font-size: 12px;
  color: var(--font-gray);
  padding: 4px 8px;
`