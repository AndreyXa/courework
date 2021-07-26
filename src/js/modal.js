let modalBinco = document.getElementById('modalBinco');
let modalWestfield = document.getElementById('modalWestfield');
let modalGrove = document.getElementById('modalGrove');
let modalCollege = document.getElementById('modalCollege');
let modalMedical = document.getElementById('modalMedical');
let modalMint = document.getElementById('modalMint');

let sel = document.getElementById('openmodal');

let span = document.getElementsByClassName('close');

sel.onclick = function () {
  let value = sel.options[sel.selectedIndex].value;
  if (value === '0') {
    modalBinco.style.display = 'none';
    modalWestfield.style.display = 'none';
    modalGrove.style.display = 'none';
    modalCollege.style.display = 'none';
    modalMedical.style.display = 'none';
    modalMint.style.display = 'none';
  } else if (value === 'binco') {
    modalBinco.style.display = 'block';
    modalWestfield.style.display = 'none';
    modalGrove.style.display = 'none';
    modalCollege.style.display = 'none';
    modalMedical.style.display = 'none';
    modalMint.style.display = 'none';
  } else if (value === 'westfield') {
    modalBinco.style.display = 'none';
    modalWestfield.style.display = 'block';
    modalGrove.style.display = 'none';
    modalCollege.style.display = 'none';
    modalMedical.style.display = 'none';
    modalMint.style.display = 'none';
  } else if (value === 'grove') {
    modalBinco.style.display = 'none';
    modalWestfield.style.display = 'none';
    modalGrove.style.display = 'block';
    modalCollege.style.display = 'none';
    modalMedical.style.display = 'none';
    modalMint.style.display = 'none';
  } else if (value === 'college') {
    modalBinco.style.display = 'none';
    modalWestfield.style.display = 'none';
    modalGrove.style.display = 'none';
    modalCollege.style.display = 'block';
    modalMedical.style.display = 'none';
    modalMint.style.display = 'none';
  } else if (value === 'medical') {
    modalBinco.style.display = 'none';
    modalWestfield.style.display = 'none';
    modalGrove.style.display = 'none';
    modalCollege.style.display = 'none';
    modalMedical.style.display = 'block';
    modalMint.style.display = 'none';
  } else if (value === 'lounge') {
    modalBinco.style.display = 'none';
    modalWestfield.style.display = 'none';
    modalGrove.style.display = 'none';
    modalCollege.style.display = 'none';
    modalMedical.style.display = 'none';
    modalMint.style.display = 'block';
  }
};
span[0].onclick = function () {
  modalBinco.style.display = 'none';
};
span[1].onclick = function () {
  modalWestfield.style.display = 'none';
};
span[2].onclick = function () {
  modalGrove.style.display = 'none';
};
span[3].onclick = function () {
  modalCollege.style.display = 'none';
};
span[4].onclick = function () {
  modalMedical.style.display = 'none';
};
span[5].onclick = function () {
  modalMint.style.display = 'none';
};

window.onclick = function (event) {
  if (event.target == modalBinco) {
    modalBinco.style.display = 'none';
  } else if (event.target == modalWestfield) {
    modalWestfield.style.display = 'none';
  } else if (event.target == modalGrove) {
    modalGrove.style.display = 'none';
  } else if (event.target == modalCollege) {
    modalCollege.style.display = 'none';
  } else if (event.target == modalMedical) {
    modalMedical.style.display = 'none';
  } else if (event.target == modalMint) {
    modalMint.style.display = 'none';
  }
};
