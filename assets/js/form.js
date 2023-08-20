const handleIWillBeThereChange = (evt) => {
    const { target = {} } = evt ?? {};
    const isChecked = (target).checked;

    const quantityEl = document.querySelector('#quantity');
    
    if (isChecked) {
        quantityEl.removeAttribute('disabled');
        quantityEl.value = 1;
    } else {
        quantityEl.value = 0;
        quantityEl.setAttribute('disabled', '');
    }
};

const addIWillBeThereEvtHandler = (element) => {
    if (element) {
        element.addEventListener('change', handleIWillBeThereChange);
    }
};

document.addEventListener('DOMContentLoaded', (() => {
    const confirmedCB = document.querySelector('#confirmed');
    addIWillBeThereEvtHandler(confirmedCB);
}))