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
    />
  );
};
