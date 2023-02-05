import React from 'react';
import './Modal.scss';
import cn from 'classnames';
import { Button } from '../Button/Button';

interface IModalProps {
  show: boolean;
  setShow: (boolValue: boolean) => void;
  children: React.ReactNode;
  title?: string;
  onSubmit: () => void;
}

export const Modal: React.FC<IModalProps> = ({
  show,
  setShow,
  children,
  title,
  onSubmit,
}): JSX.Element => {
  return (
    <div
      onClick={() => setShow(false)}
      className={cn('wrap', {
        show: !show,
      })}
    >
      <div onClick={(e) => e.stopPropagation()} className={'cont'}>
        <div className={'up'}>
          <div className={'cont__header'}>
            <h1 className={'cont__header-title'}>{title}</h1>
            <Button type={'close'} onClick={() => setShow(false)}>
              x
            </Button>
          </div>

          <div>{show && children}</div>
        </div>

        <div className={'modal__footer'}>
          <Button type={'outline'} onClick={() => setShow(false)}>
            cancel
          </Button>
          <Button
            type={'submit'}
            onClick={() => {
              onSubmit();
              setShow(false);
            }}
          >
            submit
          </Button>
        </div>
      </div>
    </div>
  );
};
