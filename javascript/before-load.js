/** 
 * Funtion which runs when the user refreshed/closed the page. Simple Example to give the Leave/Stay dialog box Or Update your server before user leaves your page.
 */
window.onbeforeunload = function () {     
  console.log('exit');
  return null;
}
