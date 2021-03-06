// page.base('/support');
// page('*', showActiveLink);
page('/', showHome);
page('/automation', showAutomation);
page('/realtime', showRealtime);
page('/realtime/category', showCategory);
page('/realtime/questions',  showQuestion);
page('/automation/category', showCategory);
page('/automation/questions',  showQuestion);

page('*', notfound);
page();

function showActiveLink(ctx, next) {
  deactiveate();
  a(ctx.path).parentNode.classList.add('active');
  next();
}

function showHome(ctx) {

  render(template('home'), !ctx.init);
}

function showAutomation(ctx) {
  console.log('ctx', ctx);
  render(template('automation'), !ctx.init);
}

function showRealtime(ctx) {
  render(template('realtime'), !ctx.init);
  // var home3 = getData(0, 0);
  // console.log(home3);
  // console.log('document',document)
  // console.log("getElementById('category')",document.getElementById('category'))
  // document.getElementById('category').innerHTML = home3.name;
}

function showCategory(ctx) {
  render(template('category'), !ctx.init);
}

function showQuestion(ctx) {
  render(template('questions'), !ctx.init);
}

function notfound(ctx) {
  render(template('not-found'), !ctx.init);
}

function render(html, hide) {
  var el = document.getElementById('content');
  if (hide) {
    el.classList.add('hide');
    setTimeout(function(){
      el.innerHTML = html;
      el.classList.remove('hide');
    }, 300);
  } else {
    el.innerHTML = html;
  }
}

function deactiveate() {
  var el = document.querySelector('.active')
  if (el) el.classList.remove('active');
}

function a(href) {
  return document.querySelector('[href=".' + href + '"]');
}

function template(name) {
  return document
    .getElementById(name + '-template')
    .innerHTML;
}

