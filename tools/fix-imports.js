const fs = require('fs');
const path = require('path');

function walk(dir){
  const res = [];
  for(const name of fs.readdirSync(dir)){
    const p = path.join(dir, name);
    if(fs.statSync(p).isDirectory()) res.push(...walk(p));
    else if(/\.(ts|tsx|js|jsx)$/.test(p)) res.push(p);
  }
  return res;
}

const files = walk(path.resolve(__dirname, '..', 'src'));
const pkgVersionPattern = /(['"`])(@?[a-z0-9\-\/]+?)@(\d+(?:\.\d+)*(-[^\s'"]*)?)(['"`])/gi;

files.forEach(f => {
  let s = fs.readFileSync(f,'utf8');
  const s2 = s.replace(pkgVersionPattern, (m, q1, name, ver, q2) => `${q1}${name}${q2}`);
  if(s !== s2){
    fs.writeFileSync(f, s2, 'utf8');
    console.log('fixed:', path.relative(process.cwd(), f));
  }
});
console.log('done');