import React, { useState } from 'react';
import { Form, Input, Button, Radio, Modal, TreeSelect } from 'antd';
import '../../../styles/styles.css';
import { connect } from 'react-redux';
import useForms from '../../../hooks/useForms';

const initialValues = {
  first_name: 'Hal',
  last_name: 'Jordan',
  email: 'greenguy123@gmail.com',
  location: 'Earth',
  company: 'Bloom Tech, SWE',
  tech_stack: 'React',
  commitment: 'Pair Programming',
};

function EditProfile({ userInfo }) {
  const [formValues, handleChange, clearForm] = useForms(initialValues);

  const [ModalOpen, setModalOpen] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [radio, setRadio] = useState(initialValues);

  const showModal = () => setModalOpen(true);

  const handleCancel = () => setModalOpen(false);

  const handleSubmit = e => {
    setModalOpen(false);
    console.log(formValues);
    clearForm(e);
  };

  //// Styling
  const buttonStyle = {
    backgroundColor: '#003D71',
    color: '#ffffff',
  };

  //// Dropdown Data

  const treeData = [
    {
      title: 'React',
      value: 'React',
      key: 'React',
    },
    {
      title: 'Python',
      value: 'Python',
      key: 'Python',
    },

    {
      title: 'Javascript',
      value: 'Javascript',
      key: 'Javascript',
    },
  ];

  const treeProps = {
    treeData,
    placeholder: 'Please Select',
    treeCheckable: true,
  };

  /////

  return (
    <>
      <Button style={buttonStyle} onClick={showModal}>
        Edit
      </Button>
      <Modal
        visible={ModalOpen}
        onCancel={handleCancel}
        onOk={handleSubmit}
        title="Update Information:"
        okText="Update"
        className="modalStyle"
      >
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 14,
          }}
        >
          <Form.Item
            label="First Name"
            name="firstName"
            initialValue={formValues.first_name}
            onChange={handleChange}
            rules={[
              {
                required: true,
                message: 'First Name Required!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Last Name"
            name="lastName"
            initialValue={formValues.last_name}
            onChange={handleChange}
            rules={[
              {
                required: true,
                message: 'Last Name Required!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            initialValue={formValues.email}
            onChange={handleChange}
            rules={[
              {
                required: true,
                message: 'Email Required!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Location"
            name="location"
            initialValue={formValues.location}
            onChange={handleChange}
            rules={[
              {
                required: true,
                message: 'Location Required!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Company/Position"
            name="company"
            initialValue={formValues.company}
            onChange={handleChange}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Tech Stack"
            name="tech_stack"
            initialValue={formValues.tech_stack}
            onChange={handleChange}
            rules={[
              {
                required: true,
                message: 'Tech Stack Required!',
              },
            ]}
          >
            <TreeSelect {...treeProps} />
          </Form.Item>

          <Form.Item
            label="Commitment"
            name="commitment"
            labelCol={{
              span: 13,
            }}
            wrapperCol={{
              span: 9,
            }}
          >
            <Radio.Group name="commitment" defaultValue={formValues.commitment}>
              <Radio value="1:1 Mentoring" onClick={handleChange}>
                1:1 Mentoring
              </Radio>
              <Radio value="Pair Programming" onClick={handleChange}>
                Pair Programming
              </Radio>
              <Radio value="Neither" onClick={handleChange}>
                Neither
              </Radio>
            </Radio.Group>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

const mapStateToProps = state => {
  return {
    userInfo: state.user.userInfo,
  };
};

export default connect(mapStateToProps)(EditProfile);
