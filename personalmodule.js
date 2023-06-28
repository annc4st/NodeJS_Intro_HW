/*створити власний модуль personalmodule.js, який містить функцію, що приймає ім’я системного юзера 
і працює з поточним часом та на основі пори доби виводить повідомлення із привітанням юзера. 
Щоб експортувати змінні чи функції модуля на зовні можна використати об’єкт module.exports. 
        Створіть Node.js сервер, який з використанням функціоналу розробленого модуля повертатиме наступну сторінку:*/


function greetUser(name) {
    const currentHour = new Date();

    let greeting;
    if(currentHour >= 5 && currentHour <12) {
        greeting = `Good morning ${name}`;
    } else if (currentHour >= 12 && currentHour < 18){
        greeting = `Good afternoon ${name}`;
    } else{
        greeting = `Good night ${name}`;
    }

    return `Date of request: ${currentHour} ${greeting}`;    
}

module.exports = {
    greetUser: greetUser
  };
