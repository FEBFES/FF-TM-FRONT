import React, { useState } from 'react';
import styles from './RegistrationForm.module.css';
import { InputField } from '../../../../ui/InputField/InputField';
import { Button } from '../../../../ui/Button/Button';
import { useAppDispatch } from '../../../../hooks/redux';
import { fetchRegistration } from '../../store/auth.thunk';
import { IRegisterFormDataType } from '../../store/auth.type';
import { Link, useNavigate } from 'react-router-dom';

interface RegistrationFormProps {}

export const RegistrationForm: React.FC<
  RegistrationFormProps
> = (): JSX.Element => {
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
        navigate('/Login');
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
      <h1 className={styles.regform__title}>Registration</h1>
      <InputField
        type={'text'}
        label={'email'}
        value={inputData.email}
        onChange={(data) => changeHandle(data, 'email')}
      />
      <InputField
        type={'text'}
        label={'username'}
        value={inputData.username}
        onChange={(data) => changeHandle(data, 'username')}
      />
      <InputField
        type={'text'}
        label={'password'}
        value={inputData.password}
        onChange={(data) => changeHandle(data, 'password')}
      />
      <Button
        className={styles.regform__btn}
        type={'submit'}
        onClick={submitHandler}
      >
        Submit
      </Button>

      <div className={styles.btnLinkLogin}>
        <span>Already have an account? </span>
        <Link to={'/Login'}>Log in</Link>
      </div>
    </div>
  );
};
