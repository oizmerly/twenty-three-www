'use strict';const a0_0x534fc4=a0_0x41d7;function a0_0x3e63(){const _0x362688=['width','scene','393990YsetMY','Loading\x20...','setOrigin','text','Scene','start','81009WBmjSB','30AVsoPy','tile','115250IQQkKl','7rQqDYu','8263323VGXfTe','board','AUTO','create','image','add','Scale','10900104VfPFcP','428611rkfTqu','verdana','2447396UJVViY','Game','preload','setDisplaySize','loading','./assets/graphics/tile.png'];a0_0x3e63=function(){return _0x362688;};return a0_0x3e63();}(function(_0x2e212c,_0x52932c){const _0x590f7c=a0_0x41d7,_0x5b4576=_0x2e212c();while(!![]){try{const _0x4480d5=parseInt(_0x590f7c(0x1b8))/0x1+parseInt(_0x590f7c(0x1ac))/0x2*(parseInt(_0x590f7c(0x1ab))/0x3)+-parseInt(_0x590f7c(0x1ba))/0x4+parseInt(_0x590f7c(0x1ae))/0x5+parseInt(_0x590f7c(0x1a5))/0x6+-parseInt(_0x590f7c(0x1af))/0x7*(-parseInt(_0x590f7c(0x1b7))/0x8)+-parseInt(_0x590f7c(0x1b0))/0x9;if(_0x4480d5===_0x52932c)break;else _0x5b4576['push'](_0x5b4576['shift']());}catch(_0x14cb85){_0x5b4576['push'](_0x5b4576['shift']());}}}(a0_0x3e63,0xb84c8));function a0_0x41d7(_0x175bb0,_0x3826a3){const _0x3e631f=a0_0x3e63();return a0_0x41d7=function(_0x41d7d5,_0x3b9b6a){_0x41d7d5=_0x41d7d5-0x1a1;let _0x34e529=_0x3e631f[_0x41d7d5];return _0x34e529;},a0_0x41d7(_0x175bb0,_0x3826a3);}class BoardScene extends Phaser[a0_0x534fc4(0x1a9)]{constructor(){const _0x47cc99=a0_0x534fc4;super(_0x47cc99(0x1b1));}[a0_0x534fc4(0x1bc)](){const _0x14f418=a0_0x534fc4;this['load'][_0x14f418(0x1b4)](_0x14f418(0x1ad),_0x14f418(0x1a2));}[a0_0x534fc4(0x1b3)](){const _0x46cb8a=a0_0x534fc4;for(let _0x34a64a=0x0;_0x34a64a<0x4;_0x34a64a++)for(let _0x128c6c=0x0;_0x128c6c<0x6;_0x128c6c++){if(_0x34a64a==0x2&&_0x128c6c==0x2)continue;this[_0x46cb8a(0x1b5)][_0x46cb8a(0x1b4)](_0x34a64a*0xfa,_0x128c6c*0xfa,_0x46cb8a(0x1ad))[_0x46cb8a(0x1a7)](0x0,0x0)[_0x46cb8a(0x1bd)](0xfa,0xfa);}}}class LoadingScene extends Phaser['Scene']{constructor(){const _0x1d03be=a0_0x534fc4;super(_0x1d03be(0x1a1));}[a0_0x534fc4(0x1b3)](){const _0x541949=a0_0x534fc4;this[_0x541949(0x1b5)][_0x541949(0x1a8)](0x0,0x0,_0x541949(0x1a6),{'fontFamily':_0x541949(0x1b9),'fontSize':'2.5em'}),this[_0x541949(0x1a4)][_0x541949(0x1aa)](_0x541949(0x1b1));}}class TheGame extends Phaser[a0_0x534fc4(0x1bb)]{constructor(){const _0x35116d=a0_0x534fc4;super({'type':Phaser[_0x35116d(0x1b2)],'scale':{'mode':Phaser[_0x35116d(0x1b6)]['FIT'],'width':Device[_0x35116d(0x1a3)],'height':0x7d0,'parent':'screen'},'scene':[LoadingScene,BoardScene]});}}window['onload']=()=>{new TheGame();};const Device={'width':0x3e8,'height':0x7d0},Game={'board':{'columns':0x4,'rows':0x6}};