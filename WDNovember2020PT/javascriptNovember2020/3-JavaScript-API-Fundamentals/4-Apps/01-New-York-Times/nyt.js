// Defining a baseURL and key to as part of the request URL
const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'; //api endpoint, pulling data from
const key = 'kADUjuf47nwSPE77YC0IGhhEmhp0UB7G'; //personal access key
let url; //Variable

//SEARCH FORM
// Grab references to all the DOM elements you'll need to manipulate
const searchTerm = document.querySelector('.search'); //creating search term item, targeting query selector for that class
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');

//RESULTS NAVIGATION
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav');

//RESULTS SECTION
const section = document.querySelector('section');

nextBtn.style.display = "none";
previousBtn.style.display = "none";
let pageNumber = 0;   // define the initial page number and status of the navigation being displayed
console.log('PageNumber:', pageNumber);
let displayNav = false;

// This is never used
// Let displayNav = false;

// Event listeners to control the functionality
// Event method that tells form or buttons to wait for an action/data, and gives the function to execute said action
searchForm.addEventListener('submit', fetchResults); //Submit when its in a form
nextBtn.addEventListener('click', nextPage);
previousBtn.addEventListener('click', previousPage);

function fetchResults(e) { // Fetch from an API
    e.preventDefault(); // Use preventDefault() to stop the form submitting
    console.log(e);
    console.log(searchTerm.value);
    url = baseURL + '?api-key=' + key + '&page=' + pageNumber + '&q=' + searchTerm.value; // Assemble full URL, accessing API url and adding key then grabbing searchterm &value
    console.log(url);
    
  //start date and end date  
    if (startDate.value !== "") { //
    console.log(startDate.value);
    url += "&begin_date=" + startDate.value;
    }

    if (endDate.value !== "") {
        console.log(endDate.value);
    url += "&end_date=" + endDate.value;
    }
    console.log(url);
        
fetch(url) //api request returns in json format
    .then(function (result) {
    return result.json();
    })
    .then(function (json) { //this is the promise that returns in json format
    displayResults(json); 
  });
}

function displayResults(json) { //Function to grab json data and attaching/display data on webpage w/html; identifiers, tell data where to be displayed
  while (section.firstChild) { //attaches child node to section part of html by removing primary child and replacing it, either previous results or blank space. Clears out new articles before adding more articles. 
      section.removeChild(section.firstChild);
  }
    
    console.log(json);
    let articles = json.response.docs; //pulling articles from API 

if (articles.length >= 10 && pageNumber == 0) {
        nextBtn.style.display = 'block'; //shows the nav display if 10 items are in the array
        previousBtn.style.display = 'none'; 
    } else if (articles.length >= 10) {
        nextBtn.style.display = 'block'; //shows the nav display if 10 items are in the array
        previousBtn.style.display = 'block'; 
    } else if (pageNumber > 0) {
        nextBtn.style.display = 'none';
        previousBtn.style.display ='block';
    } else {
        nextBtn.style.display = 'none'; //hides the nav display if less than 10 items are in the array
        previousBtn.style.display = 'none';
    };

if (articles.length === 0) {
    console.log("Sorry. No Results");
    } else { //This builds out the frame for out HTML to display each article
    for(let i = 0; i < articles.length; i++) {
        let article = document.createElement('article');
        let heading = document.createElement('h2');
        let link = document.createElement('a');
        let img = document.createElement('img');
        let para = document.createElement('p');  
        let clearfix = document.createElement('div');
        let current = articles[i];
        
        console.log("Current:", current);
        
        link.href = current.web_url;
        console.log(link);
        link.textContent = current.headline.main;
        para.textContent = 'Keywords: '; 

      for(let j = 0; j < current.keywords.length; j++) { //formatting the keywords, pulling from api
        let span = document.createElement('span');   
        span.textContent += current.keywords[j].value + ' ';   
        para.appendChild(span);
      }
        
      if(current.multimedia.length > 0) { //pulls the pictures from the nyt by the array
        img.src = 'http://www.nytimes.com/' + current.multimedia[0].url;
        img.alt = current.headline.main;
      }
        
        clearfix.setAttribute('class', 'clearfix');
        
        article.appendChild(heading);
        heading.appendChild(link);
        article.appendChild(img);
        article.appendChild(para);
        article.appendChild(clearfix);
        section.appendChild(article);
        
    }
  }
};

function nextPage(e) {
   pageNumber++; 
   fetchResults(e);  
   console.log("Page number:", pageNumber); 
};

function previousPage(e) {
  if(pageNumber > 0) { 
    pageNumber--; 
  } else {
    return; 
  }
  fetchResults(e); 
  console.log("Page:", pageNumber); 

};

/*
const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
const key = 'b2e02612e179494c9f1f57577b582a0a';
let url;
 
const searchTerm = document.querySelector('.search');
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav');
const section = document.querySelector('section');
 
nav.style.display = 'none';
 
let pageNumber = 0;
// console.log('PageNumber:', pageNumber);
 
searchForm.addEventListener('submit', fetchResults);
nextBtn.addEventListener('click', nextPage);
previousBtn.addEventListener('click', previousPage);
 
function fetchResults(e) {
  // console.log(e);
  e.preventDefault();
  console.log(e);
  url = `${baseURL}?api-key=${key}&page=${pageNumber}&q=${searchTerm.value}`;
  console.log('URL:', url);
 
  if (startDate.value !== '') {
    console.log(startDate.value)
    url +=  '&begin_date=' + startDate.value;
  }
   
  if (endDate.value !== '') {
    console.log(endDate.value)
    url += '&end_date=' + endDate.value;
  }
 
  fetch(url)
    .then(function(result) {
    //  console.log(result, 'line 43')
      return result.json();
    })
    .then(function(json) {
      console.log(json);
      displayResults(json);
    })
  console.log('this is a test');
}
 
function displayResults(json) {
  // console.log('Display Results', json);
  // console.log(json.response.docs);
 
  while (section.firstChild) {
    section.removeChild(section.firstChild);
  }
 
  let articles = json.response.docs;
  // console.log(articles);
 
  if (articles.length === 0) {
    console.log('No results');
  } else {
    for (let i = 0; i < articles.length; i++) {
      console.log(i);
      let article = document.createElement('article');
      let heading = document.createElement('h2');
      let link = document.createElement('a');
      let img = document.createElement('img');
      let para = document.createElement('p');
      let clearfix = document.createElement('div');
 
      let current = articles[i];
      console.log('Current:', current);
 
      link.href = current.web_url;
      link.target='blank'
      link.textContent = current.headline.main;
 
      para.textContent = 'Keywords: ';
 
      for (let j = 0; j < current.keywords.length; j++) {
        let span = document.createElement('span');
        span.textContent += current.keywords[j].value +', ';
        para.appendChild(span);
      }
 
      if (current.multimedia.length > 0) {
        img.src = 'http://www.nytimes.com/' + current.multimedia[0].url;
        img.alt = current.headline.main;
      }
 
      clearfix.setAttribute('class', 'clearfix');
 
      article.appendChild(heading);
      heading.appendChild(link);
      article.appendChild(img);
      article.appendChild(para);
      article.appendChild(clearfix);
      section.appendChild(article);
    }
  }
 
  if (articles.length === 10) {
    nav.style.display = 'block';
    previousBtn.style.display = 'block';
    nextBtn.style.display = 'block';
  } else if (articles.length < 10 && pageNumber > 0){
    nav.style.display = 'block';
    previousBtn.style.display = 'block';
    nextBtn.style.display = 'none';
  } else {
    nav.style.display = 'none';
  }
}
 
function nextPage(e) {
  // console.log('Next button clicked');
  pageNumber++;
  fetchResults(e);
  console.log('Page Number:', pageNumber);
}
 
function previousPage(e) {
  // console.log('Previous button clicked');
  if (pageNumber > 0) {
    pageNumber--;
    fetchResults(e);
  } else {
    return;
  }
  fetchResults(e);
  console.log('Page:', pageNumber);
}

*/