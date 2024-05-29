import React from 'react';
import { useTypedSelector } from '../../../../hooks/redux';
import i18n from 'i18next';
// import { fetchChangeUserInfo } from '../../../app/__data__/request/user.thunk';
import { getAvatarUrlOrHuman } from '../../../../utils/utils';
import { Avatar, theme } from 'antd';
import { SUserBackground, InfoCont, SProfileCont } from './profile-tab.styled';
import { UserOutlined } from '@ant-design/icons';
import { SectionTitle } from '../../components/section-title/section-title';
import { ChangePassword } from '../../components/change-password/change-password';
import { ProfileInfo } from '../../components/profile-info/profile-info';
const { useToken } = theme;

interface ProfileTabProps {}

export const ProfileTab: React.FC<ProfileTabProps> = (): JSX.Element => {
  //TODO refactor all page
  const { token } = useToken();
  // const userPicture = useTypedSelector((state) => state.user.userPic);
  // const [userAvatar] = useState(userPicture || null);

  // console.log(userPicture);

  // const deleteUserAvatar = () => {
  //   dispatch(fetchDeleteUserAvatar(id));
  // };

  // const uploadNewAvatar = async (e: any) => {
  //   const photo = e.target.files[0];
  //   const formData = new FormData();
  //   formData.append('image', photo);
  //   if (id)
  //     dispatch(
  //       fetchUploadNewUserAvatar({
  //         userId: id,
  //         userPic: userPic,
  //         formData: formData,
  //       })
  //     );
  // };

  return (
    <SProfileCont>
      <SectionTitle
        title={'Настройки профиля'}
        desc={'Управляйте вашим профилем FF'}
      />

      <SUserBackground bgColor={token.colorBgContainer}>
        {/* //todo  */}

        {/* <Avatar
          size={80}
          src={getAvatarUrlOrHuman(userPicture)}
          alt={i18n.t('utils.any.avatar')}
          icon={<UserOutlined />}
        /> */}
      </SUserBackground>

      <InfoCont>
        <ProfileInfo />

        <ChangePassword />
      </InfoCont>
    </SProfileCont>
  );
};
