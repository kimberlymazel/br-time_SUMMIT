/* referenced tutorial from https://www.youtube.com/watch?v=ATeWQlY3N04 */

const filter = document.querySelectorAll(".listname");
const category = document.querySelectorAll(".blockcard");

/* for loop, moves active to whichever we click */
for (let i=0; i < filter.length; i++) {
    filter[i].addEventListener("click", function(){
        for (let j=0; j<filter.length; j++){
            filter[j].classList.remove("active");
        }
        this.classList.add("active");
        const target = this.getAttribute("data-target");

        /* for loop that removes all divs*/
        for (let k=0; k<category.length; k++){
            category[k].style.display = "none";
            /* if the id of the div is the same as the list, show div (pics)*/
            if(target == category[k].getAttribute("data-id")){
                category[k].style.display = "block";
            }
            
            if(target == "all"){
                category[k].style.display = "block";
            }
        }
    })
}