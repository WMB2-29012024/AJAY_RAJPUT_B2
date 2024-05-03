import InputForm from "./components/InputForm";
import "./Task.css";
import { useState } from "react";

const Task = () => {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [contact, setcontact] = useState('');

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <InputForm
          type={"text"}
          label={"Name"}
          placeholder={"Enter your name"}
          inputText={setname}
        />
        <InputForm
          type={"email"}
          label={"Email"}
          placeholder={"Enter your Email"}
          inputText={setemail}
        />
        <InputForm
          type={"tel"}
          label={"Phone"}
          placeholder={"Enter your phone number"}
          inputText={setcontact}
        />
        <button type="submit">Submit</button>
      </form>

      <div className="div">{name[0]['email']}</div>
    </div>
  );
};

export default Task;
