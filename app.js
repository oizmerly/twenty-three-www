'use strict';const a0_0x182027=a0_0x492d;(function(_0x19f821,_0x5e1fd8){const _0x5a843c=a0_0x492d,_0x521cd6=_0x19f821();while(!![]){try{const _0xff11b7=-parseInt(_0x5a843c(0x10a))/0x1*(-parseInt(_0x5a843c(0x132))/0x2)+parseInt(_0x5a843c(0x164))/0x3+parseInt(_0x5a843c(0x170))/0x4*(parseInt(_0x5a843c(0x108))/0x5)+parseInt(_0x5a843c(0x11d))/0x6*(-parseInt(_0x5a843c(0x166))/0x7)+-parseInt(_0x5a843c(0x157))/0x8*(-parseInt(_0x5a843c(0x162))/0x9)+-parseInt(_0x5a843c(0x13b))/0xa*(-parseInt(_0x5a843c(0x127))/0xb)+-parseInt(_0x5a843c(0x15c))/0xc;if(_0xff11b7===_0x5e1fd8)break;else _0x521cd6['push'](_0x521cd6['shift']());}catch(_0x363b5e){_0x521cd6['push'](_0x521cd6['shift']());}}}(a0_0x55b2,0x24783));var List=Phaser[a0_0x182027(0x14e)][a0_0x182027(0x144)];class BoardScene extends Phaser[a0_0x182027(0x131)]{constructor(){const _0x5538d7=a0_0x182027;super(_0x5538d7(0x155)),this[_0x5538d7(0x111)]=new Array();}['preload'](){const _0x27ab86=a0_0x182027;Resource['load'](this,[Resource[_0x27ab86(0x14f)]['Background'],Resource[_0x27ab86(0x14f)]['Tile'],Resource[_0x27ab86(0x14f)]['Ball'],Resource[_0x27ab86(0x14f)]['WatchCase'],Resource[_0x27ab86(0x14f)]['WatchGlass'],Resource['Image'][_0x27ab86(0x151)],Resource[_0x27ab86(0x14f)][_0x27ab86(0x13a)],Resource[_0x27ab86(0x152)][_0x27ab86(0x159)],Resource[_0x27ab86(0x152)][_0x27ab86(0x143)],Resource[_0x27ab86(0x152)][_0x27ab86(0x142)]]);}[a0_0x182027(0x179)](){const _0x45170f=a0_0x182027;this[_0x45170f(0x133)][_0x45170f(0x10d)](0x0,0x0,Resource[_0x45170f(0x14f)][_0x45170f(0x156)])[_0x45170f(0x114)](0x0,0x0)[_0x45170f(0x14a)](Layout[_0x45170f(0x161)][_0x45170f(0xfe)],Layout['screen'][_0x45170f(0x10c)])[_0x45170f(0xf7)](0x0),this[_0x45170f(0x15e)](),this['add']['container'](0x0,0x0,new Watch(this)),this[_0x45170f(0x111)]=[];for(let _0x1ff9c5=0x0;_0x1ff9c5<Layout['game']['rows'];_0x1ff9c5++)for(let _0x1b16e4=0x0;_0x1b16e4<Layout[_0x45170f(0x129)]['columns'];_0x1b16e4++){if(_0x1b16e4==0x2&&_0x1ff9c5==0x2)continue;let _0x39e5ec=new Tile(this);this[_0x45170f(0x133)][_0x45170f(0x148)](0x0,0x0,_0x39e5ec),_0x39e5ec[_0x45170f(0x181)](_0x1b16e4,_0x1ff9c5),this['tiles'][_0x45170f(0x139)](_0x39e5ec);}this[_0x45170f(0x173)][_0x45170f(0x105)]=Layout[_0x45170f(0x107)]['size'][_0x45170f(0xfe)]/0x64,this['input']['on']('drag',(_0x424262,_0x190b11,_0x4f4231,_0x143772)=>{const _0x50bb9b=_0x45170f;this[_0x50bb9b(0x10f)](_0x190b11,_0x4f4231,_0x143772);})['on'](_0x45170f(0x15d),()=>{const _0xf25222=_0x45170f;Log[_0xf25222(0x17d)]('dragstart');})['on'](_0x45170f(0x100),(_0x18f4c9,_0x59a79c)=>{const _0x12b821=_0x45170f;Log[_0x12b821(0x17d)](_0x12b821(0x100)),this[_0x12b821(0x118)]();});}['drag'](_0x155b27,_0x576bb1,_0xd53fc1){const _0x4556b4=a0_0x182027,_0x4cebc9=Tile['placeFromPosition'](_0x576bb1,_0xd53fc1),_0x27e441=_0x155b27[_0x4556b4(0xfe)]/0x3;if(Math[_0x4556b4(0x12e)](_0x4cebc9['dx'])>Math[_0x4556b4(0x12e)](_0x4cebc9['dy'])){_0x4cebc9['dy']=0x0;if(Math[_0x4556b4(0x12e)](_0x4cebc9['dx'])>_0x27e441)_0x4cebc9['dx']=Math[_0x4556b4(0x168)](_0x4cebc9['dx'])*_0x27e441;}else{_0x4cebc9['dx']=0x0;if(Math[_0x4556b4(0x12e)](_0x4cebc9['dy'])>_0x27e441)_0x4cebc9['dy']=Math[_0x4556b4(0x168)](_0x4cebc9['dy'])*_0x27e441;}this[_0x4556b4(0x177)](_0x155b27,_0x4cebc9);}[a0_0x182027(0x177)](_0x19e2d6,_0x55182a){const _0x193f81=a0_0x182027;let _0x4dac43=_0x55182a;for(const _0x528e91 of this['tiles']){if(_0x528e91==_0x19e2d6)continue;const _0x2d8f36=_0x528e91[_0x193f81(0x112)];if(_0x55182a['dy']==0x0){if(_0x55182a['y']!=_0x2d8f36['y'])continue;const _0x59b459=Math[_0x193f81(0x168)](_0x55182a['dx']);if(_0x55182a['x']+_0x59b459!=_0x2d8f36['x'])continue;const _0x3c9e10=_0x59b459+_0x55182a['x']+_0x55182a['dx']-(_0x2d8f36['x']+_0x2d8f36['dx']);_0x55182a['dx']-=_0x3c9e10;}else{if(_0x55182a['x']!=_0x2d8f36['x'])continue;const _0x50c4fb=Math[_0x193f81(0x168)](_0x55182a['dy']);if(_0x55182a['y']+_0x50c4fb!=_0x2d8f36['y'])continue;const _0x1b59be=_0x50c4fb+_0x55182a['y']+_0x55182a['dy']-(_0x2d8f36['y']+_0x2d8f36['dy']);_0x55182a['dy']-=_0x1b59be;}}return _0x4dac43&&(_0x19e2d6['place']=_0x55182a),{'dx':0x0,'dy':0x0};}[a0_0x182027(0x118)](){const _0x4ed0de=a0_0x182027;for(const _0x5df910 of this[_0x4ed0de(0x111)]){_0x5df910['moveToCenter']();}}[a0_0x182027(0x15e)](){const _0x19e82d=a0_0x182027;this[_0x19e82d(0x133)]['text'](0xa,0xa,'🛠',{'fontSize':'10em'})[_0x19e82d(0xf4)]()['on'](_0x19e82d(0x184),()=>{const _0x78012e=_0x19e82d;Layout[_0x78012e(0x175)](Layout['Size']['Small']),this[_0x78012e(0xfb)][_0x78012e(0x128)](_0x78012e(0x138));});}}var Layout;(function(_0x24e125){const _0xa6ac83=a0_0x182027;_0x24e125['screen']={'width':0x3e8,'height':0x7d0},_0x24e125[_0xa6ac83(0x155)]={'position':{'x':0xf,'y':0x190},'size':{'width':0x0,'height':0x0}},_0x24e125[_0xa6ac83(0x107)]={'size':{'width':0x0,'height':0x0}},_0x24e125['watch']={'position':{'x':0x2f8,'y':0xe1},'size':{'width':0x1a9,'height':0x1a9},'buttonShift':0xc};let _0x4cbe98;(function(_0x396932){const _0x5271d9=_0xa6ac83;_0x396932[_0x396932[_0x5271d9(0x16a)]=0x0]=_0x5271d9(0x16a),_0x396932[_0x396932[_0x5271d9(0x149)]=0x1]=_0x5271d9(0x149),_0x396932[_0x396932[_0x5271d9(0x153)]=0x2]=_0x5271d9(0x153);}(_0x4cbe98=_0x24e125['Size']||(_0x24e125[_0xa6ac83(0xf5)]={})));let _0x1c8e20=_0x4cbe98[_0xa6ac83(0x16a)];function _0xd4f828(_0xeeec4){const _0x699935=_0xa6ac83;_0x1c8e20=_0xeeec4,_0x24e125[_0x699935(0x129)]=_0x34370c[_0x699935(0x17f)](_0x1c8e20),_0x24e125['board']['size'][_0x699935(0xfe)]=_0x24e125[_0x699935(0x161)]['width']-_0x24e125[_0x699935(0x155)][_0x699935(0x169)]['x']*0x2,_0x24e125['board'][_0x699935(0x14b)][_0x699935(0x10c)]=_0x24e125['board'][_0x699935(0x14b)][_0x699935(0xfe)]*_0x24e125[_0x699935(0x129)][_0x699935(0x16c)]/_0x24e125[_0x699935(0x129)][_0x699935(0x14c)],_0x24e125[_0x699935(0x107)][_0x699935(0x14b)][_0x699935(0xfe)]=_0x24e125['board']['size'][_0x699935(0xfe)]/_0x24e125[_0x699935(0x129)]['columns'],_0x24e125['tile'][_0x699935(0x14b)]['height']=_0x24e125[_0x699935(0x155)][_0x699935(0x14b)][_0x699935(0x10c)]/_0x24e125[_0x699935(0x129)][_0x699935(0x16c)],Log['info'](_0x699935(0x109),_0x24e125[_0x699935(0x155)],',\x20tile:',_0x24e125[_0x699935(0x107)]);}_0x24e125[_0xa6ac83(0x175)]=_0xd4f828;class _0x49a393{constructor(_0x3df404,_0xe3775a){const _0x5d94af=_0xa6ac83;this[_0x5d94af(0x14c)]=_0x3df404,this['rows']=_0xe3775a;}}_0x24e125[_0xa6ac83(0x12f)]=_0x49a393;const _0x34370c=new Map([[_0x24e125['Size']['Small'],new _0x24e125[(_0xa6ac83(0x12f))](0x4,0x6)],[_0x24e125['Size']['Medium'],new _0x24e125[(_0xa6ac83(0x12f))](0x5,0x7)],[_0x24e125[_0xa6ac83(0xf5)]['Large'],new _0x24e125[(_0xa6ac83(0x12f))](0x6,0x9)]]);}(Layout||(Layout={})));class Tile extends Phaser[a0_0x182027(0x101)][a0_0x182027(0x137)]{constructor(_0x483295){const _0x144a2d=a0_0x182027;super(_0x483295);const _0x4b8dee=Layout['tile'][_0x144a2d(0x14b)];this[_0x144a2d(0x175)](_0x4b8dee[_0x144a2d(0xfe)],_0x4b8dee['height']),this[_0x144a2d(0x12d)](Resource[_0x144a2d(0x14f)]['Tile'],0x1),Math[_0x144a2d(0x16e)]()<0.2&&this[_0x144a2d(0x12d)](Resource[_0x144a2d(0x14f)][_0x144a2d(0x154)],0x2),this[_0x144a2d(0xf4)]({'draggable':!![]});}get[a0_0x182027(0x112)](){const _0x17a42c=a0_0x182027;return Tile[_0x17a42c(0x135)](this['x'],this['y']);}set[a0_0x182027(0x112)](_0x2c3225){const _0x3b739f=a0_0x182027,_0x2037cb=Tile[_0x3b739f(0x12b)](_0x2c3225);this[_0x3b739f(0x180)](_0x2037cb['x'],_0x2037cb['y']);}[a0_0x182027(0x181)](_0x59e6f9,_0x4e3c69){const _0xb5ffb8=a0_0x182027;this[_0xb5ffb8(0x112)]={'x':_0x59e6f9,'y':_0x4e3c69,'dx':0x0,'dy':0x0};}['moveToCenter'](){const _0x55c1e5=a0_0x182027,_0x1ae3be=this[_0x55c1e5(0x112)];if(_0x1ae3be['dx']==0x0&&_0x1ae3be['dy']==0x0)return;const _0x41f96b=Tile['positionFromPlace']({'x':Math[_0x55c1e5(0x176)](_0x1ae3be['x']+_0x1ae3be['dx']),'y':Math[_0x55c1e5(0x176)](_0x1ae3be['y']+_0x1ae3be['dy']),'dx':0x0,'dy':0x0});this[_0x55c1e5(0xfb)][_0x55c1e5(0x174)][_0x55c1e5(0x133)]({'targets':this,'x':_0x41f96b['x'],'y':_0x41f96b['y'],'duration':0x14});}[a0_0x182027(0x12d)](_0x4aeff0,_0x5c009e){const _0x4b3685=a0_0x182027;let _0x4f71d9=new Phaser['GameObjects']['Image'](this[_0x4b3685(0xfb)],0x0,0x0,_0x4aeff0);return _0x4f71d9[_0x4b3685(0x14a)](this[_0x4b3685(0xfe)],this[_0x4b3685(0x10c)]),_0x4f71d9[_0x4b3685(0xf7)](_0x5c009e),this[_0x4b3685(0x133)](_0x4f71d9),_0x4f71d9;}}(function(_0x42fbc8){const _0x1b571f=a0_0x182027;function _0x476f92(_0x7fe7e6,_0xedb320){const _0x44f1a8=a0_0x492d;_0x7fe7e6=(_0x7fe7e6-Layout['board'][_0x44f1a8(0x169)]['x']-Layout[_0x44f1a8(0x107)]['size'][_0x44f1a8(0xfe)]/0x2)/Layout['tile']['size'][_0x44f1a8(0xfe)],_0xedb320=(_0xedb320-Layout[_0x44f1a8(0x155)][_0x44f1a8(0x169)]['y']-Layout[_0x44f1a8(0x107)]['size'][_0x44f1a8(0x10c)]/0x2)/Layout['tile']['size'][_0x44f1a8(0x10c)];const _0x532436=Math[_0x44f1a8(0x176)](_0x7fe7e6),_0x323965=Math['round'](_0xedb320);return{'x':_0x532436,'y':_0x323965,'dx':_0x7fe7e6-_0x532436,'dy':_0xedb320-_0x323965};}_0x42fbc8[_0x1b571f(0x135)]=_0x476f92;function _0x2fbebd(_0x24cb63){const _0x166d1c=_0x1b571f;return{'x':Layout[_0x166d1c(0x155)][_0x166d1c(0x169)]['x']+Layout['tile'][_0x166d1c(0x14b)][_0x166d1c(0xfe)]/0x2+(_0x24cb63['x']+_0x24cb63['dx'])*Layout[_0x166d1c(0x107)][_0x166d1c(0x14b)][_0x166d1c(0xfe)],'y':Layout['board'][_0x166d1c(0x169)]['y']+Layout[_0x166d1c(0x107)][_0x166d1c(0x14b)]['height']/0x2+(_0x24cb63['y']+_0x24cb63['dy'])*Layout[_0x166d1c(0x107)][_0x166d1c(0x14b)][_0x166d1c(0x10c)]};}_0x42fbc8[_0x1b571f(0x12b)]=_0x2fbebd;}(Tile||(Tile={})));class Watch extends Phaser[a0_0x182027(0x101)][a0_0x182027(0x137)]{constructor(_0x28c6c7){const _0x24b2ed=a0_0x182027;super(_0x28c6c7),this[_0x24b2ed(0x175)](Layout[_0x24b2ed(0x124)][_0x24b2ed(0x14b)]['width'],Layout[_0x24b2ed(0x124)]['size'][_0x24b2ed(0x10c)]),this[_0x24b2ed(0x180)](Layout[_0x24b2ed(0x124)][_0x24b2ed(0x169)]['x'],Layout['watch'][_0x24b2ed(0x169)]['y']);let _0x31408d=new Phaser[(_0x24b2ed(0x101))][(_0x24b2ed(0x14f))](this[_0x24b2ed(0xfb)],0x0,0x0,Resource[_0x24b2ed(0x14f)][_0x24b2ed(0x16d)]);_0x31408d['setDisplaySize'](this['width'],this[_0x24b2ed(0x10c)]),this[_0x24b2ed(0x133)](_0x31408d),this['hand']=new Phaser[(_0x24b2ed(0x101))]['Image'](this[_0x24b2ed(0xfb)],0x0,0x0,Resource['Image'][_0x24b2ed(0x151)]),this[_0x24b2ed(0x158)][_0x24b2ed(0x175)](this['width'],this[_0x24b2ed(0x10c)]),this[_0x24b2ed(0x158)]['setScale'](0.59),this[_0x24b2ed(0x133)](this[_0x24b2ed(0x158)]);let _0x2e17f9=new Phaser[(_0x24b2ed(0x101))][(_0x24b2ed(0x14f))](this[_0x24b2ed(0xfb)],0x0,0x0,Resource['Image']['WatchGlass']);_0x2e17f9[_0x24b2ed(0x14a)](this[_0x24b2ed(0xfe)],this[_0x24b2ed(0x10c)]),_0x2e17f9['angle']=-0x46,this[_0x24b2ed(0x133)](_0x2e17f9),this[_0x24b2ed(0x146)]=new Phaser['GameObjects'][(_0x24b2ed(0x14f))](this[_0x24b2ed(0xfb)],0x0,0x0,Resource[_0x24b2ed(0x14f)][_0x24b2ed(0x13a)]),this[_0x24b2ed(0x146)][_0x24b2ed(0x14a)](this[_0x24b2ed(0xfe)],this[_0x24b2ed(0x10c)]),this[_0x24b2ed(0x133)](this[_0x24b2ed(0x146)]),this[_0x24b2ed(0x122)]=this[_0x24b2ed(0xfb)]['sound'][_0x24b2ed(0x133)](Resource[_0x24b2ed(0x152)][_0x24b2ed(0x143)]),this[_0x24b2ed(0xfa)]=this['scene'][_0x24b2ed(0x178)][_0x24b2ed(0x133)](Resource['Sound'][_0x24b2ed(0x142)]),this[_0x24b2ed(0x110)]();}[a0_0x182027(0x110)](){const _0x460e77=a0_0x182027;this['setInteractive']();let _0x3f571b=![];const _0x5289de=this[_0x460e77(0xfb)][_0x460e77(0x174)][_0x460e77(0x133)]({'targets':this[_0x460e77(0x158)],'angle':0x168,'duration':0x3a98,'repeat':-0x1}),_0x1a719c=()=>{const _0x27291f=_0x460e77;_0x3f571b=!![],this['soundButtonDown'][_0x27291f(0x15a)]();const _0x13628b=this['hand'][_0x27291f(0x136)]>=0x0?this[_0x27291f(0x158)][_0x27291f(0x136)]:0x168+this[_0x27291f(0x158)][_0x27291f(0x136)];this['scene']['tweens']['add']({'targets':this['button'],'y':Layout['watch']['buttonShift'],'duration':0x82}),this[_0x27291f(0xfb)][_0x27291f(0x174)][_0x27291f(0x133)]({'targets':this[_0x27291f(0x158)],'angle':this['hand']['angle']>0x0?0x168:0x0,'duration':0xc8*(0x168-_0x13628b)/0x168}),_0x5289de[_0x27291f(0x125)]();},_0x1daec9=()=>{const _0x42750e=_0x460e77;_0x3f571b=![],this[_0x42750e(0xfa)][_0x42750e(0x15a)](),Log[_0x42750e(0x17d)]('watch\x20up'),this[_0x42750e(0xfb)][_0x42750e(0x174)][_0x42750e(0x133)]({'targets':this['button'],'y':0x0,'duration':0xd2}),_0x5289de[_0x42750e(0x17c)](),_0x5289de[_0x42750e(0x16f)]();};this['on'](_0x460e77(0x184),_0x1a719c),this['on'](_0x460e77(0x172),_0x1daec9),this['on']('pointerout',()=>{if(_0x3f571b)_0x1daec9();});}}var Log;(function(_0x22d8f8){const _0x1eb742=a0_0x182027,_0x25c9a8=!![],_0x744b82=(..._0x3d5d9f)=>{};_0x22d8f8[_0x1eb742(0xfd)]=_0x25c9a8?console['debug']:_0x744b82,_0x22d8f8[_0x1eb742(0x17d)]=_0x25c9a8?console[_0x1eb742(0x13f)]:_0x744b82,_0x22d8f8[_0x1eb742(0x163)]=_0x25c9a8?console[_0x1eb742(0x163)]:_0x744b82,_0x22d8f8['error']=_0x25c9a8?console[_0x1eb742(0xff)]:_0x744b82;}(Log||(Log={})));var game=Layout[a0_0x182027(0x129)];class LoadingScene extends Phaser['Scene']{constructor(){const _0x220e27=a0_0x182027;super(_0x220e27(0x12a));}[a0_0x182027(0x179)](){const _0xe2e75=a0_0x182027;this[_0xe2e75(0x133)][_0xe2e75(0x11a)](0x0,0x0,'Loading\x20...',{'fontFamily':_0xe2e75(0x11c),'fontSize':_0xe2e75(0x11b)}),this[_0xe2e75(0xfb)][_0xe2e75(0x128)]('board');}}function a0_0x492d(_0x4fcd0f,_0x5f22d6){const _0x55b226=a0_0x55b2();return a0_0x492d=function(_0x492d0d,_0x2204b0){_0x492d0d=_0x492d0d-0xf2;let _0xf2f7a0=_0x55b226[_0x492d0d];return _0xf2f7a0;},a0_0x492d(_0x4fcd0f,_0x5f22d6);}class DevConsoleScene extends Phaser['Scene']{constructor(){const _0x403c7d=a0_0x182027;super(_0x403c7d(0x138));}[a0_0x182027(0x13e)](){const _0x389913=a0_0x182027;this[_0x389913(0x130)][_0x389913(0x10d)](_0x389913(0x119),_0x389913(0x183));}[a0_0x182027(0x179)](){const _0x6b209e=a0_0x182027,_0x375571={'fontSize':_0x6b209e(0x104),'color':_0x6b209e(0x15b),'backgroundColor':_0x6b209e(0x106),'padding':{'left':0xa,'right':0xa}};this[_0x6b209e(0x133)][_0x6b209e(0x11a)](0x0,0xc8,_0x6b209e(0x10e),_0x375571)['setInteractive']()['on'](_0x6b209e(0x184),()=>{const _0x2950f3=_0x6b209e;Layout['setSize'](Layout[_0x2950f3(0xf5)][_0x2950f3(0x16a)]),this[_0x2950f3(0xfb)][_0x2950f3(0x128)](_0x2950f3(0x155));}),this['add'][_0x6b209e(0x11a)](0x12c,0xc8,_0x6b209e(0x102),_0x375571)[_0x6b209e(0xf4)]()['on'](_0x6b209e(0x184),()=>{const _0x5ed50f=_0x6b209e;Layout[_0x5ed50f(0x175)](Layout['Size'][_0x5ed50f(0x149)]),this['scene'][_0x5ed50f(0x128)](_0x5ed50f(0x155));}),this[_0x6b209e(0x133)][_0x6b209e(0x11a)](0x258,0xc8,_0x6b209e(0x17b),_0x375571)[_0x6b209e(0xf4)]()['on'](_0x6b209e(0x184),()=>{const _0x20a419=_0x6b209e;Layout[_0x20a419(0x175)](Layout[_0x20a419(0xf5)][_0x20a419(0x153)]),this[_0x20a419(0xfb)]['start'](_0x20a419(0x155));});let _0x2aac83=this['add'][_0x6b209e(0x10d)](0x0,0x0,'full-screen')['setInteractive']();_0x2aac83[_0x6b209e(0xf7)](0xa),_0x2aac83[_0x6b209e(0x14a)](0xb4,0x96)[_0x6b209e(0x114)](0x0,0x0),_0x2aac83['on'](_0x6b209e(0x184),()=>{const _0x2c0a7e=_0x6b209e;this[_0x2c0a7e(0x17a)][_0x2c0a7e(0x12c)](),this[_0x2c0a7e(0xfb)][_0x2c0a7e(0x128)](_0x2c0a7e(0x155));},this);}}class TheGame extends Phaser[a0_0x182027(0x123)]{constructor(){const _0x14bf1e=a0_0x182027;Log[_0x14bf1e(0x17d)](_0x14bf1e(0x182));let _0x1bb2f7=/iPad/[_0x14bf1e(0xf6)](navigator[_0x14bf1e(0x117)])?Phaser[_0x14bf1e(0x134)]:Phaser[_0x14bf1e(0x116)];Log[_0x14bf1e(0x17d)](_0x14bf1e(0xf8),_0x1bb2f7),super({'type':_0x1bb2f7,'scale':{'mode':Phaser[_0x14bf1e(0xf3)][_0x14bf1e(0x120)],'width':Layout[_0x14bf1e(0x161)][_0x14bf1e(0xfe)],'height':Layout['screen'][_0x14bf1e(0x10c)],'parent':'screen'},'scene':[LoadingScene,BoardScene,DevConsoleScene]}),Layout[_0x14bf1e(0x175)](Layout['Size'][_0x14bf1e(0x153)]),this[_0x14bf1e(0xfb)][_0x14bf1e(0x128)]('loading');}}window[a0_0x182027(0x17e)]=()=>{const _0xa293f5=a0_0x182027;Log[_0xa293f5(0x17d)]('<-\x20start\x20->'),new TheGame();};var Resource;function a0_0x55b2(){const _0x222ba4=['full-screen','text','2.5em','verdana','5298VXDTJd','./assets/sound/hit.wav','sound.','FIT','sound.watch-button-up','soundButtonDown','Game','watch','pause','forEach','361614mUAMph','start','game','loading','positionFromPlace','startFullscreen','addImageLayer','abs','GameSpecs','load','Scene','10fmBVLi','add','CANVAS','placeFromPosition','angle','Container','dev-console','push','WatchButton','10REXMds','./assets/graphics/ball.png','load\x20audio:','preload','log','audio','image.watch-hand','WatchButtonUp','WatchButtonDown','List','startsWith','button','image.ball','container','Medium','setDisplaySize','size','columns','image.','Structs','Image','./assets/sound/watch-button-down.wav','WatchHand','Sound','Large','Ball','board','Background','1096VtYnNB','hand','TileHit','play','black','2649000MnMbak','dragstart','devConsole','WatchGlass','image.watch-case','screen','7641vslSJC','warn','113931VoNKex','sound.tile-hit','2247oZUMXc','./assets/sound/watch-button-up.wav','sign','position','Small','./assets/graphics/watch-button.png','rows','WatchCase','random','restart','1038892RaxTzY','./assets/graphics/watch-glass.png','pointerup','input','tweens','setSize','round','move','sound','create','scale','6x9','resume','info','onload','get','setPosition','put','--==\x20start\x20==--','./assets/graphics/full-screen.jpeg','pointerdown','load\x20image:','Scale','setInteractive','Size','test','setZ','renderer\x20type:\x20%s','image.watch-button','soundButtonUp','scene','./assets/graphics/tile.png','debug','width','error','dragend','GameObjects','5x7','./assets/graphics/bg.png','10em','dragDistanceThreshold','white','tile','5KDScdJ','board:','41337QrgsTn','Tile','height','image','4x6','drag','runAnimation','tiles','place','./assets/graphics/watch-hand.png','setOrigin','image.background','AUTO','platform','centerTiles'];a0_0x55b2=function(){return _0x222ba4;};return a0_0x55b2();}(function(_0xd556e){const _0xc5f750=a0_0x182027;let _0x302681;(function(_0x3912e4){const _0x571807=a0_0x492d;_0x3912e4[_0x571807(0x156)]=_0x571807(0x115),_0x3912e4[_0x571807(0x10b)]='image.tile',_0x3912e4[_0x571807(0x154)]=_0x571807(0x147),_0x3912e4[_0x571807(0x16d)]=_0x571807(0x160),_0x3912e4[_0x571807(0x15f)]='image.watch-glass',_0x3912e4['WatchHand']=_0x571807(0x141),_0x3912e4[_0x571807(0x13a)]=_0x571807(0xf9);}(_0x302681=_0xd556e[_0xc5f750(0x14f)]||(_0xd556e[_0xc5f750(0x14f)]={})));let _0x165db4;(function(_0x2b5c6d){const _0x29a158=_0xc5f750;_0x2b5c6d['TileHit']=_0x29a158(0x165),_0x2b5c6d['WatchButtonDown']='sound.watch-button-down',_0x2b5c6d[_0x29a158(0x142)]=_0x29a158(0x121);}(_0x165db4=_0xd556e[_0xc5f750(0x152)]||(_0xd556e[_0xc5f750(0x152)]={})));function _0x22e908(_0x3e8b51,_0x1f9d41){const _0x2c6ae4=_0xc5f750;_0x1f9d41[_0x2c6ae4(0x126)](_0x4d5469=>{const _0x15d853=_0x2c6ae4;_0x4d5469[_0x15d853(0x145)](_0x15d853(0x14d))&&(Log[_0x15d853(0x17d)](_0x15d853(0xf2),_0x4d5469),_0x3e8b51[_0x15d853(0x130)][_0x15d853(0x10d)](_0x4d5469,_0x1c4a93[_0x15d853(0x17f)](_0x4d5469))),_0x4d5469[_0x15d853(0x145)](_0x15d853(0x11f))&&(Log[_0x15d853(0x17d)](_0x15d853(0x13d),_0x4d5469),_0x3e8b51['load'][_0x15d853(0x140)](_0x4d5469,_0x1c4a93['get'](_0x4d5469)));});}_0xd556e[_0xc5f750(0x130)]=_0x22e908;const _0x1c4a93=new Map([[_0x302681[_0xc5f750(0x156)],_0xc5f750(0x103)],[_0x302681[_0xc5f750(0x10b)],_0xc5f750(0xfc)],[_0x302681[_0xc5f750(0x154)],_0xc5f750(0x13c)],[_0x302681['WatchCase'],'./assets/graphics/watch-case.png'],[_0x302681[_0xc5f750(0x15f)],_0xc5f750(0x171)],[_0x302681['WatchHand'],_0xc5f750(0x113)],[_0x302681['WatchButton'],_0xc5f750(0x16b)],[_0x165db4['TileHit'],_0xc5f750(0x11e)],[_0x165db4[_0xc5f750(0x143)],_0xc5f750(0x150)],[_0x165db4['WatchButtonUp'],_0xc5f750(0x167)]]);}(Resource||(Resource={})));