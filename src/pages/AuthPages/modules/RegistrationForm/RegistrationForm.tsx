import React, { useState } from 'react';
import './RegistrationForm.scss';
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
    <div className={'regform'}>
      <h1 className={'regform__title'}>Registration</h1>
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
        className={'regform__btn'}
        type={'submit'}
        onClick={submitHandler}
      >
        Submit
      </Button>

      <div className={'btn-link-login'}>
        <span>Already have an account? </span>
        <Link to={'/Login'}>Log in</Link>
      </div>
    </div>
  );
};
