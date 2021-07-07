import React from 'react';
import TextSection from './TextSection';
import DateListSection from './DateListSection';

const aboutText = "Jag har alltid varit väldigt teknikintresserad. Jag har byggt datorer, och har alltid varit den som släkt och vänner kontaktar när tekniken strular. Först läste jag till elektriker på gymnasiet, men ändrade sedan inriktning till datorteknik, då jag brinner för datorer och programmering. Jag har programmerat en hel del på min fritid, och även om jag har utbildning i programmering så är jag till största delen självlärd.";
const aboutText2 = "Jag jobbar för tillfället på CGI med trafikverket som kund. Projekten jag jobbar med är GPD Analys och Vägyta Vägkropp. Teamet jag jobbar med har nyligen vunnit det stora ingengörspriset i digitalisering, för projektet Digital Vinter!"
// TODO: find a way to read text from a .txt file and import it here.

const experiences = [
    {
        title: "fullstack utvecklare",
        subtitle: "CGI",
        notes: [
            "GDC Östersund",
            "jobbar mot trafikverket"
        ],
        startDate: new Date(2021, 4)
    },
    {
        title: "matbud",
        subtitle: "foodora",
        notes: [
            "timanställning",
            "matleveranser till kunder"
        ],
        startDate: new Date(2020, 1),
        endDate: new Date(2020, 6)
    },
    {
        title: "städning & underhåll",
        subtitle: "MN mark & park",
        notes: [
            "deltidsanställning",
            "städning, rengörning och underhåll av busskurer"
        ],
        startDate: new Date(2019, 3),
        endDate: new Date(2020, 1)
    },
    {
        title: "sommarjobb",
        subtitle: "jamtli historieland",
        notes: [
            "sommarjobb genom kommunen",
            "kiosk och korvförsäljning",
            "körskolelärare på barnens trafikskola"
        ],
        startDate: new Date(2018, 7),
        endDate: new Date(2018, 8)
    },
    {
        title: "sommarjobb",
        subtitle: "bravida",
        notes: [
            "sommarjobb",
            "kabeldragning och installation av el-utrustning"
        ],
        startDate: new Date(2017, 7),
        endDate: new Date(2017, 8)
    },
    {
        title: "godisplockare",
        subtitle: "pickalot",
        notes: [
            "deltidsanställning",
            "städning och påfyllning av godis"
        ],
        startDate: new Date(2016, 5),
        endDate: new Date(2017, 10)
    },
]

const education = [
    {
        title: "fullstack programmering",
        subtitle: "lexicon",
        notes: [
            "heltid",
            "front-end med react.js, back-end med java spring.io",
            "både SQL och NoSQL databaser",
            "JUnit tester"
        ],
        startDate: new Date(2020, 4),
        endDate: new Date(2021, 2)
    },
    {
        title: "elteknik & datorteknik",
        subtitle: "JGY fyrvalla",
        notes: [
            "2 år elteknik, bytte sedan inriktning och gick 2 år datorteknik",
            "färdigutbildad elektriker utan lärlingstid",
            "grundläggande programmering"
        ],
        startDate: new Date(2015, 8),
        endDate: new Date(2019, 7)
    }
]

function RightSection() {
    return (
        <div className="right-section">
            <TextSection header="om mig" text={[aboutText, aboutText2]} />
            <DateListSection header="erfarenheter" list={experiences} />
            <DateListSection header="utbildning" list={education} />
        </div>
    )
}

export default RightSection
