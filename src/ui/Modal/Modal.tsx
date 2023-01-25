import React from 'react';
import './Modal.scss';
import cn from 'classnames';

interface IModalProps {
  show: boolean;
  setShow: (boolValue: boolean) => void;
  children: React.ReactNode;
  title?: string;
}

export const Modal: React.FC<IModalProps> = ({
  show,
  setShow,
  children,
  title,
}): JSX.Element => {
  return (
    <div
      onClick={() => setShow(false)}
      className={cn('wrap', {
        show: !show,
      })}
    >
      <div onClick={(e) => e.stopPropagation()} className={'cont'}>
        <div className={'cont__header'}>
          <h1 className={'cont__header-title'}>{title}</h1>
          <button onClick={() => setShow(false)}>x</button>
        </div>
        {children}
      </div>
    </div>
  );
};
