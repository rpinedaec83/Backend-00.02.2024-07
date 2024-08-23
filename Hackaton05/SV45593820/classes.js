class Diagnosis {
  #description;

  constructor() {
    this.#description = '';
  }

  set setDescription(description) {
    this.#description = description;
  }

  get getDescription() {
    return this.#description;
  }
}

class Client {
  #name;
  #lastname;
  #dni;

  constructor(name, lastname, dni) {
    this.#name = name;
    this.#lastname = lastname;
    this.#dni = dni;
  }

  get getFullName() {
    return `${this.#name} ${this.#lastname}`;
  }

  get getDni() {
    return this.#dni;
  }
}

class Movil {
  #imei;
  #name;
  #dniClient;
  #diagnosis;
  #hasAuthorization;

  constructor(dniClient, name, imei) {
    this.#dniClient = dniClient;
    this.#name = name;
    this.#imei = imei;
    this.#diagnosis = new Diagnosis();
    this.#hasAuthorization = false;
  }

  get getImei() {
    return this.#imei;
  }

  get getDni() {
    return this.#dniClient;
  }

  get getName() {
    return this.#name;
  }

  get getDiagnosis() {
    return this.#diagnosis.getDescription;
  }

  get hasAuthorization() {
    return this.#hasAuthorization;
  }

  get hasDiagnosis() {
    return this.#diagnosis.getDescription.length > 0;
  }

  set setDiagnosis(description) {
    this.#diagnosis.setDescription = description;
  }

  set setAuthorization(hasAuthorization) {
    this.#hasAuthorization = hasAuthorization;
  }
}

class Store {
  #clients = [];
  #moviles = [];

  constructor() {}

  get getClients() {
    return this.#clients;
  }

  get getMoviles() {
    return this.#moviles;
  }

  getMovilDiagnosis(imei) {
    let imovil = this.#moviles.findIndex((movil) => movil.getImei === imei);
    if (imovil > -1) {
      return this.#moviles[imovil].getDiagnosis;
    }

    return null;
  }

  addClient(client) {
    this.#clients.push(client);
  }

  addMovil(movil) {
    this.#moviles.push(movil);
  }

  findIndexClient(dni) {
    return this.#clients.findIndex((client) => client.getDni === dni);
  }

  findImeiMovil(imei) {
    return this.#moviles.findIndex((movil) => movil.getImei === imei);
  }

  setAuthorizationToMovil(imei, authorization) {
    let imovil = this.#moviles.findIndex((movil) => movil.getImei === imei);

    if (imovil > -1) {
      this.#moviles[imovil].setAuthorization = authorization;
    }
  }

  setDiagnosisToMovil(imei, message) {
    let imovil = this.#moviles.findIndex((movil) => movil.getImei === imei);

    if (imovil > -1) {
      this.#moviles[imovil].setDiagnosis = message;
    }
  }
}