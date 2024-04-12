// const key = "c8072081079c4be1b67f729c4746b4c0";
// const url = "https://newsapi.org/v2/everything?q=";
const url = "https://api.worldnewsapi.com/search-news?api-key=fdcfcca52e0942008f3b3878e58ab2dc&text=";
window.addEventListener("load", ()=>{
    fetchNewsData("india");
    activateHeaderLinks();
    document.getElementsByClassName("search-button")[0].addEventListener("click", searchResult);
});

async function fetchNewsData(keyword)
{
    //const result = await fetch(url+""+keyword+"&apiKey="+key);
    const result = await fetch(url+""+keyword);
    const data = await result.json();
    console.log(data);
    // Object.values(data.articles).forEach((value)=>{
    //     displayCardData(value);
    // })
}

// function displayCardData(cardData)
// {
//     if((cardData.urlToImage == null)||(cardData.title.toString().length>70))
//     {
//         return;
//     }
//     const img = cardData.urlToImage;
//     //const date = cardData.publishedAt.toString().substring(0,11);
//     const cardElement = document.createElement("div");
//     const cardImageElement = document.createElement("div");
//     const cardHeadingElement = document.createElement("div");
//     const cardSubheadingElement = document.createElement("div");
//     const cardContentElement = document.createElement("div");
//     cardElement.className = "card";
//     cardImageElement.className = "card-image";
//     cardHeadingElement.className = "card-heading";
//     cardSubheadingElement.className = "card-subheading";
//     cardContentElement.className = "card-content";
//     cardImageElement.style.backgroundImage = `url(${cardData.urlToImage})`;
//     cardHeadingElement.textContent = `${cardData.title}`;
//     cardSubheadingElement.textContent = `${cardData.source.name}`;
//     cardContentElement.textContent = `${cardData.description}`;
//     cardElement.appendChild(cardImageElement);
//     cardElement.appendChild(cardHeadingElement);
//     cardElement.appendChild(cardSubheadingElement);
//     cardElement.appendChild(cardContentElement);
//     cardElement.addEventListener("click", ()=>{
//         window.location.href = `${cardData.url}`
//     })
//     document.getElementsByClassName("main-content")[0].insertAdjacentElement("beforeend", cardElement);
// }

// function activateHeaderLinks()
// {
//     Object.values(document.getElementsByClassName("header-links")).forEach((value)=>{
//         value.addEventListener("click", ()=>{
//             document.getElementsByClassName("main-content")[0].innerHTML = null;
//             fetchNewsData(value.textContent);
//         });
//     });
// }


// function searchResult()
// {
//     const str = document.getElementsByClassName("input-field")[0].value.toString();
//     document.getElementsByClassName("input-field")[0].value = null;
//     if((str==null)||(str.length==0))
//     {
//         return;
//     }
//     document.getElementsByClassName("main-content")[0].innerHTML = null;
//     fetchNewsData(str);
// }
