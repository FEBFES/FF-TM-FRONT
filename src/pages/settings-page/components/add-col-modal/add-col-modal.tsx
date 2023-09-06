import React, { useState } from 'react';
import { Modal, Button, InputField, Title } from '../../../../ui';
import { useAppDispatch, useTypedSelector } from '../../../../hooks/redux';
import { fetchAddNewCol } from '../../../kanban-page/store/kanban.thunk';
import i18n from 'i18next';
import {
  SModalContainer,
  SModalFooter,
  SModalHeader,
  SModalMain,
} from './add-col-modal.styled';

export interface AddColModalProps {
  show: boolean;
  setShow: (bool: boolean) => void;
}

export const AddColModal: React.FC<AddColModalProps> = ({
  show,
  setShow,
}): JSX.Element => {
  const [colName, setColName] = useState<string>('');
  const [colDesc, setColDesc] = useState<string>('');
  const projId = useTypedSelector((state) => state.curProj.projId);
  const dispatch = useAppDispatch();

  const addNewColumn = () => {
    dispatch(
      fetchAddNewCol({
        name: colName,
        description: colDesc,
        projId: String(projId),
      })
    ).finally(() => {
      setShow(false);
      setColDesc('');
      setColName('');
    });
  };

  return (
    <Modal show={show} setShow={setShow}>
      <SModalContainer>
        <SModalHeader>
          <Title level={'h6'}>
            {i18n.t('pages.settings.tabs.project.column.addNew')}
          </Title>

          {/*<Button theme={'close'} onClick={() => setShow(false)} />*/}
        </SModalHeader>

        <SModalMain>
          <InputField
            withLabel
            value={colName}
            onChange={(e) => setColName(e.target.value)}
            placeholder={i18n.t('utils.any.name')}
            type={'text'}
          />
          <InputField
            withLabel
            value={colDesc}
            onChange={(e) => setColDesc(e.target.value)}
            placeholder={i18n.t('utils.any.description')}
            type={'text'}
          />
        </SModalMain>

        <SModalFooter>
          <Button variant={'secondary'} onClick={() => setShow(false)}>
            {i18n.t('utils.buttons.back')}
          </Button>
          <Button
            disabled={colName === ''}
            variant={'primary'}
            onClick={addNewColumn}
          >
            {i18n.t('utils.buttons.create')}
          </Button>
        </SModalFooter>
      </SModalContainer>
    </Modal>
  );
};
