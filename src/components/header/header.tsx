import React from 'react';
import {
  Avatar,
  Breadcrumb,
  Badge,
  Flex,
  Layout,
  Space,
  Typography,
  Divider,
  Button,
  Grid,
  theme,
} from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import { BellOutlined, UserOutlined } from '@ant-design/icons';
import { useAppDispatch, useTypedSelector } from '../../hooks/redux';
import { getAvatarUrlOrHuman } from '../../utils/utils';
// import { setIsAuth } from '../../__data__/reducers/auth.slice';
import { appRoutsPath } from '../../routing/routs';
import { SUserSection } from './header.styled';

export const Header = () => {
  // const user = useTypedSelector((state) => state.user);
  const location = useLocation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { useBreakpoint } = Grid;

  const getBreadcrumb = () => {
    const urls = location.pathname.split('/');
    return urls.map((url) => {
      if (!url) return { title: 'FF' };
      return {
        title: url,
      };
    });
  };

  const logoutHandler = () => {
    // dispatch(setIsAuth(false));
    navigate(appRoutsPath.LoginPage.to);
  };

  return (
    <Layout.Header
      style={{
        height: 70,
        background: theme.useToken().token.colorBgContainer,
      }}
    >
      <Flex
        style={{ height: '100%' }}
        justify={'space-between'}
        align={'center'}
      >
        <Breadcrumb items={getBreadcrumb()} />

        <Flex align={'center'}>
          <Space>
            <Badge size={'small'} count={22}>
              <Button type={'text'}>
                <BellOutlined />
              </Button>
            </Badge>

            <Divider style={{ marginLeft: '30px' }} type={'vertical'} />

            <SUserSection
              menu={{
                items: [
                  {
                    key: 'profile',
                    label: (
                      <Button
                        size={'small'}
                        type={'link'}
                        onClick={() =>
                          navigate(`/${appRoutsPath.SettingsPage.to}/Profile`)
                        }
                      >
                        Профиль
                      </Button>
                    ),
                  },
                  {
                    key: 'logout',
                    label: (
                      <Button
                        onClick={logoutHandler}
                        size={'small'}
                        type={'link'}
                        danger
                      >
                        Выйти
                      </Button>
                    ),
                  },
                ],
              }}
              trigger={['click']}
            >
              <Space>
                {/* <Avatar
                  src={getAvatarUrlOrHuman(user.userPic)}
                  icon={<UserOutlined />}
                />
                {!useBreakpoint().xs && (
                  <Typography>{user.username || user.displayName}</Typography>
                )} */}
              </Space>
            </SUserSection>
          </Space>
        </Flex>
      </Flex>
    </Layout.Header>
  );
};
