

var count = 3

function addCount(){
    count++;
    console.log(count);

    var likeCount = document.querySelector("#likeCount");
    likeCount.innerText = count + " like(s)"
}