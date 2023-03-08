import throttle from 'lodash.throttle';

const refs = {
  userForm: document.querySelector('form'),
  userEmail: document.querySelector('input'),
  userMessage: document.querySelector('textarea'),
  STORAGE_KEY: 'feedback-form-state',
};

const userFeedback = {
  email: '',
  message: '',
};

refs.userForm.addEventListener('input', throttle(onFeedbackInput, 500));
refs.userForm.addEventListener('submit', onFormSubmit);

function onFeedbackInput(evt) {
  userFeedback[evt.target.name] = evt.target.value;
  localStorage.setItem(refs.STORAGE_KEY, JSON.stringify(userFeedback));
};

function onFormSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem(refs.STORAGE_KEY);
};

function onFillInput() {
  const savedInfo = localStorage.getItem(refs.STORAGE_KEY);
  const parsedInfo = JSON.parse(savedInfo);

  if (savedInfo) {
    refs.userEmail.value = parsedInfo.email;
    refs.userMessage.value = parsedInfo.message;
  };
};

onFillInput(); 
