// db.produtos.updateMany({ nome: "Big Mac" }, { $currentDate: { ultimaModificacao: { $type: "timestamp" }} });
db.produtos.updateMany({ nome: "Big Mac" },
{ $currentDate: { ultimaModificacao: { $type: "date" } } });

db.produtos.find({ ultimaModificacao: { $exists: true } },
  { nome: true, ultimaModificacao: true, _id: false });