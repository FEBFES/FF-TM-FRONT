import React, { DetailedHTMLProps } from 'react';
import i18n from 'i18next';
import { SAvatar } from './avatar.styled';

export type AvatarSizesType =
  | '2xs'
  | 'xs'
  | 's'
  | 'm'
  | 'l'
  | 'xl'
  | '2xl'
  | 'fit';

interface AvatarProps
  extends DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  bordered?: boolean;
  size?: AvatarSizesType;
}

export const Avatar: React.FC<AvatarProps> = ({
  size = 's',
  bordered = true,
  ...props
}): JSX.Element => {
  return (
    <SAvatar
      alt={i18n.t('utils.any.avatar')}
      bordered={bordered}
      size={size}
      {...props}
      //   [styles.avatar_2xs]: size === '2xs',
      //   [styles.avatar_xs]: size === 'xs',
      //   [styles.avatar_s]: size === 's',
      //   [styles.avatar_m]: size === 'm',
      //   [styles.avatar_l]: size === 'l',
      //   [styles.avatar_xl]: size === 'xl',
      //   [styles.avatar_2xl]: size === '2xl',
      //   [styles.avatar_fit]: size === 'fit',
      // })}
    />
  );
};
