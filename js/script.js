let total = 0;

function cart(element) {
    const item = element.parentNode.childNodes[1].innerText;
    const li = document.createElement('li');
    li.innerText = item;
    const pay = document.querySelector('#pay');
    pay.insertBefore(li,pay.childNodes[3]);
    const price = parseInt(element.parentNode.childNodes[5].innerText.split('$')[1]);
    total += price;
    const totalPay = document.querySelector('#total');
    totalPay.innerText = total;
    console.log(price,total,typeof total);
}