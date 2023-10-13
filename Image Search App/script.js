//access key of api.
const accessKey = "oBdyIoamxJ1JqTRMgeMRfkWIhijWoXIcOxy4dbRknFM";

// declared elements and targeted document to trigger those elements.
//query selectors for class and for the elements which doesn't have class or id.
const formEl = document.querySelector("form");
const searchInputEl = document.getElementById("search-input");
const searchResultsEl = document.querySelector(".search-results");
const showMoreEl = document.getElementById("show-more");


//declaring the value. value with let variable type can change throughout the code.
let inputData = " ";
let page = 1;

//this function is for requesting api and get the results based on input-text/data.
//it's always good choice to generate function below element declaration and then you can call them wherever you want.
//at first we request for the api based on data, which will show us results in one page.after that, by using show more button we will load for more images.
//await wait for the response until the result comes, it doesn't go to the next line.
// jason method is used to convert data into readable data.
//at first the will be empty. After the search first 10 data will be displayed.
//landing page is counted as page 1
//created an element div under image-wrapper const(for each result) and to this element added a class search-result.
//created an img element and a element. altered some properties of this element. for each search 10 item will be shown
//when page is more than 1 which technically becomes 2 after search. thats when show more button will appear.
async function searchImages(){
    inputData = searchInputEl.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;
    console.log(url);
    const response = await fetch(url);
    const data = await response.json();
    if(page === 1){
    searchResultsEl.innerHTML = " ";
    }

    const results = data.results;
    results.map((result)=>{
    const imageWrapper = document.createElement("div");
    imageWrapper.classList.add("search-result");
    const image = document.createElement("img");
    image.src = result.urls.small;
    image.alt = result.alt_description;
    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank";
    imageLink.textContent = result.alt_description;
    
    imageWrapper.appendChild(image);
    imageWrapper.appendChild(imageLink);
    searchResultsEl.appendChild(imageWrapper);
    });

    page++;

    if(page > 1){
        showMoreEl.style.display = "block";
    }
}


//triggered the form as it's submitted we will see the results of images in turn to event. quoted text can be anything. 
// preventDefault() to get-rid-of refresh for every search.
formEl.addEventListener("submit", (event)=>{
    event.preventDefault();
    page = 1;
    searchImages();
    
});

//triggered the button as an event and inside call back the search-images function so that can see more images as we click every time.
showMoreEl.addEventListener("click", ()=>{
    searchImages();
});