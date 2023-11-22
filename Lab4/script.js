
   document.addEventListener("DOMContentLoaded", function() {
      var element9 = document.getElementById("element9");
      var element10 = document.querySelector("#element10");

      element9.addEventListener("click", function() {

        toggleColors(element9);
      });

      element10.addEventListener("click", function() {
        toggleColors(element10);
      });

      function toggleColors(element) {
        var isClicked = element.classList.contains("clicked");

        if (isClicked) {
          element.style.backgroundColor = "";
          element.style.color = "";
        } else {
          element.style.backgroundColor = "yellow"; 
          element.style.color = "red"; 
        }

        element.classList.toggle("clicked");
      }
    });


    function addImage() {
      const imageContainer = document.body.querySelector('a');
      const newImage = document.createElement('img');
      newImage.src = 'https://faktypro.com.ua/uploads/img/23-cikavih-faktu-pro-kiyiv.jpg';
      newImage.alt = 'Kyiv';
      newImage.id = 'myImage';
      imageContainer.appendChild(newImage);
    }
 
    function increaseImageSize() {
      const image = document.getElementById('myImage');
      const currentWidth = image.width;
      image.width = currentWidth * 1.2;
}
    
    function decreaseImageSize() {
      const image = document.getElementById('myImage');
      const currentWidth = image.width;
      image.width = currentWidth * 0.8; 
    }

    function removeImage() {
      const imageContainer = document.body.querySelector('a');
      const image = document.getElementById('myImage');
      imageContainer.removeChild(image);
}
    

    document.getElementById((18 % 10) + 1).addEventListener('click', function() {
      changeColors(this);
    });


    document.querySelector('body').querySelector('h2').addEventListener('click', function() {
      changeColors(this);
    });