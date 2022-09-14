import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchLogin, fetchSignUp } from "../../services/api/authAPI";
import { isEmailValidate, isPasswordValidate } from "../../utils/validator";

// 선언 부분에서의 둘의 차이점은 인터페이스는 당연하겠지만 객체에서만 사용이 가능
// 하다는 점과, Index Signature의 사용 유무이다.

// type PositionType = {
//   x: number;
//   y: number;
// };
// interface PositionInterface {
//   x: number;
//   y: number;
// }

interface IFormInput {
  email: string;
  password: string;
}

interface IAuthProps {
  loginOrSignin: string;
}

// 첫번째 인자는 API 주소

// 두번째 인자는 http통신에 관한 데이터

// method 에는 GET, POST, PATCH 등 HTTP method를 입력합니다.

// body 에는 JSON 형태로 주고 받을 데이터를 넣습니다.

// 통신을 할 때는 String 형태의 JSON으로 보내야 하기 때문에

// JSON.stringify() 라는 메서드를 활용해서 포맷을 기존의 javascript

// object에서 JSON String으로 변환해줍니다.

const Auth = ({ loginOrSignin }: IAuthProps) => {
  const navigate = useNavigate();

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [emailValidate, setEmailValidate] = useState(false);
  const [passwordValidate, setPasswordValidate] = useState(false);
  useEffect(() => {
    emailRef.current?.focus();
  }, []);

  const handleEmailInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target; // const email = e.target.value
    setEmail(value); // 이거 맞나?

    if (isEmailValidate(value)) {
      // 여기서 value로 검사해야 하는지 email로 검사해야 하는지
      // 그리고 change로직과 검사 로직을 분리하는게 좋은지
      setEmailValidate(true);
    } else {
      setEmailValidate(false);
    }
  };

  const handlePasswordInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = e.target;
    setPassword(value);

    if (isPasswordValidate(value)) {
      setPasswordValidate(true);
    } else {
      setPasswordValidate(false);
    }
  };

  const handleAuthSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loginOrSignin === "Log In") {
      fetchLogin({ email, password });
    } else {
      fetchSignUp({ email, password });
    }
  };

  return (
    <form action="submit" onSubmit={handleAuthSubmit}>
      <label htmlFor="email">email</label>
      <input
        type="text"
        id="email"
        ref={emailRef}
        // outoComplete = "off"
        // required
        placeholder="이메일을 입력해주세요"
        onChange={handleEmailInputChange}
      />
      <label htmlFor="password">password</label>
      <input
        type="text"
        id="password"
        ref={passwordRef}
        placeholder="비밀번호를 입력해주세요"
        onChange={handlePasswordInputChange}
        // {...register("password")} react-hook-form 쓸 때
      />
      <button
        type="submit"
        disabled={emailValidate && passwordValidate ? false : true}
      >
        {loginOrSignin}
      </button>
    </form>
  );
};
export default Auth;
// /auth 경로에 로그인 / 회원가입 기능을 개발합니다
// 로그인, 회원가입을 별도의 경로로 분리해도 무방합니다
//  최소한 이메일, 비밀번호 input, 제출 button을 갖도록 구성해주세요
// 이메일과 비밀번호의 유효성을 확인합니다
//  이메일 조건 : 최소 @, . 포함
//  비밀번호 조건 : 8자 이상 입력
//  이메일과 비밀번호가 모두 입력되어 있고, 조건을 만족해야 제출 버튼이 활성화 되도록 해주세요

// 로그인 API를 호출하고, 올바른 응답을 받았을 때 루트 경로로 이동시켜주세요
//  응답으로 받은 토큰은 로컬 스토리지에 저장해주세요
//  다음 번에 로그인 시 토큰이 존재한다면 루트 경로로 리다이렉트 시켜주세요
//  어떤 경우든 토큰이 유효하지 않다면 사용자에게 알리고 로그인 페이지로 리다이렉트 시켜주세요

// 폼 전송 기능을 하는 <input type="submit"> 과 <button> 은 기능적으로 동일하다.
