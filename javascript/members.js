"use strict";

/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Insert club membefrs
   Author: Roger Okamoto
   Date:   3/6/2022
	
*/

function staticMethod(){

var tableHTML = "<table id='membershipTable'> \
     <caption>2022 Membership List</caption>   \
    <tr>                                 \
        <th>First Name</th>                     \
        <th>Last Name</th>                    \
        <th>NTRP</th>                    \
        <th>DATE</th>                    \
    </tr>"

    var tempHTML = ""    
    var eventHTML = "" 
    var fname,lname,ntrp,epoch

    // read in via php/javascript from SQL/MongoDB

    var memberArray = Array()
    // FName, LName, Rating, Date (UNIX epoch format)
    memberArray.push( Array("Alok","Aggarwal","M3.5",1645821456))
    memberArray.push( Array("Nancy","Andersen","F3.0",1640590999))
    memberArray.push( Array("Kaddie","Ashley","F3.0 C",1641235695))
    memberArray.push( Array("Orhan","Baser","M4",1638807315))
    memberArray.push( Array("Carrie","Bell","F4.0",1638254029))
    memberArray.push( Array("Randy","Bell","M",1645487308))
    memberArray.push( Array("Ike","Bunanta","F4.5",1641969610))
    memberArray.push( Array("Theresa","Campbell","F3.0",1641430953))
    memberArray.push( Array("Lisa","Cesario","F3.0",1644288995))
    memberArray.push( Array("Jose","Contreras","M3.0",1639346254))
    memberArray.push( Array("Onofre","de Souza","M",1637651959))
    memberArray.push( Array("Ginger","Furuta-Sera","F4.0",1641112781))
    memberArray.push( Array("Zelda","Grover","F3.5",1638751787))
    memberArray.push( Array("Jeanette","Hoggatt","F3.5",1640048641))
    memberArray.push( Array("Diane","Hudson","F4.0",1641262187))
    memberArray.push( Array("Mark","Isaacson","M",1644644024))
    memberArray.push( Array("Julie","Johnson","F3.0",1641337185))
    memberArray.push( Array("David","Kohls","M",1638741957))
    memberArray.push( Array("Haruko","Kurata","F4.5",1642013500))

    var e,t,year,month,day
    for(var i=0; i< memberArray.length ; i++){

        fname = memberArray[i][0]
        lname = memberArray[i][1]
        ntrp  = memberArray[i][2]
        t = new Date( memberArray[i][3]*1000 )
        year = t.getMonth() + 1 + "/" + t.getDate() + "/" + t.getFullYear()
        
        tempHTML += "<tr>"
        tempHTML += "<td>" + fname + "</td>"
        tempHTML += "<td>" + lname + "</td>"
        tempHTML += "<td>" + ntrp + "</td>"
        tempHTML += "<td>" + year + "</td>"
        tempHTML += "</tr>"

        eventHTML += tempHTML
   }

   var eventHTML = tempHTML
   document.getElementById("memberList").innerHTML = tableHTML + eventHTML   
}

    function success(data ){

    var tableHTML = "<table id='membershipTable'> \
    <caption>2022 Membership List</caption>   \
           <tr>                                 \
       <th>First Name</th>                     \
       <th>Last Name</th>                    \
       <th>NTRP</th>                    \
       <th>DATE</th>                    \
        </tr>"

        var value, tempHTML=""
        var year,epoch,fname,lname,ntrp,address,zip,email
        for( var key in data ){
            value = data[key]

            year = value['year']
            epoch = value['date']
            fname = value['fname']
            lname = value['lname']
            ntrp = value['gender']+ value['ntrp']
            address = value['address']
            zip = value['zip']
            email = value['email']+"@"+value['url']

            
            console.log(key , year , epoch , fname, lname, ntrp, address,zip,email)
            tempHTML += "<tr>"
            tempHTML += "<td>" + year + "</td>"
            tempHTML += "<td>" + fname+ "</td>"
            tempHTML += "<td>" + lname+ "</td>"
            tempHTML += "<td>" + ntrp+ "</td>"
            tempHTML += "</tr>"

        }
        var eventHTML = tempHTML
        document.getElementById("memberList").innerHTML = tableHTML + eventHTML    


    }

//  staticMethod()
    var data
   
    $.getJSON( "http://www.sctennisclub.org/membership/test_header.php" ,data, success )

    