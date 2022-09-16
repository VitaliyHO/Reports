'use strict'

const refs = {
    body: document.querySelector('body'),
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
    clearBtn: document.querySelector('.js-clear-btn'),
    modalOpenBtn: document.querySelector('.js-info-modal-open'),
    modalCloseBtn: document.querySelector('.js-info-modal-close'),
    modal: document.querySelector("[data-modal]"),
}

const REPORT_KEY = "report";

const arrOfInput = Array.from(refs.input);

const report = JSON.parse(localStorage.getItem(REPORT_KEY)) ?? {
    publ: 0,
    video: 0,
    hours: 0,
    visits: 0,
    studies: 0,
    pubNumbers: 0,
};

Notiflix.Notify.init({position: 'center-top', fontSize: '18px', timeout: 3000,});

refs.addBtn.addEventListener('click', onAddBtnClick);

function onAddBtnClick() {
    if(refs.hours.value.length === 0){
        return Notiflix.Notify.failure('Поле "Години" повинне бути заповнене');
    };
    
    report.publ += Number(refs.publ.value);
    report.video += Number(refs.video.value);
    report.hours += Number(refs.hours.value);
    report.visits += Number(refs.visits.value);
    report.studies += Number(refs.studies.value);
    report. pubNumbers += 1;

    localStorage.setItem(REPORT_KEY, JSON.stringify(report));

    arrOfInput.forEach(elem => elem.value = '');
};

document.addEventListener('keydown', event => {if(event.keyCode === 13){onAddBtnClick()}});


refs.outputBtn.addEventListener('click', onOutputBtnClick);

function onOutputBtnClick() {
    const storageReport = JSON.parse(localStorage.getItem(REPORT_KEY));

    if(!storageReport){
        refs.resultPubl.textContent = 0;
        refs.resultVideo.textContent = 0;
        refs.resultHours.textContent = 0;
        refs.resultVisits.textContent = 0;
        refs.resultStudies.textContent = 0;
        refs.publishers.textContent = 0;
        return
       };

    refs.resultPubl.textContent = storageReport.publ;
    refs.resultVideo.textContent = storageReport.video;
    refs.resultHours.textContent = storageReport.hours;
    refs.resultVisits.textContent = storageReport.visits;
    refs.resultStudies.textContent = storageReport.studies;
    refs.publishers.textContent = storageReport.pubNumbers;
};

refs.clearBtn.addEventListener('click', onClearBtnClick);

function onClearBtnClick () {
    localStorage.removeItem(REPORT_KEY);

    refs.resultPubl.textContent = '';
    refs.resultVideo.textContent = '';
    refs.resultHours.textContent = '';
    refs.resultVisits.textContent = '';
    refs.resultStudies.textContent = '';
    refs.publishers.textContent = '';

    document.location.reload();
};

refs.modalOpenBtn.addEventListener('click', onModalOpenBtnClick);
refs.modalCloseBtn.addEventListener('click', onModalCloseBtnClick);


function onModalOpenBtnClick() {
    console.log(1);
    refs.modal.classList.toggle("is-hidden");
}

function onModalCloseBtnClick() {
    refs.modal.classList.toggle("is-hidden");

}