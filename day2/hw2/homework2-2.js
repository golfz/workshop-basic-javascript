async function homework2() {
  const response = await fetch('../../day1/hw1/homework1.json')
  let peopleSalary = await response.json()

  console.log('peopleSalary :')
  console.log(peopleSalary)

  let peopleLowSalary = peopleSalary
    .filter(x => x.salary < 100000)
    .map(x => {
      let a = {...x}
      a.salary = a.salary*2
      return a
    })

  console.log('peopleLowSalary :')
  console.log(peopleLowSalary)

  const previousSumSalary = peopleSalary.reduce((sum, person) => sum+person.salary, 0)
  const increasedSumSalary = peopleLowSalary.reduce((sum, person) => sum+person.salary, 0)/2
  const sumSalary = previousSumSalary + increasedSumSalary

  console.log('sumSalary :')
  console.log(sumSalary)
}

homework2()