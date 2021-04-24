window.onload=()=>{
    let btn=document.getElementById('btn');
    let app=document.getElementById('app');
    console.log(btn);
    console.log(app);

    btn.addEventListener('click', ()=>{
        app.style.top="50px";
        app.style.opacity="1";
        setTimeout(()=>{
            app.style.top="0px";
            app.style.opacity="0";
        },1000);
    });



    const menuToggle = document.querySelector('.toggle');
    const showcase = document.querySelector('.showcase');

    menuToggle.addEventListener('click',()=>{
        menuToggle.classList.toggle('active');
        showcase.classList.toggle('active');
    });
}