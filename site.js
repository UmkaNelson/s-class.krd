// Общая обвязка страниц: тема, шапка, меню, блок записи, подвал.
(function () {
  const S = window.SC;

  // Тёмная тема включается ссылкой ?t=dark и держится до закрытия вкладки
  const param = new URLSearchParams(location.search).get('t');
  let theme = param;
  try { if (param) sessionStorage.setItem('sc-theme', param); else theme = sessionStorage.getItem('sc-theme'); } catch (e) { /* хранилище недоступно */ }
  if (theme === 'dark') document.documentElement.dataset.theme = 'dark';

  const page = location.pathname.split('/').pop() || 'index.html';
  const NAV = [['directions.html', 'Направления'], ['studios.html', 'Студии']];

  window.lvl = (n) => `<span class="lvl" aria-hidden="true">${[1, 2, 3].map((i) => `<i${i === n ? ' class="on"' : ''}></i>`).join('')}</span>`;

  document.addEventListener('DOMContentLoaded', () => {
    const header = document.createElement('header');
    header.className = 'pad';
    header.innerHTML = `
      <a class="logo" href="./">S-Class</a>
      <nav class="nav">${NAV.map(([href, label]) => `<a href="${href}"${href === page ? ' class="on"' : ''}>${label}</a>`).join('')}</nav>
      <div class="head-actions">
        <button class="btn menu" type="button" id="menuOpen">Меню</button>
        <a class="btn" href="#cta">Записаться</a>
      </div>`;
    document.body.prepend(header);

    const menu = document.createElement('div');
    menu.className = 'menu-overlay';
    menu.innerHTML = `
      <button class="btn close" type="button" id="menuClose">Закрыть</button>
      <a class="big-link" href="./">Главная</a>
      ${NAV.map(([href, label]) => `<a class="big-link" href="${href}">${label}</a>`).join('')}
      <a class="big-link" href="#cta">Записаться</a>
      <a class="small" href="${S.phoneHref}">${S.phone}</a>`;
    document.body.appendChild(menu);
    const toggle = (open) => menu.classList.toggle('open', open);
    document.getElementById('menuOpen').addEventListener('click', () => toggle(true));
    document.getElementById('menuClose').addEventListener('click', () => toggle(false));
    menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => toggle(false)));
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') toggle(false); });

    const cta = document.getElementById('cta');
    if (cta) {
      cta.className = 'cta pad';
      cta.innerHTML = `
        <div>
          <span class="tag">первое занятие — 0 ₽</span>
          <h2 class="big" style="margin-top:14px">Приходи на пробное</h2>
          <p>Оставьте номер — администратор перезвонит, поможет выбрать направление и удобную студию.</p>
        </div>
        <form>
          <input type="text" placeholder="Имя" autocomplete="name" required>
          <input type="tel" placeholder="Телефон" autocomplete="tel" required>
          <button class="btn" type="submit">Записаться на пробное</button>
          <small>Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных.</small>
        </form>`;
      cta.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault();
        e.target.querySelector('button').textContent = 'Заявка отправлена (демо)';
      });
    }

    const footer = document.createElement('footer');
    footer.className = 'pad';
    footer.innerHTML = `
      <div class="row">
        <span>Fitness studio for girls · Краснодар</span>
        <span class="links"><a href="directions.html">Направления</a><a href="studios.html">Студии и контакты</a><a href="${S.phoneHref}">${S.phone}</a></span>
      </div>
      <p class="fine">Информация на сайте не является публичной офертой.</p>
      <div class="wordmark" aria-hidden="true">S-Class</div>`;
    document.body.appendChild(footer);

    // Над фото шапка прозрачная, дальше — с фоном; на внутренних страницах фон всегда
    const hero = document.getElementById('hero');
    const onScroll = () => header.classList.toggle('solid', !hero || scrollY > hero.offsetHeight - 70);
    addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    const io = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    }), { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

    // Служебный переключатель темы (в финальный сайт не идёт)
    const sw = document.createElement('div');
    sw.className = 'variant-switch';
    const dark = document.documentElement.dataset.theme === 'dark';
    sw.innerHTML = `<a href="${page}?t=light"${dark ? '' : ' class="on"'}>Светлый</a><a href="${page}?t=dark"${dark ? ' class="on"' : ''}>Тёмный</a>`;
    document.body.appendChild(sw);
  });
})();
