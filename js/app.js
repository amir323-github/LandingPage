//create a  nodelist object
let allSections = document.querySelectorAll("section");
let fragment = document.createDocumentFragment();
let naviBarList = document.getElementById("navbar__list");
let navibar = document.getElementById('naviBar');
// convert allSections to an array
let allSecArr = Array.from(allSections);


//creat li naviBarList
for (let section of allSecArr) {
    let li = document.createElement('li');
    let dataNa = section.getAttribute("data-nav");
    let anchor = document.createElement("a");
    anchor.addEventListener('click', function() {
        //scroll smooth
        section.scrollIntoView({
            behavior: "smooth"
        });
    });
    anchor.innerText = dataNa;
    li.classList = 'navbar__menu';
    li.appendChild(anchor);
    anchor.classList = 'menu__link';
    fragment.appendChild(li);

};
naviBarList.appendChild(fragment);
// call the Function
let links = document.querySelectorAll("a");
//make the page responsive,define the query ,changing the navigation bar color if width max 400px
const mediaQuery = window.matchMedia('(max-width:700px)');

function handleTabletChange(e) {
    if (e.matches) {

        navibar.style.background = "red";

    } else {
        navibar.style.background = "blue";

    }
}

mediaQuery.addListener(handleTabletChange);
handleTabletChange(mediaQuery);

//highlight sections in viewport upon scrolling
window.addEventListener('scroll', () => {
    allSections.forEach((secti) => {
        rectBo = secti.getBoundingClientRect();
        if (rectBo.top >= -50 && rectBo.top <= 250) {

            secti.classList.add("yourActiveClass");
            // link bettween navigation bar and sections upon scrolling
            let acDataNa = secti.getAttribute("data-nav");
            let alLi = document.querySelectorAll("li");
            alLi.forEach((aLi) => {
                if (aLi.innerText == acDataNa) {
                    aLi.classList.add("activeNavigation");
                } else {
                    aLi.classList.remove("activeNavigation");
                }

            });

        } else {

            secti.classList.remove("yourActiveClass");

        };


    });

});
