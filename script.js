const requestURL = "https://api.github.com/users/thefarziguy";

const xhttpr = new XMLHttpRequest();
xhttpr.open("GET", requestURL);
xhttpr.send();

xhttpr.onreadystatechange = function () {
  //targeting DOM elements.
  const imageT = document.querySelector("#imgContainer");
  const nameT = document.querySelector("#name");
  const followersT = document.querySelector("#followers");
  const followingT = document.querySelector("#following");

  if (xhttpr.readyState === 4) {
    const apiDetail = JSON.parse(this.responseText);

    //targeting API data.
    const imgURLAPI = apiDetail.avatar_url;
    const nameAPI = apiDetail.name;
    const followersAPI = apiDetail.followers;
    const followingAPI = apiDetail.following;

    //appending data into DOM.
    imageT.innerHTML = `<img id="IMG" src= "${imgURLAPI}" alt="Profile Pic" \>`;
    nameT.innerHTML = `Name: ${nameAPI}`;
    followersT.innerHTML = `Followers: ${followersAPI}`;
    followingT.innerHTML = `Following: ${followingAPI}`;
  }
};
