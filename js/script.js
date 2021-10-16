// GLOBAL DECLARATIONS
const searchList = document.getElementById('searchList');
const searchInput = document.getElementById("searchInput");
let searchContainer = document.querySelector('.wc-search-container')
let searchResults = [];

// SEARCH MANIPULATIONS
// Get search input value
searchInput.addEventListener("keyup", e => {
    const searchString = e.target.value.toLowerCase();
    searchContainer.style.display="block";
    console.log(searchString);
    const filteredSearch = searchResults.filter(item => {
        return (
            item.name.toLowerCase().includes(searchString) ||
            item.house.toLowerCase().includes(searchString)
        );
    });
    loadItems();
    displaySearchResults(filteredSearch);
});

// Load search data
const loadItems = async () => {
    try {
        const res = await fetch('https://hp-api.herokuapp.com/api/characters');
        searchResults = await res.json();
        // displaySearchResults(searchResults);
    } catch (err) {
        console.error(err);
    }
};

// Display search result
const displaySearchResults = (items) => {
    const searchItem = items
        .map((item) => {
            return `
            <li class="wc-search-item mb-2 border p-1">
                <h6 class="m-0">${item.name}</h6>
                <p class="m-0">House: ${item.house}</p>
            </li>
        `;
        })
        .join('');
    
    if (searchItem === undefined || searchItem.length == 0 || searchInput.value == "") {
    // array empty or does not exist
    searchList.innerHTML = "Search result not found...";

}
else {
    searchList.innerHTML = searchItem;
}
};

// Close search result dropdown
let closeSearch = document.getElementById('closeSearchBtn').addEventListener('click', function() {
    if (searchContainer.style.display="block") {
        searchContainer.style.display="none";
    }
})


// FORMS VALIDATIONS
let validateForm = function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
}

//TOGGLING PASSWORD VISIBILITY
//password
const togglePswVisibility = document.querySelector('#pswVisibility');
const password = document.querySelector('#psw');
togglePswVisibility.addEventListener('click', function (e) {

    
    if (password.type === "password") {
        password.type = "text";
        this.innerHTML = '<span class="iconify" data-icon="eva:eye-fill" style="color: #414141;" data-width="20"></span>'
    } else {
        password.type = "password";
        this.innerHTML = '<span id="eyeSlash" class="iconify wc-eye-slash" data-icon="eva:eye-off-fill" style="color: #414141;" data-width="20"></span>'
    }
});
// confirm password
const toggleConfirmPswVisibility = document.querySelector('#confirmPswVisibility');
const confirmPassword = document.querySelector('#confirmPsw');
toggleConfirmPswVisibility.addEventListener('click', function (e) {

    
    if (confirmPassword.type === "password") {
        confirmPassword.type = "text";
        this.innerHTML = '<span class="iconify" data-icon="eva:eye-fill" style="color: #414141;" data-width="20"></span>'
    } else {
        confirmPassword.type = "password";
        this.innerHTML = '<span id="eyeSlash" class="iconify wc-eye-slash" data-icon="eva:eye-off-fill" style="color: #414141;" data-width="20"></span>'
    }
});

// TOGGLING BETWEEN PICKUP ADDRESS INPUT FIELD AND DONATION CENTERS SELECT OPTIONS
let donationOption = document.getElementById('donationOptions');
let homePickup = document.getElementById('homePickup');
let donationCenter = document.getElementById('donationCenter');
let pickupAddress = document.getElementById('pickupAddress');
let pickupInputField = document.getElementById('pickupInput');
let donationCentersSelect = document.getElementById('selectCenter');

if (donationOption.value = homePickup) {
    pickupInputField.enabled
} else if (donationOption.value = donationCenter) {
    pickupAddress.style.display ='none'
donationCentersSelect.style.display = 'block'
} else {
    pickupInputField.disabled;
    donationCentersSelect.style.display = 'none'

}