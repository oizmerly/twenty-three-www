'use strict';const a0_0x2c2624=a0_0x122c;(function(_0x255841,_0x2b5064){const _0x1919be=a0_0x122c,_0x40ee8a=_0x255841();while(!![]){try{const _0x592d39=-parseInt(_0x1919be(0x13d))/0x1*(parseInt(_0x1919be(0x126))/0x2)+parseInt(_0x1919be(0x1a4))/0x3+parseInt(_0x1919be(0x195))/0x4*(parseInt(_0x1919be(0x167))/0x5)+-parseInt(_0x1919be(0x120))/0x6+-parseInt(_0x1919be(0x197))/0x7*(-parseInt(_0x1919be(0x173))/0x8)+-parseInt(_0x1919be(0x157))/0x9+parseInt(_0x1919be(0x172))/0xa;if(_0x592d39===_0x2b5064)break;else _0x40ee8a['push'](_0x40ee8a['shift']());}catch(_0x5ebacf){_0x40ee8a['push'](_0x40ee8a['shift']());}}}(a0_0x5b86,0xa7783));function a0_0x122c(_0x14e583,_0x545bbb){const _0x5b86a2=a0_0x5b86();return a0_0x122c=function(_0x122c8e,_0x205323){_0x122c8e=_0x122c8e-0x110;let _0x5bf131=_0x5b86a2[_0x122c8e];return _0x5bf131;},a0_0x122c(_0x14e583,_0x545bbb);}var List=Phaser[a0_0x2c2624(0x170)][a0_0x2c2624(0x141)];class BoardScene extends Phaser[a0_0x2c2624(0x17b)]{constructor(){const _0x2fd93d=a0_0x2c2624;super(_0x2fd93d(0x11f)),this[_0x2fd93d(0x138)]=![],this[_0x2fd93d(0x12f)]=new Array();}[a0_0x2c2624(0x16a)](){const _0x20ed38=a0_0x2c2624;Resource['load'](this,[Resource[_0x20ed38(0x117)][_0x20ed38(0x14c)],Resource['Image'][_0x20ed38(0x189)],Resource[_0x20ed38(0x117)][_0x20ed38(0x12e)],Resource[_0x20ed38(0x117)]['WatchCase'],Resource[_0x20ed38(0x117)][_0x20ed38(0x158)],Resource['Image'][_0x20ed38(0x18b)],Resource[_0x20ed38(0x117)][_0x20ed38(0x168)],Resource[_0x20ed38(0x12a)][_0x20ed38(0x154)],Resource[_0x20ed38(0x12a)]['WatchButtonDown'],Resource[_0x20ed38(0x12a)]['WatchButtonUp']]);}['create'](){const _0x417ed9=a0_0x2c2624;this['add']['image'](0x0,0x0,Resource[_0x417ed9(0x117)][_0x417ed9(0x14c)])[_0x417ed9(0x17d)](0x0,0x0)['setDisplaySize'](Layout[_0x417ed9(0x14a)]['width'],Layout['screen'][_0x417ed9(0x19c)])[_0x417ed9(0x161)](0x0),this[_0x417ed9(0x196)](),this['add'][_0x417ed9(0x12d)](0x0,0x0,new Watch(this)),this['tiles']=[];for(let _0x1a94d3=0x0;_0x1a94d3<Layout[_0x417ed9(0x19f)][_0x417ed9(0x162)];_0x1a94d3++)for(let _0x1b7b9f=0x0;_0x1b7b9f<Layout[_0x417ed9(0x19f)][_0x417ed9(0x131)];_0x1b7b9f++){if(_0x1b7b9f==0x2&&_0x1a94d3==0x2)continue;let _0x112f5f=new Tile(this);this['add'][_0x417ed9(0x12d)](0x0,0x0,_0x112f5f),_0x112f5f[_0x417ed9(0x15d)](_0x1b7b9f,_0x1a94d3),this['tiles'][_0x417ed9(0x11d)](_0x112f5f);}this[_0x417ed9(0x171)][_0x417ed9(0x16f)]=Layout[_0x417ed9(0x175)]['size'][_0x417ed9(0x17a)]/0x64,this[_0x417ed9(0x171)]['on'](_0x417ed9(0x163),(_0xead4fb,_0x5911af,_0x5a6b75,_0x3d6961)=>{const _0x5d6c3d=_0x417ed9;this[_0x5d6c3d(0x163)](_0x5911af,_0x5a6b75,_0x3d6961);})['on'](_0x417ed9(0x180),()=>{const _0x39b122=_0x417ed9;Log[_0x39b122(0x13f)](_0x39b122(0x180));})['on'](_0x417ed9(0x1a0),(_0x128f22,_0x5982e7)=>{const _0x5a9c44=_0x417ed9;Log[_0x5a9c44(0x13f)](_0x5a9c44(0x1a0)),this[_0x5a9c44(0x17f)]();});}[a0_0x2c2624(0x163)](_0x4eac6d,_0x2428ec,_0x164ee3){const _0x1a8cd0=a0_0x2c2624,_0x26b5bf=Tile[_0x1a8cd0(0x111)](_0x2428ec,_0x164ee3),_0xcc4bb2=_0x4eac6d[_0x1a8cd0(0x17a)]/0x3;if(Math[_0x1a8cd0(0x139)](_0x26b5bf['dx'])>Math['abs'](_0x26b5bf['dy'])){_0x26b5bf['dy']=0x0;if(Math[_0x1a8cd0(0x139)](_0x26b5bf['dx'])>_0xcc4bb2)_0x26b5bf['dx']=Math[_0x1a8cd0(0x110)](_0x26b5bf['dx'])*_0xcc4bb2;}else{_0x26b5bf['dx']=0x0;if(Math[_0x1a8cd0(0x139)](_0x26b5bf['dy'])>_0xcc4bb2)_0x26b5bf['dy']=Math[_0x1a8cd0(0x110)](_0x26b5bf['dy'])*_0xcc4bb2;}this[_0x1a8cd0(0x1a5)](_0x4eac6d,_0x26b5bf);}['move'](_0x447f69,_0x31b360){const _0x4353a5=a0_0x2c2624;let _0x3539c5=_0x31b360;for(const _0x7cc00 of this[_0x4353a5(0x12f)]){if(_0x7cc00==_0x447f69)continue;const _0x153ed6=_0x7cc00[_0x4353a5(0x166)];let _0x1cd06d=0x0;if(_0x31b360['dy']==0x0){if(_0x31b360['y']!=_0x153ed6['y'])continue;const _0x56bee7=Math[_0x4353a5(0x110)](_0x31b360['dx']);if(_0x31b360['x']+_0x56bee7!=_0x153ed6['x'])continue;_0x1cd06d=_0x56bee7+_0x31b360['x']+_0x31b360['dx']-(_0x153ed6['x']+_0x153ed6['dx']),_0x31b360['dx']-=_0x1cd06d;}else{if(_0x31b360['x']!=_0x153ed6['x'])continue;const _0x290363=Math[_0x4353a5(0x110)](_0x31b360['dy']);if(_0x31b360['y']+_0x290363!=_0x153ed6['y'])continue;_0x1cd06d=_0x290363+_0x31b360['y']+_0x31b360['dy']-(_0x153ed6['y']+_0x153ed6['dy']),_0x31b360['dy']-=_0x1cd06d;}_0x1cd06d&&this['thereIsAMovedTile']&&(_0x7cc00[_0x4353a5(0x16c)](),this['thereIsAMovedTile']=![]);}return _0x3539c5&&(_0x447f69['place']=_0x31b360,(Math[_0x4353a5(0x139)](_0x31b360['dx'])>0.05||Math[_0x4353a5(0x139)](_0x31b360['dy'])>0.05)&&(this[_0x4353a5(0x138)]=!![])),{'dx':0x0,'dy':0x0};}['centerTiles'](){const _0x861a2e=a0_0x2c2624;for(const _0x57b77a of this[_0x861a2e(0x12f)]){_0x57b77a['moveToCenter']();}}[a0_0x2c2624(0x196)](){const _0x248707=a0_0x2c2624;this[_0x248707(0x165)][_0x248707(0x134)](0xa,0xa,'🛠',{'fontSize':_0x248707(0x16e)})[_0x248707(0x191)]()['on'](_0x248707(0x13e),()=>{const _0x9c43f9=_0x248707;Layout[_0x9c43f9(0x159)](Layout[_0x9c43f9(0x123)][_0x9c43f9(0x150)]),this[_0x9c43f9(0x177)]['start']('dev-console');});}}var Layout;(function(_0x348dd1){const _0x1815d9=a0_0x2c2624;_0x348dd1['screen']={'width':0x3e8,'height':0x7d0},_0x348dd1[_0x1815d9(0x11f)]={'position':{'x':0xf,'y':0x190},'size':{'width':0x0,'height':0x0}},_0x348dd1[_0x1815d9(0x175)]={'size':{'width':0x0,'height':0x0}},_0x348dd1[_0x1815d9(0x121)]={'position':{'x':0x2f8,'y':0xe1},'size':{'width':0x1a9,'height':0x1a9},'buttonShift':0xc};let _0x32415b;(function(_0x5b5793){const _0x3dd3e9=_0x1815d9;_0x5b5793[_0x5b5793[_0x3dd3e9(0x150)]=0x0]=_0x3dd3e9(0x150),_0x5b5793[_0x5b5793['Medium']=0x1]=_0x3dd3e9(0x143),_0x5b5793[_0x5b5793[_0x3dd3e9(0x174)]=0x2]='Large';}(_0x32415b=_0x348dd1[_0x1815d9(0x123)]||(_0x348dd1[_0x1815d9(0x123)]={})));let _0x5aa2bf=_0x32415b[_0x1815d9(0x150)];function _0x5218cb(_0x12afa7){const _0x498a82=_0x1815d9;_0x5aa2bf=_0x12afa7,_0x348dd1[_0x498a82(0x19f)]=_0x233660[_0x498a82(0x135)](_0x5aa2bf),_0x348dd1[_0x498a82(0x11f)][_0x498a82(0x16d)][_0x498a82(0x17a)]=_0x348dd1[_0x498a82(0x14a)][_0x498a82(0x17a)]-_0x348dd1['board']['position']['x']*0x2,_0x348dd1[_0x498a82(0x11f)][_0x498a82(0x16d)][_0x498a82(0x19c)]=_0x348dd1[_0x498a82(0x11f)][_0x498a82(0x16d)]['width']*_0x348dd1[_0x498a82(0x19f)]['rows']/_0x348dd1[_0x498a82(0x19f)][_0x498a82(0x131)],_0x348dd1[_0x498a82(0x175)][_0x498a82(0x16d)]['width']=_0x348dd1[_0x498a82(0x11f)]['size']['width']/_0x348dd1['game']['columns'],_0x348dd1['tile']['size'][_0x498a82(0x19c)]=_0x348dd1[_0x498a82(0x11f)]['size'][_0x498a82(0x19c)]/_0x348dd1[_0x498a82(0x19f)]['rows'],Log[_0x498a82(0x13f)]('board:',_0x348dd1['board'],_0x498a82(0x18e),_0x348dd1[_0x498a82(0x175)]);}_0x348dd1[_0x1815d9(0x159)]=_0x5218cb;class _0x129733{constructor(_0x2a0188,_0x4c4f62){const _0x589d86=_0x1815d9;this[_0x589d86(0x131)]=_0x2a0188,this[_0x589d86(0x162)]=_0x4c4f62;}}_0x348dd1['GameSpecs']=_0x129733;const _0x233660=new Map([[_0x348dd1[_0x1815d9(0x123)][_0x1815d9(0x150)],new _0x348dd1['GameSpecs'](0x4,0x6)],[_0x348dd1[_0x1815d9(0x123)][_0x1815d9(0x143)],new _0x348dd1[(_0x1815d9(0x145))](0x5,0x7)],[_0x348dd1[_0x1815d9(0x123)][_0x1815d9(0x174)],new _0x348dd1[(_0x1815d9(0x145))](0x6,0x9)]]);}(Layout||(Layout={})));class Tile extends Phaser[a0_0x2c2624(0x156)]['Container']{constructor(_0x362aa4){const _0x30ca40=a0_0x2c2624;var _0x277ad0;super(_0x362aa4),Tile[_0x30ca40(0x119)]=(_0x277ad0=Tile[_0x30ca40(0x119)])!==null&&_0x277ad0!==void 0x0?_0x277ad0:this[_0x30ca40(0x177)][_0x30ca40(0x19b)][_0x30ca40(0x165)](Resource[_0x30ca40(0x12a)][_0x30ca40(0x154)]);const _0x348fc9=Layout['tile'][_0x30ca40(0x16d)];this[_0x30ca40(0x159)](_0x348fc9['width'],_0x348fc9[_0x30ca40(0x19c)]),this[_0x30ca40(0x199)](Resource[_0x30ca40(0x117)][_0x30ca40(0x189)],0x1),Math[_0x30ca40(0x15f)]()<0.2&&this[_0x30ca40(0x199)](Resource['Image'][_0x30ca40(0x12e)],0x2),this[_0x30ca40(0x191)]({'draggable':!![]});}get[a0_0x2c2624(0x166)](){const _0xfda385=a0_0x2c2624;return Tile[_0xfda385(0x111)](this['x'],this['y']);}set[a0_0x2c2624(0x166)](_0x12f52b){const _0x3d17ab=a0_0x2c2624,_0x499ea9=Tile[_0x3d17ab(0x15c)](_0x12f52b);this[_0x3d17ab(0x183)](_0x499ea9['x'],_0x499ea9['y']);}[a0_0x2c2624(0x15d)](_0x5ad26c,_0x1df7f5){this['place']={'x':_0x5ad26c,'y':_0x1df7f5,'dx':0x0,'dy':0x0};}[a0_0x2c2624(0x153)](){const _0x2627a5=a0_0x2c2624,_0x1747c8=this[_0x2627a5(0x166)];if(_0x1747c8['dx']==0x0&&_0x1747c8['dy']==0x0)return;const _0x364e25=Tile['positionFromPlace']({'x':Math['round'](_0x1747c8['x']+_0x1747c8['dx']),'y':Math[_0x2627a5(0x128)](_0x1747c8['y']+_0x1747c8['dy']),'dx':0x0,'dy':0x0});this[_0x2627a5(0x177)][_0x2627a5(0x14f)][_0x2627a5(0x165)]({'targets':this,'x':_0x364e25['x'],'y':_0x364e25['y'],'duration':0x14,'onComplete':()=>{const _0x1016b9=_0x2627a5;if(Math[_0x1016b9(0x139)](_0x1747c8['dx'])>0.01||Math[_0x1016b9(0x139)](_0x1747c8['dy'])>0.01)this[_0x1016b9(0x16c)]();}});}[a0_0x2c2624(0x16c)](){const _0xbece8b=a0_0x2c2624;if(!Tile[_0xbece8b(0x119)][_0xbece8b(0x124)])Tile['soundHit'][_0xbece8b(0x155)]();}[a0_0x2c2624(0x199)](_0x221e00,_0x3d8ecc){const _0x22c1df=a0_0x2c2624;let _0x66adee=new Phaser[(_0x22c1df(0x156))]['Image'](this['scene'],0x0,0x0,_0x221e00);return _0x66adee['setDisplaySize'](this['width'],this[_0x22c1df(0x19c)]),_0x66adee[_0x22c1df(0x161)](_0x3d8ecc),this[_0x22c1df(0x165)](_0x66adee),_0x66adee;}}(function(_0xde690f){const _0x24b815=a0_0x2c2624;function _0x16d9f2(_0x47c8f9,_0x2925df){const _0x421020=a0_0x122c;_0x47c8f9=(_0x47c8f9-Layout[_0x421020(0x11f)][_0x421020(0x13c)]['x']-Layout['tile'][_0x421020(0x16d)][_0x421020(0x17a)]/0x2)/Layout[_0x421020(0x175)][_0x421020(0x16d)][_0x421020(0x17a)],_0x2925df=(_0x2925df-Layout[_0x421020(0x11f)]['position']['y']-Layout[_0x421020(0x175)][_0x421020(0x16d)][_0x421020(0x19c)]/0x2)/Layout[_0x421020(0x175)][_0x421020(0x16d)][_0x421020(0x19c)];const _0x3a3e48=Math[_0x421020(0x128)](_0x47c8f9),_0x3063ad=Math[_0x421020(0x128)](_0x2925df);return{'x':_0x3a3e48,'y':_0x3063ad,'dx':_0x47c8f9-_0x3a3e48,'dy':_0x2925df-_0x3063ad};}_0xde690f['placeFromPosition']=_0x16d9f2;function _0xdd95eb(_0xd8b3dc){const _0x3abdb9=a0_0x122c;return{'x':Layout[_0x3abdb9(0x11f)][_0x3abdb9(0x13c)]['x']+Layout[_0x3abdb9(0x175)]['size'][_0x3abdb9(0x17a)]/0x2+(_0xd8b3dc['x']+_0xd8b3dc['dx'])*Layout[_0x3abdb9(0x175)][_0x3abdb9(0x16d)][_0x3abdb9(0x17a)],'y':Layout[_0x3abdb9(0x11f)][_0x3abdb9(0x13c)]['y']+Layout['tile']['size'][_0x3abdb9(0x19c)]/0x2+(_0xd8b3dc['y']+_0xd8b3dc['dy'])*Layout[_0x3abdb9(0x175)][_0x3abdb9(0x16d)][_0x3abdb9(0x19c)]};}_0xde690f[_0x24b815(0x15c)]=_0xdd95eb;}(Tile||(Tile={})));class Watch extends Phaser['GameObjects'][a0_0x2c2624(0x125)]{constructor(_0x2b0feb){const _0x4c6e78=a0_0x2c2624;super(_0x2b0feb),this[_0x4c6e78(0x159)](Layout['watch'][_0x4c6e78(0x16d)][_0x4c6e78(0x17a)],Layout[_0x4c6e78(0x121)][_0x4c6e78(0x16d)][_0x4c6e78(0x19c)]),this[_0x4c6e78(0x183)](Layout[_0x4c6e78(0x121)]['position']['x'],Layout['watch']['position']['y']);let _0x294444=new Phaser['GameObjects']['Image'](this[_0x4c6e78(0x177)],0x0,0x0,Resource[_0x4c6e78(0x117)][_0x4c6e78(0x19a)]);_0x294444[_0x4c6e78(0x127)](this[_0x4c6e78(0x17a)],this[_0x4c6e78(0x19c)]),this[_0x4c6e78(0x165)](_0x294444),this[_0x4c6e78(0x14b)]=new Phaser[(_0x4c6e78(0x156))][(_0x4c6e78(0x117))](this[_0x4c6e78(0x177)],0x0,0x0,Resource[_0x4c6e78(0x117)][_0x4c6e78(0x18b)]),this[_0x4c6e78(0x14b)][_0x4c6e78(0x159)](this['width'],this[_0x4c6e78(0x19c)]),this[_0x4c6e78(0x14b)][_0x4c6e78(0x132)](0.59),this['add'](this['hand']);let _0x4f3c3e=new Phaser[(_0x4c6e78(0x156))][(_0x4c6e78(0x117))](this[_0x4c6e78(0x177)],0x0,0x0,Resource[_0x4c6e78(0x117)][_0x4c6e78(0x158)]);_0x4f3c3e[_0x4c6e78(0x127)](this['width'],this[_0x4c6e78(0x19c)]),_0x4f3c3e['angle']=-0x46,this['add'](_0x4f3c3e),this[_0x4c6e78(0x18a)]=new Phaser[(_0x4c6e78(0x156))]['Image'](this[_0x4c6e78(0x177)],0x0,0x0,Resource[_0x4c6e78(0x117)][_0x4c6e78(0x168)]),this['button'][_0x4c6e78(0x127)](this[_0x4c6e78(0x17a)],this[_0x4c6e78(0x19c)]),this[_0x4c6e78(0x165)](this[_0x4c6e78(0x18a)]),this[_0x4c6e78(0x187)]=this[_0x4c6e78(0x177)][_0x4c6e78(0x19b)][_0x4c6e78(0x165)](Resource['Sound'][_0x4c6e78(0x17e)]),this[_0x4c6e78(0x181)]=this[_0x4c6e78(0x177)][_0x4c6e78(0x19b)][_0x4c6e78(0x165)](Resource[_0x4c6e78(0x12a)][_0x4c6e78(0x184)]),this[_0x4c6e78(0x185)]();}[a0_0x2c2624(0x185)](){const _0x4cc3ca=a0_0x2c2624;this[_0x4cc3ca(0x191)]();let _0x57edda=![];const _0x8a42ac=this[_0x4cc3ca(0x177)]['tweens'][_0x4cc3ca(0x165)]({'targets':this[_0x4cc3ca(0x14b)],'angle':0x168,'duration':0x3a98,'repeat':-0x1}),_0xa32eb6=()=>{const _0x2a7fd2=_0x4cc3ca;_0x57edda=!![],this[_0x2a7fd2(0x187)]['play']();const _0x46694a=this[_0x2a7fd2(0x14b)][_0x2a7fd2(0x112)]>=0x0?this[_0x2a7fd2(0x14b)][_0x2a7fd2(0x112)]:0x168+this[_0x2a7fd2(0x14b)][_0x2a7fd2(0x112)];this['scene']['tweens'][_0x2a7fd2(0x165)]({'targets':this[_0x2a7fd2(0x18a)],'y':Layout[_0x2a7fd2(0x121)][_0x2a7fd2(0x14e)],'duration':0x82}),this['scene']['tweens']['add']({'targets':this[_0x2a7fd2(0x14b)],'angle':this['hand']['angle']>0x0?0x168:0x0,'duration':0xc8*(0x168-_0x46694a)/0x168}),_0x8a42ac[_0x2a7fd2(0x152)]();},_0x13d475=()=>{const _0x45e5a1=_0x4cc3ca;_0x57edda=![],this[_0x45e5a1(0x181)][_0x45e5a1(0x155)](),Log['info'](_0x45e5a1(0x13a)),this['scene'][_0x45e5a1(0x14f)]['add']({'targets':this[_0x45e5a1(0x18a)],'y':0x0,'duration':0xd2}),_0x8a42ac[_0x45e5a1(0x137)](),_0x8a42ac['restart']();};this['on'](_0x4cc3ca(0x13e),_0xa32eb6),this['on'](_0x4cc3ca(0x192),_0x13d475),this['on'](_0x4cc3ca(0x160),()=>{if(_0x57edda)_0x13d475();});}}var Log;(function(_0x5b19ac){const _0x28dc17=a0_0x2c2624,_0x393221=!![],_0x19197e=(..._0x55fc2a)=>{};_0x5b19ac[_0x28dc17(0x169)]=_0x393221?console[_0x28dc17(0x169)]:_0x19197e,_0x5b19ac['info']=_0x393221?console[_0x28dc17(0x148)]:_0x19197e,_0x5b19ac[_0x28dc17(0x130)]=_0x393221?console['warn']:_0x19197e,_0x5b19ac[_0x28dc17(0x114)]=_0x393221?console[_0x28dc17(0x114)]:_0x19197e;}(Log||(Log={})));var game=Layout[a0_0x2c2624(0x19f)];class LoadingScene extends Phaser['Scene']{constructor(){const _0x538ce1=a0_0x2c2624;super(_0x538ce1(0x11c));}[a0_0x2c2624(0x19e)](){const _0x130cf3=a0_0x2c2624;this[_0x130cf3(0x165)][_0x130cf3(0x134)](0x0,0x0,'Loading\x20...',{'fontFamily':_0x130cf3(0x151),'fontSize':_0x130cf3(0x13b)}),this[_0x130cf3(0x177)]['start'](_0x130cf3(0x11f));}}class DevConsoleScene extends Phaser[a0_0x2c2624(0x17b)]{constructor(){const _0x592729=a0_0x2c2624;super(_0x592729(0x136));}[a0_0x2c2624(0x16a)](){const _0x288338=a0_0x2c2624;this[_0x288338(0x17c)][_0x288338(0x146)](_0x288338(0x14d),_0x288338(0x11b));}[a0_0x2c2624(0x19e)](){const _0x8eaf8d=a0_0x2c2624,_0xa68e4a={'fontSize':_0x8eaf8d(0x16e),'color':'black','backgroundColor':'white','padding':{'left':0xa,'right':0xa}};this[_0x8eaf8d(0x165)]['text'](0x0,0xc8,_0x8eaf8d(0x15a),_0xa68e4a)['setInteractive']()['on'](_0x8eaf8d(0x13e),()=>{const _0x547bcc=_0x8eaf8d;Layout[_0x547bcc(0x159)](Layout[_0x547bcc(0x123)]['Small']),this[_0x547bcc(0x177)][_0x547bcc(0x1a3)]('board');}),this[_0x8eaf8d(0x165)]['text'](0x12c,0xc8,_0x8eaf8d(0x147),_0xa68e4a)[_0x8eaf8d(0x191)]()['on'](_0x8eaf8d(0x13e),()=>{const _0x2d7943=_0x8eaf8d;Layout[_0x2d7943(0x159)](Layout[_0x2d7943(0x123)][_0x2d7943(0x143)]),this[_0x2d7943(0x177)][_0x2d7943(0x1a3)]('board');}),this[_0x8eaf8d(0x165)][_0x8eaf8d(0x134)](0x258,0xc8,_0x8eaf8d(0x18d),_0xa68e4a)[_0x8eaf8d(0x191)]()['on'](_0x8eaf8d(0x13e),()=>{const _0x193038=_0x8eaf8d;Layout[_0x193038(0x159)](Layout['Size'][_0x193038(0x174)]),this[_0x193038(0x177)][_0x193038(0x1a3)](_0x193038(0x11f));});let _0x2680f9=this[_0x8eaf8d(0x165)][_0x8eaf8d(0x146)](0x0,0x0,_0x8eaf8d(0x14d))[_0x8eaf8d(0x191)]();_0x2680f9[_0x8eaf8d(0x161)](0xa),_0x2680f9['setDisplaySize'](0xb4,0x96)[_0x8eaf8d(0x17d)](0x0,0x0),_0x2680f9['on']('pointerdown',()=>{const _0x4fb9bc=_0x8eaf8d;this[_0x4fb9bc(0x1a1)][_0x4fb9bc(0x11a)](),this[_0x4fb9bc(0x177)]['start'](_0x4fb9bc(0x11f));},this);}}class TheGame extends Phaser[a0_0x2c2624(0x142)]{constructor(){const _0x3b31e5=a0_0x2c2624;Log[_0x3b31e5(0x13f)](_0x3b31e5(0x11e));let _0x4782d9=/iPad/[_0x3b31e5(0x194)](navigator[_0x3b31e5(0x12b)])?Phaser[_0x3b31e5(0x164)]:Phaser[_0x3b31e5(0x12c)];Log[_0x3b31e5(0x13f)](_0x3b31e5(0x19d),_0x4782d9),super({'type':_0x4782d9,'scale':{'mode':Phaser['Scale']['FIT'],'width':Layout[_0x3b31e5(0x14a)][_0x3b31e5(0x17a)],'height':Layout[_0x3b31e5(0x14a)]['height'],'parent':'screen'},'scene':[LoadingScene,BoardScene,DevConsoleScene]}),Layout[_0x3b31e5(0x159)](Layout[_0x3b31e5(0x123)][_0x3b31e5(0x174)]),this[_0x3b31e5(0x177)][_0x3b31e5(0x1a3)](_0x3b31e5(0x11c));}}window[a0_0x2c2624(0x1a2)]=()=>{const _0x277004=a0_0x2c2624;Log['info'](_0x277004(0x122)),new TheGame();};function a0_0x5b86(){const _0x18e26d=['dragstart','soundButtonUp','sound.watch-button-up','setPosition','WatchButtonUp','runAnimation','./assets/graphics/watch-case.png','soundButtonDown','image.watch-button','Tile','button','WatchHand','sound.watch-button-down','6x9',',\x20tile:','audio','./assets/graphics/bg.png','setInteractive','pointerup','image.watch-case','test','221772ISwnDi','devConsole','175287mlSrgt','forEach','addImageLayer','WatchCase','sound','height','renderer\x20type:\x20%s','create','game','dragend','scale','onload','start','1275720fzBVYG','move','sign','placeFromPosition','angle','image.watch-hand','error','sound.','load\x20image:','Image','./assets/graphics/ball.png','soundHit','startFullscreen','./assets/graphics/full-screen.jpeg','loading','push','--==\x20start\x20==--','board','5114100WNOcgg','watch','<-\x20start\x20->','Size','isPlaying','Container','2rcsfcK','setDisplaySize','round','image.background','Sound','platform','AUTO','container','Ball','tiles','warn','columns','setScale','startsWith','text','get','dev-console','resume','thereIsAMovedTile','abs','watch\x20up','2.5em','position','765521KdaGwP','pointerdown','info','./assets/graphics/tile.png','List','Game','Medium','./assets/sound/hit.wav','GameSpecs','image','5x7','log','load\x20audio:','screen','hand','Background','full-screen','buttonShift','tweens','Small','verdana','pause','moveToCenter','TileHit','play','GameObjects','6851025GmOPqg','WatchGlass','setSize','4x6','./assets/graphics/watch-hand.png','positionFromPlace','put','image.','random','pointerout','setZ','rows','drag','CANVAS','add','place','75mLQQik','WatchButton','debug','preload','sound.tile-hit','hitSound','size','10em','dragDistanceThreshold','Structs','input','13824690jpXyye','136GPRylE','Large','tile','image.tile','scene','./assets/sound/watch-button-down.wav','./assets/sound/watch-button-up.wav','width','Scene','load','setOrigin','WatchButtonDown','centerTiles'];a0_0x5b86=function(){return _0x18e26d;};return a0_0x5b86();}var Resource;(function(_0x597318){const _0x4802b6=a0_0x2c2624;let _0x2657be;(function(_0x1e8b32){const _0xc03f85=a0_0x122c;_0x1e8b32[_0xc03f85(0x14c)]=_0xc03f85(0x129),_0x1e8b32[_0xc03f85(0x189)]=_0xc03f85(0x176),_0x1e8b32[_0xc03f85(0x12e)]='image.ball',_0x1e8b32[_0xc03f85(0x19a)]=_0xc03f85(0x193),_0x1e8b32[_0xc03f85(0x158)]='image.watch-glass',_0x1e8b32['WatchHand']=_0xc03f85(0x113),_0x1e8b32[_0xc03f85(0x168)]=_0xc03f85(0x188);}(_0x2657be=_0x597318[_0x4802b6(0x117)]||(_0x597318[_0x4802b6(0x117)]={})));let _0x113d23;(function(_0xe71420){const _0x4f283e=_0x4802b6;_0xe71420[_0x4f283e(0x154)]=_0x4f283e(0x16b),_0xe71420[_0x4f283e(0x17e)]=_0x4f283e(0x18c),_0xe71420[_0x4f283e(0x184)]=_0x4f283e(0x182);}(_0x113d23=_0x597318['Sound']||(_0x597318[_0x4802b6(0x12a)]={})));function _0x5bfbed(_0x263fb6,_0x147528){const _0x2f7835=_0x4802b6;_0x147528[_0x2f7835(0x198)](_0x3c14ae=>{const _0x3f807c=_0x2f7835;_0x3c14ae[_0x3f807c(0x133)](_0x3f807c(0x15e))&&(Log[_0x3f807c(0x13f)](_0x3f807c(0x116),_0x3c14ae),_0x263fb6['load'][_0x3f807c(0x146)](_0x3c14ae,_0x4594fb[_0x3f807c(0x135)](_0x3c14ae))),_0x3c14ae['startsWith'](_0x3f807c(0x115))&&(Log['info'](_0x3f807c(0x149),_0x3c14ae),_0x263fb6[_0x3f807c(0x17c)][_0x3f807c(0x18f)](_0x3c14ae,_0x4594fb[_0x3f807c(0x135)](_0x3c14ae)));});}_0x597318['load']=_0x5bfbed;const _0x4594fb=new Map([[_0x2657be['Background'],_0x4802b6(0x190)],[_0x2657be[_0x4802b6(0x189)],_0x4802b6(0x140)],[_0x2657be['Ball'],_0x4802b6(0x118)],[_0x2657be[_0x4802b6(0x19a)],_0x4802b6(0x186)],[_0x2657be[_0x4802b6(0x158)],'./assets/graphics/watch-glass.png'],[_0x2657be['WatchHand'],_0x4802b6(0x15b)],[_0x2657be[_0x4802b6(0x168)],'./assets/graphics/watch-button.png'],[_0x113d23['TileHit'],_0x4802b6(0x144)],[_0x113d23[_0x4802b6(0x17e)],_0x4802b6(0x178)],[_0x113d23['WatchButtonUp'],_0x4802b6(0x179)]]);}(Resource||(Resource={})));