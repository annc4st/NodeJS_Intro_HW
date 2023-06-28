/* Створити Node.js http-сервер, який слухатиме запити на порт 5000 на локальній  машині. 
Сервер повинен повертати сторінку, що містить ім’я поточного користувача операційної системи, 
тип операційної системи, час роботи системи в хвилинах (використати модуль OS), 
поточну робочу директорію і назву файлу сервера (використати модуль path).*/


// const http = require('http');
// const os = require('os');
// const path = require('path');

// const server = http.createServer((req, res) => {
//   // Get user information
//   const username = os.userInfo().username;
//   const osType = os.type();
//   const uptime = Math.floor(os.uptime() / 60); //  час роботи системи в хвилинах 

//   // Get current working directory and server file name
//   const cwd = process.cwd();
//   const filename = path.basename(__filename);

//   // Set the response headers
//   res.setHeader('Content-Type', 'text/html');
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write( `
//         <html>
//         <head> 
//                 <title> System Information </title>

//         </head>

//         <body>
//         <h1>System Information</h1>
//         <p> Current User name: ${username}</p>
//         <p>OS Type:</strong> ${osType}</p>
//         <p>System work time (minutes): ${uptime}</p>
//         <p>Current Work Directory: ${cwd}</p>
//         <p>Server File Name: ${filename}</p>
//         </body>
//         </html>
//   `  );

//   // Send the response
//   res.end( );
// });

// server.listen(5000, () => {
//   console.log('Server listening on port 5000');
// });


/*створити власний модуль personalmodule.js, який містить функцію, що приймає ім’я системного юзера 
і працює з поточним часом та на основі пори доби виводить повідомлення із привітанням юзера. 
Щоб експортувати змінні чи функції модуля на зовні можна використати об’єкт module.exports. 
        Створіть Node.js сервер, який з використанням функціоналу розробленого модуля повертатиме наступну сторінку:*/

const http = require('http');
const personalModule = require('./personalmodule');
const os = require('os');
 

const server = http.createServer((req, res) => {
  // Get user information
  const username = os.userInfo().username;
  const greeting = personalModule.greetUser(username);
   
  // Set the response headers
  res.setHeader('Content-Type', 'text/html');
  res.writeHead(200);
  res.end(greeting);

});

server.listen(5000, () => {
  console.log('Server listening on port 5000');
});

