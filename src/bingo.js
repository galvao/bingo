'use strict';

let iteration = 0;
let header = ['B', 'I', 'N', 'G', 'O'];
let card = [
    [],
    [],
    [],
    [],
    []
];

let placed = [];

let tblElement = document.createElement('table');
tblElement.className = 'card';

let tblHeader = document.createElement('thead');
let tblHRow = document.createElement('tr');
let tblBody = document.createElement('tbody');

window.addEventListener('load', function () {
    for (let r = 0; r < 5; r++) {
        let tblRow = document.createElement('tr');

        for (let c = 0; c < 5; c++) {
            let min = c * 20;
            let max = (c + 1) * 20;

            let rnd = Math.floor(Math.random() * Math.floor(max));

            if (placed.includes(rnd) || rnd < min) {
                c--;
                continue;
            }

            if (tblHRow.children.length < 5) {
                let tblHCol = document.createElement('th');
                tblHCol.innerText = header[c];

                tblHRow.appendChild(tblHCol);
            }

            let tblCol = document.createElement('td');

            if (r === 2 && c === 2) {
                let imageElement = document.createElement('img');

                imageElement.src = 'img/logo.png';

                imageElement.addEventListener('error', function () {
                    imageElement.src = 'https://www.galvao.eti.br/wp-content/uploads/2018/12/g.png';
                });

                tblCol.appendChild(imageElement);
                tblCol.style.backgroundColor = '#021343';
                tblCol.style.borderRadius = '85px';
                tblCol.style.border = '0';
                tblRow.appendChild(tblCol);

                continue;
            }

            tblCol.innerText = rnd.toString().padStart(2, '0');

            tblCol.addEventListener('click', function () {
                this.classList.toggle('marked');
            });

            tblRow.appendChild(tblCol);

            placed.push(rnd);
        }

        tblBody.appendChild(tblRow);
    }

    tblHeader.appendChild(tblHRow);

    tblElement.appendChild(tblHeader);
    tblElement.appendChild(tblBody);

    document.querySelector('#main').appendChild(tblElement);
});
