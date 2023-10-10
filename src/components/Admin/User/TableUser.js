import "../../../../node_modules/antd/dist/reset.css";
import "./TableUser.css";
import { Table, Modal, Input } from "antd";
import { useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

function TableUser() {
  const data = [
    {
      id: 1,
      name: "Mit Blue",
      email: "vuacatxe@gmail.com",
      phone: "0919992223",
      address: "Da Nang",
    },
    {
      id: 2,
      name: "Dibang",
      email: "diabng@gmail.com",
      phone: "0912221113",
      address: "Saigon",
    },
    {
      id: 3,
      name: "Xuan Name",
      email: "xn@gmail.com",
      phone: "09129292223",
      address: "Ha Noi",
    },
  ]
  const [isEditing, setIsEditing] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [dataSource, setDataSource] = useState(data);

  const [value, setValue] = useState('');
  const columns = [
    {
      key: "1",
      title: "ID",
      dataIndex: "id",
    },
    {
      key: "2",
      title: "Name",
      dataIndex: "name",
    },
    {
      key: "3",
      title: "Email",
      dataIndex: "email",
    },
    {
      key: "4",
      title: "Phone",
      dataIndex: "phone",
    },
    {
      key: "5",
      title: "Address",
      dataIndex: "address",
    },
    {
      key: "6",
      title: "",
      render: (record) => {
        return (
          <>
            <EditOutlined
              onClick={() => {
                onEditUser(record);
              }}
            />
            <DeleteOutlined
              onClick={() => {
                onDeleteUser(record);
              }}
              style={{ color: "red", marginLeft: 12 }}
            />
          </>
        );
      },
    },
  ];

  const onDeleteUser = (record) => {
    Modal.confirm({
      title: "Are you sure, you want to delete this user record?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        setDataSource((pre) => {
          return pre.filter((user) => user.id !== record.id);
        });
      },
    });
  };
  const onEditUser = (record) => {
    setIsEditing(true);
    setEditingUser({ ...record });
  };
  const resetEditing = () => {
    setIsEditing(false);
    setEditingUser(null);
  };


  

  return (
    
    <div className="table-user">
      <header className="table-user-header">
        <Table columns={columns} dataSource={dataSource}></Table>
        <Modal
          title="Edit User"
          visible={isEditing}
          okText="Save"
          onCancel={() => {
            resetEditing();
          }}
          onOk={() => {
            setDataSource((pre) => {
              return pre.map((user) => {
                if (user.id === editingUser.id) {
                  return editingUser;
                } else {
                  return user;
                }
              });
            });
            resetEditing();
          }}
        >
          <Input className="name-input"
            value={editingUser?.name}
            onChange={(e) => {
              setEditingUser((pre) => {
                return { ...pre, name: e.target.value };
              });
            }}
          />
          <Input className="name-input"
            value={editingUser?.email}
            onChange={(e) => {
              setEditingUser((pre) => {
                return { ...pre, email: e.target.value };
              });
            }}
          />
          <Input className="name-input"
            value={editingUser?.phone}
            onChange={(e) => {
              setEditingUser((pre) => {
                return { ...pre, phone: e.target.value };
              });
            }}
          />
          <Input className="name-input"
            value={editingUser?.address}
            onChange={(e) => {
              setEditingUser((pre) => {
                return { ...pre, address: e.target.value };
              });
            }}
          />
        </Modal>
      </header>
    </div>
  );
}

export default TableUser;