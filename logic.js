function CreateTableFromJSON() {
    var ani= document.getElementById("ani").value;
    var uuid= document.getElementById("uuid").value;
    var tfn= document.getElementById("tfn").value;
    var date= document.getElementById("date").value;


    var myBooks = [
        {
            "ani":"1234567891",
            "uuid":"aaaa12345ghsks975648wggg666738475647383333",
            "tfn":"9876543235",
            "date":"2022-04-01",
            "audio":"call1.wav"
        },
        {
            "ani":"95038502384240",
            "uuid":"74298492uisjdow993203242420ibfwijdow3333545",
            "tfn":"9044882345",
            "date":"2022-02-12",
            "audio":"call1.wav"
        },
        {
            "ani":"0084853742874",
            "uuid":"492u928423020huiisysuw0284298402802vcj028432",
            "tfn":"8670453839",
            "date":"2021-12-28",
            "audio":"call1.wav"
        },
        {
            "ani":"8403940232732",
            "uuid":"dkjwiduu98392839283hdiwuduu8392839283232jjj",
            "tfn":"6758894563",
            "date":"2022-04-25",
            "audio":"call1.wav"
        }, {
            "ani":"74298302302220",
            "uuid":"ui83230234029320uuu93283028030203hhh832832",
            "tfn":"0838347382",
            "date":"2022-03-09",
            "audio":"call1.wav"
        }
    ];

    if(ani){
        myBooks=myBooks.filter( element => element.ani ===ani)
    }
   if(uuid){
    myBooks=myBooks.filter( element => element.uuid ===uuid)
   }
   if(tfn){
    myBooks=myBooks.filter( element => element.tfn ===tfn)
   }
   if(date){
    myBooks=myBooks.filter( element => element.date ===date)
   }

    // EXTRACT VALUE FOR HTML HEADER. 
    // ('Book ID', 'Book Name', 'Category' and 'Price')
    var col = [];
    for (var i = 0; i < myBooks.length; i++) {
        for (var key in myBooks[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    }

    // CREATE DYNAMIC TABLE.
    var table = document.createElement("table");
    table.setAttribute('id', 'calls-table');

    // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

    var tr = table.insertRow(-1);                   // TABLE ROW.

    for (var i = 0; i < col.length; i++) {
        var th = document.createElement("th");      // TABLE HEADER.
        th.innerHTML = col[i];
        tr.appendChild(th);
    }

    // ADD JSON DATA TO THE TABLE AS ROWS.
    for (var i = 0; i < myBooks.length; i++) {

        tr = table.insertRow(-1);

        for (var j = 0; j < col.length; j++) {
            var tabCell = tr.insertCell(-1);
            if( myBooks[i][col[j]].includes("wav")){
                tabCell.innerHTML  = '<audio id="audio-player" controls="controls" src="call1.wav" type="audio/wav">';
            }
            else{
                tabCell.innerHTML = myBooks[i][col[j]];
            }
           
        }
    }

    // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
    var divContainer = document.getElementById("table-container");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
}