import React from 'react';
// import { fetchAddProject } from '../../../../__data__/middleware/projects.thunk';
import { Modal, Input, Form, Button, Space, Flex } from 'antd';
// import { useAppDispatch } from '../../../../hooks/redux';

interface AddNewProjModalProps {
  show: boolean;
  setShow: (bool: boolean) => void;
}

export const AddProjModal: React.FC<AddNewProjModalProps> = ({
  show,
  setShow,
}): JSX.Element => {
  // const dispatch = useAppDispatch();
  const [form] = Form.useForm();

  // const submitHandler = (e: any) => {
  //   dispatch(fetchAddProject({ name: e.name, desc: e.description })).finally(
  //     () => {
  //       setShow(false);
  //     }
  //   );
  // };

  return (
    <Modal title={'Создать новый проект'} open={show} footer={''}>
      <Form
        layout="vertical"
        form={form}
        // onFinish={submitHandler}
        size={'large'}
      >
        <Form.Item
          style={{ margin: 0 }}
          rules={[
            { min: 3, message: 'Минимальное кол-во символов - 3' },
            { max: 20, message: 'Максимальное кол-во символов - 20' },
          ]}
          label="Название"
          name="name"
        >
          <Input size={'large'} placeholder={'Название'} />
        </Form.Item>

        <Form.Item label="Описание" name="description">
          <Input.TextArea
            autoSize={{ minRows: 2, maxRows: 3 }}
            size={'large'}
            placeholder={'Описание'}
          />
        </Form.Item>

        <Form.Item shouldUpdate>
          {() => (
            <Flex justify={'end'}>
              <Space>
                <Button onClick={() => setShow(false)} size={'middle'}>
                  Отменить
                </Button>
                <Button
                  size={'middle'}
                  type="primary"
                  htmlType="submit"
                  onClick={() => {
                    console.log(
                      !form.getFieldValue('name'),
                      !form.isFieldsTouched(true),
                      !!form
                        .getFieldsError()
                        .filter(({ errors }) => errors.length).length
                    );
                  }}
                  disabled={
                    // !clientReady ||
                    !form.getFieldValue('name') ||
                    // !form.isFieldsTouched(true) ||
                    !!form
                      .getFieldsError()
                      .filter(({ errors }) => errors.length).length
                  }
                >
                  Добавить
                </Button>
              </Space>
            </Flex>
          )}
        </Form.Item>
      </Form>
    </Modal>
  );
};
