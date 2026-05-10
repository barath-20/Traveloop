const fs = require('fs');
const path = require('path');

const dir = 'd:/odoo/Traveloop/frontend/src/pages';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

files.forEach(file => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // Simple regex for style="prop: value; prop: value;"
    // We handle common ones found in grep
    content = content.replace(/style="([^"]*)"/g, (match, styleString) => {
        const styles = styleString.split(';').filter(s => s.trim() !== '');
        const styleObjectEntries = styles.map(s => {
            const [prop, ...valParts] = s.split(':');
            const val = valParts.join(':').trim();
            const camelProp = prop.trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
            return `${camelProp}: "${val.replace(/"/g, '\\"')}"`;
        });
        return `style={{ ${styleObjectEntries.join(', ')} }}`;
    });

    fs.writeFileSync(filePath, content);
    console.log(`Fixed styles in ${file}`);
});
