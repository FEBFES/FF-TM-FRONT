import React, { useState } from 'react';
import { InputField } from '../../../../ui/InputField/InputField';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../../../ui/Button/Button';
import { useAppDispatch } from '../../../../hooks/redux';
import { fetchLogin } from '../../store/auth.thunk';
import { appRoutsPath } from '../../../../routing/routs';
import { useTranslation } from 'react-i18next';
import { SLoginForm, SButtonSubmit } from './login-form.styled';
import { Title } from '../../../../ui/Typography';
import { Divider } from '../../../../ui/Divider/Divider';

interface LoginFormProps {}

export const LoginForm: React.FC<LoginFormProps> = (): JSX.Element => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const [inputData, setInputData] = useState({
    username: '',
    password: '',
  });
  const navigate = useNavigate();

  const submitHandler = () => {
    dispatch(fetchLogin(inputData))
      .unwrap()
      .then(() => {
        navigate(appRoutsPath.ProjectPage.to);
      });
  };

  const changeHandle = (inputStr: string, label: string) => {
    setInputData({
      ...inputData,
      [label]: inputStr,
    });
  };

  return (
    <SLoginForm>
      <Title level={'h5'}>{t('pages.login.form.title')}</Title>
      <InputField
        placeholder={t('pages.login.form.input.username.placeholder')}
        type={'text'}
        value={inputData.username}
        onChange={(e) => changeHandle(e.target.value, 'username')}
      />
      <InputField
        placeholder={t('pages.login.form.input.password.placeholder')}
        type={'password'}
        value={inputData.password}
        onChange={(e) => changeHandle(e.target.value, 'password')}
      />
      <SButtonSubmit onClick={submitHandler} variant={'primary'}>
        {t('pages.login.form.button.submit')}
      </SButtonSubmit>

      <Divider />

      <Button
        onClick={() => {
          navigate(appRoutsPath.RegistrationPage.to);
        }}
        variant={'submit'}
      >
        {t('pages.login.form.button.newAcc')}
      </Button>
    </SLoginForm>
  );
};
