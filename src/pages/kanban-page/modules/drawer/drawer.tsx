import React, { useState } from 'react';
import { Drawer, Flex, Typography } from 'antd';
import { useTypedSelector } from '../../../../hooks/redux';

interface ITaskDrawerProps {
  showTaskModal: boolean;
  setShowTaskModal: (bool: boolean) => void;
}

export const TaskDrawer: React.FC<ITaskDrawerProps> = ({
  showTaskModal,
  setShowTaskModal,
}) => {
  const [isLoading] = useState<boolean>(false);

  const task = useTypedSelector((state) => state.curProj.taskWindowInfo);

  return (
    <Drawer
      closable
      destroyOnClose
      title={task?.id || ''}
      placement="right"
      open={showTaskModal}
      loading={isLoading}
      onClose={() => setShowTaskModal(false)}
    >
      <Flex>
        <Typography.Title level={5}>{task?.name || ''}</Typography.Title>
      </Flex>
    </Drawer>
  );
};
