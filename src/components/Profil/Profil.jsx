import { useEffect, useState } from "react";
import { FiUser } from "react-icons/fi";
import useUsers from "../../services/api/useUsers";
const Profil = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const { getMe, users } = useUsers();
  useEffect(() => {
    getMe(user.userId, user.token);
  }, [user.userId]);

  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [birth, setBirth] = useState("");
  const [disable, setDisable] = useState(true);

  const editUser = (e) => {
    e.preventDefault();

    const payload = {
      fullName: name,
      email: email,
      telephone: phone,
      birthDate: birth,
      gender: true,
    };
    console.log(payload);
  };
  return (
    <form onSubmit={(e) => editUser(e)}>
      <div className="bg-[#f1f5f5] px-10 py-4 rounded-lg ">
        <h1 className="flex items-center text-2xl ">
          <FiUser className="mr-4" /> Profile
        </h1>
        <hr className="my-4" />
        <div className="flex flex-col gap-y-3">
          <div className="grid grid-cols-2">
            <div className="col-span-1">
              <h1 className="text-[#a5a5a8] mb-1">Name</h1>
              <input value={users.fullName} disabled={disable} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="col-span-1">
              <h1 className="text-[#a5a5a8] mb-1">Gender</h1>
              <input value={users.gender ? "Laki-laki" : "Perempuan"} disabled={disable} onChange={(e) => setGender(e.target.value)} />
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="col-span-1">
              <h1 className="text-[#a5a5a8] mb-1">Mobile Phone</h1>
              <input value={users.telephone} disabled={disable} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div className="col-span-1">
              <h1 className="text-[#a5a5a8] mb-1">Email</h1>
              <input value={users.email} disabled={disable} onChange={(e) => setEmail(e.target.value)} />
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="col-span-1">
              <h1 className="text-[#a5a5a8] mb-1">Birth Date</h1>
              <input value={users.birthDate} type="date" disabled={disable} onChange={(e) => setBirth(e.target.value)} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-5">
        <button className="px-5 py-2 bg-[#df9947] rounded-lg text-white mr-4" onClick={() => setDisable(!disable)}>
          Edit
        </button>
        <button className="px-5 py-2 bg-[#3e5cb8] rounded-lg text-white" type="submit">
          Save
        </button>
      </div>
    </form>
  );
};

export default Profil;
