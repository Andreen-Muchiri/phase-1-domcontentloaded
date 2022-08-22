// Your code goes here
document.addEventListener("DOMContentLoaded",() => {
    //console.log("The DOM has loaded");
    document.querySelector('p').textContent = "JavaScript is so cool. It lets me add text to my page programmatically."
    const event = document.createEvent( 'Event' );
    event.initEvent( 'DOMContentLoaded', true, true );
    window.document.dispatchEvent( event );
  document.querySelector( 'p' ).textContent = "This is really cool!"

});



