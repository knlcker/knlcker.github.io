const rangeChecker = document.getElementById('myRange');
var checker = 0;

const slidePalooza = () => {

    const rangeChecker = document.getElementById('myRange');
    console.log(rangeChecker.value)
    
    if(rangeChecker.value > 99){
        var about = document.getElementById('about-text3')
        about.classList.add('show');
        var about = document.getElementById('tags-Creator');
        about.classList.add('show');
        var about = document.getElementById('content-container');
        about.classList.add('show');
        var about = document.getElementById('content-container');
        about.classList.add('show');
    }
    else if(rangeChecker.value > 74){
        var about = document.getElementById('about-text3')
        about.classList.add('show');
        var about = document.getElementById('tags-Design');
        about.classList.add('show');
    }
    else if(rangeChecker.value > 49){
        var about = document.getElementById('about-text2')
        about.classList.add('show');
        var about = document.getElementById('tags-Java');
        about.classList.addEventListener('show');
        var about = document.getElementById('my-work-title-content');
        about.classList.add('show');
        var about = document.getElementById('my-work-title-content-img');
        about.classList.add('show');
    }
    else if(rangeChecker.value > 24){
        var about = document.getElementById('about-text1');
        about.classList.add('show');
    }
    
 
}


rangeChecker.addEventListener('click', slidePalooza);
