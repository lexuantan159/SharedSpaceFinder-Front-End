import "../../../../node_modules/antd/dist/reset.css";
import "./TableOwner.css";
import { Table, Modal, Input } from "antd";
import { useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

function TableOwner() {
  const [isEditing, setIsEditing] = useState(false);
  const [editingOwner, setEditingOwner] = useState(null);
  const [dataSource, setDataSource] = useState([
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
      address: "Thanh Pho Ho Chi Minh",
    },
    {
      id: 3,
      name: "Xuan Name",
      email: "xn@gmail.com",
      phone: "09129292223",
      address: "Da Nang",
    },
  ]);
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
                onEditOwner(record);
              }}
            />
            <DeleteOutlined
              onClick={() => {
                onDeleteOwner(record);
              }}
              style={{ color: "red", marginLeft: 12 }}
            />
          </>
        );
      },
    },
  ];

  const onDeleteOwner = (record) => {
    Modal.confirm({
      title: "Are you sure, you want to delete this Owner record?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        setDataSource((pre) => {
          return pre.filter((user) => user.id !== record.id);
        });
      },
    });
  };
  const onEditOwner = (record) => {
    setIsEditing(true);
    setEditingOwner({ ...record });
  };
  const resetEditing = () => {
    setIsEditing(false);
    setEditingOwner(null);
  };
  return (
    <div className="table-owner">
      <header className="table-owner-header">
        <Table columns={columns} dataSource={dataSource}></Table>
        <Modal
          title="Edit Owner"
          visible={isEditing}
          okText="Save"
          onCancel={() => {
            resetEditing();
          }}
          onOk={() => {
            setDataSource((pre) => {
              return pre.map((user) => {
                if (user.id === editingOwner.id) {
                  return editingOwner;
                } else {
                  return user;
                }
              });
            });
            resetEditing();
          }}
        >
          <Input className="name-input"
            value={editingOwner?.name}
            onChange={(e) => {
              setEditingOwner((pre) => {
                return { ...pre, name: e.target.value };
              });
            }}
          />
          <Input className="name-input"
            value={editingOwner?.email}
            onChange={(e) => {
              setEditingOwner((pre) => {
                return { ...pre, email: e.target.value };
              });
            }}
          />
          <Input className="name-input"
            value={editingOwner?.phone}
            onChange={(e) => {
              setEditingOwner((pre) => {
                return { ...pre, phone: e.target.value };
              });
            }}
          />
          <Input className="name-input"
            value={editingOwner?.address}
            onChange={(e) => {
              setEditingOwner((pre) => {
                return { ...pre, address: e.target.value };
              });
            }}
          />
        </Modal>
      </header>
    </div>
  );
}

export default TableOwner;