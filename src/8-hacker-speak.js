export const hackerSpeak = (words) => {
  const re = /a|e|i|o|s/gi
  return words.replace(re, (match) => {
    switch (match) {
      case "a":
      case "A":
        return 4
      case "e":
      case "E":
        return 3
      case "i":
      case "I":
        return 1
      case "o":
      case "O":
        return 0
      case "s":
      case "S":
        return 5
    }
  })
}
