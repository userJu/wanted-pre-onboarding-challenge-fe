//  이메일 조건 : 최소 @, . 포함

export const isEmailValidate = (email: string) => {
  const EMAIL_REGEX = /\w+@\w+\.\w+(\.\w+)?/; // /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
  return EMAIL_REGEX.test(email); // true / false 반환
};

const minimumPassword = 8;

//  비밀번호 조건 : 8자 이상 입력
export const isPasswordValidate = (password: string) => {
  return password.length >= minimumPassword;
};
