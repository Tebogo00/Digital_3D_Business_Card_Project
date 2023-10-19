// $('.card').click(function(){
//     $(this).toggleClass('flipped');
//   });

flip = () => {
  document.getElementById('card').classList.toggle('flipped')
  document.getSelector('#front .reflection').classList.toggle('move')
  document.getSelector('#back .reflection').classList.toggle('move')
}
document.getElementById('show-btn').addEventListener('click', flip)
document.getElementById('hide-btn').addEventListener('click', flip)