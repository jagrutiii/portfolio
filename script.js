console.log("Script running...")
document.querySelector('.clos').style.display = 'none';
document.querySelector('.hamburger').addEventListener("click", ()=>{
      document.querySelector('.sidebar').classList.toggle('sidebarGo');
    if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
      document.querySelector('.men').style.display = 'inline'
      document.querySelector('.clos').style.display = 'none'

} 
else{ 
    document.querySelector('.clos').style.display = 'none'
    document.querySelector('.men').style.display = 'inline'
}

})