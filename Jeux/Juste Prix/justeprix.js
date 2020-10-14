let prix =  Math.floor(Math.random(10000)*10000);
const win = 'Bravo! Tu as trouvé!!';
const lostime = `Malheureusement c'est perdu. Tu as épuisé tous tes essais. Ce sera pour une prochaine fois!`;
const more = `C'est plus!`;
const less = `C'est moins!`;
let count = 5;
console.log (prix);

//document.getElementById('sub').addEventListener('click',execute(prix));

function execute(){
    console.log(prix);
    count--;
    let lose = `Il te reste ` + count + ' essais';
    var nb = document.getElementById('solution').value;
    if (count >= 0) {
        if (nb == prix) {
            document.getElementById('reponse').value = win;
            document.getElementById('essais').value = '';
        }
        if (nb > prix) {
            document.getElementById('reponse').value = less;
            document.getElementById('essais').value = lose;
        }
        if (nb < prix) {
            document.getElementById('reponse').value = more;
            document.getElementById('essais').value = lose;
        }
    } else {
        document.getElementById('reponse').value = lostime;
        document.getElementById('essais').value = '';
    }
}