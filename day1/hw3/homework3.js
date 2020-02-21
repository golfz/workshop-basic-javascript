let peopleSalary = [
  {
    "id": 1001,
    "firstname": "Luke",
    "lastname": "Skywalker",
    "company": "Walt Disney",
    "salary": 40000
  },
  {
    "id": 1002,
    "firstname": "Tony",
    "lastname": "Stark",
    "company": "Marvel",
    "salary": 1000000
  },
  {
    "id": 1003,
    "firstname": "Somchai",
    "lastname": "Jaidee",
    "company": "Love2work",
    "salary": 20000
  },
  {
    "id": 1004,
    "firstname": "Monkey D",
    "lastname": "Luffee",
    "company": "One Piece",
    "salary": 9000000
  }
]

let newPeopleSalaryWithoutCompany = []

for (let i = 0; i < peopleSalary.length; i++) {
  const obj = {
    id: peopleSalary[i].id,
    firstname: peopleSalary[i].firstname,
    lastname: peopleSalary[i].lastname,
    salary: peopleSalary[i].salary,
  }
  newPeopleSalaryWithoutCompany[i] = obj
}

for (let i = 0; i < newPeopleSalaryWithoutCompany.length; i++) {
  const basedSalary = newPeopleSalaryWithoutCompany[i].salary
  const salary3years = []
  for (let j = 0; j < 3; j++) {
    salary3years[j] = Math.floor(basedSalary * Math.pow(1.1, j))
  }
  newPeopleSalaryWithoutCompany[i].salary = salary3years
}

console.log("newPeopleSalaryWithoutCompany : ")
console.log(newPeopleSalaryWithoutCompany)