"use strict";

// Модальное окно профиля

const openBtn = document.querySelectorAll(".squad_post_img"); // кнопка открытия
const closeBtn = document.querySelector("#close_btn"); // кнопка закрытия
const modalOpen = document.querySelector("#modal"); // модальное окно

openBtn.forEach((res) => {
  res.addEventListener("click", openWindow);
});

function openWindow() {
  modalOpen.style.display = "flex";
}

closeBtn.addEventListener("click", closeWindow);

function closeWindow() {
  modalOpen.style.display = "none";
}

// Модальное окно обратной связи

const openB = document.querySelector(".btn_wrap"); // кнопка открытия
const closeB = document.querySelector("#close_btn_feedback"); // кнопка закрытия
const modalO = document.querySelector("#modal_feedback"); // модальное окно

openB.addEventListener("click", openW);

function openW() {
  modalO.style.display = "flex";
}

closeB.addEventListener("click", closeW);

function closeW() {
  modalO.style.display = "none";
}

// Очистить окошко при нажатии на крестик модалка 2

document.querySelector("#close_btn_feedback").onclick = function () {
  document.querySelector(".modal_textarea").value = "";
};

// Второе модальное окно с валидацией

const modal = document.querySelector("#modal_feedback_thanks"); // модальное окно
const openModal = document.querySelector("#modal_btn_feedback"); // кнопка открытия
const closeModal = document.querySelector("#close_btn_feed"); // кнопка закрытия
const inputText = document.querySelector(".modal_textarea");

openModal.addEventListener("click", sendFeedback);
inputText.addEventListener("input", openWin); // при отпускании клавиши

function openWin() {
  openModal.disabled = inputText.value.length < 5;
}

function sendFeedback() {
  modal.style.display = "flex";
  modalO.style.display = "none";
}

closeModal.addEventListener("click", closeWin);

function closeWin() {
  modal.style.display = "none";
}

// Очистить окошко при нажатии на крестик модалка 3

document.querySelector("#close_btn_feed").onclick = function () {
  document.querySelector(".modal_textarea").value = "";
};
