document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});

document.addEventListener('keydown', function(event) {
    if (event.keyCode === 123) {
        event.preventDefault();
    }
});

document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.shiftKey && (event.keyCode === 73 || event.keyCode === 74 || event.keyCode === 67)) {
        event.preventDefault();
    }
    if (event.ctrlKey && event.keyCode === 85) {
        event.preventDefault();
    }
});
