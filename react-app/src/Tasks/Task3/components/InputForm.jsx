import "./InputForm.css";

const InputForm = (props) => {
  const { type, label, placeholder, inputText } = props;
  return (
    <div>
      <label htmlFor={label}>{label}:</label>
      <input
        onChange={(e) => {
          inputText(e.target.value);
        }}
        type={type}
        id={label}
        placeholder={placeholder}
      ></input>
    </div>
  );
};
export default InputForm;
