"use strict";

/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Insert club membefrs
   Author: Roger Okamoto
   Date:   3/6/2022
	
*/
    document.getElementById("membershipform").addEventListener("submit" , onSubmit)

    function onSubmit( ){

        var fname,lname,gender,genderF,genderM,ntrp
        var address,city,zip, email, phone
        fname = document.getElementById("fname").value
        lname = document.getElementById("lname").value

        //gender = document.getElementById("gender[0]").value
        genderF = document.getElementById("genderF").value
        genderM = document.getElementById("genderM").value

        ntrp = document.getElementById("ntrp").value

        address = document.getElementById("address").value
        city = document.getElementById("city").value
        zip = document.getElementById("zip").value
        


        email = document.getElementById("email").value
        phone = document.getElementById("phone").value

        var text = fname + lname  + ntrp + genderM + genderF
        var text2 = address + city + zip         
        var text3 = email + phone

        console.log(text )        
        console.log(text2 )                
        console.log(text3 )                

        alert(text )
//        alert(text + "\n" + text2 + "\n" + text3)

    }








    
