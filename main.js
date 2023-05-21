/* const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add("show")
        }
        else{
            entry.target.classList.remove("show")
        }
    });
});

const hiddentElement = document.querySelectorAll(".hidden");
hiddentElement.forEach((el) => observer.observe(el));

const info = document.querySelector("#info");
console.log(info)
console.log("hola")
const scrollInfo =() => {
window.scroll({
    top: 600,
    behavior: 'smooth'
  });
}
info.addEventListener('click',scrollInfo);*/

const btn = document.querySelector('#btnForm')
console.log(btn)
btn.addEventListener('click',()=> window.location.href = 'https://forms.gle/PzuhKzzBKQuf66458')