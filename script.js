const wishEl = document.getElementById('wish');
const wishTypeEl = document.getElementById("wish-type");
const imageEl = document.getElementById("img-container");
const wishSendBtn = document.getElementById("send-msg-btn");

wishTypeEl.focus();

wishSendBtn.addEventListener("click", function() {
    if (wishTypeEl.value.length > 4) {
        imageEl.style.display = "block";
        wishEl.style.display = "none";
        wishTypeEl.style.display = "none";
        wishSendBtn.style.display = "none";
    };
    setTimeout(function() {
        imageEl.style.display = "none";
        
    }, 4000);
});

