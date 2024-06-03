import React from "react";
import { useTypedSelector } from "../../../../hooks/redux";
import { Input, Form } from "antd";
import { SProjectContainter, SHeader } from "./project-section.styled";
import { SectionTitle } from "../section-title/section-title";

interface ProjectSectionProps {}

export const ProjectSection: React.FC<
  ProjectSectionProps
> = (): JSX.Element => {
  //todo

  // const curProj = useTypedSelector((state) => state.curProj);

  // const updateProjInfoHandler = () => {
  //   if (curProj.projId) {
  //     dispatch(fetchUpdateProject({ id: projId, name, desc }))
  //   }
  // };

  const onFinishHandler = (e: any) => {
    console.log(e);
  };

  // todo
  // if (!curProj.projectName || !curProj.projectDesc) {
  //   return (
  //     <Flex justify={'center'} align={'center'}>
  //       <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
  //     </Flex>
  //   );
  // }

  return (
    <SProjectContainter>
      <SHeader>
        {/* // todo  */}

        {/* <SectionTitle
          title={`Проект: ${curProj.projectName || ''}`}
          desc={'Настройка информации о проекте'}
        /> */}
      </SHeader>

      <Form
        layout={"vertical"}
        onFinish={onFinishHandler}
        //todo

        // initialValues={{
        //   name: curProj.projectName || '',
        //   description: curProj.projectDesc || '',
        // }}
      >
        <Form.Item label="Название" name="name">
          <Input size={"large"} placeholder={"Название"} />
        </Form.Item>

        <Form.Item label="Описание" name="description">
          <Input size={"large"} placeholder={"Описание"} />
        </Form.Item>
      </Form>
    </SProjectContainter>
  );
};
