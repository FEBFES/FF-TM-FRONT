import React, { useState } from 'react';
import styles from './RegistrationForm.module.css';
import { InputField } from '../../../../ui/InputField/InputField';
import { Button } from '../../../../ui/Button/Button';
import { useAppDispatch } from '../../../../hooks/redux';
import { fetchRegistration } from '../../store/auth.thunk';
import { IRegisterFormDataType } from '../../store/auth.type';
import { Link, useNavigate } from 'react-router-dom';
import { appRoutsPath } from '../../../../routing/routs';
import { RegistrationFormProps } from './RegistrationForm.props';
import { useTranslation } from 'react-i18next';

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
    <div className={styles.regform}>
      <h1 className={styles.regform__title}>{t('pages.registration.title')}</h1>
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
      <Button
        className={styles.regform__btn}
        theme={'submit'}
        onClick={submitHandler}
      >
        {t('pages.registration.button.submit')}
      </Button>

      <div className={styles.btnLinkLogin}>
        <span>{t('pages.registration.login.label')}</span>
        <Link to={appRoutsPath.LoginPage.to}>
          {t('pages.registration.login.action')}
        </Link>
      </div>
    </div>
  );
};
