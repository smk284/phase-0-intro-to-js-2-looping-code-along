// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];

function wrapgGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        
    }
    return gifts;
}
wrapgGifts(gifts);


function writeCards(array, event){
    for (let i = 0; i < array.length; i++){
        array.splice(i,1,`Thank you, ${array[i]}, for the wonderful ${event} gift!`)
    }
    return array;
}
writeCards(["Guadalupe", "Ollie", "Ali"], "birthday");

function countDown(num) {
    let i = num;
    while (i >= 0) {
        console.log(i--);
    }
}