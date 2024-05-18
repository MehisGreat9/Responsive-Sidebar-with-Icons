const toggleBtn = document.querySelector('.toggle_btn');
toggleBtn.addEventListener('click', function(event){
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('side_open');
});
document.body.addEventListener('click', function(event){
    const sidebar = document.getElementById('sidebar');
    if (!sidebar.contains(event.target) && !toggleBtn.contains(event.target)){
        sidebar.classList.remove('side_open');
    }
})