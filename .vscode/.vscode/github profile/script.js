const url="https://api.github.com/users/";
const form=document.getElementById("form");
const main=document.getElementById("main");
const search = document.getElementById("search");
async function get_user(user_name){
    try{

        const data =awit axios(url+user_name);
        user_card(data);
}
catch(err){
    // handel error here
    console.error(err);
    }
}
async function get_repo(user_name){
    try{
        const data = await axios(url+ user_name+"/repos?sort=created");
        user_card(data);
}
catch(err){
    // handel error here
    console.error(err);
}
}
function user_card(data)
{
    const userID = user.name || user.login
    const userBio = user.bio ? `<p>${user.bio}</p>` : ''
    const cardHTML = `
    <div class="card">
    <div>
      <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
    </div>
    <div class="user-info">
      <h2>${userID}</h2>
      ${userBio}
      <ul>
        <li>${user.followers} <strong>Followers</strong></li>
        <li>${user.following} <strong>Following</strong></li>
        <li>${user.public_repos} <strong>Repos</strong></li>
      </ul>

      <div id="repos"></div>
    </div>
  </div>
    `
    main.innerHTML = cardHTML
    
}
function repo(r){
    const a = document.getElementById("repos");
    r.splice(0,7);
    r.forEach(repo => {
        const repoEl = document.createElement('a')
        repoEl.classList.add('repo')
        repoEl.href = repo.html_url
        repoEl.target = '_blank'
        repoEl.innerText = repo.name

        reposEl.appendChild(repoEl)
    })
    form.addEventListener("submit",(e)=>{
        e.preventDefault()
    })
    
}