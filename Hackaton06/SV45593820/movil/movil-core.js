const registerNewMovil = () => {
  let imei = document.getElementById('movil-imei').value;

  if (storeClass.findImeiMovil(imei) > -1) {
    alert(`${imei} ya existe en la base de datos`);
    return;
  };

  let dni = document.getElementById('movil-dni').value;
  if (storeClass.findIndexClient(dni) < 0) {
    alert(`el cliente con dni:${dni} no existe en la base de datos`);
    return;
  }

  let name = document.getElementById('movil-name').value;

  let newMovil = new Movil(dni, name, imei);
  storeClass.addMovil(newMovil);

  addTableMovil(newMovil);
}

const registerDiagnosis = () => {
  let imei = document.getElementById('btn-diagnosis-save').getAttribute('m-imei');
  let message = document.getElementById('diagnosis-message').value;

  if (message.length > 0) {
    storeClass.setDiagnosisToMovil(imei, message);
  }

  refreshMovilTable();
}

const addTableMovil = (movil) => {
  let tableContent = document.getElementById('movil-table-content');

  let tr = document.createElement('tr');

  let thImei = document.createElement('th');
  thImei.setAttribute('scope', 'row');
  thImei.innerText = movil.getImei;

  let tdDni = document.createElement('td');
  tdDni.innerText = movil.getDni;

  let tdName = document.createElement('td');
  tdName.innerText = movil.getName;

  let tdAuthorization = document.createElement('td');
  if (movil.hasAuthorization) {
    let chkAuthorization = document.createElement('input');
    chkAuthorization.setAttribute('disabled', 'true');
    chkAuthorization.setAttribute('class', 'form-check-input');
    chkAuthorization.setAttribute('type', 'checkbox');
    chkAuthorization.setAttribute('checked', movil.hasAuthorization);
    tdAuthorization.appendChild(chkAuthorization);
  } else {
    let btAuthorization =  document.createElement('button');
    btAuthorization.setAttribute('class', 'btn btn-primary');
    btAuthorization.setAttribute('type', 'button');
    btAuthorization.setAttribute('m-imei', movil.getImei);
    btAuthorization.innerText = 'Autorizar';
    btAuthorization.addEventListener('click', onSetAuthorization);
    tdAuthorization.appendChild(btAuthorization);
  }

  let tdHasDiagnosis = document.createElement('td');
  if (movil.hasDiagnosis) {
    let chkDiagnosis = document.createElement('button');
    chkDiagnosis.setAttribute('type', 'button');
    chkDiagnosis.setAttribute('class', 'btn btn-link');
    chkDiagnosis.setAttribute('m-imei', movil.getImei);
    chkDiagnosis.setAttribute('data-bs-target', '#descriptionModal');
    chkDiagnosis.setAttribute('data-bs-toggle', 'modal');
    chkDiagnosis.addEventListener('click', showMovilDiagnosis);
    chkDiagnosis.innerText = 'Ver';
    tdHasDiagnosis.appendChild(chkDiagnosis);
  } else {
    let btDiagnosis =  document.createElement('button');
    btDiagnosis.setAttribute('class', 'btn btn-primary');
    btDiagnosis.setAttribute('type', 'button');
    btDiagnosis.setAttribute('data-bs-target', '#diagnosisModal');
    btDiagnosis.setAttribute('data-bs-toggle', 'modal');
    btDiagnosis.setAttribute('m-imei', movil.getImei);
    btDiagnosis.addEventListener('click', setImeiOnModalDiagnosis);
    btDiagnosis.innerText = 'Diagnosticar';
    tdHasDiagnosis.appendChild(btDiagnosis);
  }
  
  tr.appendChild(thImei);
  tr.appendChild(tdDni);
  tr.appendChild(tdName);
  tr.appendChild(tdAuthorization);
  tr.appendChild(tdHasDiagnosis);

  tableContent.appendChild(tr);
}

const onSetAuthorization = (event) => {
  let imei = event.srcElement.getAttribute('m-imei');

  storeClass.setAuthorizationToMovil(imei, true);

  refreshMovilTable();
}

const refreshMovilTable = () => {
  document.getElementById('movil-table-content').innerHTML = '';

  storeClass.getMoviles.map((movil) => {
    addTableMovil(movil);
  });
}

const setImeiOnModalDiagnosis = (event) => {
  let imei = event.srcElement.getAttribute('m-imei');

  document.getElementById('btn-diagnosis-save').setAttribute('m-imei', imei);
}

const showMovilDiagnosis = (event) => {
  let imei = event.srcElement.getAttribute('m-imei');
  let description = storeClass.getMovilDiagnosis(imei);
    
  document.getElementById('modal-description-message').innerText = description;
}

const uploadLocalMovilesData = () => {
  let localMoviles = JSON.parse(localStorage.getItem('MOVILES'));
  if (localMoviles) {
    localMoviles.map((movil) => {
      let newMovil = new Movil(
        movil.dniClient,
        movil.name,
        movil.imei
      );
      newMovil.setAuthorization = movil.hasAuthorization;
      if (movil.diagnosis.description) {
        newMovil.setDiagnosis = movil.diagnosis.description;
      }
      addTableMovil(newMovil);
      storeClass.addMovil(newMovil, false);
    });
  }
}