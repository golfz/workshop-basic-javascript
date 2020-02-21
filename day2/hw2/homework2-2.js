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
}

homework2()