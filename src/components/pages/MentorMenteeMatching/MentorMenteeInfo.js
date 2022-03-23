import React, { useState } from 'react';
import { Card, Select } from 'antd';
import { EditOutlined } from '@ant-design/icons';

const MentorMenteeInfo = () => {
  const [edit, setEdit] = useState(false);

  const fakeData = [
    {
      information: {
        email: 'random@gmail.com',
        phone: '123-123-123',
        random: 'random',
      },
      Mentors: {
        first: 'Jimmy Bold',
      },
      Mentor_Info: {
        first: {
          email: 'random@gmail.com',
          phone: '123-123-123',
          random: 'random',
        },
      },
    },
  ];

  return (
    <>
      {fakeData.map(data => (
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}
        >
          <Card title="Information" style={{ width: '30%' }}>
            <p>{data.information.email}</p>
            <p>{data.information.phone}</p>
            <p>{data.information.random}</p>
          </Card>
          <Card
            title="Mentors"
            style={{
              width: '30%',
            }}
            extra={<EditOutlined onClick={() => setEdit(!edit)} />}
          >
            {edit ? (
              <div style={{ width: '80%' }}>
                <Select
                  showSearch
                  style={{ width: '100%' }}
                  placeholder="Assign Mentor"
                  value={
                    data.Mentors.first ? data.Mentors.first : 'Assign Mentor'
                  }
                />
              </div>
            ) : (
              <div style={{ width: '80%' }}>
                <p>
                  {!data.Mentors.first ? (
                    <Select
                      showSearch
                      style={{ width: '100%' }}
                      placeholder="Assign Mentor"
                      className="mentors"
                    />
                  ) : (
                    data.Mentors.first
                  )}
                </p>
              </div>
            )}

            {edit ? (
              <div style={{ width: '80%', marginTop: '20px' }}>
                <Select
                  showSearch
                  style={{ width: '100%' }}
                  optionFilterProp="children"
                  placeholder="Assign Mentor"
                  value={
                    data.Mentors.second ? data.Mentors.second : 'Assign Mentor'
                  }
                ></Select>
              </div>
            ) : (
              <div style={{ width: '80%' }}>
                <p>
                  {!data.Mentors.second ? (
                    <Select
                      showSearch
                      style={{ width: '100%' }}
                      value={
                        data.Mentors.second
                          ? data.Mentors.second
                          : 'Assign Mentor'
                      }
                      placeholder="Assign Mentor"
                    />
                  ) : (
                    data.Mentors.second
                  )}
                </p>
              </div>
            )}
            {edit ? (
              <div style={{ width: '80%', marginTop: '20px' }}>
                <Select
                  showSearch
                  style={{ width: '100%' }}
                  placeholder="Assign Mentor"
                  value={
                    data.Mentors.third ? data.Mentors.third : 'Assign Mentor'
                  }
                />
              </div>
            ) : (
              <div style={{ width: '80%' }}>
                <p>
                  {!data.Mentors.third ? (
                    <Select
                      showSearch
                      style={{ width: '100%' }}
                      value={
                        data.Mentors.third
                          ? data.Mentors.third
                          : 'Assign Mentor'
                      }
                      placeholder="Assign Mentor"
                    />
                  ) : (
                    data.Mentors.third
                  )}
                </p>
              </div>
            )}
          </Card>
          <Card title="Mentor Information" style={{ width: '30%' }}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </div>
      ))}
    </>
  );
};

export default MentorMenteeInfo;
