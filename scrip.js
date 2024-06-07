function ola() {
    const sal = document.getElementById('saludo');
    const texto = sal.value;
    const div5 = document.getElementById('div5');
    div5.innerHTML += '<br>' +'<br>'+ 'User: ' +texto;
}