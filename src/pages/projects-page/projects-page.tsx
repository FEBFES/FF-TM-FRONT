import React, {useState} from 'react';
import {useTypedSelector} from "../../hooks/redux";
import {Button, Flex, Row, Space, Statistic} from "antd";
import {IProject} from "./store/projects.type";
import {AddNewProjModal, ProjectCard} from "./components";
import {v4} from "uuid";
import {Container, SCardHeader, SStatistic} from "./projects-page.styled";

export const ProjectsPage: React.FC = (): JSX.Element => {
    const [showModal, setShowModal] = useState<boolean>(false)
    const projects = useTypedSelector((state) => state.projects.projects);

    return (
    <Container>
            <SCardHeader>
                <SStatistic>
                        <Statistic
                            title={'Проекты:'}
                            value={projects?.length || '0'}
                        />

                                        <Statistic
                                            title={'Бэклог:'}
                                            value={'2421'}
                                        />
                                        <Statistic
                                            title={'Дефекты:'}
                                            value={'124'}
                                        />
                                        <Statistic
                                            title={'Задачи:'}
                                            value={'89'}
                                        />
                    </SStatistic>


                    <Button
                        type={'primary'}
                        onClick={() => setShowModal(true)}
                    >
                        + Новый проект
                    </Button>
            </SCardHeader>

            <Row>
                <Flex wrap gap={'middle'}>
                    {projects?.map((proj: IProject) => {
                        return <ProjectCard key={v4()} proj={proj} />;
                    })}
                </Flex>
            </Row>
        <AddNewProjModal show={showModal} setShow={setShowModal} />

    </Container>
  );
};
