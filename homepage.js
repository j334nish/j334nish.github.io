// スクロール時にメニュー項目をハイライトする例
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('header nav ul li a');
    
    // スクロールイベントを監視
    window.addEventListener('scroll', function() {
      let currentSection = null;
  
      // 現在表示されているセクションを判定
      document.querySelectorAll('.section').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (window.scrollY >= sectionTop - sectionHeight / 2 && window.scrollY < sectionTop + sectionHeight) {
          currentSection = section.id;
        }
      });
  
      // メニュー項目をハイライト
      navLinks.forEach(link => {
        if (link.getAttribute('href').substring(1) === currentSection) {
          link.style.color = '#ff6347';  // ハイライト色
        } else {
          link.style.color = 'white';
        }
      });
    });
  });
  