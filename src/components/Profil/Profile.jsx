import { useEffect, useState } from "react";
import { FiUser } from "react-icons/fi";
import useUsers from "../../services/api/useUsers";
import { DatePicker, Form, Input, Select } from "antd";

const Profile = () => {
  const { getMe, users, editUser } = useUsers();
  const user = JSON.parse(localStorage.getItem("user"));

  const dataGender = [
    {
      value: true,
      label: "Male",
    },
    {
      value: false,
      label: "Female",
    },
  ];

  const handleSubmit = async (value) => {
    editUser(value, user.userId, user.token);
  };

  useEffect(() => {
    getMe(user.userId, user.token);
  }, []);

  const [showEdit, setShowEdit] = useState(false);
  return (
    <div className="bg-[#f1f5f5] px-10 py-4 rounded-lg">
      <div className="flex items-center justify-between pt-5">
        <h1 className="flex items-center text-xl">
          <FiUser className="mr-4" /> Profile
        </h1>
        <button onClick={() => setShowEdit(true)} className={showEdit ? "hidden" : "mr-4 font-semibold text-[#3e5cb8]"}>
          Edit
        </button>
      </div>

      <hr className="my-4"></hr>
      {!showEdit ? (
        <div className="flex flex-col gap-y-3">
          <div className="grid grid-cols-2">
            <div className="col-span-1">
              <h1 className="text-[#a5a5a8] mb-1">Name</h1>
              <p>{users.fullName || `${user.givenName} ${user.familyName}`}</p>
            </div>
            <div className="col-span-1">
              <h1 className="text-[#a5a5a8] mb-1">Gender</h1>
              <p>{users.gender ? "Laki-laki" : "Perempuan" || user.gender === null ? "null" : "null"}</p>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="col-span-1">
              <h1 className="text-[#a5a5a8] mb-1">Mobile Phone</h1>
              <p>{users.telephone}</p>
            </div>
            <div className="col-span-1">
              <h1 className="text-[#a5a5a8] mb-1">Email</h1>
              <p>{users.email || user.email }</p>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="col-span-1">
              <h1 className="text-[#a5a5a8] mb-1">Birth Date</h1>
              <p>{users.birthDate}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="mx-2 py-4">
          <Form
            onFinish={handleSubmit}
            requiredMark={false}
            layout="vertical"
            name="basic"
            initialValues={{
              remember: true,
            }}
            autoComplete="off"
          >
            <div className="flex gap-16">
              <Form.Item initialValue={users.gender} label="Gender" name="gender" className="border-b w-[100px]">
                <Select placeholder="Male" bordered={false} options={dataGender} />
              </Form.Item>
              <Form.Item label="Birthdate" name="birthDate" className="border-b rounded-none">
                <DatePicker format={"YYYY-MM-DD"} bordered={false} />
              </Form.Item>
            </div>
            <div className="flex gap-16">
              <Form.Item
                initialValue={users.fullName}
                label="Fullname"
                name="fullName"
                rules={[
                  {
                    whitespace: true,
                    message: "can not empty",
                  },
                  {
                    min: 5,
                    message: "Must be at least 5 characters",
                  },
                ]}
                hasFeedback
                className="border-b rounded-none"
              >
                <Input bordered={false} />
              </Form.Item>
              <Form.Item
                initialValue={users.email}
                label="Email"
                name="email"
                rules={[
                  {
                    whitespace: true,
                    message: "can not empty",
                  },
                  {
                    min: 5,
                    message: "Must be at least 5 characters",
                  },
                ]}
                hasFeedback
                className="border-b rounded-none"
              >
                <Input bordered={false} />
              </Form.Item>
            </div>

            <Form.Item initialValue={users.telephone} label="Telephone" name="telephone" className="border-b">
              <Input bordered={false} />
            </Form.Item>
            <br></br>
            <div className="flex justify-end my-4 gap-4 mr-4">
              <button onClick={() => setShowEdit(false)} className="px-5 py-2 text-[18px] leading-[25px] border-none rounded-lg bg-[#db053f] text-white">
                Cancel
              </button>

              <button className="px-7 py-2 text-[18px] leading-[25px] border-none rounded-lg bg-[#df9947] text-white">Edit</button>
            </div>
          </Form>
        </div>
      )}
    </div>
  );
};

export default Profile;
