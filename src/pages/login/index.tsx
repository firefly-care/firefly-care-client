import { useState } from "react";
import * as S from "./index.styles";
import { useLogin } from "./hooks/useLogin";
import { useNavigate } from "react-router-dom";
import Logo from "@assets/icons/common/logo.svg?react";
import { Input } from "./components";

export const Login = () => {
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();
  const { login } = useLogin();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await login(id, password);
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <S.Container>
      <S.LoginContainer>
        <S.LoginHeader>
          <Logo width={50} height={50} />
          <S.TextLogin>반딧불이 돌봄 서비스</S.TextLogin>
        </S.LoginHeader>
        <S.FormContainer onSubmit={handleSubmit}>
          <S.InputContainer>
            <Input
              placeholder="아이디를 입력하세요"
              value={id}
              onChange={(v) => setId(v)}
            />
            <Input
              placeholder="비밀번호를 입력하세요"
              value={password}
              type="password"
              onChange={(v) => setPassword(v)}
            />
          </S.InputContainer>
          <S.LoginButton type="submit">로그인</S.LoginButton>
        </S.FormContainer>
      </S.LoginContainer>
    </S.Container>
  );
};
