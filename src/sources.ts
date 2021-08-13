import avatar from './images/IMG_1253.jpg'

export default {
    profile: {
        name: "Marius Franzén",
        title: "Fullstack utvecklare",
        workplace: "CGI",
        avatar: avatar,
        buttons: [
            {
                label: "CV på Google Docs",
                link: "https://docs.google.com/document/d/1-3GkOMaMEPQoB-SBxvXDJ3l0Bh21wMsR7XPlqaGZ6Dc/edit?usp=sharing"
            },
            {
                label: "Kontakt",
                link: "mailto:marius.franzen1@gmail.com"
            }
        ]
    },
    about: {
        label: "Om mig",
        text: [
            "Jag har alltid varit väldigt teknikintresserad. Jag har byggt datorer, och har alltid varit den som släkt och vänner kontaktar när tekniken strular. Först läste jag till elektriker på gymnasiet, men ändrade sedan inriktning till datorteknik, då jag brinner för datorer och programmering. Jag har programmerat en hel del på min fritid, och även om jag har utbildning i programmering så är jag till största delen självlärd.",
            "Jag jobbar för tillfället på CGI med trafikverket som kund. Projekten jag jobbar med är GPD Analys och Vägyta Vägkropp. Teamet jag jobbar med har nyligen vunnit det stora ingengörspriset i digitalisering, för projektet Digital Vinter!"
        ]
    },
    experiences: {
        label: "Erfarenheter",
        experiences: [
            {
                title: "Fullstack Utvecklare",
                company: "CGI",
                notes: [
                    "GDC Östersund",
                    "Jobbar mot trafikverket"
                ],
                fromDate: new Date(2021, 4),
                toDate: undefined
            },
            {
                title: "Matbud",
                company: "Foodora",
                notes: [
                    "Timanställning",
                    "Levererade mat till kunder"
                ],
                fromDate: new Date(2020, 2),
                toDate: new Date(2020, 7)
            },
            {
                title: "Städning & Underhåll",
                company: "MN Mark & Park",
                notes: [
                    "Deltidsanställning",
                    "Städning, rengörning och underhåll av busskurer"
                ],
                fromDate: new Date(2019, 4),
                toDate: new Date(2020, 2)
            }
        ]
    }
}