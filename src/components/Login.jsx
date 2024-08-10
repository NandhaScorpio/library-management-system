import logo from "../img/school_logo.svg";
import { useState } from "react";

const Login = () => {
  var id = [
    {
      username: "Nandha",
      password: "1234",
    },
    {
      username: "admin",
      password: "123456",
    },
  ];

  const [typedUsername, setTypedUsername] = useState("");
  const [typedPassword, setTypedPassword] = useState("");
  const [nid, setNid] = useState(false);

  const handleUsername = (evt) => {
    setTypedUsername(evt.target.value);
  };

  const handlePassword = (evt) => {
    setTypedPassword(evt.target.value);
  };

  function checkIdPassword() {
    id.forEach((items) => {
      if (
        items.username === typedUsername &&
        items.password === typedPassword
      ) {
        setNid(true);
      }
    })
    
  }

  return (
    <div className="bg-[#FAFAFA] flex justify-center items-center flex-col p-3 py-24">
      <div className="border-gray-200 border-2 rounded-md m-2 bg-white p-5">
        <div className="">
          <img
            src={logo}
            alt="school-logo"
            width={"300px"}
            className="rounded-md"
          />
        </div>

        <section className="p-4">
          <p className="font-semibold">Username</p>
          <input
            type="text"
            value={typedUsername}
            onChange={handleUsername}
            className="border rounded-sm p-1 m-1"
          />
        </section>

        <section className="p-4 pt-0">
          <p className="font-semibold">Password</p>
          <input
            type="text"
            value={typedPassword}
            onChange={handlePassword}
            className="border rounded-sm p-1 m-1"
          />
        </section>

        <section className="flex justify-center">
          <button
            className="p-2 border bg-blue-500 border-blue-500 rounded-full text-white px-11"
            onClick={checkIdPassword}
          >
            LOGIN
          </button>
        </section>
      </div>
    </div>
  );
};

export default Login;
