function contact() {
    alert('Contact @xknyth on Telegram for purchase details! Monero only.');
}

document.getElementById('lead-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    if (email) {
        alert('Email saved! We’ll contact you via Telegram (@xknyth).');
        console.log('Captured email:', email);
        document.getElementById('lead-form').reset();
    }
});