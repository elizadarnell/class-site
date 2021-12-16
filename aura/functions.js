$( function() {
    $( ".orb" ).orb();
  } );

function randomPosition(myclass){
  var randomW = Math.floor(100*Math.random());
  var randomH = Math.floor(100*Math.random());
  $(myclass).css({'top' : randomH + '%'});
  $(myclass).css({'left' : randomW + '%'});
  $(myclass).css({'transform' : 'rotate(' + randomW + 'deg)'});
};

randomPosition('.orb1');
randomPosition('.orb2');
randomPosition('.orb3');
randomPosition('.orb4');
randomPosition('.orb5');
randomPosition('.orb6');
randomPosition('.orb7');
randomPosition('.orb8');
randomPosition('.orb9');
randomPosition('.orb10');
randomPosition('.orb11');
randomPosition('.orb12');
randomPosition('.orb13');
randomPosition('.orb14');
randomPosition('.orb15');
randomPosition('.orb16');
randomPosition('.orb17');
randomPosition('.orb18');
randomPosition('.orb19');
randomPosition('.orb20');
randomPosition('.orb21');
randomPosition('.orb22');
randomPosition('.orb23');
randomPosition('.orb24');
randomPosition('.orb25');
randomPosition('.orb26');
randomPosition('.orb27');
randomPosition('.orb28');
