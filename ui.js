class UI {
  constructor() {
    this.profile = document.getElementById('profile');
  }

 showProfile(user) {
    //console.log('UI class');
    // console.log(user);
    this.profile.innerHTML = `
      <div class="container">
      
      <div class="row">

        <div class="col-md-2">

            <img class="img-fluid mb-2" src="${user.avatar_url}">

            <a href="${user.html_url}" target="_blank" class="btn btn-secondary btn-block mb-4">View Profile</a>

          </div>
           <br><br>
           <ul class="list-group">
            <li class="list-group-item">Company: ${user.company}</li>
            <li class="list-group-item">Website: ${user.blog}</li>
            <li class="list-group-item">Location: ${user.location}</li>
            <li class="list-group-item">Member Since: ${user.created_at}</li>
          </ul>
           </div>
        </div>
      </div> 
    `
  }

  showAlert(message, className) {
    
    this.clearAlert();
    const div = document.createElement('div');
 
    div.className = className;
  
    div.appendChild(document.createTextNode(message));
  
    const container = document.querySelector('.searchContainer');
  
    const search = document.querySelector('.search');
  
    container.insertBefore(div, search);

   
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

 
  clearAlert() {
    const currentAlert = document.querySelector('.alert');

    if(currentAlert) {
      currentAlert.remove();
    }
  }

  
  clearProfile() {
    this.profile.innerHTML = "";
  }
}