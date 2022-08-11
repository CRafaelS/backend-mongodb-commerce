db.produtos.find({ $and: [{ vendidos: { $lt: 100 } }, { vendidos: { $gt: 50 } }] },
  { nome: true, vendidos: true, _id: false }).sort({ vendidos: 1 });