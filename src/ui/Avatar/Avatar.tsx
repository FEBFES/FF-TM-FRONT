import React, { DetailedHTMLProps } from 'react';
import classNames from 'classnames';
import styles from './Avatar.module.css';
import i18n from 'i18next';

interface AvatarProps
  extends DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  bordered?: boolean;
  size?: '2xs' | 'xs' | 's' | 'm' | 'l' | 'xl' | '2xl' | 'fit';
}

export const Avatar: React.FC<AvatarProps> = ({
  size = 's',
  bordered = true,
  ...props
}): JSX.Element => {
  return (
    <img
      alt={i18n.t('utils.any.avatar')}
      {...props}
      className={classNames(styles.avatar, {
        [styles.avatar_bordered]: bordered,
        [styles.avatar_2xs]: size === '2xs',
        [styles.avatar_xs]: size === 'xs',
        [styles.avatar_s]: size === 's',
        [styles.avatar_m]: size === 'm',
        [styles.avatar_l]: size === 'l',
        [styles.avatar_xl]: size === 'xl',
        [styles.avatar_2xl]: size === '2xl',
        [styles.avatar_fit]: size === 'fit',
      })}
    />
  );
};
