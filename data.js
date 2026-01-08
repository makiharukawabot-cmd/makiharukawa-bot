module.exports = {
  saveData(users, groups) {
    fs.writeFileSync('./users.json', JSON.stringify(users, null, 2));
    fs.writeFileSync('./groups.json', JSON.stringify(groups, null, 2));
  },
  loadData() {
    let users = fs.existsSync('./users.json') ? JSON.parse(fs.readFileSync('./users.json', 'utf8')) : {};
    let groups = fs.existsSync('./groups.json') ? JSON.parse(fs.readFileSync('./groups.json', 'utf8')) : {};
    return { users, groups };
  }
};
