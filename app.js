const popup = document.querySelector('.popup a');
const modal = document.querySelector('.market');
const General = document.querySelector('.general');
const Popular = document.querySelector('.popular');
const popup1 = document.querySelector('.popup1 a');
const popup2 = document.querySelector('.popup2 a');
const popup3 = document.querySelector('.popup3 a');
const menu = document.querySelector('.hamburger');
const logo = document.querySelector('.navbar');

menu.addEventListener('click', function(){
    logo.classList.toggle('gene');
});
menu.addEventListener('mouseover', function(){
    modal.classList.remove('markets');
});


//Market Section
popup.addEventListener('mouseover', function() {
    modal.classList.add('markets');
});
modal.addEventListener('mouseout', function(){
    modal.classList.remove('markets');
})
General.addEventListener('mouseover', function(){
    modal.classList.add('markets');
})
Popular.addEventListener('mouseover', function(){
    modal.classList.add('markets');
})

//Education Section
popup1.addEventListener('mouseover', function() {
    modal.classList.add('markets');
});
modal.addEventListener('mouseout', function(){
    modal.classList.remove('markets');
})
General.addEventListener('mouseover', function(){
    modal.classList.add('markets');
})
Popular.addEventListener('mouseover', function(){
    modal.classList.add('markets');
})

//Simulator Section
popup2.addEventListener('mouseover', function() {
    modal.classList.add('markets');
});
modal.addEventListener('mouseout', function(){
    modal.classList.remove('markets');
})
General.addEventListener('mouseover', function(){
    modal.classList.add('markets');
})
Popular.addEventListener('mouseover', function(){
    modal.classList.add('markets');
})

//Your Money Section
popup3.addEventListener('mouseover', function() {
    modal.classList.add('markets');
});
modal.addEventListener('mouseout', function(){
    modal.classList.remove('markets');
})
General.addEventListener('mouseover', function(){
    modal.classList.add('markets');
})
Popular.addEventListener('mouseover', function(){
    modal.classList.add('markets');
});