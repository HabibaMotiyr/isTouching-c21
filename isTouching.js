function isTouching(Tiana,Tom ){

    if (Tiana.x - Tom.x < Tom.width/2 + Tiana.width/2
      && Tom.x - Tiana.x < Tom.width/2 + Tiana.width/2
      && Tiana.y - Tom.y < Tom.height/2 + Tiana.height/2
      && Tom.y - Tiana.y < Tom.height/2 + Tiana.height/2) {
    return true;
  }
  else {
    return false;
  }
  
   
  
  
  }