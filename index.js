const CONTENTS = [{
    src: 'cheatsheet',
    id: 'content-cheatsheet',
    title: 'Cheatsheet'
}, {
    src: 'finance',
    id: 'content-finance',
    title: 'Finance'
}, {
    src: 'growth',
    id: 'content-growth',
    title: 'Personal Growth'
}, {
    src: 'interview',
    id: 'content-interview',
    title: 'Interview Preparation'
}, {
    src: 'treasure',
    id: 'content-treasure',
    title: `Learner's Treasure`,
}];

function expandContent(element, id) {
    var allPosts = document.getElementById('posts');

    allPosts.childNodes.forEach(post => {
        var content = post.children.item(1);
        content.id === id ? content.classList.toggle("reveal-content") : content.classList.remove("reveal-content");
    });
}

function populateContent() {
    var mainContainer = document.getElementById('posts-section');
    var sectionContainer = document.createElement('section');
    sectionContainer.id = "posts";
    sectionContainer.className = "margin-bottom-1";

    CONTENTS.forEach(content => {
        var articleContainer = document.createElement('article');
        var headerContainer = document.createElement('header');
        var divContainer = document.createElement('div');


        divContainer.className = "content"
        divContainer.id = content.id;
        divContainer.innerHTML =
            `<zero-md src="content/${content.src}/index.md">
                <template>
                    <style>
                        hr {
                            height: 0.05rem;
                            margin: 1.5rem 0;
                            background: #FFF;
                        }
                        ul > li > p {
                            color: #E89024;
                        }
                        a {
                            text-decoration: none;
                            color: #FFF;
                        }
                        a:hover {
                            color: #4283C4;
                        }
                    </style>
                </template>
            </zero-md>`;

        headerContainer.innerHTML = content.title;
        headerContainer.className = "title";
        headerContainer.addEventListener('click', () => expandContent(headerContainer, content.id));

        articleContainer.className = "accordion";

        articleContainer.appendChild(headerContainer);
        articleContainer.appendChild(divContainer);
        sectionContainer.appendChild(articleContainer);
    });

    mainContainer.appendChild(sectionContainer);
}

window.onload = function () {

    this.populateContent();
};