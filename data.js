// Общие данные для трёх вариантов главной. Тексты и фото — с текущего сайта s-class-fitness-krd.ru
const T = 'https://static.tildacdn.com/';
window.SC = {
  phone: '+7 (918) 264-85-51',
  phoneHref: 'tel:+79182648551',
  logo: T + 'tild6633-3836-4365-a533-353133623036/logo_black.png',
  hero: T + 'tild3338-6436-4263-b464-313634373261/image_3_1.png',
  photos: {
    studioA: T + 'tild3037-6664-4265-b639-376631363962/1L3A3555_2.jpg',
    studioB: T + 'tild6462-3435-4664-b463-383266626337/photo_2024-09-19_214.jpeg',
    studioC: T + 'tild3062-3861-4435-b863-663634626366/1L3A4013-min.jpg',
    studioD: T + 'tild3736-3565-4638-b539-333232306361/1L3A4303_2_1.jpg',
    friends: T + 'tild6239-6230-4531-b834-333839373864/4_1_1_1.jpg'
  },
  facts: [
    { n: '8', t: 'направлений в одном абонементе' },
    { n: '3', t: 'студии в Краснодаре' },
    { n: '3000', t: 'девушек занимаются каждый месяц' },
    { n: 'от 3900 ₽', t: 'абонемент в месяц' }
  ],
  directions: [
    { name: 'Аэростретчинг', goal: 'Улучшить осанку', text: 'Занятие в гамаках: растяжка, элементы йоги и медитация в воздухе и на полу.', img: T + 'tild3633-3236-4734-b430-333033663766/oFyDBgbiy7Cm3j5ok9y-.jpg' },
    { name: 'Стретчинг', goal: 'Улучшить гибкость', text: 'Гибкость и растяжка в трёх плоскостях на динамичных тренировках.', img: T + 'tild3637-3464-4431-b535-336163613630/bY6ttI0TNzNJFWgQCayj.jpg' },
    { name: 'Функциональная тренировка', goal: 'Убрать лишние см', text: 'Петли TRX: стройное тело без боли и травм, первые результаты через две недели.', img: T + 'tild3433-6432-4836-a533-333462623032/9mnHJUsb5VwCOoIQT2lu.jpg' },
    { name: 'МФР', goal: 'Снять напряжение', text: 'Снимает напряжение в мышцах и возвращает лёгкость в каждом движении.', img: T + 'tild3033-3262-4139-a330-326330643363/RgFKHmp2T2NfyYLh4b2y.jpg' },
    { name: 'Пилатес', goal: 'Обрести баланс', text: 'Маленькие движения для больших результатов: дыхание, позвоночник, суставы.', img: T + 'tild3832-3733-4463-b432-303030623463/o76_R_MVym-CHiEEfLZR.jpg' },
    { name: 'Йога', goal: 'Найти гармонию', text: 'Крепкие мышцы, гибкие суставы и подвижные связки.', img: T + 'tild6362-3462-4033-a561-303238313566/syOpNjlrU-sZFUKuxpIU.jpg' },
    { name: '3D-ягодицы', goal: 'Накачать ягодицы', text: 'Стройные ноги и подтянутые ягодицы за два месяца, без изнурительного железа.', img: T + 'tild3438-6439-4132-b161-393133376433/U92rt4__JsU2YxlpSPQv.jpg' },
    { name: 'Класс шпагата', goal: 'Сесть на шпагат', text: 'Безопасно и без боли: посадим на шпагат за 2–3 месяца.', img: T + 'tild3963-6163-4733-a637-333266653133/mUhrsQHvJ8mnbUZgbWqa.jpg' }
  ],
  studios: [
    { name: 'Северная', addr: 'ул. Северная, 324А' },
    { name: '1 Мая', addr: 'ул. 1 Мая, 188' },
    { name: 'Трудовой Славы', addr: 'ул. Трудовой Славы, 6' }
  ],
  programs: [
    { name: 'Баланс', price: 'от 5960 ₽/мес', text: 'Йога, пилатес, стретчинг и телесные практики. Ваш антидот от стресса и выгорания.' },
    { name: 'Трансформация 360°', price: 'от 5960 ₽/мес', text: 'Комплексная рекомпозиция тела: кардио, жиросжигание, снижение веса.', top: true },
    { name: 'Энергия', price: 'от 5960 ₽/мес', text: 'Силовые и функциональные практики. Источник энергии и уверенности.' }
  ],
  reviews: [
    { name: 'Алина', time: '2 месяца в С-КЛАСС', img: T + 'tild3561-3166-4435-a137-646439666239/image_49.png' },
    { name: 'Карина', time: '4 месяца в С-КЛАСС', img: T + 'tild3162-3364-4664-b236-383132306637/__2023-10-01__111528.png' },
    { name: 'Катя', time: '8 месяцев в С-КЛАСС', img: T + 'tild3539-6131-4635-b361-363936616138/image_51.png' }
  ]
};

// Переключатель вариантов (служебный, в финальный сайт не идёт)
document.addEventListener('DOMContentLoaded', () => {
  const here = (location.pathname.split('/').pop() || 'index.html') + location.search;
  const bar = document.createElement('div');
  bar.className = 'variant-switch';
  bar.innerHTML = [['d.html', 'D · Светлый'], ['d.html?t=dark', 'E · Тёмный'], ['a.html', 'A'], ['b.html', 'B'], ['c.html', 'C']]
    .map(([href, label]) => `<a href="${href}"${href === here ? ' class="on"' : ''}>${label}</a>`).join('');
  const css = document.createElement('style');
  css.textContent = `.variant-switch{position:relative;z-index:40;display:flex;justify-content:center;gap:2px;padding:6px;background:#141416;font:600 12px/1 system-ui,sans-serif}
.variant-switch a{color:#cfcfd4;text-decoration:none;padding:7px 11px;border-radius:999px;white-space:nowrap}
.variant-switch a.on{background:#fff;color:#111}`;
  document.head.appendChild(css);
  document.body.prepend(bar);
  document.querySelectorAll('form').forEach((f) => f.addEventListener('submit', (e) => {
    e.preventDefault();
    f.querySelector('button').textContent = 'Заявка отправлена (демо)';
  }));
});
