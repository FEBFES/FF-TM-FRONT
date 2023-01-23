import React, { useEffect, useState } from 'react';
import { apiProjects } from '../../api/api-projects';

export const ProjectPage: React.FC = (): JSX.Element => {
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    apiProjects.getAllProjects().then((res) => {
      if (res.data === 200) {
        setProjects(res.data);
      }
    });
  }, []);

  return (
    <div>
      <h1>ProjectPage</h1>
      <div>
        {projects.map((el) => {
          return <div>2</div>;
        })}
      </div>
    </div>
  );
};
