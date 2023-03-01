import App from "./App"

function ClickScroll(){
    const div = document.querySelectorAll(".side-menu")
    const contents = document.querySelectorAll(".content")
    const firstTop = contents[0].offsetTop;
    const secondTop = contents[1].offsetTop;
    const thirdTop = contents[2].offsetTop;
    const fourthTop = contents[4].offsetTop;

    div[0].onclick = function(){
        window.scroll({top:firstTop,behavior:'smooth'});
    }
    div[1].onclick = function(){
        window.scroll({top:secondTop,behavior:'smooth'});
    }
    div[2].onclick = function(){
        window.scroll({top:thirdTop,behavior:'smooth'});
    }
    div[3].onclick = function(){
        window.scroll({top:fourthTop,behavior:'smooth'});
    }
}
export default ClickScroll;