const fs = require("fs");
function get(db) {
  if (!db)
    throw new Error(
      "You need to specify a database do get, if you need help go to discord.gg/AxcQf5Pf58"
    );
  const file = fs.readFileSync("./snowbase.json", "utf8");
  const parsed = JSON.parse(file);
  return parsed[db];
}
function save(get, set) {
  if (!get)
    throw new Error(
      `You need to specify a database to get, if you need help go to discord.gg/AxcQf5Pf58`
    );
  if (!set)
    throw new Error(
      `You need to specify a value to set, if you need help go to discord.gg/AxcQf5Pf58`
    );
  let go = fs.readFileSync("./snowbase.json", "utf8");
  let parsed = JSON.parse(go);
  parsed[get] = set;
  const resultado = JSON.stringify(parsed);
  fs.writeFileSync("./snowbase.json", resultado);
  return true;
}
function remove(string) {
  if (!string)
    throw new Error(
      "You need to specify a database to delete, if you need help go to discord.gg/AxcQf5Pf58"
    );
  let go = fs.readFileSync("./snowbase.json", "utf8");
  let raw = JSON.parse(go);
  delete raw[string];
  let resultado = JSON.stringify(raw);
  fs.writeFileSync("./snowbase.json", resultado);
  return true;
}
module.exports.get = get;
module.exports.save = save;
module.exports.remove = remove;
