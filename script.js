// script.js — placeholder
document.addEventListener('DOMContentLoaded',()=>{
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile menu toggle
  const menuToggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('nav');
  if(menuToggle && nav){
    menuToggle.addEventListener('click',()=>{
      nav.classList.toggle('open');
    });
  }

  console.log('BeeService page loaded');
});
