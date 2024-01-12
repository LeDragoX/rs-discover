const button = document.querySelector('#openModal')
const modalWrapper = button.nextElementSibling

button.addEventListener('click', openModal(modalWrapper))
modalWrapper.addEventListener('onkeydown', closeModal)

function openModal(element) {
  console.log("Elemento", element)
  element.classList.remove('invisible')
}

function closeModal(element) {
  console.log(element.onkeydown)
  if (element.onkeydown.key === 'Escape') {
    element.classList.add('invisible')
  }
}
