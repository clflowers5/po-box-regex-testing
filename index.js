
// don't you dare screw with this
const regex = new RegExp([
  // post office box variants
  /^(!?(.*(post)[\s.-]*([o0]ffice)[\s.-]*(b[o0]x|bin)?.*))$/,
  // po box variants
  /^(!?(.*(p)[\s.-]*[o0][\s.-]*(b[o0]x|bin).*))$/,
].map(r => r.source).join('|'), 'i');

const tests = [
  'post office box',
  'post office box 12345',
  'post office box #12345',
  'abcdefg post office box #12345',
  'p.o.box',
  'p.o. box 1234',
  'p.o. box #1234',
  'p o box 12345',
  'p o box #12345',
  'POBOX12345',
  'PO b0x 1234',
  'post office bin',
  'post office bin 12345',
  'post office bin #12345',
  'post 0ffice 1234',
  'post 0ffice #12345',
  'P0 box 12345',
  'P0 box #12345',
];

// todo: I need to flip this, so that the true -> false and false -> true

console.log('\nshould be true');
tests.forEach(item => {
  const result = regex.test(item);
  console.log(`testing ${item}: ${result}`);
});

const allowedTests = [
  '123 Post Street',
  '#123 Post Street',
  '82 Box Avenue',
  '23 bin place',
  '123 po street',
];

console.log('\nshould be false');
allowedTests.forEach(item => {
  const result = regex.test(item);
  console.log(`testing ${item}: ${result}`);
});
