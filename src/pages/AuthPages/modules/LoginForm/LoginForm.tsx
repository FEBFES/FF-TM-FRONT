import React, { useState } from 'react';
import './LoginForm.scss';
import { InputField } from '../../../../ui/InputField/InputField';
import { Button } from '../../../../ui/Button/Button';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../../hooks/redux';
import { fetchLogin } from '../../store/auth.thunk';

interface LoginFormProps {}

export const LoginForm: React.FC<LoginFormProps> = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const [inputData, setInputData] = useState({
    username: '',
    password: '',
  });
  const navigate = useNavigate();

  const changeHandle = (inputStr: string, label: string) => {
    setInputData({
      ...inputData,
      [label]: inputStr,
    });
  };

  return (
    <div className={'loginForm'}>
      <h1 className={'title'}>Sign in</h1>
      <InputField
        type={'text'}
        label={'Username'}
        value={inputData.username}
        onChange={(e) => changeHandle(e, 'username')}
      />
      <InputField
        type={'text'}
        label={'Password'}
        value={inputData.password}
        onChange={(e) => changeHandle(e, 'password')}
      />
      <Button
        onClick={() => dispatch(fetchLogin(inputData))}
        className={'btn-submit'}
        type={'submit'}
      >
        Sign in
      </Button>

      <div className={'line'} />
      <Button
        onClick={() => {
          navigate('/Registration');
        }}
        className={'btn-new-acc'}
        type={'outline'}
      >
        Create new account
      </Button>
    </div>
  );
};
