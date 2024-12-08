const API_KEY = "47508443-dec4cffb8f44668b6640702d9"

const gallery = document.querySelector(".gallery")

const params = new URLSearchParams({
    key: API_KEY,
    q: "red rose",
    image_type: "photo",
    orientation: "horizontal",
    safesearch: "true"
})

fetch(`https://pixabay.com/api/?${params}`)
.then((res) => {
    if (!res.ok) {
        throw new Error(res.statusText)
    }
    return res.json()
})
.then(data => {
    gallery.insertAdjacentHTML("beforeend", createMarkup(data.hits))
    
})
.catch(error => console.log(error))

function createMarkup(arr) {
    return arr.map(({id, previewURL, tags}) => `
<li data-id="${id}">
  <img src="${previewURL}" alt="${tags}" width="360">
</li>
    `).join("")
}