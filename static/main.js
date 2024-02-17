
// const readMoreBtn = document.querySelector(".read-more-btn");
// const text = document.querySelector(".text");
// readMoreBtn.addEventListener("click", (e) => {
//     text.classList.toggle("show-more");
//     if (readMoreBtn.innerText === "Read More") {
//         readMoreBtn.innerText = "Read Less";
//     } else {
//         readMoreBtn.innerText = "Read More";
//     }
// })

// const wordReadMoreBtn = document.querySelector(".word-read-more-btn");
// const wordText = document.querySelector(".word-text");
// readMoreBtn.addEventListener("click", (e) => {
//     wordText.classList.toggle("show-more");
//     if (readMoreBtn.innerText === "Read More") {
//         readMoreBtn.innerText = "Read Less";
//     } else {
//         readMoreBtn.innerText = "Read More";
//     }
// })



let onOfCharac = 100
let contents = document.querySelectorAll(".content");
contents.forEach(content => {
    if (content.textContent.length < onOfCharac) {
        content.nextElementSibling.style.display = "none";
    } else {
        let displayText = content.textContent.slice(0, onOfCharac);
        let moreText = content.textContent.slice(onOfCharac);
        content.innerHTML = `${displayText}<span class="dots">....</span><span class="hide more">${moreText}</span>`;
    }
});

function readMore(btn) {
    let post = btn.parentElement;
    post.querySelector(".dots").classList.toggle("hide");
    post.querySelector(".more").classList.toggle("hide");
    btn.textContent == "Read More" ? btn.textContent = "Read Less" : btn.textContent = "Read More";
}