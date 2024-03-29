import { useEffect, useState } from "react";
import { FiUser } from "react-icons/fi";
import useUsers from "../../services/api/useUsers";
import { DatePicker, Form, Input, Select } from "antd";
import timeConverter from "../../utils/timeConverter";
import dayjs from "dayjs";

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
    const payload = {
      fullName: value.fullName,
      email: value.email,
      telephone: value.telephone.trim(),
      birthDate: timeConverter(value.birthDate),
      gender: value.gender,
    };
    editUser(payload, user.userId, user.token);
  };
  console.log(new Date(users.birthDate));
  const worker = {
    gender: users.gender,
    fullName: users.fullName,
    email: users.email,

    telephone: users.telephone,
  };

  console.log(worker);
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
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-2">
            <div className="col-span-1">
              <h1 className="text-[#a5a5a8] mb-1">Name</h1>
              <p>{users.fullName || `${user.givenName} ${user.familyName}`}</p>
            </div>
            <div className="col-span-1">
              <h1 className="text-[#a5a5a8] mb-1">Gender</h1>
              <p>{users.gender ? "Laki-laki" : "Perempuan"}</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-2">
            <div className="col-span-1">
              <h1 className="text-[#a5a5a8] mb-1">Mobile Phone</h1>
              <p>{users.telephone}</p>
            </div>
            <div className="col-span-1">
              <h1 className="text-[#a5a5a8] mb-1">Email</h1>
              <p>{users.email || user.email}</p>
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
          <Form onFinish={handleSubmit} requiredMark={false} layout="vertical" name="basic" initialValues={worker} autoComplete="off">
            <div className="grid grid-cols-2 gap-5">
              <Form.Item label="Gender" name="gender" className="border-b ">
                <Select placeholder="Male" bordered={false} options={dataGender} />
              </Form.Item>

              <Form.Item label="Birthdate" name="birthDate" className="border-b rounded-none">
                <DatePicker defaultValue={dayjs(users.birthDate)} bordered={false} format={"YYYY-MM-DD"} />
              </Form.Item>
              <Form.Item
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
                className="border-b rounded-none"
              >
                <Input bordered={false} />
              </Form.Item>
              <Form.Item
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
              <Form.Item label="Telephone" name="telephone" className="border-b">
                <Input bordered={false} />
              </Form.Item>
            </div>

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
