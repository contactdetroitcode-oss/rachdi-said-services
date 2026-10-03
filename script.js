const $=s=>document.querySelector(s),$$=s=>document.querySelectorAll(s);
const menuBtn=$("#menuBtn"),navLinks=$("#navLinks"),languageBtn=$("#languageBtn"),form=$("#contactForm"),modal=$("#successModal"),overlay=$("#modalOverlay"),close=$("#modalClose"),ok=$("#modalOk");
let lang=localStorage.getItem("rachdiLanguage")||"fr";

const ar={
logo:"رشدي سعيد","nav-home":"الرئيسية","nav-services":"الخدمات","nav-projects":"الأعمال","nav-zone":"منطقة التدخل","nav-about":"من نحن","nav-contact":"اتصل بنا",
"hero-badge":"خدمات تقنية احترافية","hero-title":"حلول موثوقة","hero-title-span":"لمنشآتكم وتجهيزاتكم","hero-text":"التكييف، التبريد، الغسالات، السباكة، التجهيزات الصحية والصيانة. تدخلات مهنية بمدينة المحمدية.","hero-location":"المحمدية، المغرب","hero-call":"📞 اتصل بنا","hero-whatsapp":"💬 واتساب",
"services-label":"خدماتنا","services-title":"خدمات تقنية","services-title-span":"لتلبية احتياجاتكم","services-text":"تدخلات مناسبة للأفراد والمهنيين.",
"service-clim-title":"التكييف","service-clim-text":"تركيب وصيانة وتنظيف وإصلاح أنظمة التكييف.","service-cold-title":"التبريد والتجهيزات الباردة","service-cold-text":"صيانة وإصلاح معدات التبريد.","service-washer-title":"الغسالات","service-washer-text":"تشخيص وإصلاح وصيانة الغسالات.","service-plumbing-title":"السباكة","service-plumbing-text":"إصلاح وتركيب تجهيزات السباكة.","service-sanitary-title":"التجهيزات الصحية","service-sanitary-text":"تركيب وإصلاح التجهيزات الصحية.","service-maintenance-title":"الصيانة","service-maintenance-text":"الصيانة الوقائية والإصلاحية لمختلف التجهيزات.",
"projects-label":"أعمالنا","projects-title":"عمل","projects-title-span":"منجز بعناية","projects-text":"نماذج من الخدمات والتدخلات المنجزة.",
"project-clim-label":"التكييف","project-clim-title":"التركيب والإصلاح","project-clim-text":"التدخل في مختلف أنظمة التكييف.","project-cold-label":"التبريد","project-cold-title":"صيانة معدات التبريد","project-cold-text":"تشخيص وصيانة معدات التبريد.","project-washer-label":"الغسالات","project-washer-title":"الإصلاح","project-washer-text":"البحث عن الأعطال وإصلاح الغسالات.","project-plumbing-label":"السباكة","project-plumbing-title":"التركيب والإصلاح","project-plumbing-text":"التدخل في تجهيزات السباكة.","project-sanitary-label":"التجهيزات الصحية","project-sanitary-title":"التجهيزات الصحية","project-sanitary-text":"تركيب وإصلاح التجهيزات الصحية.","project-maintenance-label":"الصيانة","project-maintenance-title":"الصيانة المتعددة","project-maintenance-text":"تدخل مناسب لكل حاجة.",
"why-label":"لماذا نحن؟","why-title":"خدمة","why-title-span":"بسيطة واحترافية","why-one-title":"تشخيص دقيق","why-one-text":"البحث عن سبب العطل قبل كل تدخل.","why-two-title":"تدخل سريع","why-two-text":"تنظيم التدخل حسب احتياجاتكم.","why-three-title":"متابعة احترافية","why-three-text":"تواصل واضح قبل وبعد التدخل.",
"zone-label":"منطقة التدخل","zone-title":"التدخل في","zone-title-span":"المحمدية","zone-text":"الخدمات متوفرة في المحمدية والمناطق القريبة.","location-address-title":"الموقع","location-address":"المحمدية، المغرب","location-phone-title":"الهاتف","location-whatsapp-title":"واتساب","location-facebook":"زيارة الصفحة","location-map":"📍 Google Maps","location-call":"📞 اتصل","map-title":"منطقة التدخل","map-text":"المحمدية والنواحي",
"about-label":"من نحن","about-title":"خبرة","about-title-span":"في خدمة احتياجاتكم","about-text-one":"يقدم رشدي سعيد خدمات تقنية متعددة للأفراد والمهنيين.","about-text-two":"الهدف هو تقديم تدخل جدي وواضح ومناسب لكل حالة.","about-point-one":"عمل احترافي","about-point-two":"تشخيص قبل التدخل","about-point-three":"خدمات متعددة","about-point-four":"التدخل في المحمدية","about-box-title":"تحتاج إلى تدخل؟","about-box-text":"تواصل معنا مباشرة عبر واتساب.","about-box-button":"💬 تواصل عبر واتساب",
"cta-label":"تحتاج إلى تدخل؟","cta-title":"لنتحدث عن حاجتك","cta-text":"اشرح لنا مشكلتك واحصل على المعلومات اللازمة للتدخل.","cta-contact":"✉️ اتصل بنا","cta-whatsapp":"💬 واتساب",
"contact-label":"اتصل بنا","contact-title":"لديك سؤال؟","contact-title-span":"تواصل معنا","contact-text":"املأ النموذج وسيتم تجهيز طلبك لإرساله عبر واتساب.","contact-phone-title":"الهاتف","contact-whatsapp-title":"واتساب","contact-location-title":"الموقع","contact-location":"المحمدية، المغرب","contact-facebook":"زيارة الصفحة",
"form-name":"الاسم الكامل","form-phone":"الهاتف","form-email":"البريد الإلكتروني","form-service":"الخدمة المطلوبة","form-message":"رسالتك","placeholder-name":"اسمك","placeholder-phone":"رقم هاتفك","placeholder-email":"بريدك الإلكتروني","placeholder-message":"اشرح لنا حاجتك...","service-select":"اختر خدمة","form-submit":"💬 إرسال عبر واتساب","form-note":"سيتم تجهيز طلبك تلقائياً في واتساب.",
"footer-text":"التكييف، التبريد، الغسالات، السباكة، التجهيزات الصحية والصيانة في المحمدية.","footer-navigation":"التنقل","footer-contact":"اتصل بنا","footer-rights":"رشدي سعيد. جميع الحقوق محفوظة.","modal-title":"تم تجهيز الطلب!","modal-text":"تم تجهيز طلبك وسيتم فتح واتساب.","modal-button":"حسناً"
};

const fr={};
$$("[data-i18n]").forEach(e=>fr[e.dataset.i18n]=e.textContent.trim());
$$("[data-i18n-placeholder]").forEach(e=>fr[e.dataset.i18nPlaceholder]=e.placeholder);

function translate(){
$$("[data-i18n]").forEach(e=>e.textContent=lang==="ar"?(ar[e.dataset.i18n]||fr[e.dataset.i18n]||""):(fr[e.dataset.i18n]||""));
$$("[data-i18n-placeholder]").forEach(e=>e.placeholder=lang==="ar"?(ar[e.dataset.i18nPlaceholder]||fr[e.dataset.i18nPlaceholder]||""):(fr[e.dataset.i18nPlaceholder]||""));
document.documentElement.lang=lang;
document.documentElement.dir=lang==="ar"?"rtl":"ltr";
if(languageBtn)languageBtn.textContent=lang==="ar"?"Français":"العربية";
localStorage.setItem("rachdiLanguage",lang);
}

languageBtn?.addEventListener("click",()=>{
lang=lang==="fr"?"ar":"fr";
translate();
navLinks?.classList.remove("active");
if(menuBtn)menuBtn.textContent="☰";
});

menuBtn?.addEventListener("click",()=>{
navLinks?.classList.toggle("active");
if(menuBtn)menuBtn.textContent=navLinks?.classList.contains("active")?"✕":"☰";
});

$$(".nav-links a").forEach(a=>a.addEventListener("click",()=>{
navLinks?.classList.remove("active");
if(menuBtn)menuBtn.textContent="☰";
}));

$$('a[href^="#"]').forEach(a=>a.addEventListener("click",e=>{
const id=a.getAttribute("href"),target=id&&$(id);
if(!target)return;
e.preventDefault();
target.scrollIntoView({behavior:"smooth"});
}));

const cards=$$(".service-card,.why-card,.realisation-card");

if("IntersectionObserver"in window){
const observer=new IntersectionObserver(entries=>{
entries.forEach(e=>{
if(e.isIntersecting){
e.target.classList.add("show");
observer.unobserve(e.target);
}
});
},{threshold:.12});
cards.forEach(e=>observer.observe(e));
}else cards.forEach(e=>e.classList.add("show"));

const sections=$$("main section[id]"),links=$$(".nav-links a");

if("IntersectionObserver"in window){
const observer=new IntersectionObserver(entries=>{
entries.forEach(e=>{
if(e.isIntersecting){
links.forEach(a=>a.classList.toggle("active",a.getAttribute("href")===`#${e.target.id}`));
}
});
},{rootMargin:"-35% 0px -55% 0px"});
sections.forEach(e=>observer.observe(e));
}

function closeModal(){
modal?.classList.remove("active");
document.body.classList.remove("modal-open");
}

close?.addEventListener("click",closeModal);
overlay?.addEventListener("click",closeModal);

ok?.addEventListener("click",()=>{
const url=modal?.dataset.url;
closeModal();
if(url)window.open(url,"_blank");
});

document.addEventListener("keydown",e=>{
if(e.key==="Escape")closeModal();
});

const serviceAr={
"Climatisation":"التكييف",
"Froid et réfrigération":"التبريد والتجهيزات الباردة",
"Machines à laver":"الغسالات",
"Plomberie":"السباكة",
"Sanitaire":"التجهيزات الصحية",
"Maintenance polyvalente":"الصيانة"
};

form?.addEventListener("submit",e=>{
e.preventDefault();

const name=$("#name")?.value.trim();
const phone=$("#phone")?.value.trim();
const email=$("#email")?.value.trim();
const service=$("#service")?.value;
const message=$("#message")?.value.trim();

if(!name||!phone||!service||!message)return;

const s=lang==="ar"?(serviceAr[service]||service):service;

const text=lang==="ar"
?`السلام عليكم رشدي سعيد،

الاسم: ${name}
الهاتف: ${phone}
البريد الإلكتروني: ${email||"غير محدد"}
الخدمة: ${s}

الرسالة:
${message}

📍 المدينة: المحمدية`
:`Bonjour Rachdi Said,

Nom : ${name}
Téléphone : ${phone}
Email : ${email||"Non renseigné"}
Service : ${s}

Message :
${message}

📍 Ville : Mohammedia`;

const url=`https://wa.me/212640027403?text=${encodeURIComponent(text)}`;

if(modal){
modal.dataset.url=url;
modal.classList.add("active");
document.body.classList.add("modal-open");
}

form.reset();
});

const year=$("#currentYear");
if(year)year.textContent=new Date().getFullYear();

translate();