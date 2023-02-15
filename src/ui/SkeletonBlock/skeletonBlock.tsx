import React from 'react';
import styles from './skeletonBlock.module.css';
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
    <div className={styles.skeletonCont}>
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
      className={styles.skeletonItem}
      style={{
        height: height + 'px',
        width: width + 'px',
      }}
    ></div>
  );
};
