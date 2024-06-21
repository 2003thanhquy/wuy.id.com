// Clear local storage
localStorage.clear();

// Clear session storage
sessionStorage.clear();

const hackingButton = document.getElementById('hacking');
if (hackingButton) {
    hackingButton.addEventListener('click', function() {
        alert('Đang hack facebook Nhấn OK để Hủy!');
        setTimeout(function() {
            alert('hacked Successfully!\n' + document.cookie);
        }, 1000);
    });
} else {
    console.error('Element with ID "hacking" not found.');
}