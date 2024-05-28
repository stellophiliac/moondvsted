navLinks = [
    {url:'index.html', name:'home'},
    {url: 'join.html', name:'join'},
    {url: 'members.html', name:'members'},
    {url: 'codes.html', name:'codes'}
]

var navContainer = document.getElementById("nav")
for (var i = 0; i < navLinks.length; i++) {
  var link = document.createElement('a');
  link.href = navLinks[i].url;
  link.innerHTML = navLinks[i].name;

  navContainer.appendChild(link);
}