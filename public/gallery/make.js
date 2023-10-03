
/*

DELETE AFTER READING 

Things I did: 

1. replaced the main with document; This fixed the spawning issue
2. made the post div append to main instead 
3. added ID to main div so it could be appended. If you want to add a similar 
   id just copy the line and make slight changes 
4. appended the date and caption because you didn't append them 

that's about it you can delete it now. Ask me questions if you have them 

*/


window.onload = function(){ //runs onload

    let counter = 0; //counts the number of rows
    var v1_d = []; //array for column 1 "variable1" data
    var v2_d = []; //array for column 2 "variable2" data
    var v3_d = [];
    var v4_d = [];

    for (let i = 0; i < log.length; i++){
        counter++; //counts the number of rows 
        //console.log(log[i]); --> for debugging
        v1_d.push(log[i].img); //adds items to array with the name "Variable 1"
        v2_d.push(log[i].date);  //adds items to array with the name "Variable 2"
        v3_d.push(log[i].caption); 
        v4_d.push(log[i].alt)
    } 
    
    v1_d.reverse();
    v2_d.reverse();
    v3_d.reverse();
    v4_d.reverse();

    var main = document.getElementById("gallery"); 
    for (let x = 0; x < counter; x++){

        var item = document.createElement("div");
        item.className = "gallery_item";
        main.append(item);

        var img = document.createElement("img");
        img.src = v1_d[x];
        img.setAttribute('onclick', "toggleModal('" + v1_d[x] + "')");
        img.setAttribute("loading", "lazy");
        img.setAttribute("alt", v4_d[x])
        item.appendChild(img);

        var tooltip = document.createElement("span");
        tooltip.className = "tooltip"
        tooltip.innerHTML = v2_d[x];
        item.appendChild(tooltip)
        

        

    }

}
