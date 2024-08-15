import axios from "axios";
import logo from "../img/school_logo.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [id, setId] = useState([]);

  axios
      .get("http://localhost:5000/")
      .then((data) => setId(data.data))
      .catch(() => console.log("Error"));

  const navigate = useNavigate();

  const [typedUsername, setTypedUsername] = useState("");
  const [typedPassword, setTypedPassword] = useState("");
  const [nid, setNid] = useState(false);
  const [nid2, set2Nid] = useState(true);

  const handleUsername = (evt) => {
    setTypedUsername(evt.target.value);
  };

  const handlePassword = (evt) => {
    setTypedPassword(evt.target.value);
  };

  function checkIdPassword() {

    id.forEach((items, index) => {
      if (
        items.id[index].username === typedUsername &&
        items.id[index].password === typedPassword
      ) {
        navigate("/dashboard", { state: { user: typedUsername } });
        setNid(true);
      }
    });

    if (nid === true) {
      set2Nid(true);
      navigate("/dashboard", { state: { user: typedUsername } });
    } else {
      set2Nid(false);
    }
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

        {nid2 ? (
          <></>
        ) : (
          <h1 className="text-red-600 font-bold">
            Enter Correct Username / Password
          </h1>
        )}

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
