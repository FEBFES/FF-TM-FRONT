import React from 'react';
import './skeletonBlock.scss';
import { v4 } from 'uuid';

interface ISkeletonBlockProps {
  itemsCount: number;
  width: number;
  height: number;
}

export const SkeletonBlock: React.FC<ISkeletonBlockProps> = ({
  itemsCount,
  width,
  height,
}) => {
  const arr = new Array(itemsCount).fill(0);

  return (
    <div className={'skeleton-cont'}>
      {arr.map(() => {
        return <SkeletonItem key={v4()} width={width} height={height} />;
      })}
    </div>
  );
};

const SkeletonItem: React.FC<{ width: number; height: number }> = ({
  width,
  height,
}): JSX.Element => {
  return (
    <div
      className={'skeleton-item'}
      style={{
        height: height + 'px',
        width: width + 'px',
      }}
    ></div>
  );
};
