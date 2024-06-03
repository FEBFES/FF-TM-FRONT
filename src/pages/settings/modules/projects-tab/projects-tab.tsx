import React from "react";
import { ColumnsSection, ProjectSection } from "../../components";

export const ProjectsTab: React.FC = (): JSX.Element => {
  return (
    <div>
      <ProjectSection />

      <ColumnsSection />
    </div>
  );
};
