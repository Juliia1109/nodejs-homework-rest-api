const fs = require("fs").promises;
const path = require("path");
const shortid = require("shortid");
const { createHttpException } = require("../../helpers");

const contactsPath = path.join(__dirname, "./contacts.json");
const newContact = async (contacts) => {
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
};

async function listContacts() {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
}

async function getContactById(contactId) {
  const contacts = await listContacts();
  const contact = contacts.find((contact) => contact.id === contactId);
  if (!contact) {
    throw createHttpException(404, "The contact is not found");
  }
  return contact;
}

async function removeContact(contactId) {
  const contacts = await listContacts();
  const contactIndex = contacts.findIndex(
    (contact) => contact.id === contactId
  );
  if (contactIndex === -1) {
    throw createHttpException(404, "The contact is not found");
  }
  const [result] = contacts.splice(contactIndex, 1);
  await newContact(contacts);
  return result;
}

async function addContact({ name, email, phone }) {
  const contacts = await listContacts();
  const contact = {
    id: shortid.generate(),
    name,
    email,
    phone,
  };
  contacts.push(contact);
  await newContact(contacts);
  return contact;
}

async function updateContact(id, { name, email, phone }) {
  const contacts = await listContacts();
  const contactId = String(id);
  const index = contacts.findIndex((contact) => contact.id === contactId);
  if (index === -1) {
    throw createHttpException(404, "The contact is not found");
  }
  contacts[index] = { id, name, email, phone };
  await newContact(contacts);
  return contacts[index];
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
