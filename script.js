// Texts for both languages. Strings wrapped in <span class="ph">…</span>
// are placeholders that still need real data.
const i18n = {
  ru: {
    "nav.services": "Услуги",
    "nav.process": "Как работаю",
    "nav.experience": "Опыт",
    "nav.blog": "Блог",
    "nav.contact": "Контакты",

    "hero.eyebrow": "HR-консалтинг и рекрутинг · Ташкент",
    "hero.title": "Сильная команда и понятная HR-стратегия для вашего бизнеса",
    "hero.lead": "Подбираю персонал и выстраиваю HR-систему на аутсорсе: от найма до адаптации, обучения и стратегии. HR Director сети частных школ «Регистан».",
    "hero.cta": "Написать в Telegram",
    "hero.cta2": "Услуги и цены",

    "stats.vacancies": "закрытых вакансий",
    "stats.years": "года опыта в HR",
    "stats.role": "сети частных школ «Регистан»",

    "about.title": "Обо мне",
    "about.text": "Более 3 лет в HR: прошёл путь от рекрутинга до HR-директора и закрыл более 1000 вакансий. Сейчас руковожу HR-функцией сети частных школ «Регистан» и большой командой. Строю процессы подбора, адаптации и обучения, которые работают на цели бизнеса, а не ради отчётов.",
    "skills": [
      "Рекрутинг", "Массовый подбор", "Executive search", "Адаптация и онбординг",
      "L&D / обучение", "HR-стратегия", "Оргструктура", "HR-процессы",
      "Управление командой", "Корпоративная культура"
    ],

    "services.title": "Услуги и цены",
    "services": [
      { t: "Подбор персонала", d: "Поиск и отбор специалистов и руководителей: профиль вакансии, поиск, интервью, проверка, сопровождение до выхода. Гарантийная замена.", p: "Специалист — от 5 000 000 сум<br>Руководитель — от 8 000 000 сум" },
      { t: "HR-стратегия на аутсорсе", d: "Аудит текущего HR, оргструктура, ключевые процессы и план развития команды под цели бизнеса.", p: "от 15 000 000 сум" },
      { t: "Адаптация и онбординг", d: "Система ввода новых сотрудников: план первых 90 дней, наставничество, контрольные точки.", p: "от 10 000 000 сум" },
      { t: "Обучение и развитие (L&D)", d: "Оценка компетенций, программы обучения и развития, кадровый резерв.", p: "от 10 000 000 сум" }
    ],
    "services.note": "Точная стоимость зависит от объёма задач — обсудим на бесплатной консультации.",

    "process.title": "Как я работаю",
    "process": [
      { t: "Бриф", d: "Обсуждаем задачу, профиль кандидата, условия и сроки." },
      { t: "Поиск", d: "Ищу кандидатов: job-сайты, соцсети, своя база, рекомендации, прямой поиск." },
      { t: "Интервью", d: "Провожу интервью и оценку компетенций, проверяю рекомендации." },
      { t: "Финалисты", d: "Представляю 2–3 сильных кандидата с подробным заключением по каждому." },
      { t: "Выход сотрудника", d: "Помогаю с оффером и сопровождаю первые дни работы." },
      { t: "Гарантия", d: "Если сотрудник уходит на испытательном сроке — бесплатно найду замену." }
    ],

    "exp.title": "Опыт работы",
    "exp.now": "н.в.",
    "exp.job1.role": "HR Director (HRD)",
    "exp.job1.company": "Сеть частных школ «Регистан»",
    "exp.job1.text": "Руководство HR-функцией и большой командой: рекрутинг, L&D, адаптация, HR-стратегия.",
    "exp.job2.role": "Предыдущая должность",
    "exp.job2.company": "Компания",

    "edu.title": "Образование и сертификаты",
    "edu.uni": "Университет",
    "edu.degree": "Специальность, степень",
    "edu.cert": "Сертификат / курс",
    "edu.certOrg": "Организация",

    "cases.title": "Кейсы",
    "cases": [
      { t: "Найм для сети школ", d: "Выстроил процесс подбора учителей и административного персонала для сети школ.", m: "Более 1000 закрытых вакансий" },
      { t: "Система адаптации", d: "Внедрил программу онбординга для новых сотрудников.", m: "<span class=\"ph\">Результат: текучесть снизилась на N%</span>" },
      { t: "Обучение и развитие", d: "Запустил программы развития педагогов и руководителей.", m: "<span class=\"ph\">Результат: N сотрудников прошли обучение</span>" }
    ],

    "clients.title": "Клиенты и партнёры",

    "reviews.title": "Отзывы",
    "reviews": [
      { q: "<span class=\"ph\">Текст отзыва клиента или коллеги.</span>", a: "<span class=\"ph\">Имя, должность, компания</span>" },
      { q: "<span class=\"ph\">Текст отзыва клиента или коллеги.</span>", a: "<span class=\"ph\">Имя, должность, компания</span>" }
    ],

    "lm.eyebrow": "Бесплатный материал",
    "lm.title": "Чек-лист для директора: 5 вопросов на финальном интервью учителя",
    "lm.text": "Вопросы, которые за 15 минут показывают, кто перед вами — партнёр или исполнитель. С ожидаемыми ответами и красными флагами.",
    "lm.btn": "Скачать чек-лист (DOCX)",

    "blog.title": "Блог",
    "blog": [
      { t: "Как удержать учителей: 7 практик для частной школы", d: "Что реально снижает текучесть педагогов — от найма до карьерного роста.", href: "blog/teachers-retention.html" },
      { t: "Шаблон плана адаптации на 90 дней", d: "Пошаговый план онбординга нового сотрудника с контрольными точками.", href: "blog/onboarding-90-days.html" }
    ],
    "blog.read": "Читать →",
    "blog.back": "← На главную",
    "blog.ctaTitle": "Нужна помощь с подбором или адаптацией?",
    "blog.ctaBtn": "Написать в Telegram",

    "contact.title": "Давайте обсудим вашу задачу",
    "contact.lead": "Напишите или позвоните — отвечу и предложу решение под ваш бизнес.",
    "contact.phone": "Телефон",
    "contact.city": "Город",
    "contact.cityName": "Ташкент, Узбекистан",

    "footer": "Рекрутинг и HR-стратегия на аутсорсе"
  },

  uz: {
    "nav.services": "Xizmatlar",
    "nav.process": "Ish jarayoni",
    "nav.experience": "Tajriba",
    "nav.blog": "Blog",
    "nav.contact": "Aloqa",

    "hero.eyebrow": "HR-konsalting va rekruting · Toshkent",
    "hero.title": "Biznesingiz uchun kuchli jamoa va aniq HR strategiya",
    "hero.lead": "Autsorsing asosida xodimlarni tanlayman va HR tizimini quraman: yollashdan tortib moslashuv, o'qitish va strategiyagacha. «Registon» xususiy maktablar tarmog'ining HR direktori.",
    "hero.cta": "Telegramda yozish",
    "hero.cta2": "Xizmatlar va narxlar",

    "stats.vacancies": "yopilgan vakansiya",
    "stats.years": "yillik HR tajribasi",
    "stats.role": "«Registon» xususiy maktablar tarmog'i",

    "about.title": "Men haqimda",
    "about.text": "HR sohasida 3 yildan ortiq tajriba: rekrutingdan HR direktorgacha bo'lgan yo'lni bosib o'tdim va 1000 dan ortiq vakansiyani yopdim. Hozir «Registon» xususiy maktablar tarmog'ida HR funksiyasi va katta jamoaga rahbarlik qilaman. Hisobot uchun emas, biznes maqsadlari uchun ishlaydigan tanlash, moslashuv va o'qitish jarayonlarini quraman.",
    "skills": [
      "Rekruting", "Ommaviy tanlov", "Executive search", "Moslashuv va onboarding",
      "L&D / o'qitish", "HR strategiya", "Tashkiliy tuzilma", "HR jarayonlar",
      "Jamoani boshqarish", "Korporativ madaniyat"
    ],

    "services.title": "Xizmatlar va narxlar",
    "services": [
      { t: "Xodimlarni tanlash", d: "Mutaxassis va rahbarlarni izlash va tanlash: vakansiya profili, izlash, suhbat, tekshiruv, ishga chiqquncha hamrohlik. Kafolatli almashtirish.", p: "Mutaxassis — 5 000 000 so'mdan<br>Rahbar — 8 000 000 so'mdan" },
      { t: "Autsorsing HR strategiya", d: "Joriy HR auditi, tashkiliy tuzilma, asosiy jarayonlar va biznes maqsadlariga mos jamoani rivojlantirish rejasi.", p: "15 000 000 so'mdan" },
      { t: "Moslashuv va onboarding", d: "Yangi xodimlarni ishga kiritish tizimi: dastlabki 90 kun rejasi, murabbiylik, nazorat nuqtalari.", p: "10 000 000 so'mdan" },
      { t: "O'qitish va rivojlantirish (L&D)", d: "Kompetensiyalarni baholash, o'qitish va rivojlanish dasturlari, kadrlar zaxirasi.", p: "10 000 000 so'mdan" }
    ],
    "services.note": "Aniq narx vazifalar hajmiga bog'liq — bepul konsultatsiyada muhokama qilamiz.",

    "process.title": "Qanday ishlayman",
    "process": [
      { t: "Brif", d: "Vazifa, nomzod profili, shartlar va muddatlarni muhokama qilamiz." },
      { t: "Izlash", d: "Nomzodlarni izlayman: ish saytlari, ijtimoiy tarmoqlar, o'z bazam, tavsiyalar, to'g'ridan-to'g'ri izlash." },
      { t: "Suhbat", d: "Suhbat va kompetensiyalarni baholashni o'tkazaman, tavsiyalarni tekshiraman." },
      { t: "Finalchilar", d: "Har biri bo'yicha batafsil xulosa bilan 2–3 kuchli nomzodni taqdim etaman." },
      { t: "Xodimning ishga chiqishi", d: "Ish taklifi (offer) bo'yicha yordam beraman va dastlabki kunlarda hamrohlik qilaman." },
      { t: "Kafolat", d: "Agar xodim sinov muddatida ketsa — o'rniga bepul yangi nomzod topaman." }
    ],

    "exp.title": "Ish tajribasi",
    "exp.now": "hozirgacha",
    "exp.job1.role": "HR direktor (HRD)",
    "exp.job1.company": "«Registon» xususiy maktablar tarmog'i",
    "exp.job1.text": "HR funksiyasi va katta jamoaga rahbarlik: rekruting, L&D, moslashuv, HR strategiya.",
    "exp.job2.role": "Avvalgi lavozim",
    "exp.job2.company": "Kompaniya",

    "edu.title": "Ta'lim va sertifikatlar",
    "edu.uni": "Universitet",
    "edu.degree": "Mutaxassislik, daraja",
    "edu.cert": "Sertifikat / kurs",
    "edu.certOrg": "Tashkilot",

    "cases.title": "Keyslar",
    "cases": [
      { t: "Maktablar tarmog'i uchun yollash", d: "Maktablar tarmog'i uchun o'qituvchilar va ma'muriy xodimlarni tanlash jarayonini qurdim.", m: "1000 dan ortiq yopilgan vakansiya" },
      { t: "Moslashuv tizimi", d: "Yangi xodimlar uchun onboarding dasturini joriy qildim.", m: "<span class=\"ph\">Natija: kadrlar qo'nimsizligi N% ga kamaydi</span>" },
      { t: "O'qitish va rivojlantirish", d: "O'qituvchilar va rahbarlar uchun rivojlanish dasturlarini ishga tushirdim.", m: "<span class=\"ph\">Natija: N xodim o'qitildi</span>" }
    ],

    "clients.title": "Mijozlar va hamkorlar",

    "reviews.title": "Fikrlar",
    "reviews": [
      { q: "<span class=\"ph\">Mijoz yoki hamkasbning fikri.</span>", a: "<span class=\"ph\">Ism, lavozim, kompaniya</span>" },
      { q: "<span class=\"ph\">Mijoz yoki hamkasbning fikri.</span>", a: "<span class=\"ph\">Ism, lavozim, kompaniya</span>" }
    ],

    "lm.eyebrow": "Bepul material",
    "lm.title": "Direktor uchun chek-list: o'qituvchi bilan yakuniy suhbatda 5 ta savol",
    "lm.text": "15 daqiqada qarshingizda kim — hamkormi yoki shunchaki ijrochimi, ko'rsatib beradigan savollar. Kutilgan javoblar va «qizil bayroqlar» bilan. Fayl rus tilida.",
    "lm.btn": "Chek-listni yuklab olish (DOCX)",

    "blog.title": "Blog",
    "blog": [
      { t: "O'qituvchilarni qanday saqlab qolish mumkin: xususiy maktab uchun 7 ta amaliyot", d: "Pedagoglar qo'nimsizligini haqiqatan kamaytiradigan narsalar — yollashdan martaba o'sishigacha.", href: "blog/teachers-retention.html" },
      { t: "90 kunlik moslashuv rejasi shabloni", d: "Yangi xodimni ishga kiritishning nazorat nuqtalari bilan bosqichma-bosqich rejasi.", href: "blog/onboarding-90-days.html" }
    ],
    "blog.read": "O'qish →",
    "blog.back": "← Bosh sahifa",
    "blog.ctaTitle": "Xodim tanlash yoki moslashuvda yordam kerakmi?",
    "blog.ctaBtn": "Telegramda yozish",

    "contact.title": "Vazifangizni muhokama qilamiz",
    "contact.lead": "Yozing yoki qo'ng'iroq qiling — javob beraman va biznesingizga mos yechim taklif qilaman.",
    "contact.phone": "Telefon",
    "contact.city": "Shahar",
    "contact.cityName": "Toshkent, O'zbekiston",

    "footer": "Autsorsing rekruting va HR strategiya"
  }
};

const renderers = {
  services: s => `<article class="card"><h3>${s.t}</h3><p>${s.d}</p><div class="card__price">${s.p}</div></article>`,
  process: (s, i) => `<li class="step"><span class="step__n">${i + 1}</span><h3>${s.t}</h3><p>${s.d}</p></li>`,
  cases: c => `<article class="card"><h3>${c.t}</h3><p>${c.d}</p><div class="card__meta">${c.m}</div></article>`,
  reviews: r => `<article class="card"><blockquote>«${r.q}»</blockquote><div class="card__meta">${r.a}</div></article>`,
  blog: (b, i, lang) => `<a class="card card--link" href="${b.href}"><h3>${b.t}</h3><p>${b.d}</p><div class="card__price">${i18n[lang]["blog.read"]}</div></a>`
};

function setLang(lang) {
  const dict = i18n[lang];
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.innerHTML = dict[el.dataset.i18n] ?? "";
  });
  document.querySelectorAll("[data-i18n-list]").forEach(el => {
    el.innerHTML = dict[el.dataset.i18nList].map(x => `<li>${x}</li>`).join("");
  });
  document.querySelectorAll("[data-i18n-cards]").forEach(el => {
    const key = el.dataset.i18nCards;
    el.innerHTML = dict[key].map((item, i) => renderers[key](item, i, lang)).join("");
  });
  // Long-form content (blog articles) is written per language in separate blocks
  document.querySelectorAll("[data-lang-block]").forEach(el => {
    el.hidden = el.dataset.langBlock !== lang;
  });
  document.querySelectorAll("[data-lang]").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  try { localStorage.setItem("lang", lang); } catch (e) {}
}

document.querySelectorAll("[data-lang]").forEach(btn => {
  btn.addEventListener("click", () => setLang(btn.dataset.lang));
});

let saved = null;
try { saved = localStorage.getItem("lang"); } catch (e) {}
setLang(i18n[saved] ? saved : "ru");

document.getElementById("year").textContent = new Date().getFullYear();
