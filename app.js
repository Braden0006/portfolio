const lineIcon = document.querySelector(".line-icon");
const linkContainer = document.querySelector('.link-container')

lineIcon.addEventListener("click", () => {
    linkContainer.classList.toggle('hidden')
});
