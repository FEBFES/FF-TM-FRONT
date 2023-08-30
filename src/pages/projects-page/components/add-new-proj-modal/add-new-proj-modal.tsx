import React, { useState } from 'react';
import { fetchAddProject } from '../../store/projects.thunk';
import { InputField } from '../../../../ui/input-field/Input-field';
import { Modal } from '../../../../ui/modal/modal';
import { useAppDispatch } from '../../../../hooks/redux';
import { Button } from '../../../../ui/button/button';
import i18n from 'i18next';
import { Title } from '../../../../ui/typography';
import {
  SPageContainer,
  SPageContainerHeader,
  SPageContainerFooter,
  SProjectContainer,
} from './add-new-proj-modal.styled';

interface AddNewProjModalProps {
  show: boolean;
  setShow: (bool: boolean) => void;
}

export const AddNewProjModal: React.FC<AddNewProjModalProps> = ({
  show,
  setShow,
}): JSX.Element => {
  const dispatch = useAppDispatch();
  const [name, setName] = useState<string>('');
  const [desc, setDesc] = useState<string>('');

  return (
    <Modal show={show} setShow={setShow}>
      <SPageContainer>
        <SPageContainerHeader>
          <Title>{i18n.t('pages.projects.header.addBtn')}</Title>
          <Button btnType={'close'} onClick={() => setShow(false)} />
        </SPageContainerHeader>

        <SProjectContainer>
          <InputField
            placeholder={i18n.t('utils.any.name')}
            withLabel
            type={'text'}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <InputField
            placeholder={i18n.t('utils.any.description')}
            withLabel
            type={'text'}
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </SProjectContainer>

        <SPageContainerFooter>
          <Button
            variant={'secondary'}
            onClick={() => {
              setShow(false);
            }}
          >
            {i18n.t('utils.buttons.cancel')}
          </Button>
          <Button
            variant={'primary'}
            onClick={() => {
              dispatch(fetchAddProject({ name, desc }))
                .unwrap()
                .finally(() => {
                  setShow(false);
                });
            }}
          >
            {i18n.t('utils.buttons.create')}
          </Button>
        </SPageContainerFooter>
      </SPageContainer>
    </Modal>
  );
};
