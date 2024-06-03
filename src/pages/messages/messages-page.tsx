import React from "react";
import { Button, Flex, Result } from "antd";
import { useNavigate } from "react-router-dom";

interface MessagesPageProps {}

export const MessagesPage: React.FC<MessagesPageProps> = (): JSX.Element => {
  const navigate = useNavigate();
  return (
    <Flex style={{ height: "70vh" }} justify={"center"} align={"center"}>
      <Result
        status={404}
        title="Модуль 'Сообщения' в разработке"
        extra={
          <Button onClick={() => navigate(-1)} type="primary">
            Вернуться
          </Button>
        }
      />
    </Flex>
  );
};
