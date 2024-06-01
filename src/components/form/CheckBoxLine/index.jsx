import { Container } from "./styles";

export const CheckBoxLine = ({ id, text, onChange }) => {
  const handleCheckboxChange = (e) => {
    onChange(e.target.checked);
  };
  return (
    <Container>
      <input
        type="checkbox"
        name={id}
        id={id}
        onChange={handleCheckboxChange}
      />
      <label htmlFor={id}>{text}</label>
    </Container>
  );
};
