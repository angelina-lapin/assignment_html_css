const url = "https://api.noroff.dev/api/v1/rainy-days";


const resultContainer = document.querySelector(".bestsellers");

async function makeApiCall() {
    try{
        const response = await fetch(url);
        const results = await response.json();
        console.log(results);
    } catch (error){
        console.log(error);
        resultContainer.innerHTML = error
    }
}

makeApiCall();