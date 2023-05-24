import React from 'react';
import styles from './KanbanPage.module.css';
import { KanbanPageHeader } from './modules/KanbanPageHeader/KanbanPageHeader';
import { KanbanPageMain } from './modules/KanbanPageMain/KanbanPageMain';
import { KanbanPageSubheader } from './modules/KanbanPageSubheader/KanbanPageSubheader';
// import { TaskWindow } from './modules/TaskWindow/TaskWindow';

export const KanbanPage: React.FC = (): JSX.Element => {
  // const [showTaskModal, setShowTaskModal] = useState<boolean>(false);
  return (
    <div className={styles.wrap}>
      <div
        // className={`${styles.KanbanPage} ${showTaskModal && styles.showModal}`}
        className={`${styles.KanbanPage}`}
      >
        <KanbanPageHeader />
        <KanbanPageSubheader />
        <KanbanPageMain
          // setShowTaskModal={setShowTaskModal}
          setShowTaskModal={() => {}}
        />
      </div>

      {/*{showTaskModal && <TaskWindow setShowWindow={setShowTaskModal} />}*/}
    </div>
  );
};
