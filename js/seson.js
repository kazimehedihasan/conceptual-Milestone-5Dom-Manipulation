let total = 0;

function handleCLikBtn(target){
    const ontainer = document.getElementById('selected-items');
    const itemName = (target.parentNode.childNodes[1].innerText);
    const me = document.createElement('me');
    me.innerText = itemName;
   ontainer.appendChild(me);

//     
const he = target.parentNode.childNodes[5].innerText.split(" ")[1];
total = parseInt(total) + parseInt(he);
document.getElementById('kazi').innerText = total;
}