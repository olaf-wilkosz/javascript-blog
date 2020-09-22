{
  const titleClickHandler = function(event){
    event.preventDefault();
    const clickedElement = this;
    console.log('Link was clicked!');
    console.log(event);

    /* [DONE] remove class 'active' from all article links  */

    const activeLinks = document.querySelectorAll('.titles a.active');

    for(let activeLink of activeLinks){
      activeLink.classList.remove('active');
    }

    /* [DONE] add class 'active' to the clicked link */

    console.log('clickedElement:', clickedElement);
    clickedElement.classList.add('active');

    /* [DONE] remove class 'active' from all articles */

    const activeArticles = document.querySelectorAll('.posts article.active');

    for(let activeArticle of activeArticles){
      activeArticle.classList.remove('active');
    }

    /* [DONE] get 'href' attribute from the clicked link */

    const articleSelector = clickedElement.getAttribute('href');
    console.log('articleSelector:', articleSelector)

    /* [DONE] find the correct article using the selector (value of 'href' attribute) */

    const targetArticle = document.querySelector(articleSelector);

    console.log('targetArticle:', targetArticle);
    
    /* [DONE] add class 'active' to the correct article */

    targetArticle.classList.add('active');
  }

  const links = document.querySelectorAll('.titles a');

  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }

  const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';

  function generateTitleLinks(){

    /* remove contents of titleList */

    const titleList = document.querySelector(optTitleListSelector).innerHTML = '';

    /* for each article */

    const articles = document.querySelectorAll(optArticleSelector);

      for(let article of articles){
        console.log('article: ', article);
      
        /* get the article id */
        
        const articleId = article.getAttribute('id');
        console.log('articleId: ', articleId);
        
        /* find the title element */
        /* get the title from the title element */

        const articleTitle = article.querySelector(optTitleSelector).innerHTML;
        console.log('articleTitle: ', articleTitle);

        /* create HTML of the link */

        const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
        console.log('linkHTML: ', linkHTML);

        /* insert link into titleList */

        const titleList = document.querySelector('.titles');
        console.log('titleList :', titleList);
        titleList.insertAdjacentHTML('beforeend', linkHTML);
        console.log('titleList :', titleList);

      }

  }

  generateTitleLinks();
}