
const urlRequest='https://my.api.mockaroo.com/revenue_2017-2019.json?key=fd36b440'

function useRequest(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = function() {
        if (xhr.status != 200) {
            console.log('Статус ответа: ', xhr.status);
        } else {
            const result = JSON.parse(xhr.response);
            if (callback) {
                callback(result);
            }
        }
    };

    xhr.onerror = function() {
        console.log('Ошибка! Статус ответа: ', xhr.status);
    };

    xhr.send();
};

const resultNode = document.querySelector('.result-div');

const btnNode = document.querySelector('.button');

const selectorNode=document.querySelector('select')


function displayResult(apiData) {
    console.log(apiData)
    let cards =`
      <table class="card" border=1 cellpadding=5% cellspacing="0">
    <tr>
        <td>
          <b>1 кв.</b>  
        </td>
        <td>
           <b>2 кв.</b> 
        </td>
        <td>
           <b>3 кв.</b> 
        </td>
        <td>
           <b>4 кв.</b> 
        </td>
    </tr>
    <tr>
        <td>
          ${apiData[`${selectorNode.selectedIndex}`]['sales']['q1']}  
        </td>
        <td>
           ${apiData[`${selectorNode.selectedIndex}`]['sales']['q2']}
        </td>
        <td>
           ${apiData[`${selectorNode.selectedIndex}`]['sales']['q3']}
        </td>
        <td>
           ${apiData[`${selectorNode.selectedIndex}`]['sales']['q4']}
        </td>
    </tr>
</table>
      `
    resultNode.innerHTML = cards;
}

btnNode.addEventListener('click', () => {
    useRequest(urlRequest, displayResult);

})