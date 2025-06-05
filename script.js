let judul = document.getElementById("judul");
judul.style.color = "red";
judul.style.backgroundColor = "#ccc";
judul.innerHTML = "Yogi Suryatmika";

const p = document.getElementsByTagName("p");
for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = "lightblue";
}

// class
const p1 = document.getElementsByClassName("p1");
p1[0].innerHTML = "ini diubah dari javascript";

// querySelector
const p4 = document.querySelector("#b p");
p4.style.color = "green";
p4.style.fontSize = "30px";

const li2 = document.querySelector(
  "section#b ul li:nth-child(2)"
);

li2.style.backgroundColor = "orange";
