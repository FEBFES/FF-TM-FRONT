import React, { useState } from 'react';
import styles from './LoginForm.module.css';
import { InputField } from '../../../../ui/InputField/InputField';
import { Button } from '../../../../ui/Button/Button';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../../hooks/redux';
import { fetchLogin } from '../../store/auth.thunk';
import { appRoutsPath } from '../../../../routing/routs';
import { useTranslation } from 'react-i18next';

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
    <div className={styles.loginForm}>
      <h1 className={styles.title}>{t('pages.login.form.title')}</h1>
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
      <Button
        onClick={submitHandler}
        className={styles.btnSubmit}
        variant={'primary'}
      >
        {t('pages.login.form.button.submit')}
      </Button>

      <div className={styles.line} />
      <Button
        onClick={() => {
          navigate(appRoutsPath.RegistrationPage.to);
        }}
        className={styles.btnNewAcc}
        variant={'submit'}
      >
        {t('pages.login.form.button.newAcc')}
      </Button>
    </div>
  );
};
