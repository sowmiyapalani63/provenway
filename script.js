document.getElementById('bogoForm').addEventListener('change', function (event) {
  const selectedOption = document.querySelector('input[name="unit"]:checked');
  const totalPrice = document.getElementById('totalPrice');

  if (selectedOption) {
    totalPrice.textContent = `$${selectedOption.value}.00 USD`;
  }
});
// validation
document.getElementById('addToCart').addEventListener('click', function () {

  const radioChecked = document.querySelector('input[name="unit"]:checked');


  const sizeValue = document.getElementById('size1').value;
  const size2Value = document.getElementById('size2').value;
  const colorValue = document.getElementById('color1').value;
  const color2Value = document.getElementById('color2').value;

  if (radioChecked && sizeValue && sizeValue !== "" && colorValue && colorValue !== "") {
    alert("Your item is added to cart!");
  } else {
    alert("Please select a unit, size, and color before adding to cart.");
  }
});

//dropdown
document.querySelectorAll('.option-wrapper').forEach(option => {
  option.addEventListener('click', function () {
 
    document.querySelectorAll('.option-wrapper').forEach(opt => {
      opt.classList.remove('active');
      opt.style.borderColor = '';
      opt.style.backgroundColor = '';
      opt.querySelectorAll('.dropdowns').forEach(dropdown => {
        dropdown.style.display = 'none';
      });

      const svgContainer = opt.querySelector('.svg-container svg');
      if (svgContainer) {
        svgContainer.style.display = 'none'; 
      }
    });

   
    const dropdowns = this.querySelectorAll('.dropdowns');
    if (dropdowns) {
      dropdowns.forEach(dropdown => {
        dropdown.style.display = 'flex';
      });
    }

    this.classList.add('active');
    this.style.borderColor = '#FF6B82';
    this.style.backgroundColor = '#FFF9FA';

    
    const svgContainer = this.querySelector('.svg-container svg');
    if (this.classList.contains('popular-wrapper')) {
      if (svgContainer) {
        if (window.matchMedia("(max-width: 465px)").matches) {
          svgContainer.style.display = 'none';
        } else {
          svgContainer.style.display = 'block';
          svgContainer.style.top = '-135px';
        }
      }
    } else {
      if (svgContainer) {
        svgContainer.style.display = 'none'; 
      }
    }
  });
});


document.querySelectorAll('.dropdowns').forEach(dropdown => {
  dropdown.style.display = 'none';
});
