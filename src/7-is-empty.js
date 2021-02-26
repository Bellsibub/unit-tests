export const isEmpty = (stringArrayOrObject) => {
  const type = typeof stringArrayOrObject

  switch (type) {
    case "string":
      return stringArrayOrObject === ""
    case "array":
      return stringArrayOrObject.length === 0
    case "object":
      return Object.keys(stringArrayOrObject).length === 0
    default:
      return false
  }
}
