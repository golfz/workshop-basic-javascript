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

console.log("peopleSalary : ")
console.log(peopleSalary)

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

console.log('วนลูป get ค่า key จาก JSON peopleSalary :')
for (let i = 0; i < peopleSalary.length; i++) {
  console.log("index : " + i)
  for (const key in peopleSalary[i]) {
    console.log(key)
  }
}

console.log("newPeopleSalaryWithoutCompany : ")
console.log(newPeopleSalaryWithoutCompany)
