function showSection(sectionId) {
    // すべてのセクションを非表示
    document.querySelectorAll('.section').forEach(section => {
        section.classList.add('hidden');
    });
    // 選択されたセクションを表示
    document.getElementById(sectionId).classList.remove('hidden');

    //メインフッターの表示/非表示の切り替え
    const mainFooter = document.getElementById('mainFooter');
    if(sectionId === 'guestLive'){
        mainFooter.style.display = 'none';
    } else {
        mainFooter.style.display = 'block';
    }
}

// 初期表示
window.onload = function() {
    showSection('home');
}
