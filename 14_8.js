const btn = document.querySelector('.btn-div');
const resultNode = document.querySelector('.result-div');

const useRequest = () => {
    return fetch('https://picsum.photos/v2/list?page='+`${pageNumber}`+'&limit='+`${pageLimit}`+'')
        .then((response) => {
            return response.json();
        })
        .then((json) => { return json; })
        .catch(() => { console.log('error') });
}

function displayResult(requestResult) {
    let cards = '';
    // console.log('start cards', cards);

    for (i = 0; i <= requestResult.length-1; i++) {
        const cardBlock = `
        <div class="card">
                <img
                    src='${requestResult[`${i}`]['download_url']}'
                    class="card-image"
                    width="400"
                />
                <p>${requestResult[`${i}`]['author']}</p>
            </div>
        `;
        cards = cards + cardBlock;
        }
        resultNode.innerHTML = cards;
}

btn.addEventListener('click', async() => {
    pageNumber=document.querySelector(".page-number").value
    if (pageNumber>=1&&pageNumber<=10||typeof(pageNumber)=="number" ){
        var pageNumberStatus=true
    }else{
        pageNumberStatus=false
        console.log("«Номер страницы вне диапазона от 1 до 10»")

    }
    pageLimit=document.querySelector(".page-limit").value
    if (pageLimit>=1&&pageLimit<=10||typeof(pageLimit)=="number" ){
        var pageLimitStatus=true
    }else{
        pageLimitStatus=false
        console.log("«Лимит вне диапазона от 1 до 10»")
    }

    if (pageNumberStatus==true&&pageLimitStatus==true){

        requestResult=await useRequest()

        var requestResultString=JSON.stringify(requestResult)

        localStorage.setItem("myJSON",requestResultString)

        displayResult(requestResult)


    }else if (pageNumberStatus==false&&pageLimitStatus==false){
        console.log("«Номер страницы и лимит вне диапазона от 1 до 10»")
    }

});

document.addEventListener("DOMContentLoaded", () => {

    const requestLocalStorage=JSON.parse(localStorage.getItem("myJSON"))

    displayResult(requestLocalStorage)

});
