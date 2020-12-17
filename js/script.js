$(document).ready(function () {
  let h1 = document.getElementsByClassName("h1");
  let consoles = axios.get("http://csc225.mockable.io/consoles").then((res) => {
    // $(".data").append(JSON.stringify(res.data));
    // console.log(res.data);

    for (let i = 0; i < res.data.length; i++) {
      console.log(res.data[i]);
    }
  });
});
