function generate() {
    ab = "<tr>";
    for (i = 2; i <= c.value; i++) {
        ab += "<td> " + i + " Times";
        ab += "<table>"
        for (j = 2; j <= r.value; j++) {
            result = j * i;
            ab += "<tr><td> " + i + " X " + j+"= " + result +
                "</tr></td>"
        }
        ab += "</table>";
    }
    ab += "</tr>";
    myTables.innerHTML = ab;

}
