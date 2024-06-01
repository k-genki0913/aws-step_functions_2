exports.lambdaHandler = async (event, context) => {
  const items = [];

  for (let i = 1; i < 6; i++) {
    const param = { userId: `test-userId-${i}` };
    items.push(param);
  }
  console.log(items);
  return { items: items };
};
