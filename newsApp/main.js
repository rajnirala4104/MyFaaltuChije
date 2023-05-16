
const _NEWSAPI = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=2139974812e64d308b801a24cb53aa65"


const newsCard = (newsImageUrl, newsPublishedAt, newsAuthod, newsTitle, newsDescription, newsAriticlesUrl) => {
    return (
        `
        <div class="newsCard col-12 col-md-6 col-lg-4 m-3">
    <div class="card border-0 shadow" style="width: 18rem;">
        <img src="${newsImageUrl}" class="card-img-top" alt="...">
        <div class="card-body">
        <div class="my-2">
        <span>${newsPublishedAt}</span> /
        <span>By ${newsAuthod}</span> 
        </div>
        <div class="mt-3 mb-3">
            <h5 class="card-title">${newsTitle}</h5>
          <p class="card-text">${newsDescription}</p>
        </div>
          <a href="${newsAriticlesUrl}" target="_blank" class="btn btn-primary">Read More</a>
        </div>
      </div>
    `
    )
}


const fetcNewsData = (uri = _NEWSAPI) => {
    fetch(uri)
        .then(res => res.json())
        .then(data => {
            // console.log(data.articles)
            let card = document.getElementById('newsContainer')
            data.articles.forEach(data=>{
                console.log(card)
                card.innerHTML += newsCard(data.urlToImage, data.publishedAt, data.author, data.title, data.description, data.url)
            })
        })
        .catch(err => console.log(err))
}

fetcNewsData()
