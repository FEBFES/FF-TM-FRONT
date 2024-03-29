import React, { useState } from 'react';
import { InputField } from '../../../../ui/input-field/Input-field';
import { useAppDispatch } from '../../../../hooks/redux';
import { fetchRegistration } from '../../store/auth.thunk';
import { IRegisterFormDataType } from '../../store/auth.type';
import { Link, useNavigate } from 'react-router-dom';
import { appRoutsPath } from '../../../../routing/routs';
import { useTranslation } from 'react-i18next';
import {
  SButtonLingLogin,
  SRegButton,
  SRegistrationForm,
} from './registration-form.styled';
import { Title } from '../../../../ui/typography';

interface RegistrationFormProps {}

export const RegistrationForm: React.FC<
  RegistrationFormProps
> = (): JSX.Element => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [inputData, setInputData] = useState<IRegisterFormDataType>({
    email: '',
    username: '',
    password: '',
  });

  const submitHandler = () => {
    dispatch(fetchRegistration(inputData))
      .unwrap()
      .then(() => {
        navigate(appRoutsPath.LoginPage.to);
      });
  };

  const changeHandle = (data: string, label: any) => {
    setInputData({
      ...inputData,
      [label]: data,
    });
  };

  return (
    <SRegistrationForm>
      <Title level={'h6'}>{t('pages.registration.title')}</Title>
      <InputField
        placeholder={t('pages.registration.input.email.placeholder')}
        type={'text'}
        value={inputData.email}
        onChange={(e) => changeHandle(e.target.value, 'email')}
      />
      <InputField
        placeholder={t('pages.registration.input.username.placeholder')}
        type={'text'}
        value={inputData.username}
        onChange={(e) => changeHandle(e.target.value, 'username')}
      />
      <InputField
        placeholder={t('pages.registration.input.password.placeholder')}
        type={'password'}
        value={inputData.password}
        onChange={(e) => changeHandle(e.target.value, 'password')}
      />
      <SRegButton variant={'submit'} onClick={submitHandler}>
        {t('pages.registration.button.submit')}
      </SRegButton>

      <SButtonLingLogin>
        <span>{t('pages.registration.login.label')}</span>
        <Link to={appRoutsPath.LoginPage.to}>
          {t('pages.registration.login.action')}
        </Link>
      </SButtonLingLogin>
    </SRegistrationForm>
  );
};
