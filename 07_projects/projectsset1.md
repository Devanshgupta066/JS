# Projects relaetd to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## Project 1 - color changer

```javascript
console.log("hey")
//solution code of color changer
const buttons= document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e)
    console.log(e.target)
    if(e.target.id === 'grey'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'white'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'blue'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'purple'){
      body.style.backgroundColor = e.target.id;
    }
  });
});


```

## Project 2 - bmi calculator 

```javascript

const form = document.querySelector('form')
//Here this usecase will give you empty (if used here const height)
//const height = parseInt(document.querySelector('#height').value)
form.addEventListener('submit', function (e) {
  e.preventDefault()

  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results')

  if( height <= 0 || isNaN(height)){
    results.innerHTML ='Please give a valid height.';
    return;
  }else if(weight < 0 || isNaN(weight)){
    results.innerHTML ='Please give a valid weight.';
    return;
  }

    const bmi = ((weight / ((height*height)/10000)).toFixed(2));
    //show the results 
    results.innerHTML = `<span>${bmi}</span><br>`;
  

  if(bmi < 18.6){
    results.innerHTML += `Your bmi is ${bmi}, you are under weight(kuposhit)`;
  }else if(bmi >= 18.6 && bmi <= 24.9){
    results.innerHTML += `Your bmi is ${bmi}, you are perfectly healthy (waah yaar)`;
  }else if(bmi > 24.9){
    results.innerHTML += `Your bmi is ${bmi}, you are over weight(mote sale)`;
  }
})