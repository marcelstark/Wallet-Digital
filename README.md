# Alke Wallet

Proyecto integrador del Módulo 2: Fundamentos del Desarrollo Frontend.

## Descripción

Alke Wallet es una simulación de billetera digital desarrollada con HTML, CSS, JavaScript, jQuery y Bootstrap. Permite iniciar sesión, administrar el saldo, realizar depósitos y retiros, enviar y recibir dinero, agendar contactos y consultar un historial filtrable de movimientos.

> Importante: es un proyecto educativo. No procesa dinero real ni utiliza autenticación segura de producción.

## Tecnologías

- HTML5
- CSS3
- JavaScript
- jQuery 3.7.1
- Bootstrap 5.3.3
- LocalStorage

## Funcionalidades

- Inicio de sesión con validación de credenciales.
- Saldo persistente en LocalStorage.
- Depósitos y retiros con validación de montos.
- Envío de dinero a contactos agendados.
- Recepción simulada de fondos.
- Alta de contactos con validación de CBU de 22 dígitos.
- Búsqueda y autocompletado de contactos por nombre o alias.
- Historial de transacciones con filtros.
- Interfaz responsive con Bootstrap.
- Alertas dinámicas y efectos visuales con jQuery.

## Estructura

```text
alke-wallet/
├── index.html
├── README.md
├── HTML/
│   ├── login.html
│   ├── menu.html
│   ├── deposit.html
│   ├── withdraw.html
│   ├── sendmoney.html
│   ├── receive.html
│   └── transactions.html
├── CSS/
│   └── styles-wallet.css
└── JS/
    └── wallet.js
```

## Ejecución

1. Descarga o clona el repositorio.
2. Mantén la estructura de carpetas indicada.
3. Abre `index.html` en un navegador moderno.
4. Ingresa con las credenciales de prueba:

```text
Email: usuario@wallet.com
Contraseña: 123456
```

## Reiniciar datos

La información se guarda en LocalStorage. Para reiniciar la aplicación, abre las herramientas de desarrollo del navegador, ve a **Application/Aplicación > Local Storage** y elimina las claves que comienzan con `alkeWallet`.

También puedes ejecutar desde la consola del navegador:

```javascript
localStorage.removeItem('alkeWalletBalance');
localStorage.removeItem('alkeWalletTransactions');
localStorage.removeItem('alkeWalletContacts');
localStorage.removeItem('alkeWalletLoggedIn');
location.reload();
```

## Sugerencia de commits

```text
feat: crear estructura inicial de Alke Wallet
feat: implementar login con jQuery
feat: agregar depósitos y retiros con localStorage
feat: implementar agenda y transferencias
feat: agregar historial filtrable de movimientos
style: mejorar interfaz responsive con Bootstrap
```

## Autor

Reemplaza esta sección por tu nombre, enlace de GitHub y fecha de entrega.
