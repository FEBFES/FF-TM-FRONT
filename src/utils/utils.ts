import human from '../assets/img/human.png';
import { serverString } from '../config';
import { IPriorityType } from '../pages/kanban-page/components';

export const getAvatarUrlOrHuman = (url: string | null) => {
  if (!url) {
    return human;
  }

  return `${serverString}${url}`;
};

export const getColorByPriority = (priority: IPriorityType) => {
  const colors = {
    DEFAULT: '',
    LOW: 'green',
    MEDIUM: '',
    HIGH: 'red',
  };
  return colors[priority];
};
