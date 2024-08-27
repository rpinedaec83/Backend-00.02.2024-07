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

  get getDescriptionForStringify() {
    return {
      description: this.#description
    }
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

  get getClientForStringify() {
    return {
      name: this.#name,
      lastname: this.#lastname,
      dni: this.#dni
    }
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

  get getMovilForStringify() {
    return {
      dniClient: this.#dniClient,
      name: this.#name,
      imei: this.#imei,
      diagnosis: this.#diagnosis.getDescriptionForStringify,
      hasAuthorization: this.#hasAuthorization
    }
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

  get getClientsStringify() {
    let arrClients = [];
    this.#clients.map((item) => {
      arrClients.push(item.getClientForStringify);
    });
    return JSON.stringify(arrClients);
  }

  get getMovilesStringify() {
    let arrMoviles = [];
    this.#moviles.map((item) => {
      arrMoviles.push(item.getMovilForStringify);
    });
    return JSON.stringify(arrMoviles);
  }

  getMovilDiagnosis(imei) {
    let imovil = this.#moviles.findIndex((movil) => movil.getImei === imei);
    if (imovil > -1) {
      return this.#moviles[imovil].getDiagnosis;
    }

    return null;
  }

  addClient(client, updateInLocal = true) {
    this.#clients.push(client);
    if (updateInLocal) this.updateLocalClients();
  }

  addMovil(movil, updateInLocal = true) {
    this.#moviles.push(movil);
    if (updateInLocal) this.updateLocalMoviles();
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

    this.updateLocalMoviles();
  }

  setDiagnosisToMovil(imei, message) {
    let imovil = this.#moviles.findIndex((movil) => movil.getImei === imei);

    if (imovil > -1) {
      this.#moviles[imovil].setDiagnosis = message;
    }

    this.updateLocalMoviles();
  }

  updateLocalClients() {
    localStorage.setItem('CLIENTES', this.getClientsStringify);
  }

  updateLocalMoviles() {
    localStorage.setItem('MOVILES', this.getMovilesStringify);
  }
}