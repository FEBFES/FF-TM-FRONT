import React from "react";
import { Flex, Typography } from "antd";

interface SectionTitleProps {
  title: string;
  desc?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title, desc }) => {
  return (
    <Flex vertical style={{ marginBottom: "10px" }}>
      <Typography.Title level={2} style={{ marginBottom: 0 }}>
        {title}
      </Typography.Title>
      <Typography.Text>{desc}</Typography.Text>
    </Flex>
  );
};
