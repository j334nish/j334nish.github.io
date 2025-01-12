function showSection(sectionId) {
    // すべてのセクションを非表示
    document.querySelectorAll('.section').forEach(section => {
        section.classList.add('hidden');
    });
    // 選択されたセクションを表示
    document.getElementById(sectionId).classList.remove('hidden');
}

// 初期表示
window.onload = function() {
    showSection('home');
}