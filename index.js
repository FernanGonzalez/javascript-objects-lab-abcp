var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  recipes.key=value
  return recipes.assign({}, recipes, { [key]: value })
}