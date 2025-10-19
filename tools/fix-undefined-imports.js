const fs = require('fs');
const path = require('path');

function walk(dir){
  return fs.readdirSync(dir).flatMap(name => {
    const p = path.join(dir, name);
    return fs.statSync(p).isDirectory() ? walk(p) : /\.(ts|tsx|js|jsx)$/.test(p) ? [p] : [];
  });
}

const files = walk(path.resolve(__dirname, '..', 'src'));
let changed = 0;

files.forEach(f => {
  let s = fs.readFileSync(f, 'utf8');
  // remove stray 'undefined' appended to import specifiers, e.g. "@radix-ui/react-fooundefined" -> "@radix-ui/react-foo"
  const s2 = s.replace(/(["'`])(@[a-z0-9\-\/]+?|[a-z0-9\-_]+?)undefined\1/gi, (m, q, name) => `${q}${name}${q}`);
  if (s !== s2) {
    fs.writeFileSync(f, s2, 'utf8');
    console.log('fixed:', path.relative(process.cwd(), f));
    changed++;
  }
});

console.log(`done — files changed: ${changed}`);