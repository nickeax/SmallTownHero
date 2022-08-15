export class NameFactory {
  constructor() {
    this.vowelCombos = [
      'ee',
      'eo',
      'oo',
      'eoe',
      'ou',
      'oa',
      'ae',
      'ia',
      'io',
      'ie',
      'a',
      'e',
      'i',
      'o',
      'u'

    ]
    this.consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z']
    this.MAX_FIRSTNAME = 15
    this.MAX_LASTNAME = 20
  }

  GetName = _ => {
    let fName = ''
    let lName = ''
    let fullName = ''

    fName += this.RandomConsonant().toUpperCase()
    if (this.GetVowel()) fName += this.RandomConsonant()

    lName += this.RandomConsonant().toUpperCase()
    fName += this.RandomVowels()
    fName += this.RandomConsonant()
    if (this.GetVowel()) fName += this.RandomConsonant()
    lName += this.RandomVowels()
    lName += this.RandomConsonant()

    return `${fName} ${lName}`;
  }

  RandomConsonant = _ => {
    return this.consonants[Math.floor(Math.random() * this.consonants.length)]
  }

  RandomVowels = _ => {
    return this.vowelCombos[Math.floor(Math.random() * this.vowelCombos.length)]
  }

  NameLength = len => {
    return Math.floor(Math.random() * len)
  }

  GetVowel = _ => {
    return Math.floor(Math.random() * 2) % 2 === 1 ? true : false
  }
}