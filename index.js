document.getElementById("getNews").addEventListener('click', function getNews() {

})


function getNews() {
    fetch('http://api.mediastack.com/v1/news?access_key=3bbdf3c3f9db7af99f994d33f38f75b5&sources=en')

        .then((res) => res.json())
        .then((data) => {
            console.log(data.data);
            let output = `<h2 class = "mb -4"<news></h2`;
            data.data.forEach(data => {
                output += `
                
<div class="card" >

<div class="card-body">
  <h5 class="card-title">${data.title}</h5>
  <p class="card-text">${data.description}</p>
  <a href="#" class="btn btn-primary">Read more</a>
  <br>
</div>
</div>  `
                document.getElementById("output").innerHTML = output
            });
        })
    let cardwrapper = document.querySelector('.cardwrapper')
    for(let i=0;data.data[i].length >0; i++){
        row+= output
    }
    document.getElementById("gridView").addEventListener("click", myFunction);

    function myFunction() {
      document.getElementById("cardwrapper").innerHTML = cardwrapper;
    }
}
getNews()