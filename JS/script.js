'use strict'

const refs = {
    input: document.querySelectorAll('input'),
    publ: document.querySelector('#input-publ'),
    video: document.querySelector('#input-video'),
    hours: document.querySelector('#input-hours'),
    visits: document.querySelector('#input-visits'),
    studies: document.querySelector('#input-studies'),

    resultPubl: document.querySelector('#output-publ'),
    resultVideo: document.querySelector('#output-video'),
    resultHours: document.querySelector('#output-hours'),
    resultVisits: document.querySelector('#output-visits'),
    resultStudies: document.querySelector('#output-studies'),
    publishers: document.querySelector('#publishers'),
    addBtn: document.querySelector('.js-add-btn'),
    outputBtn: document.querySelector('.js-output-btn'),
}

const REPORT_KEY = "report";

const arrOfInput = Array.from(refs.input);

const report = {
    publ: 0,
    video: 0,
    hours: 0,
    visits: 0,
    studies: 0,
};

let pubNumbers = 0;



refs.addBtn.addEventListener('click', onAddBtnClick);

function onAddBtnClick() {
    
    report.publ += Number(refs.publ.value);
    report.video += Number(refs.video.value);
    report.hours += Number(refs.hours.value);
    report.visits += Number(refs.visits.value);
    report.studies += Number(refs.studies.value);


    localStorage.setItem(REPORT_KEY, JSON.stringify(report));

    arrOfInput.forEach(elem => elem.value = '');
    pubNumbers += 1;
    console.log(report);
};



refs.outputBtn.addEventListener('click', fillsResultsTable)


function fillsResultsTable() {
    const storageReport = JSON.parse(localStorage.getItem(REPORT_KEY));

    refs.resultPubl.textContent = storageReport.publ;
    refs.resultVideo.textContent = storageReport.video;
    refs.resultHours.textContent = storageReport.hours;
    refs.resultVisits.textContent = storageReport.visits;
    refs.resultStudies.textContent = storageReport.studies;
    refs.publishers.textContent = pubNumbers;
};