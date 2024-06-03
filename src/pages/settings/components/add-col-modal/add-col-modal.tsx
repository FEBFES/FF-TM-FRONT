import React from "react";
import { Button, Flex, Form, Input, Modal, Space } from "antd";
import { useAppDispatch, useTypedSelector } from "../../../../hooks/redux";

export interface AddColModalProps {
  show: boolean;
  setShow: (bool: boolean) => void;
}

export const AddColModal: React.FC<AddColModalProps> = ({
  show,
  setShow,
}): JSX.Element => {
  const [form] = Form.useForm();
  // const projId = useTypedSelector((state) => state.curProj.projId);
  const dispatch = useAppDispatch();

  const cancelHandler = () => {
    form.resetFields();
    setShow(false);
  };

  const onFinishHandler = (e: any) => {
    // dispatch(
    //   fetchAddNewCol({
    //     name: e.name,
    //     description: e.desc || '',
    //     projId: String(projId),
    //   })
    // );
    // cancelHandler();
  };

  return (
    <Modal
      title={"Добавить новую колонку"}
      open={show}
      onCancel={() => setShow(false)}
      footer={() => <></>}
    >
      <Form
        style={{ padding: "30px 10px 0px" }}
        onFinish={onFinishHandler}
        form={form}
        layout={"vertical"}
      >
        <Form.Item
          rules={[
            { required: true },
            { min: 4, message: "Минимальное кол-во символов - 4" },
            { max: 20, message: "Максимальное кол-во символов - 20" },
          ]}
          label="Название"
          name="name"
        >
          <Input placeholder={"Название"} type={"text"} size={"large"} />
        </Form.Item>

        <Form.Item
          rules={[{ min: 5, message: "Минимальное кол-во символов - 5" }]}
          label="Описание"
          name="desc"
        >
          <Input placeholder={"Описание"} type={"text"} size={"large"} />
        </Form.Item>

        <Flex justify={"end"}>
          <Space size={"middle"}>
            <Button onClick={cancelHandler}>Отмена</Button>

            <Button type="primary" htmlType="submit">
              Добавить
            </Button>
          </Space>
        </Flex>
      </Form>
    </Modal>
  );
};
