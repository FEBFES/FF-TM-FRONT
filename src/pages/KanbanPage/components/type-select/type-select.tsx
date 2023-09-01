import React, { useState } from 'react';
import styles from './TypeSelect.module.css';
import { useClickOutside } from '../../../../hooks/useClickOutside';
import classNames from 'classnames';

interface TypeSelectProps {
  curType: ITypeSelectType;
  setCurType: (type: ITypeSelectType) => void;
  direction: 'bottom' | 'top';
}
export type ITypeSelectType =
  | 'NONE'
  | 'RESEARCH'
  | 'QUESTION'
  | 'BUG'
  | 'FEATURE';

const typeArr: ITypeSelectType[] = [
  'NONE',
  'RESEARCH',
  'QUESTION',
  'BUG',
  'FEATURE',
];

export const TypeSelect: React.FC<TypeSelectProps> = ({
  setCurType,
  curType,
  direction,
}): JSX.Element => {
  const [show, setShow] = useState(false);
  const { ref } = useClickOutside(setShow);

  return (
    <div>
      {show ? (
        <div
          ref={ref}
          className={classNames(styles.typeContainer, {
            [styles.typeContainer_bot]: direction === 'bottom',
            [styles.typeContainer_top]: direction === 'top',
          })}
        >
          {typeArr.map((taskType, i) => {
            return (
              <div
                key={i}
                onClick={() => {
                  setCurType(taskType);
                  setShow(false);
                }}
                className={classNames(styles.typeElement, {
                  [styles.taskType_f]: taskType === 'FEATURE',
                  [styles.taskType_q]: taskType === 'QUESTION',
                  [styles.taskType_b]: taskType === 'BUG',
                  [styles.taskType_r]: taskType === 'RESEARCH',
                })}
              >
                {taskType}
              </div>
            );
          })}
        </div>
      ) : (
        <div onClick={() => setShow(true)}>
          {typeArr.map((taskType, i) => {
            if (taskType === curType) {
              return (
                <div
                  className={classNames(`${styles.taskType}`, {
                    [styles.taskType_f]: curType === 'FEATURE',
                    [styles.taskType_q]: curType === 'QUESTION',
                    [styles.taskType_b]: curType === 'BUG',
                    [styles.taskType_r]: curType === 'RESEARCH',
                  })}
                  key={i}
                >
                  {taskType[0]}
                </div>
              );
            }
            return null;
          })}
        </div>
      )}
    </div>
  );
};
