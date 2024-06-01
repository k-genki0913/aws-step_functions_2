exports.lambdaHandler = async (event, context) => {
  for (const user of event.result.items) {
    try {
      console.log(user);
      throw new Error();
    } catch (error) {
      console.log(error);
    }
  }
  return;
};
