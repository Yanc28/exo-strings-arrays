
let str = '\n\n\t\t    AlIcE eT bOb EsSaYeNt De CoMmUnIqUeR sEcReTeMeNt, MaIs EvE vEiLlE  \n\n '

str = str.trim()
str = str.toLowerCase()

console.log(str)

if (str.includes(`bob`)) {
  console.log(`bob exists`)
} else {
  console.log(`bob n\'est pas là`)
}



