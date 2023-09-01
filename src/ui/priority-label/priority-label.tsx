import React from 'react';
// todo add styled comp and delete this import
// import styles from '../../pages/KanbanPage/components/TaskCard/TaskCard.module.css';
import {
  PriorityDefault,
  PriorityHigh,
  PriorityLow,
  PriorityMedium,
} from '../../assets/icons/TaskIcons';

interface IPriorityLabelProps {
  priority: null | 'LOW' | 'MEDIUM' | 'HIGH' | string;
}

export const PriorityLabel: React.FC<IPriorityLabelProps> = ({ priority }) => {
  return (
    <div>
      {/* todo delete this className */}
      {/* // <div className={styles.task_priority}> */}
      {priority === null && <PriorityDefault />}
      {priority === 'LOW' && <PriorityLow />}
      {priority === 'MEDIUM' && <PriorityMedium />}
      {priority === 'HIGH' && <PriorityHigh />}
    </div>
  );
};
