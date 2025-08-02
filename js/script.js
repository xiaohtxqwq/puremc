document.addEventListener('DOMContentLoaded', function() {
    // 导航栏切换
    const navLinks = document.querySelectorAll('#main-nav ul li a');
    const sections = document.querySelectorAll('.section');
    
    // 初始化页面显示第一个section
    sections[0].classList.add('active');
    
    // 导航点击事件
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // 移除所有active类
            navLinks.forEach(l => l.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));
            
            // 添加active类到当前点击的链接和对应的section
            this.classList.add('active');
            const targetSection = document.querySelector(this.getAttribute('href'));
            targetSection.classList.add('active');
            
            // 平滑滚动到对应section
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
    
    // 页面滚动时改变导航栏样式
    window.addEventListener('scroll', function() {
        const nav = document.getElementById('main-nav');
        if (window.scrollY > 100) {
            nav.style.background = 'rgba(70, 130, 180, 0.95)';
        } else {
            nav.style.background = 'rgba(135, 206, 250, 0.9)';
        }
    });
});
function warnwindow(s) {alert(s);}
