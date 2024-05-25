import { Avatar, Button, Flex, Space, TableProps, Typography } from 'antd';
import { IMember } from '../../../kanban-page/store/kanban.type';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

// export interface IMember {
//     displayName: string | null;
//     email: string | null;
//     firstName: string | null;
//     id: number | null;
//     lastName: string | null;
//     userPic: string | null;
//     username: string | null;
//     roleOnProject: IMemberRole;
// }

export const columns: TableProps<IMember>['columns'] = [
  {
    title: 'Никнейм',
    dataIndex: 'displayName',
    key: 'displayName',
    render: (text, record) => (
      <Flex>
        <Space>
          <Avatar src={record.userPic} />
          <Typography>{text}</Typography>
        </Space>
      </Flex>
    ),
  },
  {
    title: 'Почта',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Имя',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Фамилия',
    dataIndex: 'lastName',
    key: 'lastName',
  },
  {
    title: 'Роль',
    dataIndex: 'roleOnProject',
    key: 'roleOnProject',
  },
  {
    title: 'Действия',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <Button type={'default'}>
          <EditOutlined />
        </Button>
        <Button danger type={'default'}>
          <DeleteOutlined />
        </Button>
      </Space>
    ),
  },
];
