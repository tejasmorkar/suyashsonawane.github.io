hamButton.addEventListener("click", () => {
  $("#quotes").html(quotes[(Math.random() * quotes.length) | 0]);
  $(".container").animate(
    {
      opacity: "0",
    },
    250
  );
  setTimeout(() => {
    document.querySelector(".container").style.display = "none";
    document.querySelector(".container2").style.display = "flex";
    $(".container2").animate({
      opacity: "1",
    });
  }, 500);
});
let closeButton = document.querySelector("#closeButton");

closeButton.addEventListener("click", () => {
  $(".container2").animate(
    {
      opacity: "0",
    },
    250
  );
  setTimeout(() => {
    document.querySelector(".container2").style.display = "none";
    document.querySelector(".container").style.display = "initial";
    $(".container").animate({
      opacity: "1",
    });
  }, 250);
});
window.addEventListener("scroll", function (event) {
  var scroll = this.scrollY;
  console.log(scroll);
  if (scroll > 400) $("#bg-certifications").text("Certificates");
  else $("#bg-certifications").text("Story");
});
