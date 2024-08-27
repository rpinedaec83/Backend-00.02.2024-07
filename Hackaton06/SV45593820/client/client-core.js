const registerNewClient = () => {
  let dni = document.getElementById('client-dni').value;

  if (storeClass.findIndexClient(dni) > -1) {
    alert(`${dni} ya existe en la base de datos`);
    return;
  };

  let name = document.getElementById('client-name').value;
  let lastname = document.getElementById('client-lastname').value;

  let newClient = new Client(name, lastname, dni);
  storeClass.addClient(newClient);

  addTableClient(newClient);
}

const addTableClient = (client) => {
  let tableContent = document.getElementById('client-table-content');
  let tr = document.createElement('tr');

  let th = document.createElement('th');
  th.setAttribute('scope', 'row');
  th.innerText = client.getDni;

  let tdName = document.createElement('td');
  tdName.innerText = client.getFullName;

  tr.appendChild(th);
  tr.appendChild(tdName);

  tableContent.appendChild(tr);
}

const uploadLocalClientsData = () => {
  let localClients = JSON.parse(localStorage.getItem('CLIENTES'));

  if (localClients) {
    localClients.map((client) => {
      let newClient = new Client(client.name, client.lastname, client.dni);
      addTableClient(newClient);
      storeClass.addClient(newClient, false);
    });
  }
}