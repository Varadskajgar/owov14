const _0x329106 = _0x7a68;
(function (_0x19276e, _0x456eef) {
  const _0x48604d = _0x7a68,
    _0x3140c0 = _0x19276e();
  while (!![]) {
    try {
      const _0x31ce99 =
        (-parseInt(_0x48604d(0xc7)) / 0x1) *
          (-parseInt(_0x48604d(0xb7)) / 0x2) +
        parseInt(_0x48604d(0xcb)) / 0x3 +
        (parseInt(_0x48604d(0xaf)) / 0x4) * (parseInt(_0x48604d(0xb4)) / 0x5) +
        parseInt(_0x48604d(0xbf)) / 0x6 +
        -parseInt(_0x48604d(0xc6)) / 0x7 +
        -parseInt(_0x48604d(0xc1)) / 0x8 +
        -parseInt(_0x48604d(0xae)) / 0x9;
      if (_0x31ce99 === _0x456eef) break;
      else _0x3140c0['push'](_0x3140c0['shift']());
    } catch (_0x47fddf) {
      _0x3140c0['push'](_0x3140c0['shift']());
    }
  }
})(_0x1870, 0x53592);
function _0x7a68(_0x3ded78, _0xd09111) {
  const _0x187061 = _0x1870();
  return (
    (_0x7a68 = function (_0x7a6831, _0x3718d0) {
      _0x7a6831 = _0x7a6831 - 0xab;
      let _0x1071fc = _0x187061[_0x7a6831];
      return _0x1071fc;
    }),
    _0x7a68(_0x3ded78, _0xd09111)
  );
}
function _0x1870() {
  const _0x45206d = [
    'commands',
    '../../config.json',
    'shift',
    '4446260qGuiAN',
    '206146AjDebb',
    'ownerOnly',
    'content',
    'aliases',
    '767628NVvfjD',
    'length',
    'toLowerCase',
    'fetchMember',
    'includes',
    '3987612nsLPeb',
    '163588eIBwOx',
    'bot',
    'type',
    'member',
    'ownerID',
    '80AhHKEJ',
    '../../index.js',
    'run',
    '2fpVqpJ',
    'get',
    'author',
    ']\x20Tried\x20using\x20the\x20commands!',
    'trim',
    'log',
    'tag',
    'prefix',
    '3121110CxnIWY',
    'guild',
    '1735336euQEpF',
    'slice',
  ];
  _0x1870 = function () {
    return _0x45206d;
  };
  return _0x1870();
}
const client = require(_0x329106(0xb5)),
  config = require(_0x329106(0xc4)),
  { QuickDB } = require('quick.db'),
  db = new QuickDB();
client['on']('messageCreate', async (_0x28f075) => {
  const _0x433b8f = _0x329106;
  if (_0x28f075['channel'][_0x433b8f(0xb1)] !== 0x0) return;
  if (_0x28f075[_0x433b8f(0xb9)][_0x433b8f(0xb0)]) return;
  if (
    !_0x28f075[_0x433b8f(0xc9)]
      [_0x433b8f(0xab)]()
      ['startsWith'](config[_0x433b8f(0xbe)])
  )
    return;
  if (!_0x28f075['guild']) return;
  if (!_0x28f075[_0x433b8f(0xb2)])
    _0x28f075[_0x433b8f(0xb2)] = await _0x28f075[_0x433b8f(0xc0)][
      _0x433b8f(0xac)
    ](_0x28f075);
  const _0x5d207b = _0x28f075[_0x433b8f(0xc9)]
      [_0x433b8f(0xc2)](config['prefix'][_0x433b8f(0xcc)])
      [_0x433b8f(0xbb)]()
      ['split'](/ +/g),
    _0x5f4411 = _0x5d207b[_0x433b8f(0xc5)]()[_0x433b8f(0xab)]();
  if (_0x5f4411[_0x433b8f(0xcc)] == 0x0) return;
  let _0x1b1149 = client[_0x433b8f(0xc3)][_0x433b8f(0xb8)](_0x5f4411);
  if (!_0x1b1149)
    _0x1b1149 = client['commands'][_0x433b8f(0xb8)](
      client[_0x433b8f(0xca)][_0x433b8f(0xb8)](_0x5f4411)
    );
  if (_0x1b1149) {
    if (_0x1b1149[_0x433b8f(0xc8)]) {
      if (
        !config[_0x433b8f(0xb3)][_0x433b8f(0xad)](
          _0x28f075[_0x433b8f(0xb2)]['id']
        )
      )
        return console[_0x433b8f(0xbc)](
          _0x28f075[_0x433b8f(0xb9)][_0x433b8f(0xbd)] +
            '/[' +
            _0x28f075[_0x433b8f(0xb9)]['id'] +
            _0x433b8f(0xba)
        );
    }
  }
  if (_0x1b1149) _0x1b1149[_0x433b8f(0xb6)](client, _0x28f075, _0x5d207b, db);
});
