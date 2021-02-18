let str =
  '\n\n\t\t    AlIcE eT bOb EsSaYeNt De CoMmUnIqUeR sEcReTeMeNt, MaIs EvE vEiLlE  \n\n '

/*
str
  .trim()
  .toUpperCase()
  .split(' ')
  .forEach((elem) => console.log(`mot: ${elem}`))
*/


// New method :


str1 = str.trim().toUpperCase().split(` `)

for (let elem of str1)
  console.log(`mot : ${elem}`)

console.log(str1)
