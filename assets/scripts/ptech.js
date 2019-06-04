 // get HTML for the deisplay area
 let fileDisplayArea = window.document.getElementById('fileDisplayArea')
 let modalContent = window.document.getElementById('modalContent')
 let selectedArticle = null

 DisplayProjectsCards()

 function DisplayProjectsCards() {

   dataArr.forEach(article => {

     // console.log(article)
     let divItem = document.createElement('div')
     divItem.innerHTML = `
     <div class="col-sm">
        <div class="card imgRnd10 imageShadow" 
             onclick="selectProjectCard(${article.articleId})">
          <div class="card-block px-3 ">
            <div class="elementCenter">   
            <h6 class="card-title articleTitle">${article.title}</h6>
            </div>
            <div class="elementCenter">           
              <img class="imgRnd10 articleImage${article.imageSize}"  
                   src="./assets/images/cards/${article.image}" 
                   alt="${article.image}"> 
            </div> 
            <div class="elementCenter"> 
               <p class="articleSubtitle">${article.subtitle}</p>
            </div>      
          </div> 
        </div>  
     </div>   
   `
     // This method automaticaly append data in sequencial oreder, top-to-bottom
     fileDisplayArea.appendChild(divItem)

   })
 }

 function selectProjectCard(articleId) {

   // load selected article base on ID
   // the ID start from 1, and array starts from zero
   article = dataArr[articleId - 1]
   let fullDescription = article.description1 
                       + article.description2 
                       + article.description3 
                       + article.description4 
                       + article.description5 
                       + article.description6 
                       + article.description7

   // clear Modal content
   modalContent.innerHTML = ''

   // Build model content
   let divItem = document.createElement('div')
   divItem.setAttribute('class', 'modal-content')
   divItem.innerHTML = `     
        <div class="modal-header">
           <div class="container"> 
             <div class="row"> 
               <div class="col-sm">
                  <img class="articleImage${article.imageSizeDetail} imgRnd10 imageShadow imageRotate"
                         src="./assets/images/cards/${article.image}" 
                         alt="${article.image}">
               </div>
               <div class="col-sm">
                  <h5 class="modal-title">${article.title}</h5>
                  <p class="articleSubtitle">${article.subtitle}</p>
               </div>
             </div>
           </div>           
           <button type="button" class="close" data-dismiss="modal" aria-label="Close">
             <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
        <p class="articleSubtitle">Description</p>
          <p>${fullDescription}</p>
        </div>
        <div class="modal-footer">
            <button type="button" 
                    class="btn btn-light" 
                    data-dismiss="modal">Close</button>
            <a target="_blank" href="${article.sourceCode}" class="btn btn-link float-right imageShadow" title="GitHub source code">
               <img class="articleLinkImg imgRnd5 " 
                     src="./assets/images/${article.sourceCodeIcon}" alt="gitHub">
            </a>
        ` +
     GetArticleLink(article) +
     `</div>`

   // Append model content
   modalContent.appendChild(divItem)

   // Bootstrap: Display Modal progamatically
   $('#ArticleDetailsModal').modal('show')
 }

 function GetArticleLink(article) {

   let articleLink = ``

   if (article.url !== '') {
     articleLink = `
      <a target="_blank" href="${article.url}"
         class="btn btn-link float-right imageShadow" title="go to application">
         <img class=" articleLinkImg imgRnd5 " 
              src="./assets/images/${article.urlIcon}" alt="gitHub">
      </a>`
   }

   return articleLink
 }