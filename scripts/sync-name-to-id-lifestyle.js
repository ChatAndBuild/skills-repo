const fs = require('fs');
const path = require('path');

const skillsDir = path.join(__dirname, '..', 'skills');
const dirs = fs.readdirSync(skillsDir);
let updated = 0;
let skipped = 0;

for (const dir of dirs) {
  const skillPath = path.join(skillsDir, dir, 'SKILL.md');
  if (!fs.existsSync(skillPath)) continue;
  let content = fs.readFileSync(skillPath, 'utf8');
  if (!content.includes('category: Lifestyle')) continue;

  const idMatch = content.match(/^id:\s*(.+)$/m);
  const nameMatch = content.match(/^name:\s*(.+)$/m);
  if (!idMatch || !nameMatch) {
    skipped++;
    continue;
  }
  const id = idMatch[1].trim();
  const currentName = nameMatch[1].trim();
  if (currentName === id) {
    skipped++;
    continue;
  }

  content = content.replace(/^name:\s*.+$/m, `name: ${id}`);
  fs.writeFileSync(skillPath, content);
  updated++;
  console.log(`${dir}: name "${currentName}" -> "${id}"`);
}

console.log(`\nUpdated: ${updated}, Skipped (already same or no match): ${skipped}`);
