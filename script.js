// scipt here
const client_id = 'appa';
const count = 10;


const apiURL = `https://api.unsplash.com/photos/random/client_id=${client_id}&count${count}`;

async function scrollingimages(){
    try{
        const response = await fetch(apiURL);
        const data = response.json();
        console.log(data)
    }
    catch(error){

    }
}


// load
scrollingimages();