    const vehiclesDiv = document.getElementById('vehicles');
    vehiclesDiv.style.display = 'none';

    document.getElementById('toggleVehicles').addEventListener('click', function (event) {
      event.preventDefault(); 
      if (vehiclesDiv.style.display === 'none') {
        vehiclesDiv.style.display = 'block'; 
      } else {
        vehiclesDiv.style.display = 'none';  
      }
     });

    const energyLink = document.getElementById('energyToggle'); 
    const energyDiv = document.getElementById('energy');  
   
    energyLink.addEventListener('click', function (event) {
      event.preventDefault();
    
      if (energyDiv.style.display === 'none' || energyDiv.style.display === '') {
        energyDiv.style.display = 'block'; 
      } else {
        energyDiv.style.display = 'none'; 
      }
    });

    const chargingLink = document.getElementById('chargingToggle'); 
    const chargingDiv = document.getElementById('charging'); 

    chargingLink.addEventListener('click', function (event) {
    event.preventDefault();
     
    if (chargingDiv.style.display === 'none' || chargingDiv.style.display === '') {
      chargingDiv.style.display = 'block'; 
    } else {
      chargingDiv.style.display = 'none'; 
    }
    });

    const discoverLink = document.getElementById('discoverToggle'); 
    const discoverDiv = document.getElementById('discover');

    discoverLink.addEventListener('click', function (event) {
    event.preventDefault(); 

    if (discoverDiv.style.display === 'none' || discoverDiv.style.display === '') {
      discoverDiv.style.display = 'block';
    } else {
      discoverDiv.style.display = 'none'; 
    }
  });

    const shopLink = document.getElementById('shopToggle');
    const shopDiv = document.getElementById('shop'); 

    shopLink.addEventListener('click', function (event) {
      event.preventDefault(); 

      if (shopDiv.style.display === 'none' || shopDiv.style.display === '') {
        shopDiv.style.display = 'block'; 
      } else {
        shopDiv.style.display = 'none'; 
      }
    });

    const menuButton = document.getElementById('menuToggle'); 
    const menu = document.getElementById('menu'); 

    menuButton.addEventListener('click', function() {
      if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block'; 
      } else {  
        menu.style.display = 'none'; 
      }
    });

const vehiclesToggle = document.getElementById('toggleVehicles');
const energyToggle = document.getElementById('energyToggle');
const chargingToggle = document.getElementById('chargingToggle');
const discoverToggle = document.getElementById('discoverToggle');

