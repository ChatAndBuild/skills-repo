const fs = require('fs');
const path = require('path');

// Rough approximation: ~4 chars per token for English/markdown
function estTokens(text) {
  return Math.ceil(text.length / 4);
}

const skillsDir = path.join(__dirname, '..', 'skills');
const dirs = fs.readdirSync(skillsDir);
const limit = 4000;
const over = [];
const under = [];

for (const dir of dirs) {
  const skillPath = path.join(skillsDir, dir, 'SKILL.md');
  if (!fs.existsSync(skillPath)) continue;
  const content = fs.readFileSync(skillPath, 'utf8');
  if (!content.includes('category: Lifestyle')) continue;

  const tokens = estTokens(content);
  const entry = { id: dir, tokens };
  if (tokens > limit) over.push(entry);
  else under.push(entry);
}

over.sort((a, b) => b.tokens - a.tokens);
console.log(`Lifestyle skills over ${limit} tokens (est.): ${over.length}`);
over.forEach(({ id, tokens }) => console.log(`  ${id}: ~${tokens}`));
console.log(`\nLifestyle skills at or under ${limit} tokens: ${under.length}`);
if (over.length === 0) console.log('\nAll Lifestyle instructions are under 4000 tokens (by this estimate).');
else console.log(`\nTotal Lifestyle skills: ${over.length + under.length}`);
