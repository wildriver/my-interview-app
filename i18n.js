// i18n.js - Internationalization Core Engine
const I18N = {
    currentLang: 'ja',
    langs: {},

    register(code, data) {
        this.langs[code] = data;
    },

    t(key) {
        return this.langs[this.currentLang]?.[key]
            ?? this.langs['en']?.[key]
            ?? this.langs['ja']?.[key]
            ?? key;
    },

    get speechLang() { return this.langs[this.currentLang]?._speechLang || 'ja-JP'; },
    get whisperLang() { return this.langs[this.currentLang]?._whisperLang || 'ja'; },
    get langName() { return this.langs[this.currentLang]?._name || ''; },

    available() {
        return Object.keys(this.langs).map(code => ({
            code,
            name: this.langs[code]._name,
            flag: this.langs[code]._flag
        }));
    },

    setLanguage(code) {
        if (!this.langs[code]) return;
        this.currentLang = code;
        localStorage.setItem('appLanguage', code);
        document.documentElement.lang = code;
        this.applyToDOM();
        window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang: code } }));
    },

    applyToDOM() {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const val = this.t(el.getAttribute('data-i18n'));
            if (val !== el.getAttribute('data-i18n')) el.textContent = val;
        });
        document.querySelectorAll('[data-i18n-html]').forEach(el => {
            const val = this.t(el.getAttribute('data-i18n-html'));
            if (val !== el.getAttribute('data-i18n-html')) el.innerHTML = val;
        });
        document.querySelectorAll('[data-i18n-ph]').forEach(el => {
            const val = this.t(el.getAttribute('data-i18n-ph'));
            if (val !== el.getAttribute('data-i18n-ph')) el.placeholder = val;
        });
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === this.currentLang);
        });
    },

    init() {
        const saved = localStorage.getItem('appLanguage');
        if (saved && this.langs[saved]) {
            this.currentLang = saved;
        }
        document.documentElement.lang = this.currentLang;
        this.applyToDOM();
    }
};
