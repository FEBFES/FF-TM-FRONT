import React from "react";
import { SectionTitle } from "../section-title/section-title";
import { Button, Form, Input, Space } from "antd";
import { SContainer } from "./change-password.styled";

export const ChangePassword = () => {
  const onFinish = (e: any) => {
    // console.log(e);
  };

  return (
    <SContainer>
      <SectionTitle title={"Пароль"} desc={"Изменение пароля"} />

      <Form layout={"vertical"} onFinish={onFinish}>
        {/*Старый пароль*/}
        <Form.Item label="Старый пароль" name="old_password">
          <Input.Password placeholder={"Старый пароль"} size={"large"} />
        </Form.Item>

        {/*Новый пароль*/}
        <Form.Item
          label="Новый пароль"
          name="new_password"
          rules={[
            {
              min: 10,
              max: 20,
              message: "Пароль должен содержать от 10 до 20 символов",
            },
          ]}
        >
          <Input.Password placeholder={"Новый пароль"} size={"large"} />
        </Form.Item>

        <Space>
          <Button htmlType="reset">Сбросить</Button>

          <Button type="primary" htmlType="submit" loading>
            Обновить
          </Button>
        </Space>
      </Form>
    </SContainer>
  );
};
