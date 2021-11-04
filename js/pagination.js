let users = [
    { name: 'Sergio', surname: 'Ramos', team: 'PSG', id: '1'},
    { name: 'Kum', surname: 'Aguero', team: 'Barselona', id: '2'},
    { name: 'Ansu', surname: 'Fati', team: 'Barselona', id: '3'},
    { name: 'Victor', surname: 'Tsikangov', team: 'DK', id: '4'},
    { name: 'Lionel', surname: 'Messi', team: 'PSG', id: '5'},
    { name: 'Artem', surname: 'Milesky', team: 'Real Madrid', id: '6'},
    { name: 'Karim', surname: 'Benzema', team: 'Real Madrid', id: '7'},
    { name: 'Luka', surname: 'Modrich', team: 'Real Madrid', id: '8'},
    { name: 'Zlatan', surname: 'Ibragimovich', team: 'Milan', id: '9'},
    { name: 'Lautaro', surname: 'Martinez', team: 'Inter', id: '10'},
    { name: 'Ruslan', surname: 'Malinovski', team: 'Atalanta', id: '11'},
    { name: 'Andri', surname: 'Shevchenko', team: 'Chelsea', id: '12'},
    { name: 'Rinat', surname: 'Akhmetov', team: 'Shakhtar', id: '13'},
    { name: 'Alexandr', surname: 'Aliev', team: 'Atletico', id: '14'},
    { name: 'Tibo', surname: 'Kurtuis', team: 'Vorskla', id: '15'},
];

let refs = {
    pagList: document.querySelector('.pag-list'),
    cards: document.querySelector('.section__cards'),
};

let notesOfPage = 3;
let countOfItems = Math.ceil(users.length / notesOfPage);
let pagItem = [];
let initialPage = 1;

for(let i = 1; i <= countOfItems; i++) {
    let li = document.createElement('li');
    li.textContent = i;
    li.classList.add('pag-list__item');
    refs.pagList.appendChild(li);
    pagItem.push(li);
};

function showPage(init) {
    let start = (init - 1) * notesOfPage;
    let end = start + notesOfPage;
    let notes = users.slice(start, end);
    
    let result = notes.map(note => {
        return `<li>
        <h1>${note.name}</h1>
        <p>${note.surname}</p>
        <p>${note.team}</p>
        </li>`
    });
    refs.cards.innerHTML = result.join('');
    pagItem[0].classList.add('active');
}
showPage(initialPage);

pagItem.forEach(items => {
    items.addEventListener('click', (e) => {
        showPage(+e.target.textContent);
        pagItem.forEach(item => {
            if (item.classList.contains('active')) {
                item.classList.remove('active');
            }
        });
        items.classList.add('active');
    });
});

// pagItem.forEach(items => {
//     items.addEventListener('click', (e) => {
//         let pageNum = +e.target.textContent;

//         pagItem.forEach(item => {
//             if (item.classList.contains('active')) {
//                 item.classList.remove('active');
//             }
//         });
//         items.classList.add('active');

//         let start = (pageNum - 1) * notesOfPage;
//         let end = start + notesOfPage;
//         let notes = users.slice(start, end);

//         let result = notes.map(note => {
//             return `<li>
//             <h1>${note.name}</h1>
//             <p>${note.surname}</p>
//             <p>${note.team}</p>
//             </li>`
//         });
//         refs.cards.innerHTML = result.join('');
//     });
// });