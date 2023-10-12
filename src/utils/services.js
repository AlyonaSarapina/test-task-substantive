export const getInteractionsPercentage = (data) => {
  const obj = {};
  const length = data.length;
  const arr = [];

  data.forEach(item => {
    if (!obj.hasOwnProperty(item.name)) {
      obj[item.name] = 0;
    }
    obj[item.name] += 1;
  })

  for (const [key, value] of Object.entries(obj)) {
    const percent = ((value / length) * 100).toFixed(2);

    arr.push({ name: key, percentage: percent })
  }

  return arr;
}