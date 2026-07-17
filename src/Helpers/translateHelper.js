// src/Helpers/translateHelper.js
export function translateTo(lang) {
    console.log(`🌐 translateTo called with: ${lang}`);
    const tryChange = () => {
        const combo = document.querySelector('select.goog-te-combo');
        if (combo) {
            console.log('🔍 found combo, switching value');
            combo.value = lang;
            combo.dispatchEvent(new Event('change'));
            return true;
        }
        return false;
    };

    if (!tryChange()) {
        console.warn('⚠️ combo box not found—will retry in 500ms');
        setTimeout(() => {
            if (!tryChange()) {
                console.error('❌ Still no combo box. Google widget never initialized.');
            }
        }, 500);
    }
}
  