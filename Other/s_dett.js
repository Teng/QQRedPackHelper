;
var encode_version = 'sojson.v5',
	woaew = '__0x6d4a2',
	__0x6d4a2 = ['w4TCkxtLwofCuBE=', 'YsKYwok/w5M=', 'DWwZJDPDksOi', 'wocjwrkSXQ==', 'XG5tw6Y2', 'OMOpSErDhw==', 'AA7DksO/w4gM', 'w5prw6vCrFI=', 'w7U3L8K1bQ==', 'Z8K5wrJIwrE=', 'L8OKZcKaGcOoTcOUwqIFYw==', 'YCPDs1bDrQPDvg==', 'dcOrVsOlwoA=', 'OcORb2nDtg==', 'FcKQdxtY', 'dsKSQz8V', 'McKZVzd2Xg==', 'VyEpUy4=', 'ASUlQC97HGdz', 'wqzDryzCjMKSWAE='];
(function(_0x57c88f, _0x2383d8) {
	var _0x4b2391 = function(_0x58c926) {
		while (--_0x58c926) {
			_0x57c88f['push'](_0x57c88f['shift']());
		}
	};
	_0x4b2391(++_0x2383d8);
}(__0x6d4a2, 0xad));
var _0x1691 = function(_0x3c08d1, _0xc096f) {
	_0x3c08d1 = _0x3c08d1 - 0x0;
	var _0x2babb8 = __0x6d4a2[_0x3c08d1];
	if (_0x1691['initialized'] === undefined) {
		(function() {
			var _0x2f1e69 = typeof window !== 'undefined' ? window : typeof process === 'object' && typeof require === 'function' && typeof global === 'object' ? global : this;
			var _0x4f603c = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
			_0x2f1e69['atob'] || (_0x2f1e69['atob'] = function(_0x2c68bb) {
				var _0x492998 = String(_0x2c68bb)['replace'](/=+$/, '');
				for (var _0x5ee61a = 0x0, _0x2ac634, _0x1d1013, _0x6f4d80 = 0x0, _0x4a006d = ''; _0x1d1013 = _0x492998['charAt'](_0x6f4d80++);~_0x1d1013 && (_0x2ac634 = _0x5ee61a % 0x4 ? _0x2ac634 * 0x40 + _0x1d1013 : _0x1d1013, _0x5ee61a++ % 0x4) ? _0x4a006d += String['fromCharCode'](0xff & _0x2ac634 >> (-0x2 * _0x5ee61a & 0x6)) : 0x0) {
					_0x1d1013 = _0x4f603c['indexOf'](_0x1d1013);
				}
				return _0x4a006d;
			});
		}());
		var _0xa0b1f0 = function(_0x2fa32b, _0x4608dc) {
			var _0x4f2019 = [],
				_0x4a28e8 = 0x0,
				_0x19767d, _0x4cf800 = '',
				_0x4bb512 = '';
			_0x2fa32b = atob(_0x2fa32b);
			for (var _0x36c759 = 0x0, _0x20d6ad = _0x2fa32b['length']; _0x36c759 < _0x20d6ad; _0x36c759++) {
				_0x4bb512 += '%' + ('00' + _0x2fa32b['charCodeAt'](_0x36c759)['toString'](0x10))['slice'](-0x2);
			}
			_0x2fa32b = decodeURIComponent(_0x4bb512);
			for (var _0x3ac32b = 0x0; _0x3ac32b < 0x100; _0x3ac32b++) {
				_0x4f2019[_0x3ac32b] = _0x3ac32b;
			}
			for (_0x3ac32b = 0x0; _0x3ac32b < 0x100; _0x3ac32b++) {
				_0x4a28e8 = (_0x4a28e8 + _0x4f2019[_0x3ac32b] + _0x4608dc['charCodeAt'](_0x3ac32b % _0x4608dc['length'])) % 0x100;
				_0x19767d = _0x4f2019[_0x3ac32b];
				_0x4f2019[_0x3ac32b] = _0x4f2019[_0x4a28e8];
				_0x4f2019[_0x4a28e8] = _0x19767d;
			}
			_0x3ac32b = 0x0;
			_0x4a28e8 = 0x0;
			for (var _0x3b73f2 = 0x0; _0x3b73f2 < _0x2fa32b['length']; _0x3b73f2++) {
				_0x3ac32b = (_0x3ac32b + 0x1) % 0x100;
				_0x4a28e8 = (_0x4a28e8 + _0x4f2019[_0x3ac32b]) % 0x100;
				_0x19767d = _0x4f2019[_0x3ac32b];
				_0x4f2019[_0x3ac32b] = _0x4f2019[_0x4a28e8];
				_0x4f2019[_0x4a28e8] = _0x19767d;
				_0x4cf800 += String['fromCharCode'](_0x2fa32b['charCodeAt'](_0x3b73f2) ^ _0x4f2019[(_0x4f2019[_0x3ac32b] + _0x4f2019[_0x4a28e8]) % 0x100]);
			}
			return _0x4cf800;
		};
		_0x1691['rc4'] = _0xa0b1f0;
		_0x1691['data'] = {};
		_0x1691['initialized'] = !! [];
	}
	var _0x4cce77 = _0x1691['data'][_0x3c08d1];
	if (_0x4cce77 === undefined) {
		if (_0x1691['once'] === undefined) {
			_0x1691['once'] = !! [];
		}
		_0x2babb8 = _0x1691['rc4'](_0x2babb8, _0xc096f);
		_0x1691['data'][_0x3c08d1] = _0x2babb8;
	} else {
		_0x2babb8 = _0x4cce77;
	}
	return _0x2babb8;
};
if ( !! []) {
	f = function(_0x1d75de) {
		var _0x37083b = {
			'QPnEZ': function _0x60d408(_0x47b907, _0x1e139b) {
				return _0x47b907 + _0x1e139b;
			},
			'GfOGG': function _0x3d3c72(_0x1f55be, _0x4a6029) {
				return _0x1f55be + _0x4a6029;
			},
			'HMzQD': '=([^;]*)(;|$)'
		};
		var _0x4d0811, _0x524d79 = new RegExp(_0x37083b[_0x1691('0x0', 'H$R$')](_0x37083b[_0x1691('0x1', '@5Y)')]('(^|\x20)', _0x1d75de), _0x37083b[_0x1691('0x2', '&6Xe')]));
		if (_0x4d0811 = document[_0x1691('0x3', '@5Y)')][_0x1691('0x4', 'wcel')](_0x524d79)) {
			return unescape(_0x4d0811[0x2]);
		} else {
			return null;
		}
	};
	f2 = function(_0x5059ad, _0x4d7bb0) {
		var _0x372740 = {
			'wGmSQ': function _0x495870(_0x1e22e5, _0x5a96b1) {
				return _0x1e22e5 + _0x5a96b1;
			},
			'zPYil': function _0x53f643(_0x30ccee, _0x194f17) {
				return _0x30ccee * _0x194f17;
			},
			'PhIfk': function _0x5a75c7(_0x5ebe8a, _0x59b8e9) {
				return _0x5ebe8a * _0x59b8e9;
			},
			'HidQG': function _0x579a67(_0x374d40, _0x1e0498) {
				return _0x374d40 + _0x1e0498;
			},
			'bUfLy': function _0xd9d4c3(_0x490eda, _0xb0910e) {
				return _0x490eda(_0xb0910e);
			},
			'DYZHd': _0x1691('0x5', 'wcel'),
			'cDGyM': _0x1691('0x6', 'mI%7')
		};
		var _0x2d5246 = 0x1e;
		var _0x11d22b = new Date();
		_0x11d22b[_0x1691('0x7', 'V55E')](_0x372740[_0x1691('0x8', 'cvmk')](_0x11d22b[_0x1691('0x9', '2v0z')](), _0x372740[_0x1691('0xa', ']ZR@')](_0x372740[_0x1691('0xb', 'hPNq')](_0x372740[_0x1691('0xc', 'H$R$')](_0x372740['PhIfk'](_0x2d5246, 0x18), 0x3c), 0x3c), 0x3e8)));
		document[_0x1691('0xd', 'h%Wr')] = _0x372740['HidQG'](_0x372740[_0x1691('0xe', ']o&s')](_0x372740[_0x1691('0xf', 'd%V$')](_0x5059ad, '='), _0x372740['bUfLy'](escape, _0x4d7bb0)), _0x372740[_0x1691('0x10', 'nG4r')]) + _0x11d22b[_0x1691('0x11', 'U8Zj')]() + _0x372740['cDGyM'];
	};
	try {
		ksub = f('k2')['slice'](-0x1);
		while ( !! []) {
			t2 = new Date()['getTime']();
			if (t2['toString']()['slice'](-0x3)[_0x1691('0x12', '9f@X')](ksub) >= 0x0) {
				f2('t2', t2);
				break;
			}
		}
	} catch (_0x5e3bb4) {}
};
if (!(typeof encode_version !== 'undefined' && encode_version === 'sojson.v5')) {
	window[_0x1691('0x13', 'EPWy')]('不能删除sojson.v5');
};
encode_version = 'sojson.v5';

function dettchk() {
	return true;
}
