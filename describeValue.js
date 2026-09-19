const describeValue = (value) => {
  let truthyOrFalsy;

  if (value) {
    truthyOrFalsy = "truthy";
  } else {
    truthyOrFalsy = "falsy";
  }

  const type = typeof value;

  return `${type} | ${truthyOrFalsy}`;
};