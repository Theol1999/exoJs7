function getSee(){
  var shoeSize = document.getElementById('shoeSize').value;
  var yearOfBirth = document.getElementById('yearOfBirth').value;

  if (isNaN(shoeSize)==false && isNaN(yearOfBirth)==false) {
    var result = ((((shoeSize*2)+5)*50)-yearOfBirth)+1766;
    alert(result);
    }else{
      alert('incorrect');
      }
  }
