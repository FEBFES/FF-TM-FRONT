import React, { useState } from "react";
import { Typography, Button, Input, Modal, Switch, Flex, Space } from "antd";
import { IPriorityType, ITypeSelectType, IColumns } from "../../components";
import { IMember } from "../../__data__/type/kanban.type";

interface AddTaskModalProps {
  show: boolean;
  setShow: (bool: boolean) => void;
  curCol: IColumns | null;
  onSubmit: (
    name: string,
    description: string,
    priority: IPriorityType,
    type: ITypeSelectType,
    assigneeId: number | null | undefined
  ) => void;
}

export const AddTaskModal: React.FC<AddTaskModalProps> = ({
  show,
  setShow,
  onSubmit,
  curCol,
}): JSX.Element => {
  const [curTaskType, setCurTaskType] = useState<ITypeSelectType>("NONE");
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [isMultiple, setIsMultiple] = useState<boolean>(false);
  const [curPriority, setCurPriority] = useState<IPriorityType>("DEFAULT");
  const [curAssignee, setCurAssignee] = useState<IMember | null>(null);
  // const [showAssignee, setShowAssignee] = useState<boolean>(false);

  const clearModalData = () => {
    setName("");
    setDescription("");
    setCurTaskType("NONE");
    setCurPriority("DEFAULT");
    setCurAssignee(null);
  };

  const cancelHandler = () => {
    setShow(false);
    clearModalData();
  };

  const submitHandler = () => {
    onSubmit(name, description, curPriority, curTaskType, curAssignee?.id);
    if (isMultiple) {
      clearModalData();
    } else {
      setShow(false);
    }
  };

  return (
    <Modal
      onOk={submitHandler}
      okText={"Создать"}
      onCancel={cancelHandler}
      cancelText={"Отменить"}
      title={curCol?.name}
      open={show}
    >
      <div>
        <div style={{ marginTop: "40px", marginBottom: "25px" }}>
          <Input
            type={"text"}
            size={"large"}
            value={name}
            placeholder={"Название"}
            onChange={(e) => setName(e.target.value)}
          />
          <Input.TextArea
            size={"large"}
            value={description}
            placeholder={"Описание"}
            autoSize={{ minRows: 3, maxRows: 5 }}
            onChange={(e) => setDescription(e.target.value)}
          />

          {/*todo  Ответственный*/}
          {/*<SAssigneeCcontainer>*/}
          {/*  <Typography>Ответственный:</Typography>*/}
          {/*  {curAssignee === null ? (*/}
          {/*    <AddAssigneeModal*/}
          {/*      setShowAssignee={setShowAssignee}*/}
          {/*      showAssignee={showAssignee}*/}
          {/*      setCurAssignee={setCurAssignee}*/}
          {/*    />*/}
          {/*  ) : (*/}
          {/*    <MemberCard*/}
          {/*      bordered*/}
          {/*      member={curAssignee}*/}
          {/*      onClick={() => setCurAssignee(null)}*/}
          {/*    />*/}
          {/*  )}*/}
          {/*</SAssigneeCcontainer>*/}
        </div>

        <div>
          <Flex justify={"space-between"}>
            <Space>
              <Button>Приоритет</Button>

              <Button>Тип</Button>
            </Space>

            <Space>
              <Typography>Создать несколько</Typography>
              <Switch
                value={isMultiple}
                onChange={(value: boolean) => setIsMultiple(value)}
              />
            </Space>
          </Flex>
        </div>
      </div>
    </Modal>
  );
};
