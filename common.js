// html 공통 부분 처리
function loadHTML(selector, filePath) {
    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            document.querySelector(selector).innerHTML = data;
        });
}


// 사이드바 열고 닫기
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');
const closeSidebar = document.getElementById('closeSidebar');
const overlay = document.getElementById('overlay');

menuToggle.addEventListener('click', () => {
    sidebar.classList.remove('hidden');
    sidebar.classList.add('show');
    overlay.classList.remove('hidden');
});

closeSidebar.addEventListener('click', () => {
    sidebar.classList.add('hidden');
    sidebar.classList.remove('show');
    overlay.classList.add('hidden');
});

overlay.addEventListener('click', () => {
    sidebar.classList.add('hidden');
    sidebar.classList.remove('show');
    overlay.classList.add('hidden');
});

// 공통 로그인 상태 확인 및 네비게이션 변경
window.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('.nav');
    const user = JSON.parse(sessionStorage.getItem("loginUser"));

    if (!nav) return;

    if (user) {
        nav.innerHTML = `
      <a href="my.html">My</a>
      <a href="cart.html">Cart</a>
      <a href="like.html">Like</a>
      <a href="index.html" id="logoutBtn">Logout</a>
    `;

        document.getElementById('logoutBtn').addEventListener('click', (e) => {
            e.preventDefault();
            sessionStorage.removeItem("loginUser");
            alert("로그아웃되었습니다.");
            location.reload();
        });

    } else {
        nav.innerHTML = `
      <a href="login.html">Login</a>
      <a href="join.html">Join</a>
      <a href="my.html">My</a>
      <a href="cart.html">Cart</a>
      <a href="like.html">Like</a>
    `;
    }
});
