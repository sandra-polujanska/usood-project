function openCard(evt, colorName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(colorName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  function openSection(evt2, availability) {
    var i, partnerslogos, partnerslinks;

    partnerslogos = document.getElementsByClassName("partnerslogos");
    for (i = 0; i < partnerslinks; i++) {
        partnerslinks[i].style.display = "none";
    }
  
    partnerslinks = document.getElementsByClassName("partnerslinks");
    for (i = 0; i < partnerslinks.length; i++) {
        partnerslinks[i].className = partnerslinks[i].className.replace(" active", "");
    }

    document.getElementById(availability).style.display = "block";
    evt2.currentTarget.className += " active";
  }