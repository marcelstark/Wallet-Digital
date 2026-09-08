const STORAGE = {
  balance: 'alkeWalletBalance',
  transactions: 'alkeWalletTransactions',
  contacts: 'alkeWalletContacts',
  loggedIn: 'alkeWalletLoggedIn'
};

function initWallet() {
  if (localStorage.getItem(STORAGE.balance) === null) {
    localStorage.setItem(STORAGE.balance, '250000');
  }

  if (localStorage.getItem(STORAGE.transactions) === null) {
    const initialTransactions = [
      {
        id: Date.now() - 2,
        type: 'deposit',
        description: 'Saldo inicial de la cuenta',
        amount: 250000,
        date: new Date().toLocaleString('es-AR')
      }
    ];
    localStorage.setItem(STORAGE.transactions, JSON.stringify(initialTransactions));
  }

  if (localStorage.getItem(STORAGE.contacts) === null) {
    const initialContacts = [
      {
        id: 1,
        name: 'María González',
        cbu: '0000003100000000000001',
        alias: 'maria.gonzalez',
        bank: 'Banco Nación'
      },
      {
        id: 2,
        name: 'Juan Pérez',
        cbu: '0000003100000000000002',
        alias: 'juan.perez',
        bank: 'Banco Galicia'
      }
    ];
    localStorage.setItem(STORAGE.contacts, JSON.stringify(initialContacts));
  }
}

function getBalance() {
  return Number(localStorage.getItem(STORAGE.balance) || 0);
}

function setBalance(balance) {
  localStorage.setItem(STORAGE.balance, String(balance));
}

function formatCurrency(amount) {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    maximumFractionDigits: 0
  }).format(Number(amount));
}

function getTransactions() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE.transactions) || '[]');
  } catch (error) {
    return [];
  }
}

function addTransaction(type, description, amount) {
  const transactions = getTransactions();
  transactions.unshift({
    id: Date.now(),
    type: type,
    description: description,
    amount: Number(amount),
    date: new Date().toLocaleString('es-AR')
  });
  localStorage.setItem(STORAGE.transactions, JSON.stringify(transactions));
}

function getContacts() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE.contacts) || '[]');
  } catch (error) {
    return [];
  }
}

function addContact(contact) {
  const contacts = getContacts();
  contacts.push({ id: Date.now(), ...contact });
  localStorage.setItem(STORAGE.contacts, JSON.stringify(contacts));
}

function showAlert(message, type = 'success') {
  const $container = $('#alert-container');
  if (!$container.length) return;

  const alertHtml = `
    <div class="alert alert-${type} alert-dismissible fade show mt-3" role="alert">
      ${message}
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Cerrar"></button>
    </div>
  `;

  $container.html(alertHtml);
}

function redirectWithMessage(message, destination, milliseconds = 1200) {
  showAlert(message, 'info');
  setTimeout(function () {
    window.location.href = destination;
  }, milliseconds);
}

function requireLogin() {
  if (localStorage.getItem(STORAGE.loggedIn) !== 'true') {
    window.location.href = 'login.html';
  }
}

function getTransactionLabel(type) {
  const labels = {
    deposit: 'Depósito',
    withdraw: 'Retiro',
    transfer_sent: 'Transferencia enviada',
    transfer_received: 'Transferencia recibida',
    purchase: 'Compra'
  };

  return labels[type] || 'Movimiento';
}

function getTransactionIcon(type) {
  const icons = {
    deposit: '↓',
    withdraw: '↑',
    transfer_sent: '↗',
    transfer_received: '↙',
    purchase: '●'
  };

  return icons[type] || '•';
}

$(function () {
  initWallet();
});
