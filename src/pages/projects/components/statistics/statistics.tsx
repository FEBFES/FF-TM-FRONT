import React from "react";
import { Statistic } from "antd";
import { SStatistic } from "./statistics.styled";

interface StatisticsProps {
  projectsLength: number;
}

export const Statistics: React.FC<StatisticsProps> = ({ projectsLength }) => {
  return (
    <SStatistic>
      <Statistic title={"Проекты:"} value={projectsLength || "0"} />

      <Statistic title={"Бэклог:"} value={"2421"} />
      <Statistic title={"Дефекты:"} value={"124"} />
      <Statistic title={"Задачи:"} value={"89"} />
    </SStatistic>
  );
};
