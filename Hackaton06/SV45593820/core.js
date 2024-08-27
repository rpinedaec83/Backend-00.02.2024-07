// ################# CORE
const storeClass = new Store();

const activeSetterForm = (event) => {
  let element = event.srcElement;

  if (!element.classList.contains('active')) {
    let checked = document.querySelector('[attr-set-form="true"]');
    checked.setAttribute('attr-set-form', false);
    checked.classList.remove('active');

    element.classList.add('active');
    element.setAttribute('attr-set-form', true);
    showForm(element.getAttribute('attr-to-form'));
  }
}

const showForm = (form) => {
  // 1 apagamos anterior
  let formToHiddenTag = document.querySelector('div.dashboard__form-visible');
  formToHiddenTag.classList.remove('dashboard__form-visible');
  formToHiddenTag.classList.add('dashboard__form-hidden');
  // 2 encendemos
  let formTag = document.getElementById(`${form}-form-tag`);
  formTag.classList.remove('dashboard__form-hidden');
  formTag.classList.add('dashboard__form-visible');

  
}