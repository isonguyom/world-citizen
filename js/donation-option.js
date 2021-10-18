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