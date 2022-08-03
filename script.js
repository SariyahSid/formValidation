var i;
function namecheck(){

  let name=/^[a-zA-Z\s]+$/.test(document.getElementById("name").value);
  if(name == false){
    n=false;
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
    e=false;
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

}else{e=true;}}
function numcheck(){
  let phone=/^\(?([6-9]{1})\)?([0-9]{9})$/.test(document.getElementById("num").value); 
  if(phone == false){
    p=false;
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

function sizecheck() {
  var fi = document.getElementById('file');
  if (fi.files.length > 0) {      // FIRST CHECK IF ANY FILE IS SELECTED.
     
      
          var  fileSize;
          // CHECK IF ITS AN IMAGE FILE.
          // TO GET THE IMAGE WIDTH AND HEIGHT, WE'LL USE fileReader().
          
             readImageFile(fi.files.item(0));             // GET IMAGE INFO USING fileReader().
          
      

      // GET THE IMAGE WIDTH AND HEIGHT USING fileReader() API.
      function readImageFile(file) {
          var reader = new FileReader(); // CREATE AN NEW INSTANCE.

          reader.onload = function (e) {
              var img = new Image();      
              img.src = e.target.result;

              img.onload = function () {
                  var w = this.width;
                  var h = this.height;
if(file.size < 2097152 && w > 200 && h > 200){i=true;
 
  blah.src = URL.createObjectURL(file)
          document.getElementById("blah").style.display = "block";
          document.getElementById("submit-button").disabled=false;
                  }
                          else{
                            document.getElementById("submit-button").disabled=true;
                            document.getElementById("blah").style.display = "none";
                            let el = document.getElementById("fileInfo");
    
        el.innerHTML = `
        <div class="alert alert-warning " role="alert">
        Enter correct values!!
        Image less than 2 mb and greater than 200x200 are allowed!!
      </div>
        `;
        setTimeout(function(){
          el.replaceChildren();

        },3000);
        document.getElementById('fileInfo').appendChild(el);
                          }
                        }
              
          };
          reader.readAsDataURL(file);
        }
      }
      
  }
  
  function button(){
    let name=/^[a-zA-Z\s]+$/.test(document.getElementById("name").value);
    let mail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementById("email").value);
    let phone=/^\(?([6-9]{1})\)?([0-9]{9})$/.test(document.getElementById("num").value); 
    let fi = document.getElementById('file');
    if(name && mail && phone && (fi.files.length > 0)){
    console.log("yes");
    document.getElementById("submit-button").disabled=false;}
    else{
      document.getElementById("submit-button").disabled=true;
    }
   
  }

