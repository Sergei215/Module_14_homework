const name=prompt('Добро пожаловать! Назовите, пожалуйста, ваше имя')

const saveName=localStorage.getItem('saveName')
const data=localStorage.getItem('Date')

if (name == saveName){
    alert("Добрый день, "+`${saveName}`+"! Давно не виделись. В последний раз вы были у нас "+`${data}`+".")
    console.log(data)
} else {
    localStorage.setItem('saveName',name)
    var currentTime = new Date().getTime();
    localStorage.setItem('Date',currentTime)
}
