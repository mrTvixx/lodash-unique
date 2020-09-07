const uniqBy = (array, identity) =>
  array.reduce((acc, item) => {
    const index = acc.findIndex(
      (accItem) => accItem[identity] === item[identity]
    );
    if (index < 0) acc.push(item);
    return acc;
  }, []);

const uniqByObject = (array, key) =>
  array.reduce((acc, item, index) => {
    acc[item[key]] = item;
    if (index === array.length - 1) return Object.values(acc);
    return acc;
  }, {});

const uniqByObject5 = (array, key) =>
  array.reduce(
    (acc, item) => {
      if (!acc.buf[item[key]]) {
        acc.buf[item[key]] = true;
        acc.result.push(item);
      }
      return acc;
    },
    { result: [], buf: {} }
  );

const uniqByObject6 = (array, key) => {
  const res = [];
  const hash = {};
  for (let i = 0; i < array.length; ++i) {
    const item = array[i];
    const value = item[key];
    if (hash[value] == null) {
      hash[value] = true;
      res.push(item);
    }
  }
  return res;
};

const uniqMap = (array, key) => {
  const map = new Map();
  array.forEach((item) => map.set(item[key], item));
  return map.entries();
};
