const form = document.getElementById('employeeForm');
    const tableBody = document.querySelector('#employeeTable tbody');
    let employees = [];

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const position = document.getElementById('position').value.trim();
      const salary = document.getElementById('salary').value.trim();

      if (name && position && salary) {
        const employee = { name, position, salary };
        employees.push(employee);
        updateTable();
        form.reset();
      }
    });

    function updateTable() {
      tableBody.innerHTML = '';

      employees.forEach((emp, index) => {
        const row = document.createElement('tr');

        row.innerHTML = `
          <td>${emp.name}</td>
          <td>${emp.position}</td>
          <td>₹${emp.salary}</td>
          <td><button class="delete-btn" onclick="deleteEmployee(${index})">Delete</button></td>
        `;

        tableBody.appendChild(row);
      });
    }

    function deleteEmployee(index) {
      if (confirm('Are you sure you want to delete this employee?')) {
        employees.splice(index, 1);
        updateTable();
      }
    }