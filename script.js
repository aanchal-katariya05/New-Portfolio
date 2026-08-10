const btn=document.getElementById("themeBtn");
btn.addEventListener("click",()=>{document.body.classList.toggle("light");btn.textContent=document.body.classList.contains("light")?"☀":"☾";});
function sendMessage(e){e.preventDefault();alert("Thanks! Please connect with me through LinkedIn or GitHub.");e.target.reset();}
const links=document.querySelectorAll('nav a');
const sections=[...document.querySelectorAll('main section')];
window.addEventListener('scroll',()=>{let y=window.scrollY+150;sections.forEach(s=>{if(y>=s.offsetTop&&y<s.offsetTop+s.offsetHeight){links.forEach(a=>a.style.color="");const a=document.querySelector(`nav a[href="#${s.id}"]`);if(a)a.style.color="var(--accent)"}})});
