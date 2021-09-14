const DOM = {
  runFun() {
    document.querySelector("#myInput").addEventListener("keyup", (event) => {
      if (event.keyCode === 13) {
        document.querySelector(".canvas").classList.add("block");
        document.querySelector(".search").classList.add("active");

        let input, value, ul, li, test;

        input = document.querySelector("#myInput");
        value = input.value.toUpperCase();
        ul = document.querySelector(".content");
        li = ul.getElementsByTagName("li");

        for (i = 0; i < li.length; i++) {
          test = li[i].textContent || li[i].innerText;

          if (test.toUpperCase().indexOf(value) > -1) {
            li[i].style.display = "";
          } else {
            li[i].style.display = "none";
          }
        }
      }
    });
  },

  swap() {
    document.querySelector(".canvas").classList.remove("block");
    document.querySelector(".search").classList.remove("active");
    document.querySelector("#myInput").value = "";
  },

  loadDate() {
    let nowDate = new Date();
    let nowYear = nowDate.getFullYear();
    document.querySelector(".date").innerHTML = nowYear;
  },
};
