'use strict'

const openModalVideo = () => document.querySelector('#modal-video').classList.add('active');
const closeModalVideo = () => document.querySelector('#modal-video').classList.remove('active');

document.querySelector('#btnTrailer').addEventListener('click', () => { openModalVideo() });
document.querySelector('#close-video').addEventListener('click', () => { closeModalVideo() });
