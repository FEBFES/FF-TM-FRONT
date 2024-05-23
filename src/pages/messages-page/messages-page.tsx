import React from 'react';
import { Avatar, Col, Divider, List, Row } from 'antd';

interface MessagesPageProps {}

const data = [
  {
    title: 'Денис Обрамов',
  },
  {
    title: 'Ваня Шишкин',
  },
  {
    title: 'Нурлан Сабуров',
  },
];

export const MessagesPage: React.FC<MessagesPageProps> = (): JSX.Element => {
  return (
    <Row style={{ minHeight: '100%' }}>
      <Col span={5} style={{ padding: '10px' }}>
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item, index) => (
            <List.Item>
              <List.Item.Meta
                avatar={
                  <Avatar
                    src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
                  />
                }
                title={item.title}
                description="Ant Des Ant UED Team"
              />
            </List.Item>
          )}
        />
      </Col>
      <Col span={19}></Col>
    </Row>
  );
};
