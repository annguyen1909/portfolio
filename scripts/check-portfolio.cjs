const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const ts = require('typescript');

const temporary = fs.mkdtempSync(path.join(os.tmpdir(), 'portfolio-check-'));
try {
  for (const name of ['projects', 'project-categories', 'portfolio']) {
    const source = fs.readFileSync(path.join(__dirname, '../data', `${name}.ts`), 'utf8');
    const compiled = ts.transpileModule(source, {
      compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
    });
    fs.writeFileSync(path.join(temporary, `${name}.js`), compiled.outputText);
  }
  const { publicProjects } = require(path.join(temporary, 'projects.js'));
  const { selectedProjects, orderedProjects, portfolioStats } = require(path.join(temporary, 'portfolio.js'));
  const { getProjectCategory } = require(path.join(temporary, 'project-categories.js'));
  const selected = ['united-evisa', 'wildlifedb', 'visualennode-archviz-studio', 'sutygon-crm'];
  assert.deepEqual(selectedProjects.map(project => project.slug), selected);
  assert.deepEqual(orderedProjects.slice(0, 4).map(project => project.slug), selected);
  assert.equal(new Set(orderedProjects.map(project => project.slug)).size, publicProjects.length);
  assert.equal(orderedProjects.length, publicProjects.length);
  assert(orderedProjects.every(project => project.status !== 'archived'));
  assert.equal(orderedProjects.filter(project => getProjectCategory(project) === 'Operations & CRM').length, 2);
  assert.equal(Number(portfolioStats[0].value), publicProjects.length);
  assert.equal(Number(portfolioStats[1].value), publicProjects.filter(project => project.isProduction).length);
  for (const project of publicProjects) {
    for (const image of [project.image, ...project.gallery]) {
      assert(fs.existsSync(path.join(__dirname, '../public', image)), `Missing project image: ${image}`);
    }
  }
  console.log(`Portfolio checks passed: ${publicProjects.length} case studies, 4 selected, complete archive, consistent counts.`);
} finally {
  fs.rmSync(temporary, { recursive: true, force: true });
}
