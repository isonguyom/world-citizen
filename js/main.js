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
        const res = await fetch('api/search');
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
                <p class="m-0">House: ${item.description}</p>
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

// CHATBOT FUNCTIONALITY
// Toggling opening and closing chatbot
let openChatboxBtn = document.getElementById('chatBtn');
let closeChatbotBtn =document.getElementById('closeChatbot');
let toggleChatbot = function () {
    let chatBox = document.getElementById("chatBox");
    if (chatBox.style.display === "none") {
        openChatboxBtn.style.display = "none"
      chatBox.style.display = "block";
    } else {
      chatBox.style.display = "none";
      openChatboxBtn.style.display = "block"
    }
}
openChatboxBtn.addEventListener('click', toggleChatbot);
closeChatbotBtn.addEventListener('click', toggleChatbot);

// Getting and displaying chat messages
let sendMessage = document.getElementById('sendMessage')
let displaySentMessage = function (){
    // Selecting the input element and get its value 
   let message = document.getElementById("messageInput").value;
    let displaySection = document.getElementById('chatDisplay')
// Create new div and append new message
  let newMessage = document.createElement('DIV')
  newMessage.classList.add('style-node');
  newMessage.innerHTML = message
    //append to display section 
displaySection.append(newMessage);
}
sendMessage.addEventListener('click', displaySentMessage)