const helpers = {
  getValue2: function getValue(array, key) {
    let res = []
    for (let i = 0; i < array.length; i++) {
      res.push(array[i][key])
    }
    return res
  },
  mapArray: function mapArray(array, key) {
    let result = {}
    for (let i = 0; i < array.length; i++) {
      result[array[i][key]] = array[i]
    }
    return result
  },
}

export const getValue = helpers.getValue2
export const mapArray = helpers.mapArray
