const search = document.getElementById("search");

const userUsername = document.getElementById("userUsername");
const userGithub = document.getElementById("userGithub");
const userImage = document.getElementById("userImage");
const userType = document.getElementById("userType");
const userFollowers = document.getElementById("userFollowers");
const userFollowing = document.getElementById("userFollowing");
const userRepos = document.getElementById("userRepos");
const userGists = document.getElementById("userGists");
const userCompany = document.getElementById("userCompany");

// Add event listener
search.addEventListener("keyup", e => {
    e.preventDefault();
    if (e.keyCode === 13 && search.value !== "") {
        fetch(`https://api.github.com/users/${search.value}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                userImage.src = data.avatar_url;
                userUsername.innerHTML = data.login;
                userGithub.href = data.html_url;

                userType.innerHTML = data.type || undefined;

                userFollowers.innerHTML = data.followers || undefined;
                userFollowing.innerHTML = data.following || undefined;

                userRepos.innerHTML = data.public_repos || undefined;
                userGists.innerHTML = data.public_gists || undefined;

                userCompany.innerHTML = data.company || undefined;
            });
    }
});
