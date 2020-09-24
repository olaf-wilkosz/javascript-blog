{
  const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles',
    optArticleTagsSelector = '.post-tags .list',
    optArticleAuthorSelector = '.post-author',
    optTagsListSelector = '.tag.list';

  function titleClickHandler(event) {
    event.preventDefault();
    const clickedElement = this;
    // console.log(event);

    /* [DONE] remove class 'active' from all article links  */

    const activeLinks = document.querySelectorAll('.titles a.active');

    for (let activeLink of activeLinks) {
      activeLink.classList.remove('active');
    }

    /* [DONE] add class 'active' to the clicked link */

    clickedElement.classList.add('active');

    /* [DONE] remove class 'active' from all articles */

    const activeArticles = document.querySelectorAll('.posts article.active');

    for (let activeArticle of activeArticles) {
      activeArticle.classList.remove('active');
    }

    /* [DONE] get 'href' attribute from the clicked link */

    const articleSelector = clickedElement.getAttribute('href');

    /* [DONE] find the correct article using the selector (value of 'href' attribute) */

    const targetArticle = document.querySelector(articleSelector);

    /* [DONE] add class 'active' to the correct article */

    targetArticle.classList.add('active');
  }

  function generateTitleLinks(customSelector = '') {

    /* remove contents of titleList */

    const titleList = document.querySelector(optTitleListSelector);
    titleList.innerHTML = '';

    /* for each article */

    const articles = document.querySelectorAll(optArticleSelector + customSelector);

    let html = '';

    for (let article of articles) {

      /* get the article id */

      const articleId = article.getAttribute('id');

      /* find the title element */
      /* get the title from the title element */

      const articleTitle = article.querySelector(optTitleSelector).innerHTML;

      /* create HTML of the link */

      const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';

      /* insert link into titleList */

      html = html + linkHTML;
    }

    titleList.innerHTML = html;

    const links = document.querySelectorAll('.titles a');

    for (let link of links) {
      link.addEventListener('click', titleClickHandler);
    }

  }

  generateTitleLinks();

  function generateTags() {
    /* [NEW] create a new variable allTags with an empty array */
    let allTags = [];

    /* find all articles */
    const articles = document.querySelectorAll(optArticleSelector);

    /* START LOOP: for every article: */
    for (let article of articles) {

      /* find tags wrapper */
      const tagsWrapper = article.querySelector(optArticleTagsSelector);
      tagsWrapper.innerHTML = '';

      /* make html variable with empty string */
      let html = '';

      /* get tags from data-tags attribute */
      const articleTags = article.getAttribute('data-tags');

      /* split tags into array */
      const articleTagsArray = articleTags.split(' ');

      /* START LOOP: for each tag */
      for (let tag of articleTagsArray) {

        /* generate HTML of the link */
        const linkHTML = '<li><a href="#tag-' + tag + '">' + tag + '</a></li> ';

        /* add generated code to html variable */
        html = html + linkHTML;

        /* [NEW] check if this link is NOT already in allTags */
        if(allTags.indexOf(linkHTML) == -1){

          /* [NEW] add generated code to allTags array */
          allTags.push(linkHTML);
        }

      }

      /* END LOOP: for each tag */

      /* insert HTML of all the links into the tags wrapper */
      tagsWrapper.innerHTML = html;

    }

    /* END LOOP: for every article: */

    /* [NEW] find list of tags in right column */
    const tagList = document.querySelector('.tags');

    /* [NEW] add html from allTags to tagList */
    tagList.innerHTML = allTags.join(' ');

  }

  generateTags();

  function tagClickHandler(event){
    /* prevent default action for this event */

    event.preventDefault();

    /* make new constant named "clickedElement" and give it the value of "this" */

    const clickedElement = this;

    /* make a new constant "href" and read the attribute "href" of the clicked element */

    const href = clickedElement.getAttribute('href');

    /* make a new constant "tag" and extract tag from the "href" constant */

    const tag = href.replace('#tag-', '');

    /* find all tag links with class active */

    const activeTags = document.querySelectorAll('a.active[href^="#tag-"]');

    /* START LOOP: for each active tag link */

    for (let activeTag of activeTags) {

      /* remove class active */

      activeTag.classList.remove('active');

    }

    /* END LOOP: for each active tag link */

    /* find all tag links with "href" attribute equal to the "href" constant */

    const sameTags = document.querySelectorAll('a[href="' + href + '"]');

    /* START LOOP: for each found tag link */

    for (let sameTag of sameTags) {

      /* add class active */

      sameTag.classList.add('active');

    }

    /* END LOOP: for each found tag link */

    /* execute function "generateTitleLinks" with article selector as argument */

    generateTitleLinks('[data-tags~="' + tag + '"]');

  }

  function addClickListenersToTags(){
    /* find all links to tags */

    const tags = document.querySelectorAll('a[href^="#tag-"]');

    /* START LOOP: for each link */

    for (let tag of tags) {

      /* add tagClickHandler as event listener for that link */

      tag.addEventListener('click', tagClickHandler);

    }

    /* END LOOP: for each link */

  }

  addClickListenersToTags();

  function generateAuthors() {
    /* find all authors */

    const articles = document.querySelectorAll(optArticleSelector);

    /* START LOOP: for every author: */

    for (let article of articles) {

      // /* find authors wrapper */

      const authorsWrapper = article.querySelector(optArticleAuthorSelector);
      authorsWrapper.innerHTML = '';

      /* make html variable with empty string */

      let html = '';

      /* get author name from data-author attribute */

      const articleAuthor = article.getAttribute('data-author');

      /* generate and add HTML of the link to html variable */

      html = '<p>by <a href="#author-' + articleAuthor + '">' + articleAuthor + '</a></p> ';

      /* insert HTML into the tags wrapper */

      authorsWrapper.innerHTML = html;

    }

    /* END LOOP: for every article: */

  }

  generateAuthors();

  function authorClickHandler(event){
    /* prevent default action for this event */

    event.preventDefault();

    /* make new constant named "clickedElement" and give it the value of "this" */

    const clickedElement = this;

    /* make a new constant "href" and read the attribute "href" of the clicked element */

    const href = clickedElement.getAttribute('href');

    /* make a new constant "author" and extract author from the "href" constant */

    const author = href.replace('#author-', '');

    /* find all author links with class active */

    const activeAuthors = document.querySelectorAll('a.active[href^="#author-"]');

    /* START LOOP: for each active author link */

    for (let activeAuthor of activeAuthors) {

      /* remove class active */

      activeAuthor.classList.remove('active');

    }

    /* END LOOP: for each active author link */

    /* find all author links with "href" attribute equal to the "href" constant */

    const sameAuthors = document.querySelectorAll('a[href="' + href + '"]');

    /* START LOOP: for each found author link */

    for (let sameAuthor of sameAuthors) {

      /* add class active */

      sameAuthor.classList.add('active');

    }

    /* END LOOP: for each found author link */

    /* execute function "generateTitleLinks" with article selector as argument */

    generateTitleLinks('[data-author="' + author + '"]');

  }

  function addClickListenersToAuthors(){
    /* find all links to authors */

    const authors = document.querySelectorAll('a[href^="#author-"]');

    /* START LOOP: for each link */

    for (let author of authors) {

      /* add authorClickHandler as event listener for that link */

      author.addEventListener('click', authorClickHandler);

    }

    /* END LOOP: for each link */

  }

  addClickListenersToAuthors();

}
