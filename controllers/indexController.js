const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
    id: crypto.randomUUID(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
    id: crypto.randomUUID(),
  },
];

const getIndex = (req, res) => {
  res.render("index", { messages, title: "Mini Message Board" });
};

const getNewMessage = (req, res) => {
  res.render("form", { title: "New Message Form" });
};

const createNewMessage = (req, res) => {
  messages.push({
    text: req.body.message,
    user: req.body.username,
    added: new Date(),
    id: crypto.randomUUID(),
  });
  res.redirect("/");
};

const getMessageFromId = (req, res) => {
  const messageId = req.params.id;
  if (!messageId) throw new Error();
  const { user, text, added } = messages.find(
    (message) => message.id === messageId
  );
  res.render("message", { user, text, added, title: "Message Details" });
};

module.exports = {
  getIndex,
  getNewMessage,
  createNewMessage,
  getMessageFromId,
};
