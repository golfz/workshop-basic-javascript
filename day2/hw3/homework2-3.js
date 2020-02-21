function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

async function homework2_3() {
  const response = await fetch('homework1-4.json')
  const people = await response.json()

  console.log('people :')
  console.log(people)

  const manyFriendsMen = people.filter(person => {
    return (person.gender === "male" && person.friends.length >= 2)
  })
    .map(person => {
      return {
        name: person.name,
        gender: person.gender,
        friends: person.friends,
        balance: person.balance,
        company: person.company,
        email: person.email,
      }
    })

  console.log('manyFriendsMen :')
  console.log(manyFriendsMen)

  const poorMen = manyFriendsMen.map(person => {
    let newBalance = parseFloat(person.balance.replace('$', '').replace(',', '')) / 10
    return { ...person, balance: `$${formatNumber(newBalance)}` }
  })

  console.log('poorMen :')
  console.log(poorMen)
}

homework2_3()