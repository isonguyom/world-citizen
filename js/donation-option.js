// TOGGLING BETWEEN PICKUP ADDRESS INPUT FIELD AND DONATION CENTERS SELECT OPTIONS
let selectOption = document.getElementById('selectDonationOption');
selectOption.addEventListener('change', function() {
    let pickupAddressInput = document.getElementById('pickupInput');
    let pickupAddress = document.getElementById('pickupAddress');
    let selectDonationCenter = document.getElementById('selectCenter')
    console.log('You selected: ', this.value);
    if(this.selectedIndex === 1) {
        pickupAddress.style.display = 'block';
        pickupAddressInput.disabled = false
        selectDonationCenter.style.display ='none'
    } else if (this.selectedIndex == 2) {
        pickupAddress.style.display = 'none';
selectDonationCenter.style.display ='block'
    } else {
        pickupAddress.style.display = 'block';
        pickupAddressInput.disabled = true
        selectDonationCenter.style.display ='none'
    }
    
  });

let uploadField = document.getElementById("fileUpload");

uploadField.onchange = function() {
    if(this.files[0].size > 2097152){
        let invalidFeedback = document.getElementById('fileInvalidFeedback')
    //    alert("File is too big!");
    invalidFeedback.style.display = 'block';
       invalidFeedback.innerHTML = 'File is either too big'
       this.value = "";
    };
};

let donationForm = document.querySelector('#donationForm')
donationForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const isValid = donationForm.checkValidity();

if ( isValid ) {
    document.querySelector('.wc-modal').style.display = 'flex'
  }
});
