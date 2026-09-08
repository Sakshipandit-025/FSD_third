const container = document.getElementById('root')
const root=ReactDOM.createRoot(container);
// const h2= React.createElement('h2', {}, "Welcome to DOM !");
// //in react DOM, styling can be done simultaneously unlike normal DOM
// const h1=React.createElement('h1',{style:{color:'red'}},'ABES Engineering College');
// const image=React.createElement('img',{ src:'https://imgs.search.brave.com/_PYguLkMBg9jXLcmV5813A_xW_OrGAdamCYTl9fM_C0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE1/MzQyNzUyNS9waG90/by9jb2xvZ25lLWNh/dGhlZHJhbC1hdC1z/dW5zZXQuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPXBJdjJt/enVMbWtBWkliLS1V/Ynp4dEFPYnBKanhi/YUgwWUtZREN1OWdj/Rm89',style:{width:'200px',height : '200px'}})
// const div=React.createElement('div',{style :{border: '2px solid black'}},h1,h2, image);
const h21=<h2>Hello</h2> //JSX : Babel converts JSX to JS 
const h22=<h2>ABES Engineering College</h2>
const div=<div>{h21}{h22}</div>
const wrapper=<>
{div}
<h4>ABCD</h4>
</>
root.render(wrapper);