const buscar = document.getElementById("buscar");


buscar.addEventListener("click", async () => {
      let API_KEY = "a8a8dfadb01370d7aa350826a02d281b"
       const name = await fetch(`https://api.themoviedb.org/3/movie/550?api_key=${API_KEY}`);
       const result = await name.json();
       console.log(result)
    });