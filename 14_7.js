const btn = document.querySelector('.btn-div');
const resultNode = document.querySelector('.result-div');
var userNumber=0

const useRequest = () => {
    return fetch(' https://jsonplaceholder.typicode.com/users/'+`${userNumber}`+'/todos')
        .then((response) => {
            return response.json();
        })
        .then((json) => { return json; })
        .catch(() => { console.log('Ошибка запроса') });
}

function displayResult(requestResult) {
    let list = '';
    for (i = 0; i <= requestResult.length-1; i++) {
        if (requestResult[`${i}`]['completed']==true){
            var listEl = `<li><s>${requestResult[`${i}`]['title']}</s></li>`
        }else{
            listEl = `<li>${requestResult[`${i}`]['title']}</li>`
        }
        ;
        list = list + listEl;
    }
    resultNode.innerHTML = list;
}

btn.addEventListener('click', async() => {
    userNumber=document.querySelector(".input-value").value
    console.log(userNumber)
    requestResult=await  useRequest();
    if (requestResult.length==0){
        console.log('Пользователь с указанным id не найден')
    } else{
        console.log('Массив данных', requestResult);

        displayResult(requestResult)
    }
});