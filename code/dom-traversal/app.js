console.log("Hi");

const heading = document.querySelector('h1');
console.log(heading);

const paragraph = document.querySelector('p');
console.log(paragraph);

const image = document.querySelector('.bill');
console.log(image);

const firstListItem = document.querySelector('li');
const secondListItem = document.querySelector('li#second');

console.log(firstListItem,secondListItem);


// document.querySelectorAll

const allListItems = document.querySelectorAll('li');
console.log(allListItems);

console.log('Starting loop...');
for(let i=0; i < allListItems.length; i++){
    const currentListItem = allListItems[i];
    console.log(currentListItem);
}
console.log('Ending loop...');

console.clear;

// console.log(href);
// elm.setAttribute("ATTRIBUTE NAME", "DESIRED VALUE");


const img = document.querySelector('img');
const currentSrc = img.getAttribute('src');

img.setAttribute('src', 'https://placecage.com/400/400');


// Find the 'a' tag

const aTag = document.querySelector('a');

// change the href to https://duckduckgo.com

aTag.setAttribute('href', 'https://duckduckgo.com');

// Print the new href
const newHref = aTag.getAttribute('href');
console.log(newHref);

// Try setting the target attribute to be '_blank'
aTag.setAttribute('target', '_blank');

// Find the h1
const heading = document.querySelector('h1');

// Print the current text of h1
console.log(heading.innerText);

// Change the h1's text text to "changed by JS"
heading.innerText = "Changed by JS";

// Append "!!!" to the h1
heading.innerText += '!!!';

// Change the HTML of the 'a' tag to be "This is a <h2>link<h2>"
aTag.innerHTML = 'This is a <h2>link</h2>';
aTag.innerHTML += '!!!';

// Print out the ul's innerText & innerHTML
const unorderedList = document.querySelector('ul');
console.log(unorderedList.innerText);
console.log(unorderedList.innerHTML);

const input = document.querySelector('input');
const currentValue = input.value;
console.log(currentValue);
input.value = 'Hello from JS';


// Getting styles
// 1. Select the DOM Node
const heading = document.querySelector('h1');

// 2. Ask for all of the current styles
const styles = getComputedStyle(heading);

// 3. Ask for properties
console.log(styles.color);
console.log(styles.fontSize); // font-size --> fontSize
console.log(styles.textDecoration); 
console.log(styles.border);


// Find the 'a' tag
const aTag = document.querySelector('a');

//Get all of the current styles for the 'a' tag
const aTagStyles = getComputedStyle(aTag);

// Print out the text color, display, font size and the text decoration of the 'a' tag
console.log(aTagStyles.color);
console.log(aTagStyles.display);
console.log(aTagStyles.fontSize);
console.log(aTagStyles.textDecoration);

// Find the image
const image = document.querySelector('img');

// Print out the borders, width, height and the border-radius properties
const imageStyles = getComputedStyle(image);
console.log('Image Styles');
console.log(imageStyles.border);
console.log(imageStyles.width);
console.log(imageStyles.height);
console.log(imageStyles.borderRadius);

// change styles
const heading = document.querySelector('h1');
heading.style.color = 'hotpink';
heading.style.background = 'green'
heading.style.fontSize = '100px';


const image = document.querySelector('img');
image.style.width = '20px';
image.style.height = '400px';
image.style.border = '50px solid pink';




 const tweet = 'This is a tweet!';
 const author = 'ahlam42';
 const content = `${tweet}, posted by ${author}`;

 const newParagraph = document.createElement('p');

 newParagraph.innerText = content;
 newParagraph.style.color = 'blue';

 const newTweetsDiv = document.querySelector('.newTweet');
 newTweetsDiv.appendChild(newParagraph);