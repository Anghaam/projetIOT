var rootRef = firebase.database().ref().child("sensor");

    rootRef.on("child_added", snap => {
        var humidity = snap.child("humidity").val();
        var temp = snap.child("temp").val();
        var etatHum;
        var etatTemp;

        if((temp<=28)||(temp>=42)){
            etatTemp="<img src='http://www.artesiafunerals.com/mobi/images/preload.gif' width='20' height='20'></img>";
        }
        else {
            etatTemp="<img src='https://loading.io/icon/custom/206373' width='20' height='20'></img>";
        }

        if((humidity<20)||(humidity>60)){
            etatHum="<img src='http://www.artesiafunerals.com/mobi/images/preload.gif' width='20' height='20'></img>";
        }
        else {
            etatHum="<img src='https://loading.io/icon/custom/206373' width='20' height='20'></img>";
        }



        $("#tbody-sensors").append("<tr><td>" + humidity +  "</td><td>"  + etatHum + "</td><td>"  + temp + "</td><td>" + etatTemp + "</td></tr>");
    });
        
        /* if (humidity>50){
        	alert('Humidité élevée!  Il faut controler votre environnement');
            
        }
        
        if(temp>50){
            alert('Température élevée! Il faut controler votre environnement');
        } */


        
      

