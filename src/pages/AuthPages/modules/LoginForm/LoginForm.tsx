import React, { useState } from 'react';
import styles from './LoginForm.module.css';
import { InputField } from '../../../../ui/InputField/InputField';
import { Button } from '../../../../ui/Button/Button';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../../hooks/redux';
import { fetchLogin } from '../../store/auth.thunk';
import { appRoutsPath } from '../../../../routing/routs';
import { LoginFormProps } from './LoginForm.props';

export const LoginForm: React.FC<LoginFormProps> = (): JSX.Element => {
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
      <h1 className={styles.title}>Sign in</h1>
      <InputField
        placeholder={'Username'}
        type={'text'}
        value={inputData.username}
        onChange={(e) => changeHandle(e.target.value, 'username')}
      />
      <InputField
        placeholder={'Password'}
        type={'password'}
        value={inputData.password}
        onChange={(e) => changeHandle(e.target.value, 'password')}
      />
      <Button
        onClick={submitHandler}
        className={styles.btnSubmit}
        theme={'submit'}
      >
        Sign in
      </Button>

      <div className={styles.line} />
      <Button
        onClick={() => {
          navigate(appRoutsPath.RegistrationPage.to);
        }}
        className={styles.btnNewAcc}
        theme={'outline'}
      >
        Create new account
      </Button>
    </div>
  );
};
