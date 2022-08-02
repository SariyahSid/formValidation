



    

function namecheck(){

    let name=/^[a-zA-Z\s]+$/.test(document.getElementById("name").value);
    if(name == false){
      
      let el = document.getElementById("namealert");
      
     el.innerHTML = `
     <div class="alert alert-warning " role="alert">
     Enter correct values!!
   </div>
     `;
     setTimeout(function(){
      el.replaceChildren();
     },3000);
     document.getElementById('namealert').appendChild(el);
   
}}



function mailcheck(){
    let mail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementById("email").value);
    if(mail == false){
      let el = document.getElementById("emailalert");
      
      el.innerHTML = `
      <div class="alert alert-warning " role="alert">
      Enter correct values!!
    </div>
      `;
      setTimeout(function(){
        el.replaceChildren();
      },3000);
      document.getElementById('emailalert').appendChild(el);
  
}}
function numcheck(){
    let phone=/^\(?([6-9]{1})\)?([0-9]{9})$/.test(document.getElementById("num").value); 
    if(phone == false){
      let el = document.getElementById("phonealert");
      
      el.innerHTML = `
      <div class="alert alert-warning " role="alert">
      Enter correct values!!
    </div>
      `;
      setTimeout(function(){
        el.replaceChildren();
      },3000);
      document.getElementById('phonealert').appendChild(el);
  
}}
document.getElementById("img").addEventListener("change",function(evt) {
  
    var f = evt.target.files[0];
    if (f) {
      var r = new FileReader();
      r.onload = function(e) {
        var contents = e.target.result;
        
          var height = this.height;
          var width = this.width;
         
          
        
        if (f.size > 2097152 || height != 200 || width != 200) {
          let el = document.getElementById("imgalert");
      
          el.innerHTML = `
          <div class="alert alert-warning " role="alert">
          Enter correct values!!
          Image less than 2 mb and 200x200 are allowed!!
        </div>
          `;
          setTimeout(function(){
            el.replaceChildren();
          },3000);
          document.getElementById('imgalert').appendChild(el);
            
        }
        else {
            let div = document.getElementById("imgalert");

  

            div.innerHTML = `
            <div>
            Ready to upload!
          </div>
            `;
          
            document.getElementById('imgalert').appendChild(div);
            blah.src = URL.createObjectURL(file)
            document.getElementById("blah").style.display = "block";
        
        }
  
      }
      r.readAsText(f);
    } 
  })
   
    
