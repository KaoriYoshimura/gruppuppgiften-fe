/* eslint-disable default-case */
(function IIFE() {
  const $formVarify = document.getElementById('formVarify');
  const pNumPattern = /\d{6}[+-]\d{4}/;
  const namePattern = /\w{3,}\s\w{3,}/;

  function onSubmitForm(e) {
    let formValid = true;
    for (let i = 0; i < e.target.length; i++) {
      e.target[i].style.borderColor = '';
      const inputValue = e.target[i].value;
      const inputDataType = e.target[i].getAttribute('data-type');

      switch (inputDataType) {
        case 'personal number':
          if (!inputValue.match(pNumPattern)) {
            alert('Please enter correct personal number');
            e.target[i].className = 'error';
            formValid = false;
          } else {
            e.target[i].className = '';
          }
          break;
        case 'name':
          if (!inputValue.match(namePattern)) {
            alert('not valid name');
            e.target[i].className = 'error';
            formValid = false;
          } else {
            e.target[i].className = '';
          }
          break;
      }
    }

    // If form is not valid, we prevent default action - which is submitting form
    if (!formValid) {
      e.preventDefault();
    }
  }

  function onInvalid(e) {
    e.preventDefault();
    console.log(e.target.getAttribute('id'));
    e.target.style.borderColor = 'red';
  }

  function registerInvalidListeners(form) {
    for (let i = 0; i < form.length; i++) {
      form[i].addEventListener('invalid', onInvalid);
    }
  }

  function registerListeners() {
    $formVarify.addEventListener('submit', onSubmitForm);
    registerInvalidListeners($formVarify);
  }

  // eslint-disable-next-line func-names
  window.pageLoad = function () {
    registerListeners();
  };


  //   To activate strict is needed
  //   function pageLoad() {
  //     console.log('loaded');
  //     registerListeners();
  //   }
  //   window.pageLoad = pageLoad;
}());
