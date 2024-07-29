const accessKey="GIDFKEgBsdRBziGRiknE5wDwuyXUItzWfQhPh25sx_I";

const searchForm=document.getElementById("search");
const searchBox=document.getElementById("box");
const searchResult=document.getElementById("searchResult");
const showBtn=document.getElementById("showBtn");

let keyword="";
let page=1;

async function searchImage(){
    keyword=searchBox.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    const res= await fetch(url);
    const data= await res.json();

    if(page===1){
        searchResult.innerHTML="";
    }



    const results=data.results;
    results.map((result)=>{
        const image=document.createElement("img");
        image.src=result.urls.small;
        const imageLink=document.createElement("a");
        imageLink.href=result.links.html;
        imageLink.target="_blank";
        imageLink.appendChild(image)
        searchResult.appendChild(imageLink);
    })
    moreBtn.style.display="block";
}

searchForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    page=1;
    searchImage();
})

moreBtn.addEventListener('click',()=>{
    page++;
    searchImage()
})