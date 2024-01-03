var db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024);

function
 
createTable() {
  db.transaction(function (tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS Employee(id unique, Name, Salary)');
  });
}

function Insert() {
  var id = document.getElementById("tbID").value;
  var Name = document.getElementById("tbName").value;
  var Salary = document.getElementById("tbSalary").value;

  db.transaction(function (tx) {
    tx.executeSql('INSERT INTO Employee(id, Name, Salary) VALUES (?, ?, ?)', [id, Name, Salary]);
  });
}

function retrieveData() {
  db.transaction(function (tx) {
    tx.executeSql('SELECT * FROM Employee', [], function (tx, results) {
      var len = results.rows.length;
      var str = '';
      for (var i = 0; i < len; i++) {
        str += "<tr>";
        str += "<td>" + results.rows.item(i).id + "</td>";
        str += "<td>" + results.rows.item(i).Name + "</td>";
        str += "<td>" + results.rows.item(i).Salary + "</td>";
        str += "</tr>";
      }
      document.getElementById("tblGrid").innerHTML += str;
    }, null);
  });
}

createTable();
retrieveData();