import React from 'react';
import { useNavigate } from 'react-router-dom';
import { appRoutsPath } from '../../routing/routs';
import { Button, Result } from 'antd';

export const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button
          type="primary"
          onClick={() => navigate(appRoutsPath.ProjectPage.path)}
        >
          Вернуться домой
        </Button>
      }
    />
  );
};
