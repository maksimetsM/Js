// 1. получить объект модального окна с классом .wrap
const modal = document.querySelector('.wrap');
// 2. получить тег span, используемый для закрытия окна
const closeWnd = document.querySelector('span');
// 3. получить кнопку, используемую для показа модального окна
const openWnd = document.querySelector('button');

// 4. назначить обработку клика на кнопку показа модального окна
// когда функция обработчик срабатывает она должна у модального
// окна удалять класс hidden
closeWnd.addEventListener('click', function () {
    modal.classList.add('hidden');
})

// 5. назначить обработку клика на тег span, при клике
// в обработчике модальному окну должен быть добавлен
// класс hidden
openWnd.addEventListener('click', function () {
    modal.classList.remove('hidden');
})
