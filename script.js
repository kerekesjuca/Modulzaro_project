
function myFunction() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("plantsearch");
  li = ul.getElementsByTagName('li');

  var found = false;

  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
      found = true;
    } else {
      li[i].style.display = "none";

    }
  }
  if (!found) {
    alert("Oldalunkon nem található a keresett növény.");
  }
}