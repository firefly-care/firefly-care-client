import * as S from "./index.styles";

interface InputProps {
  placeholder: string;
  value: string;
  type?: string;
  onChange: (value: string) => void;
}

export const Input = ({
  placeholder,
  value,
  type = "text",
  onChange,
}: InputProps) => {
  return (
    <S.Container
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        onChange(e.target.value)
      }
    />
  );
};
