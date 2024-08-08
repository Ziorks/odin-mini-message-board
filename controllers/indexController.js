const db = require("../db/queries");
// const messages = [
//   {
//     text: "Hi there!",
//     user: "Amando",
//     added: new Date(),
//     id: crypto.randomUUID(),
//   },
//   {
//     text: "Hello World!",
//     user: "Charles",
//     added: new Date(),
//     id: crypto.randomUUID(),
//   },
// ];

const getIndex = async (req, res) => {
  const messages = await db.getAllMessages();
  res.render("index", { messages, title: "Mini Message Board" });
};

const getNewMessage = (req, res) => {
  res.render("form", { title: "New Message Form" });
};

const createNewMessage = async (req, res) => {
  const { message, username } = req.body;
  await db.insertMessage(message, username, new Date());
  res.redirect("/");
};

const getMessageFromId = async (req, res) => {
  const messageId = req.params.id;
  if (!messageId) throw new Error();
  const message = await db.getMessageFromId(messageId);
  res.render("message", { message, title: "Message Details" });
};

module.exports = {
  getIndex,
  getNewMessage,
  createNewMessage,
  getMessageFromId,
};
