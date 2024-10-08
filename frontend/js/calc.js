const submit = document.getElementById('submit');
const stockInt = document.getElementById('stockInt');
const stockFin = document.getElementById('stockFin');
const stockAmt = document.getElementById('stockAmt');
const outputDiv = document.getElementById('output');
const adminButton = document.getElementById('admin');
let header;
let outputAmnt;

const calculate = (initial, final, amount) => {
    let result = (final - initial) * amount;
    return result;
}

const checkIfShouldRemove = () => {
    if(stockInt.value === '' || stockFin.value === '' || stockAmt.value === '') {
        return true;
    } else {
        return false;
    }
}

const postData = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response.json();
}

submit.addEventListener('click', async (event) => {
    event.preventDefault();
    let init = document.getElementById('stockInt').value;
    let fin = document.getElementById('stockFin').value;
    let amnt = document.getElementById('stockAmt').value;
    let name = document.getElementById('name').value;
    let total = calculate(init, fin, amnt).toFixed(2).toString();

    if(!checkIfShouldRemove()) {
        event.preventDefault();
        if(!document.getElementById('outputHeader') && !document.getElementById('outputAmnt')) {
            header = document.createElement('h1');
            outputDiv.appendChild(header);
            header.id = 'outputHeader';
            outputAmnt = document.createElement('h3');
            outputDiv.appendChild(outputAmnt);
            outputAmnt.id = 'outputAmnt';
        }
        if(total >= 0) {
            header.innerHTML = 'Money made';
        } else {
            header.innerHTML = 'Money lost';
        }
        if (total[0] === '-') {
            total = total.substr(1);
            outputAmnt.innerHTML = '-$' + total;
        } else {
            outputAmnt.innerHTML = '$' + total;
        }
    }
    const data = { init, fin, amnt, name, total };
    const url = 'https://stocks-backend-qnju.onrender.com';
    try {
        const result = await postData(url, data);
        console.log('Success:', result);
    } catch (error) {
        console.error('Error:', error);
    }
});