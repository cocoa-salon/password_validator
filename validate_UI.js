class ValidatePassword {
  constructor(validatePassword) {
    this.validatePassword = validatePassword;
    this.initElements();
  }

  initElements() {
    const validateBtn = document.getElementById('validate-btn');
    const input = document.getElementById('password-input');
    const validationResult = document.getElementById('validation-result');
    this.initEvents(validateBtn, input, validationResult)
  }

  initEvents(validateBtn, input, validationResult) {

    input.addEventListener('input', () => {
      validateBtn.removeAttribute('disabled');
    });

    input.addEventListener('focus', () => {
      validationResult.innerText = '';
    });

    validateBtn.addEventListener('click', () => {
      const result = this.validatePassword(input.value);
      validationResult.innerText = `입력한 비밀번호: ${input.value} \n` + result;
      validateBtn.setAttribute('disabled', '');
      input.value = '';
    });
  }
}

const validateUI = new ValidatePassword(validatePassword);