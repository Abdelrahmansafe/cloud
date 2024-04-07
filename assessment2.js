async function getPosts() {
    let postsRespond = await fetch("https://jsonplaceholder.typicode.com/users");
    let postsArr = await postsRespond.json();
  
    renderPosts(postsArr);
  
  }
  
  function renderPosts(postsArr) {
  
    postsArr.forEach((element) => {
      const button = document.createElement("button");
      button.textContent = element.username;
      console.log(element.username);
      button.addEventListener("click", () => {
        getPost(element.id);
      });
  
      button.classList.add("button");
      document.body.prepend(button);
    });
  }
  getPosts();
  async function getPost(id){
   var c = document.getElementById("call");
    try{
    let postsRespond = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${id}`
    );
    let posts = await postsRespond.json();
    c.innerHTML=" ";
   posts.forEach((post) => { 
    let div = document.createElement("div");
        div.classList.add("cs");
        div.innerHTML=post.title;
     c.append(div);
  
   });
    }
    catch (err) {
          console.log(err);
       }
  
  }
  
  
  
  