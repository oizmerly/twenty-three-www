'use strict';function a0_0x3b66(_0x329fff,_0x4e54bb){const _0x1f1721=a0_0x1f17();return a0_0x3b66=function(_0x3b6680,_0x10ecfb){_0x3b6680=_0x3b6680-0x72;let _0x55423a=_0x1f1721[_0x3b6680];return _0x55423a;},a0_0x3b66(_0x329fff,_0x4e54bb);}const a0_0x4901cd=a0_0x3b66;(function(_0x48fc30,_0x39112c){const _0x3734de=a0_0x3b66,_0x229fec=_0x48fc30();while(!![]){try{const _0xc8c136=-parseInt(_0x3734de(0x75))/0x1*(parseInt(_0x3734de(0x74))/0x2)+-parseInt(_0x3734de(0x80))/0x3+-parseInt(_0x3734de(0x92))/0x4+parseInt(_0x3734de(0x94))/0x5*(parseInt(_0x3734de(0x8a))/0x6)+parseInt(_0x3734de(0x73))/0x7+-parseInt(_0x3734de(0x72))/0x8*(-parseInt(_0x3734de(0x93))/0x9)+parseInt(_0x3734de(0x96))/0xa;if(_0xc8c136===_0x39112c)break;else _0x229fec['push'](_0x229fec['shift']());}catch(_0x57ca93){_0x229fec['push'](_0x229fec['shift']());}}}(a0_0x1f17,0xb8271));function a0_0x1f17(){const _0x373171=['add','create','2470124NigGRf','45jDuvaq','25YXiRTk','FIT','15467340zCkHPb','image','setDisplaySize','setOrigin','1197032lmmmTM','5588079PZGrho','817832DxUgRF','3SFRQZx','dragstart','Game','load','setInteractive','preload','text','random','setPosition','input','Loading\x20...','3487059upCHiD','start','scene','Scene','./assets/graphics/tile.png','tile','loading','screen','2.5em','width','801294WPiswo','./assets/graphics/ball.png','AUTO','Scale','ball','onload'];a0_0x1f17=function(){return _0x373171;};return a0_0x1f17();}class BoardScene extends Phaser[a0_0x4901cd(0x83)]{constructor(){super('board');}[a0_0x4901cd(0x7a)](){const _0x57f042=a0_0x4901cd;this[_0x57f042(0x78)]['image'](_0x57f042(0x85),_0x57f042(0x84)),this[_0x57f042(0x78)]['image'](_0x57f042(0x8e),_0x57f042(0x8b));}[a0_0x4901cd(0x91)](){const _0x51b398=a0_0x4901cd;for(let _0x2b29be=0x0;_0x2b29be<0x4;_0x2b29be++)for(let _0x4e0642=0x0;_0x4e0642<0x6;_0x4e0642++){if(_0x2b29be==0x2&&_0x4e0642==0x2)continue;let _0x293eab=this[_0x51b398(0x90)][_0x51b398(0x97)](_0x2b29be*0xfa,_0x4e0642*0xfa,_0x51b398(0x85))[_0x51b398(0x99)](0x0,0x0)[_0x51b398(0x98)](0xfa,0xfa);Math[_0x51b398(0x7c)]()<0.2&&this[_0x51b398(0x90)][_0x51b398(0x97)](_0x2b29be*0xfa,_0x4e0642*0xfa,'ball')['setOrigin'](0x0,0x0)[_0x51b398(0x98)](0xfa,0xfa),_0x293eab[_0x51b398(0x79)]({'draggable':!![]}),this[_0x51b398(0x7e)]['on']('drag',(_0x38fe2e,_0x398450,_0x2f224b,_0x472969)=>{const _0x386ba2=_0x51b398;_0x398450[_0x386ba2(0x7d)](_0x2f224b,_0x472969);})['on'](_0x51b398(0x76),()=>{})['on']('dragend',(_0x29b6a3,_0x378655)=>{});}}}class LoadingScene extends Phaser[a0_0x4901cd(0x83)]{constructor(){const _0x4266d9=a0_0x4901cd;super(_0x4266d9(0x86));}[a0_0x4901cd(0x91)](){const _0x195cbb=a0_0x4901cd;this[_0x195cbb(0x90)][_0x195cbb(0x7b)](0x0,0x0,_0x195cbb(0x7f),{'fontFamily':'verdana','fontSize':_0x195cbb(0x88)}),this[_0x195cbb(0x82)][_0x195cbb(0x81)]('board');}}class TheGame extends Phaser[a0_0x4901cd(0x77)]{constructor(){const _0x15fea9=a0_0x4901cd;super({'type':Phaser[_0x15fea9(0x8c)],'scale':{'mode':Phaser[_0x15fea9(0x8d)][_0x15fea9(0x95)],'width':Device[_0x15fea9(0x89)],'height':0x7d0,'parent':_0x15fea9(0x87)},'scene':[LoadingScene,BoardScene]});}}window[a0_0x4901cd(0x8f)]=()=>{new TheGame();};const Device={'width':0x3e8,'height':0x7d0},Game={'board':{'columns':0x4,'rows':0x6}};