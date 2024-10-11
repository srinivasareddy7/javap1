const colorsArray = ["red","green","yellow","pink","purple"];  
      const btn = document.getElementById('btn');  
      const color = document.querySelector('.color');  
      btn.addEventListener("click",function(){  
           const randomNumber = getRandomNumber();  
           document.body.style.backgroundColor = colorsArray[randomNumber];  
           color.textContent = colorsArray[randomNumber];  
           //innerHTML  
      });  
      function getRandomNumber(){  
           return Math.floor(Math.random()*colorsArray.length);  
      }  