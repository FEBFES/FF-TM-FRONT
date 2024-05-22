import React, { useState } from 'react';
import {
  PriorityDefault,
  PriorityHigh,
  PriorityLow,
  PriorityMedium,
} from '../../../../assets/icons/TaskIcons';
import { useClickOutside } from '../../../../hooks/use-click-outside';
import {
  SPrioritySelect,
  SPriorityElement,
  SPriorityContainer,
} from './priority-select.styled';

const priorityArr: IPriorityTypeItem[] = [
  {
    title: 'DEFAULT',
    value: <PriorityDefault />,
  },
  {
    title: 'LOW',
    value: <PriorityLow />,
  },
  {
    title: 'MEDIUM',
    value: <PriorityMedium />,
  },
  {
    title: 'HIGH',
    value: <PriorityHigh />,
  },
];

export type IPriorityType = 'DEFAULT' | 'LOW' | 'MEDIUM' | 'HIGH';

export interface IPriorityTypeItem {
  title: IPriorityType;
  value: JSX.Element;
}

export interface PrioritySelectProps {
  curPriority: IPriorityType;
  setCurPriority: (type: IPriorityType) => void;
  direction: 'bottom' | 'top';
}

export const PrioritySelect: React.FC<PrioritySelectProps> = ({
  curPriority = 'DEFAULT',
  setCurPriority,
  direction,
}): JSX.Element => {
  const [show, setShow] = useState(false);
  const { ref } = useClickOutside(setShow);

  return (
    <SPrioritySelect>
      {show ? (
        <SPriorityContainer ref={ref} direction={direction}>
          {priorityArr.map((priority, i) => {
            return (
              <SPriorityElement
                key={i}
                onClick={() => {
                  setCurPriority(priority.title);
                  setShow(false);
                }}
              >
                {priority.value}
              </SPriorityElement>
            );
          })}
        </SPriorityContainer>
      ) : (
        <div onClick={() => setShow(true)}>
          {priorityArr.map((el, i) => {
            if (el.title === curPriority) {
              return <React.Fragment key={i}>{el.value}</React.Fragment>;
            }
            return null;
          })}
        </div>
      )}
    </SPrioritySelect>
  );
};
