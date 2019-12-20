const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links-hamburger");
const links = document.querySelectorAll(".nav-links-hamburger li");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});

function submitForm(action, target)
{
  document.getElementById('Contact').target = target
  document.getElementById('Contact').action = action;
  document.getElementById('Contact').submit();
}

const ipFormInput = document.getElementById('ipFormInput');

    fetch('https://api.ipify.org?format=json')
        .then((response) => { return response.json() })
        .then((json) => {
            let ip = json.ip;
            ipFormInput.value = ip;
        })
        .catch((err) => { console.log(`Error getting IP Address: ${err}`) })