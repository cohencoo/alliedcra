const renderFooter = document.querySelector("footer")
const menu = document.querySelector('.mobile-menu')
const banner = document.querySelector('.banner')
const directory = document.location.href.includes('alliedcra.org') ? "" : "assets/"
const interval = 2500
let index = 1

setInterval(() => {
    if (index >= 8) index = 1
    else index++
    banner.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url("${directory}${index}.jpg")`
}, interval)

const footer = `
    <h2>Contact Us</h2>
    <div class="contact-container">
        <div class="contact">
            <span class="box">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-phone-outgoing"><polyline points="23 7 23 1 17 1"></polyline><line x1="16" y1="8" x2="23" y2="1"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                Phone: 
            </span>
            <a href="tel:555-555-5555">555-555-5555</a>
        </div>
        <div class="contact">
            <span class="box">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                Email:
            </span>
            <a href="mailto:example@outlook.com">example@outlook.com</a>
        </div>
        <div class="contact">
            <span class="box">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line></svg>
                Location: 
            </span>
            1234 Main St. City, State 12345
        </div>
    </div>

    <hr>

    <h2>Links</h2>
    <div class="link-container">
        <a target="_blank" href="pages/pdf/CRA Bylaws 2017.pdf">BYLAWS LINK</a>
        <a target="_blank" href="pages/officers.html">Your CRA Officers</a>
        <a target="_blank" href="pages/pdf/Central Region brochure.pdf">The Central Region Association Informational Brochure </a>
        <a target="_blank" href="pages/map.html">Central Region Association Map</a>
        <a target="_blank" href="pages/pdf/cra_ceremonies.pdf">Central Region Association Ceremonies</a>
        <a target="_blank" href="pages/pdf/Central Region Commanders.pdf">Past Central Region Commanders and Encampment Locations</a>
        <a target="_blank" href="pages/minutes.html">CRA Meeting Minutes</a>
        <a target="_blank" href="pages/commander.html">Past Photos</a>
    </div>
    <br>
    <p>
        Copyright ${new Date().getUTCFullYear()} - Central Region Association of the Allied Orders of the Grand Army of the Republic
    </p>
`

if (renderFooter) renderFooter.innerHTML = footer

menu.addEventListener('click', () => {
    const div = document.createElement('div')
    const close = document.createElement('div')
    
    div.classList.add('menu')
    close.addEventListener('click', () => div.remove())
    close.classList.add('close')
    close.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="width: 2rem; height: 2rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>'

    div.innerHTML = `
        <div style="display: flex; align-items: center">
            <img src="assets/logo.png" style="margin-right: 1rem; width: 3rem; height: 3rem" alt="Logo">
            <div>
                <h2 style="font-weight: 600; margin: 0">Allied CRA</h2>
                <p class="description" style="font-weight: 400; text-transform: uppercase; margin: 0; color: #555; font-size: 0.6rem">Allied Orders of the Grand Army of <br> the Republic</p>
            </div>
        </div>

        <h2 style="margin-top: 2rem">Meeting Information</h2>
        <div class="links">
            <a target="_blank" href="pages/minutes.html">Meeting Minutes</a>
            <a target="_blank" href="pages/pdf/CentralRegionMeeting2022.pdf">CRA 2022 Meeting</a>
            <a target="_blank" href="pages/pdf/2022CRALunchMenu.pdf">Saturday Lunch Menu</a>
        </div>
        ${footer}
    `

    div.appendChild(close)
    document.body.appendChild(div)
})