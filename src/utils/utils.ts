import human from '../assets/img/human.png';
import { serverString } from '../config';

export const getAvatarUrlOrHuman = (url: string | null) => {
  if (!url) {
    return human;
  }
  return `${serverString}${url}`;
};
