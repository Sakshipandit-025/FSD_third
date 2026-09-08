const root= document.getElementById("container");
const button= document.getElementById("btn");
const h2=document.createElement('h2');
const img=document.createElement("img");
console.log(root);
function showData(){
    try{
    h2.innerText= "Welcome to DOM, yet again! ";
    h2.style.color="blue";
    h2.style.backgroundColor="aliceblue";
    document.getElementById("container").appendChild(h2);
    img.src="https://imgs.search.brave.com/_PYguLkMBg9jXLcmV5813A_xW_OrGAdamCYTl9fM_C0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE1/MzQyNzUyNS9waG90/by9jb2xvZ25lLWNh/dGhlZHJhbC1hdC1z/dW5zZXQuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPXBJdjJt/enVMbWtBWkliLS1V/Ynp4dEFPYnBKanhi/YUgwWUtZREN1OWdj/Rm89";
    img.setAttribute('width',200);
    img.setAttribute('width',200);
    document.getElementById("container").appendChild(img);
    root.style.border="2px dotted black";
    root.removeChild(button);
    }
    catch(e){
        console.log(e);
    }
    finally{
     root.removeChild(button);
    }
}

button.addEventListener("click",showData);
