const renderFooter = document.querySelector("footer")
const menu = document.querySelector('.mobile-menu')
const banner = document.querySelector('.banner')
const interval = 2500
let index = 1

setInterval(() => {
    if (index >= 8) index = 1
    else index++
    banner.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url("assets/${index}.JPG")`
}, interval)

const footer = `
    <h2>Contact Us</h2>
    <div class="contact-container">
        <div class="contact">
            <span class="box">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                Email:
            </span>
            <a href="mailto:mailto:wbusch@suvcwmo.org">wbusch@suvcwmo.org</a>
        </div>
        <div class="contact">
            <span class="box">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                Facebook: 
            </span>
            <a target="_blank" href="https://www.facebook.com/groups/129708037211696">https://www.facebook.com/groups/129708037211696</a>
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
        </div>
        ${footer}
    `

    div.appendChild(close)
    document.body.appendChild(div)
})