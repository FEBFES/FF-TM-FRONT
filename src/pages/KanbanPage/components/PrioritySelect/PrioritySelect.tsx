import React, { useState } from 'react';
import styles from './PrioritySelect.module.css';
import { PrioritySelectProps } from './PrioritySelect.props';
import {
  PriorityDefault,
  PriorityHigh,
  PriorityLow,
  PriorityMedium,
} from '../../../../assets/icons/TaskIcons';
import { useClickOutside } from '../../../../hooks/useClickOutside';
import { IPriorityTypeItem } from './PrioritySelect.type';

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

export const PrioritySelect: React.FC<PrioritySelectProps> = ({
  curPriority = 'DEFAULT',
  setCurPriority,
}): JSX.Element => {
  const [show, setShow] = useState(false);
  const { ref } = useClickOutside(setShow);

  return (
    <div className={styles.prioritySelect}>
      {show ? (
        <div ref={ref} className={styles.priorityContainer}>
          {priorityArr.map((priority, i) => {
            return (
              <div
                key={i}
                onClick={() => {
                  setCurPriority(priority.title);
                  setShow(false);
                }}
                className={styles.priorityElement}
              >
                {priority.value}
              </div>
            );
          })}
        </div>
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
    </div>
  );
};
