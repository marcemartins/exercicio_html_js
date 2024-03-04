function validanumber(Num_a, Num_b) {
    if (Num_a > Num_b) {
        alert("Não é válido, o número A é maior que o número B");
        return false; 
    } else {
        alert("Formulário enviado com sucesso")
        return true; 
    }
}

let form = document.querySelector('form');
form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    let Num_a = parseInt(document.getElementById("Num_a").value);
    let Num_b = parseInt(document.getElementById("Num_b").value);

    if (!validanumber(Num_a, Num_b)) {
        
        return;
    }

    
    this.submit();
});