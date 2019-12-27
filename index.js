// page.base('/support');
// page('*', showActiveLink);
page('/', showHome);
page('/automation', showAutomation);
page('/realtime', showRealtime);
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
  render(template('automation'), !ctx.init);
}

function showRealtime(ctx) {
  render(template('realtime'), !ctx.init);
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

