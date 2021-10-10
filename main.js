const service_active = document.querySelector('.service_active');
const active_link = document.querySelector('.active_link');
const portfolio_active = document.querySelector('.portfolio_active');
const team_active = document.querySelector('.team_active');
const contact_active = document.querySelector('.contact_active');


service_active.addEventListener('click',  ()=> {
    service_active.classList.add('showServivce_active');
    active_link.classList.add('hide_active_link');
    portfolio_active.classList.remove('show_portfolio_active');
    team_active.classList.remove('show_team_active');
    contact_active.classList.remove('show_contact_active');

});
active_link.addEventListener('click' , ()=>{
    active_link.classList.remove('hide_active_link');
    service_active.classList.remove('showServivce_active');
    portfolio_active.classList.remove('show_portfolio_active');
    team_active.classList.remove('show_team_active');
    contact_active.classList.remove('show_contact_active');

});
portfolio_active.addEventListener('click' , ()=>{
    active_link.classList.add('hide_active_link');
    service_active.classList.remove('showServivce_active');
    portfolio_active.classList.add('show_portfolio_active');
    team_active.classList.remove('show_team_active');
    contact_active.classList.remove('show_contact_active');

});
team_active.addEventListener('click' , ()=>{
    active_link.classList.add('hide_active_link');
    service_active.classList.remove('showServivce_active');
    portfolio_active.classList.remove('show_portfolio_active');
    team_active.classList.add('show_team_active');
    contact_active.classList.remove('show_contact_active');

});
contact_active.addEventListener('click' , ()=>{
    active_link.classList.add('hide_active_link');
    service_active.classList.remove('showServivce_active');
    portfolio_active.classList.remove('show_portfolio_active');
    team_active.classList.remove('show_team_active');
    contact_active.classList.add('show_contact_active');
});

// hamburger 

const hamburger = document.querySelector('.hamburger');
const menu_content = document.querySelector('.menu_content');

hamburger.addEventListener('click' , ()=>{
    menu_content.classList.toggle('showNavmenu')
})
