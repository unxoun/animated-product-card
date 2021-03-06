//==========================================================
//==========================================================
//==========================================================
//==========================================================
//==========================================================
// I wrote this just to add some fantasy to the project.
// It just adds and removes some CSS classes sequentially.
// "fx"s are defined in "styles/globals.css".
//==========================================================

export function animate($elements, fx, intervalsDuration) {
  //
  for (const $element of $elements) {
    $element.current?.classList?.add(fx + "-pre");
  }
  
  applyFX($elements[0], fx);

  let i = 1;
  const interval = setInterval(() => {
    if (i < $elements.length) {
      applyFX($elements[i], fx);
    } else clearInterval(interval);
    i++;
  }, intervalsDuration);
}

function applyFX($element, fx) {
  const classList = $element.current?.classList;
  classList?.add(fx);
  setTimeout(() => {
    classList?.remove(fx, fx + "-pre");
  }, 1000);
}
