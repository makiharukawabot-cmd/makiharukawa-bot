const fs = require('fs');
const path = require('path');

const USERS_FILE = path.resolve('./users.json');
const GROUPS_FILE = path.resolve('./groups.json');

function saveData(users, groups) {
  try {
    fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
    fs.writeFileSync(GROUPS_FILE, JSON.stringify(groups, null, 2));
  } catch (err) {
    console.warn('saveData error:', err.message);
  }
}

function loadData() {
  try {
    const users = fs.existsSync(USERS_FILE) ? JSON.parse(fs.readFileSync(USERS_FILE, 'utf8')) : {};
    const groups = fs.existsSync(GROUPS_FILE) ? JSON.parse(fs.readFileSync(GROUPS_FILE, 'utf8')) : {};
    return { users, groups };
  } catch (err) {
    console.warn('loadData error:', err.message);
    return { users: {}, groups: {} };
  }
}

module.exports = {
  saveData,
  loadData
};