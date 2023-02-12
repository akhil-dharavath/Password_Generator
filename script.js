function generatePassword(len) {
  var length = len,
    charset =
      '!"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~',
    retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}
function password1(len) {
  let capital = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let small = 'abcdefghijklmnopqrstuvwxyz'
  let special = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
  let number = '0123456789'

  for (let c = 0; c < 1000; c++) {
    var capitalCheck, smallCheck, specailCheck, numberCheck;
    var pass = generatePassword(len);
    capitalCheck = 0, smallCheck = 0, specailCheck = 0, numberCheck = 0;
    for (let i = 0; i < pass.length; i++) {
      if (capital.includes(pass.charAt(i))) {
        capitalCheck++;
      }
      else {
        if (small.includes(pass.charAt(i))) {
          smallCheck++;
        }
        else {
          if (special.includes(pass.charAt(i))) {
            specailCheck++;
          }
          else {
            if (number.includes(pass.charAt(i))) {
              numberCheck++;
            }
          }
        }
      }
    }
    console.log(capitalCheck, smallCheck, specailCheck, numberCheck)
    if (capitalCheck > 0 && smallCheck > 0 && specailCheck > 0 && numberCheck > 0)
      break;
  }
  console.log(pass.length)
  empty1.innerHTML = pass;
  setTimeout(() => {
    let key = prompt('enter some value to save the password ')
    let breaking = 0
      for (var i = 0; i < localStorage.length; i++) {
        if (key == localStorage.key(i)) {
          alert('This key already exists')
          breaking++;
          break;
        }
      }
      if(key==''){
        alert('Not provided required values')}
      else{
        if (breaking == 0 && !key=='')
        localStorage.setItem(key, pass);
      }
  }, 700)
}

function saved() {
  var text = 'Saved Passwords are '
  for (var i = 0; i < localStorage.length; i++) {
    text = text + "<br>" + localStorage.key(i) + ' : ' + localStorage.getItem(localStorage.key(i));
  }
  if (localStorage.length > 0)
    values.innerHTML= text
  else
    values.innerHTML= 'No saved Passwords'
}






edit.addEventListener("click", (e) => {
  e.preventDefault()
  let k = key1.value
  let v = value1.value
  let break1 = 0
  for (var i = 0; i < localStorage.length; i++) {
    if (k == localStorage.key(i)) {
      if(!k=='' && !v==''){
      localStorage.setItem(k, v);
        key1.value='';value1.value=''
      break1++;
      break;
    }}
  }
  if(k=='' || v=='')
    alert('Not provided required values')
  else{
  if (break1 == 0) {
    alert('There is no such key')
  }
  }
})

add.addEventListener("click", (e) => {
  e.preventDefault()
  let k = key1.value
  let v = value1.value
  let breaking = 0
  for (var i = 0; i < localStorage.length; i++) {
    if (k == localStorage.key(i)) {
      alert('This key already exists')
      breaking++;
      break;
    }
  }
  if(k=='' || v=='')
    alert('Not provided required values')
  else{ 
    if (breaking == 0)
    localStorage.setItem(k, v);
        key1.value='';value1.value=''
  }
})

delet.addEventListener("click", (e) => {
  e.preventDefault()
  let k = key1.value
  if (localStorage.length == 0)
    alert('It\'s already empty')
  for (var i = 0; i < localStorage.length; i++) {
    if (k == localStorage.key(i)) {
      localStorage.removeItem(k);
        key1.value='';value1.value=''
      break;
    }
    if (i == localStorage.length - 1) {
      alert('There is no such key')
    }
  }
})

clear1.addEventListener("click", (e) => {
  e.preventDefault()
  if (localStorage.length == 0)
    alert('It\'s already empty')
  else
    localStorage.clear();
        key1.value='';value1.value=''
})
