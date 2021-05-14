// scipt here
const imagecontainer = document.getElementById('image-container')
const loader = document.getElementById('loader')

let fetchedimages = []

const apiKey = 'Z6bLigM8VMDedTgW-ZM1cdels9EnAAk8vp230K0u58c';
const countnumber = 10;


const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${countnumber}`;

// for fetching data from the api server
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

    // looping over fetched images
    fetchedimages.forEach(photo => {

        // creating a function which sets attributes by for looping in content dictionary
        function setAttributes(tag, content){
            for (key in content){
                tag.setAttribute(key,content[key])
            }
        }
        
        // creating a tag and bashing attributes in it
        const anchortag = document.createElement('a');
        setAttributes(anchortag, {
            'href':photo.links.html,
            'target':'_blank'
        })

        const imgtag = document.createElement('img');
        setAttributes(imgtag, {
            'src': photo.urls.regular,
            'title': photo.alt_description,
            'alt': photo.alt_description
        })
        
        // appending divs into divs
        anchortag.appendChild(imgtag);
        imagecontainer.appendChild(anchortag);
    });
}

//scrolling infinitely
window.addEventListener('scroll', function(){
    if (window.scrollY + window.innerHeight >= document.body.offsetHeight){
        apiFetch();
    }
})
// load
apiFetch();

