var nappi = document.getElementById('magic');
var prestoNappi = document.getElementById('nappi1');
var abraNappi = document.getElementById('nappi2');

function sayMagicWord(event) {
    if (event.target === prestoNappi) {
        alert('Change-o!');
    } else if (event.target === abraNappi) {
        alert('Cadabra!');
    } else {
        alert('Shazam!');
    }
    console.log({ event }); // for debugging
}

prestoNappi.addEventListener('click', sayMagicWord)
abraNappi.addEventListener('click', sayMagicWord)
nappi.addEventListener('click', sayMagicWord) 