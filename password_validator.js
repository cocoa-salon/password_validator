// 테스트 케이스 노출
const exportValidationCases = (() => {
  // 유효한 길이 검증
  const isValidLength = (password, min = 8, max = 16) => {
    const reg = new RegExp(`^.{${min},${max}}$`);
    if (reg.test(password)) return { isValid: true };
    else return { isValid: false, reason: `길이는 최소 ${min}에서 ${max}자리입니다.` };
  }

  // 소문자 포함 검증
  const incLowerCase = (password, min = 2) => {
    const reg = new RegExp(`(?=(.*[a-z]){${min},})`);
    if (reg.test(password)) return { isValid: true };
    else return { isValid: false, reason: '반드시 두 개 이상의 소문자를 포함해야 합니다.' };
  }

  // 대문자 포함 검증
  const incUpperCase = (password, min = 2) => {
    const reg = new RegExp(`(?=(.*[A-Z]){${min},})`);
    if (reg.test(password)) return { isValid: true };
    else return { isValid: false, reason: '반드시 두 개 이상의 대문자를 포함해야 합니다.' };
  }

  // 숫자 포함 검증
  const incNumber = (password, min = 2) => {
    const reg = new RegExp(`(?=(.*[0-9]){${min},})`);
    if (reg.test(password)) return { isValid: true, reason: '성공' };
    else return { isValid: false, reason: '반드시 두 개 이상의 숫자를 포함해야 합니다.' };
  }

  // 특수문자 포함 검증
  const incSpecialChar = (password, chars = '!@#$%&*=+') => {
    const reg = new RegExp(`(?=(.*[${chars}]){1,})`);
    if (reg.test(password)) return { isValid: true, reason: '성공' };
    else return { isValid: false, reason: '반드시 하나 이상의 지정된 특수문자(!@#$%&*=+)를 포함해야 합니다.' };
  }

  // 공백 미포함 검증
  const incSpace = (password) => {
    const reg = /(?=\s)/;
    if (!reg.test(password)) return { isValid: true };
    else return { isValid: false, reason: '비밀번호에 공백을 포함해서는 안 됩니다.' };
  }

  return [isValidLength, incLowerCase, incUpperCase, incNumber, incSpecialChar, incSpace];
})();

// 검증 로직 리턴
const validatePassword = ((exportValidationCases) => {
  const eachCases = exportValidationCases;
  return (password) => {
    let failureMsg = '';
    eachCases.forEach(eachCase => {
      let result = eachCase(password)
      if (!result.isValid) {
        failureMsg += (result.reason + '\n');
      }
    })
    return failureMsg;
  }

})(exportValidationCases);

console.log(validatePassword('b1Q11Z%11178a'))