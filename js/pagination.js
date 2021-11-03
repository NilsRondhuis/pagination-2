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
];

let refs = {
    pag: document.querySelectorAll('.pag-list__item'),
};

let notesOfPage = 3;

refs.pag.forEach(items => {
    items.addEventListener('click', (e) => {
        let pageNum = +e.target.textContent;

        let start = (pageNum - 1) * notesOfPage;
        console.log(start);
        let end = start + notesOfPage;
        console.log(end);
        let notes = users.slice(start, end);
        console.log(notes);
    });
});