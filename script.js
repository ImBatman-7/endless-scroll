// scipt here
const imagecontainer = document.getElementById('image-container')
const loader = document.getElementById('loader')

let fetchedimages = []

const apiKey = 'Z6bLigM8VMDedTgW-ZM1cdels9EnAAk8vp230K0u58c';
const countnumber = 10;


const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${countnumber}`;

async function apiFetch(){
    try{
        const response = await fetch(apiURL);
        fetchedimages = await response.json();
        console.log(fetchedimages)
    }
    catch(error){

    }
    renderimages();
}

function renderimages(){
    fetchedimages.forEach(photo => {
        // setting a tag
        const anchortag = document.createElement('a');
        anchortag.setAttribute('href', photo.links.html);
        anchortag.setAttribute('target', '_blank');
        
        // setting img tag
        const imgtag = document.createElement('img');
        imgtag.setAttribute('src', photo.urls.regular);
        imgtag.setAttribute('title', photo.alt_description);
        imgtag.setAttribute('alt', photo.alt_description);

        //arranging tags
        anchortag.appendChild(imgtag);
        imagecontainer.appendChild(anchortag);
    });
}
// load
apiFetch();