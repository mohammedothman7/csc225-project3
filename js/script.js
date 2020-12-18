$(document).ready(function () {
  let h1 = document.getElementsByClassName("h1");
  let consoles = axios.get("http://csc225.mockable.io/consoles").then((res) => {
    // $(".data").append(JSON.stringify(res.data));
    // console.log(res.data);

    for (let i = 0; i < res.data.length; i++) {
      console.log(res.data[i]);
      let consoleContent = `
      <div class="console card m-4 mx-5" id=${res.data[i].id}>
      <img
      class="card-img-top border border-bottom-5"
      id=${res.data[i].id}
      src="${res.data[i].image}"
      />
      <h3 class="console__name text-center text-dark m-3 mb-2" id=${res.data[i].id}>${res.data[i].name}</h3>
      </div>`;

      let consoles = document.getElementsByClassName("consoles")[0];
      let row = document.createElement("div");
      row.innerHTML = consoleContent;
      consoles.append(row);
    }
  });
});

$(".consoles").click(function (event) {
  if (!event.target.id) return;
  $(".console").hide();

  axios
    .get("http://csc225.mockable.io/consoles/" + event.target.id)
    .then((res) => {
      let consoleContent = `
      <div class="console card m-4 mx-5" id=${res.data.id}>
      <img
      class="card-img-top border border-bottom-5"
      id=${res.data.id}
      src="${res.data.image}"
      />
      <h3 class="console-name text-center text-dark m-3 mb-2" id=${res.data.id}>${res.data.name}</h3>
      <h5 class="d-flex justify-content-center">
      <span class="badge badge-danger"> $${res.data.price}</span>
      </h5>
      <h5 class="text-center">${res.data.country} - ${res.data.releaseYear}</h5>
      </div>`;

      let consoles = document.getElementsByClassName("consoles")[0];
      let row = document.createElement("div");
      row.innerHTML = consoleContent;
      consoles.append(row);
    });
});
