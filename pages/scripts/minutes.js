const renderMeetings = document.querySelector("#meetings")
const search = document.querySelector("#search")
const meetings = {
    "2022 Meeting Minutes": "meetings/2022%20CRA%20Meeting%20Minutes.pdf",
    "2021 Meeting Minutes": "meetings/2021%20Minutes%20of%20Central%20Region%20Association%20Conference.pdf",
    "2020 Meeting Minutes": "meetings/Central%20Region%20Allied%20Orders%20of%20the%20GAR%20Conference%20Minutes_10-7-20.pdf",
    "2019 Meeting Minutes": "meetings/Central%20Region%20Association%20Meeting%204-2019.pdf",
    "2018 Meeting Minutes": "meetings/CRA%20Meeting%202018.pdf",
    "2017 Meeting Minutes": "meetings/Central%20Region%20Conference%20MInutes%2010-7-17.pdf",
    "2016 Meeting Minutes": "meetings/2016%20Minutes%20of%20Central%20Region%20Association%20Conference.pdf",
    "2015 Meeting Minutes": "meetings/2015%20CRA%20%20Meeting%20minutes.pdf",
    "2014 Meeting Minutes": "meetings/2014%20Minutes%20of%20Central%20Region%20Association%20Conference.pdf",
    "2013 Meeting Minutes": "meetings/2013%20Minutes%20of%20Central%20Region%20Association%20Conference.pdf",
    "2012 Meeting Minutes": "meetings/2012%20Minutes%20of%20Central%20Region%20Association%20Conference.pdf",
    "2011 Meeting Minutes": "meetings/2011%20Minutes%20of%20Central%20Region%20Association%20Conference.pdf",
    "2010 Meeting Minutes": "meetings/2010%20Minutes%20of%20Central%20Region%20Association%20Conference.pdf",
    "2009 Meeting Minutes": "meetings/2009%20Minutes%20of%20Central%20Region%20Association%20Conference.pdf",
    "2008 Meeting Minutes": "meetings/2008%20Minutes%20of%20Central%20Region%20Association%20Conference.pdf",
    "2007 Meeting Minutes": "meetings/2007%20Minutes%20of%20Central%20Region%20Association%20Conference.pdf",
    "2006 Meeting Minutes": "meetings/2006%20Minutes%20of%20Central%20Region%20Association%20Conference.pdf",
    "2005 Meeting Minutes": "meetings/2005%20Minutes%20of%20Central%20Region%20Association%20Conference.pdf",
    "2004 Meeting Minutes": "meetings/2004%20Minutes%20of%20Central%20Region%20Association%20Conference.pdf",
    "2003 Meeting Minutes": "meetings/2003%20Minutes%20of%20Central%20Region%20Association%20Conference.pdf",
    "2002 Meeting Minutes": "meetings/2002%20Minutes%20of%20Central%20Region%20Association%20Conference.pdf",
    "2001 Meeting Minutes": "meetings/2001%20Minutes%20of%20Central%20Region%20Association%20Conference.pdf",
    "2000 Meeting Minutes": "meetings/2000%20Minutes%20of%20Central%20Region%20Association%20Conference.pdf",
    "1999 Meeting Minutes": "meetings/1999%20Minutes%20of%20Central%20Region%20Association%20Conference.pdf",
    "1998 Meeting Minutes": "meetings/1998%20Minutes%20of%20Central%20Region%20Association%20Conference.pdf",
    "1997 Meeting Minutes": "meetings/1997%20Minutes%20of%20Central%20Region%20Association%20Conference.pdf",
    "1996 Meeting Minutes": "meetings/1996%20Minutes%20of%20Central%20Region%20Association%20Conference.pdf",
    "1995 Meeting Minutes": "meetings/1995%20Minutes%20of%20Central%20Region%20Association%20Conference.pdf",
    "1994 Meeting Minutes": "meetings/1994%20Minutes%20of%20Central%20Region%20Association%20Conference.pdf",
    "1993 Meeting Minutes": "meetings/1993%20Minutes%20of%20Central%20Region%20Association%20Conference.pdf",
    "1992 Meeting Minutes": "meetings/1992%20Minutes%20of%20Central%20Region%20Association%20Conference.pdf",
    "1991 Meeting Minutes": "meetings/1991%20Minutes%20of%20Central%20Region%20Association%20Conference.pdf",
    "1990 Meeting Minutes": "meetings/1990%20Minutes%20of%20Central%20Region%20Association%20Conference.pdf",
    "1989 Meeting Minutes": "meetings/1989%20Minutes%20of%20Central%20Region%20Association%20Conference.pdf",
    "1988 Meeting Minutes": "meetings/1988%20Minutes%20of%20Central%20Region%20Association%20Conference.pdf",
    "1987 Meeting Minutes": "meetings/1987%20Minutes%20of%20Central%20Region%20Association%20Conference.pdf",
    "1986 Meeting Minutes": "meetings/1986%20Minutes%20of%20Central%20Region%20Association%20Conference.pdf",
    "1985 Meeting Minutes": "meetings/1985%20Minutes%20of%20Central%20Region%20Association%20Conference.pdf",
    "1984 Meeting Minutes": "meetings/1984%20Minutes%20of%20Central%20Region%20Association%20Conference.pdf",
    "1983 Meeting Minutes": "meetings/1983%20Minutes%20of%20Central%20Region%20Association%20Conference.pdf",
    "1982 Meeting Minutes": "meetings/1982%20Minutes%20of%20Central%20Region%20Association%20Conference.pdf",
    "1981 Meeting Minutes": "meetings/1981%20Minutes%20of%20Central%20Region%20Association%20Conference.pdf",
    "1980 Meeting Minutes": "meetings/1980%20Minutes%20of%20Central%20Region%20Association%20Conference.pdf",
    "1967-1979 Meeting Minutes": "meetings/Minutes%20of%20Central%20Region%20Association_1979-1967.pdf",
    "1940-1966 Meeting Minutes": "meetings/Minutes%20of%20Central%20Region%20Association_1966-1940.pdf"
}


function renderList() {
    renderMeetings.innerHTML = ''
    for (let meeting in meetings) {
        const div = document.createElement('div')
        const a = document.createElement('a')
        a.href = meetings[meeting]
        a.target = "_blank"

        a.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
        ${meeting}
        `
        div.appendChild(a)
    
        renderMeetings.appendChild(div)
    }
}

renderList()


search.addEventListener('input', () => {
    if (search.value.length > 0) {
        const filteredMeetings = Object.keys(meetings).filter(meeting => meeting.toLowerCase().includes(search.value.toLowerCase()))
        renderMeetings.innerHTML = ''

        for (let meeting of filteredMeetings) {
            const div = document.createElement('div')
            const a = document.createElement('a')
            a.href = meetings[meeting]
            a.target = "_blank"
            a.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
            ${meeting}
            `
            div.appendChild(a)

            renderMeetings.appendChild(div)
        }
    }
    else renderList()
})