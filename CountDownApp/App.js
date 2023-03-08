const input = document.querySelectorAll('.input');
const date = document.querySelector('.date');
//console.log(input)
const end  = "23 September 2023 12:00 AM";
date.innerHTML = end;

const countApp =()=>{
    const nowDate = new Date ();
    const endDate = new Date (end);
    const different =(endDate-nowDate) / 1000;

    const day = Math.floor(different/3600/24) 
    const hour = Math.floor(different/3600 % 24) 
    const min = Math.floor(different/60 % 60)
    const sec = Math.floor(different % 60)

    if(different < 0)return 
    

    input[0].value = day;
    input[1].value = hour;
    input[2].value = min;
    input[3].value = sec;
}
countApp();

setInterval(countApp,1000)