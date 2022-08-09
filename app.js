let name = prompt("What is your name?");
let myName = document.querySelector("#myName");
if (name) {
  myName.innerHTML = name; //prompt'taki bilgiyi name e atadık name den dönen veriyi myName isimli değişkene yani veriyi taşıyan span içine atamış olduk
} else {
  alert("Lütfen isim kısmını boş bırakmayınız");
  location.reload(); //Window objesinin bu fonksiyonu sayesinde alert mesajından sonra sayfa yenilenecek daha düzgün bir kullanım için yapılabilir
}

let Days = [
  "Pazar",
  "Pazartesi",
  "Salı",
  "Çarşamba",
  "Perşembe",
  "Cuma",
  "Cumartesi",
];
// 0.gün pazar olduğu için Pazarı başa yazdık
let Months = [
  "Ocak",
  "Şubat",
  "Mart",
  "Nisan",
  "Mayıs",
  "Haziran",
  "Temmuz",
  "Ağustos",
  "Eylül",
  "Ekim",
  "Kasım",
  "Aralık",
];
function showTime() {
  const todayTime = new Date();
  let hours = todayTime.getHours();
  let minutes = todayTime.getMinutes();
  let seconds = todayTime.getSeconds();
  let day = Days[todayTime.getDay()]; //Günleri array ile atadık
  let date = todayTime.getDate();
  let month = Months[todayTime.getMonth()]; //Aynı şekilde aylarıda array ile atadık
  let year = todayTime.getFullYear();

  document.getElementById("myClock").innerHTML =
    hours +
    ":" +
    minutes +
    ":" +
    seconds +
    " " +
    day +
    " " +
    date +
    " " +
    month +
    " " +
    year;
  setTimeout(showTime, 1000);
}

showTime();
