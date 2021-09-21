/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/deepslate/dist/deepslate.esm.js":
/*!******************************************************!*\
  !*** ./node_modules/deepslate/dist/deepslate.esm.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlendedNoise": () => (/* binding */ z),
/* harmony export */   "BlockColors": () => (/* binding */ st),
/* harmony export */   "BlockDefinition": () => (/* binding */ ot),
/* harmony export */   "BlockModel": () => (/* binding */ ut),
/* harmony export */   "BlockPos": () => (/* binding */ o),
/* harmony export */   "BlockState": () => (/* binding */ B),
/* harmony export */   "Chunk": () => (/* binding */ C),
/* harmony export */   "ChunkPos": () => (/* binding */ k),
/* harmony export */   "ChunkSection": () => (/* binding */ E),
/* harmony export */   "Climate": () => (/* binding */ Pt),
/* harmony export */   "Direction": () => (/* binding */ n),
/* harmony export */   "FixedBiome": () => (/* binding */ yt),
/* harmony export */   "ImprovedNoise": () => (/* binding */ L),
/* harmony export */   "MultiNoise": () => (/* binding */ St),
/* harmony export */   "NbtReader": () => (/* binding */ l),
/* harmony export */   "NbtWriter": () => (/* binding */ c),
/* harmony export */   "NoiseChunkGenerator": () => (/* binding */ Et),
/* harmony export */   "NoiseInterpolator": () => (/* binding */ Bt),
/* harmony export */   "NoiseSampler": () => (/* binding */ At),
/* harmony export */   "NormalNoise": () => (/* binding */ Y),
/* harmony export */   "PerlinNoise": () => (/* binding */ V),
/* harmony export */   "PerlinSimplexNoise": () => (/* binding */ X),
/* harmony export */   "Random": () => (/* binding */ H),
/* harmony export */   "SimplexNoise": () => (/* binding */ O),
/* harmony export */   "Spline": () => (/* binding */ Z),
/* harmony export */   "Structure": () => (/* binding */ I),
/* harmony export */   "StructureRenderer": () => (/* binding */ vt),
/* harmony export */   "TerrainShaper": () => (/* binding */ xt),
/* harmony export */   "TextureAtlas": () => (/* binding */ bt),
/* harmony export */   "WorldgenRandom": () => (/* binding */ W),
/* harmony export */   "binarySearch": () => (/* binding */ D),
/* harmony export */   "clamp": () => (/* binding */ F),
/* harmony export */   "clampedLerp": () => (/* binding */ _),
/* harmony export */   "getListTag": () => (/* binding */ A),
/* harmony export */   "getOptional": () => (/* binding */ S),
/* harmony export */   "getTag": () => (/* binding */ y),
/* harmony export */   "lerp": () => (/* binding */ M),
/* harmony export */   "lerp2": () => (/* binding */ T),
/* harmony export */   "lerp3": () => (/* binding */ N),
/* harmony export */   "read": () => (/* binding */ f),
/* harmony export */   "readChunk": () => (/* binding */ p),
/* harmony export */   "readCompressed": () => (/* binding */ d),
/* harmony export */   "readRegion": () => (/* binding */ g),
/* harmony export */   "readUncompressed": () => (/* binding */ u),
/* harmony export */   "smoothstep": () => (/* binding */ U),
/* harmony export */   "square": () => (/* binding */ R),
/* harmony export */   "tagNames": () => (/* binding */ h),
/* harmony export */   "tagTypes": () => (/* binding */ a),
/* harmony export */   "write": () => (/* binding */ w),
/* harmony export */   "writeChunk": () => (/* binding */ P),
/* harmony export */   "writeCompressed": () => (/* binding */ v),
/* harmony export */   "writeRegion": () => (/* binding */ b),
/* harmony export */   "writeUncompressed": () => (/* binding */ m)
/* harmony export */ });
/* harmony import */ var pako__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pako */ "./node_modules/pako/dist/pako.esm.mjs");
/* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/vec3.js");
/* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/mat4.js");
/* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/common.js");
var n;!function(t){t.UP="up",t.DOWN="down",t.NORTH="north",t.EAST="east",t.SOUTH="south",t.WEST="west"}(n||(n={}));const r={[n.UP]:[0,1,0],[n.DOWN]:[0,-1,0],[n.NORTH]:[0,0,-1],[n.EAST]:[1,0,0],[n.SOUTH]:[0,0,1],[n.WEST]:[-1,0,0]};var o;!function(t){t.ALL=[t.UP,t.DOWN,t.NORTH,t.EAST,t.SOUTH,t.WEST],t.normal=function(t){return r[t]}}(n||(n={})),function(t){t.create=function(t,e,s){return[t,e,s]},t.offset=function(t,e,s,i){return[t[0]+e,t[1]+s,t[2]+i]},t.towards=function(e,s){return t.offset(e,...n.normal(s))}}(o||(o={}));const a={end:0,byte:1,short:2,int:3,long:4,float:5,double:6,byteArray:7,string:8,list:9,compound:10,intArray:11,longArray:12},h=["end","byte","short","int","long","float","double","byteArray","string","list","compound","intArray","longArray"];class l{constructor(t,e=!1){this.byte=this.readNum.bind(this,"getInt8",1),this.short=this.readNum.bind(this,"getInt16",2),this.int=this.readNum.bind(this,"getInt32",4),this.float=this.readNum.bind(this,"getFloat32",4),this.double=this.readNum.bind(this,"getFloat64",8),this.offset=0,this.littleEndian=e,this.arrayView=t,this.dataView=new DataView(t.buffer,t.byteOffset)}end(){return null}readNum(t,e){const s=this.dataView[t](this.offset,this.littleEndian);return this.offset+=e,s}long(){return[this.int(),this.int()]}byteArray(){const t=this.int(),e=[];for(let s=0;s<t;s++)e.push(this.byte());return e}intArray(){const t=this.int(),e=[];for(let s=0;s<t;s++)e.push(this.int());return e}longArray(){const t=this.int(),e=[];for(let s=0;s<t;s++)e.push(this.long());return e}string(){const t=this.short(),e=this.arrayView.slice(this.offset,this.offset+t);return this.offset+=t,function(t){var e,s=[];for(e=0;e<t.length;e++)0==(128&t[e])?s.push(127&t[e]):e+1<t.length&&192==(224&t[e])&&128==(192&t[e+1])?s.push((31&t[e])<<6|63&t[e+1]):e+2<t.length&&224==(240&t[e])&&128==(192&t[e+1])&&128==(192&t[e+2])?s.push((15&t[e])<<12|(63&t[e+1])<<6|63&t[e+2]):e+3<t.length&&240==(248&t[e])&&128==(192&t[e+1])&&128==(192&t[e+2])&&128==(192&t[e+3])&&s.push((7&t[e])<<18|(63&t[e+1])<<12|(63&t[e+2])<<6|63&t[e+3]);return String.fromCharCode.apply(null,s)}(e)}list(){const t=h[this.byte()],e=this.int(),s=[];for(let i=0;i<e;i++)s.push(this[t]());return{type:t,value:s}}compound(){const t={};for(;;){const e=h[this.byte()];if("end"===e)break;const s=this.string(),i=this[e]();t[s]={type:e,value:i}}return t}}class c{constructor(t=!1){this.byte=this.writeNum.bind(this,"setInt8",1),this.short=this.writeNum.bind(this,"setInt16",2),this.int=this.writeNum.bind(this,"setInt32",4),this.float=this.writeNum.bind(this,"setFloat32",4),this.double=this.writeNum.bind(this,"setFloat64",8),this.offset=0,this.littleEndian=t,this.buffer=new ArrayBuffer(1024),this.arrayView=new Uint8Array(this.buffer),this.dataView=new DataView(this.buffer)}accommodate(t){const e=this.offset+t;if(this.buffer.byteLength>=e)return;let s=this.buffer.byteLength;for(;s<e;)s*=2;const i=new ArrayBuffer(s),n=new Uint8Array(i);n.set(this.arrayView),this.offset>this.buffer.byteLength&&n.fill(0,this.buffer.byteLength,this.offset),this.buffer=i,this.dataView=new DataView(i),this.arrayView=n}getData(){return this.accommodate(0),this.arrayView.slice(0,this.offset)}end(t){}writeNum(t,e,s){this.accommodate(e),this.dataView[t](this.offset,s,this.littleEndian),this.offset+=e}long(t){this.int(t[0]),this.int(t[1])}byteArray(t){this.int(t.length),this.accommodate(t.length),this.arrayView.set(t,this.offset),this.offset+=t.length}intArray(t){this.int(t.length);for(let e=0;e<t.length;e++)this.int(t[e])}longArray(t){this.int(t.length);for(let e=0;e<t.length;e++)this.long(t[e])}string(t){const e=function(t){var e,s,i=[];for(e=0;e<t.length;e++)(s=t.charCodeAt(e))<128?i.push(s):s<2048?(i.push(192|s>>6),i.push(128|63&s)):s<65536?(i.push(224|s>>12),i.push(128|s>>6&63),i.push(128|63&s)):(i.push(240|s>>18&7),i.push(128|s>>12&63),i.push(128|s>>6&63),i.push(128|63&s));return i}(t);this.short(e.length),this.accommodate(e.length),this.arrayView.set(e,this.offset),this.offset+=e.length}list(t){this.byte(a[t.type]),this.int(t.value.length),t.value;for(let e=0;e<t.value.length;e++)this[t.type](t.value[e])}compound(t){for(const e in t)this.byte(a[t[e].type]),this.string(e),this[t[e].type](t[e].value);this.byte(a.end)}}function u(t,e){const s=new l(t,e);if(s.byte()!==a.compound)throw new Error("Top tag should be a compound");return{name:s.string(),value:s.compound()}}function d(e,s){return u(pako__WEBPACK_IMPORTED_MODULE_0__["default"].inflate(e),s)}function f(t,e){return 2===(s=new Uint8Array(t.slice(0,2))).length&&31===s[0]&&139===s[1]?{compressed:!0,result:d(t,e)}:{compressed:!1,result:u(t,e)};var s}function g(t){const e=[];for(let s=0;s<32;s+=1)for(let i=0;i<32;i+=1){const n=4*((31&s)+32*(31&i));if(0===t[n+3])continue;const r=(t[n]<<16)+(t[n+1]<<8)+t[n+2],o=(t[n+4096]<<24)+(t[n+4097]<<16)+(t[n+4098]<<8)+t[n+4099],a=4096*r,h=(t[a]<<24)+(t[a+1]<<16)+(t[a+2]<<8)+t[a+3],l=t[a+4],c=t.slice(a+5,a+4+h);e.push({x:s,z:i,timestamp:o,compression:l,data:c})}return e}function p(t,e,s){const i=x(t,e,s);switch(i.compression){case 1:case 2:i.nbt=d(i.data);break;case 3:i.nbt=u(i.data);break;default:throw new Error(`Invalid compression mode ${i.compression}`)}return i}function m(t,e){const s=new c(e);return s.byte(a.compound),s.string(t.name),s.compound(t.value),s.getData()}function v(e,s,i){const n=m(e,s);return pako__WEBPACK_IMPORTED_MODULE_0__["default"][i?"deflate":"gzip"](n)}function w(t,e,s){return e?v(t,s):m(t,s)}function b(t){let e=0;for(const s of t)e+=Math.ceil(s.data.length/4096);const s=new Uint8Array(8192+4096*e),i=new DataView(s.buffer);let n=2;for(const e of t){const t=4*((31&e.x)+32*(31&e.z)),r=Math.ceil(e.data.length/4096);i.setInt8(t,n>>16),i.setInt16(t+1,65535&n),i.setInt8(t+3,r),i.setInt32(t+4096,e.timestamp);const o=4096*n;i.setInt32(o,e.data.length+1),i.setInt8(o+4,e.compression),s.set(e.data,o+5),n+=r}return s}function P(t,e,s,i){const n=x(t,e,s);switch(n.compression){case 1:n.data=v(i);break;case 2:n.data=v(i,!1,!0);break;case 3:n.data=m(i);break;default:throw new Error(`Invalid compression mode ${n.compression}`)}return n}function x(t,e,s){const i=t.find((t=>t.x===e&&t.z===s));if(void 0===i)throw new Error(`Cannot find chunk [${e}, ${s}]`);return i}function y(t,e,s){if(!t[e])throw new Error(`Missing ${e} tag`);if(t[e].type!==s)throw new Error(`Expected ${e} to be of type ${s}, but found ${t[e].type}`);return t[e].value}function A(t,e,s,i){const n=y(t,e,"list");if(n.type!==s)throw new Error(`Expected ${e} to be a list of ${s}s, but found ${n.type}s`);if(i&&n.value.length!==i)throw new Error(`Expected ${e} to be a list of length ${i}, but found length ${n.value.length}`);return n.value}function S(t,e){try{return t()}catch(t){return e}}class B{constructor(t,e={}){this.name=t,this.properties=e}getName(){return this.name}getProperties(){return this.properties}getProperty(t){return this.properties[t]}isFluid(){return"minecraft:water"===this.name||"minecraft:lava"===this.name}equals(t){return this.name===t.name&&Object.keys(this.properties).every((e=>t.properties[e]===this.properties[e]))}toString(){return 0===Object.keys(this.properties).length?this.name:`${this.name}[${Object.entries(this.properties).map((([t,e])=>t+"="+e)).join(",")}]`}static fromNbt(t){const e=y(t.value,"Name","string"),s=S((()=>y(t.value,"Properties","compound")),{}),i=Object.keys(s).reduce(((t,e)=>Object.assign(Object.assign({},t),{[e]:y(s,e,"string")})),{});return new B(e,i)}}B.AIR=new B("minecraft:air");class E{constructor(t){this.minY=t,this.storage=Array(E.SIZE),this.palette=[B.AIR]}get minBlockY(){return this.minY<<4}index(t,e,s){return(t<<8)+(e<<4)+s}getBlockState(t,e,s){var i;const n=this.storage[this.index(t,e,s)];return null!==(i=this.palette[n])&&void 0!==i?i:B.AIR}setBlockState(t,e,s,i){let n=this.palette.findIndex((t=>t.equals(i)));-1===n&&(n=this.palette.length,this.palette.push(i)),this.storage[this.index(t,e,s)]=n}}E.WIDTH=16,E.SIZE=E.WIDTH*E.WIDTH*E.WIDTH;class C{constructor(t,e,s){this.minY=t,this.height=e,this.pos=s,this.sections=Array(this.sectionsCount).fill(null)}get maxY(){return this.minY+this.height}get minSection(){return this.minY>>4}get maxSection(){return 1+(this.maxY-1>>4)}get sectionsCount(){return this.maxSection-this.minSection}getSectionIndex(t){return(t>>4)-this.minSection}getBlockState(t){var e;const[s,i,n]=t,r=this.sections[this.getSectionIndex(i)];return null!==(e=null==r?void 0:r.getBlockState(15&s,15&i,15&n))&&void 0!==e?e:B.AIR}setBlockState(t,e){const[s,i,n]=t,r=this.getSectionIndex(i);let o=this.sections[r];if(null===o){if(e.equals(B.AIR))return;o=this.getOrCreateSection(r)}o.setBlockState(15&s,15&i,15&n,e)}getOrCreateSection(t){return null==this.sections[t]&&(this.sections[t]=new E(this.minSection+t)),this.sections[t]}}var k;!function(t){t.create=function(t,e){return[t,e]},t.fromBlockPos=function(t){return[t[0]>>4,t[2]>>4]},t.fromLong=function(t){return[4294967295&Number(t),Number(t>>BigInt(32))]},t.minBlockX=function(t){return t[0]<<4},t.minBlockZ=function(t){return t[1]<<4},t.maxBlockX=function(t){return t[0]<<19},t.maxBlockZ=function(t){return t[1]<<19}}(k||(k={}));class I{constructor(t,e=[],s=[]){this.size=t,this.palette=e,this.blocks=s,this.blocksMap=[],s.forEach((e=>{if(!this.isInside(e.pos))throw new Error(`Found block at ${e.pos} which is outside the structure bounds ${this.size}`);this.blocksMap[e.pos[0]*t[1]*t[2]+e.pos[1]*t[2]+e.pos[2]]=e}))}getSize(){return this.size}addBlock(t,e,s,i){if(!this.isInside(t))throw new Error(`Cannot add block at ${t} outside the structure bounds ${this.size}`);const n=new B(e,s);let r=this.palette.findIndex((t=>t.equals(n)));return-1===r&&(r=this.palette.length,this.palette.push(n)),this.blocks.push({pos:t,state:r,nbt:i}),this.blocksMap[t[0]*this.size[1]*this.size[2]+t[1]*this.size[2]+t[2]]={pos:t,state:r,nbt:i},this}getBlocks(){return this.blocks.map((t=>({pos:t.pos,state:this.palette[t.state],nbt:t.nbt})))}getBlock(t){if(!this.isInside(t))return null;const e=this.blocksMap[t[0]*this.size[1]*this.size[2]+t[1]*this.size[2]+t[2]];if(!e)return null;return{pos:e.pos,state:this.palette[e.state],nbt:e.nbt}}isInside(t){return t[0]>=0&&t[0]<this.size[0]&&t[1]>=0&&t[1]<this.size[1]&&t[2]>=0&&t[2]<this.size[2]}static fromNbt(t){const e=A(t.value,"size","int",3),s=A(t.value,"palette","compound").map((t=>B.fromNbt({name:"",value:t}))),i=A(t.value,"blocks","compound").map((t=>({pos:A(t,"pos","int",3),state:y(t,"state","int"),nbt:S((()=>y(t,"nbt","compound")),void 0)})));return new I(e,s,i)}}function R(t){return t*t}function F(t,e,s){return Math.max(e,Math.min(s,t))}function M(t,e,s){return e+t*(s-e)}function T(t,e,s,i,n,r){return M(e,M(t,s,i),M(t,n,r))}function N(t,e,s,i,n,r,o,a,h,l,c){return M(s,T(t,e,i,n,r,o),T(t,e,a,h,l,c))}function _(t,e,s){return s<0?t:s>1?e:M(s,t,e)}function U(t){return t*t*t*(t*(6*t-15)+10)}function D(t,e,s){let i=e-t;for(;i>0;){const e=Math.floor(i/2),n=t+e;s(n)?i=e:(t=n+1,i-=e+1)}return t}class O{constructor(t){this.xo=256*t.nextDouble(),this.yo=256*t.nextDouble(),this.zo=256*t.nextDouble(),this.p=Array(256);for(let t=0;t<256;t+=1)this.p[t]=t;for(let e=0;e<256;e+=1){const s=t.nextInt(256-e),i=this.p[e];this.p[e]=this.p[e+s],this.p[e+s]=i}}sample2D(t,e){let s,i,n;const r=(t+e)*O.F2,o=Math.floor(t+r),a=t-(o-(s=(o+(i=Math.floor(e+r)))*O.G2));let h,l;a>(n=e-(i-s))?(h=1,l=0):(h=0,l=1);const c=a-h+O.G2,u=n-l+O.G2,d=a-1+2*O.G2,f=n-1+2*O.G2,g=255&o,p=255&i,m=this.P(g+this.P(p))%12,v=this.P(g+h+this.P(p+l))%12,w=this.P(g+1+this.P(p+1))%12;return 70*(this.getCornerNoise3D(m,a,n,0,.5)+this.getCornerNoise3D(v,c,u,0,.5)+this.getCornerNoise3D(w,d,f,0,.5))}sample(t,e,s){const i=.3333333333333333*(t+e+s),n=Math.floor(t+i),r=Math.floor(e+i),o=Math.floor(s+i),a=.16666666666666666*(n+r+o),h=t-(n-a),l=e-(r-a),c=s-(o-a);let u,d,f,g,p,m;h>=l?l>=c?(u=1,d=0,f=0,g=1,p=1,m=0):h>=c?(u=1,d=0,f=0,g=1,p=0,m=1):(u=0,d=0,f=1,g=1,p=0,m=1):l<c?(u=0,d=0,f=1,g=0,p=1,m=1):h<c?(u=0,d=1,f=0,g=0,p=1,m=1):(u=0,d=1,f=0,g=1,p=1,m=0);const v=h-u+.16666666666666666,w=l-d+.16666666666666666,b=c-f+.16666666666666666,P=h-g+.3333333333333333,x=l-p+.3333333333333333,y=c-m+.3333333333333333,A=h-.5,S=l-.5,B=c-.5,E=255&n,C=255&r,k=255&o,I=this.P(E+this.P(C+this.P(k)))%12,R=this.P(E+u+this.P(C+d+this.P(k+f)))%12,F=this.P(E+g+this.P(C+p+this.P(k+m)))%12,M=this.P(E+1+this.P(C+1+this.P(k+1)))%12;return 32*(this.getCornerNoise3D(I,h,l,c,.6)+this.getCornerNoise3D(R,v,w,b,.6)+this.getCornerNoise3D(F,P,x,y,.6)+this.getCornerNoise3D(M,A,S,B,.6))}P(t){return this.p[255&t]}getCornerNoise3D(t,e,s,i,n){let r,o=n-e*e-s*s-i*i;return o<0?r=0:(o*=o,r=o*o*O.gradDot(t,e,s,i)),r}static gradDot(t,e,s,i){const n=O.GRADIENT[15&t];return n[0]*e+n[1]*s+n[2]*i}}O.GRADIENT=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1],[1,1,0],[0,-1,1],[-1,1,0],[0,-1,-1]],O.F2=.5*(Math.sqrt(3)-1),O.G2=(3-Math.sqrt(3))/6;class L{constructor(t){this.xo=256*t.nextDouble(),this.yo=256*t.nextDouble(),this.zo=256*t.nextDouble(),this.p=Array(256);for(let t=0;t<256;t+=1)this.p[t]=t>127?t-256:t;for(let e=0;e<256;e+=1){const s=t.nextInt(256-e),i=this.p[e];this.p[e]=this.p[e+s],this.p[e+s]=i}}sample(t,e,s,i=0,n=0){const r=t+this.xo,o=e+this.yo,a=s+this.zo,h=Math.floor(r),l=Math.floor(o),c=Math.floor(a),u=r-h,d=o-l,f=a-c;let g=0;if(0!==i){const t=n>=0&&n<d?n:d;g=Math.floor(t/i+1e-7)*i}return this.sampleAndLerp(h,l,c,u,d-g,f,d)}sampleAndLerp(t,e,s,i,n,r,o){const a=this.P(t),h=this.P(t+1),l=this.P(a+e),c=this.P(a+e+1),u=this.P(h+e),d=this.P(h+e+1),f=O.gradDot(this.P(l+s),i,n,r),g=O.gradDot(this.P(u+s),i-1,n,r),p=O.gradDot(this.P(c+s),i,n-1,r),m=O.gradDot(this.P(d+s),i-1,n-1,r),v=O.gradDot(this.P(l+s+1),i,n,r-1),w=O.gradDot(this.P(u+s+1),i-1,n,r-1),b=O.gradDot(this.P(c+s+1),i,n-1,r-1),P=O.gradDot(this.P(d+s+1),i-1,n-1,r-1);return N(U(i),U(o),U(r),f,g,p,m,v,w,b,P)}P(t){return 255&this.p[255&t]}}class V{constructor(t,e,s){if(1-e<s.length)throw new Error("Positive octaves are not allowed");this.noiseLevels=Array(s.length);for(let i=-e;i>=0;i-=1)i<s.length&&0!==s[i]?this.noiseLevels[i]=new L(t):t.consume(262);this.amplitudes=s,this.lowestFreqInputFactor=Math.pow(2,e),this.lowestFreqValueFactor=Math.pow(2,s.length-1)/(Math.pow(2,s.length)-1)}sample(t,e,s,i=0,n=0,r=!1){let o=0,a=this.lowestFreqInputFactor,h=this.lowestFreqValueFactor;for(let l=0;l<this.noiseLevels.length;l+=1){const c=this.noiseLevels[l];c&&(o+=this.amplitudes[l]*h*c.sample(V.wrap(t*a),r?-c.yo:V.wrap(e*a),V.wrap(s*a),i*a,n*a)),a*=2,h/=2}return o}getOctaveNoise(t){return this.noiseLevels[this.noiseLevels.length-1-t]}static wrap(t){return t-33554432*Math.floor(t/33554432+.5)}}class z{constructor(t){this.minLimitNoise=new V(t,-15,[1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0]),this.maxLimitNoise=new V(t,-15,[1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0]),this.mainNoise=new V(t,-7,[1,1,1,1,1,0,0,0])}sample(t,e,s,i,n,r,o){let a,h=0,l=1;for(let i=0;i<8;i+=1){if(a=this.mainNoise.getOctaveNoise(i),a){const i=r*l,n=o*l,c=V.wrap(t*i),u=V.wrap(e*n),d=V.wrap(s*i);h+=a.sample(c,u,d,n,e*n)/l}l/=2}h=(h/10+1)/2,l=1;let c=0,u=0;for(let r=0;r<16;r+=1){const o=i*l,d=n*l,f=V.wrap(t*o),g=V.wrap(e*d),p=V.wrap(s*o);h<1&&(a=this.minLimitNoise.getOctaveNoise(r))&&(c+=a.sample(f,g,p,d,e*d)/l),h>0&&(a=this.maxLimitNoise.getOctaveNoise(r))&&(u+=a.sample(f,g,p,d,e*d)/l),l/=2}return _(c/512,u/512,h)}}class Y{constructor(t,e,s){this.first=new V(t,e,s),this.second=new V(t,e,s);let i=1/0,n=-1/0;for(let t=0;t<s.length;t+=1)0!==s[t]&&(i=Math.min(i,t),n=Math.max(n,t));const r=.1*(1+1/(n-i+1));this.valueFactor=1/6/r}sample(t,e,s){const i=t*Y.INPUT_FACTOR,n=e*Y.INPUT_FACTOR,r=s*Y.INPUT_FACTOR;return(this.first.sample(t,e,s)+this.second.sample(i,n,r))*this.valueFactor}}Y.INPUT_FACTOR=1.0181268882175227;class X{constructor(t,e){const s=e[e.length-1],i=-e[0]+s+1,n=new Set(e),r=new O(t);this.noiseLevels=Array(i),s>=0&&s<i&&n.has(0)&&(this.noiseLevels[s]=r);for(let e=s+1;e<i;e+=1)e>=0&&n.has(s-e)?this.noiseLevels[e]=new O(t):t.consume(262);if(s>0)throw new Error("Positive octaves are not allowed");this.highestFreqInputFactor=Math.pow(2,s),this.highestFreqValueFactor=1/(Math.pow(2,i)-1)}sample(t,e,s){let i=0,n=this.highestFreqInputFactor,r=this.highestFreqValueFactor;for(let o=0;o<this.noiseLevels.length;o+=1){const a=this.noiseLevels[o];a&&(i+=r*a.sample2D(t*n+(s?a.xo:0),e*n+(s?a.yo:0))),n/=2,r*=2}return i}}class H{constructor(t){this.seed=BigInt(0),this.setSeed(t)}setSeed(t){this.seed=t^H.MULTIPLIER&H.MODULUS_MASK}advance(){this.seed=this.seed*H.MULTIPLIER+H.INCREMENT&H.MODULUS_MASK}consume(t){for(let e=0;e<t;e+=1)this.advance()}next(t){this.advance();const e=Number(this.seed>>BigInt(H.MODULUS_BITS-t));return e>2147483647?e-4294967296:e}nextInt(t){if(void 0===t)return this.next(32);if(0==(t&t-1))return Number(BigInt(t)*BigInt(this.next(31))>>BigInt(31));let e,s;for(;(e=this.next(31))-(s=e%t)+(t-1)<0;);return s}nextFloat(){return this.next(24)*H.FLOAT_MULTIPLIER}nextDouble(){const t=this.next(30);return this.advance(),t*H.DOUBLE_MULTIPLIER}}H.MODULUS_BITS=48,H.MODULUS_MASK=BigInt("281474976710655"),H.MULTIPLIER=BigInt("25214903917"),H.INCREMENT=BigInt("11"),H.FLOAT_MULTIPLIER=1/Math.pow(2,24),H.DOUBLE_MULTIPLIER=1/Math.pow(2,30);class W extends H{constructor(){super(...arguments),this.count=0}getCount(){return this.count}next(t){return this.count+=1,super.next(t)}}class Z{constructor(t,e,s=[],i=[],n=[]){this.name=t,this.coordinate=e,this.locations=s,this.values=i,this.derivatives=n}apply(t){const e=this.coordinate(t),s=D(0,this.locations.length,(t=>e<this.locations[t]))-1,i=this.locations.length-1;if(s<0)return this.values[0](t)+this.derivatives[0]*(e-this.locations[0]);if(s===i)return this.values[i](t)+this.derivatives[i]*(e-this.locations[i]);const n=this.locations[s],r=this.locations[s+1],o=this.derivatives[s],a=this.derivatives[s+1],h=(e-n)/(r-n),l=this.values[s](t),c=this.values[s+1](t),u=o*(r-n)-(c-l),d=-a*(r-n)+(c-l);return M(h,l,c)+h*(1-h)*M(h,u,d)}addPoint(t,e,s=0){return this.locations.push(t),this.values.push("number"==typeof e?()=>e:e.apply.bind(e)),this.derivatives.push(s),this}}new Z("a",(()=>1),[],[],[]);const j=t=>[(t>>16&255)/256,(t>>8&255)/256,(255&t)/256],$=[124/256,189/256,107/256],G=j(6396257),q=j(8431445),K=j(4764952),J=j(4159204),Q=j(8431445),tt=j(2129968),et=t=>[t/8,1-t/32,64*t],st={large_fern:()=>$,tall_grass:()=>$,grass_block:()=>$,fern:()=>$,grass:()=>$,potted_fern:()=>$,spruce_leaves:()=>G,birch_leaves:()=>q,oak_leaves:()=>K,jungle_leaves:()=>K,acacia_leaves:()=>K,dark_oak_leaves:()=>K,vine:()=>K,water:()=>J,bubble_column:()=>J,cauldron:()=>J,redstone_wire:t=>{var e;return(t=>{const e=t/15;return[.6*e+(e>0?.4:.3),F(e*e*.7-.5,0,1),F(e*e*.6-.7,0,1)]})(parseInt(null!==(e=t.power)&&void 0!==e?e:"0"))},sugar_cane:()=>$,attached_melon_stem:()=>Q,attached_pumpkin_stem:()=>Q,melon_stem:t=>{var e;return et(parseInt(null!==(e=t.age)&&void 0!==e?e:"0"))},pumpkin_stem:t=>{var e;return et(parseInt(null!==(e=t.age)&&void 0!==e?e:"0"))},lily_pad:()=>tt};var it;function nt(...t){let e=0;for(const s of t)e+=s.length;const s=new Float32Array(e);let i=0;for(const e of t)s.set(e,i),i+=e.length;return s}function rt(t,s){const i=gl_matrix__WEBPACK_IMPORTED_MODULE_1__.create();for(let n=0;n<t.length;n+=3)i[0]=t[n],i[1]=t[n+1],i[2]=t[n+2],gl_matrix__WEBPACK_IMPORTED_MODULE_1__.transformMat4(i,i,s),t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2]}!function(t){t.rotate=function(t,e,s){let{up:i,down:n,north:r,east:o,south:a,west:h}=t;switch(s){case 90:[r,o,a,h]=[o,a,h,r];break;case 180:[r,o,a,h]=[a,h,r,o];break;case 270:[r,o,a,h]=[h,r,o,a]}switch(e){case 90:[i,r,n,a]=[r,n,a,i];break;case 180:[i,r,n,a]=[n,a,i,r];break;case 270:[i,r,n,a]=[a,i,r,n]}return{up:i,down:n,north:r,east:o,south:a,west:h}}}(it||(it={}));class ot{constructor(t,e,s){this.id=t,this.variants=e,this.multipart=s,this.variants=e}getModelVariants(t){if(this.variants){const e=Object.keys(this.variants).filter((e=>this.matchesVariant(e,t)));if(0===e.length)return[];const s=this.variants[e[0]];return[Array.isArray(s)?s[0]:s]}if(this.multipart){return this.multipart.filter((e=>!e.when||this.matchesCase(e.when,t))).map((t=>Array.isArray(t.apply)?t.apply[0]:t.apply))}return[]}getBuffers(t,e,n,r,o,a){var h,l,c,u;const d=this.getModelVariants(e),f=[],g=[],p=[],m=[];for(const v of d){const d=it.rotate(a,null!==(h=v.x)&&void 0!==h?h:0,null!==(l=v.y)&&void 0!==l?l:0),w=r.getBlockModel(v.model).getBuffers(t,e,n,o,d);if(v.x||v.y){const t=gl_matrix__WEBPACK_IMPORTED_MODULE_2__.create();gl_matrix__WEBPACK_IMPORTED_MODULE_2__.identity(t),gl_matrix__WEBPACK_IMPORTED_MODULE_2__.translate(t,t,[8,8,8]),gl_matrix__WEBPACK_IMPORTED_MODULE_2__.rotateY(t,t,-gl_matrix__WEBPACK_IMPORTED_MODULE_3__.toRadian(null!==(c=v.y)&&void 0!==c?c:0)),gl_matrix__WEBPACK_IMPORTED_MODULE_2__.rotateX(t,t,-gl_matrix__WEBPACK_IMPORTED_MODULE_3__.toRadian(null!==(u=v.x)&&void 0!==u?u:0)),gl_matrix__WEBPACK_IMPORTED_MODULE_2__.translate(t,t,[-8,-8,-8]),rt(w.position,t)}f.push(w.position),g.push(...w.texCoord),p.push(...w.tintColor),m.push(...w.index),o+=w.texCoord.length/2}const v=gl_matrix__WEBPACK_IMPORTED_MODULE_2__.create();gl_matrix__WEBPACK_IMPORTED_MODULE_2__.identity(v),gl_matrix__WEBPACK_IMPORTED_MODULE_2__.scale(v,v,[.0625,.0625,.0625]);const w=nt(...f);return rt(w,v),{position:w,texCoord:g,tintColor:p,index:m}}matchesVariant(t,e){return t.split(",").every((t=>{const[s,i]=t.split("=");return e[s]===i}))}matchesCase(t,e){if(Array.isArray(t.OR))return t.OR.some((t=>this.matchesCase(t,e)));const s=t;return Object.keys(s).every((t=>s[t].split("|").includes(e[t])))}static fromJson(t,e){return new ot(t,e.variants,e.multipart)}}const at={0:[0,3,2,3,2,1,0,1],90:[2,3,2,1,0,1,0,3],180:[2,1,0,1,0,3,2,3],270:[0,1,0,3,2,3,2,1]},ht={x:[1,0,0],y:[0,1,0],z:[0,0,1]},lt=1.41421356237,ct={x:[1,lt,lt],y:[lt,1,lt],z:[lt,lt,1]};class ut{constructor(t,e,s,i){this.id=t,this.parent=e,this.textures=s,this.elements=i,this.flattened=!1}getBuffers(t,e,s,i,n){var r;const o=[],a=[],h=[],l=[];for(const c of null!==(r=this.elements)&&void 0!==r?r:[]){const r=this.getElementBuffers(t,e,c,i,s,n);o.push(r.position),a.push(...r.texCoord),h.push(...r.tintColor),l.push(...r.index),i+=r.texCoord.length/2}return{position:nt(...o),texCoord:a,tintColor:h,index:l}}getElementBuffers(t,n,r,o,a,h){var l,c,u,d,f,g,p,m,v,w,b,P;const x=r.from[0],y=r.from[1],A=r.from[2],S=r.to[0],B=r.to[1],E=r.to[2],C=[],k=[],I=[],R=[],F=(e,s,i)=>{var r,h,l,c,u,d,f,g,p,m,v,w;const[b,P,x,y]=a.getTextureUV(this.getTexture(e.texture)),A=(x-b)/16,S=(y-P)/16,B=A/16,E=S/16;s[0]=(null!==(h=null===(r=e.uv)||void 0===r?void 0:r[0])&&void 0!==h?h:s[0])*A+B,s[1]=(null!==(c=null===(l=e.uv)||void 0===l?void 0:l[1])&&void 0!==c?c:s[1])*S+E,s[2]=(null!==(d=null===(u=e.uv)||void 0===u?void 0:u[2])&&void 0!==d?d:s[2])*A-B,s[3]=(null!==(g=null===(f=e.uv)||void 0===f?void 0:f[3])&&void 0!==g?g:s[3])*S-E;const F=at[null!==(p=e.rotation)&&void 0!==p?p:0];k.push(b+s[F[0]],P+s[F[1]],b+s[F[2]],P+s[F[3]],b+s[F[4]],P+s[F[5]],b+s[F[6]],P+s[F[7]]);const M=(null!==(m=e.tintindex)&&void 0!==m?m:-1)>=0&&null!==(w=null===(v=st[t.slice(10)])||void 0===v?void 0:v.call(st,n))&&void 0!==w?w:[1,1,1];I.push(...M,...M,...M,...M),C.push(...i),R.push(o,o+1,o+2,o,o+2,o+3),o+=4};!(null===(c=null===(l=r.faces)||void 0===l?void 0:l.up)||void 0===c?void 0:c.texture)||r.faces.up.cullface&&h[r.faces.up.cullface]||F(r.faces.up,[x,16-E,S,16-A],[x,B,E,S,B,E,S,B,A,x,B,A]),!(null===(d=null===(u=r.faces)||void 0===u?void 0:u.down)||void 0===d?void 0:d.texture)||r.faces.down.cullface&&h[r.faces.down.cullface]||F(r.faces.down,[16-E,16-S,16-A,16-x],[x,y,A,S,y,A,S,y,E,x,y,E]),!(null===(g=null===(f=r.faces)||void 0===f?void 0:f.south)||void 0===g?void 0:g.texture)||r.faces.south.cullface&&h[r.faces.south.cullface]||F(r.faces.south,[x,16-B,S,16-y],[x,y,E,S,y,E,S,B,E,x,B,E]),!(null===(m=null===(p=r.faces)||void 0===p?void 0:p.north)||void 0===m?void 0:m.texture)||r.faces.north.cullface&&h[r.faces.north.cullface]||F(r.faces.north,[16-S,16-B,16-x,16-y],[S,y,A,x,y,A,x,B,A,S,B,A]),!(null===(w=null===(v=r.faces)||void 0===v?void 0:v.east)||void 0===w?void 0:w.texture)||r.faces.east.cullface&&h[r.faces.east.cullface]||F(r.faces.east,[16-E,16-B,16-A,16-y],[S,y,E,S,y,A,S,B,A,S,B,E]),!(null===(P=null===(b=r.faces)||void 0===b?void 0:b.west)||void 0===P?void 0:P.texture)||r.faces.west.cullface&&h[r.faces.west.cullface]||F(r.faces.west,[A,16-B,E,16-y],[x,y,A,x,y,E,x,B,E,x,B,A]);const M=gl_matrix__WEBPACK_IMPORTED_MODULE_2__.create();if(gl_matrix__WEBPACK_IMPORTED_MODULE_2__.identity(M),r.rotation){const t=gl_matrix__WEBPACK_IMPORTED_MODULE_1__.fromValues(...r.rotation.origin);gl_matrix__WEBPACK_IMPORTED_MODULE_2__.translate(M,M,t),gl_matrix__WEBPACK_IMPORTED_MODULE_2__.rotate(M,M,gl_matrix__WEBPACK_IMPORTED_MODULE_3__.toRadian(r.rotation.angle),ht[r.rotation.axis]),r.rotation.rescale&&gl_matrix__WEBPACK_IMPORTED_MODULE_2__.scale(M,M,ct[r.rotation.axis]),gl_matrix__WEBPACK_IMPORTED_MODULE_1__.negate(t,t),gl_matrix__WEBPACK_IMPORTED_MODULE_2__.translate(M,M,t)}const T=new Float32Array(C);return rt(T,M),{position:T,texCoord:k,tintColor:I,index:R}}getTexture(t){for(var e,s;t.startsWith("#");)t=null!==(s=null===(e=this.textures)||void 0===e?void 0:e[t.slice(1)])&&void 0!==s?s:"";return t.startsWith("minecraft:")||(t="minecraft:"+t),t}flatten(t){var e;if(!this.flattened&&this.parent){const s=t.getBlockModel(this.parent);if(!s)return console.warn(`parent ${this.parent} does not exist!`),void(this.flattened=!0);s.flatten(t),this.elements||(this.elements=s.elements),this.textures||(this.textures={}),Object.keys(null!==(e=s.textures)&&void 0!==e?e:{}).forEach((t=>{this.textures[t]||(this.textures[t]=s.textures[t])})),this.flattened=!0}}static fromJson(t,e){let s=e.parent;return s&&!s.startsWith("minecraft:")&&(s="minecraft:"+s),new ut(t,s,e.textures,e.elements)}}class dt{constructor(t,e,s){this.gl=t,this.program=this.initShaderProgram(e,s)}getProgram(){return this.program}initShaderProgram(t,e){const s=this.loadShader(this.gl.VERTEX_SHADER,t),i=this.loadShader(this.gl.FRAGMENT_SHADER,e),n=this.gl.createProgram();if(this.gl.attachShader(n,s),this.gl.attachShader(n,i),this.gl.linkProgram(n),!this.gl.getProgramParameter(n,this.gl.LINK_STATUS))throw new Error(`Unable to link shader program: ${this.gl.getProgramInfoLog(n)}`);return n}loadShader(t,e){const s=this.gl.createShader(t);if(this.gl.shaderSource(s,e),this.gl.compileShader(s),!this.gl.getShaderParameter(s,this.gl.COMPILE_STATUS)){const e=new Error(`Compiling ${t===this.gl.VERTEX_SHADER?"vertex":"fragment"} shader: ${this.gl.getShaderInfoLog(s)}`);throw this.gl.deleteShader(s),e}return s}}function ft(t,e,s,i,n){const r=new ot("",{"":{model:""}},void 0),o={getBlockModel:()=>n};return n.flatten(o),r.getBuffers(t,{},e,o,s,i)}function gt(t,e,s,i,r,o){const a=r.up?16:[14.2,12.5,10.5,9,7,5.3,3.7,1.9,16,16,16,16,16,16,16,16][s];return ft(`minecraft:${t}`,i,e,r,new ut("","",{still:`minecraft:block/${t}_still`,flow:`minecraft:block/${t}_flow`},[{from:[0,0,0],to:[16,a,16],faces:{up:{texture:"#still",tintindex:o,cullface:n.UP},down:{texture:"#still",tintindex:o,cullface:n.DOWN},north:{texture:"#flow",tintindex:o,cullface:n.NORTH},east:{texture:"#flow",tintindex:o,cullface:n.EAST},south:{texture:"#flow",tintindex:o,cullface:n.SOUTH},west:{texture:"#flow",tintindex:o,cullface:n.WEST}}}]))}const pt={"minecraft:water":(t,e,s,i)=>gt("water",t,parseInt(e.level),s,i,0),"minecraft:lava":(t,e,s,i)=>gt("lava",t,parseInt(e.level),s,i),"minecraft:chest":(t,e,s)=>function(t,e,s,i){return ft("minecraft:chest",i,t,{},new ut("","",{0:"minecraft:block/chest"},[{from:[1,0,1],to:[15,14,15],faces:{up:{texture:"#0"},down:{texture:"#0"},north:{texture:"#0"},east:{texture:"#0"},south:{texture:"#0"},west:{texture:"#0"}}}]))}(t,e.facing,e.type,s)},mt=new Set(Object.keys(pt));class vt{constructor(t,e,s,i){var n,r;this.gl=t,this.structure=e,this.resources=s,this.chunks=[],(null==i?void 0:i.facesPerBuffer)&&console.warn("webgl render warning: facesPerBuffer option has been removed in favor of chunkSize"),this.chunkSize=null!==(n=null==i?void 0:i.chunkSize)&&void 0!==n?n:16,this.useInvisibleBlockBuffer=null===(r=null==i?void 0:i.useInvisibleBlockBuffer)||void 0===r||r,this.shaderProgram=new dt(t,"\n  attribute vec4 vertPos;\n  attribute vec2 texCoord;\n  attribute vec3 tintColor;\n  attribute vec3 normal;\n\n  uniform mat4 mView;\n  uniform mat4 mProj;\n\n  varying highp vec2 vTexCoord;\n  varying highp vec3 vTintColor;\n  varying highp float vLighting;\n\n  void main(void) {\n    gl_Position = mProj * mView * vertPos;\n    vTexCoord = texCoord;\n    vTintColor = tintColor;\n    vLighting = normal.y * 0.2 + abs(normal.z) * 0.1 + 0.8;\n  }\n","\n  precision highp float;\n  varying highp vec2 vTexCoord;\n  varying highp vec3 vTintColor;\n  varying highp float vLighting;\n\n  uniform sampler2D sampler;\n\n  void main(void) {\n    vec4 texColor = texture2D(sampler, vTexCoord);\n    if(texColor.a < 0.01) discard;\n    gl_FragColor = vec4(texColor.xyz * vTintColor * vLighting, texColor.a);\n  }\n").getProgram(),this.gridShaderProgram=new dt(t,"\n  attribute vec4 vertPos;\n  attribute vec3 vertColor;\n\n  uniform mat4 mView;\n  uniform mat4 mProj;\n\n  varying highp vec3 vColor;\n\n  void main(void) {\n    gl_Position = mProj * mView * vertPos;\n    vColor = vertColor;\n  }\n","\n  precision highp float;\n  varying highp vec3 vColor;\n\n  void main(void) {\n    gl_FragColor = vec4(vColor, 1.0);\n  }\n").getProgram(),this.colorShaderProgram=new dt(t,"\n  attribute vec4 vertPos;\n  attribute vec3 blockPos;\n\n  uniform mat4 mView;\n  uniform mat4 mProj;\n\n  varying highp vec3 vColor;\n\n  void main(void) {\n    gl_Position = mProj * mView * vertPos;\n    vColor = blockPos / 256.0;\n  }\n","\n  precision highp float;\n  varying highp vec3 vColor;\n\n  void main(void) {\n    gl_FragColor = vec4(vColor, 1.0);\n  }\n").getProgram(),this.updateStructureBuffers(),this.gridBuffers=this.getGridBuffers(),this.outlineBuffers=this.getOutlineBuffers(),this.invisibleBlockBuffers=this.getInvisibleBlockBuffers(),this.atlasTexture=this.getBlockTexture(),this.projMatrix=this.getPerspective(),this.activeShader=this.shaderProgram,this.initialize()}setStructure(t){this.structure=t,this.updateStructureBuffers(),this.gridBuffers=this.getGridBuffers(),this.invisibleBlockBuffers=this.getInvisibleBlockBuffers()}initialize(){this.gl.enable(this.gl.DEPTH_TEST),this.gl.depthFunc(this.gl.LEQUAL),this.gl.enable(this.gl.BLEND),this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA),this.gl.enable(this.gl.CULL_FACE),this.gl.cullFace(this.gl.BACK)}getBlockTexture(){const t=this.gl.createTexture();return this.gl.bindTexture(this.gl.TEXTURE_2D,t),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,this.gl.RGBA,this.gl.UNSIGNED_BYTE,this.resources.getTextureAtlas()),this.gl.generateMipmap(this.gl.TEXTURE_2D),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MAG_FILTER,this.gl.NEAREST),t}getPerspective(){const t=70*Math.PI/180,e=this.gl.canvas.clientWidth/this.gl.canvas.clientHeight,i=gl_matrix__WEBPACK_IMPORTED_MODULE_2__.create();return gl_matrix__WEBPACK_IMPORTED_MODULE_2__.perspective(i,t,e,.1,500),i}getChunk(t){const e=2*Math.abs(t[0])+(t[0]<0?1:0),s=2*Math.abs(t[1])+(t[1]<0?1:0),i=2*Math.abs(t[2])+(t[2]<0?1:0);return this.chunks[e]||(this.chunks[e]=[]),this.chunks[e][s]||(this.chunks[e][s]=[]),this.chunks[e][s][i]||(this.chunks[e][s][i]={positions:[],textureCoordinates:[],tintColors:[],blockPositions:[],normals:[],indices:[],indexOffset:0}),this.chunks[e][s][i]}updateStructureBuffers(t){var i;const r=(t,i,n)=>{const r=gl_matrix__WEBPACK_IMPORTED_MODULE_2__.create();gl_matrix__WEBPACK_IMPORTED_MODULE_2__.translate(r,r,i),rt(t.position,r),n.positions.push(t.position),n.textureCoordinates.push(...t.texCoord),n.tintColors.push(...t.tintColor);for(let s=0;s<t.position.length;s+=12){const i=gl_matrix__WEBPACK_IMPORTED_MODULE_1__.fromValues(t.position[s],t.position[s+1],t.position[s+2]),r=gl_matrix__WEBPACK_IMPORTED_MODULE_1__.fromValues(t.position[s+3],t.position[s+4],t.position[s+5]),o=gl_matrix__WEBPACK_IMPORTED_MODULE_1__.fromValues(t.position[s+6],t.position[s+7],t.position[s+8]);gl_matrix__WEBPACK_IMPORTED_MODULE_1__.subtract(r,r,i),gl_matrix__WEBPACK_IMPORTED_MODULE_1__.subtract(o,o,i),gl_matrix__WEBPACK_IMPORTED_MODULE_1__.cross(r,r,o),gl_matrix__WEBPACK_IMPORTED_MODULE_1__.normalize(r,r),n.normals.push(...r,...r,...r,...r)}for(let e=0;e<t.texCoord.length/2;e+=1)n.blockPositions.push(...i);n.indices.push(...t.index),n.indexOffset+=t.texCoord.length/2},o=t=>{t.positions=[],t.textureCoordinates=[],t.tintColors=[],t.blockPositions=[],t.normals=[],t.indices=[],t.indexOffset=0},a=t=>{t.buffer?(this.updateBuffer(t.buffer.position,this.gl.ARRAY_BUFFER,nt(...t.positions)),this.updateBuffer(t.buffer.texCoord,this.gl.ARRAY_BUFFER,new Float32Array(t.textureCoordinates)),this.updateBuffer(t.buffer.tintColor,this.gl.ARRAY_BUFFER,new Float32Array(t.tintColors)),this.updateBuffer(t.buffer.normal,this.gl.ARRAY_BUFFER,new Float32Array(t.normals)),this.updateBuffer(t.buffer.blockPos,this.gl.ARRAY_BUFFER,new Float32Array(t.blockPositions)),this.updateBuffer(t.buffer.index,this.gl.ELEMENT_ARRAY_BUFFER,new Uint16Array(t.indices)),t.buffer.length=t.indices.length):t.buffer={position:this.createBuffer(this.gl.ARRAY_BUFFER,nt(...t.positions)),texCoord:this.createBuffer(this.gl.ARRAY_BUFFER,new Float32Array(t.textureCoordinates)),tintColor:this.createBuffer(this.gl.ARRAY_BUFFER,new Float32Array(t.tintColors)),blockPos:this.createBuffer(this.gl.ARRAY_BUFFER,new Float32Array(t.blockPositions)),normal:this.createBuffer(this.gl.ARRAY_BUFFER,new Float32Array(t.normals)),index:this.createBuffer(this.gl.ELEMENT_ARRAY_BUFFER,new Uint16Array(t.indices)),length:t.indices.length}};let h;t?t.forEach((t=>{const e=this.getChunk(t);o(e)})):this.chunks.forEach((t=>t.forEach((t=>t.forEach((t=>{o(t)}))))));for(const s of this.structure.getBlocks()){const o=s.state.getName(),a=s.state.getProperties(),l=null!==(i=this.resources.getDefaultBlockProperties(o))&&void 0!==i?i:{};Object.entries(l).forEach((([t,e])=>{a[t]||(a[t]=e)}));const c=[Math.floor(s.pos[0]/this.chunkSize),Math.floor(s.pos[1]/this.chunkSize),Math.floor(s.pos[2]/this.chunkSize)];if(t&&!t.some((t=>gl_matrix__WEBPACK_IMPORTED_MODULE_1__.equals(t,c))))continue;const u=this.getChunk(c);try{const t=this.resources.getBlockDefinition(o),e={up:this.needsCull(s,n.UP),down:this.needsCull(s,n.DOWN),west:this.needsCull(s,n.WEST),east:this.needsCull(s,n.EAST),north:this.needsCull(s,n.NORTH),south:this.needsCull(s,n.SOUTH)};t&&(h=t.getBuffers(o,a,this.resources,this.resources,u.indexOffset,e),r(h,s.pos,u)),mt.has(o)&&(h=pt[o](u.indexOffset,a,this.resources,e),r(h,s.pos,u))}catch(t){console.error(`Error rendering block ${o}`,t)}}t?t.forEach((t=>{const e=this.getChunk(t);a(e)})):this.chunks.forEach((t=>t.forEach((t=>t.forEach((t=>{a(t)}))))))}needsCull(t,e){var s,i;const r=null===(s=this.structure.getBlock(o.towards(t.pos,e)))||void 0===s?void 0:s.state;return!!r&&((null===(i=this.resources.getBlockFlags(r.getName()))||void 0===i?void 0:i.opaque)?!(e===n.UP&&t.state.isFluid()):t.state.isFluid()&&r.isFluid())}getGridBuffers(){const[t,e,s]=this.structure.getSize(),i=[],n=[];i.push(0,0,0,t,0,0),n.push(1,0,0,1,0,0),i.push(0,0,0,0,0,s),n.push(0,0,1,0,0,1),i.push(0,0,0,0,e,0),i.push(t,0,0,t,e,0),i.push(0,0,s,0,e,s),i.push(t,0,s,t,e,s),i.push(0,e,0,0,e,s),i.push(t,e,0,t,e,s),i.push(0,e,0,t,e,0),i.push(0,e,s,t,e,s);for(let e=1;e<=t;e+=1)i.push(e,0,0,e,0,s);for(let e=1;e<=s;e+=1)i.push(0,0,e,t,0,e);for(let e=0;e<8+t+s;e+=1)n.push(.8,.8,.8,.8,.8,.8);return{position:this.createBuffer(this.gl.ARRAY_BUFFER,new Float32Array(i)),color:this.createBuffer(this.gl.ARRAY_BUFFER,new Float32Array(n)),length:i.length/3}}getOutlineBuffers(){const t=[],e=[];return this.addCube(t,e,[1,1,1],[0,0,0],[1,1,1]),{position:this.createBuffer(this.gl.ARRAY_BUFFER,new Float32Array(t)),color:this.createBuffer(this.gl.ARRAY_BUFFER,new Float32Array(e)),length:t.length/3}}getInvisibleBlockBuffers(){if(!this.useInvisibleBlockBuffer)return;const t=this.structure.getSize(),e=[],s=[];for(let i=0;i<t[0];i+=1)for(let n=0;n<t[1];n+=1)for(let r=0;r<t[2];r+=1){const t=this.structure.getBlock([i,n,r]);void 0!==t&&(null===t?this.addCube(e,s,[1,.25,.25],[i+.4375,n+.4375,r+.4375],[i+.5625,n+.5625,r+.5625]):"minecraft:air"===t.state.getName()?this.addCube(e,s,[.5,.5,1],[i+.375,n+.375,r+.375],[i+.625,n+.625,r+.625]):"minecraft:cave_air"===t.state.getName()&&this.addCube(e,s,[.5,1,.5],[i+.375,n+.375,r+.375],[i+.625,n+.625,r+.625]))}return{position:this.createBuffer(this.gl.ARRAY_BUFFER,new Float32Array(e)),color:this.createBuffer(this.gl.ARRAY_BUFFER,new Float32Array(s)),length:e.length/3}}addCube(t,e,s,i,n){t.push(i[0],i[1],i[2],i[0],i[1],n[2]),t.push(n[0],i[1],i[2],n[0],i[1],n[2]),t.push(i[0],i[1],i[2],n[0],i[1],i[2]),t.push(i[0],i[1],n[2],n[0],i[1],n[2]),t.push(i[0],i[1],i[2],i[0],n[1],i[2]),t.push(n[0],i[1],i[2],n[0],n[1],i[2]),t.push(i[0],i[1],n[2],i[0],n[1],n[2]),t.push(n[0],i[1],n[2],n[0],n[1],n[2]),t.push(i[0],n[1],i[2],i[0],n[1],n[2]),t.push(n[0],n[1],i[2],n[0],n[1],n[2]),t.push(i[0],n[1],i[2],n[0],n[1],i[2]),t.push(i[0],n[1],n[2],n[0],n[1],n[2]);for(let t=0;t<24;t+=1)e.push(...s)}createBuffer(t,e){const s=this.gl.createBuffer();return this.gl.bindBuffer(t,s),this.gl.bufferData(t,e,this.gl.DYNAMIC_DRAW),s}updateBuffer(t,e,s){this.gl.bindBuffer(e,t),this.gl.bufferData(e,s,this.gl.STATIC_DRAW)}drawGrid(t){this.setShader(this.gridShaderProgram),this.setVertexAttr("vertPos",3,this.gridBuffers.position),this.setVertexAttr("vertColor",3,this.gridBuffers.color),this.setUniform("mView",t),this.setUniform("mProj",this.projMatrix),this.gl.drawArrays(this.gl.LINES,0,this.gridBuffers.length)}drawInvisibleBlocks(t){this.useInvisibleBlockBuffer&&(this.setShader(this.gridShaderProgram),this.setVertexAttr("vertPos",3,this.invisibleBlockBuffers.position),this.setVertexAttr("vertColor",3,this.invisibleBlockBuffers.color),this.setUniform("mView",t),this.setUniform("mProj",this.projMatrix),this.gl.drawArrays(this.gl.LINES,0,this.invisibleBlockBuffers.length))}drawStructure(t){this.setShader(this.shaderProgram),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.atlasTexture),this.setUniform("mView",t),this.setUniform("mProj",this.projMatrix),this.chunks.forEach((t=>{t.forEach((t=>{t.forEach((t=>{t.buffer&&(this.setVertexAttr("vertPos",3,t.buffer.position),this.setVertexAttr("texCoord",2,t.buffer.texCoord),this.setVertexAttr("tintColor",3,t.buffer.tintColor),this.setVertexAttr("normal",3,t.buffer.normal),this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,t.buffer.index),this.gl.drawElements(this.gl.TRIANGLES,t.buffer.length,this.gl.UNSIGNED_SHORT,0))}))}))}))}drawColoredStructure(t){this.setShader(this.colorShaderProgram),this.setUniform("mView",t),this.setUniform("mProj",this.projMatrix),this.chunks.forEach((t=>{t.forEach((t=>{t.forEach((t=>{t.buffer&&(this.setVertexAttr("vertPos",3,t.buffer.position),this.setVertexAttr("blockPos",3,t.buffer.blockPos),this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,t.buffer.index),this.gl.drawElements(this.gl.TRIANGLES,t.buffer.length,this.gl.UNSIGNED_SHORT,0))}))}))}))}drawOutline(t,e){this.setShader(this.gridShaderProgram),this.setVertexAttr("vertPos",3,this.outlineBuffers.position),this.setVertexAttr("vertColor",3,this.outlineBuffers.color);const i=gl_matrix__WEBPACK_IMPORTED_MODULE_2__.create();gl_matrix__WEBPACK_IMPORTED_MODULE_2__.copy(i,t),gl_matrix__WEBPACK_IMPORTED_MODULE_2__.translate(i,i,e),this.setUniform("mView",i),this.setUniform("mProj",this.projMatrix),this.gl.drawArrays(this.gl.LINES,0,this.outlineBuffers.length)}setViewport(t,e,s,i){this.gl.viewport(t,e,s,i),this.projMatrix=this.getPerspective()}setShader(t){this.gl.useProgram(t),this.activeShader=t}setVertexAttr(t,e,s){const i=this.gl.getAttribLocation(this.activeShader,t);this.gl.bindBuffer(this.gl.ARRAY_BUFFER,s),this.gl.vertexAttribPointer(i,e,this.gl.FLOAT,!1,0,0),this.gl.enableVertexAttribArray(i)}setUniform(t,e){const s=this.gl.getUniformLocation(this.activeShader,t);this.gl.uniformMatrix4fv(s,!1,e)}}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function wt(t,e,s,i){return new(s||(s=Promise))((function(n,r){function o(t){try{h(i.next(t))}catch(t){r(t)}}function a(t){try{h(i.throw(t))}catch(t){r(t)}}function h(t){var e;t.done?n(t.value):(e=t.value,e instanceof s?e:new s((function(t){t(e)}))).then(o,a)}h((i=i.apply(t,e||[])).next())}))}class bt{constructor(t,e){this.img=t,this.idMap=e,this.part=16/t.width}getTextureAtlas(){return this.img}getTextureUV(t){var e;return null!==(e=this.idMap[t])&&void 0!==e?e:[0,0,this.part,this.part]}static fromBlobs(t){return wt(this,void 0,void 0,(function*(){const e=Math.sqrt(Object.keys(t).length+1),s=Math.pow(2,Math.ceil(Math.log(e)/Math.log(2))),i=16*s,n=1/s,r=document.createElement("canvas");r.width=i,r.height=i;const o=r.getContext("2d");this.drawInvalidTexture(o);const a={};let h=1;return yield Promise.all(Object.keys(t).map((e=>wt(this,void 0,void 0,(function*(){const i=h%s,r=Math.floor(h/s);h+=1,a[e]=[n*i,n*r,n*i+n,n*r+n];const l=yield createImageBitmap(t[e]);o.drawImage(l,0,0,16,16,16*i,16*r,16,16)}))))),new bt(o.getImageData(0,0,i,i),a)}))}static empty(){const t=document.createElement("canvas");t.width=16,t.height=16;const e=t.getContext("2d");return bt.drawInvalidTexture(e),new bt(e.getImageData(0,0,16,16),{})}static drawInvalidTexture(t){t.fillStyle="black",t.fillRect(0,0,16,16),t.fillStyle="magenta",t.fillRect(0,0,8,8),t.fillRect(8,8,8,8)}}var Pt,xt;!function(t){function e(t){return"number"==typeof t?new s(t,t):t}t.target=function(t,e,s,i,r,o){return new n(t,e,s,i,r,o)},t.parameters=function(t,s,n,r,o,a,h){return new i(e(t),e(s),e(n),e(r),e(o),e(a),h)},t.param=e,t.range=function(t,e){return new s(t,e)};class s{constructor(t,e){this.min=t,this.max=e}distance(t){const e=("number"==typeof t?t:t.min)-this.max,s=this.min-("number"==typeof t?t:t.max);return e>0?e:Math.max(s,0)}union(t){return new s(Math.min(this.min,t.min),Math.max(this.max,t.max))}}t.Param=s;class i{constructor(t,e,s,i,n,r,o){this.temperature=t,this.humidity=e,this.continentalness=s,this.erosion=i,this.depth=n,this.weirdness=r,this.offset=o}fittness(t){return R(this.temperature.distance(t.temperature))+R(this.humidity.distance(t.humidity))+R(this.continentalness.distance(t.continentalness))+R(this.erosion.distance(t.erosion))+R(this.depth.distance(t.depth))+R(this.weirdness.distance(t.weirdness))+R(this.offset-t.offset)}space(){return[this.temperature,this.humidity,this.continentalness,this.erosion,this.depth,this.weirdness,new s(this.offset,this.offset)]}}t.ParamPoint=i;class n{constructor(t,e,s,i,n,r){this.temperature=t,this.humidity=e,this.continentalness=s,this.erosion=i,this.depth=n,this.weirdness=r}get offset(){return 0}toArray(){return[this.temperature,this.humidity,this.continentalness,this.erosion,this.depth,this.weirdness,this.offset]}}t.TargetPoint=n;t.Parameters=class{constructor(t){this.things=t,this.index=new r(t)}find(t){return this.index.search(t,((t,e)=>t.distance(e)))}};class r{constructor(t){this.root=r.build(t.map((([t,e])=>new h(t,e))))}static build(t){if(1===t.length)return t[0];if(t.length<=r.CHILDREN_PER_NODE){const e=t.map((t=>{let e=0;for(let s=0;s<7;s+=1){const i=t.space[s];e+=Math.abs((i.min+i.max)/2)}return{key:e,node:t}})).sort(((t,e)=>t.key-e.key)).map((({node:t})=>t));return new a(e)}let e=1/0,s=-1,i=[];for(let n=0;n<7;++n){r.sort(t,n,!1),i=r.bucketize(t);let o=0;for(const t of i)o+=r.area(t.space);e>o&&(e=o,s=n)}return t=r.sort(t,s,!1),i=r.bucketize(t),i=r.sort(i,s,!0),new a(i.map((t=>r.build(t.children))))}static sort(t,e,s){return t.map((t=>{const i=t.space[e],n=(i.min+i.max)/2;return{key:s?Math.abs(n):n,node:t}})).sort(((t,e)=>t.key-e.key)).map((({node:t})=>t))}static bucketize(t){const e=[];let s=[];const i=Math.pow(10,Math.floor(Math.log(t.length-.01)/Math.log(10)));for(const n of t)s.push(n),s.length<i||(e.push(new a(s)),s=[]);return 0!==s.length&&e.push(new a(s)),e}static area(t){let e=0;for(const s of t)e+=Math.abs(s.max-s.min);return e}search(t,e){return this.root.search(t.toArray(),e).thing()}}r.CHILDREN_PER_NODE=10,t.RTree=r;class o{constructor(t){this.space=t}distance(t){let e=0;for(let s=0;s<7;s+=1)e+=R(this.space[s].distance(t[s]));return e}}t.RNode=o;class a extends o{constructor(t){super(a.buildSpace(t)),this.children=t}static buildSpace(t){let e=[...Array(7)].map((()=>new s(1/0,-1/0)));for(const s of t)e=[...Array(7)].map(((t,i)=>e[i].union(s.space[i])));return e}search(t,e){let s=1/0,i=null;for(const n of this.children){const r=e(n,t);if(s<=r)continue;const o=n.search(t,e),a=n==o?r:e(o,t);s<=a||(s=a,i=o)}return i}}t.RSubTree=a;class h extends o{constructor(t,e){super(t.space()),this.thing=e}search(){return this}}t.RLeaf=h}(Pt||(Pt={}));class yt{constructor(t,e={offset:0,factor:1,peaks:1,nearWater:!1}){this.biome=t,this.shape=e}getBiome(t,e,s){return this.biome}getTerrainShape(t,e){return this.shape}}class At{constructor(t,e,s,i,n,r){this.cellWidth=t,this.cellHeight=e,this.cellCountY=s,this.biomeSource=i,this.settings=n,this.blendedNoise=r,this.mountainPeakNoise=new Y(new W(BigInt(42)),-16,[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1])}fillNoiseColumn(t,e,s,i,n){const r=e*this.cellWidth>>2,o=s*this.cellWidth>>2,{offset:a,factor:h,peaks:l}=this.biomeSource.getTerrainShape(r,o),c=684.412*this.settings.sampling.xzScale,u=684.412*this.settings.sampling.yScale,d=c/this.settings.sampling.xzFactor,f=u/this.settings.sampling.yFactor;for(let r=0;r<=n;r+=1){const n=r+i,o=this.blendedNoise.sample(e,n,s,c,u,d,f),g=this.samplePeakNoise(l,e*this.cellHeight,s*this.cellHeight)/128,p=this.computeInitialDensity(n*this.cellHeight,a,h,0,g)+o;t[r]=this.applySlide(p,n)}}samplePeakNoise(t,e,s){if(0===t)return 0;const i=3e3/this.cellWidth,n=this.mountainPeakNoise.sample(e*i,0,s*i);return n>0?t*n:t/2*n}computeInitialDensity(t,e,s,i,n){const r=(At.computeDimensionDensity(this.settings.densityFactor,this.settings.densityOffset,t,i)+e+n)*s;return r*(r>0?4:1)}applySlide(t,e){const s=e-Math.floor(this.settings.minY/this.cellHeight);if(this.settings.topSlide.size>0){const e=(this.cellCountY-s-this.settings.topSlide.offset)/this.settings.topSlide.size;t=_(this.settings.topSlide.target,t,e)}if(this.settings.bottomSlide.size>0){const e=(s-this.settings.bottomSlide.offset)/this.settings.bottomSlide.size;t=_(this.settings.bottomSlide.target,t,e)}return t}static computeDimensionDensity(t,e,s,i=0){return t*(1-s/128+i)+e}}!function(t){function e(t){return l.apply(t)+.015}function s(t){return c.apply(t)}function i(t){return u.apply(t)}function n(t){return 3*-(Math.abs(Math.abs(t)-.6666667)-.33333334)}t.offset=e,t.factor=s,t.peaks=i,t.peaksAndValleys=n,t.point=function(t,e,s){return{continents:t,erosion:e,weirdness:s,ridges:n(s)}},t.nearWater=function(t,e){return!(t<-.2)&&(t<-.05||Math.abs(e)<.15)},t.shape=function(t,n){return{offset:e(t),factor:s(t),peaks:i(t),nearWater:n}};const r=f("beachSpline",-.15,-.05,0,0,.1,0,-.03,!1,!1),o=f("lowSpline",-.1,-.1,.03,.1,.1,.01,-.03,!1,!1),a=f("midSpline",-.1,-.1,.03,.1,.7,.01,-.03,!0,!0),h=f("highSpline",-.05,.3,.03,.1,1,.01,.01,!0,!0),l=new Z("offsetSampler",(t=>t.continents)).addPoint(-1.1,.044).addPoint(-1.02,-.2222).addPoint(-.51,-.2222).addPoint(-.44,-.12).addPoint(-.18,-.12).addPoint(-.16,r).addPoint(-.15,r).addPoint(-.1,o).addPoint(.25,a).addPoint(1,h),c=new Z("Factor-Continents",(t=>t.continents)).addPoint(-.19,505).addPoint(-.15,d("erosionCoast",800,!0,"ridgeCoast-OldMountains")).addPoint(-.1,d("erosionInland",700,!0,"ridgeInland-OldMountains")).addPoint(.03,d("erosionMidInland",650,!0,"ridgeMidInland-OldMountains")).addPoint(.06,d("erosionFarInland",600,!1,"ridgeFarInland-OldMountains")),u=new Z("Peaks",(t=>t.continents)).addPoint(.1,0).addPoint(.2,new Z("Peaks-erosion",(t=>t.erosion)).addPoint(-.8,new Z("Peaks-erosion-ridges",(t=>t.ridges)).addPoint(-1,0).addPoint(.2,0).addPoint(1,new Z("Peaks-erosion-ridges-weirdness",(t=>t.weirdness)).addPoint(-.01,80).addPoint(.01,20))).addPoint(-.4,0));function d(t,e,s,i){const n=new Z(t,(t=>t.erosion)).addPoint(-.6,e).addPoint(-.5,342).addPoint(-.35,e).addPoint(-.25,e).addPoint(-.1,342).addPoint(.03,e);if(s){const t=new Z("weirdnessShattered",(t=>t.weirdness)).addPoint(0,e).addPoint(.1,80),s=new Z("ridgesShattered",(t=>t.ridges)).addPoint(-.9,e).addPoint(-.69,t);n.addPoint(.35,e).addPoint(.45,s).addPoint(.55,s).addPoint(.62,e)}else{const t=new Z(i,(t=>t.ridges)).addPoint(-.7,e).addPoint(-.15,175),s=new Z(i,(t=>t.ridges)).addPoint(.45,e).addPoint(.7,200);n.addPoint(.05,s).addPoint(.4,s).addPoint(.45,t).addPoint(.55,t).addPoint(.58,e)}return n}function f(t,e,s,i,n,r,o,a,h,l){const c=g(M(r,.6,1.5),l),u=g(M(r,.6,1),l),d=g(r,l),f=v(t+"-widePlateau",e-.15,.5*r,M(.5,.5,.5)*r,.5*r,.6*r,.5),p=v(t+"-narrowPlateau",e,o*r,i*r,.5*r,.6*r,.5),m=v(t+"-plains",e,o,o,i,n,.5),w=v(t+"-plainsFarInland",e,o,o,i,n,.5),b=new Z(t,(t=>t.ridges)).addPoint(-1,e).addPoint(-.4,m).addPoint(0,n+.07),P=v(t+"-swamps",-.02,a,a,i,n,0),x=new Z(t,(t=>t.erosion)).addPoint(-.85,c).addPoint(-.7,u).addPoint(-.4,d).addPoint(-.35,f).addPoint(-.1,p).addPoint(.2,m);return h&&x.addPoint(.4,w).addPoint(.45,b).addPoint(.55,b).addPoint(.58,w),x.addPoint(.7,P),x}function g(t,e){const s=new Z(`M-spline for continentalness: ${t} ${e}`,(t=>t.ridges)),i=p(-1,t,-.7),n=p(1,t,-.7),r=function(t){return.5*(1-t)/(.46082947*(1-.5*(1-t)))-1.17}(t);if(-.65<r&&r<1){const e=p(-.65,t,-.7),o=p(-.75,t,-.7),a=m(i,o,-1,-.75);s.addPoint(-1,i,a),s.addPoint(-.75,o),s.addPoint(-.65,e);const h=p(r,t,-.7),l=m(h,n,r,1);s.addPoint(r-.01,h),s.addPoint(r,h,l),s.addPoint(1,n,l)}else{const t=m(i,n,-1,1);e?(s.addPoint(-1,Math.max(.2,i)),s.addPoint(0,M(.5,i,n),t)):s.addPoint(-1,i,t),s.addPoint(1,n,t)}return s}function p(t,e,s){const i=.46082947*(t+1.17)*(1-.5*(1-e))-.5*(1-e);return t<s?Math.max(i,-.2222):Math.max(i,0)}function m(t,e,s,i){return(e-t)/(i-s)}function v(t,e,s,i,n,r,o){const a=Math.max(.5*(s-e),o),h=5*(i-s);return new Z(t,(t=>t.ridges)).addPoint(-1,e,a).addPoint(-.4,s,Math.min(a,h)).addPoint(0,i,h).addPoint(.4,n,2*(n-i)).addPoint(1,r,.7*(r-n))}}(xt||(xt={}));class St{constructor(t,e,s,i,n,r,o){this.parameters=e,this.temperature=new Y(new W(t),s.firstOctave,s.amplitudes),this.humidity=new Y(new W(t+BigInt(1)),i.firstOctave,i.amplitudes),this.continentalness=new Y(new W(t+BigInt(2)),n.firstOctave,n.amplitudes),this.erosion=new Y(new W(t+BigInt(3)),r.firstOctave,r.amplitudes),this.weirdness=new Y(new W(t+BigInt(4)),o.firstOctave,o.amplitudes),this.offset=new Y(new W(t+BigInt(5)),-3,[1,1,1,1])}getBiome(t,e,s){const i=t+this.getOffset(t,0,s),n=e+this.getOffset(e,s,t),r=s+this.getOffset(s,t,0),o=this.temperature.sample(i,n,r),a=this.humidity.sample(i,n,r),h=this.continentalness.sample(i,0,r),l=this.erosion.sample(i,0,r),c=this.weirdness.sample(i,0,r),u=xt.offset(xt.point(h,l,c)),d=At.computeDimensionDensity(1,-.51875,4*e)+u,f=new Pt.TargetPoint(o,a,h,l,d,c);return this.parameters.find(f)}getTerrainShape(t,e){const s=t+this.getOffset(t,0,e),i=e+this.getOffset(e,t,0),n=this.continentalness.sample(s,0,i),r=this.erosion.sample(s,0,i),o=this.weirdness.sample(s,0,i),a=xt.point(n,r,o),h=xt.nearWater(n,o);return xt.shape(a,h)}getOffset(t,e,s){return 4*this.offset.sample(t,e,s)}}class Bt{constructor(t,e,s,i,n,r){this.cellCountY=e,this.cellCountZ=s,this.cellMinY=n,this.filler=r,this.noise000=0,this.noise001=0,this.noise100=0,this.noise101=0,this.noise010=0,this.noise011=0,this.noise110=0,this.noise111=0,this.valueXZ00=0,this.valueXZ10=0,this.valueXZ01=0,this.valueXZ11=0,this.valueZ0=0,this.valueZ1=0,this.minCellX=i[0]*t,this.minCellZ=i[1]*s,this.slice0=Bt.allocateSlice(e,s),this.slice1=Bt.allocateSlice(e,s)}static allocateSlice(t,e){const s=Array(e+1);for(let i=0;i<e+1;i+=1)s[i]=Array(t+1);return s}initializeForFirstCellX(){this.fillSlice(this.slice0,this.minCellX)}advanceCellX(t){this.fillSlice(this.slice1,this.minCellX+t+1)}fillSlice(t,e){for(let s=0;s<this.cellCountZ+1;s+=1)this.filler(t[s],e,this.minCellZ+s,this.cellMinY,this.cellCountY)}selectCellYZ(t,e){this.noise000=this.slice0[e][t],this.noise001=this.slice0[e+1][t],this.noise100=this.slice1[e][t],this.noise101=this.slice1[e+1][t],this.noise010=this.slice0[e][t+1],this.noise011=this.slice0[e+1][t+1],this.noise110=this.slice1[e][t+1],this.noise111=this.slice1[e+1][t+1]}updateForY(t){this.valueXZ00=M(t,this.noise000,this.noise010),this.valueXZ10=M(t,this.noise100,this.noise110),this.valueXZ01=M(t,this.noise001,this.noise011),this.valueXZ11=M(t,this.noise101,this.noise111)}updateForX(t){this.valueZ0=M(t,this.valueXZ00,this.valueXZ10),this.valueZ1=M(t,this.valueXZ01,this.valueXZ11)}calculateValue(t){return M(t,this.valueZ0,this.valueZ1)}swapSlices(){[this.slice0,this.slice1]=[this.slice1,this.slice0]}}class Et{constructor(t,e,s){this.seed=t,this.biomeSource=e,this.settings=s,this.cellHeight=s.noise.ySize<<2,this.cellWidth=s.noise.xzSize<<2,this.cellCountXZ=Math.floor(16/this.cellWidth),this.cellCountY=Math.floor(s.noise.height/this.cellHeight);const i=new W(t),n=new z(i);s.noise.useSimplexSurfaceNoise?new X(i,[-3,-2,-1,0]):new V(i,-3,[1,1,1,1]),i.consume(2620),new V(i,-15,[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]),this.sampler=new At(this.cellWidth,this.cellHeight,this.cellCountY,e,s.noise,n)}fill(t){const e=Math.max(t.minY,this.settings.noise.minY),s=Math.min(t.maxY,this.settings.noise.minY+this.settings.noise.height),i=Math.floor(e/this.cellHeight),n=Math.floor((s-e)/this.cellHeight),r=k.minBlockX(t.pos),o=k.minBlockZ(t.pos),a=new Bt(this.cellCountXZ,n,this.cellCountXZ,t.pos,i,this.sampler.fillNoiseColumn.bind(this.sampler)),h=Array(a);h.forEach((t=>t.initializeForFirstCellX()));for(let e=0;e<this.cellCountXZ;e+=1){h.forEach((t=>t.advanceCellX(e)));for(let s=0;s<this.cellCountXZ;s+=1){let l=t.getOrCreateSection(t.sectionsCount-1);for(let c=n-1;c>=0;c-=1){h.forEach((t=>t.selectCellYZ(c,s)));for(let n=this.cellHeight-1;n>=0;n-=1){const u=(i+c)*this.cellHeight+n,d=15&u,f=t.getSectionIndex(u);t.getSectionIndex(l.minBlockY)!==f&&(l=t.getOrCreateSection(f));const g=n/this.cellHeight;h.forEach((t=>t.updateForY(g)));for(let t=0;t<this.cellWidth;t+=1){const i=r+e*this.cellWidth+t,n=15&i,c=t/this.cellWidth;h.forEach((t=>t.updateForX(c)));for(let t=0;t<this.cellWidth;t+=1){const e=o+s*this.cellWidth+t,r=15&e,h=t/this.cellWidth,c=a.calculateValue(h),f=this.baseState(i,u,e,c);f.equals(B.AIR)||l.setBlockState(n,d,r,f)}}}}}h.forEach((t=>t.swapSlices()))}}baseState(t,e,s,i){return(i=(i=F(i/200,-1,1))/2-i*i*i/24)>0?this.settings.defaultBlock:e<this.settings.seaLevel?this.settings.defaultFluid:B.AIR}}
//# sourceMappingURL=deepslate.esm.js.map


/***/ }),

/***/ "./node_modules/gl-matrix/esm/common.js":
/*!**********************************************!*\
  !*** ./node_modules/gl-matrix/esm/common.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EPSILON": () => (/* binding */ EPSILON),
/* harmony export */   "ARRAY_TYPE": () => (/* binding */ ARRAY_TYPE),
/* harmony export */   "RANDOM": () => (/* binding */ RANDOM),
/* harmony export */   "setMatrixArrayType": () => (/* binding */ setMatrixArrayType),
/* harmony export */   "toRadian": () => (/* binding */ toRadian),
/* harmony export */   "equals": () => (/* binding */ equals)
/* harmony export */ });
/**
 * Common utilities
 * @module glMatrix
 */
// Configuration Constants
var EPSILON = 0.000001;
var ARRAY_TYPE = typeof Float32Array !== 'undefined' ? Float32Array : Array;
var RANDOM = Math.random;
/**
 * Sets the type of array used when creating new vectors and matrices
 *
 * @param {Float32ArrayConstructor | ArrayConstructor} type Array type, such as Float32Array or Array
 */

function setMatrixArrayType(type) {
  ARRAY_TYPE = type;
}
var degree = Math.PI / 180;
/**
 * Convert Degree To Radian
 *
 * @param {Number} a Angle in Degrees
 */

function toRadian(a) {
  return a * degree;
}
/**
 * Tests whether or not the arguments have approximately the same value, within an absolute
 * or relative tolerance of glMatrix.EPSILON (an absolute tolerance is used for values less
 * than or equal to 1.0, and a relative tolerance is used for larger values)
 *
 * @param {Number} a The first number to test.
 * @param {Number} b The second number to test.
 * @returns {Boolean} True if the numbers are approximately equal, false otherwise.
 */

function equals(a, b) {
  return Math.abs(a - b) <= EPSILON * Math.max(1.0, Math.abs(a), Math.abs(b));
}
if (!Math.hypot) Math.hypot = function () {
  var y = 0,
      i = arguments.length;

  while (i--) {
    y += arguments[i] * arguments[i];
  }

  return Math.sqrt(y);
};

/***/ }),

/***/ "./node_modules/gl-matrix/esm/mat4.js":
/*!********************************************!*\
  !*** ./node_modules/gl-matrix/esm/mat4.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "create": () => (/* binding */ create),
/* harmony export */   "clone": () => (/* binding */ clone),
/* harmony export */   "copy": () => (/* binding */ copy),
/* harmony export */   "fromValues": () => (/* binding */ fromValues),
/* harmony export */   "set": () => (/* binding */ set),
/* harmony export */   "identity": () => (/* binding */ identity),
/* harmony export */   "transpose": () => (/* binding */ transpose),
/* harmony export */   "invert": () => (/* binding */ invert),
/* harmony export */   "adjoint": () => (/* binding */ adjoint),
/* harmony export */   "determinant": () => (/* binding */ determinant),
/* harmony export */   "multiply": () => (/* binding */ multiply),
/* harmony export */   "translate": () => (/* binding */ translate),
/* harmony export */   "scale": () => (/* binding */ scale),
/* harmony export */   "rotate": () => (/* binding */ rotate),
/* harmony export */   "rotateX": () => (/* binding */ rotateX),
/* harmony export */   "rotateY": () => (/* binding */ rotateY),
/* harmony export */   "rotateZ": () => (/* binding */ rotateZ),
/* harmony export */   "fromTranslation": () => (/* binding */ fromTranslation),
/* harmony export */   "fromScaling": () => (/* binding */ fromScaling),
/* harmony export */   "fromRotation": () => (/* binding */ fromRotation),
/* harmony export */   "fromXRotation": () => (/* binding */ fromXRotation),
/* harmony export */   "fromYRotation": () => (/* binding */ fromYRotation),
/* harmony export */   "fromZRotation": () => (/* binding */ fromZRotation),
/* harmony export */   "fromRotationTranslation": () => (/* binding */ fromRotationTranslation),
/* harmony export */   "fromQuat2": () => (/* binding */ fromQuat2),
/* harmony export */   "getTranslation": () => (/* binding */ getTranslation),
/* harmony export */   "getScaling": () => (/* binding */ getScaling),
/* harmony export */   "getRotation": () => (/* binding */ getRotation),
/* harmony export */   "fromRotationTranslationScale": () => (/* binding */ fromRotationTranslationScale),
/* harmony export */   "fromRotationTranslationScaleOrigin": () => (/* binding */ fromRotationTranslationScaleOrigin),
/* harmony export */   "fromQuat": () => (/* binding */ fromQuat),
/* harmony export */   "frustum": () => (/* binding */ frustum),
/* harmony export */   "perspective": () => (/* binding */ perspective),
/* harmony export */   "perspectiveFromFieldOfView": () => (/* binding */ perspectiveFromFieldOfView),
/* harmony export */   "ortho": () => (/* binding */ ortho),
/* harmony export */   "lookAt": () => (/* binding */ lookAt),
/* harmony export */   "targetTo": () => (/* binding */ targetTo),
/* harmony export */   "str": () => (/* binding */ str),
/* harmony export */   "frob": () => (/* binding */ frob),
/* harmony export */   "add": () => (/* binding */ add),
/* harmony export */   "subtract": () => (/* binding */ subtract),
/* harmony export */   "multiplyScalar": () => (/* binding */ multiplyScalar),
/* harmony export */   "multiplyScalarAndAdd": () => (/* binding */ multiplyScalarAndAdd),
/* harmony export */   "exactEquals": () => (/* binding */ exactEquals),
/* harmony export */   "equals": () => (/* binding */ equals),
/* harmony export */   "mul": () => (/* binding */ mul),
/* harmony export */   "sub": () => (/* binding */ sub)
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/esm/common.js");

/**
 * 4x4 Matrix<br>Format: column-major, when typed out it looks like row-major<br>The matrices are being post multiplied.
 * @module mat4
 */

/**
 * Creates a new identity mat4
 *
 * @returns {mat4} a new 4x4 matrix
 */

function create() {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(16);

  if (_common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE != Float32Array) {
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
  }

  out[0] = 1;
  out[5] = 1;
  out[10] = 1;
  out[15] = 1;
  return out;
}
/**
 * Creates a new mat4 initialized with values from an existing matrix
 *
 * @param {ReadonlyMat4} a matrix to clone
 * @returns {mat4} a new 4x4 matrix
 */

function clone(a) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(16);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  out[9] = a[9];
  out[10] = a[10];
  out[11] = a[11];
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}
/**
 * Copy the values from one mat4 to another
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the source matrix
 * @returns {mat4} out
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  out[9] = a[9];
  out[10] = a[10];
  out[11] = a[11];
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}
/**
 * Create a new mat4 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m03 Component in column 0, row 3 position (index 3)
 * @param {Number} m10 Component in column 1, row 0 position (index 4)
 * @param {Number} m11 Component in column 1, row 1 position (index 5)
 * @param {Number} m12 Component in column 1, row 2 position (index 6)
 * @param {Number} m13 Component in column 1, row 3 position (index 7)
 * @param {Number} m20 Component in column 2, row 0 position (index 8)
 * @param {Number} m21 Component in column 2, row 1 position (index 9)
 * @param {Number} m22 Component in column 2, row 2 position (index 10)
 * @param {Number} m23 Component in column 2, row 3 position (index 11)
 * @param {Number} m30 Component in column 3, row 0 position (index 12)
 * @param {Number} m31 Component in column 3, row 1 position (index 13)
 * @param {Number} m32 Component in column 3, row 2 position (index 14)
 * @param {Number} m33 Component in column 3, row 3 position (index 15)
 * @returns {mat4} A new mat4
 */

function fromValues(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(16);
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m03;
  out[4] = m10;
  out[5] = m11;
  out[6] = m12;
  out[7] = m13;
  out[8] = m20;
  out[9] = m21;
  out[10] = m22;
  out[11] = m23;
  out[12] = m30;
  out[13] = m31;
  out[14] = m32;
  out[15] = m33;
  return out;
}
/**
 * Set the components of a mat4 to the given values
 *
 * @param {mat4} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m03 Component in column 0, row 3 position (index 3)
 * @param {Number} m10 Component in column 1, row 0 position (index 4)
 * @param {Number} m11 Component in column 1, row 1 position (index 5)
 * @param {Number} m12 Component in column 1, row 2 position (index 6)
 * @param {Number} m13 Component in column 1, row 3 position (index 7)
 * @param {Number} m20 Component in column 2, row 0 position (index 8)
 * @param {Number} m21 Component in column 2, row 1 position (index 9)
 * @param {Number} m22 Component in column 2, row 2 position (index 10)
 * @param {Number} m23 Component in column 2, row 3 position (index 11)
 * @param {Number} m30 Component in column 3, row 0 position (index 12)
 * @param {Number} m31 Component in column 3, row 1 position (index 13)
 * @param {Number} m32 Component in column 3, row 2 position (index 14)
 * @param {Number} m33 Component in column 3, row 3 position (index 15)
 * @returns {mat4} out
 */

function set(out, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m03;
  out[4] = m10;
  out[5] = m11;
  out[6] = m12;
  out[7] = m13;
  out[8] = m20;
  out[9] = m21;
  out[10] = m22;
  out[11] = m23;
  out[12] = m30;
  out[13] = m31;
  out[14] = m32;
  out[15] = m33;
  return out;
}
/**
 * Set a mat4 to the identity matrix
 *
 * @param {mat4} out the receiving matrix
 * @returns {mat4} out
 */

function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Transpose the values of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the source matrix
 * @returns {mat4} out
 */

function transpose(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache some values
  if (out === a) {
    var a01 = a[1],
        a02 = a[2],
        a03 = a[3];
    var a12 = a[6],
        a13 = a[7];
    var a23 = a[11];
    out[1] = a[4];
    out[2] = a[8];
    out[3] = a[12];
    out[4] = a01;
    out[6] = a[9];
    out[7] = a[13];
    out[8] = a02;
    out[9] = a12;
    out[11] = a[14];
    out[12] = a03;
    out[13] = a13;
    out[14] = a23;
  } else {
    out[0] = a[0];
    out[1] = a[4];
    out[2] = a[8];
    out[3] = a[12];
    out[4] = a[1];
    out[5] = a[5];
    out[6] = a[9];
    out[7] = a[13];
    out[8] = a[2];
    out[9] = a[6];
    out[10] = a[10];
    out[11] = a[14];
    out[12] = a[3];
    out[13] = a[7];
    out[14] = a[11];
    out[15] = a[15];
  }

  return out;
}
/**
 * Inverts a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the source matrix
 * @returns {mat4} out
 */

function invert(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];
  var b00 = a00 * a11 - a01 * a10;
  var b01 = a00 * a12 - a02 * a10;
  var b02 = a00 * a13 - a03 * a10;
  var b03 = a01 * a12 - a02 * a11;
  var b04 = a01 * a13 - a03 * a11;
  var b05 = a02 * a13 - a03 * a12;
  var b06 = a20 * a31 - a21 * a30;
  var b07 = a20 * a32 - a22 * a30;
  var b08 = a20 * a33 - a23 * a30;
  var b09 = a21 * a32 - a22 * a31;
  var b10 = a21 * a33 - a23 * a31;
  var b11 = a22 * a33 - a23 * a32; // Calculate the determinant

  var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

  if (!det) {
    return null;
  }

  det = 1.0 / det;
  out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
  out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
  out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
  out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
  out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
  out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
  out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
  out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
  out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
  out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
  out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
  out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
  out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
  out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
  out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
  out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;
  return out;
}
/**
 * Calculates the adjugate of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the source matrix
 * @returns {mat4} out
 */

function adjoint(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];
  out[0] = a11 * (a22 * a33 - a23 * a32) - a21 * (a12 * a33 - a13 * a32) + a31 * (a12 * a23 - a13 * a22);
  out[1] = -(a01 * (a22 * a33 - a23 * a32) - a21 * (a02 * a33 - a03 * a32) + a31 * (a02 * a23 - a03 * a22));
  out[2] = a01 * (a12 * a33 - a13 * a32) - a11 * (a02 * a33 - a03 * a32) + a31 * (a02 * a13 - a03 * a12);
  out[3] = -(a01 * (a12 * a23 - a13 * a22) - a11 * (a02 * a23 - a03 * a22) + a21 * (a02 * a13 - a03 * a12));
  out[4] = -(a10 * (a22 * a33 - a23 * a32) - a20 * (a12 * a33 - a13 * a32) + a30 * (a12 * a23 - a13 * a22));
  out[5] = a00 * (a22 * a33 - a23 * a32) - a20 * (a02 * a33 - a03 * a32) + a30 * (a02 * a23 - a03 * a22);
  out[6] = -(a00 * (a12 * a33 - a13 * a32) - a10 * (a02 * a33 - a03 * a32) + a30 * (a02 * a13 - a03 * a12));
  out[7] = a00 * (a12 * a23 - a13 * a22) - a10 * (a02 * a23 - a03 * a22) + a20 * (a02 * a13 - a03 * a12);
  out[8] = a10 * (a21 * a33 - a23 * a31) - a20 * (a11 * a33 - a13 * a31) + a30 * (a11 * a23 - a13 * a21);
  out[9] = -(a00 * (a21 * a33 - a23 * a31) - a20 * (a01 * a33 - a03 * a31) + a30 * (a01 * a23 - a03 * a21));
  out[10] = a00 * (a11 * a33 - a13 * a31) - a10 * (a01 * a33 - a03 * a31) + a30 * (a01 * a13 - a03 * a11);
  out[11] = -(a00 * (a11 * a23 - a13 * a21) - a10 * (a01 * a23 - a03 * a21) + a20 * (a01 * a13 - a03 * a11));
  out[12] = -(a10 * (a21 * a32 - a22 * a31) - a20 * (a11 * a32 - a12 * a31) + a30 * (a11 * a22 - a12 * a21));
  out[13] = a00 * (a21 * a32 - a22 * a31) - a20 * (a01 * a32 - a02 * a31) + a30 * (a01 * a22 - a02 * a21);
  out[14] = -(a00 * (a11 * a32 - a12 * a31) - a10 * (a01 * a32 - a02 * a31) + a30 * (a01 * a12 - a02 * a11));
  out[15] = a00 * (a11 * a22 - a12 * a21) - a10 * (a01 * a22 - a02 * a21) + a20 * (a01 * a12 - a02 * a11);
  return out;
}
/**
 * Calculates the determinant of a mat4
 *
 * @param {ReadonlyMat4} a the source matrix
 * @returns {Number} determinant of a
 */

function determinant(a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];
  var b00 = a00 * a11 - a01 * a10;
  var b01 = a00 * a12 - a02 * a10;
  var b02 = a00 * a13 - a03 * a10;
  var b03 = a01 * a12 - a02 * a11;
  var b04 = a01 * a13 - a03 * a11;
  var b05 = a02 * a13 - a03 * a12;
  var b06 = a20 * a31 - a21 * a30;
  var b07 = a20 * a32 - a22 * a30;
  var b08 = a20 * a33 - a23 * a30;
  var b09 = a21 * a32 - a22 * a31;
  var b10 = a21 * a33 - a23 * a31;
  var b11 = a22 * a33 - a23 * a32; // Calculate the determinant

  return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
}
/**
 * Multiplies two mat4s
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the first operand
 * @param {ReadonlyMat4} b the second operand
 * @returns {mat4} out
 */

function multiply(out, a, b) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15]; // Cache only the current line of the second matrix

  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[4];
  b1 = b[5];
  b2 = b[6];
  b3 = b[7];
  out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[8];
  b1 = b[9];
  b2 = b[10];
  b3 = b[11];
  out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[12];
  b1 = b[13];
  b2 = b[14];
  b3 = b[15];
  out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  return out;
}
/**
 * Translate a mat4 by the given vector
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to translate
 * @param {ReadonlyVec3} v vector to translate by
 * @returns {mat4} out
 */

function translate(out, a, v) {
  var x = v[0],
      y = v[1],
      z = v[2];
  var a00, a01, a02, a03;
  var a10, a11, a12, a13;
  var a20, a21, a22, a23;

  if (a === out) {
    out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
    out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
    out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
    out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
  } else {
    a00 = a[0];
    a01 = a[1];
    a02 = a[2];
    a03 = a[3];
    a10 = a[4];
    a11 = a[5];
    a12 = a[6];
    a13 = a[7];
    a20 = a[8];
    a21 = a[9];
    a22 = a[10];
    a23 = a[11];
    out[0] = a00;
    out[1] = a01;
    out[2] = a02;
    out[3] = a03;
    out[4] = a10;
    out[5] = a11;
    out[6] = a12;
    out[7] = a13;
    out[8] = a20;
    out[9] = a21;
    out[10] = a22;
    out[11] = a23;
    out[12] = a00 * x + a10 * y + a20 * z + a[12];
    out[13] = a01 * x + a11 * y + a21 * z + a[13];
    out[14] = a02 * x + a12 * y + a22 * z + a[14];
    out[15] = a03 * x + a13 * y + a23 * z + a[15];
  }

  return out;
}
/**
 * Scales the mat4 by the dimensions in the given vec3 not using vectorization
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to scale
 * @param {ReadonlyVec3} v the vec3 to scale the matrix by
 * @returns {mat4} out
 **/

function scale(out, a, v) {
  var x = v[0],
      y = v[1],
      z = v[2];
  out[0] = a[0] * x;
  out[1] = a[1] * x;
  out[2] = a[2] * x;
  out[3] = a[3] * x;
  out[4] = a[4] * y;
  out[5] = a[5] * y;
  out[6] = a[6] * y;
  out[7] = a[7] * y;
  out[8] = a[8] * z;
  out[9] = a[9] * z;
  out[10] = a[10] * z;
  out[11] = a[11] * z;
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}
/**
 * Rotates a mat4 by the given angle around the given axis
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @param {ReadonlyVec3} axis the axis to rotate around
 * @returns {mat4} out
 */

function rotate(out, a, rad, axis) {
  var x = axis[0],
      y = axis[1],
      z = axis[2];
  var len = Math.hypot(x, y, z);
  var s, c, t;
  var a00, a01, a02, a03;
  var a10, a11, a12, a13;
  var a20, a21, a22, a23;
  var b00, b01, b02;
  var b10, b11, b12;
  var b20, b21, b22;

  if (len < _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON) {
    return null;
  }

  len = 1 / len;
  x *= len;
  y *= len;
  z *= len;
  s = Math.sin(rad);
  c = Math.cos(rad);
  t = 1 - c;
  a00 = a[0];
  a01 = a[1];
  a02 = a[2];
  a03 = a[3];
  a10 = a[4];
  a11 = a[5];
  a12 = a[6];
  a13 = a[7];
  a20 = a[8];
  a21 = a[9];
  a22 = a[10];
  a23 = a[11]; // Construct the elements of the rotation matrix

  b00 = x * x * t + c;
  b01 = y * x * t + z * s;
  b02 = z * x * t - y * s;
  b10 = x * y * t - z * s;
  b11 = y * y * t + c;
  b12 = z * y * t + x * s;
  b20 = x * z * t + y * s;
  b21 = y * z * t - x * s;
  b22 = z * z * t + c; // Perform rotation-specific matrix multiplication

  out[0] = a00 * b00 + a10 * b01 + a20 * b02;
  out[1] = a01 * b00 + a11 * b01 + a21 * b02;
  out[2] = a02 * b00 + a12 * b01 + a22 * b02;
  out[3] = a03 * b00 + a13 * b01 + a23 * b02;
  out[4] = a00 * b10 + a10 * b11 + a20 * b12;
  out[5] = a01 * b10 + a11 * b11 + a21 * b12;
  out[6] = a02 * b10 + a12 * b11 + a22 * b12;
  out[7] = a03 * b10 + a13 * b11 + a23 * b12;
  out[8] = a00 * b20 + a10 * b21 + a20 * b22;
  out[9] = a01 * b20 + a11 * b21 + a21 * b22;
  out[10] = a02 * b20 + a12 * b21 + a22 * b22;
  out[11] = a03 * b20 + a13 * b21 + a23 * b22;

  if (a !== out) {
    // If the source and destination differ, copy the unchanged last row
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }

  return out;
}
/**
 * Rotates a matrix by the given angle around the X axis
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function rotateX(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a10 = a[4];
  var a11 = a[5];
  var a12 = a[6];
  var a13 = a[7];
  var a20 = a[8];
  var a21 = a[9];
  var a22 = a[10];
  var a23 = a[11];

  if (a !== out) {
    // If the source and destination differ, copy the unchanged rows
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  } // Perform axis-specific matrix multiplication


  out[4] = a10 * c + a20 * s;
  out[5] = a11 * c + a21 * s;
  out[6] = a12 * c + a22 * s;
  out[7] = a13 * c + a23 * s;
  out[8] = a20 * c - a10 * s;
  out[9] = a21 * c - a11 * s;
  out[10] = a22 * c - a12 * s;
  out[11] = a23 * c - a13 * s;
  return out;
}
/**
 * Rotates a matrix by the given angle around the Y axis
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function rotateY(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a00 = a[0];
  var a01 = a[1];
  var a02 = a[2];
  var a03 = a[3];
  var a20 = a[8];
  var a21 = a[9];
  var a22 = a[10];
  var a23 = a[11];

  if (a !== out) {
    // If the source and destination differ, copy the unchanged rows
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  } // Perform axis-specific matrix multiplication


  out[0] = a00 * c - a20 * s;
  out[1] = a01 * c - a21 * s;
  out[2] = a02 * c - a22 * s;
  out[3] = a03 * c - a23 * s;
  out[8] = a00 * s + a20 * c;
  out[9] = a01 * s + a21 * c;
  out[10] = a02 * s + a22 * c;
  out[11] = a03 * s + a23 * c;
  return out;
}
/**
 * Rotates a matrix by the given angle around the Z axis
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function rotateZ(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a00 = a[0];
  var a01 = a[1];
  var a02 = a[2];
  var a03 = a[3];
  var a10 = a[4];
  var a11 = a[5];
  var a12 = a[6];
  var a13 = a[7];

  if (a !== out) {
    // If the source and destination differ, copy the unchanged last row
    out[8] = a[8];
    out[9] = a[9];
    out[10] = a[10];
    out[11] = a[11];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  } // Perform axis-specific matrix multiplication


  out[0] = a00 * c + a10 * s;
  out[1] = a01 * c + a11 * s;
  out[2] = a02 * c + a12 * s;
  out[3] = a03 * c + a13 * s;
  out[4] = a10 * c - a00 * s;
  out[5] = a11 * c - a01 * s;
  out[6] = a12 * c - a02 * s;
  out[7] = a13 * c - a03 * s;
  return out;
}
/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, dest, vec);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {ReadonlyVec3} v Translation vector
 * @returns {mat4} out
 */

function fromTranslation(out, v) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.scale(dest, dest, vec);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {ReadonlyVec3} v Scaling vector
 * @returns {mat4} out
 */

function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = v[1];
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = v[2];
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from a given angle around a given axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotate(dest, dest, rad, axis);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @param {ReadonlyVec3} axis the axis to rotate around
 * @returns {mat4} out
 */

function fromRotation(out, rad, axis) {
  var x = axis[0],
      y = axis[1],
      z = axis[2];
  var len = Math.hypot(x, y, z);
  var s, c, t;

  if (len < _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON) {
    return null;
  }

  len = 1 / len;
  x *= len;
  y *= len;
  z *= len;
  s = Math.sin(rad);
  c = Math.cos(rad);
  t = 1 - c; // Perform rotation-specific matrix multiplication

  out[0] = x * x * t + c;
  out[1] = y * x * t + z * s;
  out[2] = z * x * t - y * s;
  out[3] = 0;
  out[4] = x * y * t - z * s;
  out[5] = y * y * t + c;
  out[6] = z * y * t + x * s;
  out[7] = 0;
  out[8] = x * z * t + y * s;
  out[9] = y * z * t - x * s;
  out[10] = z * z * t + c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from the given angle around the X axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateX(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function fromXRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad); // Perform axis-specific matrix multiplication

  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = c;
  out[6] = s;
  out[7] = 0;
  out[8] = 0;
  out[9] = -s;
  out[10] = c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from the given angle around the Y axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateY(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function fromYRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad); // Perform axis-specific matrix multiplication

  out[0] = c;
  out[1] = 0;
  out[2] = -s;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = s;
  out[9] = 0;
  out[10] = c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from the given angle around the Z axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateZ(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function fromZRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad); // Perform axis-specific matrix multiplication

  out[0] = c;
  out[1] = s;
  out[2] = 0;
  out[3] = 0;
  out[4] = -s;
  out[5] = c;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from a quaternion rotation and vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {ReadonlyVec3} v Translation vector
 * @returns {mat4} out
 */

function fromRotationTranslation(out, q, v) {
  // Quaternion math
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var xy = x * y2;
  var xz = x * z2;
  var yy = y * y2;
  var yz = y * z2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  out[0] = 1 - (yy + zz);
  out[1] = xy + wz;
  out[2] = xz - wy;
  out[3] = 0;
  out[4] = xy - wz;
  out[5] = 1 - (xx + zz);
  out[6] = yz + wx;
  out[7] = 0;
  out[8] = xz + wy;
  out[9] = yz - wx;
  out[10] = 1 - (xx + yy);
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}
/**
 * Creates a new mat4 from a dual quat.
 *
 * @param {mat4} out Matrix
 * @param {ReadonlyQuat2} a Dual Quaternion
 * @returns {mat4} mat4 receiving operation result
 */

function fromQuat2(out, a) {
  var translation = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(3);
  var bx = -a[0],
      by = -a[1],
      bz = -a[2],
      bw = a[3],
      ax = a[4],
      ay = a[5],
      az = a[6],
      aw = a[7];
  var magnitude = bx * bx + by * by + bz * bz + bw * bw; //Only scale if it makes sense

  if (magnitude > 0) {
    translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2 / magnitude;
    translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2 / magnitude;
    translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2 / magnitude;
  } else {
    translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2;
    translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2;
    translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2;
  }

  fromRotationTranslation(out, a, translation);
  return out;
}
/**
 * Returns the translation vector component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslation,
 *  the returned vector will be the same as the translation vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive translation component
 * @param  {ReadonlyMat4} mat Matrix to be decomposed (input)
 * @return {vec3} out
 */

function getTranslation(out, mat) {
  out[0] = mat[12];
  out[1] = mat[13];
  out[2] = mat[14];
  return out;
}
/**
 * Returns the scaling factor component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslationScale
 *  with a normalized Quaternion paramter, the returned vector will be
 *  the same as the scaling vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive scaling factor component
 * @param  {ReadonlyMat4} mat Matrix to be decomposed (input)
 * @return {vec3} out
 */

function getScaling(out, mat) {
  var m11 = mat[0];
  var m12 = mat[1];
  var m13 = mat[2];
  var m21 = mat[4];
  var m22 = mat[5];
  var m23 = mat[6];
  var m31 = mat[8];
  var m32 = mat[9];
  var m33 = mat[10];
  out[0] = Math.hypot(m11, m12, m13);
  out[1] = Math.hypot(m21, m22, m23);
  out[2] = Math.hypot(m31, m32, m33);
  return out;
}
/**
 * Returns a quaternion representing the rotational component
 *  of a transformation matrix. If a matrix is built with
 *  fromRotationTranslation, the returned quaternion will be the
 *  same as the quaternion originally supplied.
 * @param {quat} out Quaternion to receive the rotation component
 * @param {ReadonlyMat4} mat Matrix to be decomposed (input)
 * @return {quat} out
 */

function getRotation(out, mat) {
  var scaling = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(3);
  getScaling(scaling, mat);
  var is1 = 1 / scaling[0];
  var is2 = 1 / scaling[1];
  var is3 = 1 / scaling[2];
  var sm11 = mat[0] * is1;
  var sm12 = mat[1] * is2;
  var sm13 = mat[2] * is3;
  var sm21 = mat[4] * is1;
  var sm22 = mat[5] * is2;
  var sm23 = mat[6] * is3;
  var sm31 = mat[8] * is1;
  var sm32 = mat[9] * is2;
  var sm33 = mat[10] * is3;
  var trace = sm11 + sm22 + sm33;
  var S = 0;

  if (trace > 0) {
    S = Math.sqrt(trace + 1.0) * 2;
    out[3] = 0.25 * S;
    out[0] = (sm23 - sm32) / S;
    out[1] = (sm31 - sm13) / S;
    out[2] = (sm12 - sm21) / S;
  } else if (sm11 > sm22 && sm11 > sm33) {
    S = Math.sqrt(1.0 + sm11 - sm22 - sm33) * 2;
    out[3] = (sm23 - sm32) / S;
    out[0] = 0.25 * S;
    out[1] = (sm12 + sm21) / S;
    out[2] = (sm31 + sm13) / S;
  } else if (sm22 > sm33) {
    S = Math.sqrt(1.0 + sm22 - sm11 - sm33) * 2;
    out[3] = (sm31 - sm13) / S;
    out[0] = (sm12 + sm21) / S;
    out[1] = 0.25 * S;
    out[2] = (sm23 + sm32) / S;
  } else {
    S = Math.sqrt(1.0 + sm33 - sm11 - sm22) * 2;
    out[3] = (sm12 - sm21) / S;
    out[0] = (sm31 + sm13) / S;
    out[1] = (sm23 + sm32) / S;
    out[2] = 0.25 * S;
  }

  return out;
}
/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *     mat4.scale(dest, scale)
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {ReadonlyVec3} v Translation vector
 * @param {ReadonlyVec3} s Scaling vector
 * @returns {mat4} out
 */

function fromRotationTranslationScale(out, q, v, s) {
  // Quaternion math
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var xy = x * y2;
  var xz = x * z2;
  var yy = y * y2;
  var yz = y * z2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  var sx = s[0];
  var sy = s[1];
  var sz = s[2];
  out[0] = (1 - (yy + zz)) * sx;
  out[1] = (xy + wz) * sx;
  out[2] = (xz - wy) * sx;
  out[3] = 0;
  out[4] = (xy - wz) * sy;
  out[5] = (1 - (xx + zz)) * sy;
  out[6] = (yz + wx) * sy;
  out[7] = 0;
  out[8] = (xz + wy) * sz;
  out[9] = (yz - wx) * sz;
  out[10] = (1 - (xx + yy)) * sz;
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale, rotating and scaling around the given origin
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     mat4.translate(dest, origin);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *     mat4.scale(dest, scale)
 *     mat4.translate(dest, negativeOrigin);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {ReadonlyVec3} v Translation vector
 * @param {ReadonlyVec3} s Scaling vector
 * @param {ReadonlyVec3} o The origin vector around which to scale and rotate
 * @returns {mat4} out
 */

function fromRotationTranslationScaleOrigin(out, q, v, s, o) {
  // Quaternion math
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var xy = x * y2;
  var xz = x * z2;
  var yy = y * y2;
  var yz = y * z2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  var sx = s[0];
  var sy = s[1];
  var sz = s[2];
  var ox = o[0];
  var oy = o[1];
  var oz = o[2];
  var out0 = (1 - (yy + zz)) * sx;
  var out1 = (xy + wz) * sx;
  var out2 = (xz - wy) * sx;
  var out4 = (xy - wz) * sy;
  var out5 = (1 - (xx + zz)) * sy;
  var out6 = (yz + wx) * sy;
  var out8 = (xz + wy) * sz;
  var out9 = (yz - wx) * sz;
  var out10 = (1 - (xx + yy)) * sz;
  out[0] = out0;
  out[1] = out1;
  out[2] = out2;
  out[3] = 0;
  out[4] = out4;
  out[5] = out5;
  out[6] = out6;
  out[7] = 0;
  out[8] = out8;
  out[9] = out9;
  out[10] = out10;
  out[11] = 0;
  out[12] = v[0] + ox - (out0 * ox + out4 * oy + out8 * oz);
  out[13] = v[1] + oy - (out1 * ox + out5 * oy + out9 * oz);
  out[14] = v[2] + oz - (out2 * ox + out6 * oy + out10 * oz);
  out[15] = 1;
  return out;
}
/**
 * Calculates a 4x4 matrix from the given quaternion
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {ReadonlyQuat} q Quaternion to create matrix from
 *
 * @returns {mat4} out
 */

function fromQuat(out, q) {
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var yx = y * x2;
  var yy = y * y2;
  var zx = z * x2;
  var zy = z * y2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  out[0] = 1 - yy - zz;
  out[1] = yx + wz;
  out[2] = zx - wy;
  out[3] = 0;
  out[4] = yx - wz;
  out[5] = 1 - xx - zz;
  out[6] = zy + wx;
  out[7] = 0;
  out[8] = zx + wy;
  out[9] = zy - wx;
  out[10] = 1 - xx - yy;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Generates a frustum matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Number} left Left bound of the frustum
 * @param {Number} right Right bound of the frustum
 * @param {Number} bottom Bottom bound of the frustum
 * @param {Number} top Top bound of the frustum
 * @param {Number} near Near bound of the frustum
 * @param {Number} far Far bound of the frustum
 * @returns {mat4} out
 */

function frustum(out, left, right, bottom, top, near, far) {
  var rl = 1 / (right - left);
  var tb = 1 / (top - bottom);
  var nf = 1 / (near - far);
  out[0] = near * 2 * rl;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = near * 2 * tb;
  out[6] = 0;
  out[7] = 0;
  out[8] = (right + left) * rl;
  out[9] = (top + bottom) * tb;
  out[10] = (far + near) * nf;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[14] = far * near * 2 * nf;
  out[15] = 0;
  return out;
}
/**
 * Generates a perspective projection matrix with the given bounds.
 * Passing null/undefined/no value for far will generate infinite projection matrix.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} fovy Vertical field of view in radians
 * @param {number} aspect Aspect ratio. typically viewport width/height
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum, can be null or Infinity
 * @returns {mat4} out
 */

function perspective(out, fovy, aspect, near, far) {
  var f = 1.0 / Math.tan(fovy / 2),
      nf;
  out[0] = f / aspect;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = f;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[15] = 0;

  if (far != null && far !== Infinity) {
    nf = 1 / (near - far);
    out[10] = (far + near) * nf;
    out[14] = 2 * far * near * nf;
  } else {
    out[10] = -1;
    out[14] = -2 * near;
  }

  return out;
}
/**
 * Generates a perspective projection matrix with the given field of view.
 * This is primarily useful for generating projection matrices to be used
 * with the still experiemental WebVR API.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Object} fov Object containing the following values: upDegrees, downDegrees, leftDegrees, rightDegrees
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */

function perspectiveFromFieldOfView(out, fov, near, far) {
  var upTan = Math.tan(fov.upDegrees * Math.PI / 180.0);
  var downTan = Math.tan(fov.downDegrees * Math.PI / 180.0);
  var leftTan = Math.tan(fov.leftDegrees * Math.PI / 180.0);
  var rightTan = Math.tan(fov.rightDegrees * Math.PI / 180.0);
  var xScale = 2.0 / (leftTan + rightTan);
  var yScale = 2.0 / (upTan + downTan);
  out[0] = xScale;
  out[1] = 0.0;
  out[2] = 0.0;
  out[3] = 0.0;
  out[4] = 0.0;
  out[5] = yScale;
  out[6] = 0.0;
  out[7] = 0.0;
  out[8] = -((leftTan - rightTan) * xScale * 0.5);
  out[9] = (upTan - downTan) * yScale * 0.5;
  out[10] = far / (near - far);
  out[11] = -1.0;
  out[12] = 0.0;
  out[13] = 0.0;
  out[14] = far * near / (near - far);
  out[15] = 0.0;
  return out;
}
/**
 * Generates a orthogonal projection matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} left Left bound of the frustum
 * @param {number} right Right bound of the frustum
 * @param {number} bottom Bottom bound of the frustum
 * @param {number} top Top bound of the frustum
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */

function ortho(out, left, right, bottom, top, near, far) {
  var lr = 1 / (left - right);
  var bt = 1 / (bottom - top);
  var nf = 1 / (near - far);
  out[0] = -2 * lr;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = -2 * bt;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 2 * nf;
  out[11] = 0;
  out[12] = (left + right) * lr;
  out[13] = (top + bottom) * bt;
  out[14] = (far + near) * nf;
  out[15] = 1;
  return out;
}
/**
 * Generates a look-at matrix with the given eye position, focal point, and up axis.
 * If you want a matrix that actually makes an object look at another object, you should use targetTo instead.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {ReadonlyVec3} eye Position of the viewer
 * @param {ReadonlyVec3} center Point the viewer is looking at
 * @param {ReadonlyVec3} up vec3 pointing up
 * @returns {mat4} out
 */

function lookAt(out, eye, center, up) {
  var x0, x1, x2, y0, y1, y2, z0, z1, z2, len;
  var eyex = eye[0];
  var eyey = eye[1];
  var eyez = eye[2];
  var upx = up[0];
  var upy = up[1];
  var upz = up[2];
  var centerx = center[0];
  var centery = center[1];
  var centerz = center[2];

  if (Math.abs(eyex - centerx) < _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON && Math.abs(eyey - centery) < _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON && Math.abs(eyez - centerz) < _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON) {
    return identity(out);
  }

  z0 = eyex - centerx;
  z1 = eyey - centery;
  z2 = eyez - centerz;
  len = 1 / Math.hypot(z0, z1, z2);
  z0 *= len;
  z1 *= len;
  z2 *= len;
  x0 = upy * z2 - upz * z1;
  x1 = upz * z0 - upx * z2;
  x2 = upx * z1 - upy * z0;
  len = Math.hypot(x0, x1, x2);

  if (!len) {
    x0 = 0;
    x1 = 0;
    x2 = 0;
  } else {
    len = 1 / len;
    x0 *= len;
    x1 *= len;
    x2 *= len;
  }

  y0 = z1 * x2 - z2 * x1;
  y1 = z2 * x0 - z0 * x2;
  y2 = z0 * x1 - z1 * x0;
  len = Math.hypot(y0, y1, y2);

  if (!len) {
    y0 = 0;
    y1 = 0;
    y2 = 0;
  } else {
    len = 1 / len;
    y0 *= len;
    y1 *= len;
    y2 *= len;
  }

  out[0] = x0;
  out[1] = y0;
  out[2] = z0;
  out[3] = 0;
  out[4] = x1;
  out[5] = y1;
  out[6] = z1;
  out[7] = 0;
  out[8] = x2;
  out[9] = y2;
  out[10] = z2;
  out[11] = 0;
  out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
  out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
  out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
  out[15] = 1;
  return out;
}
/**
 * Generates a matrix that makes something look at something else.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {ReadonlyVec3} eye Position of the viewer
 * @param {ReadonlyVec3} center Point the viewer is looking at
 * @param {ReadonlyVec3} up vec3 pointing up
 * @returns {mat4} out
 */

function targetTo(out, eye, target, up) {
  var eyex = eye[0],
      eyey = eye[1],
      eyez = eye[2],
      upx = up[0],
      upy = up[1],
      upz = up[2];
  var z0 = eyex - target[0],
      z1 = eyey - target[1],
      z2 = eyez - target[2];
  var len = z0 * z0 + z1 * z1 + z2 * z2;

  if (len > 0) {
    len = 1 / Math.sqrt(len);
    z0 *= len;
    z1 *= len;
    z2 *= len;
  }

  var x0 = upy * z2 - upz * z1,
      x1 = upz * z0 - upx * z2,
      x2 = upx * z1 - upy * z0;
  len = x0 * x0 + x1 * x1 + x2 * x2;

  if (len > 0) {
    len = 1 / Math.sqrt(len);
    x0 *= len;
    x1 *= len;
    x2 *= len;
  }

  out[0] = x0;
  out[1] = x1;
  out[2] = x2;
  out[3] = 0;
  out[4] = z1 * x2 - z2 * x1;
  out[5] = z2 * x0 - z0 * x2;
  out[6] = z0 * x1 - z1 * x0;
  out[7] = 0;
  out[8] = z0;
  out[9] = z1;
  out[10] = z2;
  out[11] = 0;
  out[12] = eyex;
  out[13] = eyey;
  out[14] = eyez;
  out[15] = 1;
  return out;
}
/**
 * Returns a string representation of a mat4
 *
 * @param {ReadonlyMat4} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */

function str(a) {
  return "mat4(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ", " + a[6] + ", " + a[7] + ", " + a[8] + ", " + a[9] + ", " + a[10] + ", " + a[11] + ", " + a[12] + ", " + a[13] + ", " + a[14] + ", " + a[15] + ")";
}
/**
 * Returns Frobenius norm of a mat4
 *
 * @param {ReadonlyMat4} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */

function frob(a) {
  return Math.hypot(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8], a[9], a[10], a[11], a[12], a[13], a[14], a[15]);
}
/**
 * Adds two mat4's
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the first operand
 * @param {ReadonlyMat4} b the second operand
 * @returns {mat4} out
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  out[6] = a[6] + b[6];
  out[7] = a[7] + b[7];
  out[8] = a[8] + b[8];
  out[9] = a[9] + b[9];
  out[10] = a[10] + b[10];
  out[11] = a[11] + b[11];
  out[12] = a[12] + b[12];
  out[13] = a[13] + b[13];
  out[14] = a[14] + b[14];
  out[15] = a[15] + b[15];
  return out;
}
/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the first operand
 * @param {ReadonlyMat4} b the second operand
 * @returns {mat4} out
 */

function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  out[6] = a[6] - b[6];
  out[7] = a[7] - b[7];
  out[8] = a[8] - b[8];
  out[9] = a[9] - b[9];
  out[10] = a[10] - b[10];
  out[11] = a[11] - b[11];
  out[12] = a[12] - b[12];
  out[13] = a[13] - b[13];
  out[14] = a[14] - b[14];
  out[15] = a[15] - b[15];
  return out;
}
/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat4} out
 */

function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  out[6] = a[6] * b;
  out[7] = a[7] * b;
  out[8] = a[8] * b;
  out[9] = a[9] * b;
  out[10] = a[10] * b;
  out[11] = a[11] * b;
  out[12] = a[12] * b;
  out[13] = a[13] * b;
  out[14] = a[14] * b;
  out[15] = a[15] * b;
  return out;
}
/**
 * Adds two mat4's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat4} out the receiving vector
 * @param {ReadonlyMat4} a the first operand
 * @param {ReadonlyMat4} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat4} out
 */

function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  out[4] = a[4] + b[4] * scale;
  out[5] = a[5] + b[5] * scale;
  out[6] = a[6] + b[6] * scale;
  out[7] = a[7] + b[7] * scale;
  out[8] = a[8] + b[8] * scale;
  out[9] = a[9] + b[9] * scale;
  out[10] = a[10] + b[10] * scale;
  out[11] = a[11] + b[11] * scale;
  out[12] = a[12] + b[12] * scale;
  out[13] = a[13] + b[13] * scale;
  out[14] = a[14] + b[14] * scale;
  out[15] = a[15] + b[15] * scale;
  return out;
}
/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyMat4} a The first matrix.
 * @param {ReadonlyMat4} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8] && a[9] === b[9] && a[10] === b[10] && a[11] === b[11] && a[12] === b[12] && a[13] === b[13] && a[14] === b[14] && a[15] === b[15];
}
/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {ReadonlyMat4} a The first matrix.
 * @param {ReadonlyMat4} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var a4 = a[4],
      a5 = a[5],
      a6 = a[6],
      a7 = a[7];
  var a8 = a[8],
      a9 = a[9],
      a10 = a[10],
      a11 = a[11];
  var a12 = a[12],
      a13 = a[13],
      a14 = a[14],
      a15 = a[15];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  var b4 = b[4],
      b5 = b[5],
      b6 = b[6],
      b7 = b[7];
  var b8 = b[8],
      b9 = b[9],
      b10 = b[10],
      b11 = b[11];
  var b12 = b[12],
      b13 = b[13],
      b14 = b[14],
      b15 = b[15];
  return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a8), Math.abs(b8)) && Math.abs(a9 - b9) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a9), Math.abs(b9)) && Math.abs(a10 - b10) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a10), Math.abs(b10)) && Math.abs(a11 - b11) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a11), Math.abs(b11)) && Math.abs(a12 - b12) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a12), Math.abs(b12)) && Math.abs(a13 - b13) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a13), Math.abs(b13)) && Math.abs(a14 - b14) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a14), Math.abs(b14)) && Math.abs(a15 - b15) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a15), Math.abs(b15));
}
/**
 * Alias for {@link mat4.multiply}
 * @function
 */

var mul = multiply;
/**
 * Alias for {@link mat4.subtract}
 * @function
 */

var sub = subtract;

/***/ }),

/***/ "./node_modules/gl-matrix/esm/vec3.js":
/*!********************************************!*\
  !*** ./node_modules/gl-matrix/esm/vec3.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "create": () => (/* binding */ create),
/* harmony export */   "clone": () => (/* binding */ clone),
/* harmony export */   "length": () => (/* binding */ length),
/* harmony export */   "fromValues": () => (/* binding */ fromValues),
/* harmony export */   "copy": () => (/* binding */ copy),
/* harmony export */   "set": () => (/* binding */ set),
/* harmony export */   "add": () => (/* binding */ add),
/* harmony export */   "subtract": () => (/* binding */ subtract),
/* harmony export */   "multiply": () => (/* binding */ multiply),
/* harmony export */   "divide": () => (/* binding */ divide),
/* harmony export */   "ceil": () => (/* binding */ ceil),
/* harmony export */   "floor": () => (/* binding */ floor),
/* harmony export */   "min": () => (/* binding */ min),
/* harmony export */   "max": () => (/* binding */ max),
/* harmony export */   "round": () => (/* binding */ round),
/* harmony export */   "scale": () => (/* binding */ scale),
/* harmony export */   "scaleAndAdd": () => (/* binding */ scaleAndAdd),
/* harmony export */   "distance": () => (/* binding */ distance),
/* harmony export */   "squaredDistance": () => (/* binding */ squaredDistance),
/* harmony export */   "squaredLength": () => (/* binding */ squaredLength),
/* harmony export */   "negate": () => (/* binding */ negate),
/* harmony export */   "inverse": () => (/* binding */ inverse),
/* harmony export */   "normalize": () => (/* binding */ normalize),
/* harmony export */   "dot": () => (/* binding */ dot),
/* harmony export */   "cross": () => (/* binding */ cross),
/* harmony export */   "lerp": () => (/* binding */ lerp),
/* harmony export */   "hermite": () => (/* binding */ hermite),
/* harmony export */   "bezier": () => (/* binding */ bezier),
/* harmony export */   "random": () => (/* binding */ random),
/* harmony export */   "transformMat4": () => (/* binding */ transformMat4),
/* harmony export */   "transformMat3": () => (/* binding */ transformMat3),
/* harmony export */   "transformQuat": () => (/* binding */ transformQuat),
/* harmony export */   "rotateX": () => (/* binding */ rotateX),
/* harmony export */   "rotateY": () => (/* binding */ rotateY),
/* harmony export */   "rotateZ": () => (/* binding */ rotateZ),
/* harmony export */   "angle": () => (/* binding */ angle),
/* harmony export */   "zero": () => (/* binding */ zero),
/* harmony export */   "str": () => (/* binding */ str),
/* harmony export */   "exactEquals": () => (/* binding */ exactEquals),
/* harmony export */   "equals": () => (/* binding */ equals),
/* harmony export */   "sub": () => (/* binding */ sub),
/* harmony export */   "mul": () => (/* binding */ mul),
/* harmony export */   "div": () => (/* binding */ div),
/* harmony export */   "dist": () => (/* binding */ dist),
/* harmony export */   "sqrDist": () => (/* binding */ sqrDist),
/* harmony export */   "len": () => (/* binding */ len),
/* harmony export */   "sqrLen": () => (/* binding */ sqrLen),
/* harmony export */   "forEach": () => (/* binding */ forEach)
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/esm/common.js");

/**
 * 3 Dimensional Vector
 * @module vec3
 */

/**
 * Creates a new, empty vec3
 *
 * @returns {vec3} a new 3D vector
 */

function create() {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(3);

  if (_common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE != Float32Array) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
  }

  return out;
}
/**
 * Creates a new vec3 initialized with values from an existing vector
 *
 * @param {ReadonlyVec3} a vector to clone
 * @returns {vec3} a new 3D vector
 */

function clone(a) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(3);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  return out;
}
/**
 * Calculates the length of a vec3
 *
 * @param {ReadonlyVec3} a vector to calculate length of
 * @returns {Number} length of a
 */

function length(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  return Math.hypot(x, y, z);
}
/**
 * Creates a new vec3 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} a new 3D vector
 */

function fromValues(x, y, z) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(3);
  out[0] = x;
  out[1] = y;
  out[2] = z;
  return out;
}
/**
 * Copy the values from one vec3 to another
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the source vector
 * @returns {vec3} out
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  return out;
}
/**
 * Set the components of a vec3 to the given values
 *
 * @param {vec3} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} out
 */

function set(out, x, y, z) {
  out[0] = x;
  out[1] = y;
  out[2] = z;
  return out;
}
/**
 * Adds two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  return out;
}
/**
 * Subtracts vector b from vector a
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  return out;
}
/**
 * Multiplies two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  out[2] = a[2] * b[2];
  return out;
}
/**
 * Divides two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  out[2] = a[2] / b[2];
  return out;
}
/**
 * Math.ceil the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to ceil
 * @returns {vec3} out
 */

function ceil(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  out[2] = Math.ceil(a[2]);
  return out;
}
/**
 * Math.floor the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to floor
 * @returns {vec3} out
 */

function floor(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  out[2] = Math.floor(a[2]);
  return out;
}
/**
 * Returns the minimum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function min(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  out[2] = Math.min(a[2], b[2]);
  return out;
}
/**
 * Returns the maximum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function max(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  out[2] = Math.max(a[2], b[2]);
  return out;
}
/**
 * Math.round the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to round
 * @returns {vec3} out
 */

function round(out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  out[2] = Math.round(a[2]);
  return out;
}
/**
 * Scales a vec3 by a scalar number
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec3} out
 */

function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  return out;
}
/**
 * Adds two vec3's after scaling the second operand by a scalar value
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec3} out
 */

function scaleAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  return out;
}
/**
 * Calculates the euclidian distance between two vec3's
 *
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {Number} distance between a and b
 */

function distance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  return Math.hypot(x, y, z);
}
/**
 * Calculates the squared euclidian distance between two vec3's
 *
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {Number} squared distance between a and b
 */

function squaredDistance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  return x * x + y * y + z * z;
}
/**
 * Calculates the squared length of a vec3
 *
 * @param {ReadonlyVec3} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */

function squaredLength(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  return x * x + y * y + z * z;
}
/**
 * Negates the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to negate
 * @returns {vec3} out
 */

function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  return out;
}
/**
 * Returns the inverse of the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to invert
 * @returns {vec3} out
 */

function inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  out[2] = 1.0 / a[2];
  return out;
}
/**
 * Normalize a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to normalize
 * @returns {vec3} out
 */

function normalize(out, a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var len = x * x + y * y + z * z;

  if (len > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len = 1 / Math.sqrt(len);
  }

  out[0] = a[0] * len;
  out[1] = a[1] * len;
  out[2] = a[2] * len;
  return out;
}
/**
 * Calculates the dot product of two vec3's
 *
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {Number} dot product of a and b
 */

function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}
/**
 * Computes the cross product of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function cross(out, a, b) {
  var ax = a[0],
      ay = a[1],
      az = a[2];
  var bx = b[0],
      by = b[1],
      bz = b[2];
  out[0] = ay * bz - az * by;
  out[1] = az * bx - ax * bz;
  out[2] = ax * by - ay * bx;
  return out;
}
/**
 * Performs a linear interpolation between two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */

function lerp(out, a, b, t) {
  var ax = a[0];
  var ay = a[1];
  var az = a[2];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  out[2] = az + t * (b[2] - az);
  return out;
}
/**
 * Performs a hermite interpolation with two control points
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @param {ReadonlyVec3} c the third operand
 * @param {ReadonlyVec3} d the fourth operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */

function hermite(out, a, b, c, d, t) {
  var factorTimes2 = t * t;
  var factor1 = factorTimes2 * (2 * t - 3) + 1;
  var factor2 = factorTimes2 * (t - 2) + t;
  var factor3 = factorTimes2 * (t - 1);
  var factor4 = factorTimes2 * (3 - 2 * t);
  out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
  out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
  out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
  return out;
}
/**
 * Performs a bezier interpolation with two control points
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @param {ReadonlyVec3} c the third operand
 * @param {ReadonlyVec3} d the fourth operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */

function bezier(out, a, b, c, d, t) {
  var inverseFactor = 1 - t;
  var inverseFactorTimesTwo = inverseFactor * inverseFactor;
  var factorTimes2 = t * t;
  var factor1 = inverseFactorTimesTwo * inverseFactor;
  var factor2 = 3 * t * inverseFactorTimesTwo;
  var factor3 = 3 * factorTimes2 * inverseFactor;
  var factor4 = factorTimes2 * t;
  out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
  out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
  out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
  return out;
}
/**
 * Generates a random vector with the given scale
 *
 * @param {vec3} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec3} out
 */

function random(out, scale) {
  scale = scale || 1.0;
  var r = _common_js__WEBPACK_IMPORTED_MODULE_0__.RANDOM() * 2.0 * Math.PI;
  var z = _common_js__WEBPACK_IMPORTED_MODULE_0__.RANDOM() * 2.0 - 1.0;
  var zScale = Math.sqrt(1.0 - z * z) * scale;
  out[0] = Math.cos(r) * zScale;
  out[1] = Math.sin(r) * zScale;
  out[2] = z * scale;
  return out;
}
/**
 * Transforms the vec3 with a mat4.
 * 4th vector component is implicitly '1'
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the vector to transform
 * @param {ReadonlyMat4} m matrix to transform with
 * @returns {vec3} out
 */

function transformMat4(out, a, m) {
  var x = a[0],
      y = a[1],
      z = a[2];
  var w = m[3] * x + m[7] * y + m[11] * z + m[15];
  w = w || 1.0;
  out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
  out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
  out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
  return out;
}
/**
 * Transforms the vec3 with a mat3.
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the vector to transform
 * @param {ReadonlyMat3} m the 3x3 matrix to transform with
 * @returns {vec3} out
 */

function transformMat3(out, a, m) {
  var x = a[0],
      y = a[1],
      z = a[2];
  out[0] = x * m[0] + y * m[3] + z * m[6];
  out[1] = x * m[1] + y * m[4] + z * m[7];
  out[2] = x * m[2] + y * m[5] + z * m[8];
  return out;
}
/**
 * Transforms the vec3 with a quat
 * Can also be used for dual quaternions. (Multiply it with the real part)
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the vector to transform
 * @param {ReadonlyQuat} q quaternion to transform with
 * @returns {vec3} out
 */

function transformQuat(out, a, q) {
  // benchmarks: https://jsperf.com/quaternion-transform-vec3-implementations-fixed
  var qx = q[0],
      qy = q[1],
      qz = q[2],
      qw = q[3];
  var x = a[0],
      y = a[1],
      z = a[2]; // var qvec = [qx, qy, qz];
  // var uv = vec3.cross([], qvec, a);

  var uvx = qy * z - qz * y,
      uvy = qz * x - qx * z,
      uvz = qx * y - qy * x; // var uuv = vec3.cross([], qvec, uv);

  var uuvx = qy * uvz - qz * uvy,
      uuvy = qz * uvx - qx * uvz,
      uuvz = qx * uvy - qy * uvx; // vec3.scale(uv, uv, 2 * w);

  var w2 = qw * 2;
  uvx *= w2;
  uvy *= w2;
  uvz *= w2; // vec3.scale(uuv, uuv, 2);

  uuvx *= 2;
  uuvy *= 2;
  uuvz *= 2; // return vec3.add(out, a, vec3.add(out, uv, uuv));

  out[0] = x + uvx + uuvx;
  out[1] = y + uvy + uuvy;
  out[2] = z + uvz + uuvz;
  return out;
}
/**
 * Rotate a 3D vector around the x-axis
 * @param {vec3} out The receiving vec3
 * @param {ReadonlyVec3} a The vec3 point to rotate
 * @param {ReadonlyVec3} b The origin of the rotation
 * @param {Number} rad The angle of rotation in radians
 * @returns {vec3} out
 */

function rotateX(out, a, b, rad) {
  var p = [],
      r = []; //Translate point to the origin

  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2]; //perform rotation

  r[0] = p[0];
  r[1] = p[1] * Math.cos(rad) - p[2] * Math.sin(rad);
  r[2] = p[1] * Math.sin(rad) + p[2] * Math.cos(rad); //translate to correct position

  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];
  return out;
}
/**
 * Rotate a 3D vector around the y-axis
 * @param {vec3} out The receiving vec3
 * @param {ReadonlyVec3} a The vec3 point to rotate
 * @param {ReadonlyVec3} b The origin of the rotation
 * @param {Number} rad The angle of rotation in radians
 * @returns {vec3} out
 */

function rotateY(out, a, b, rad) {
  var p = [],
      r = []; //Translate point to the origin

  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2]; //perform rotation

  r[0] = p[2] * Math.sin(rad) + p[0] * Math.cos(rad);
  r[1] = p[1];
  r[2] = p[2] * Math.cos(rad) - p[0] * Math.sin(rad); //translate to correct position

  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];
  return out;
}
/**
 * Rotate a 3D vector around the z-axis
 * @param {vec3} out The receiving vec3
 * @param {ReadonlyVec3} a The vec3 point to rotate
 * @param {ReadonlyVec3} b The origin of the rotation
 * @param {Number} rad The angle of rotation in radians
 * @returns {vec3} out
 */

function rotateZ(out, a, b, rad) {
  var p = [],
      r = []; //Translate point to the origin

  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2]; //perform rotation

  r[0] = p[0] * Math.cos(rad) - p[1] * Math.sin(rad);
  r[1] = p[0] * Math.sin(rad) + p[1] * Math.cos(rad);
  r[2] = p[2]; //translate to correct position

  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];
  return out;
}
/**
 * Get the angle between two 3D vectors
 * @param {ReadonlyVec3} a The first operand
 * @param {ReadonlyVec3} b The second operand
 * @returns {Number} The angle in radians
 */

function angle(a, b) {
  var ax = a[0],
      ay = a[1],
      az = a[2],
      bx = b[0],
      by = b[1],
      bz = b[2],
      mag1 = Math.sqrt(ax * ax + ay * ay + az * az),
      mag2 = Math.sqrt(bx * bx + by * by + bz * bz),
      mag = mag1 * mag2,
      cosine = mag && dot(a, b) / mag;
  return Math.acos(Math.min(Math.max(cosine, -1), 1));
}
/**
 * Set the components of a vec3 to zero
 *
 * @param {vec3} out the receiving vector
 * @returns {vec3} out
 */

function zero(out) {
  out[0] = 0.0;
  out[1] = 0.0;
  out[2] = 0.0;
  return out;
}
/**
 * Returns a string representation of a vector
 *
 * @param {ReadonlyVec3} a vector to represent as a string
 * @returns {String} string representation of the vector
 */

function str(a) {
  return "vec3(" + a[0] + ", " + a[1] + ", " + a[2] + ")";
}
/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyVec3} a The first vector.
 * @param {ReadonlyVec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
}
/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {ReadonlyVec3} a The first vector.
 * @param {ReadonlyVec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2];
  return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2));
}
/**
 * Alias for {@link vec3.subtract}
 * @function
 */

var sub = subtract;
/**
 * Alias for {@link vec3.multiply}
 * @function
 */

var mul = multiply;
/**
 * Alias for {@link vec3.divide}
 * @function
 */

var div = divide;
/**
 * Alias for {@link vec3.distance}
 * @function
 */

var dist = distance;
/**
 * Alias for {@link vec3.squaredDistance}
 * @function
 */

var sqrDist = squaredDistance;
/**
 * Alias for {@link vec3.length}
 * @function
 */

var len = length;
/**
 * Alias for {@link vec3.squaredLength}
 * @function
 */

var sqrLen = squaredLength;
/**
 * Perform some operation over an array of vec3s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec3. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec3s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */

var forEach = function () {
  var vec = create();
  return function (a, stride, offset, count, fn, arg) {
    var i, l;

    if (!stride) {
      stride = 3;
    }

    if (!offset) {
      offset = 0;
    }

    if (count) {
      l = Math.min(count * stride + offset, a.length);
    } else {
      l = a.length;
    }

    for (i = offset; i < l; i += stride) {
      vec[0] = a[i];
      vec[1] = a[i + 1];
      vec[2] = a[i + 2];
      fn(vec, vec, arg);
      a[i] = vec[0];
      a[i + 1] = vec[1];
      a[i + 2] = vec[2];
    }

    return a;
  };
}();

/***/ }),

/***/ "./src/BuilderData/ABBiome.ts":
/*!************************************!*\
  !*** ./src/BuilderData/ABBiome.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ABElement": () => (/* binding */ ABElement)
/* harmony export */ });
/* harmony import */ var _UI_Renderer_ElementRenderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../UI/Renderer/ElementRenderer */ "./src/UI/Renderer/ElementRenderer.ts");

var ABElement = /** @class */ (function () {
    function ABElement(builder, elementA, elementB) {
        this.allowEdit = false;
        this.elementA = elementA;
        this.elementB = elementB;
        this.builder = builder;
    }
    ABElement.create = function (builder, elementA, elementB) {
        var ab_biome = new ABElement(builder, elementA, elementB);
        builder.registerLayoutElement(ab_biome);
        return ab_biome;
    };
    ABElement.prototype.lookupKey = function (temperatureIndex, humidityIndex) {
        return this.getKey();
    };
    ABElement.prototype.lookup = function (temperatureIndex, humidityIndex) {
        return this;
    };
    ABElement.prototype.lookupRecursive = function (temperatureIndex, humidityIndex, mode) {
        if (mode === "Any") {
            return this;
        }
        else if (mode === "A") {
            return this.builder.getLayoutElement(this.elementA).lookupRecursive(temperatureIndex, humidityIndex, mode);
        }
        else {
            return this.builder.getLayoutElement(this.elementB).lookupRecursive(temperatureIndex, humidityIndex, mode);
        }
    };
    ABElement.prototype.getElement = function (mode) {
        if (mode === "A") {
            return this.builder.getLayoutElement(this.elementA);
        }
        else {
            return this.builder.getLayoutElement(this.elementB);
        }
    };
    ABElement.prototype.getRenderer = function () {
        if (this.renderer === undefined)
            this.renderer = new _UI_Renderer_ElementRenderer__WEBPACK_IMPORTED_MODULE_0__.ABBiomeRenderer(this);
        return this.renderer;
    };
    ABElement.prototype.getKey = function () {
        return this.elementA + "/" + this.elementB;
    };
    return ABElement;
}());



/***/ }),

/***/ "./src/BuilderData/Biome.ts":
/*!**********************************!*\
  !*** ./src/BuilderData/Biome.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Biome": () => (/* binding */ Biome)
/* harmony export */ });
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uniqid */ "./node_modules/uniqid/index.js");
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uniqid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _UI_Renderer_ElementRenderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../UI/Renderer/ElementRenderer */ "./src/UI/Renderer/ElementRenderer.ts");


var Biome = /** @class */ (function () {
    function Biome(name, color, key, isVanilla) {
        if (isVanilla === void 0) { isVanilla = false; }
        this.allowEdit = true;
        this.name = name;
        this.color = color;
        if (key !== undefined)
            this.key = key;
        else if (isVanilla)
            this.key = name;
        else
            this.key = uniqid__WEBPACK_IMPORTED_MODULE_0__('biome_');
        this.allowEdit = !isVanilla;
        this.isVanilla = isVanilla;
    }
    Biome.create = function (builder, name, color, key, isVanilla) {
        if (isVanilla === void 0) { isVanilla = false; }
        var biome = new Biome(name, color, key, isVanilla);
        if (isVanilla)
            builder.registerVanillaBiome(biome);
        else
            builder.registerLayoutElement(biome);
        return biome;
    };
    Biome.fromJSON = function (builder, json) {
        if (builder.vanillaBiomes.has(json.key)) {
            builder.registerLayoutElement(builder.vanillaBiomes.get(json.key));
        }
        else {
            var biome = new Biome(json.name, json.color, json.key, false);
            builder.registerLayoutElement(biome);
            return biome;
        }
    };
    Biome.prototype.toJSON = function () {
        return {
            key: this.key,
            name: this.name,
            color: this.isVanilla ? undefined : this.color
        };
    };
    Biome.prototype.lookupKey = function (temperatureIndex, humidityIndex) {
        return this.getKey();
    };
    Biome.prototype.lookup = function (temperatureIndex, humidityIndex) {
        return this;
    };
    Biome.prototype.lookupRecursive = function (temperatureIndex, humidityIndex, mode) {
        return this;
    };
    Biome.prototype.getRenderer = function () {
        if (this.renderer === undefined)
            this.renderer = new _UI_Renderer_ElementRenderer__WEBPACK_IMPORTED_MODULE_1__.BiomeRenderer(this);
        return this.renderer;
    };
    Biome.prototype.getKey = function () {
        return this.key;
    };
    return Biome;
}());



/***/ }),

/***/ "./src/BuilderData/BiomeBuilder.ts":
/*!*****************************************!*\
  !*** ./src/BuilderData/BiomeBuilder.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BiomeBuilder": () => (/* binding */ BiomeBuilder)
/* harmony export */ });
/* harmony import */ var _Vanilla_VanillaBiomes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Vanilla/VanillaBiomes */ "./src/Vanilla/VanillaBiomes.ts");
/* harmony import */ var _ABBiome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ABBiome */ "./src/BuilderData/ABBiome.ts");
/* harmony import */ var _Biome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Biome */ "./src/BuilderData/Biome.ts");
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Layout */ "./src/BuilderData/Layout.ts");
/* harmony import */ var _LayoutElementDummy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LayoutElementDummy */ "./src/BuilderData/LayoutElementDummy.ts");
/* harmony import */ var _LayoutElementUnassigned__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LayoutElementUnassigned */ "./src/BuilderData/LayoutElementUnassigned.ts");
/* harmony import */ var _Slice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Slice */ "./src/BuilderData/Slice.ts");







var BiomeBuilder = /** @class */ (function () {
    function BiomeBuilder(continentalnesses, erosions, weirdnesses, temperatures, humidities) {
        this.continentalnesses = continentalnesses;
        this.erosions = erosions;
        this.weirdnesses = weirdnesses.map(function (w) { return [w[0], w[1], "unassigned", "A"]; });
        this.temperatures = temperatures;
        this.humidities = humidities;
        this.renderedElements = new Map();
        this.layoutElements = new Map();
        this.vanillaBiomes = new Map();
        this.slices = [];
        this.layouts = [];
        this.biomes = [];
        this.layoutElementDummy = _LayoutElementDummy__WEBPACK_IMPORTED_MODULE_4__.LayoutElementDummy.create(this);
        this.layoutElementUnassigned = _LayoutElementUnassigned__WEBPACK_IMPORTED_MODULE_5__.LayoutElementUnassigned.create(this);
    }
    BiomeBuilder.prototype.loadJSON = function (json) {
        var _this = this;
        var _a, _b, _c;
        this.continentalnesses = json.continentalnesses;
        this.erosions = json.erosions;
        this.weirdnesses = json.weirdnesses;
        this.temperatures = json.temperatures;
        this.humidities = json.humidities;
        this.layoutElements.clear();
        this.layouts = [];
        this.biomes = [];
        this.slices = [];
        _Vanilla_VanillaBiomes__WEBPACK_IMPORTED_MODULE_0__.VanillaBiomes.registerVanillaBiomes(this);
        this.registerLayoutElement(this.layoutElementDummy);
        this.registerLayoutElement(this.layoutElementUnassigned);
        (_a = json.slices) === null || _a === void 0 ? void 0 : _a.forEach(function (slice) {
            _Slice__WEBPACK_IMPORTED_MODULE_6__.Slice.fromJSON(_this, slice);
        });
        (_b = json.layouts) === null || _b === void 0 ? void 0 : _b.forEach(function (layout) {
            _Layout__WEBPACK_IMPORTED_MODULE_3__.Layout.fromJSON(_this, layout);
        });
        (_c = json.biomes) === null || _c === void 0 ? void 0 : _c.forEach(function (biome) {
            _Biome__WEBPACK_IMPORTED_MODULE_2__.Biome.fromJSON(_this, biome);
        });
    };
    BiomeBuilder.prototype.toJSON = function () {
        var _this = this;
        return {
            continentalnesses: this.continentalnesses,
            erosions: this.erosions,
            weirdnesses: this.weirdnesses.map(function (weirdness) {
                weirdness[2] = _this.getSlice(weirdness[2]).getKey();
                return weirdness;
            }),
            temperatures: this.temperatures,
            humidities: this.humidities,
            layouts: this.layouts,
            slices: this.slices,
            biomes: this.biomes
        };
    };
    BiomeBuilder.prototype.getSlice = function (name) {
        var _a;
        return (_a = this.renderedElements.get(name)) !== null && _a !== void 0 ? _a : this.layoutElementUnassigned;
    };
    BiomeBuilder.prototype.getRenderedElement = function (name) {
        var _a;
        return (_a = this.renderedElements.get(name)) !== null && _a !== void 0 ? _a : this.layoutElementUnassigned;
    };
    BiomeBuilder.prototype.getLayoutElement = function (name) {
        var element = this.layoutElements.get(name);
        /*
        if (element === undefined && this.vanillaBiomes.has(name)){
            element = this.vanillaBiomes.get(name)
            this.registerLayoutElement(element)
        }*/
        if (element === undefined) {
            var biomeKeys = name.split('/');
            if (biomeKeys.length !== 2) {
                return this.layoutElementUnassigned;
            }
            var biomeA = this.getLayoutElement(biomeKeys[0]);
            var biomeB = this.getLayoutElement(biomeKeys[1]);
            return _ABBiome__WEBPACK_IMPORTED_MODULE_1__.ABElement.create(this, biomeA.getKey(), biomeB.getKey());
        }
        else {
            return element;
        }
    };
    BiomeBuilder.prototype.registerSlice = function (slice) {
        this.slices.push(slice);
        this.renderedElements.set(slice.getKey(), slice);
    };
    BiomeBuilder.prototype.removeSlice = function (slice) {
        var index = this.slices.indexOf(slice);
        if (index > -1) {
            this.slices.splice(index, 1);
        }
        this.renderedElements.delete(slice.getKey());
    };
    BiomeBuilder.prototype.registerVanillaBiome = function (biome) {
        this.vanillaBiomes.set(biome.getKey(), biome);
        this.renderedElements.set(biome.getKey(), biome);
    };
    BiomeBuilder.prototype.registerLayoutElement = function (element) {
        this.layoutElements.set(element.getKey(), element);
        this.renderedElements.set(element.getKey(), element);
        if (element instanceof _Layout__WEBPACK_IMPORTED_MODULE_3__.Layout) {
            this.layouts.push(element);
        }
        if (element instanceof _Biome__WEBPACK_IMPORTED_MODULE_2__.Biome) {
            this.biomes.push(element);
        }
    };
    BiomeBuilder.prototype.removeLayoutElement = function (element) {
        this.layoutElements.delete(element.getKey());
        this.renderedElements.delete(element.getKey());
        if (element instanceof _Layout__WEBPACK_IMPORTED_MODULE_3__.Layout) {
            var index = this.layouts.indexOf(element);
            this.layouts.splice(index, 1);
        }
        if (element instanceof _Biome__WEBPACK_IMPORTED_MODULE_2__.Biome) {
            var index = this.biomes.indexOf(element);
            this.biomes.splice(index, 1);
        }
    };
    BiomeBuilder.prototype.getNumTemperatures = function () {
        return this.temperatures.length;
    };
    BiomeBuilder.prototype.getNumHumidities = function () {
        return this.temperatures.length;
    };
    BiomeBuilder.prototype.getNumContinentalnesses = function () {
        return this.continentalnesses.length;
    };
    BiomeBuilder.prototype.getNumErosions = function () {
        return this.erosions.length;
    };
    return BiomeBuilder;
}());



/***/ }),

/***/ "./src/BuilderData/Exporter.ts":
/*!*************************************!*\
  !*** ./src/BuilderData/Exporter.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Exporter": () => (/* binding */ Exporter)
/* harmony export */ });
/* harmony import */ var _Biome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Biome */ "./src/BuilderData/Biome.ts");
/* harmony import */ var _LayoutElementUnassigned__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LayoutElementUnassigned */ "./src/BuilderData/LayoutElementUnassigned.ts");


var Exporter = /** @class */ (function () {
    function Exporter(builder) {
        this.builder = builder;
    }
    Exporter.prototype.export = function () {
        var array = [];
        for (var w_idx = 0; w_idx < this.builder.weirdnesses.length; w_idx++) {
            var slice = this.builder.getSlice(this.builder.weirdnesses[w_idx][2]);
            var mode = this.builder.weirdnesses[w_idx][3];
            array[w_idx] = [];
            for (var c_idx = 0; c_idx < this.builder.continentalnesses.length; c_idx++) {
                array[w_idx][c_idx] = [];
                for (var e_idx = 0; e_idx < this.builder.erosions.length; e_idx++) {
                    array[w_idx][c_idx][e_idx] = [];
                    var layout = slice === null || slice === void 0 ? void 0 : slice.lookup(c_idx, e_idx);
                    for (var t_idx = 0; t_idx < this.builder.temperatures.length; t_idx++) {
                        array[w_idx][c_idx][e_idx][t_idx] = [];
                        for (var h_idx = 0; h_idx < this.builder.humidities.length; h_idx++) {
                            var biome = layout === null || layout === void 0 ? void 0 : layout.lookupRecursive(t_idx, h_idx, mode);
                            if (biome === undefined || biome instanceof _LayoutElementUnassigned__WEBPACK_IMPORTED_MODULE_1__.LayoutElementUnassigned) {
                                array[w_idx][c_idx][e_idx][t_idx][h_idx] = { biome: "", done: true };
                            }
                            else if (biome instanceof _Biome__WEBPACK_IMPORTED_MODULE_0__.Biome) {
                                array[w_idx][c_idx][e_idx][t_idx][h_idx] = { biome: biome.name, done: false };
                            }
                            else {
                                console.warn("Data structure corruption at w: " + w_idx, +" c: " + c_idx + " e: " + e_idx + " t: " + t_idx + " h: " + h_idx + " - Found element of type " + biome.constructor.name);
                            }
                        }
                    }
                }
            }
        }
        var biomes = [];
        for (var w_idx = 0; w_idx < this.builder.weirdnesses.length; w_idx++) {
            for (var c_idx = 0; c_idx < this.builder.continentalnesses.length; c_idx++) {
                for (var e_idx = 0; e_idx < this.builder.erosions.length; e_idx++) {
                    for (var t_idx = 0; t_idx < this.builder.temperatures.length; t_idx++) {
                        for (var h_idx = 0; h_idx < this.builder.humidities.length; h_idx++) {
                            if (array[w_idx][c_idx][e_idx][t_idx][h_idx].done)
                                continue;
                            var max_e_idx = void 0;
                            for (max_e_idx = e_idx; max_e_idx < this.builder.erosions.length; max_e_idx++) {
                                if (!this.checkRange(array, w_idx, c_idx, e_idx, t_idx, h_idx, w_idx, c_idx, max_e_idx, t_idx, h_idx))
                                    break;
                            }
                            max_e_idx--;
                            var max_w_idx = void 0;
                            for (max_w_idx = w_idx; max_w_idx < this.builder.weirdnesses.length; max_w_idx++) {
                                if (!this.checkRange(array, w_idx, c_idx, e_idx, t_idx, h_idx, max_w_idx, c_idx, max_e_idx, t_idx, h_idx))
                                    break;
                            }
                            max_w_idx--;
                            var max_c_idx = void 0;
                            for (max_c_idx = c_idx; max_c_idx < this.builder.continentalnesses.length; max_c_idx++) {
                                if (!this.checkRange(array, w_idx, c_idx, e_idx, t_idx, h_idx, max_w_idx, max_c_idx, max_e_idx, t_idx, h_idx))
                                    break;
                            }
                            max_c_idx--;
                            var max_h_idx = void 0;
                            for (max_h_idx = h_idx; max_h_idx < this.builder.humidities.length; max_h_idx++) {
                                if (!this.checkRange(array, w_idx, c_idx, e_idx, t_idx, h_idx, max_w_idx, max_c_idx, max_e_idx, t_idx, max_h_idx))
                                    break;
                            }
                            max_h_idx--;
                            var max_t_idx = void 0;
                            for (max_t_idx = t_idx; max_t_idx < this.builder.temperatures.length; max_t_idx++) {
                                if (!this.checkRange(array, w_idx, c_idx, e_idx, t_idx, h_idx, max_w_idx, max_c_idx, max_e_idx, max_t_idx, max_h_idx))
                                    break;
                            }
                            max_t_idx--;
                            this.setDone(array, w_idx, c_idx, e_idx, t_idx, h_idx, max_w_idx, max_c_idx, max_e_idx, max_t_idx, max_h_idx);
                            biomes.push({
                                parameters: {
                                    weirdness: [
                                        this.builder.weirdnesses[w_idx][1].min,
                                        this.builder.weirdnesses[max_w_idx][1].max
                                    ],
                                    continentalness: [
                                        this.builder.continentalnesses[c_idx][1].min,
                                        this.builder.continentalnesses[max_c_idx][1].max
                                    ],
                                    erosion: [
                                        this.builder.erosions[e_idx][1].min,
                                        this.builder.erosions[max_e_idx][1].max
                                    ],
                                    temperature: [
                                        this.builder.temperatures[t_idx][1].min,
                                        this.builder.temperatures[max_t_idx][1].max
                                    ],
                                    humidity: [
                                        this.builder.humidities[h_idx][1].min,
                                        this.builder.humidities[max_h_idx][1].max
                                    ],
                                    depth: 1.0,
                                    offset: 0.0
                                },
                                biome: array[w_idx][c_idx][e_idx][t_idx][h_idx].biome
                            });
                            biomes.push({
                                parameters: {
                                    weirdness: [
                                        this.builder.weirdnesses[w_idx][1].min,
                                        this.builder.weirdnesses[max_w_idx][1].max
                                    ],
                                    continentalness: [
                                        this.builder.continentalnesses[c_idx][1].min,
                                        this.builder.continentalnesses[max_c_idx][1].max
                                    ],
                                    erosion: [
                                        this.builder.erosions[e_idx][1].min,
                                        this.builder.erosions[max_e_idx][1].max
                                    ],
                                    temperature: [
                                        this.builder.temperatures[t_idx][1].min,
                                        this.builder.temperatures[max_t_idx][1].max
                                    ],
                                    humidity: [
                                        this.builder.humidities[h_idx][1].min,
                                        this.builder.humidities[max_h_idx][1].max
                                    ],
                                    depth: 0.0,
                                    offset: 0.0
                                },
                                biome: array[w_idx][c_idx][e_idx][t_idx][h_idx].biome
                            });
                        }
                    }
                }
            }
        }
        var dimension = {
            type: "minecraft:overworld",
            generator: {
                biome_source: {
                    biomes: biomes,
                    type: "minecraft:multi_noise"
                },
                seed: 0,
                settings: "minecraft:overworld",
                type: "minecraft:noise"
            }
        };
        console.log("Emmited " + biomes.length + " Biome settings...");
        return (JSON.stringify(dimension));
    };
    Exporter.prototype.checkRange = function (array, min_w_idx, min_c_idx, min_e_idx, min_t_idx, min_h_idx, max_w_idx, max_c_idx, max_e_idx, max_t_idx, max_h_idx) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var biome = array[min_w_idx][min_c_idx][min_e_idx][min_t_idx][min_h_idx].biome;
        for (var w_idx = min_w_idx; w_idx <= max_w_idx; w_idx++) {
            for (var c_idx = min_c_idx; c_idx <= max_c_idx; c_idx++) {
                for (var e_idx = min_e_idx; e_idx <= max_e_idx; e_idx++) {
                    for (var t_idx = min_t_idx; t_idx <= max_t_idx; t_idx++) {
                        for (var h_idx = min_h_idx; h_idx <= max_h_idx; h_idx++) {
                            var cell_biome = (_e = (_d = (_c = (_b = (_a = array[w_idx]) === null || _a === void 0 ? void 0 : _a[c_idx]) === null || _b === void 0 ? void 0 : _b[e_idx]) === null || _c === void 0 ? void 0 : _c[t_idx]) === null || _d === void 0 ? void 0 : _d[h_idx]) === null || _e === void 0 ? void 0 : _e.biome;
                            if (cell_biome === undefined) {
                                console.warn("undefined element at w: " + w_idx + " c: " + c_idx + " e: " + e_idx + " t: " + t_idx + " h: " + h_idx);
                            }
                            if (((_k = (_j = (_h = (_g = (_f = array[w_idx]) === null || _f === void 0 ? void 0 : _f[c_idx]) === null || _g === void 0 ? void 0 : _g[e_idx]) === null || _h === void 0 ? void 0 : _h[t_idx]) === null || _j === void 0 ? void 0 : _j[h_idx]) === null || _k === void 0 ? void 0 : _k.biome) !== biome)
                                return false;
                        }
                    }
                }
            }
        }
        return true;
    };
    Exporter.prototype.setDone = function (array, min_w_idx, min_c_idx, min_e_idx, min_t_idx, min_h_idx, max_w_idx, max_c_idx, max_e_idx, max_t_idx, max_h_idx) {
        for (var w_idx = min_w_idx; w_idx <= max_w_idx; w_idx++) {
            for (var c_idx = min_c_idx; c_idx <= max_c_idx; c_idx++) {
                for (var e_idx = min_e_idx; e_idx <= max_e_idx; e_idx++) {
                    for (var t_idx = min_t_idx; t_idx <= max_t_idx; t_idx++) {
                        for (var h_idx = min_h_idx; h_idx <= max_h_idx; h_idx++) {
                            array[w_idx][c_idx][e_idx][t_idx][h_idx].done = true;
                        }
                    }
                }
            }
        }
    };
    return Exporter;
}());



/***/ }),

/***/ "./src/BuilderData/Layout.ts":
/*!***********************************!*\
  !*** ./src/BuilderData/Layout.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Layout": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var _UI_Renderer_LayoutGridRenderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../UI/Renderer/LayoutGridRenderer */ "./src/UI/Renderer/LayoutGridRenderer.ts");
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uniqid */ "./node_modules/uniqid/index.js");
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uniqid__WEBPACK_IMPORTED_MODULE_1__);


var Layout = /** @class */ (function () {
    function Layout(builder, name, array, key) {
        this.allowEdit = true;
        this.name = name;
        this.builder = builder;
        this.array = array !== null && array !== void 0 ? array : new Array(builder.getNumTemperatures()).fill(0).map(function () { return new Array(builder.getNumHumidities()).fill("unassigned"); });
        this.key = key !== null && key !== void 0 ? key : uniqid__WEBPACK_IMPORTED_MODULE_1__('layout_');
        this.undoActions = [];
    }
    Layout.create = function (builder, name, array, key) {
        var layout = new Layout(builder, name, array, key);
        builder.registerLayoutElement(layout);
        return layout;
    };
    Layout.fromJSON = function (builder, json) {
        return Layout.create(builder, json.name, json.array, json.key);
    };
    Layout.prototype.toJSON = function () {
        var _this = this;
        return {
            key: this.key,
            name: this.name,
            array: this.array.map(function (row) { return row.map(function (e) { return _this.builder.getLayoutElement(e).getKey(); }); })
        };
    };
    Layout.prototype.set = function (temperatureIndex, humidityIndex, element, recordUndo) {
        if (recordUndo === void 0) { recordUndo = true; }
        if (this.array[temperatureIndex][humidityIndex] === element)
            return;
        if (recordUndo)
            this.undoActions.push({ t_id: temperatureIndex, h_id: humidityIndex, value: this.array[temperatureIndex][humidityIndex] });
        this.array[temperatureIndex][humidityIndex] = element;
    };
    Layout.prototype.undo = function () {
        if (this.undoActions.length > 0) {
            var action = this.undoActions.pop();
            this.array[action.t_id][action.h_id] = action.value;
        }
    };
    Layout.prototype.lookupKey = function (temperatureIndex, humidityIndex) {
        return this.array[temperatureIndex][humidityIndex];
    };
    Layout.prototype.lookup = function (temperatureIndex, humidityIndex) {
        var key = this.lookupKey(temperatureIndex, humidityIndex);
        var element = this.builder.getLayoutElement(key);
        return element;
    };
    Layout.prototype.lookupRecursive = function (temperatureIndex, humidityIndex, mode) {
        var element = this.lookup(temperatureIndex, humidityIndex);
        return element.lookupRecursive(temperatureIndex, humidityIndex, mode);
    };
    Layout.prototype.getSize = function () {
        return [this.builder.getNumTemperatures(), this.builder.getNumHumidities()];
    };
    Layout.prototype.getRenderer = function () {
        if (this.renderer === undefined)
            this.renderer = new _UI_Renderer_LayoutGridRenderer__WEBPACK_IMPORTED_MODULE_0__.LayoutGridRenderer(this);
        return this.renderer;
    };
    Layout.prototype.getKey = function () {
        return this.key;
    };
    return Layout;
}());



/***/ }),

/***/ "./src/BuilderData/LayoutElementDummy.ts":
/*!***********************************************!*\
  !*** ./src/BuilderData/LayoutElementDummy.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutElementDummy": () => (/* binding */ LayoutElementDummy)
/* harmony export */ });
var LayoutElementDummy = /** @class */ (function () {
    function LayoutElementDummy() {
        this.allowEdit = false;
        this.name = "__dummy__";
    }
    LayoutElementDummy.create = function (builder) {
        var dummy = new LayoutElementDummy();
        builder.registerLayoutElement(dummy);
        return dummy;
    };
    LayoutElementDummy.prototype.lookupKey = function (temperatureIndex, humidityIndex) {
        return "__dummy__";
    };
    LayoutElementDummy.prototype.lookup = function (temperatureIndex, humidityIndex) {
        return this;
    };
    LayoutElementDummy.prototype.lookupRecursive = function (temperatureIndex, humidityIndex, mode) {
        return this;
    };
    LayoutElementDummy.prototype.getRenderer = function () {
        throw new Error("Method not implemented.");
    };
    LayoutElementDummy.prototype.getKey = function () {
        return "__dummy__";
    };
    return LayoutElementDummy;
}());



/***/ }),

/***/ "./src/BuilderData/LayoutElementUnassigned.ts":
/*!****************************************************!*\
  !*** ./src/BuilderData/LayoutElementUnassigned.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutElementUnassigned": () => (/* binding */ LayoutElementUnassigned)
/* harmony export */ });
/* harmony import */ var _UI_Renderer_ElementRenderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../UI/Renderer/ElementRenderer */ "./src/UI/Renderer/ElementRenderer.ts");

var LayoutElementUnassigned = /** @class */ (function () {
    function LayoutElementUnassigned() {
        this.allowEdit = false;
        this.name = "- Unassigned -";
    }
    LayoutElementUnassigned.create = function (builder) {
        var element = new LayoutElementUnassigned();
        builder.registerLayoutElement(element);
        return element;
    };
    LayoutElementUnassigned.prototype.lookupKey = function (temperatureIndex, humidityIndex) {
        return this.getKey();
    };
    LayoutElementUnassigned.prototype.lookup = function (temperatureIndex, humidityIndex) {
        return this;
    };
    LayoutElementUnassigned.prototype.lookupRecursive = function (temperatureIndex, humidityIndex, mode) {
        return this;
    };
    LayoutElementUnassigned.prototype.getRenderer = function () {
        if (this.renderer === undefined)
            this.renderer = new _UI_Renderer_ElementRenderer__WEBPACK_IMPORTED_MODULE_0__.UnassignedRenderer();
        return this.renderer;
    };
    LayoutElementUnassigned.prototype.getKey = function () {
        return "unassigned";
    };
    return LayoutElementUnassigned;
}());



/***/ }),

/***/ "./src/BuilderData/Slice.ts":
/*!**********************************!*\
  !*** ./src/BuilderData/Slice.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Slice": () => (/* binding */ Slice)
/* harmony export */ });
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uniqid */ "./node_modules/uniqid/index.js");
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uniqid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _UI_Renderer_SliceGridRenderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../UI/Renderer/SliceGridRenderer */ "./src/UI/Renderer/SliceGridRenderer.ts");


var Slice = /** @class */ (function () {
    function Slice(builder, name, array, key) {
        this.allowEdit = true;
        this.name = name;
        this.builder = builder;
        this.array = array;
        this.key = key !== null && key !== void 0 ? key : uniqid__WEBPACK_IMPORTED_MODULE_0__('slice_');
        this.undoActions = [];
    }
    Slice.create = function (builder, name, fill) {
        var slice = new Slice(builder, name, new Array(builder.getNumContinentalnesses()).fill(0).map(function () { return new Array(builder.getNumErosions()).fill(fill); }));
        builder.registerSlice(slice);
        return slice;
    };
    Slice.fromJSON = function (builder, json) {
        var slice = new Slice(builder, json.name, json.array, json.key);
        builder.registerSlice(slice);
        return slice;
    };
    Slice.prototype.toJSON = function () {
        var _this = this;
        return {
            key: this.key,
            name: this.name,
            array: this.array.map(function (row) { return row.map(function (e) { return _this.builder.getLayoutElement(e).getKey(); }); })
        };
    };
    Slice.prototype.getSize = function () {
        return [this.builder.getNumContinentalnesses(), this.builder.getNumErosions()];
    };
    Slice.prototype.set = function (continentalnessIndex, erosionIndex, element) {
        if (this.array[continentalnessIndex][erosionIndex] === element)
            return;
        this.undoActions.push({ c_id: continentalnessIndex, e_id: erosionIndex, value: this.array[continentalnessIndex][erosionIndex] });
        this.array[continentalnessIndex][erosionIndex] = element;
    };
    Slice.prototype.undo = function () {
        if (this.undoActions.length > 0) {
            var action = this.undoActions.pop();
            this.array[action.c_id][action.e_id] = action.value;
        }
    };
    Slice.prototype.lookupKey = function (continentalnessIndex, erosionIndex) {
        return this.array[continentalnessIndex][erosionIndex];
    };
    Slice.prototype.lookup = function (continentalnessIndex, erosionIndex) {
        var key = this.lookupKey(continentalnessIndex, erosionIndex);
        return this.builder.getLayoutElement(key);
    };
    Slice.prototype.getRenderer = function () {
        if (this.renderer === undefined)
            this.renderer = new _UI_Renderer_SliceGridRenderer__WEBPACK_IMPORTED_MODULE_1__.SliceGridRenderer(this);
        return this.renderer;
    };
    Slice.prototype.getKey = function () {
        return this.key;
    };
    return Slice;
}());



/***/ }),

/***/ "./src/UI/AssignSlicesManager.ts":
/*!***************************************!*\
  !*** ./src/UI/AssignSlicesManager.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssignSlicesManager": () => (/* binding */ AssignSlicesManager)
/* harmony export */ });
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI */ "./src/UI/UI.ts");

var AssignSlicesManager = /** @class */ (function () {
    function AssignSlicesManager(builder) {
        this.builder = builder;
        this.title = document.getElementById("layoutName");
        this.div = document.getElementById("assignSlices");
        this.splineCanvas = document.getElementById("splineDisplayCanvas");
        this.undoActions = [];
    }
    AssignSlicesManager.prototype.refresh = function () {
        var _this = this;
        _UI__WEBPACK_IMPORTED_MODULE_0__.UI.getInstance().splineDisplayManager.setPos(undefined);
        this.title.readOnly = true;
        this.title.value = "Assign Slices";
        this.div.classList.remove("hidden");
        this.div.innerHTML = "";
        var table = document.createElement("table");
        this.builder.weirdnesses.forEach(function (weirdness, w_idx) {
            var element = _this.builder.getRenderedElement(weirdness[2]);
            var row = document.createElement("tr");
            var name_col = document.createElement("td");
            name_col.innerHTML = weirdness[0] + ": ";
            name_col.classList.add("weirdness_name");
            row.appendChild(name_col);
            var slice_icon_col = document.createElement("td");
            slice_icon_col.classList.add("slice_icon");
            var slice_icon = document.createElement("canvas");
            slice_icon.width = 100;
            slice_icon.height = 100;
            element.getRenderer().draw(slice_icon.getContext('2d'), 0, 0, 100, 100, -1, -1, false, true);
            slice_icon_col.appendChild(slice_icon);
            row.appendChild(slice_icon_col);
            var slice_name_col = document.createElement("td");
            slice_name_col.innerHTML = element.name;
            slice_name_col.classList.add("slice_name");
            row.appendChild(slice_name_col);
            var slice_mode_select_col = document.createElement("td");
            slice_mode_select_col.classList.add("slice_mode_select");
            var slice_mode_select_img = document.createElement("img");
            slice_mode_select_img.src = "mode_" + weirdness[3] + ".png";
            slice_mode_select_img.onclick = function (evt) {
                _this.builder.weirdnesses[w_idx][3] = weirdness[3] === "A" ? "B" : "A";
                _UI__WEBPACK_IMPORTED_MODULE_0__.UI.getInstance().refresh();
                evt.preventDefault();
                evt.stopPropagation();
            };
            slice_mode_select_col.appendChild(slice_mode_select_img);
            row.onclick = function (evt) {
                if (evt.altKey) {
                    _UI__WEBPACK_IMPORTED_MODULE_0__.UI.getInstance().selectedElement = _this.builder.weirdnesses[w_idx][2];
                    _UI__WEBPACK_IMPORTED_MODULE_0__.UI.getInstance().refresh();
                }
                else {
                    if (_UI__WEBPACK_IMPORTED_MODULE_0__.UI.getInstance().selectedElement !== "" && _this.builder.weirdnesses[w_idx][2] !== _UI__WEBPACK_IMPORTED_MODULE_0__.UI.getInstance().selectedElement) {
                        _this.undoActions.push({ w_idx: w_idx, value: _this.builder.weirdnesses[w_idx][2] });
                        _this.builder.weirdnesses[w_idx][2] = _UI__WEBPACK_IMPORTED_MODULE_0__.UI.getInstance().selectedElement;
                        _UI__WEBPACK_IMPORTED_MODULE_0__.UI.getInstance().refresh();
                    }
                }
            };
            row.oncontextmenu = function (evt) {
                if (_this.builder.weirdnesses[w_idx][2] !== "unassigned") {
                    _UI__WEBPACK_IMPORTED_MODULE_0__.UI.getInstance().openElement = _this.builder.weirdnesses[w_idx][2];
                    _UI__WEBPACK_IMPORTED_MODULE_0__.UI.getInstance().refresh();
                }
                evt.preventDefault();
            };
            row.onmouseover = function (evt) {
                _UI__WEBPACK_IMPORTED_MODULE_0__.UI.getInstance().splineDisplayManager.setWeirdnesses([weirdness[1]]);
                _UI__WEBPACK_IMPORTED_MODULE_0__.UI.getInstance().splineDisplayManager.refresh();
            };
            row.appendChild(slice_mode_select_col);
            table.appendChild(row);
        });
        var t = this;
        table.onmouseout = function (evt) {
            if (!t.div.classList.contains('hidden')) {
                _UI__WEBPACK_IMPORTED_MODULE_0__.UI.getInstance().splineDisplayManager.setWeirdnesses([]);
                _UI__WEBPACK_IMPORTED_MODULE_0__.UI.getInstance().splineDisplayManager.refresh();
            }
        };
        this.div.appendChild(table);
        this.div.tabIndex = 1;
        this.div.focus();
        this.div.onkeydown = function (evt) {
            if (evt.key === "z" && evt.ctrlKey && _this.undoActions.length > 0) {
                var action = _this.undoActions.pop();
                _this.builder.weirdnesses[action.w_idx][2] = action.value;
                _UI__WEBPACK_IMPORTED_MODULE_0__.UI.getInstance().refresh();
            }
        };
    };
    AssignSlicesManager.prototype.hide = function () {
        this.div.classList.add("hidden");
    };
    return AssignSlicesManager;
}());



/***/ }),

/***/ "./src/UI/LayoutEditor.ts":
/*!********************************!*\
  !*** ./src/UI/LayoutEditor.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutEditor": () => (/* binding */ LayoutEditor)
/* harmony export */ });
/* harmony import */ var _BuilderData_ABBiome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../BuilderData/ABBiome */ "./src/BuilderData/ABBiome.ts");
/* harmony import */ var _BuilderData_Biome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../BuilderData/Biome */ "./src/BuilderData/Biome.ts");
/* harmony import */ var _BuilderData_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../BuilderData/Layout */ "./src/BuilderData/Layout.ts");
/* harmony import */ var _BuilderData_LayoutElementUnassigned__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../BuilderData/LayoutElementUnassigned */ "./src/BuilderData/LayoutElementUnassigned.ts");
/* harmony import */ var _BuilderData_Slice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../BuilderData/Slice */ "./src/BuilderData/Slice.ts");
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./UI */ "./src/UI/UI.ts");






function lerp(a, b, l) {
    return ((1 - l) * a + l * b);
}
var LayoutEditor = /** @class */ (function () {
    function LayoutEditor(builder) {
        var _this = this;
        this.builder = builder;
        this.title = document.getElementById("layoutName");
        this.canvas = document.getElementById("layoutEditorCanvas");
        this.splineCanvas = document.getElementById("splineDisplayCanvas");
        var tooltip = document.getElementById("layoutEditorTooltip");
        var tooltip_name = tooltip.getElementsByClassName("name")[0];
        this.title.onchange = function (evt) {
            _this.layout.name = _this.title.value;
            _UI__WEBPACK_IMPORTED_MODULE_5__.UI.getInstance().refresh();
        };
        this.canvas.onmousemove = function (evt) {
            var renderer = _this.layout.getRenderer();
            _this.mouse_position = _this.getMousePosition(evt);
            var ids = renderer.getIdsFromPosition(0, 0, _this.canvas.width, _this.canvas.height, _this.mouse_position.mouse_x, _this.mouse_position.mouse_y);
            if (ids === undefined) {
                tooltip.classList.add("hidden");
                var spline_ctx = _this.splineCanvas.getContext('2d');
                spline_ctx.clearRect(0, 0, _this.splineCanvas.width, _this.splineCanvas.height);
                return;
            }
            _this.canvas.focus();
            tooltip.style.left = (Math.min(evt.pageX + 20, document.body.clientWidth - tooltip.clientWidth)) + "px";
            tooltip.style.top = (evt.pageY + 15) + "px";
            tooltip.classList.remove("hidden");
            var element = _this.layout.lookup(ids.t_idx, ids.h_idx);
            if (_this.layout instanceof _BuilderData_Layout__WEBPACK_IMPORTED_MODULE_2__.Layout) {
                if (element instanceof _BuilderData_ABBiome__WEBPACK_IMPORTED_MODULE_0__.ABElement) {
                    element = element.getElement(ids.mode);
                }
            }
            if (element instanceof _BuilderData_Biome__WEBPACK_IMPORTED_MODULE_1__.Biome) {
                tooltip_name.innerHTML = element.name;
            }
            else if (element instanceof _BuilderData_Layout__WEBPACK_IMPORTED_MODULE_2__.Layout) {
                tooltip_name.innerHTML = "&crarr; " + element.name + " (Layout)";
            }
            else if (element instanceof _BuilderData_LayoutElementUnassigned__WEBPACK_IMPORTED_MODULE_3__.LayoutElementUnassigned) {
                tooltip_name.innerHTML = "Unassigned";
            }
            var cont = builder.continentalnesses[ids.t_idx][1];
            var c = lerp(cont.min, cont.max, ids.local_t);
            var ero = builder.erosions[ids.h_idx][1];
            var e = lerp(ero.min, ero.max, ids.local_h);
            if (_this.layout instanceof _BuilderData_Slice__WEBPACK_IMPORTED_MODULE_4__.Slice) {
                _UI__WEBPACK_IMPORTED_MODULE_5__.UI.getInstance().splineDisplayManager.setPos({ c: c, e: e });
                _UI__WEBPACK_IMPORTED_MODULE_5__.UI.getInstance().splineDisplayManager.refresh();
            }
        };
        this.canvas.onmouseleave = function (evt) {
            tooltip.classList.add("hidden");
            _UI__WEBPACK_IMPORTED_MODULE_5__.UI.getInstance().splineDisplayManager.setPos(undefined);
            _UI__WEBPACK_IMPORTED_MODULE_5__.UI.getInstance().splineDisplayManager.refresh();
        };
        this.canvas.onclick = function (evt) {
            var renderer = _this.layout.getRenderer();
            var mouse_position = _this.getMousePosition(evt);
            var ids = renderer.getIdsFromPosition(0, 0, _this.canvas.width, _this.canvas.height, mouse_position.mouse_x, mouse_position.mouse_y);
            if (ids === undefined) {
                return;
            }
            _this.handleInteraction(ids.t_idx, ids.h_idx, ids.mode, evt.ctrlKey ? "add_alt" : evt.altKey ? "pick" : "add");
        };
        this.canvas.onauxclick = function (evt) {
            if (evt.button === 1) {
                var renderer = _this.layout.getRenderer();
                var mouse_position = _this.getMousePosition(evt);
                var ids = renderer.getIdsFromPosition(0, 0, _this.canvas.width, _this.canvas.height, mouse_position.mouse_x, mouse_position.mouse_y);
                if (ids === undefined) {
                    return;
                }
                _this.handleInteraction(ids.t_idx, ids.h_idx, ids.mode, "pick");
            }
        };
        this.canvas.oncontextmenu = function (evt) {
            var renderer = _this.layout.getRenderer();
            var mouse_position = _this.getMousePosition(evt);
            var ids = renderer.getIdsFromPosition(0, 0, _this.canvas.width, _this.canvas.height, mouse_position.mouse_x, mouse_position.mouse_y);
            if (ids === undefined) {
                return;
            }
            _this.handleInteraction(ids.t_idx, ids.h_idx, ids.mode, "open");
            evt.preventDefault();
        };
        this.canvas.onkeydown = function (evt) {
            if (evt.key === "z" && evt.ctrlKey) {
                _this.undo();
                _UI__WEBPACK_IMPORTED_MODULE_5__.UI.getInstance().refresh();
            }
        };
        this.canvas.onkeyup = function (evt) {
            if (evt.key === "Delete") {
                var renderer = _this.layout.getRenderer();
                var mouse_position = _this.mouse_position;
                var ids = renderer.getIdsFromPosition(0, 0, _this.canvas.width, _this.canvas.height, mouse_position.mouse_x, mouse_position.mouse_y);
                if (ids === undefined) {
                    return;
                }
                _this.handleInteraction(ids.t_idx, ids.h_idx, ids.mode, "remove");
                evt.preventDefault;
            }
        };
    }
    LayoutEditor.prototype.getMousePosition = function (evt) {
        var rect = this.canvas.getBoundingClientRect();
        var scaleX = this.canvas.width / rect.width;
        var scaleY = this.canvas.height / rect.height;
        var canvasMouseX = (evt.clientX - rect.left) * scaleX;
        var canvasMouseY = (evt.clientY - rect.top) * scaleY;
        return { mouse_x: canvasMouseX, mouse_y: canvasMouseY };
    };
    LayoutEditor.prototype.handleInteraction = function (t_idx, h_idx, mode, action) {
        var element = this.layout.lookup(t_idx, h_idx);
        var exact_element = element;
        if (exact_element instanceof _BuilderData_ABBiome__WEBPACK_IMPORTED_MODULE_0__.ABElement) {
            if (mode === "A") {
                exact_element = this.builder.getLayoutElement(exact_element.elementA);
            }
            else {
                exact_element = this.builder.getLayoutElement(exact_element.elementB);
            }
        }
        var selectedElement = _UI__WEBPACK_IMPORTED_MODULE_5__.UI.getInstance().selectedElement;
        if (action === "remove") {
            selectedElement = "unassigned";
            action = "add";
        }
        if (action === "pick") {
            _UI__WEBPACK_IMPORTED_MODULE_5__.UI.getInstance().selectedElement = exact_element.getKey();
            _UI__WEBPACK_IMPORTED_MODULE_5__.UI.getInstance().refresh();
        }
        else if ((action === "add" || action === "add_alt") && selectedElement !== "") {
            //Cycle Check
            var se = this.builder.layoutElements.get(selectedElement);
            if (se instanceof _BuilderData_Layout__WEBPACK_IMPORTED_MODULE_2__.Layout && this.layout instanceof _BuilderData_Layout__WEBPACK_IMPORTED_MODULE_2__.Layout) {
                this.layout.set(t_idx, h_idx, this.builder.layoutElementDummy.getKey(), false);
                if (se.lookupRecursive(t_idx, h_idx, "A") === this.builder.layoutElementDummy || se.lookupRecursive(t_idx, h_idx, "B") === this.builder.layoutElementDummy) {
                    //Cycle found
                    this.layout.set(t_idx, h_idx, element.getKey(), false);
                    return;
                }
                else {
                    this.layout.set(t_idx, h_idx, element.getKey(), false);
                }
            }
            if (!se && this.builder.vanillaBiomes.has(selectedElement)) {
                this.builder.registerLayoutElement(this.builder.vanillaBiomes.get(selectedElement));
            }
            if (action === "add_alt" && !(element instanceof _BuilderData_ABBiome__WEBPACK_IMPORTED_MODULE_0__.ABElement) && this.layout instanceof _BuilderData_Layout__WEBPACK_IMPORTED_MODULE_2__.Layout) {
                // add alternate
                if (mode === "A") {
                    this.layout.set(t_idx, h_idx, selectedElement + "/" + element.getKey());
                }
                else {
                    this.layout.set(t_idx, h_idx, element.getKey() + "/" + selectedElement);
                }
            }
            else {
                if (element instanceof _BuilderData_ABBiome__WEBPACK_IMPORTED_MODULE_0__.ABElement) {
                    if (mode === "A") {
                        if (selectedElement === element.elementB) {
                            this.layout.set(t_idx, h_idx, selectedElement);
                        }
                        else {
                            this.layout.set(t_idx, h_idx, selectedElement + "/" + element.elementB);
                        }
                    }
                    else {
                        if (selectedElement === element.elementA) {
                            this.layout.set(t_idx, h_idx, selectedElement);
                        }
                        else {
                            this.layout.set(t_idx, h_idx, element.elementA + "/" + selectedElement);
                        }
                    }
                }
                else {
                    this.layout.set(t_idx, h_idx, selectedElement);
                }
            }
            _UI__WEBPACK_IMPORTED_MODULE_5__.UI.getInstance().refresh();
        }
        else if (action === "open") {
            // Right mouse button
            // open
            if (exact_element instanceof _BuilderData_Layout__WEBPACK_IMPORTED_MODULE_2__.Layout) {
                _UI__WEBPACK_IMPORTED_MODULE_5__.UI.getInstance().openElement = exact_element.getKey();
                _UI__WEBPACK_IMPORTED_MODULE_5__.UI.getInstance().refresh();
            }
        }
    };
    LayoutEditor.prototype.undo = function () {
        this.layout.undo();
    };
    LayoutEditor.prototype.refresh = function () {
        var _this = this;
        this.canvas.classList.remove("hidden");
        this.title.readOnly = false;
        var element = this.builder.getRenderedElement(_UI__WEBPACK_IMPORTED_MODULE_5__.UI.getInstance().openElement);
        if (element instanceof _BuilderData_Slice__WEBPACK_IMPORTED_MODULE_4__.Slice || element instanceof _BuilderData_Layout__WEBPACK_IMPORTED_MODULE_2__.Layout)
            this.layout = element;
        this.title.value = this.layout.name;
        if (this.layout instanceof _BuilderData_Slice__WEBPACK_IMPORTED_MODULE_4__.Slice) {
            _UI__WEBPACK_IMPORTED_MODULE_5__.UI.getInstance().splineDisplayManager.setWeirdnesses(this.builder.weirdnesses.filter(function (w) { return (w[2] === _this.layout.getKey()); }).map(function (w) { return w[1]; }));
        }
        else {
            _UI__WEBPACK_IMPORTED_MODULE_5__.UI.getInstance().splineDisplayManager.setWeirdnesses([]);
            _UI__WEBPACK_IMPORTED_MODULE_5__.UI.getInstance().splineDisplayManager.setPos(undefined);
        }
        this.layout.getRenderer().draw(this.canvas.getContext('2d'), 0, 0, this.canvas.width, this.canvas.height, -1, -1, true, false);
    };
    LayoutEditor.prototype.hide = function () {
        this.canvas.classList.add("hidden");
    };
    return LayoutEditor;
}());



/***/ }),

/***/ "./src/UI/MenuManager.ts":
/*!*******************************!*\
  !*** ./src/UI/MenuManager.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuManager": () => (/* binding */ MenuManager)
/* harmony export */ });
/* harmony import */ var _BuilderData_Exporter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../BuilderData/Exporter */ "./src/BuilderData/Exporter.ts");
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI */ "./src/UI/UI.ts");


var MenuManager = /** @class */ (function () {
    function MenuManager() {
    }
    MenuManager.createClickHandlers = function () {
        this.loadVanillaButton = document.getElementById('loadVanillaButton');
        this.openButton = document.getElementById('openButton');
        this.saveButton = document.getElementById('saveButton');
        this.exportButton = document.getElementById('exportButton');
        this.loadVanillaButton.onclick = function (evt) {
            fetch('vanilla_overworld_biome_builder.json').then(function (r) { return r.text(); }).then(function (jsonString) {
                _UI__WEBPACK_IMPORTED_MODULE_1__.UI.getInstance().builder.loadJSON(JSON.parse(jsonString));
                _UI__WEBPACK_IMPORTED_MODULE_1__.UI.getInstance().openElement = "assign_slices";
                _UI__WEBPACK_IMPORTED_MODULE_1__.UI.getInstance().refresh();
            });
        };
        this.openButton.onclick = function (evt) {
            var input = document.createElement('input');
            input.type = 'file';
            input.onchange = function (evt) {
                var file = evt.target.files[0];
                var reader = new FileReader();
                reader.readAsText(file, 'UTF-8');
                reader.onload = function (evt) {
                    var jsonString = evt.target.result;
                    _UI__WEBPACK_IMPORTED_MODULE_1__.UI.getInstance().builder.loadJSON(JSON.parse(jsonString));
                    _UI__WEBPACK_IMPORTED_MODULE_1__.UI.getInstance().openElement = "assign_slices";
                    _UI__WEBPACK_IMPORTED_MODULE_1__.UI.getInstance().refresh();
                };
                console.log(file);
            };
            input.click();
        };
        this.saveButton.onclick = function (evt) {
            var jsonString = JSON.stringify(_UI__WEBPACK_IMPORTED_MODULE_1__.UI.getInstance().builder.toJSON());
            var bb = new Blob([jsonString], { type: 'text/plain' });
            var a = document.createElement('a');
            a.download = 'biome_builder.json';
            a.href = window.URL.createObjectURL(bb);
            a.click();
        };
        this.exportButton.onclick = function (evt) {
            var exporter = new _BuilderData_Exporter__WEBPACK_IMPORTED_MODULE_0__.Exporter(_UI__WEBPACK_IMPORTED_MODULE_1__.UI.getInstance().builder);
            var jsonString = exporter.export();
            var bb = new Blob([jsonString], { type: 'text/plain' });
            var a = document.createElement('a');
            a.download = 'dimension.json';
            a.href = window.URL.createObjectURL(bb);
            a.click();
        };
    };
    return MenuManager;
}());



/***/ }),

/***/ "./src/UI/Renderer/ElementRenderer.ts":
/*!********************************************!*\
  !*** ./src/UI/Renderer/ElementRenderer.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BiomeRenderer": () => (/* binding */ BiomeRenderer),
/* harmony export */   "UnassignedRenderer": () => (/* binding */ UnassignedRenderer),
/* harmony export */   "ABBiomeRenderer": () => (/* binding */ ABBiomeRenderer)
/* harmony export */ });
/* harmony import */ var _BuilderData_Biome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../BuilderData/Biome */ "./src/BuilderData/Biome.ts");
/* harmony import */ var _BuilderData_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../BuilderData/Layout */ "./src/BuilderData/Layout.ts");
/* harmony import */ var _BuilderData_LayoutElementUnassigned__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../BuilderData/LayoutElementUnassigned */ "./src/BuilderData/LayoutElementUnassigned.ts");



var BiomeRenderer = /** @class */ (function () {
    function BiomeRenderer(biome) {
        this.biome = biome;
    }
    BiomeRenderer.prototype.draw = function (ctx, minX, minY, sizeX, sizeY, t_idx, h_idx, indicateRecursive, isIcon) {
        if (indicateRecursive === void 0) { indicateRecursive = true; }
        if (isIcon === void 0) { isIcon = false; }
        ctx.fillStyle = this.biome.color;
        ctx.fillRect(minX, minY, sizeX, sizeY);
    };
    BiomeRenderer.prototype.getIdsFromPosition = function (minX, minY, sizeX, sizeY, x, y) {
        return { t_idx: -1, h_idx: -1, mode: "A" };
    };
    return BiomeRenderer;
}());

var UnassignedRenderer = /** @class */ (function () {
    function UnassignedRenderer() {
    }
    UnassignedRenderer.prototype.draw = function (ctx, minX, minY, sizeX, sizeY, t_idx, h_idx, indicateRecursive, isIcon) {
        if (indicateRecursive === void 0) { indicateRecursive = true; }
        if (isIcon === void 0) { isIcon = false; }
        ctx.fillStyle = "gray";
        ctx.fillRect(minX, minY, sizeX, sizeY);
        ctx.fillStyle = "white";
        ctx.font = (sizeX * 0.75) + 'px serif';
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("?", minX + sizeX * 0.5, minY + sizeY * 0.55);
    };
    return UnassignedRenderer;
}());

var ABBiomeRenderer = /** @class */ (function () {
    function ABBiomeRenderer(ab_biome) {
        this.ab_biome = ab_biome;
    }
    ABBiomeRenderer.prototype.draw = function (ctx, minX, minY, sizeX, sizeY, t_idx, h_idx, indicateRecursive, isIcon) {
        if (indicateRecursive === void 0) { indicateRecursive = true; }
        if (isIcon === void 0) { isIcon = false; }
        var isARecursive = this.ab_biome.getElement("A") instanceof _BuilderData_Layout__WEBPACK_IMPORTED_MODULE_1__.Layout;
        var isBRecursive = this.ab_biome.getElement("B") instanceof _BuilderData_Layout__WEBPACK_IMPORTED_MODULE_1__.Layout;
        var elementA = this.ab_biome.lookupRecursive(t_idx, h_idx, "A");
        if (elementA instanceof _BuilderData_Biome__WEBPACK_IMPORTED_MODULE_0__.Biome)
            ctx.fillStyle = elementA.color;
        else if (elementA instanceof _BuilderData_LayoutElementUnassigned__WEBPACK_IMPORTED_MODULE_2__.LayoutElementUnassigned)
            ctx.fillStyle = "gray";
        ctx.beginPath();
        ctx.moveTo(minX, minY);
        ctx.lineTo(minX + sizeX, minY);
        ctx.lineTo(minX, minY + sizeY);
        ctx.fill();
        if (elementA instanceof _BuilderData_LayoutElementUnassigned__WEBPACK_IMPORTED_MODULE_2__.LayoutElementUnassigned) {
            ctx.fillStyle = "white";
            ctx.font = (sizeX * 0.5) + 'px serif';
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText("?", minX + sizeX * 0.3, minY + sizeY * 0.4);
        }
        if (indicateRecursive && isARecursive) {
            ctx.fillStyle = "rgb(255,255,255,0.8)";
            ctx.beginPath();
            ctx.moveTo(minX, minY);
            ctx.lineTo(minX + sizeX, minY);
            ctx.lineTo(minX, minY + sizeY);
            ctx.fill();
            if (!isIcon) {
                ctx.fillStyle = "rgb(0,0,0,1)";
                ctx.font = '110px serif';
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.fillText('↵', minX + 0.25 * sizeX, minY + 0.33 * sizeY);
            }
        }
        var elementB = this.ab_biome.lookupRecursive(t_idx, h_idx, "B");
        if (elementB instanceof _BuilderData_Biome__WEBPACK_IMPORTED_MODULE_0__.Biome)
            ctx.fillStyle = elementB.color;
        else if (elementB instanceof _BuilderData_LayoutElementUnassigned__WEBPACK_IMPORTED_MODULE_2__.LayoutElementUnassigned)
            ctx.fillStyle = "gray";
        ctx.beginPath();
        ctx.moveTo(minX + sizeX, minY);
        ctx.lineTo(minX + sizeX, minY + sizeY);
        ctx.lineTo(minX, minY + sizeY);
        ctx.fill();
        if (elementB instanceof _BuilderData_LayoutElementUnassigned__WEBPACK_IMPORTED_MODULE_2__.LayoutElementUnassigned) {
            ctx.fillStyle = "white";
            ctx.font = (sizeX * 0.5) + 'px serif';
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText("?", minX + sizeX * 0.72, minY + sizeY * 0.75);
        }
        if (indicateRecursive && isBRecursive) {
            ctx.fillStyle = "rgb(255,255,255,0.8)";
            ctx.beginPath();
            ctx.moveTo(minX + sizeX, minY);
            ctx.lineTo(minX + sizeX, minY + sizeY);
            ctx.lineTo(minX, minY + sizeY);
            ctx.fill();
            if (!isIcon) {
                ctx.fillStyle = "rgb(0,0,0,1)";
                ctx.font = '110px serif';
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.fillText('↵', minX + 0.72 * sizeX, minY + 0.8 * sizeY);
            }
        }
        ctx.strokeStyle = "black";
        ctx.lineWidth = sizeX / 30;
        ctx.beginPath();
        ctx.moveTo(minX + sizeX, minY);
        ctx.lineTo(minX, minY + sizeY);
        ctx.stroke();
    };
    return ABBiomeRenderer;
}());



/***/ }),

/***/ "./src/UI/Renderer/LayoutGridRenderer.ts":
/*!***********************************************!*\
  !*** ./src/UI/Renderer/LayoutGridRenderer.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutGridRenderer": () => (/* binding */ LayoutGridRenderer)
/* harmony export */ });
/* harmony import */ var _BuilderData_Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../BuilderData/Layout */ "./src/BuilderData/Layout.ts");

var LayoutGridRenderer = /** @class */ (function () {
    function LayoutGridRenderer(layout) {
        this.layout = layout;
    }
    LayoutGridRenderer.prototype.draw = function (ctx, minX, minY, sizeX, sizeY, _t_idx, _h_idx, indicateRecursive, isIcon) {
        if (_t_idx === void 0) { _t_idx = -1; }
        if (_h_idx === void 0) { _h_idx = -1; }
        if (indicateRecursive === void 0) { indicateRecursive = true; }
        if (isIcon === void 0) { isIcon = false; }
        var size = this.layout.getSize();
        var maxElementSizeX = sizeX / size[1];
        var maxElementSizeY = sizeY / size[0];
        var elementSize = Math.min(maxElementSizeX, maxElementSizeY);
        var xOffset = (elementSize * size[1] - sizeX) / 2 + minX;
        var yOffset = (elementSize * size[0] - sizeY) / 2 + minY;
        ctx.clearRect(minX, minY, sizeX, sizeY);
        for (var t_idx = 0; t_idx < size[0]; t_idx++) {
            for (var h_idx = 0; h_idx < size[1]; h_idx++) {
                var element = this.layout.lookup(t_idx, h_idx);
                if (element === undefined)
                    console.log("undefined at: " + t_idx + ", " + h_idx);
                var isRecursive = false;
                if (element instanceof _BuilderData_Layout__WEBPACK_IMPORTED_MODULE_0__.Layout) {
                    element = element.lookupRecursive(t_idx, h_idx, "Any");
                    isRecursive = true;
                }
                element.getRenderer().draw(ctx, xOffset + h_idx * elementSize, yOffset + t_idx * elementSize, elementSize, elementSize, t_idx, h_idx, indicateRecursive, isIcon);
                if (isRecursive && indicateRecursive) {
                    ctx.fillStyle = "rgb(255,255,255,0.8)";
                    ctx.beginPath();
                    ctx.rect(xOffset + h_idx * elementSize, yOffset + t_idx * elementSize, elementSize, elementSize);
                    ctx.fill();
                    if (!isIcon) {
                        ctx.fillStyle = "rgb(0,0,0,1)";
                        ctx.font = '140px serif';
                        ctx.textAlign = "center";
                        ctx.textBaseline = "middle";
                        ctx.fillText('↵', xOffset + (h_idx + 0.5) * elementSize, yOffset + (t_idx + 0.6) * elementSize);
                    }
                }
                ctx.strokeStyle = "black";
                ctx.lineWidth = elementSize / 30;
                ctx.beginPath();
                ctx.rect(xOffset + h_idx * elementSize, yOffset + t_idx * elementSize, elementSize, elementSize);
                ctx.stroke();
            }
        }
    };
    LayoutGridRenderer.prototype.getIdsFromPosition = function (minX, minY, sizeX, sizeY, x, y) {
        var size = this.layout.getSize();
        var maxElementSizeX = sizeX / size[1];
        var maxElementSizeY = sizeY / size[0];
        var elementSize = Math.min(maxElementSizeX, maxElementSizeY);
        if (x < minX || y < minY || x > minX + size[1] * elementSize || y > minY + size[0] * elementSize)
            return undefined;
        var t_idx = Math.floor((y - minY) / elementSize);
        var h_idx = Math.floor((x - minX) / elementSize);
        var localX = x - minX - (t_idx * elementSize);
        var localY = y - minY - (h_idx * elementSize);
        var mode = localX > elementSize - localY ? "B" : "A";
        return { t_idx: t_idx, h_idx: h_idx, local_t: localX / elementSize, local_h: localY / elementSize, mode: mode };
    };
    return LayoutGridRenderer;
}());



/***/ }),

/***/ "./src/UI/Renderer/SliceGridRenderer.ts":
/*!**********************************************!*\
  !*** ./src/UI/Renderer/SliceGridRenderer.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SliceGridRenderer": () => (/* binding */ SliceGridRenderer)
/* harmony export */ });
/* harmony import */ var _BuilderData_Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../BuilderData/Layout */ "./src/BuilderData/Layout.ts");

var SliceGridRenderer = /** @class */ (function () {
    function SliceGridRenderer(slice) {
        this.slice = slice;
    }
    SliceGridRenderer.prototype.draw = function (ctx, minX, minY, sizeX, sizeY, _t_idx, _h_idx, indicateRecursive, isIcon) {
        if (_t_idx === void 0) { _t_idx = -1; }
        if (_h_idx === void 0) { _h_idx = -1; }
        if (indicateRecursive === void 0) { indicateRecursive = true; }
        if (isIcon === void 0) { isIcon = false; }
        var size = this.slice.getSize();
        var maxElementSizeX = sizeX / size[1];
        var maxElementSizeY = sizeY / size[0];
        var elementSize = Math.min(maxElementSizeX, maxElementSizeY);
        var xOffset = (elementSize * size[1] - sizeX) / 2 + minX;
        var yOffset = (elementSize * size[0] - sizeY) / 2 + minY;
        ctx.clearRect(minX, minY, sizeX, sizeY);
        for (var t_idx = 0; t_idx < size[0]; t_idx++) {
            for (var h_idx = 0; h_idx < size[1]; h_idx++) {
                var element = this.slice.lookup(t_idx, h_idx);
                if (element === undefined)
                    console.log("undefined at: " + t_idx + ", " + h_idx);
                if (element instanceof _BuilderData_Layout__WEBPACK_IMPORTED_MODULE_0__.Layout && !isIcon)
                    element.getRenderer().draw(ctx, xOffset + (h_idx + 0.1) * elementSize, yOffset + (t_idx + 0.1) * elementSize, elementSize * 0.8, elementSize * 0.8, t_idx, h_idx, false, true);
                else
                    element.getRenderer().draw(ctx, xOffset + h_idx * elementSize, yOffset + t_idx * elementSize, elementSize, elementSize, t_idx, h_idx, false, true);
                /*
                if (element instanceof Layout && !isIcon) {
                    ctx.fillStyle = "rgb(0,0,0,1)"
                    ctx.font = '60px serif';
                    ctx.textAlign = "center"
                    ctx.textBaseline = "middle"
                    ctx.fillText('↵', xOffset + (h_idx + 0.5) * elementSize, yOffset + (t_idx + 0.6) * elementSize)
                }*/
                ctx.strokeStyle = "black";
                ctx.lineWidth = elementSize / 30;
                ctx.beginPath();
                ctx.rect(xOffset + h_idx * elementSize, yOffset + t_idx * elementSize, elementSize, elementSize);
                ctx.stroke();
            }
        }
    };
    SliceGridRenderer.prototype.getIdsFromPosition = function (minX, minY, sizeX, sizeY, x, y) {
        var size = this.slice.getSize();
        var maxElementSizeX = sizeX / size[1];
        var maxElementSizeY = sizeY / size[0];
        var elementSize = Math.min(maxElementSizeX, maxElementSizeY);
        if (x < minX || y < minY || x > minX + size[1] * elementSize || y > minY + size[0] * elementSize)
            return undefined;
        var t_idx = Math.floor((y - minY) / elementSize);
        var h_idx = Math.floor((x - minX) / elementSize);
        var localX = x - minX - (h_idx * elementSize);
        var localY = y - minY - (t_idx * elementSize);
        var mode = localX > elementSize - localY ? "B" : "A";
        return { t_idx: t_idx, h_idx: h_idx, local_h: localX / elementSize, local_t: localY / elementSize, mode: mode };
    };
    return SliceGridRenderer;
}());



/***/ }),

/***/ "./src/UI/SidebarManager.ts":
/*!**********************************!*\
  !*** ./src/UI/SidebarManager.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarManager": () => (/* binding */ SidebarManager)
/* harmony export */ });
/* harmony import */ var _BuilderData_Biome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../BuilderData/Biome */ "./src/BuilderData/Biome.ts");
/* harmony import */ var _BuilderData_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../BuilderData/Layout */ "./src/BuilderData/Layout.ts");
/* harmony import */ var _BuilderData_Slice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../BuilderData/Slice */ "./src/BuilderData/Slice.ts");
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UI */ "./src/UI/UI.ts");




var SidebarManager = /** @class */ (function () {
    function SidebarManager(builder) {
        this.sidebar = document.getElementById("sidebar_menu");
        this.builder = builder;
    }
    SidebarManager.prototype.refresh = function () {
        var _this = this;
        var _a, _b, _c;
        var lastSearch = (_c = (_b = (_a = this.sidebar.getElementsByClassName("search_bar")) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.value) !== null && _c !== void 0 ? _c : "";
        this.sidebar.innerHTML = "";
        this.layout_divs = [];
        this.biome_divs = [];
        // Add Assign splices Button
        var assignSplicesButton = document.createElement("div");
        assignSplicesButton.classList.add("sidebar_entry");
        assignSplicesButton.classList.add("assign_slices_button");
        if (_UI__WEBPACK_IMPORTED_MODULE_3__.UI.getInstance().openElement === "assign_slices") {
            assignSplicesButton.classList.add("open");
        }
        assignSplicesButton.innerHTML = "Assign Slices";
        assignSplicesButton.onclick = function (evt) {
            _UI__WEBPACK_IMPORTED_MODULE_3__.UI.getInstance().selectedElement = "";
            _UI__WEBPACK_IMPORTED_MODULE_3__.UI.getInstance().openElement = "assign_slices";
            _UI__WEBPACK_IMPORTED_MODULE_3__.UI.getInstance().refresh();
            evt.preventDefault();
        };
        assignSplicesButton.oncontextmenu = assignSplicesButton.onclick;
        this.sidebar.appendChild(assignSplicesButton);
        // Add spacer
        var spacer0 = document.createElement("div");
        spacer0.classList.add("spacer");
        this.sidebar.appendChild(spacer0);
        // Add Add Button
        var addSlicesButton = document.createElement("div");
        addSlicesButton.classList.add("sidebar_entry");
        addSlicesButton.classList.add("add_layout_button");
        addSlicesButton.innerHTML = "+ Add Slice";
        addSlicesButton.onclick = function (evt) {
            var slice = _BuilderData_Slice__WEBPACK_IMPORTED_MODULE_2__.Slice.create(_this.builder, "New Slice", "unassigned");
            _UI__WEBPACK_IMPORTED_MODULE_3__.UI.getInstance().openElement = slice.getKey();
            _UI__WEBPACK_IMPORTED_MODULE_3__.UI.getInstance().refresh();
            _this.sidebar.getElementsByClassName("open")[0].scrollIntoView(false);
        };
        this.sidebar.appendChild(addSlicesButton);
        // Add Slices
        this.builder.slices.forEach(function (slice) {
            _this.layout_divs.push(_this.createElementDiv(slice, "slice"));
        });
        // Add spacer
        var spacer1 = document.createElement("div");
        spacer1.classList.add("spacer");
        this.sidebar.appendChild(spacer1);
        // Add Add Button
        var addLayoutButton = document.createElement("div");
        addLayoutButton.classList.add("sidebar_entry");
        addLayoutButton.classList.add("add_layout_button");
        addLayoutButton.innerHTML = "+ Add Layout";
        addLayoutButton.onclick = function (evt) {
            var layout = _BuilderData_Layout__WEBPACK_IMPORTED_MODULE_1__.Layout.create(_this.builder, "New Layout");
            _UI__WEBPACK_IMPORTED_MODULE_3__.UI.getInstance().openElement = layout.getKey();
            _UI__WEBPACK_IMPORTED_MODULE_3__.UI.getInstance().refresh();
            _this.sidebar.getElementsByClassName("open")[0].scrollIntoView(false);
        };
        this.sidebar.appendChild(addLayoutButton);
        // Layouts
        this.builder.layouts.forEach(function (element) {
            _this.layout_divs.push(_this.createElementDiv(element, "layout"));
        });
        // Add spacer
        var spacer2 = document.createElement("div");
        spacer2.classList.add("spacer");
        this.sidebar.appendChild(spacer2);
        // Add Add Button
        var addBiomeButton = document.createElement("div");
        addBiomeButton.classList.add("sidebar_entry");
        addBiomeButton.classList.add("add_layout_button");
        addBiomeButton.innerHTML = "+ Add Biome";
        addBiomeButton.onclick = function (evt) {
            var biome_name = prompt("Input biome name:", "new:biome");
            if (biome_name === null)
                return;
            var biome = _BuilderData_Biome__WEBPACK_IMPORTED_MODULE_0__.Biome.create(_this.builder, biome_name, "#888888");
            if (_UI__WEBPACK_IMPORTED_MODULE_3__.UI.getInstance().openElement !== "assign_slises")
                _UI__WEBPACK_IMPORTED_MODULE_3__.UI.getInstance().selectedElement = biome.getKey();
            _UI__WEBPACK_IMPORTED_MODULE_3__.UI.getInstance().refresh();
        };
        this.sidebar.appendChild(addBiomeButton);
        // Add seachBar
        this.search_bar = document.createElement("input");
        this.search_bar.type = "text";
        this.search_bar.placeholder = "Seach...";
        this.search_bar.value = lastSearch;
        this.search_bar.classList.add("search_bar");
        this.search_bar.oninput = function (evt) {
            _this.updateBiomeSearch();
        };
        this.sidebar.appendChild(this.search_bar);
        // Biomes
        this.builder.biomes.forEach(function (element) {
            var div = _this.createElementDiv(element, "biome");
            _this.biome_divs.push(div);
        });
        var vanilla_label = document.createElement("div");
        vanilla_label.innerHTML = "Unused Vanilla Biomes";
        vanilla_label.classList.add("label");
        this.sidebar.appendChild(vanilla_label);
        // Vanilla Biomes
        this.builder.vanillaBiomes.forEach(function (element) {
            if (_this.builder.layoutElements.has(element.getKey()))
                return;
            var div = _this.createElementDiv(element, "vanilla_biome");
            _this.biome_divs.push(div);
        });
        // Add bottom spacer
        this.bottom_spacer = document.createElement("div");
        this.bottom_spacer.classList.add("spacer");
        this.sidebar.appendChild(this.bottom_spacer);
        this.sidebar.onscroll = function (evt) {
            var bottom_spacer_pos = _this.bottom_spacer.getBoundingClientRect().top - _this.sidebar.getBoundingClientRect().top;
            var bottom_spacer_height = Math.max((_this.sidebar.clientHeight - bottom_spacer_pos - 20), 0);
            _this.bottom_spacer.style.height = bottom_spacer_height + "px";
        };
        this.updateBiomeSearch();
    };
    SidebarManager.prototype.updateBiomeSearch = function () {
        var _this = this;
        this.bottom_spacer.style.height = "10000pt";
        this.biome_divs.forEach(function (div) {
            if (div.getAttribute("key").includes(_this.search_bar.value)) {
                div.classList.remove("hidden");
            }
            else {
                div.classList.add("hidden");
            }
        });
        var bottom_spacer_pos = this.bottom_spacer.getBoundingClientRect().top - this.sidebar.getBoundingClientRect().top;
        var bottom_spacer_height = Math.max((this.sidebar.clientHeight - bottom_spacer_pos - 20), 0);
        this.bottom_spacer.style.height = bottom_spacer_height + "px";
    };
    SidebarManager.prototype.createElementDiv = function (element, c) {
        var _this = this;
        var _a, _b;
        var element_div = document.createElement("div");
        element_div.classList.add("sidebar_entry");
        element_div.classList.add(c);
        element_div.draggable = (c !== "vanilla_biome");
        if (element.getKey() === ((_a = _UI__WEBPACK_IMPORTED_MODULE_3__.UI.getInstance()) === null || _a === void 0 ? void 0 : _a.selectedElement)) {
            element_div.classList.add("selected");
        }
        if (element.getKey() === ((_b = _UI__WEBPACK_IMPORTED_MODULE_3__.UI.getInstance()) === null || _b === void 0 ? void 0 : _b.openElement)) {
            element_div.classList.add("open");
        }
        element_div.setAttribute("key", element.name);
        if (element instanceof _BuilderData_Biome__WEBPACK_IMPORTED_MODULE_0__.Biome) {
            var color_input_1 = document.createElement("input");
            color_input_1.classList.add("color_selector");
            color_input_1.type = "color";
            color_input_1.value = element.color;
            //color_input.disabled = !element.allowEdit
            color_input_1.onchange = function (evt) {
                element.color = color_input_1.value;
                _UI__WEBPACK_IMPORTED_MODULE_3__.UI.getInstance().refresh();
            };
            element_div.appendChild(color_input_1);
        }
        else {
            var layout_canvas = document.createElement("canvas");
            layout_canvas.classList.add("grid");
            layout_canvas.width = 100;
            layout_canvas.height = 100;
            element.getRenderer().draw(layout_canvas.getContext("2d"), 0, 0, 100, 100, -1, -1, false, true);
            element_div.appendChild(layout_canvas);
        }
        var layout_name = document.createElement("span");
        layout_name.innerHTML = element.name;
        layout_name.classList.add("name");
        element_div.appendChild(layout_name);
        if (element.allowEdit) {
            var edit_name_button = document.createElement("img");
            edit_name_button.classList.add("button", "edit");
            edit_name_button.src = "edit-pen.svg";
            edit_name_button.onclick = function (evt) {
                var new_name = prompt("Edit name of " + element.constructor.name, element.name);
                if (new_name === null)
                    return;
                element.name = new_name;
                _UI__WEBPACK_IMPORTED_MODULE_3__.UI.getInstance().refresh();
                evt.stopPropagation();
            };
            element_div.appendChild(edit_name_button);
        }
        if (c !== "vanilla_biome") {
            var db = document.createElement("img");
            db.classList.add("button", "delete");
            db.src = "trash-bin.svg";
            db.onclick = function (evt) {
                if (!confirm("Deleting " + element.constructor.name + " \"" + element.name + "\""))
                    return;
                if (element instanceof _BuilderData_Slice__WEBPACK_IMPORTED_MODULE_2__.Slice) {
                    _this.builder.removeSlice(element);
                }
                else {
                    _this.builder.removeLayoutElement(element);
                }
                _UI__WEBPACK_IMPORTED_MODULE_3__.UI.getInstance().refresh();
                evt.stopPropagation();
            };
            element_div.appendChild(db);
        }
        if (element instanceof _BuilderData_Layout__WEBPACK_IMPORTED_MODULE_1__.Layout || element instanceof _BuilderData_Slice__WEBPACK_IMPORTED_MODULE_2__.Slice) {
            element_div.oncontextmenu = function (evt) {
                if (_UI__WEBPACK_IMPORTED_MODULE_3__.UI.getInstance().openElement === "assign_slices") {
                    _UI__WEBPACK_IMPORTED_MODULE_3__.UI.getInstance().selectedElement = "";
                }
                _UI__WEBPACK_IMPORTED_MODULE_3__.UI.getInstance().openElement = element.getKey();
                if (_UI__WEBPACK_IMPORTED_MODULE_3__.UI.getInstance().selectedElement === element.getKey()) {
                    _UI__WEBPACK_IMPORTED_MODULE_3__.UI.getInstance().selectedElement = "";
                }
                _UI__WEBPACK_IMPORTED_MODULE_3__.UI.getInstance().refresh();
                evt.preventDefault();
            };
            element_div.ondblclick = element_div.oncontextmenu;
        }
        else if (element instanceof _BuilderData_Biome__WEBPACK_IMPORTED_MODULE_0__.Biome && element.allowEdit) {
        }
        element_div.onclick = function (evt) {
            if ((_UI__WEBPACK_IMPORTED_MODULE_3__.UI.getInstance().openElement === "assign_slices") !== (element instanceof _BuilderData_Slice__WEBPACK_IMPORTED_MODULE_2__.Slice))
                return;
            _UI__WEBPACK_IMPORTED_MODULE_3__.UI.getInstance().selectedElement = element.getKey();
            _UI__WEBPACK_IMPORTED_MODULE_3__.UI.getInstance().refresh();
            /*
            this.layout_divs.forEach(div => {
                div.classList.toggle("selected", div.getAttribute("key") === UI.getInstance().selectedElement)
            });

            this.biome_divs.forEach(div => {
                div.classList.toggle("selected", div.getAttribute("key") === UI.getInstance().selectedElement)
            });*/
        };
        element_div.ondragstart = function (evt) {
            evt.dataTransfer.setData("type", c);
            evt.dataTransfer.setData("key", element.getKey());
            element_div.classList.add("dragged");
        };
        element_div.ondragend = function (evt) {
            element_div.classList.remove("dragged");
        };
        element_div.ondragover = function (evt) {
            if (evt.dataTransfer.getData("type") === c && evt.dataTransfer.getData("key") !== element.getKey()) {
                var self_id, other_id;
                if (element instanceof _BuilderData_Slice__WEBPACK_IMPORTED_MODULE_2__.Slice) {
                    self_id = _this.builder.slices.indexOf(element);
                    other_id = _this.builder.slices.findIndex(function (e) { return e.getKey() === evt.dataTransfer.getData("key"); });
                }
                else if (element instanceof _BuilderData_Layout__WEBPACK_IMPORTED_MODULE_1__.Layout) {
                    self_id = _this.builder.layouts.indexOf(element);
                    other_id = _this.builder.layouts.findIndex(function (e) { return e.getKey() === evt.dataTransfer.getData("key"); });
                }
                else if (element instanceof _BuilderData_Biome__WEBPACK_IMPORTED_MODULE_0__.Biome) {
                    self_id = _this.builder.biomes.indexOf(element);
                    other_id = _this.builder.biomes.findIndex(function (e) { return e.getKey() === evt.dataTransfer.getData("key"); });
                }
                if (self_id < other_id) {
                    element_div.classList.add("dragover_up");
                }
                else {
                    element_div.classList.add("dragover_down");
                }
                evt.preventDefault();
            }
        };
        element_div.ondragleave = function (evt) {
            element_div.classList.remove("dragover_up", "dragover_down");
        };
        element_div.ondrop = function (evt) {
            element_div.classList.remove("dragover_up", "dragover_down");
            var self_id, other_id;
            if (element instanceof _BuilderData_Slice__WEBPACK_IMPORTED_MODULE_2__.Slice) {
                self_id = _this.builder.slices.indexOf(element);
                other_id = _this.builder.slices.findIndex(function (e) { return e.getKey() === evt.dataTransfer.getData("key"); });
                _this.builder.slices.splice(self_id, 0, _this.builder.slices.splice(other_id, 1)[0]);
            }
            else if (element instanceof _BuilderData_Layout__WEBPACK_IMPORTED_MODULE_1__.Layout) {
                self_id = _this.builder.layouts.indexOf(element);
                other_id = _this.builder.layouts.findIndex(function (e) { return e.getKey() === evt.dataTransfer.getData("key"); });
                _this.builder.layouts.splice(self_id, 0, _this.builder.layouts.splice(other_id, 1)[0]);
            }
            else if (element instanceof _BuilderData_Biome__WEBPACK_IMPORTED_MODULE_0__.Biome) {
                self_id = _this.builder.biomes.indexOf(element);
                other_id = _this.builder.biomes.findIndex(function (e) { return e.getKey() === evt.dataTransfer.getData("key"); });
                _this.builder.biomes.splice(self_id, 0, _this.builder.biomes.splice(other_id, 1)[0]);
            }
            _UI__WEBPACK_IMPORTED_MODULE_3__.UI.getInstance().refresh();
        };
        this.sidebar.appendChild(element_div);
        return element_div;
    };
    return SidebarManager;
}());



/***/ }),

/***/ "./src/UI/SplineDisplayManager.ts":
/*!****************************************!*\
  !*** ./src/UI/SplineDisplayManager.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SplineDisplayManager": () => (/* binding */ SplineDisplayManager)
/* harmony export */ });
/* harmony import */ var deepslate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! deepslate */ "./node_modules/deepslate/dist/deepslate.esm.js");

var SplineDisplayManager = /** @class */ (function () {
    function SplineDisplayManager(builder) {
        this.builder = builder;
        this.splineCanvas = document.getElementById("splineDisplayCanvas");
        this.weirdnesses = [];
    }
    SplineDisplayManager.prototype.setPos = function (pos) {
        this.pos = pos;
    };
    SplineDisplayManager.prototype.setWeirdnesses = function (weirdnesses) {
        this.weirdnesses = weirdnesses;
    };
    SplineDisplayManager.prototype.refresh = function () {
        var spline_ctx = this.splineCanvas.getContext('2d');
        var scw = this.splineCanvas.width;
        var sch = this.splineCanvas.height;
        spline_ctx.clearRect(0, 0, scw, sch);
        if (this.pos) {
            spline_ctx.fillStyle = "rgb(92, 154, 255)";
            spline_ctx.fillRect(0, 0.8 * sch, scw, 0.2 * sch);
            spline_ctx.fillStyle = "rgb(80,80,80)";
            spline_ctx.beginPath();
            spline_ctx.moveTo(0, sch);
            for (var w = -1; w < 1; w += 0.1) {
                var offset = deepslate__WEBPACK_IMPORTED_MODULE_0__.TerrainShaper.offset(deepslate__WEBPACK_IMPORTED_MODULE_0__.TerrainShaper.point(this.pos.c, this.pos.e, w));
                spline_ctx.lineTo((w + 1) * 0.5 * scw, -offset * 0.75 * sch + 0.8 * sch);
            }
            spline_ctx.lineTo(scw, sch);
            spline_ctx.fill();
            spline_ctx.strokeStyle = "rgb(255,0,0)";
            spline_ctx.setLineDash([5, 5]);
            spline_ctx.lineWidth = 3;
            spline_ctx.beginPath();
            for (var w = -1; w < 1; w += 0.1) {
                var factor = deepslate__WEBPACK_IMPORTED_MODULE_0__.TerrainShaper.factor(deepslate__WEBPACK_IMPORTED_MODULE_0__.TerrainShaper.point(this.pos.c, this.pos.e, w));
                spline_ctx.lineTo((w + 1) * 0.5 * scw, -(1 / factor) * 50 * sch + sch);
            }
            spline_ctx.stroke();
            spline_ctx.strokeStyle = "rgb(0,0,255)";
            spline_ctx.setLineDash([5, 5]);
            spline_ctx.lineWidth = 3;
            spline_ctx.beginPath();
            for (var w = -1; w < 1; w += 0.1) {
                var peaks = deepslate__WEBPACK_IMPORTED_MODULE_0__.TerrainShaper.peaks(deepslate__WEBPACK_IMPORTED_MODULE_0__.TerrainShaper.point(this.pos.c, this.pos.e, w));
                spline_ctx.lineTo((w + 1) * 0.5 * scw, -peaks / 100 * sch + sch);
            }
            spline_ctx.stroke();
        }
        spline_ctx.fillStyle = "rgba(255,255,0,0.2)";
        spline_ctx.strokeStyle = "yellow";
        spline_ctx.setLineDash([5, 5]);
        spline_ctx.lineWidth = 1;
        this.weirdnesses.forEach(function (weirdness) {
            spline_ctx.beginPath();
            spline_ctx.rect((weirdness.min + 1) * 0.5 * scw, -2, (weirdness.max - weirdness.min) * 0.5 * scw, sch + 4);
            spline_ctx.stroke();
            spline_ctx.fill();
        });
    };
    return SplineDisplayManager;
}());



/***/ }),

/***/ "./src/UI/UI.ts":
/*!**********************!*\
  !*** ./src/UI/UI.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UI": () => (/* binding */ UI)
/* harmony export */ });
/* harmony import */ var _AssignSlicesManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AssignSlicesManager */ "./src/UI/AssignSlicesManager.ts");
/* harmony import */ var _LayoutEditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LayoutEditor */ "./src/UI/LayoutEditor.ts");
/* harmony import */ var _MenuManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MenuManager */ "./src/UI/MenuManager.ts");
/* harmony import */ var _SidebarManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SidebarManager */ "./src/UI/SidebarManager.ts");
/* harmony import */ var _SplineDisplayManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SplineDisplayManager */ "./src/UI/SplineDisplayManager.ts");





var UI = /** @class */ (function () {
    function UI(builder) {
        this.selectedElement = "";
        UI.instance = this;
        this.openElement = "assign_slices";
        this.builder = builder;
        this.layoutEditor = new _LayoutEditor__WEBPACK_IMPORTED_MODULE_1__.LayoutEditor(builder);
        this.sidebarManager = new _SidebarManager__WEBPACK_IMPORTED_MODULE_3__.SidebarManager(builder);
        this.assignSlicesEditor = new _AssignSlicesManager__WEBPACK_IMPORTED_MODULE_0__.AssignSlicesManager(builder);
        this.splineDisplayManager = new _SplineDisplayManager__WEBPACK_IMPORTED_MODULE_4__.SplineDisplayManager(builder);
        this.refresh();
        _MenuManager__WEBPACK_IMPORTED_MODULE_2__.MenuManager.createClickHandlers();
    }
    UI.create = function (builder) {
        if (UI.instance !== undefined)
            throw new Error("UI instance already exists");
        new UI(builder);
    };
    UI.getInstance = function () {
        return UI.instance;
    };
    UI.prototype.refresh = function () {
        this.sidebarManager.refresh();
        if (this.openElement === "assign_slices") {
            this.layoutEditor.hide();
            this.assignSlicesEditor.refresh();
        }
        else {
            this.assignSlicesEditor.hide();
            this.layoutEditor.refresh();
        }
        this.splineDisplayManager.refresh();
    };
    UI.instance = undefined;
    return UI;
}());



/***/ }),

/***/ "./src/Vanilla/VanillaBiomes.ts":
/*!**************************************!*\
  !*** ./src/Vanilla/VanillaBiomes.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VanillaBiomes": () => (/* binding */ VanillaBiomes)
/* harmony export */ });
/* harmony import */ var _BuilderData_Biome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../BuilderData/Biome */ "./src/BuilderData/Biome.ts");

var VanillaBiomes = /** @class */ (function () {
    function VanillaBiomes() {
    }
    VanillaBiomes.registerVanillaBiomes = function (builder) {
        for (var _i = 0, _a = VanillaBiomes.biomes; _i < _a.length; _i++) {
            var biome = _a[_i];
            _BuilderData_Biome__WEBPACK_IMPORTED_MODULE_0__.Biome.create(builder, biome.name, this.colorToHex(biome.r, biome.g, biome.b), undefined, true);
        }
    };
    VanillaBiomes.colorToHex = function (r, g, b) {
        return '#' + (r << 16 | g << 8 | b).toString(16).padStart(6, "0");
    };
    VanillaBiomes.biomes = [
        { name: "minecraft:ocean", r: 50, g: 50, b: 255 },
        { name: "minecraft:plains", r: 61, g: 196, b: 12 },
        { name: "minecraft:desert", r: 247, g: 237, b: 40 },
        { name: "minecraft:extreme_hills", r: 66, g: 66, b: 66 },
        { name: "minecraft:forest", r: 21, g: 107, b: 23 },
        { name: "minecraft:taiga", r: 105, g: 69, b: 19 },
        { name: "minecraft:swamp", r: 60, g: 130, b: 96 },
        { name: "minecraft:river", r: 53, g: 116, b: 232 },
        { name: "minecraft:nether_wastes", r: 163, g: 62, b: 62 },
        { name: "minecraft:the_end", r: 252, g: 244, b: 121 },
        { name: "minecraft:frozen_ocean", r: 209, g: 237, b: 255 },
        { name: "minecraft:frozen_river", r: 166, g: 212, b: 255 },
        { name: "minecraft:snowy_tundra", r: 239, g: 255, b: 235 },
        { name: "minecraft:snowy_mountains", r: 239, g: 255, b: 235 },
        { name: "minecraft:mushroom_fields", r: 250, g: 145, b: 248 },
        { name: "minecraft:mushroom_field_shore", r: 240, g: 187, b: 252 },
        { name: "minecraft:beach", r: 255, g: 249, b: 138 },
        { name: "minecraft:desert_hills", r: 181, g: 174, b: 33 },
        { name: "minecraft:wooded_hills", r: 17, g: 69, b: 18 },
        { name: "minecraft:taiga_hills", r: 30, g: 69, b: 8 },
        { name: "minecraft:mountain_edge", r: 110, g: 109, b: 109 },
        { name: "minecraft:jungle", r: 45, g: 227, b: 5 },
        { name: "minecraft:jungle_hills", r: 33, g: 184, b: 0 },
        { name: "minecraft:jungle_edge", r: 66, g: 207, b: 35 },
        { name: "minecraft:deep_ocean", r: 5, g: 10, b: 82 },
        { name: "minecraft:stone_shore", r: 166, g: 166, b: 166 },
        { name: "minecraft:snowy_beach", r: 211, g: 212, b: 193 },
        { name: "minecraft:birch_forest", r: 31, g: 145, b: 33 },
        { name: "minecraft:birch_forest_hills", r: 28, g: 97, b: 29 },
        { name: "minecraft:dark_forest", r: 7, g: 46, b: 7 },
        { name: "minecraft:snowy_taiga", r: 179, g: 207, b: 163 },
        { name: "minecraft:snowy_taiga_hills", r: 103, g: 117, b: 95 },
        { name: "minecraft:giant_tree_taiga", r: 46, g: 23, b: 6 },
        { name: "minecraft:giant_tree_taiga_hills", r: 23, g: 15, b: 3 },
        { name: "minecraft:wooded_mountains", r: 37, g: 64, b: 36 },
        { name: "minecraft:savanna", r: 179, g: 242, b: 61 },
        { name: "minecraft:savanna_plateau", r: 132, g: 181, b: 40 },
        { name: "minecraft:badlands", r: 212, g: 82, b: 42 },
        { name: "minecraft:wooded_badlands_plateau", r: 230, g: 171, b: 62 },
        { name: "minecraft:badlands_plateau", r: 120, g: 83, b: 42 },
        { name: "minecraft:small_end_islands", r: 234, g: 247, b: 52 },
        { name: "minecraft:end_midlands", r: 170, g: 179, b: 55 },
        { name: "minecraft:end_highlands", r: 112, g: 117, b: 46 },
        { name: "minecraft:end_barrens", r: 199, g: 204, b: 137 },
        { name: "minecraft:warm_ocean", r: 95, g: 70, b: 224 },
        { name: "minecraft:lukewarm_ocean", r: 80, g: 40, b: 212 },
        { name: "minecraft:cold_ocean", r: 120, g: 188, b: 222 },
        { name: "minecraft:deep_warm_ocean", r: 64, g: 54, b: 99 },
        { name: "minecraft:deep_lukewarm_ocean", r: 49, g: 35, b: 87 },
        { name: "minecraft:deep_cold_ocean", r: 59, g: 84, b: 102 },
        { name: "minecraft:deep_frozen_ocean", r: 116, g: 133, b: 145 },
        { name: "minecraft:the_void", r: 0, g: 0, b: 0 },
        { name: "minecraft:sunflower_plains", r: 198, g: 255, b: 92 },
        { name: "minecraft:desert_lakes", r: 97, g: 179, b: 186 },
        { name: "minecraft:gravelly_hills", r: 85, g: 101, b: 102 },
        { name: "minecraft:flower_forest", r: 172, g: 252, b: 33 },
        { name: "minecraft:taiga_mountains", r: 46, g: 30, b: 8 },
        { name: "minecraft:swamp_hills", r: 32, g: 66, b: 50 },
        { name: "minecraft:ice_spikes", r: 194, g: 237, b: 255 },
        { name: "minecraft:modified_jungle", r: 11, g: 227, b: 37 },
        { name: "minecraft:modified_jungle_edge", r: 71, g: 237, b: 91 },
        { name: "minecraft:tall_birch_forest", r: 31, g: 173, b: 34 },
        { name: "minecraft:tall_birch_hills", r: 4, g: 74, b: 6 },
        { name: "minecraft:dark_forest_hills", r: 0, g: 31, b: 1 },
        { name: "minecraft:snowy_taiga_mountains", r: 74, g: 99, b: 74 },
        { name: "minecraft:giant_spruce_taiga", r: 25, g: 61, b: 15 },
        { name: "minecraft:giant_spruce_taiga_hills", r: 13, g: 36, b: 7 },
        { name: "minecraft:modified_gravelly_mountains", r: 82, g: 89, b: 99 },
        { name: "minecraft:shattered_savanna", r: 171, g: 219, b: 81 },
        { name: "minecraft:shattered_savanna_plateau", r: 124, g: 158, b: 60 },
        { name: "minecraft:eroded_badlands", r: 110, g: 44, b: 24 },
        { name: "minecraft:modified_wooded_badlands_plateau", r: 128, g: 98, b: 54 },
        { name: "minecraft:modified_badlands_plateau", r: 145, g: 101, b: 600 },
        { name: "minecraft:bamboo_jungle", r: 158, g: 224, b: 83 },
        { name: "minecraft:bamboo_jungle_hills", r: 98, g: 140, b: 49 },
        { name: "minecraft:soul_sand_valley", r: 140, g: 132, b: 108 },
        { name: "minecraft:crimson_forest", r: 68, g: 171, b: 171 },
        { name: "minecraft:warped_forest", r: 219, g: 60, b: 46 },
        { name: "minecraft:basalt_deltas", r: 79, g: 73, b: 66 },
        { name: "minecraft:snowy_slopes", r: 140, g: 195, b: 222 },
        { name: "minecraft:lofty_peaks", r: 196, g: 168, b: 193 },
        { name: "minecraft:snowcapped_peaks", r: 200, g: 198, b: 200 },
        { name: "minecraft:stony_peaks", r: 82, g: 92, b: 103 },
        { name: "minecraft:grove", r: 150, g: 150, b: 189 },
        { name: "minecraft:meadow", r: 169, g: 197, b: 80 },
        { name: "minecraft:lush_caves", r: 112, g: 255, b: 79 },
        { name: "minecraft:dripstone_caves", r: 140, g: 124, b: 0 }
    ];
    return VanillaBiomes;
}());



/***/ }),

/***/ "./node_modules/uniqid/index.js":
/*!**************************************!*\
  !*** ./node_modules/uniqid/index.js ***!
  \**************************************/
/***/ ((module) => {

/* 
(The MIT License)
Copyright (c) 2014-2021 Halász Ádám <adam@aimform.com>
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

//  Unique Hexatridecimal ID Generator
// ================================================

//  Dependencies
// ================================================
var pid = typeof process !== 'undefined' && process.pid ? process.pid.toString(36) : '' ;
var address = '';
if(false){ var i, networkInterfaces, mac, os; } 

//  Exports
// ================================================
module.exports = module.exports["default"] = function(prefix, suffix){ return (prefix ? prefix : '') + address + pid + now().toString(36) + (suffix ? suffix : ''); }
module.exports.process = function(prefix, suffix){ return (prefix ? prefix : '') + pid + now().toString(36) + (suffix ? suffix : ''); }
module.exports.time    = function(prefix, suffix){ return (prefix ? prefix : '') + now().toString(36) + (suffix ? suffix : ''); }

//  Helpers
// ================================================
function now(){
    var time = Date.now();
    var last = now.last || time;
    return now.last = time > last ? time : last + 1;
}


/***/ }),

/***/ "./node_modules/pako/dist/pako.esm.mjs":
/*!*********************************************!*\
  !*** ./node_modules/pako/dist/pako.esm.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Deflate": () => (/* binding */ Deflate_1),
/* harmony export */   "Inflate": () => (/* binding */ Inflate_1),
/* harmony export */   "constants": () => (/* binding */ constants_1),
/* harmony export */   "default": () => (/* binding */ pako),
/* harmony export */   "deflate": () => (/* binding */ deflate_1),
/* harmony export */   "deflateRaw": () => (/* binding */ deflateRaw_1),
/* harmony export */   "gzip": () => (/* binding */ gzip_1),
/* harmony export */   "inflate": () => (/* binding */ inflate_1),
/* harmony export */   "inflateRaw": () => (/* binding */ inflateRaw_1),
/* harmony export */   "ungzip": () => (/* binding */ ungzip_1)
/* harmony export */ });

/*! pako 2.0.4 https://github.com/nodeca/pako @license (MIT AND Zlib) */
// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

/* eslint-disable space-unary-ops */

/* Public constants ==========================================================*/
/* ===========================================================================*/


//const Z_FILTERED          = 1;
//const Z_HUFFMAN_ONLY      = 2;
//const Z_RLE               = 3;
const Z_FIXED$1               = 4;
//const Z_DEFAULT_STRATEGY  = 0;

/* Possible values of the data_type field (though see inflate()) */
const Z_BINARY              = 0;
const Z_TEXT                = 1;
//const Z_ASCII             = 1; // = Z_TEXT
const Z_UNKNOWN$1             = 2;

/*============================================================================*/


function zero$1(buf) { let len = buf.length; while (--len >= 0) { buf[len] = 0; } }

// From zutil.h

const STORED_BLOCK = 0;
const STATIC_TREES = 1;
const DYN_TREES    = 2;
/* The three kinds of block type */

const MIN_MATCH$1    = 3;
const MAX_MATCH$1    = 258;
/* The minimum and maximum match lengths */

// From deflate.h
/* ===========================================================================
 * Internal compression state.
 */

const LENGTH_CODES$1  = 29;
/* number of length codes, not counting the special END_BLOCK code */

const LITERALS$1      = 256;
/* number of literal bytes 0..255 */

const L_CODES$1       = LITERALS$1 + 1 + LENGTH_CODES$1;
/* number of Literal or Length codes, including the END_BLOCK code */

const D_CODES$1       = 30;
/* number of distance codes */

const BL_CODES$1      = 19;
/* number of codes used to transfer the bit lengths */

const HEAP_SIZE$1     = 2 * L_CODES$1 + 1;
/* maximum heap size */

const MAX_BITS$1      = 15;
/* All codes must not exceed MAX_BITS bits */

const Buf_size      = 16;
/* size of bit buffer in bi_buf */


/* ===========================================================================
 * Constants
 */

const MAX_BL_BITS = 7;
/* Bit length codes must not exceed MAX_BL_BITS bits */

const END_BLOCK   = 256;
/* end of block literal code */

const REP_3_6     = 16;
/* repeat previous bit length 3-6 times (2 bits of repeat count) */

const REPZ_3_10   = 17;
/* repeat a zero length 3-10 times  (3 bits of repeat count) */

const REPZ_11_138 = 18;
/* repeat a zero length 11-138 times  (7 bits of repeat count) */

/* eslint-disable comma-spacing,array-bracket-spacing */
const extra_lbits =   /* extra bits for each length code */
  new Uint8Array([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0]);

const extra_dbits =   /* extra bits for each distance code */
  new Uint8Array([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]);

const extra_blbits =  /* extra bits for each bit length code */
  new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7]);

const bl_order =
  new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]);
/* eslint-enable comma-spacing,array-bracket-spacing */

/* The lengths of the bit length codes are sent in order of decreasing
 * probability, to avoid transmitting the lengths for unused bit length codes.
 */

/* ===========================================================================
 * Local data. These are initialized only once.
 */

// We pre-fill arrays with 0 to avoid uninitialized gaps

const DIST_CODE_LEN = 512; /* see definition of array dist_code below */

// !!!! Use flat array instead of structure, Freq = i*2, Len = i*2+1
const static_ltree  = new Array((L_CODES$1 + 2) * 2);
zero$1(static_ltree);
/* The static literal tree. Since the bit lengths are imposed, there is no
 * need for the L_CODES extra codes used during heap construction. However
 * The codes 286 and 287 are needed to build a canonical tree (see _tr_init
 * below).
 */

const static_dtree  = new Array(D_CODES$1 * 2);
zero$1(static_dtree);
/* The static distance tree. (Actually a trivial tree since all codes use
 * 5 bits.)
 */

const _dist_code    = new Array(DIST_CODE_LEN);
zero$1(_dist_code);
/* Distance codes. The first 256 values correspond to the distances
 * 3 .. 258, the last 256 values correspond to the top 8 bits of
 * the 15 bit distances.
 */

const _length_code  = new Array(MAX_MATCH$1 - MIN_MATCH$1 + 1);
zero$1(_length_code);
/* length code for each normalized match length (0 == MIN_MATCH) */

const base_length   = new Array(LENGTH_CODES$1);
zero$1(base_length);
/* First normalized length for each code (0 = MIN_MATCH) */

const base_dist     = new Array(D_CODES$1);
zero$1(base_dist);
/* First normalized distance for each code (0 = distance of 1) */


function StaticTreeDesc(static_tree, extra_bits, extra_base, elems, max_length) {

  this.static_tree  = static_tree;  /* static tree or NULL */
  this.extra_bits   = extra_bits;   /* extra bits for each code or NULL */
  this.extra_base   = extra_base;   /* base index for extra_bits */
  this.elems        = elems;        /* max number of elements in the tree */
  this.max_length   = max_length;   /* max bit length for the codes */

  // show if `static_tree` has data or dummy - needed for monomorphic objects
  this.has_stree    = static_tree && static_tree.length;
}


let static_l_desc;
let static_d_desc;
let static_bl_desc;


function TreeDesc(dyn_tree, stat_desc) {
  this.dyn_tree = dyn_tree;     /* the dynamic tree */
  this.max_code = 0;            /* largest code with non zero frequency */
  this.stat_desc = stat_desc;   /* the corresponding static tree */
}



const d_code = (dist) => {

  return dist < 256 ? _dist_code[dist] : _dist_code[256 + (dist >>> 7)];
};


/* ===========================================================================
 * Output a short LSB first on the stream.
 * IN assertion: there is enough room in pendingBuf.
 */
const put_short = (s, w) => {
//    put_byte(s, (uch)((w) & 0xff));
//    put_byte(s, (uch)((ush)(w) >> 8));
  s.pending_buf[s.pending++] = (w) & 0xff;
  s.pending_buf[s.pending++] = (w >>> 8) & 0xff;
};


/* ===========================================================================
 * Send a value on a given number of bits.
 * IN assertion: length <= 16 and value fits in length bits.
 */
const send_bits = (s, value, length) => {

  if (s.bi_valid > (Buf_size - length)) {
    s.bi_buf |= (value << s.bi_valid) & 0xffff;
    put_short(s, s.bi_buf);
    s.bi_buf = value >> (Buf_size - s.bi_valid);
    s.bi_valid += length - Buf_size;
  } else {
    s.bi_buf |= (value << s.bi_valid) & 0xffff;
    s.bi_valid += length;
  }
};


const send_code = (s, c, tree) => {

  send_bits(s, tree[c * 2]/*.Code*/, tree[c * 2 + 1]/*.Len*/);
};


/* ===========================================================================
 * Reverse the first len bits of a code, using straightforward code (a faster
 * method would use a table)
 * IN assertion: 1 <= len <= 15
 */
const bi_reverse = (code, len) => {

  let res = 0;
  do {
    res |= code & 1;
    code >>>= 1;
    res <<= 1;
  } while (--len > 0);
  return res >>> 1;
};


/* ===========================================================================
 * Flush the bit buffer, keeping at most 7 bits in it.
 */
const bi_flush = (s) => {

  if (s.bi_valid === 16) {
    put_short(s, s.bi_buf);
    s.bi_buf = 0;
    s.bi_valid = 0;

  } else if (s.bi_valid >= 8) {
    s.pending_buf[s.pending++] = s.bi_buf & 0xff;
    s.bi_buf >>= 8;
    s.bi_valid -= 8;
  }
};


/* ===========================================================================
 * Compute the optimal bit lengths for a tree and update the total bit length
 * for the current block.
 * IN assertion: the fields freq and dad are set, heap[heap_max] and
 *    above are the tree nodes sorted by increasing frequency.
 * OUT assertions: the field len is set to the optimal bit length, the
 *     array bl_count contains the frequencies for each bit length.
 *     The length opt_len is updated; static_len is also updated if stree is
 *     not null.
 */
const gen_bitlen = (s, desc) =>
//    deflate_state *s;
//    tree_desc *desc;    /* the tree descriptor */
{
  const tree            = desc.dyn_tree;
  const max_code        = desc.max_code;
  const stree           = desc.stat_desc.static_tree;
  const has_stree       = desc.stat_desc.has_stree;
  const extra           = desc.stat_desc.extra_bits;
  const base            = desc.stat_desc.extra_base;
  const max_length      = desc.stat_desc.max_length;
  let h;              /* heap index */
  let n, m;           /* iterate over the tree elements */
  let bits;           /* bit length */
  let xbits;          /* extra bits */
  let f;              /* frequency */
  let overflow = 0;   /* number of elements with bit length too large */

  for (bits = 0; bits <= MAX_BITS$1; bits++) {
    s.bl_count[bits] = 0;
  }

  /* In a first pass, compute the optimal bit lengths (which may
   * overflow in the case of the bit length tree).
   */
  tree[s.heap[s.heap_max] * 2 + 1]/*.Len*/ = 0; /* root of the heap */

  for (h = s.heap_max + 1; h < HEAP_SIZE$1; h++) {
    n = s.heap[h];
    bits = tree[tree[n * 2 + 1]/*.Dad*/ * 2 + 1]/*.Len*/ + 1;
    if (bits > max_length) {
      bits = max_length;
      overflow++;
    }
    tree[n * 2 + 1]/*.Len*/ = bits;
    /* We overwrite tree[n].Dad which is no longer needed */

    if (n > max_code) { continue; } /* not a leaf node */

    s.bl_count[bits]++;
    xbits = 0;
    if (n >= base) {
      xbits = extra[n - base];
    }
    f = tree[n * 2]/*.Freq*/;
    s.opt_len += f * (bits + xbits);
    if (has_stree) {
      s.static_len += f * (stree[n * 2 + 1]/*.Len*/ + xbits);
    }
  }
  if (overflow === 0) { return; }

  // Trace((stderr,"\nbit length overflow\n"));
  /* This happens for example on obj2 and pic of the Calgary corpus */

  /* Find the first bit length which could increase: */
  do {
    bits = max_length - 1;
    while (s.bl_count[bits] === 0) { bits--; }
    s.bl_count[bits]--;      /* move one leaf down the tree */
    s.bl_count[bits + 1] += 2; /* move one overflow item as its brother */
    s.bl_count[max_length]--;
    /* The brother of the overflow item also moves one step up,
     * but this does not affect bl_count[max_length]
     */
    overflow -= 2;
  } while (overflow > 0);

  /* Now recompute all bit lengths, scanning in increasing frequency.
   * h is still equal to HEAP_SIZE. (It is simpler to reconstruct all
   * lengths instead of fixing only the wrong ones. This idea is taken
   * from 'ar' written by Haruhiko Okumura.)
   */
  for (bits = max_length; bits !== 0; bits--) {
    n = s.bl_count[bits];
    while (n !== 0) {
      m = s.heap[--h];
      if (m > max_code) { continue; }
      if (tree[m * 2 + 1]/*.Len*/ !== bits) {
        // Trace((stderr,"code %d bits %d->%d\n", m, tree[m].Len, bits));
        s.opt_len += (bits - tree[m * 2 + 1]/*.Len*/) * tree[m * 2]/*.Freq*/;
        tree[m * 2 + 1]/*.Len*/ = bits;
      }
      n--;
    }
  }
};


/* ===========================================================================
 * Generate the codes for a given tree and bit counts (which need not be
 * optimal).
 * IN assertion: the array bl_count contains the bit length statistics for
 * the given tree and the field len is set for all tree elements.
 * OUT assertion: the field code is set for all tree elements of non
 *     zero code length.
 */
const gen_codes = (tree, max_code, bl_count) =>
//    ct_data *tree;             /* the tree to decorate */
//    int max_code;              /* largest code with non zero frequency */
//    ushf *bl_count;            /* number of codes at each bit length */
{
  const next_code = new Array(MAX_BITS$1 + 1); /* next code value for each bit length */
  let code = 0;              /* running code value */
  let bits;                  /* bit index */
  let n;                     /* code index */

  /* The distribution counts are first used to generate the code values
   * without bit reversal.
   */
  for (bits = 1; bits <= MAX_BITS$1; bits++) {
    next_code[bits] = code = (code + bl_count[bits - 1]) << 1;
  }
  /* Check that the bit counts in bl_count are consistent. The last code
   * must be all ones.
   */
  //Assert (code + bl_count[MAX_BITS]-1 == (1<<MAX_BITS)-1,
  //        "inconsistent bit counts");
  //Tracev((stderr,"\ngen_codes: max_code %d ", max_code));

  for (n = 0;  n <= max_code; n++) {
    let len = tree[n * 2 + 1]/*.Len*/;
    if (len === 0) { continue; }
    /* Now reverse the bits */
    tree[n * 2]/*.Code*/ = bi_reverse(next_code[len]++, len);

    //Tracecv(tree != static_ltree, (stderr,"\nn %3d %c l %2d c %4x (%x) ",
    //     n, (isgraph(n) ? n : ' '), len, tree[n].Code, next_code[len]-1));
  }
};


/* ===========================================================================
 * Initialize the various 'constant' tables.
 */
const tr_static_init = () => {

  let n;        /* iterates over tree elements */
  let bits;     /* bit counter */
  let length;   /* length value */
  let code;     /* code value */
  let dist;     /* distance index */
  const bl_count = new Array(MAX_BITS$1 + 1);
  /* number of codes at each bit length for an optimal tree */

  // do check in _tr_init()
  //if (static_init_done) return;

  /* For some embedded targets, global variables are not initialized: */
/*#ifdef NO_INIT_GLOBAL_POINTERS
  static_l_desc.static_tree = static_ltree;
  static_l_desc.extra_bits = extra_lbits;
  static_d_desc.static_tree = static_dtree;
  static_d_desc.extra_bits = extra_dbits;
  static_bl_desc.extra_bits = extra_blbits;
#endif*/

  /* Initialize the mapping length (0..255) -> length code (0..28) */
  length = 0;
  for (code = 0; code < LENGTH_CODES$1 - 1; code++) {
    base_length[code] = length;
    for (n = 0; n < (1 << extra_lbits[code]); n++) {
      _length_code[length++] = code;
    }
  }
  //Assert (length == 256, "tr_static_init: length != 256");
  /* Note that the length 255 (match length 258) can be represented
   * in two different ways: code 284 + 5 bits or code 285, so we
   * overwrite length_code[255] to use the best encoding:
   */
  _length_code[length - 1] = code;

  /* Initialize the mapping dist (0..32K) -> dist code (0..29) */
  dist = 0;
  for (code = 0; code < 16; code++) {
    base_dist[code] = dist;
    for (n = 0; n < (1 << extra_dbits[code]); n++) {
      _dist_code[dist++] = code;
    }
  }
  //Assert (dist == 256, "tr_static_init: dist != 256");
  dist >>= 7; /* from now on, all distances are divided by 128 */
  for (; code < D_CODES$1; code++) {
    base_dist[code] = dist << 7;
    for (n = 0; n < (1 << (extra_dbits[code] - 7)); n++) {
      _dist_code[256 + dist++] = code;
    }
  }
  //Assert (dist == 256, "tr_static_init: 256+dist != 512");

  /* Construct the codes of the static literal tree */
  for (bits = 0; bits <= MAX_BITS$1; bits++) {
    bl_count[bits] = 0;
  }

  n = 0;
  while (n <= 143) {
    static_ltree[n * 2 + 1]/*.Len*/ = 8;
    n++;
    bl_count[8]++;
  }
  while (n <= 255) {
    static_ltree[n * 2 + 1]/*.Len*/ = 9;
    n++;
    bl_count[9]++;
  }
  while (n <= 279) {
    static_ltree[n * 2 + 1]/*.Len*/ = 7;
    n++;
    bl_count[7]++;
  }
  while (n <= 287) {
    static_ltree[n * 2 + 1]/*.Len*/ = 8;
    n++;
    bl_count[8]++;
  }
  /* Codes 286 and 287 do not exist, but we must include them in the
   * tree construction to get a canonical Huffman tree (longest code
   * all ones)
   */
  gen_codes(static_ltree, L_CODES$1 + 1, bl_count);

  /* The static distance tree is trivial: */
  for (n = 0; n < D_CODES$1; n++) {
    static_dtree[n * 2 + 1]/*.Len*/ = 5;
    static_dtree[n * 2]/*.Code*/ = bi_reverse(n, 5);
  }

  // Now data ready and we can init static trees
  static_l_desc = new StaticTreeDesc(static_ltree, extra_lbits, LITERALS$1 + 1, L_CODES$1, MAX_BITS$1);
  static_d_desc = new StaticTreeDesc(static_dtree, extra_dbits, 0,          D_CODES$1, MAX_BITS$1);
  static_bl_desc = new StaticTreeDesc(new Array(0), extra_blbits, 0,         BL_CODES$1, MAX_BL_BITS);

  //static_init_done = true;
};


/* ===========================================================================
 * Initialize a new block.
 */
const init_block = (s) => {

  let n; /* iterates over tree elements */

  /* Initialize the trees. */
  for (n = 0; n < L_CODES$1;  n++) { s.dyn_ltree[n * 2]/*.Freq*/ = 0; }
  for (n = 0; n < D_CODES$1;  n++) { s.dyn_dtree[n * 2]/*.Freq*/ = 0; }
  for (n = 0; n < BL_CODES$1; n++) { s.bl_tree[n * 2]/*.Freq*/ = 0; }

  s.dyn_ltree[END_BLOCK * 2]/*.Freq*/ = 1;
  s.opt_len = s.static_len = 0;
  s.last_lit = s.matches = 0;
};


/* ===========================================================================
 * Flush the bit buffer and align the output on a byte boundary
 */
const bi_windup = (s) =>
{
  if (s.bi_valid > 8) {
    put_short(s, s.bi_buf);
  } else if (s.bi_valid > 0) {
    //put_byte(s, (Byte)s->bi_buf);
    s.pending_buf[s.pending++] = s.bi_buf;
  }
  s.bi_buf = 0;
  s.bi_valid = 0;
};

/* ===========================================================================
 * Copy a stored block, storing first the length and its
 * one's complement if requested.
 */
const copy_block = (s, buf, len, header) =>
//DeflateState *s;
//charf    *buf;    /* the input data */
//unsigned len;     /* its length */
//int      header;  /* true if block header must be written */
{
  bi_windup(s);        /* align on byte boundary */

  if (header) {
    put_short(s, len);
    put_short(s, ~len);
  }
//  while (len--) {
//    put_byte(s, *buf++);
//  }
  s.pending_buf.set(s.window.subarray(buf, buf + len), s.pending);
  s.pending += len;
};

/* ===========================================================================
 * Compares to subtrees, using the tree depth as tie breaker when
 * the subtrees have equal frequency. This minimizes the worst case length.
 */
const smaller = (tree, n, m, depth) => {

  const _n2 = n * 2;
  const _m2 = m * 2;
  return (tree[_n2]/*.Freq*/ < tree[_m2]/*.Freq*/ ||
         (tree[_n2]/*.Freq*/ === tree[_m2]/*.Freq*/ && depth[n] <= depth[m]));
};

/* ===========================================================================
 * Restore the heap property by moving down the tree starting at node k,
 * exchanging a node with the smallest of its two sons if necessary, stopping
 * when the heap property is re-established (each father smaller than its
 * two sons).
 */
const pqdownheap = (s, tree, k) =>
//    deflate_state *s;
//    ct_data *tree;  /* the tree to restore */
//    int k;               /* node to move down */
{
  const v = s.heap[k];
  let j = k << 1;  /* left son of k */
  while (j <= s.heap_len) {
    /* Set j to the smallest of the two sons: */
    if (j < s.heap_len &&
      smaller(tree, s.heap[j + 1], s.heap[j], s.depth)) {
      j++;
    }
    /* Exit if v is smaller than both sons */
    if (smaller(tree, v, s.heap[j], s.depth)) { break; }

    /* Exchange v with the smallest son */
    s.heap[k] = s.heap[j];
    k = j;

    /* And continue down the tree, setting j to the left son of k */
    j <<= 1;
  }
  s.heap[k] = v;
};


// inlined manually
// const SMALLEST = 1;

/* ===========================================================================
 * Send the block data compressed using the given Huffman trees
 */
const compress_block = (s, ltree, dtree) =>
//    deflate_state *s;
//    const ct_data *ltree; /* literal tree */
//    const ct_data *dtree; /* distance tree */
{
  let dist;           /* distance of matched string */
  let lc;             /* match length or unmatched char (if dist == 0) */
  let lx = 0;         /* running index in l_buf */
  let code;           /* the code to send */
  let extra;          /* number of extra bits to send */

  if (s.last_lit !== 0) {
    do {
      dist = (s.pending_buf[s.d_buf + lx * 2] << 8) | (s.pending_buf[s.d_buf + lx * 2 + 1]);
      lc = s.pending_buf[s.l_buf + lx];
      lx++;

      if (dist === 0) {
        send_code(s, lc, ltree); /* send a literal byte */
        //Tracecv(isgraph(lc), (stderr," '%c' ", lc));
      } else {
        /* Here, lc is the match length - MIN_MATCH */
        code = _length_code[lc];
        send_code(s, code + LITERALS$1 + 1, ltree); /* send the length code */
        extra = extra_lbits[code];
        if (extra !== 0) {
          lc -= base_length[code];
          send_bits(s, lc, extra);       /* send the extra length bits */
        }
        dist--; /* dist is now the match distance - 1 */
        code = d_code(dist);
        //Assert (code < D_CODES, "bad d_code");

        send_code(s, code, dtree);       /* send the distance code */
        extra = extra_dbits[code];
        if (extra !== 0) {
          dist -= base_dist[code];
          send_bits(s, dist, extra);   /* send the extra distance bits */
        }
      } /* literal or match pair ? */

      /* Check that the overlay between pending_buf and d_buf+l_buf is ok: */
      //Assert((uInt)(s->pending) < s->lit_bufsize + 2*lx,
      //       "pendingBuf overflow");

    } while (lx < s.last_lit);
  }

  send_code(s, END_BLOCK, ltree);
};


/* ===========================================================================
 * Construct one Huffman tree and assigns the code bit strings and lengths.
 * Update the total bit length for the current block.
 * IN assertion: the field freq is set for all tree elements.
 * OUT assertions: the fields len and code are set to the optimal bit length
 *     and corresponding code. The length opt_len is updated; static_len is
 *     also updated if stree is not null. The field max_code is set.
 */
const build_tree = (s, desc) =>
//    deflate_state *s;
//    tree_desc *desc; /* the tree descriptor */
{
  const tree     = desc.dyn_tree;
  const stree    = desc.stat_desc.static_tree;
  const has_stree = desc.stat_desc.has_stree;
  const elems    = desc.stat_desc.elems;
  let n, m;          /* iterate over heap elements */
  let max_code = -1; /* largest code with non zero frequency */
  let node;          /* new node being created */

  /* Construct the initial heap, with least frequent element in
   * heap[SMALLEST]. The sons of heap[n] are heap[2*n] and heap[2*n+1].
   * heap[0] is not used.
   */
  s.heap_len = 0;
  s.heap_max = HEAP_SIZE$1;

  for (n = 0; n < elems; n++) {
    if (tree[n * 2]/*.Freq*/ !== 0) {
      s.heap[++s.heap_len] = max_code = n;
      s.depth[n] = 0;

    } else {
      tree[n * 2 + 1]/*.Len*/ = 0;
    }
  }

  /* The pkzip format requires that at least one distance code exists,
   * and that at least one bit should be sent even if there is only one
   * possible code. So to avoid special checks later on we force at least
   * two codes of non zero frequency.
   */
  while (s.heap_len < 2) {
    node = s.heap[++s.heap_len] = (max_code < 2 ? ++max_code : 0);
    tree[node * 2]/*.Freq*/ = 1;
    s.depth[node] = 0;
    s.opt_len--;

    if (has_stree) {
      s.static_len -= stree[node * 2 + 1]/*.Len*/;
    }
    /* node is 0 or 1 so it does not have extra bits */
  }
  desc.max_code = max_code;

  /* The elements heap[heap_len/2+1 .. heap_len] are leaves of the tree,
   * establish sub-heaps of increasing lengths:
   */
  for (n = (s.heap_len >> 1/*int /2*/); n >= 1; n--) { pqdownheap(s, tree, n); }

  /* Construct the Huffman tree by repeatedly combining the least two
   * frequent nodes.
   */
  node = elems;              /* next internal node of the tree */
  do {
    //pqremove(s, tree, n);  /* n = node of least frequency */
    /*** pqremove ***/
    n = s.heap[1/*SMALLEST*/];
    s.heap[1/*SMALLEST*/] = s.heap[s.heap_len--];
    pqdownheap(s, tree, 1/*SMALLEST*/);
    /***/

    m = s.heap[1/*SMALLEST*/]; /* m = node of next least frequency */

    s.heap[--s.heap_max] = n; /* keep the nodes sorted by frequency */
    s.heap[--s.heap_max] = m;

    /* Create a new node father of n and m */
    tree[node * 2]/*.Freq*/ = tree[n * 2]/*.Freq*/ + tree[m * 2]/*.Freq*/;
    s.depth[node] = (s.depth[n] >= s.depth[m] ? s.depth[n] : s.depth[m]) + 1;
    tree[n * 2 + 1]/*.Dad*/ = tree[m * 2 + 1]/*.Dad*/ = node;

    /* and insert the new node in the heap */
    s.heap[1/*SMALLEST*/] = node++;
    pqdownheap(s, tree, 1/*SMALLEST*/);

  } while (s.heap_len >= 2);

  s.heap[--s.heap_max] = s.heap[1/*SMALLEST*/];

  /* At this point, the fields freq and dad are set. We can now
   * generate the bit lengths.
   */
  gen_bitlen(s, desc);

  /* The field len is now set, we can generate the bit codes */
  gen_codes(tree, max_code, s.bl_count);
};


/* ===========================================================================
 * Scan a literal or distance tree to determine the frequencies of the codes
 * in the bit length tree.
 */
const scan_tree = (s, tree, max_code) =>
//    deflate_state *s;
//    ct_data *tree;   /* the tree to be scanned */
//    int max_code;    /* and its largest code of non zero frequency */
{
  let n;                     /* iterates over all tree elements */
  let prevlen = -1;          /* last emitted length */
  let curlen;                /* length of current code */

  let nextlen = tree[0 * 2 + 1]/*.Len*/; /* length of next code */

  let count = 0;             /* repeat count of the current code */
  let max_count = 7;         /* max repeat count */
  let min_count = 4;         /* min repeat count */

  if (nextlen === 0) {
    max_count = 138;
    min_count = 3;
  }
  tree[(max_code + 1) * 2 + 1]/*.Len*/ = 0xffff; /* guard */

  for (n = 0; n <= max_code; n++) {
    curlen = nextlen;
    nextlen = tree[(n + 1) * 2 + 1]/*.Len*/;

    if (++count < max_count && curlen === nextlen) {
      continue;

    } else if (count < min_count) {
      s.bl_tree[curlen * 2]/*.Freq*/ += count;

    } else if (curlen !== 0) {

      if (curlen !== prevlen) { s.bl_tree[curlen * 2]/*.Freq*/++; }
      s.bl_tree[REP_3_6 * 2]/*.Freq*/++;

    } else if (count <= 10) {
      s.bl_tree[REPZ_3_10 * 2]/*.Freq*/++;

    } else {
      s.bl_tree[REPZ_11_138 * 2]/*.Freq*/++;
    }

    count = 0;
    prevlen = curlen;

    if (nextlen === 0) {
      max_count = 138;
      min_count = 3;

    } else if (curlen === nextlen) {
      max_count = 6;
      min_count = 3;

    } else {
      max_count = 7;
      min_count = 4;
    }
  }
};


/* ===========================================================================
 * Send a literal or distance tree in compressed form, using the codes in
 * bl_tree.
 */
const send_tree = (s, tree, max_code) =>
//    deflate_state *s;
//    ct_data *tree; /* the tree to be scanned */
//    int max_code;       /* and its largest code of non zero frequency */
{
  let n;                     /* iterates over all tree elements */
  let prevlen = -1;          /* last emitted length */
  let curlen;                /* length of current code */

  let nextlen = tree[0 * 2 + 1]/*.Len*/; /* length of next code */

  let count = 0;             /* repeat count of the current code */
  let max_count = 7;         /* max repeat count */
  let min_count = 4;         /* min repeat count */

  /* tree[max_code+1].Len = -1; */  /* guard already set */
  if (nextlen === 0) {
    max_count = 138;
    min_count = 3;
  }

  for (n = 0; n <= max_code; n++) {
    curlen = nextlen;
    nextlen = tree[(n + 1) * 2 + 1]/*.Len*/;

    if (++count < max_count && curlen === nextlen) {
      continue;

    } else if (count < min_count) {
      do { send_code(s, curlen, s.bl_tree); } while (--count !== 0);

    } else if (curlen !== 0) {
      if (curlen !== prevlen) {
        send_code(s, curlen, s.bl_tree);
        count--;
      }
      //Assert(count >= 3 && count <= 6, " 3_6?");
      send_code(s, REP_3_6, s.bl_tree);
      send_bits(s, count - 3, 2);

    } else if (count <= 10) {
      send_code(s, REPZ_3_10, s.bl_tree);
      send_bits(s, count - 3, 3);

    } else {
      send_code(s, REPZ_11_138, s.bl_tree);
      send_bits(s, count - 11, 7);
    }

    count = 0;
    prevlen = curlen;
    if (nextlen === 0) {
      max_count = 138;
      min_count = 3;

    } else if (curlen === nextlen) {
      max_count = 6;
      min_count = 3;

    } else {
      max_count = 7;
      min_count = 4;
    }
  }
};


/* ===========================================================================
 * Construct the Huffman tree for the bit lengths and return the index in
 * bl_order of the last bit length code to send.
 */
const build_bl_tree = (s) => {

  let max_blindex;  /* index of last bit length code of non zero freq */

  /* Determine the bit length frequencies for literal and distance trees */
  scan_tree(s, s.dyn_ltree, s.l_desc.max_code);
  scan_tree(s, s.dyn_dtree, s.d_desc.max_code);

  /* Build the bit length tree: */
  build_tree(s, s.bl_desc);
  /* opt_len now includes the length of the tree representations, except
   * the lengths of the bit lengths codes and the 5+5+4 bits for the counts.
   */

  /* Determine the number of bit length codes to send. The pkzip format
   * requires that at least 4 bit length codes be sent. (appnote.txt says
   * 3 but the actual value used is 4.)
   */
  for (max_blindex = BL_CODES$1 - 1; max_blindex >= 3; max_blindex--) {
    if (s.bl_tree[bl_order[max_blindex] * 2 + 1]/*.Len*/ !== 0) {
      break;
    }
  }
  /* Update opt_len to include the bit length tree and counts */
  s.opt_len += 3 * (max_blindex + 1) + 5 + 5 + 4;
  //Tracev((stderr, "\ndyn trees: dyn %ld, stat %ld",
  //        s->opt_len, s->static_len));

  return max_blindex;
};


/* ===========================================================================
 * Send the header for a block using dynamic Huffman trees: the counts, the
 * lengths of the bit length codes, the literal tree and the distance tree.
 * IN assertion: lcodes >= 257, dcodes >= 1, blcodes >= 4.
 */
const send_all_trees = (s, lcodes, dcodes, blcodes) =>
//    deflate_state *s;
//    int lcodes, dcodes, blcodes; /* number of codes for each tree */
{
  let rank;                    /* index in bl_order */

  //Assert (lcodes >= 257 && dcodes >= 1 && blcodes >= 4, "not enough codes");
  //Assert (lcodes <= L_CODES && dcodes <= D_CODES && blcodes <= BL_CODES,
  //        "too many codes");
  //Tracev((stderr, "\nbl counts: "));
  send_bits(s, lcodes - 257, 5); /* not +255 as stated in appnote.txt */
  send_bits(s, dcodes - 1,   5);
  send_bits(s, blcodes - 4,  4); /* not -3 as stated in appnote.txt */
  for (rank = 0; rank < blcodes; rank++) {
    //Tracev((stderr, "\nbl code %2d ", bl_order[rank]));
    send_bits(s, s.bl_tree[bl_order[rank] * 2 + 1]/*.Len*/, 3);
  }
  //Tracev((stderr, "\nbl tree: sent %ld", s->bits_sent));

  send_tree(s, s.dyn_ltree, lcodes - 1); /* literal tree */
  //Tracev((stderr, "\nlit tree: sent %ld", s->bits_sent));

  send_tree(s, s.dyn_dtree, dcodes - 1); /* distance tree */
  //Tracev((stderr, "\ndist tree: sent %ld", s->bits_sent));
};


/* ===========================================================================
 * Check if the data type is TEXT or BINARY, using the following algorithm:
 * - TEXT if the two conditions below are satisfied:
 *    a) There are no non-portable control characters belonging to the
 *       "black list" (0..6, 14..25, 28..31).
 *    b) There is at least one printable character belonging to the
 *       "white list" (9 {TAB}, 10 {LF}, 13 {CR}, 32..255).
 * - BINARY otherwise.
 * - The following partially-portable control characters form a
 *   "gray list" that is ignored in this detection algorithm:
 *   (7 {BEL}, 8 {BS}, 11 {VT}, 12 {FF}, 26 {SUB}, 27 {ESC}).
 * IN assertion: the fields Freq of dyn_ltree are set.
 */
const detect_data_type = (s) => {
  /* black_mask is the bit mask of black-listed bytes
   * set bits 0..6, 14..25, and 28..31
   * 0xf3ffc07f = binary 11110011111111111100000001111111
   */
  let black_mask = 0xf3ffc07f;
  let n;

  /* Check for non-textual ("black-listed") bytes. */
  for (n = 0; n <= 31; n++, black_mask >>>= 1) {
    if ((black_mask & 1) && (s.dyn_ltree[n * 2]/*.Freq*/ !== 0)) {
      return Z_BINARY;
    }
  }

  /* Check for textual ("white-listed") bytes. */
  if (s.dyn_ltree[9 * 2]/*.Freq*/ !== 0 || s.dyn_ltree[10 * 2]/*.Freq*/ !== 0 ||
      s.dyn_ltree[13 * 2]/*.Freq*/ !== 0) {
    return Z_TEXT;
  }
  for (n = 32; n < LITERALS$1; n++) {
    if (s.dyn_ltree[n * 2]/*.Freq*/ !== 0) {
      return Z_TEXT;
    }
  }

  /* There are no "black-listed" or "white-listed" bytes:
   * this stream either is empty or has tolerated ("gray-listed") bytes only.
   */
  return Z_BINARY;
};


let static_init_done = false;

/* ===========================================================================
 * Initialize the tree data structures for a new zlib stream.
 */
const _tr_init$1 = (s) =>
{

  if (!static_init_done) {
    tr_static_init();
    static_init_done = true;
  }

  s.l_desc  = new TreeDesc(s.dyn_ltree, static_l_desc);
  s.d_desc  = new TreeDesc(s.dyn_dtree, static_d_desc);
  s.bl_desc = new TreeDesc(s.bl_tree, static_bl_desc);

  s.bi_buf = 0;
  s.bi_valid = 0;

  /* Initialize the first block of the first file: */
  init_block(s);
};


/* ===========================================================================
 * Send a stored block
 */
const _tr_stored_block$1 = (s, buf, stored_len, last) =>
//DeflateState *s;
//charf *buf;       /* input block */
//ulg stored_len;   /* length of input block */
//int last;         /* one if this is the last block for a file */
{
  send_bits(s, (STORED_BLOCK << 1) + (last ? 1 : 0), 3);    /* send block type */
  copy_block(s, buf, stored_len, true); /* with header */
};


/* ===========================================================================
 * Send one empty static block to give enough lookahead for inflate.
 * This takes 10 bits, of which 7 may remain in the bit buffer.
 */
const _tr_align$1 = (s) => {
  send_bits(s, STATIC_TREES << 1, 3);
  send_code(s, END_BLOCK, static_ltree);
  bi_flush(s);
};


/* ===========================================================================
 * Determine the best encoding for the current block: dynamic trees, static
 * trees or store, and output the encoded block to the zip file.
 */
const _tr_flush_block$1 = (s, buf, stored_len, last) =>
//DeflateState *s;
//charf *buf;       /* input block, or NULL if too old */
//ulg stored_len;   /* length of input block */
//int last;         /* one if this is the last block for a file */
{
  let opt_lenb, static_lenb;  /* opt_len and static_len in bytes */
  let max_blindex = 0;        /* index of last bit length code of non zero freq */

  /* Build the Huffman trees unless a stored block is forced */
  if (s.level > 0) {

    /* Check if the file is binary or text */
    if (s.strm.data_type === Z_UNKNOWN$1) {
      s.strm.data_type = detect_data_type(s);
    }

    /* Construct the literal and distance trees */
    build_tree(s, s.l_desc);
    // Tracev((stderr, "\nlit data: dyn %ld, stat %ld", s->opt_len,
    //        s->static_len));

    build_tree(s, s.d_desc);
    // Tracev((stderr, "\ndist data: dyn %ld, stat %ld", s->opt_len,
    //        s->static_len));
    /* At this point, opt_len and static_len are the total bit lengths of
     * the compressed block data, excluding the tree representations.
     */

    /* Build the bit length tree for the above two trees, and get the index
     * in bl_order of the last bit length code to send.
     */
    max_blindex = build_bl_tree(s);

    /* Determine the best encoding. Compute the block lengths in bytes. */
    opt_lenb = (s.opt_len + 3 + 7) >>> 3;
    static_lenb = (s.static_len + 3 + 7) >>> 3;

    // Tracev((stderr, "\nopt %lu(%lu) stat %lu(%lu) stored %lu lit %u ",
    //        opt_lenb, s->opt_len, static_lenb, s->static_len, stored_len,
    //        s->last_lit));

    if (static_lenb <= opt_lenb) { opt_lenb = static_lenb; }

  } else {
    // Assert(buf != (char*)0, "lost buf");
    opt_lenb = static_lenb = stored_len + 5; /* force a stored block */
  }

  if ((stored_len + 4 <= opt_lenb) && (buf !== -1)) {
    /* 4: two words for the lengths */

    /* The test buf != NULL is only necessary if LIT_BUFSIZE > WSIZE.
     * Otherwise we can't have processed more than WSIZE input bytes since
     * the last block flush, because compression would have been
     * successful. If LIT_BUFSIZE <= WSIZE, it is never too late to
     * transform a block into a stored block.
     */
    _tr_stored_block$1(s, buf, stored_len, last);

  } else if (s.strategy === Z_FIXED$1 || static_lenb === opt_lenb) {

    send_bits(s, (STATIC_TREES << 1) + (last ? 1 : 0), 3);
    compress_block(s, static_ltree, static_dtree);

  } else {
    send_bits(s, (DYN_TREES << 1) + (last ? 1 : 0), 3);
    send_all_trees(s, s.l_desc.max_code + 1, s.d_desc.max_code + 1, max_blindex + 1);
    compress_block(s, s.dyn_ltree, s.dyn_dtree);
  }
  // Assert (s->compressed_len == s->bits_sent, "bad compressed size");
  /* The above check is made mod 2^32, for files larger than 512 MB
   * and uLong implemented on 32 bits.
   */
  init_block(s);

  if (last) {
    bi_windup(s);
  }
  // Tracev((stderr,"\ncomprlen %lu(%lu) ", s->compressed_len>>3,
  //       s->compressed_len-7*last));
};

/* ===========================================================================
 * Save the match info and tally the frequency counts. Return true if
 * the current block must be flushed.
 */
const _tr_tally$1 = (s, dist, lc) =>
//    deflate_state *s;
//    unsigned dist;  /* distance of matched string */
//    unsigned lc;    /* match length-MIN_MATCH or unmatched char (if dist==0) */
{
  //let out_length, in_length, dcode;

  s.pending_buf[s.d_buf + s.last_lit * 2]     = (dist >>> 8) & 0xff;
  s.pending_buf[s.d_buf + s.last_lit * 2 + 1] = dist & 0xff;

  s.pending_buf[s.l_buf + s.last_lit] = lc & 0xff;
  s.last_lit++;

  if (dist === 0) {
    /* lc is the unmatched char */
    s.dyn_ltree[lc * 2]/*.Freq*/++;
  } else {
    s.matches++;
    /* Here, lc is the match length - MIN_MATCH */
    dist--;             /* dist = match distance - 1 */
    //Assert((ush)dist < (ush)MAX_DIST(s) &&
    //       (ush)lc <= (ush)(MAX_MATCH-MIN_MATCH) &&
    //       (ush)d_code(dist) < (ush)D_CODES,  "_tr_tally: bad match");

    s.dyn_ltree[(_length_code[lc] + LITERALS$1 + 1) * 2]/*.Freq*/++;
    s.dyn_dtree[d_code(dist) * 2]/*.Freq*/++;
  }

// (!) This block is disabled in zlib defaults,
// don't enable it for binary compatibility

//#ifdef TRUNCATE_BLOCK
//  /* Try to guess if it is profitable to stop the current block here */
//  if ((s.last_lit & 0x1fff) === 0 && s.level > 2) {
//    /* Compute an upper bound for the compressed length */
//    out_length = s.last_lit*8;
//    in_length = s.strstart - s.block_start;
//
//    for (dcode = 0; dcode < D_CODES; dcode++) {
//      out_length += s.dyn_dtree[dcode*2]/*.Freq*/ * (5 + extra_dbits[dcode]);
//    }
//    out_length >>>= 3;
//    //Tracev((stderr,"\nlast_lit %u, in %ld, out ~%ld(%ld%%) ",
//    //       s->last_lit, in_length, out_length,
//    //       100L - out_length*100L/in_length));
//    if (s.matches < (s.last_lit>>1)/*int /2*/ && out_length < (in_length>>1)/*int /2*/) {
//      return true;
//    }
//  }
//#endif

  return (s.last_lit === s.lit_bufsize - 1);
  /* We avoid equality with lit_bufsize because of wraparound at 64K
   * on 16 bit machines and because stored blocks are restricted to
   * 64K-1 bytes.
   */
};

var _tr_init_1  = _tr_init$1;
var _tr_stored_block_1 = _tr_stored_block$1;
var _tr_flush_block_1  = _tr_flush_block$1;
var _tr_tally_1 = _tr_tally$1;
var _tr_align_1 = _tr_align$1;

var trees = {
	_tr_init: _tr_init_1,
	_tr_stored_block: _tr_stored_block_1,
	_tr_flush_block: _tr_flush_block_1,
	_tr_tally: _tr_tally_1,
	_tr_align: _tr_align_1
};

// Note: adler32 takes 12% for level 0 and 2% for level 6.
// It isn't worth it to make additional optimizations as in original.
// Small size is preferable.

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

const adler32 = (adler, buf, len, pos) => {
  let s1 = (adler & 0xffff) |0,
      s2 = ((adler >>> 16) & 0xffff) |0,
      n = 0;

  while (len !== 0) {
    // Set limit ~ twice less than 5552, to keep
    // s2 in 31-bits, because we force signed ints.
    // in other case %= will fail.
    n = len > 2000 ? 2000 : len;
    len -= n;

    do {
      s1 = (s1 + buf[pos++]) |0;
      s2 = (s2 + s1) |0;
    } while (--n);

    s1 %= 65521;
    s2 %= 65521;
  }

  return (s1 | (s2 << 16)) |0;
};


var adler32_1 = adler32;

// Note: we can't get significant speed boost here.
// So write code to minimize size - no pregenerated tables
// and array tools dependencies.

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

// Use ordinary array, since untyped makes no boost here
const makeTable = () => {
  let c, table = [];

  for (var n = 0; n < 256; n++) {
    c = n;
    for (var k = 0; k < 8; k++) {
      c = ((c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1));
    }
    table[n] = c;
  }

  return table;
};

// Create table on load. Just 255 signed longs. Not a problem.
const crcTable = new Uint32Array(makeTable());


const crc32 = (crc, buf, len, pos) => {
  const t = crcTable;
  const end = pos + len;

  crc ^= -1;

  for (let i = pos; i < end; i++) {
    crc = (crc >>> 8) ^ t[(crc ^ buf[i]) & 0xFF];
  }

  return (crc ^ (-1)); // >>> 0;
};


var crc32_1 = crc32;

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

var messages = {
  2:      'need dictionary',     /* Z_NEED_DICT       2  */
  1:      'stream end',          /* Z_STREAM_END      1  */
  0:      '',                    /* Z_OK              0  */
  '-1':   'file error',          /* Z_ERRNO         (-1) */
  '-2':   'stream error',        /* Z_STREAM_ERROR  (-2) */
  '-3':   'data error',          /* Z_DATA_ERROR    (-3) */
  '-4':   'insufficient memory', /* Z_MEM_ERROR     (-4) */
  '-5':   'buffer error',        /* Z_BUF_ERROR     (-5) */
  '-6':   'incompatible version' /* Z_VERSION_ERROR (-6) */
};

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

var constants$2 = {

  /* Allowed flush values; see deflate() and inflate() below for details */
  Z_NO_FLUSH:         0,
  Z_PARTIAL_FLUSH:    1,
  Z_SYNC_FLUSH:       2,
  Z_FULL_FLUSH:       3,
  Z_FINISH:           4,
  Z_BLOCK:            5,
  Z_TREES:            6,

  /* Return codes for the compression/decompression functions. Negative values
  * are errors, positive values are used for special but normal events.
  */
  Z_OK:               0,
  Z_STREAM_END:       1,
  Z_NEED_DICT:        2,
  Z_ERRNO:           -1,
  Z_STREAM_ERROR:    -2,
  Z_DATA_ERROR:      -3,
  Z_MEM_ERROR:       -4,
  Z_BUF_ERROR:       -5,
  //Z_VERSION_ERROR: -6,

  /* compression levels */
  Z_NO_COMPRESSION:         0,
  Z_BEST_SPEED:             1,
  Z_BEST_COMPRESSION:       9,
  Z_DEFAULT_COMPRESSION:   -1,


  Z_FILTERED:               1,
  Z_HUFFMAN_ONLY:           2,
  Z_RLE:                    3,
  Z_FIXED:                  4,
  Z_DEFAULT_STRATEGY:       0,

  /* Possible values of the data_type field (though see inflate()) */
  Z_BINARY:                 0,
  Z_TEXT:                   1,
  //Z_ASCII:                1, // = Z_TEXT (deprecated)
  Z_UNKNOWN:                2,

  /* The deflate compression method */
  Z_DEFLATED:               8
  //Z_NULL:                 null // Use -1 or null inline, depending on var type
};

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

const { _tr_init, _tr_stored_block, _tr_flush_block, _tr_tally, _tr_align } = trees;




/* Public constants ==========================================================*/
/* ===========================================================================*/

const {
  Z_NO_FLUSH: Z_NO_FLUSH$2, Z_PARTIAL_FLUSH, Z_FULL_FLUSH: Z_FULL_FLUSH$1, Z_FINISH: Z_FINISH$3, Z_BLOCK: Z_BLOCK$1,
  Z_OK: Z_OK$3, Z_STREAM_END: Z_STREAM_END$3, Z_STREAM_ERROR: Z_STREAM_ERROR$2, Z_DATA_ERROR: Z_DATA_ERROR$2, Z_BUF_ERROR: Z_BUF_ERROR$1,
  Z_DEFAULT_COMPRESSION: Z_DEFAULT_COMPRESSION$1,
  Z_FILTERED, Z_HUFFMAN_ONLY, Z_RLE, Z_FIXED, Z_DEFAULT_STRATEGY: Z_DEFAULT_STRATEGY$1,
  Z_UNKNOWN,
  Z_DEFLATED: Z_DEFLATED$2
} = constants$2;

/*============================================================================*/


const MAX_MEM_LEVEL = 9;
/* Maximum value for memLevel in deflateInit2 */
const MAX_WBITS$1 = 15;
/* 32K LZ77 window */
const DEF_MEM_LEVEL = 8;


const LENGTH_CODES  = 29;
/* number of length codes, not counting the special END_BLOCK code */
const LITERALS      = 256;
/* number of literal bytes 0..255 */
const L_CODES       = LITERALS + 1 + LENGTH_CODES;
/* number of Literal or Length codes, including the END_BLOCK code */
const D_CODES       = 30;
/* number of distance codes */
const BL_CODES      = 19;
/* number of codes used to transfer the bit lengths */
const HEAP_SIZE     = 2 * L_CODES + 1;
/* maximum heap size */
const MAX_BITS  = 15;
/* All codes must not exceed MAX_BITS bits */

const MIN_MATCH = 3;
const MAX_MATCH = 258;
const MIN_LOOKAHEAD = (MAX_MATCH + MIN_MATCH + 1);

const PRESET_DICT = 0x20;

const INIT_STATE = 42;
const EXTRA_STATE = 69;
const NAME_STATE = 73;
const COMMENT_STATE = 91;
const HCRC_STATE = 103;
const BUSY_STATE = 113;
const FINISH_STATE = 666;

const BS_NEED_MORE      = 1; /* block not completed, need more input or more output */
const BS_BLOCK_DONE     = 2; /* block flush performed */
const BS_FINISH_STARTED = 3; /* finish started, need only more output at next deflate */
const BS_FINISH_DONE    = 4; /* finish done, accept no more input or output */

const OS_CODE = 0x03; // Unix :) . Don't detect, use this default.

const err = (strm, errorCode) => {
  strm.msg = messages[errorCode];
  return errorCode;
};

const rank = (f) => {
  return ((f) << 1) - ((f) > 4 ? 9 : 0);
};

const zero = (buf) => {
  let len = buf.length; while (--len >= 0) { buf[len] = 0; }
};


/* eslint-disable new-cap */
let HASH_ZLIB = (s, prev, data) => ((prev << s.hash_shift) ^ data) & s.hash_mask;
// This hash causes less collisions, https://github.com/nodeca/pako/issues/135
// But breaks binary compatibility
//let HASH_FAST = (s, prev, data) => ((prev << 8) + (prev >> 8) + (data << 4)) & s.hash_mask;
let HASH = HASH_ZLIB;

/* =========================================================================
 * Flush as much pending output as possible. All deflate() output goes
 * through this function so some applications may wish to modify it
 * to avoid allocating a large strm->output buffer and copying into it.
 * (See also read_buf()).
 */
const flush_pending = (strm) => {
  const s = strm.state;

  //_tr_flush_bits(s);
  let len = s.pending;
  if (len > strm.avail_out) {
    len = strm.avail_out;
  }
  if (len === 0) { return; }

  strm.output.set(s.pending_buf.subarray(s.pending_out, s.pending_out + len), strm.next_out);
  strm.next_out += len;
  s.pending_out += len;
  strm.total_out += len;
  strm.avail_out -= len;
  s.pending -= len;
  if (s.pending === 0) {
    s.pending_out = 0;
  }
};


const flush_block_only = (s, last) => {
  _tr_flush_block(s, (s.block_start >= 0 ? s.block_start : -1), s.strstart - s.block_start, last);
  s.block_start = s.strstart;
  flush_pending(s.strm);
};


const put_byte = (s, b) => {
  s.pending_buf[s.pending++] = b;
};


/* =========================================================================
 * Put a short in the pending buffer. The 16-bit value is put in MSB order.
 * IN assertion: the stream state is correct and there is enough room in
 * pending_buf.
 */
const putShortMSB = (s, b) => {

  //  put_byte(s, (Byte)(b >> 8));
//  put_byte(s, (Byte)(b & 0xff));
  s.pending_buf[s.pending++] = (b >>> 8) & 0xff;
  s.pending_buf[s.pending++] = b & 0xff;
};


/* ===========================================================================
 * Read a new buffer from the current input stream, update the adler32
 * and total number of bytes read.  All deflate() input goes through
 * this function so some applications may wish to modify it to avoid
 * allocating a large strm->input buffer and copying from it.
 * (See also flush_pending()).
 */
const read_buf = (strm, buf, start, size) => {

  let len = strm.avail_in;

  if (len > size) { len = size; }
  if (len === 0) { return 0; }

  strm.avail_in -= len;

  // zmemcpy(buf, strm->next_in, len);
  buf.set(strm.input.subarray(strm.next_in, strm.next_in + len), start);
  if (strm.state.wrap === 1) {
    strm.adler = adler32_1(strm.adler, buf, len, start);
  }

  else if (strm.state.wrap === 2) {
    strm.adler = crc32_1(strm.adler, buf, len, start);
  }

  strm.next_in += len;
  strm.total_in += len;

  return len;
};


/* ===========================================================================
 * Set match_start to the longest match starting at the given string and
 * return its length. Matches shorter or equal to prev_length are discarded,
 * in which case the result is equal to prev_length and match_start is
 * garbage.
 * IN assertions: cur_match is the head of the hash chain for the current
 *   string (strstart) and its distance is <= MAX_DIST, and prev_length >= 1
 * OUT assertion: the match length is not greater than s->lookahead.
 */
const longest_match = (s, cur_match) => {

  let chain_length = s.max_chain_length;      /* max hash chain length */
  let scan = s.strstart; /* current string */
  let match;                       /* matched string */
  let len;                           /* length of current match */
  let best_len = s.prev_length;              /* best match length so far */
  let nice_match = s.nice_match;             /* stop if match long enough */
  const limit = (s.strstart > (s.w_size - MIN_LOOKAHEAD)) ?
      s.strstart - (s.w_size - MIN_LOOKAHEAD) : 0/*NIL*/;

  const _win = s.window; // shortcut

  const wmask = s.w_mask;
  const prev  = s.prev;

  /* Stop when cur_match becomes <= limit. To simplify the code,
   * we prevent matches with the string of window index 0.
   */

  const strend = s.strstart + MAX_MATCH;
  let scan_end1  = _win[scan + best_len - 1];
  let scan_end   = _win[scan + best_len];

  /* The code is optimized for HASH_BITS >= 8 and MAX_MATCH-2 multiple of 16.
   * It is easy to get rid of this optimization if necessary.
   */
  // Assert(s->hash_bits >= 8 && MAX_MATCH == 258, "Code too clever");

  /* Do not waste too much time if we already have a good match: */
  if (s.prev_length >= s.good_match) {
    chain_length >>= 2;
  }
  /* Do not look for matches beyond the end of the input. This is necessary
   * to make deflate deterministic.
   */
  if (nice_match > s.lookahead) { nice_match = s.lookahead; }

  // Assert((ulg)s->strstart <= s->window_size-MIN_LOOKAHEAD, "need lookahead");

  do {
    // Assert(cur_match < s->strstart, "no future");
    match = cur_match;

    /* Skip to next match if the match length cannot increase
     * or if the match length is less than 2.  Note that the checks below
     * for insufficient lookahead only occur occasionally for performance
     * reasons.  Therefore uninitialized memory will be accessed, and
     * conditional jumps will be made that depend on those values.
     * However the length of the match is limited to the lookahead, so
     * the output of deflate is not affected by the uninitialized values.
     */

    if (_win[match + best_len]     !== scan_end  ||
        _win[match + best_len - 1] !== scan_end1 ||
        _win[match]                !== _win[scan] ||
        _win[++match]              !== _win[scan + 1]) {
      continue;
    }

    /* The check at best_len-1 can be removed because it will be made
     * again later. (This heuristic is not always a win.)
     * It is not necessary to compare scan[2] and match[2] since they
     * are always equal when the other bytes match, given that
     * the hash keys are equal and that HASH_BITS >= 8.
     */
    scan += 2;
    match++;
    // Assert(*scan == *match, "match[2]?");

    /* We check for insufficient lookahead only every 8th comparison;
     * the 256th check will be made at strstart+258.
     */
    do {
      /*jshint noempty:false*/
    } while (_win[++scan] === _win[++match] && _win[++scan] === _win[++match] &&
             _win[++scan] === _win[++match] && _win[++scan] === _win[++match] &&
             _win[++scan] === _win[++match] && _win[++scan] === _win[++match] &&
             _win[++scan] === _win[++match] && _win[++scan] === _win[++match] &&
             scan < strend);

    // Assert(scan <= s->window+(unsigned)(s->window_size-1), "wild scan");

    len = MAX_MATCH - (strend - scan);
    scan = strend - MAX_MATCH;

    if (len > best_len) {
      s.match_start = cur_match;
      best_len = len;
      if (len >= nice_match) {
        break;
      }
      scan_end1  = _win[scan + best_len - 1];
      scan_end   = _win[scan + best_len];
    }
  } while ((cur_match = prev[cur_match & wmask]) > limit && --chain_length !== 0);

  if (best_len <= s.lookahead) {
    return best_len;
  }
  return s.lookahead;
};


/* ===========================================================================
 * Fill the window when the lookahead becomes insufficient.
 * Updates strstart and lookahead.
 *
 * IN assertion: lookahead < MIN_LOOKAHEAD
 * OUT assertions: strstart <= window_size-MIN_LOOKAHEAD
 *    At least one byte has been read, or avail_in == 0; reads are
 *    performed for at least two bytes (required for the zip translate_eol
 *    option -- not supported here).
 */
const fill_window = (s) => {

  const _w_size = s.w_size;
  let p, n, m, more, str;

  //Assert(s->lookahead < MIN_LOOKAHEAD, "already enough lookahead");

  do {
    more = s.window_size - s.lookahead - s.strstart;

    // JS ints have 32 bit, block below not needed
    /* Deal with !@#$% 64K limit: */
    //if (sizeof(int) <= 2) {
    //    if (more == 0 && s->strstart == 0 && s->lookahead == 0) {
    //        more = wsize;
    //
    //  } else if (more == (unsigned)(-1)) {
    //        /* Very unlikely, but possible on 16 bit machine if
    //         * strstart == 0 && lookahead == 1 (input done a byte at time)
    //         */
    //        more--;
    //    }
    //}


    /* If the window is almost full and there is insufficient lookahead,
     * move the upper half to the lower one to make room in the upper half.
     */
    if (s.strstart >= _w_size + (_w_size - MIN_LOOKAHEAD)) {

      s.window.set(s.window.subarray(_w_size, _w_size + _w_size), 0);
      s.match_start -= _w_size;
      s.strstart -= _w_size;
      /* we now have strstart >= MAX_DIST */
      s.block_start -= _w_size;

      /* Slide the hash table (could be avoided with 32 bit values
       at the expense of memory usage). We slide even when level == 0
       to keep the hash table consistent if we switch back to level > 0
       later. (Using level 0 permanently is not an optimal usage of
       zlib, so we don't care about this pathological case.)
       */

      n = s.hash_size;
      p = n;

      do {
        m = s.head[--p];
        s.head[p] = (m >= _w_size ? m - _w_size : 0);
      } while (--n);

      n = _w_size;
      p = n;

      do {
        m = s.prev[--p];
        s.prev[p] = (m >= _w_size ? m - _w_size : 0);
        /* If n is not on any hash chain, prev[n] is garbage but
         * its value will never be used.
         */
      } while (--n);

      more += _w_size;
    }
    if (s.strm.avail_in === 0) {
      break;
    }

    /* If there was no sliding:
     *    strstart <= WSIZE+MAX_DIST-1 && lookahead <= MIN_LOOKAHEAD - 1 &&
     *    more == window_size - lookahead - strstart
     * => more >= window_size - (MIN_LOOKAHEAD-1 + WSIZE + MAX_DIST-1)
     * => more >= window_size - 2*WSIZE + 2
     * In the BIG_MEM or MMAP case (not yet supported),
     *   window_size == input_size + MIN_LOOKAHEAD  &&
     *   strstart + s->lookahead <= input_size => more >= MIN_LOOKAHEAD.
     * Otherwise, window_size == 2*WSIZE so more >= 2.
     * If there was sliding, more >= WSIZE. So in all cases, more >= 2.
     */
    //Assert(more >= 2, "more < 2");
    n = read_buf(s.strm, s.window, s.strstart + s.lookahead, more);
    s.lookahead += n;

    /* Initialize the hash value now that we have some input: */
    if (s.lookahead + s.insert >= MIN_MATCH) {
      str = s.strstart - s.insert;
      s.ins_h = s.window[str];

      /* UPDATE_HASH(s, s->ins_h, s->window[str + 1]); */
      s.ins_h = HASH(s, s.ins_h, s.window[str + 1]);
//#if MIN_MATCH != 3
//        Call update_hash() MIN_MATCH-3 more times
//#endif
      while (s.insert) {
        /* UPDATE_HASH(s, s->ins_h, s->window[str + MIN_MATCH-1]); */
        s.ins_h = HASH(s, s.ins_h, s.window[str + MIN_MATCH - 1]);

        s.prev[str & s.w_mask] = s.head[s.ins_h];
        s.head[s.ins_h] = str;
        str++;
        s.insert--;
        if (s.lookahead + s.insert < MIN_MATCH) {
          break;
        }
      }
    }
    /* If the whole input has less than MIN_MATCH bytes, ins_h is garbage,
     * but this is not important since only literal bytes will be emitted.
     */

  } while (s.lookahead < MIN_LOOKAHEAD && s.strm.avail_in !== 0);

  /* If the WIN_INIT bytes after the end of the current data have never been
   * written, then zero those bytes in order to avoid memory check reports of
   * the use of uninitialized (or uninitialised as Julian writes) bytes by
   * the longest match routines.  Update the high water mark for the next
   * time through here.  WIN_INIT is set to MAX_MATCH since the longest match
   * routines allow scanning to strstart + MAX_MATCH, ignoring lookahead.
   */
//  if (s.high_water < s.window_size) {
//    const curr = s.strstart + s.lookahead;
//    let init = 0;
//
//    if (s.high_water < curr) {
//      /* Previous high water mark below current data -- zero WIN_INIT
//       * bytes or up to end of window, whichever is less.
//       */
//      init = s.window_size - curr;
//      if (init > WIN_INIT)
//        init = WIN_INIT;
//      zmemzero(s->window + curr, (unsigned)init);
//      s->high_water = curr + init;
//    }
//    else if (s->high_water < (ulg)curr + WIN_INIT) {
//      /* High water mark at or above current data, but below current data
//       * plus WIN_INIT -- zero out to current data plus WIN_INIT, or up
//       * to end of window, whichever is less.
//       */
//      init = (ulg)curr + WIN_INIT - s->high_water;
//      if (init > s->window_size - s->high_water)
//        init = s->window_size - s->high_water;
//      zmemzero(s->window + s->high_water, (unsigned)init);
//      s->high_water += init;
//    }
//  }
//
//  Assert((ulg)s->strstart <= s->window_size - MIN_LOOKAHEAD,
//    "not enough room for search");
};

/* ===========================================================================
 * Copy without compression as much as possible from the input stream, return
 * the current block state.
 * This function does not insert new strings in the dictionary since
 * uncompressible data is probably not useful. This function is used
 * only for the level=0 compression option.
 * NOTE: this function should be optimized to avoid extra copying from
 * window to pending_buf.
 */
const deflate_stored = (s, flush) => {

  /* Stored blocks are limited to 0xffff bytes, pending_buf is limited
   * to pending_buf_size, and each stored block has a 5 byte header:
   */
  let max_block_size = 0xffff;

  if (max_block_size > s.pending_buf_size - 5) {
    max_block_size = s.pending_buf_size - 5;
  }

  /* Copy as much as possible from input to output: */
  for (;;) {
    /* Fill the window as much as possible: */
    if (s.lookahead <= 1) {

      //Assert(s->strstart < s->w_size+MAX_DIST(s) ||
      //  s->block_start >= (long)s->w_size, "slide too late");
//      if (!(s.strstart < s.w_size + (s.w_size - MIN_LOOKAHEAD) ||
//        s.block_start >= s.w_size)) {
//        throw  new Error("slide too late");
//      }

      fill_window(s);
      if (s.lookahead === 0 && flush === Z_NO_FLUSH$2) {
        return BS_NEED_MORE;
      }

      if (s.lookahead === 0) {
        break;
      }
      /* flush the current block */
    }
    //Assert(s->block_start >= 0L, "block gone");
//    if (s.block_start < 0) throw new Error("block gone");

    s.strstart += s.lookahead;
    s.lookahead = 0;

    /* Emit a stored block if pending_buf will be full: */
    const max_start = s.block_start + max_block_size;

    if (s.strstart === 0 || s.strstart >= max_start) {
      /* strstart == 0 is possible when wraparound on 16-bit machine */
      s.lookahead = s.strstart - max_start;
      s.strstart = max_start;
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/


    }
    /* Flush if we may have to slide, otherwise block_start may become
     * negative and the data will be gone:
     */
    if (s.strstart - s.block_start >= (s.w_size - MIN_LOOKAHEAD)) {
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/
    }
  }

  s.insert = 0;

  if (flush === Z_FINISH$3) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }

  if (s.strstart > s.block_start) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }

  return BS_NEED_MORE;
};

/* ===========================================================================
 * Compress as much as possible from the input stream, return the current
 * block state.
 * This function does not perform lazy evaluation of matches and inserts
 * new strings in the dictionary only for unmatched strings or for short
 * matches. It is used only for the fast compression options.
 */
const deflate_fast = (s, flush) => {

  let hash_head;        /* head of the hash chain */
  let bflush;           /* set if current block must be flushed */

  for (;;) {
    /* Make sure that we always have enough lookahead, except
     * at the end of the input file. We need MAX_MATCH bytes
     * for the next match, plus MIN_MATCH bytes to insert the
     * string following the next match.
     */
    if (s.lookahead < MIN_LOOKAHEAD) {
      fill_window(s);
      if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH$2) {
        return BS_NEED_MORE;
      }
      if (s.lookahead === 0) {
        break; /* flush the current block */
      }
    }

    /* Insert the string window[strstart .. strstart+2] in the
     * dictionary, and set hash_head to the head of the hash chain:
     */
    hash_head = 0/*NIL*/;
    if (s.lookahead >= MIN_MATCH) {
      /*** INSERT_STRING(s, s.strstart, hash_head); ***/
      s.ins_h = HASH(s, s.ins_h, s.window[s.strstart + MIN_MATCH - 1]);
      hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
      s.head[s.ins_h] = s.strstart;
      /***/
    }

    /* Find the longest match, discarding those <= prev_length.
     * At this point we have always match_length < MIN_MATCH
     */
    if (hash_head !== 0/*NIL*/ && ((s.strstart - hash_head) <= (s.w_size - MIN_LOOKAHEAD))) {
      /* To simplify the code, we prevent matches with the string
       * of window index 0 (in particular we have to avoid a match
       * of the string with itself at the start of the input file).
       */
      s.match_length = longest_match(s, hash_head);
      /* longest_match() sets match_start */
    }
    if (s.match_length >= MIN_MATCH) {
      // check_match(s, s.strstart, s.match_start, s.match_length); // for debug only

      /*** _tr_tally_dist(s, s.strstart - s.match_start,
                     s.match_length - MIN_MATCH, bflush); ***/
      bflush = _tr_tally(s, s.strstart - s.match_start, s.match_length - MIN_MATCH);

      s.lookahead -= s.match_length;

      /* Insert new strings in the hash table only if the match length
       * is not too large. This saves time but degrades compression.
       */
      if (s.match_length <= s.max_lazy_match/*max_insert_length*/ && s.lookahead >= MIN_MATCH) {
        s.match_length--; /* string at strstart already in table */
        do {
          s.strstart++;
          /*** INSERT_STRING(s, s.strstart, hash_head); ***/
          s.ins_h = HASH(s, s.ins_h, s.window[s.strstart + MIN_MATCH - 1]);
          hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
          s.head[s.ins_h] = s.strstart;
          /***/
          /* strstart never exceeds WSIZE-MAX_MATCH, so there are
           * always MIN_MATCH bytes ahead.
           */
        } while (--s.match_length !== 0);
        s.strstart++;
      } else
      {
        s.strstart += s.match_length;
        s.match_length = 0;
        s.ins_h = s.window[s.strstart];
        /* UPDATE_HASH(s, s.ins_h, s.window[s.strstart+1]); */
        s.ins_h = HASH(s, s.ins_h, s.window[s.strstart + 1]);

//#if MIN_MATCH != 3
//                Call UPDATE_HASH() MIN_MATCH-3 more times
//#endif
        /* If lookahead < MIN_MATCH, ins_h is garbage, but it does not
         * matter since it will be recomputed at next deflate call.
         */
      }
    } else {
      /* No match, output a literal byte */
      //Tracevv((stderr,"%c", s.window[s.strstart]));
      /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/
      bflush = _tr_tally(s, 0, s.window[s.strstart]);

      s.lookahead--;
      s.strstart++;
    }
    if (bflush) {
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/
    }
  }
  s.insert = ((s.strstart < (MIN_MATCH - 1)) ? s.strstart : MIN_MATCH - 1);
  if (flush === Z_FINISH$3) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }
  if (s.last_lit) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }
  return BS_BLOCK_DONE;
};

/* ===========================================================================
 * Same as above, but achieves better compression. We use a lazy
 * evaluation for matches: a match is finally adopted only if there is
 * no better match at the next window position.
 */
const deflate_slow = (s, flush) => {

  let hash_head;          /* head of hash chain */
  let bflush;              /* set if current block must be flushed */

  let max_insert;

  /* Process the input block. */
  for (;;) {
    /* Make sure that we always have enough lookahead, except
     * at the end of the input file. We need MAX_MATCH bytes
     * for the next match, plus MIN_MATCH bytes to insert the
     * string following the next match.
     */
    if (s.lookahead < MIN_LOOKAHEAD) {
      fill_window(s);
      if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH$2) {
        return BS_NEED_MORE;
      }
      if (s.lookahead === 0) { break; } /* flush the current block */
    }

    /* Insert the string window[strstart .. strstart+2] in the
     * dictionary, and set hash_head to the head of the hash chain:
     */
    hash_head = 0/*NIL*/;
    if (s.lookahead >= MIN_MATCH) {
      /*** INSERT_STRING(s, s.strstart, hash_head); ***/
      s.ins_h = HASH(s, s.ins_h, s.window[s.strstart + MIN_MATCH - 1]);
      hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
      s.head[s.ins_h] = s.strstart;
      /***/
    }

    /* Find the longest match, discarding those <= prev_length.
     */
    s.prev_length = s.match_length;
    s.prev_match = s.match_start;
    s.match_length = MIN_MATCH - 1;

    if (hash_head !== 0/*NIL*/ && s.prev_length < s.max_lazy_match &&
        s.strstart - hash_head <= (s.w_size - MIN_LOOKAHEAD)/*MAX_DIST(s)*/) {
      /* To simplify the code, we prevent matches with the string
       * of window index 0 (in particular we have to avoid a match
       * of the string with itself at the start of the input file).
       */
      s.match_length = longest_match(s, hash_head);
      /* longest_match() sets match_start */

      if (s.match_length <= 5 &&
         (s.strategy === Z_FILTERED || (s.match_length === MIN_MATCH && s.strstart - s.match_start > 4096/*TOO_FAR*/))) {

        /* If prev_match is also MIN_MATCH, match_start is garbage
         * but we will ignore the current match anyway.
         */
        s.match_length = MIN_MATCH - 1;
      }
    }
    /* If there was a match at the previous step and the current
     * match is not better, output the previous match:
     */
    if (s.prev_length >= MIN_MATCH && s.match_length <= s.prev_length) {
      max_insert = s.strstart + s.lookahead - MIN_MATCH;
      /* Do not insert strings in hash table beyond this. */

      //check_match(s, s.strstart-1, s.prev_match, s.prev_length);

      /***_tr_tally_dist(s, s.strstart - 1 - s.prev_match,
                     s.prev_length - MIN_MATCH, bflush);***/
      bflush = _tr_tally(s, s.strstart - 1 - s.prev_match, s.prev_length - MIN_MATCH);
      /* Insert in hash table all strings up to the end of the match.
       * strstart-1 and strstart are already inserted. If there is not
       * enough lookahead, the last two strings are not inserted in
       * the hash table.
       */
      s.lookahead -= s.prev_length - 1;
      s.prev_length -= 2;
      do {
        if (++s.strstart <= max_insert) {
          /*** INSERT_STRING(s, s.strstart, hash_head); ***/
          s.ins_h = HASH(s, s.ins_h, s.window[s.strstart + MIN_MATCH - 1]);
          hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
          s.head[s.ins_h] = s.strstart;
          /***/
        }
      } while (--s.prev_length !== 0);
      s.match_available = 0;
      s.match_length = MIN_MATCH - 1;
      s.strstart++;

      if (bflush) {
        /*** FLUSH_BLOCK(s, 0); ***/
        flush_block_only(s, false);
        if (s.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
        /***/
      }

    } else if (s.match_available) {
      /* If there was no match at the previous position, output a
       * single literal. If there was a match but the current match
       * is longer, truncate the previous match to a single literal.
       */
      //Tracevv((stderr,"%c", s->window[s->strstart-1]));
      /*** _tr_tally_lit(s, s.window[s.strstart-1], bflush); ***/
      bflush = _tr_tally(s, 0, s.window[s.strstart - 1]);

      if (bflush) {
        /*** FLUSH_BLOCK_ONLY(s, 0) ***/
        flush_block_only(s, false);
        /***/
      }
      s.strstart++;
      s.lookahead--;
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
    } else {
      /* There is no previous match to compare with, wait for
       * the next step to decide.
       */
      s.match_available = 1;
      s.strstart++;
      s.lookahead--;
    }
  }
  //Assert (flush != Z_NO_FLUSH, "no flush?");
  if (s.match_available) {
    //Tracevv((stderr,"%c", s->window[s->strstart-1]));
    /*** _tr_tally_lit(s, s.window[s.strstart-1], bflush); ***/
    bflush = _tr_tally(s, 0, s.window[s.strstart - 1]);

    s.match_available = 0;
  }
  s.insert = s.strstart < MIN_MATCH - 1 ? s.strstart : MIN_MATCH - 1;
  if (flush === Z_FINISH$3) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }
  if (s.last_lit) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }

  return BS_BLOCK_DONE;
};


/* ===========================================================================
 * For Z_RLE, simply look for runs of bytes, generate matches only of distance
 * one.  Do not maintain a hash table.  (It will be regenerated if this run of
 * deflate switches away from Z_RLE.)
 */
const deflate_rle = (s, flush) => {

  let bflush;            /* set if current block must be flushed */
  let prev;              /* byte at distance one to match */
  let scan, strend;      /* scan goes up to strend for length of run */

  const _win = s.window;

  for (;;) {
    /* Make sure that we always have enough lookahead, except
     * at the end of the input file. We need MAX_MATCH bytes
     * for the longest run, plus one for the unrolled loop.
     */
    if (s.lookahead <= MAX_MATCH) {
      fill_window(s);
      if (s.lookahead <= MAX_MATCH && flush === Z_NO_FLUSH$2) {
        return BS_NEED_MORE;
      }
      if (s.lookahead === 0) { break; } /* flush the current block */
    }

    /* See how many times the previous byte repeats */
    s.match_length = 0;
    if (s.lookahead >= MIN_MATCH && s.strstart > 0) {
      scan = s.strstart - 1;
      prev = _win[scan];
      if (prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan]) {
        strend = s.strstart + MAX_MATCH;
        do {
          /*jshint noempty:false*/
        } while (prev === _win[++scan] && prev === _win[++scan] &&
                 prev === _win[++scan] && prev === _win[++scan] &&
                 prev === _win[++scan] && prev === _win[++scan] &&
                 prev === _win[++scan] && prev === _win[++scan] &&
                 scan < strend);
        s.match_length = MAX_MATCH - (strend - scan);
        if (s.match_length > s.lookahead) {
          s.match_length = s.lookahead;
        }
      }
      //Assert(scan <= s->window+(uInt)(s->window_size-1), "wild scan");
    }

    /* Emit match if have run of MIN_MATCH or longer, else emit literal */
    if (s.match_length >= MIN_MATCH) {
      //check_match(s, s.strstart, s.strstart - 1, s.match_length);

      /*** _tr_tally_dist(s, 1, s.match_length - MIN_MATCH, bflush); ***/
      bflush = _tr_tally(s, 1, s.match_length - MIN_MATCH);

      s.lookahead -= s.match_length;
      s.strstart += s.match_length;
      s.match_length = 0;
    } else {
      /* No match, output a literal byte */
      //Tracevv((stderr,"%c", s->window[s->strstart]));
      /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/
      bflush = _tr_tally(s, 0, s.window[s.strstart]);

      s.lookahead--;
      s.strstart++;
    }
    if (bflush) {
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/
    }
  }
  s.insert = 0;
  if (flush === Z_FINISH$3) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }
  if (s.last_lit) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }
  return BS_BLOCK_DONE;
};

/* ===========================================================================
 * For Z_HUFFMAN_ONLY, do not look for matches.  Do not maintain a hash table.
 * (It will be regenerated if this run of deflate switches away from Huffman.)
 */
const deflate_huff = (s, flush) => {

  let bflush;             /* set if current block must be flushed */

  for (;;) {
    /* Make sure that we have a literal to write. */
    if (s.lookahead === 0) {
      fill_window(s);
      if (s.lookahead === 0) {
        if (flush === Z_NO_FLUSH$2) {
          return BS_NEED_MORE;
        }
        break;      /* flush the current block */
      }
    }

    /* Output a literal byte */
    s.match_length = 0;
    //Tracevv((stderr,"%c", s->window[s->strstart]));
    /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/
    bflush = _tr_tally(s, 0, s.window[s.strstart]);
    s.lookahead--;
    s.strstart++;
    if (bflush) {
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/
    }
  }
  s.insert = 0;
  if (flush === Z_FINISH$3) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }
  if (s.last_lit) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }
  return BS_BLOCK_DONE;
};

/* Values for max_lazy_match, good_match and max_chain_length, depending on
 * the desired pack level (0..9). The values given below have been tuned to
 * exclude worst case performance for pathological files. Better values may be
 * found for specific files.
 */
function Config(good_length, max_lazy, nice_length, max_chain, func) {

  this.good_length = good_length;
  this.max_lazy = max_lazy;
  this.nice_length = nice_length;
  this.max_chain = max_chain;
  this.func = func;
}

const configuration_table = [
  /*      good lazy nice chain */
  new Config(0, 0, 0, 0, deflate_stored),          /* 0 store only */
  new Config(4, 4, 8, 4, deflate_fast),            /* 1 max speed, no lazy matches */
  new Config(4, 5, 16, 8, deflate_fast),           /* 2 */
  new Config(4, 6, 32, 32, deflate_fast),          /* 3 */

  new Config(4, 4, 16, 16, deflate_slow),          /* 4 lazy matches */
  new Config(8, 16, 32, 32, deflate_slow),         /* 5 */
  new Config(8, 16, 128, 128, deflate_slow),       /* 6 */
  new Config(8, 32, 128, 256, deflate_slow),       /* 7 */
  new Config(32, 128, 258, 1024, deflate_slow),    /* 8 */
  new Config(32, 258, 258, 4096, deflate_slow)     /* 9 max compression */
];


/* ===========================================================================
 * Initialize the "longest match" routines for a new zlib stream
 */
const lm_init = (s) => {

  s.window_size = 2 * s.w_size;

  /*** CLEAR_HASH(s); ***/
  zero(s.head); // Fill with NIL (= 0);

  /* Set the default configuration parameters:
   */
  s.max_lazy_match = configuration_table[s.level].max_lazy;
  s.good_match = configuration_table[s.level].good_length;
  s.nice_match = configuration_table[s.level].nice_length;
  s.max_chain_length = configuration_table[s.level].max_chain;

  s.strstart = 0;
  s.block_start = 0;
  s.lookahead = 0;
  s.insert = 0;
  s.match_length = s.prev_length = MIN_MATCH - 1;
  s.match_available = 0;
  s.ins_h = 0;
};


function DeflateState() {
  this.strm = null;            /* pointer back to this zlib stream */
  this.status = 0;            /* as the name implies */
  this.pending_buf = null;      /* output still pending */
  this.pending_buf_size = 0;  /* size of pending_buf */
  this.pending_out = 0;       /* next pending byte to output to the stream */
  this.pending = 0;           /* nb of bytes in the pending buffer */
  this.wrap = 0;              /* bit 0 true for zlib, bit 1 true for gzip */
  this.gzhead = null;         /* gzip header information to write */
  this.gzindex = 0;           /* where in extra, name, or comment */
  this.method = Z_DEFLATED$2; /* can only be DEFLATED */
  this.last_flush = -1;   /* value of flush param for previous deflate call */

  this.w_size = 0;  /* LZ77 window size (32K by default) */
  this.w_bits = 0;  /* log2(w_size)  (8..16) */
  this.w_mask = 0;  /* w_size - 1 */

  this.window = null;
  /* Sliding window. Input bytes are read into the second half of the window,
   * and move to the first half later to keep a dictionary of at least wSize
   * bytes. With this organization, matches are limited to a distance of
   * wSize-MAX_MATCH bytes, but this ensures that IO is always
   * performed with a length multiple of the block size.
   */

  this.window_size = 0;
  /* Actual size of window: 2*wSize, except when the user input buffer
   * is directly used as sliding window.
   */

  this.prev = null;
  /* Link to older string with same hash index. To limit the size of this
   * array to 64K, this link is maintained only for the last 32K strings.
   * An index in this array is thus a window index modulo 32K.
   */

  this.head = null;   /* Heads of the hash chains or NIL. */

  this.ins_h = 0;       /* hash index of string to be inserted */
  this.hash_size = 0;   /* number of elements in hash table */
  this.hash_bits = 0;   /* log2(hash_size) */
  this.hash_mask = 0;   /* hash_size-1 */

  this.hash_shift = 0;
  /* Number of bits by which ins_h must be shifted at each input
   * step. It must be such that after MIN_MATCH steps, the oldest
   * byte no longer takes part in the hash key, that is:
   *   hash_shift * MIN_MATCH >= hash_bits
   */

  this.block_start = 0;
  /* Window position at the beginning of the current output block. Gets
   * negative when the window is moved backwards.
   */

  this.match_length = 0;      /* length of best match */
  this.prev_match = 0;        /* previous match */
  this.match_available = 0;   /* set if previous match exists */
  this.strstart = 0;          /* start of string to insert */
  this.match_start = 0;       /* start of matching string */
  this.lookahead = 0;         /* number of valid bytes ahead in window */

  this.prev_length = 0;
  /* Length of the best match at previous step. Matches not greater than this
   * are discarded. This is used in the lazy match evaluation.
   */

  this.max_chain_length = 0;
  /* To speed up deflation, hash chains are never searched beyond this
   * length.  A higher limit improves compression ratio but degrades the
   * speed.
   */

  this.max_lazy_match = 0;
  /* Attempt to find a better match only when the current match is strictly
   * smaller than this value. This mechanism is used only for compression
   * levels >= 4.
   */
  // That's alias to max_lazy_match, don't use directly
  //this.max_insert_length = 0;
  /* Insert new strings in the hash table only if the match length is not
   * greater than this length. This saves time but degrades compression.
   * max_insert_length is used only for compression levels <= 3.
   */

  this.level = 0;     /* compression level (1..9) */
  this.strategy = 0;  /* favor or force Huffman coding*/

  this.good_match = 0;
  /* Use a faster search when the previous match is longer than this */

  this.nice_match = 0; /* Stop searching when current match exceeds this */

              /* used by trees.c: */

  /* Didn't use ct_data typedef below to suppress compiler warning */

  // struct ct_data_s dyn_ltree[HEAP_SIZE];   /* literal and length tree */
  // struct ct_data_s dyn_dtree[2*D_CODES+1]; /* distance tree */
  // struct ct_data_s bl_tree[2*BL_CODES+1];  /* Huffman tree for bit lengths */

  // Use flat array of DOUBLE size, with interleaved fata,
  // because JS does not support effective
  this.dyn_ltree  = new Uint16Array(HEAP_SIZE * 2);
  this.dyn_dtree  = new Uint16Array((2 * D_CODES + 1) * 2);
  this.bl_tree    = new Uint16Array((2 * BL_CODES + 1) * 2);
  zero(this.dyn_ltree);
  zero(this.dyn_dtree);
  zero(this.bl_tree);

  this.l_desc   = null;         /* desc. for literal tree */
  this.d_desc   = null;         /* desc. for distance tree */
  this.bl_desc  = null;         /* desc. for bit length tree */

  //ush bl_count[MAX_BITS+1];
  this.bl_count = new Uint16Array(MAX_BITS + 1);
  /* number of codes at each bit length for an optimal tree */

  //int heap[2*L_CODES+1];      /* heap used to build the Huffman trees */
  this.heap = new Uint16Array(2 * L_CODES + 1);  /* heap used to build the Huffman trees */
  zero(this.heap);

  this.heap_len = 0;               /* number of elements in the heap */
  this.heap_max = 0;               /* element of largest frequency */
  /* The sons of heap[n] are heap[2*n] and heap[2*n+1]. heap[0] is not used.
   * The same heap array is used to build all trees.
   */

  this.depth = new Uint16Array(2 * L_CODES + 1); //uch depth[2*L_CODES+1];
  zero(this.depth);
  /* Depth of each subtree used as tie breaker for trees of equal frequency
   */

  this.l_buf = 0;          /* buffer index for literals or lengths */

  this.lit_bufsize = 0;
  /* Size of match buffer for literals/lengths.  There are 4 reasons for
   * limiting lit_bufsize to 64K:
   *   - frequencies can be kept in 16 bit counters
   *   - if compression is not successful for the first block, all input
   *     data is still in the window so we can still emit a stored block even
   *     when input comes from standard input.  (This can also be done for
   *     all blocks if lit_bufsize is not greater than 32K.)
   *   - if compression is not successful for a file smaller than 64K, we can
   *     even emit a stored file instead of a stored block (saving 5 bytes).
   *     This is applicable only for zip (not gzip or zlib).
   *   - creating new Huffman trees less frequently may not provide fast
   *     adaptation to changes in the input data statistics. (Take for
   *     example a binary file with poorly compressible code followed by
   *     a highly compressible string table.) Smaller buffer sizes give
   *     fast adaptation but have of course the overhead of transmitting
   *     trees more frequently.
   *   - I can't count above 4
   */

  this.last_lit = 0;      /* running index in l_buf */

  this.d_buf = 0;
  /* Buffer index for distances. To simplify the code, d_buf and l_buf have
   * the same number of elements. To use different lengths, an extra flag
   * array would be necessary.
   */

  this.opt_len = 0;       /* bit length of current block with optimal trees */
  this.static_len = 0;    /* bit length of current block with static trees */
  this.matches = 0;       /* number of string matches in current block */
  this.insert = 0;        /* bytes at end of window left to insert */


  this.bi_buf = 0;
  /* Output buffer. bits are inserted starting at the bottom (least
   * significant bits).
   */
  this.bi_valid = 0;
  /* Number of valid bits in bi_buf.  All bits above the last valid bit
   * are always zero.
   */

  // Used for window memory init. We safely ignore it for JS. That makes
  // sense only for pointers and memory check tools.
  //this.high_water = 0;
  /* High water mark offset in window for initialized bytes -- bytes above
   * this are set to zero in order to avoid memory check warnings when
   * longest match routines access bytes past the input.  This is then
   * updated to the new high water mark.
   */
}


const deflateResetKeep = (strm) => {

  if (!strm || !strm.state) {
    return err(strm, Z_STREAM_ERROR$2);
  }

  strm.total_in = strm.total_out = 0;
  strm.data_type = Z_UNKNOWN;

  const s = strm.state;
  s.pending = 0;
  s.pending_out = 0;

  if (s.wrap < 0) {
    s.wrap = -s.wrap;
    /* was made negative by deflate(..., Z_FINISH); */
  }
  s.status = (s.wrap ? INIT_STATE : BUSY_STATE);
  strm.adler = (s.wrap === 2) ?
    0  // crc32(0, Z_NULL, 0)
  :
    1; // adler32(0, Z_NULL, 0)
  s.last_flush = Z_NO_FLUSH$2;
  _tr_init(s);
  return Z_OK$3;
};


const deflateReset = (strm) => {

  const ret = deflateResetKeep(strm);
  if (ret === Z_OK$3) {
    lm_init(strm.state);
  }
  return ret;
};


const deflateSetHeader = (strm, head) => {

  if (!strm || !strm.state) { return Z_STREAM_ERROR$2; }
  if (strm.state.wrap !== 2) { return Z_STREAM_ERROR$2; }
  strm.state.gzhead = head;
  return Z_OK$3;
};


const deflateInit2 = (strm, level, method, windowBits, memLevel, strategy) => {

  if (!strm) { // === Z_NULL
    return Z_STREAM_ERROR$2;
  }
  let wrap = 1;

  if (level === Z_DEFAULT_COMPRESSION$1) {
    level = 6;
  }

  if (windowBits < 0) { /* suppress zlib wrapper */
    wrap = 0;
    windowBits = -windowBits;
  }

  else if (windowBits > 15) {
    wrap = 2;           /* write gzip wrapper instead */
    windowBits -= 16;
  }


  if (memLevel < 1 || memLevel > MAX_MEM_LEVEL || method !== Z_DEFLATED$2 ||
    windowBits < 8 || windowBits > 15 || level < 0 || level > 9 ||
    strategy < 0 || strategy > Z_FIXED) {
    return err(strm, Z_STREAM_ERROR$2);
  }


  if (windowBits === 8) {
    windowBits = 9;
  }
  /* until 256-byte window bug fixed */

  const s = new DeflateState();

  strm.state = s;
  s.strm = strm;

  s.wrap = wrap;
  s.gzhead = null;
  s.w_bits = windowBits;
  s.w_size = 1 << s.w_bits;
  s.w_mask = s.w_size - 1;

  s.hash_bits = memLevel + 7;
  s.hash_size = 1 << s.hash_bits;
  s.hash_mask = s.hash_size - 1;
  s.hash_shift = ~~((s.hash_bits + MIN_MATCH - 1) / MIN_MATCH);

  s.window = new Uint8Array(s.w_size * 2);
  s.head = new Uint16Array(s.hash_size);
  s.prev = new Uint16Array(s.w_size);

  // Don't need mem init magic for JS.
  //s.high_water = 0;  /* nothing written to s->window yet */

  s.lit_bufsize = 1 << (memLevel + 6); /* 16K elements by default */

  s.pending_buf_size = s.lit_bufsize * 4;

  //overlay = (ushf *) ZALLOC(strm, s->lit_bufsize, sizeof(ush)+2);
  //s->pending_buf = (uchf *) overlay;
  s.pending_buf = new Uint8Array(s.pending_buf_size);

  // It is offset from `s.pending_buf` (size is `s.lit_bufsize * 2`)
  //s->d_buf = overlay + s->lit_bufsize/sizeof(ush);
  s.d_buf = 1 * s.lit_bufsize;

  //s->l_buf = s->pending_buf + (1+sizeof(ush))*s->lit_bufsize;
  s.l_buf = (1 + 2) * s.lit_bufsize;

  s.level = level;
  s.strategy = strategy;
  s.method = method;

  return deflateReset(strm);
};

const deflateInit = (strm, level) => {

  return deflateInit2(strm, level, Z_DEFLATED$2, MAX_WBITS$1, DEF_MEM_LEVEL, Z_DEFAULT_STRATEGY$1);
};


const deflate$2 = (strm, flush) => {

  let beg, val; // for gzip header write only

  if (!strm || !strm.state ||
    flush > Z_BLOCK$1 || flush < 0) {
    return strm ? err(strm, Z_STREAM_ERROR$2) : Z_STREAM_ERROR$2;
  }

  const s = strm.state;

  if (!strm.output ||
      (!strm.input && strm.avail_in !== 0) ||
      (s.status === FINISH_STATE && flush !== Z_FINISH$3)) {
    return err(strm, (strm.avail_out === 0) ? Z_BUF_ERROR$1 : Z_STREAM_ERROR$2);
  }

  s.strm = strm; /* just in case */
  const old_flush = s.last_flush;
  s.last_flush = flush;

  /* Write the header */
  if (s.status === INIT_STATE) {

    if (s.wrap === 2) { // GZIP header
      strm.adler = 0;  //crc32(0L, Z_NULL, 0);
      put_byte(s, 31);
      put_byte(s, 139);
      put_byte(s, 8);
      if (!s.gzhead) { // s->gzhead == Z_NULL
        put_byte(s, 0);
        put_byte(s, 0);
        put_byte(s, 0);
        put_byte(s, 0);
        put_byte(s, 0);
        put_byte(s, s.level === 9 ? 2 :
                    (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ?
                     4 : 0));
        put_byte(s, OS_CODE);
        s.status = BUSY_STATE;
      }
      else {
        put_byte(s, (s.gzhead.text ? 1 : 0) +
                    (s.gzhead.hcrc ? 2 : 0) +
                    (!s.gzhead.extra ? 0 : 4) +
                    (!s.gzhead.name ? 0 : 8) +
                    (!s.gzhead.comment ? 0 : 16)
        );
        put_byte(s, s.gzhead.time & 0xff);
        put_byte(s, (s.gzhead.time >> 8) & 0xff);
        put_byte(s, (s.gzhead.time >> 16) & 0xff);
        put_byte(s, (s.gzhead.time >> 24) & 0xff);
        put_byte(s, s.level === 9 ? 2 :
                    (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ?
                     4 : 0));
        put_byte(s, s.gzhead.os & 0xff);
        if (s.gzhead.extra && s.gzhead.extra.length) {
          put_byte(s, s.gzhead.extra.length & 0xff);
          put_byte(s, (s.gzhead.extra.length >> 8) & 0xff);
        }
        if (s.gzhead.hcrc) {
          strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending, 0);
        }
        s.gzindex = 0;
        s.status = EXTRA_STATE;
      }
    }
    else // DEFLATE header
    {
      let header = (Z_DEFLATED$2 + ((s.w_bits - 8) << 4)) << 8;
      let level_flags = -1;

      if (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2) {
        level_flags = 0;
      } else if (s.level < 6) {
        level_flags = 1;
      } else if (s.level === 6) {
        level_flags = 2;
      } else {
        level_flags = 3;
      }
      header |= (level_flags << 6);
      if (s.strstart !== 0) { header |= PRESET_DICT; }
      header += 31 - (header % 31);

      s.status = BUSY_STATE;
      putShortMSB(s, header);

      /* Save the adler32 of the preset dictionary: */
      if (s.strstart !== 0) {
        putShortMSB(s, strm.adler >>> 16);
        putShortMSB(s, strm.adler & 0xffff);
      }
      strm.adler = 1; // adler32(0L, Z_NULL, 0);
    }
  }

//#ifdef GZIP
  if (s.status === EXTRA_STATE) {
    if (s.gzhead.extra/* != Z_NULL*/) {
      beg = s.pending;  /* start of bytes to update crc */

      while (s.gzindex < (s.gzhead.extra.length & 0xffff)) {
        if (s.pending === s.pending_buf_size) {
          if (s.gzhead.hcrc && s.pending > beg) {
            strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);
          }
          flush_pending(strm);
          beg = s.pending;
          if (s.pending === s.pending_buf_size) {
            break;
          }
        }
        put_byte(s, s.gzhead.extra[s.gzindex] & 0xff);
        s.gzindex++;
      }
      if (s.gzhead.hcrc && s.pending > beg) {
        strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);
      }
      if (s.gzindex === s.gzhead.extra.length) {
        s.gzindex = 0;
        s.status = NAME_STATE;
      }
    }
    else {
      s.status = NAME_STATE;
    }
  }
  if (s.status === NAME_STATE) {
    if (s.gzhead.name/* != Z_NULL*/) {
      beg = s.pending;  /* start of bytes to update crc */
      //int val;

      do {
        if (s.pending === s.pending_buf_size) {
          if (s.gzhead.hcrc && s.pending > beg) {
            strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);
          }
          flush_pending(strm);
          beg = s.pending;
          if (s.pending === s.pending_buf_size) {
            val = 1;
            break;
          }
        }
        // JS specific: little magic to add zero terminator to end of string
        if (s.gzindex < s.gzhead.name.length) {
          val = s.gzhead.name.charCodeAt(s.gzindex++) & 0xff;
        } else {
          val = 0;
        }
        put_byte(s, val);
      } while (val !== 0);

      if (s.gzhead.hcrc && s.pending > beg) {
        strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);
      }
      if (val === 0) {
        s.gzindex = 0;
        s.status = COMMENT_STATE;
      }
    }
    else {
      s.status = COMMENT_STATE;
    }
  }
  if (s.status === COMMENT_STATE) {
    if (s.gzhead.comment/* != Z_NULL*/) {
      beg = s.pending;  /* start of bytes to update crc */
      //int val;

      do {
        if (s.pending === s.pending_buf_size) {
          if (s.gzhead.hcrc && s.pending > beg) {
            strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);
          }
          flush_pending(strm);
          beg = s.pending;
          if (s.pending === s.pending_buf_size) {
            val = 1;
            break;
          }
        }
        // JS specific: little magic to add zero terminator to end of string
        if (s.gzindex < s.gzhead.comment.length) {
          val = s.gzhead.comment.charCodeAt(s.gzindex++) & 0xff;
        } else {
          val = 0;
        }
        put_byte(s, val);
      } while (val !== 0);

      if (s.gzhead.hcrc && s.pending > beg) {
        strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);
      }
      if (val === 0) {
        s.status = HCRC_STATE;
      }
    }
    else {
      s.status = HCRC_STATE;
    }
  }
  if (s.status === HCRC_STATE) {
    if (s.gzhead.hcrc) {
      if (s.pending + 2 > s.pending_buf_size) {
        flush_pending(strm);
      }
      if (s.pending + 2 <= s.pending_buf_size) {
        put_byte(s, strm.adler & 0xff);
        put_byte(s, (strm.adler >> 8) & 0xff);
        strm.adler = 0; //crc32(0L, Z_NULL, 0);
        s.status = BUSY_STATE;
      }
    }
    else {
      s.status = BUSY_STATE;
    }
  }
//#endif

  /* Flush as much pending output as possible */
  if (s.pending !== 0) {
    flush_pending(strm);
    if (strm.avail_out === 0) {
      /* Since avail_out is 0, deflate will be called again with
       * more output space, but possibly with both pending and
       * avail_in equal to zero. There won't be anything to do,
       * but this is not an error situation so make sure we
       * return OK instead of BUF_ERROR at next call of deflate:
       */
      s.last_flush = -1;
      return Z_OK$3;
    }

    /* Make sure there is something to do and avoid duplicate consecutive
     * flushes. For repeated and useless calls with Z_FINISH, we keep
     * returning Z_STREAM_END instead of Z_BUF_ERROR.
     */
  } else if (strm.avail_in === 0 && rank(flush) <= rank(old_flush) &&
    flush !== Z_FINISH$3) {
    return err(strm, Z_BUF_ERROR$1);
  }

  /* User must not provide more input after the first FINISH: */
  if (s.status === FINISH_STATE && strm.avail_in !== 0) {
    return err(strm, Z_BUF_ERROR$1);
  }

  /* Start a new block or continue the current one.
   */
  if (strm.avail_in !== 0 || s.lookahead !== 0 ||
    (flush !== Z_NO_FLUSH$2 && s.status !== FINISH_STATE)) {
    let bstate = (s.strategy === Z_HUFFMAN_ONLY) ? deflate_huff(s, flush) :
      (s.strategy === Z_RLE ? deflate_rle(s, flush) :
        configuration_table[s.level].func(s, flush));

    if (bstate === BS_FINISH_STARTED || bstate === BS_FINISH_DONE) {
      s.status = FINISH_STATE;
    }
    if (bstate === BS_NEED_MORE || bstate === BS_FINISH_STARTED) {
      if (strm.avail_out === 0) {
        s.last_flush = -1;
        /* avoid BUF_ERROR next call, see above */
      }
      return Z_OK$3;
      /* If flush != Z_NO_FLUSH && avail_out == 0, the next call
       * of deflate should use the same flush parameter to make sure
       * that the flush is complete. So we don't have to output an
       * empty block here, this will be done at next call. This also
       * ensures that for a very small output buffer, we emit at most
       * one empty block.
       */
    }
    if (bstate === BS_BLOCK_DONE) {
      if (flush === Z_PARTIAL_FLUSH) {
        _tr_align(s);
      }
      else if (flush !== Z_BLOCK$1) { /* FULL_FLUSH or SYNC_FLUSH */

        _tr_stored_block(s, 0, 0, false);
        /* For a full flush, this empty block will be recognized
         * as a special marker by inflate_sync().
         */
        if (flush === Z_FULL_FLUSH$1) {
          /*** CLEAR_HASH(s); ***/             /* forget history */
          zero(s.head); // Fill with NIL (= 0);

          if (s.lookahead === 0) {
            s.strstart = 0;
            s.block_start = 0;
            s.insert = 0;
          }
        }
      }
      flush_pending(strm);
      if (strm.avail_out === 0) {
        s.last_flush = -1; /* avoid BUF_ERROR at next call, see above */
        return Z_OK$3;
      }
    }
  }
  //Assert(strm->avail_out > 0, "bug2");
  //if (strm.avail_out <= 0) { throw new Error("bug2");}

  if (flush !== Z_FINISH$3) { return Z_OK$3; }
  if (s.wrap <= 0) { return Z_STREAM_END$3; }

  /* Write the trailer */
  if (s.wrap === 2) {
    put_byte(s, strm.adler & 0xff);
    put_byte(s, (strm.adler >> 8) & 0xff);
    put_byte(s, (strm.adler >> 16) & 0xff);
    put_byte(s, (strm.adler >> 24) & 0xff);
    put_byte(s, strm.total_in & 0xff);
    put_byte(s, (strm.total_in >> 8) & 0xff);
    put_byte(s, (strm.total_in >> 16) & 0xff);
    put_byte(s, (strm.total_in >> 24) & 0xff);
  }
  else
  {
    putShortMSB(s, strm.adler >>> 16);
    putShortMSB(s, strm.adler & 0xffff);
  }

  flush_pending(strm);
  /* If avail_out is zero, the application will call deflate again
   * to flush the rest.
   */
  if (s.wrap > 0) { s.wrap = -s.wrap; }
  /* write the trailer only once! */
  return s.pending !== 0 ? Z_OK$3 : Z_STREAM_END$3;
};


const deflateEnd = (strm) => {

  if (!strm/*== Z_NULL*/ || !strm.state/*== Z_NULL*/) {
    return Z_STREAM_ERROR$2;
  }

  const status = strm.state.status;
  if (status !== INIT_STATE &&
    status !== EXTRA_STATE &&
    status !== NAME_STATE &&
    status !== COMMENT_STATE &&
    status !== HCRC_STATE &&
    status !== BUSY_STATE &&
    status !== FINISH_STATE
  ) {
    return err(strm, Z_STREAM_ERROR$2);
  }

  strm.state = null;

  return status === BUSY_STATE ? err(strm, Z_DATA_ERROR$2) : Z_OK$3;
};


/* =========================================================================
 * Initializes the compression dictionary from the given byte
 * sequence without producing any compressed output.
 */
const deflateSetDictionary = (strm, dictionary) => {

  let dictLength = dictionary.length;

  if (!strm/*== Z_NULL*/ || !strm.state/*== Z_NULL*/) {
    return Z_STREAM_ERROR$2;
  }

  const s = strm.state;
  const wrap = s.wrap;

  if (wrap === 2 || (wrap === 1 && s.status !== INIT_STATE) || s.lookahead) {
    return Z_STREAM_ERROR$2;
  }

  /* when using zlib wrappers, compute Adler-32 for provided dictionary */
  if (wrap === 1) {
    /* adler32(strm->adler, dictionary, dictLength); */
    strm.adler = adler32_1(strm.adler, dictionary, dictLength, 0);
  }

  s.wrap = 0;   /* avoid computing Adler-32 in read_buf */

  /* if dictionary would fill window, just replace the history */
  if (dictLength >= s.w_size) {
    if (wrap === 0) {            /* already empty otherwise */
      /*** CLEAR_HASH(s); ***/
      zero(s.head); // Fill with NIL (= 0);
      s.strstart = 0;
      s.block_start = 0;
      s.insert = 0;
    }
    /* use the tail */
    // dictionary = dictionary.slice(dictLength - s.w_size);
    let tmpDict = new Uint8Array(s.w_size);
    tmpDict.set(dictionary.subarray(dictLength - s.w_size, dictLength), 0);
    dictionary = tmpDict;
    dictLength = s.w_size;
  }
  /* insert dictionary into window and hash */
  const avail = strm.avail_in;
  const next = strm.next_in;
  const input = strm.input;
  strm.avail_in = dictLength;
  strm.next_in = 0;
  strm.input = dictionary;
  fill_window(s);
  while (s.lookahead >= MIN_MATCH) {
    let str = s.strstart;
    let n = s.lookahead - (MIN_MATCH - 1);
    do {
      /* UPDATE_HASH(s, s->ins_h, s->window[str + MIN_MATCH-1]); */
      s.ins_h = HASH(s, s.ins_h, s.window[str + MIN_MATCH - 1]);

      s.prev[str & s.w_mask] = s.head[s.ins_h];

      s.head[s.ins_h] = str;
      str++;
    } while (--n);
    s.strstart = str;
    s.lookahead = MIN_MATCH - 1;
    fill_window(s);
  }
  s.strstart += s.lookahead;
  s.block_start = s.strstart;
  s.insert = s.lookahead;
  s.lookahead = 0;
  s.match_length = s.prev_length = MIN_MATCH - 1;
  s.match_available = 0;
  strm.next_in = next;
  strm.input = input;
  strm.avail_in = avail;
  s.wrap = wrap;
  return Z_OK$3;
};


var deflateInit_1 = deflateInit;
var deflateInit2_1 = deflateInit2;
var deflateReset_1 = deflateReset;
var deflateResetKeep_1 = deflateResetKeep;
var deflateSetHeader_1 = deflateSetHeader;
var deflate_2$1 = deflate$2;
var deflateEnd_1 = deflateEnd;
var deflateSetDictionary_1 = deflateSetDictionary;
var deflateInfo = 'pako deflate (from Nodeca project)';

/* Not implemented
module.exports.deflateBound = deflateBound;
module.exports.deflateCopy = deflateCopy;
module.exports.deflateParams = deflateParams;
module.exports.deflatePending = deflatePending;
module.exports.deflatePrime = deflatePrime;
module.exports.deflateTune = deflateTune;
*/

var deflate_1$2 = {
	deflateInit: deflateInit_1,
	deflateInit2: deflateInit2_1,
	deflateReset: deflateReset_1,
	deflateResetKeep: deflateResetKeep_1,
	deflateSetHeader: deflateSetHeader_1,
	deflate: deflate_2$1,
	deflateEnd: deflateEnd_1,
	deflateSetDictionary: deflateSetDictionary_1,
	deflateInfo: deflateInfo
};

const _has = (obj, key) => {
  return Object.prototype.hasOwnProperty.call(obj, key);
};

var assign = function (obj /*from1, from2, from3, ...*/) {
  const sources = Array.prototype.slice.call(arguments, 1);
  while (sources.length) {
    const source = sources.shift();
    if (!source) { continue; }

    if (typeof source !== 'object') {
      throw new TypeError(source + 'must be non-object');
    }

    for (const p in source) {
      if (_has(source, p)) {
        obj[p] = source[p];
      }
    }
  }

  return obj;
};


// Join array of chunks to single array.
var flattenChunks = (chunks) => {
  // calculate data length
  let len = 0;

  for (let i = 0, l = chunks.length; i < l; i++) {
    len += chunks[i].length;
  }

  // join chunks
  const result = new Uint8Array(len);

  for (let i = 0, pos = 0, l = chunks.length; i < l; i++) {
    let chunk = chunks[i];
    result.set(chunk, pos);
    pos += chunk.length;
  }

  return result;
};

var common = {
	assign: assign,
	flattenChunks: flattenChunks
};

// String encode/decode helpers


// Quick check if we can use fast array to bin string conversion
//
// - apply(Array) can fail on Android 2.2
// - apply(Uint8Array) can fail on iOS 5.1 Safari
//
let STR_APPLY_UIA_OK = true;

try { String.fromCharCode.apply(null, new Uint8Array(1)); } catch (__) { STR_APPLY_UIA_OK = false; }


// Table with utf8 lengths (calculated by first byte of sequence)
// Note, that 5 & 6-byte values and some 4-byte values can not be represented in JS,
// because max possible codepoint is 0x10ffff
const _utf8len = new Uint8Array(256);
for (let q = 0; q < 256; q++) {
  _utf8len[q] = (q >= 252 ? 6 : q >= 248 ? 5 : q >= 240 ? 4 : q >= 224 ? 3 : q >= 192 ? 2 : 1);
}
_utf8len[254] = _utf8len[254] = 1; // Invalid sequence start


// convert string to array (typed, when possible)
var string2buf = (str) => {
  if (typeof TextEncoder === 'function' && TextEncoder.prototype.encode) {
    return new TextEncoder().encode(str);
  }

  let buf, c, c2, m_pos, i, str_len = str.length, buf_len = 0;

  // count binary size
  for (m_pos = 0; m_pos < str_len; m_pos++) {
    c = str.charCodeAt(m_pos);
    if ((c & 0xfc00) === 0xd800 && (m_pos + 1 < str_len)) {
      c2 = str.charCodeAt(m_pos + 1);
      if ((c2 & 0xfc00) === 0xdc00) {
        c = 0x10000 + ((c - 0xd800) << 10) + (c2 - 0xdc00);
        m_pos++;
      }
    }
    buf_len += c < 0x80 ? 1 : c < 0x800 ? 2 : c < 0x10000 ? 3 : 4;
  }

  // allocate buffer
  buf = new Uint8Array(buf_len);

  // convert
  for (i = 0, m_pos = 0; i < buf_len; m_pos++) {
    c = str.charCodeAt(m_pos);
    if ((c & 0xfc00) === 0xd800 && (m_pos + 1 < str_len)) {
      c2 = str.charCodeAt(m_pos + 1);
      if ((c2 & 0xfc00) === 0xdc00) {
        c = 0x10000 + ((c - 0xd800) << 10) + (c2 - 0xdc00);
        m_pos++;
      }
    }
    if (c < 0x80) {
      /* one byte */
      buf[i++] = c;
    } else if (c < 0x800) {
      /* two bytes */
      buf[i++] = 0xC0 | (c >>> 6);
      buf[i++] = 0x80 | (c & 0x3f);
    } else if (c < 0x10000) {
      /* three bytes */
      buf[i++] = 0xE0 | (c >>> 12);
      buf[i++] = 0x80 | (c >>> 6 & 0x3f);
      buf[i++] = 0x80 | (c & 0x3f);
    } else {
      /* four bytes */
      buf[i++] = 0xf0 | (c >>> 18);
      buf[i++] = 0x80 | (c >>> 12 & 0x3f);
      buf[i++] = 0x80 | (c >>> 6 & 0x3f);
      buf[i++] = 0x80 | (c & 0x3f);
    }
  }

  return buf;
};

// Helper
const buf2binstring = (buf, len) => {
  // On Chrome, the arguments in a function call that are allowed is `65534`.
  // If the length of the buffer is smaller than that, we can use this optimization,
  // otherwise we will take a slower path.
  if (len < 65534) {
    if (buf.subarray && STR_APPLY_UIA_OK) {
      return String.fromCharCode.apply(null, buf.length === len ? buf : buf.subarray(0, len));
    }
  }

  let result = '';
  for (let i = 0; i < len; i++) {
    result += String.fromCharCode(buf[i]);
  }
  return result;
};


// convert array to string
var buf2string = (buf, max) => {
  const len = max || buf.length;

  if (typeof TextDecoder === 'function' && TextDecoder.prototype.decode) {
    return new TextDecoder().decode(buf.subarray(0, max));
  }

  let i, out;

  // Reserve max possible length (2 words per char)
  // NB: by unknown reasons, Array is significantly faster for
  //     String.fromCharCode.apply than Uint16Array.
  const utf16buf = new Array(len * 2);

  for (out = 0, i = 0; i < len;) {
    let c = buf[i++];
    // quick process ascii
    if (c < 0x80) { utf16buf[out++] = c; continue; }

    let c_len = _utf8len[c];
    // skip 5 & 6 byte codes
    if (c_len > 4) { utf16buf[out++] = 0xfffd; i += c_len - 1; continue; }

    // apply mask on first byte
    c &= c_len === 2 ? 0x1f : c_len === 3 ? 0x0f : 0x07;
    // join the rest
    while (c_len > 1 && i < len) {
      c = (c << 6) | (buf[i++] & 0x3f);
      c_len--;
    }

    // terminated by end of string?
    if (c_len > 1) { utf16buf[out++] = 0xfffd; continue; }

    if (c < 0x10000) {
      utf16buf[out++] = c;
    } else {
      c -= 0x10000;
      utf16buf[out++] = 0xd800 | ((c >> 10) & 0x3ff);
      utf16buf[out++] = 0xdc00 | (c & 0x3ff);
    }
  }

  return buf2binstring(utf16buf, out);
};


// Calculate max possible position in utf8 buffer,
// that will not break sequence. If that's not possible
// - (very small limits) return max size as is.
//
// buf[] - utf8 bytes array
// max   - length limit (mandatory);
var utf8border = (buf, max) => {

  max = max || buf.length;
  if (max > buf.length) { max = buf.length; }

  // go back from last position, until start of sequence found
  let pos = max - 1;
  while (pos >= 0 && (buf[pos] & 0xC0) === 0x80) { pos--; }

  // Very small and broken sequence,
  // return max, because we should return something anyway.
  if (pos < 0) { return max; }

  // If we came to start of buffer - that means buffer is too small,
  // return max too.
  if (pos === 0) { return max; }

  return (pos + _utf8len[buf[pos]] > max) ? pos : max;
};

var strings = {
	string2buf: string2buf,
	buf2string: buf2string,
	utf8border: utf8border
};

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

function ZStream() {
  /* next input byte */
  this.input = null; // JS specific, because we have no pointers
  this.next_in = 0;
  /* number of bytes available at input */
  this.avail_in = 0;
  /* total number of input bytes read so far */
  this.total_in = 0;
  /* next output byte should be put there */
  this.output = null; // JS specific, because we have no pointers
  this.next_out = 0;
  /* remaining free space at output */
  this.avail_out = 0;
  /* total number of bytes output so far */
  this.total_out = 0;
  /* last error message, NULL if no error */
  this.msg = ''/*Z_NULL*/;
  /* not visible by applications */
  this.state = null;
  /* best guess about the data type: binary or text */
  this.data_type = 2/*Z_UNKNOWN*/;
  /* adler32 value of the uncompressed data */
  this.adler = 0;
}

var zstream = ZStream;

const toString$1 = Object.prototype.toString;

/* Public constants ==========================================================*/
/* ===========================================================================*/

const {
  Z_NO_FLUSH: Z_NO_FLUSH$1, Z_SYNC_FLUSH, Z_FULL_FLUSH, Z_FINISH: Z_FINISH$2,
  Z_OK: Z_OK$2, Z_STREAM_END: Z_STREAM_END$2,
  Z_DEFAULT_COMPRESSION,
  Z_DEFAULT_STRATEGY,
  Z_DEFLATED: Z_DEFLATED$1
} = constants$2;

/* ===========================================================================*/


/**
 * class Deflate
 *
 * Generic JS-style wrapper for zlib calls. If you don't need
 * streaming behaviour - use more simple functions: [[deflate]],
 * [[deflateRaw]] and [[gzip]].
 **/

/* internal
 * Deflate.chunks -> Array
 *
 * Chunks of output data, if [[Deflate#onData]] not overridden.
 **/

/**
 * Deflate.result -> Uint8Array
 *
 * Compressed result, generated by default [[Deflate#onData]]
 * and [[Deflate#onEnd]] handlers. Filled after you push last chunk
 * (call [[Deflate#push]] with `Z_FINISH` / `true` param).
 **/

/**
 * Deflate.err -> Number
 *
 * Error code after deflate finished. 0 (Z_OK) on success.
 * You will not need it in real life, because deflate errors
 * are possible only on wrong options or bad `onData` / `onEnd`
 * custom handlers.
 **/

/**
 * Deflate.msg -> String
 *
 * Error message, if [[Deflate.err]] != 0
 **/


/**
 * new Deflate(options)
 * - options (Object): zlib deflate options.
 *
 * Creates new deflator instance with specified params. Throws exception
 * on bad params. Supported options:
 *
 * - `level`
 * - `windowBits`
 * - `memLevel`
 * - `strategy`
 * - `dictionary`
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information on these.
 *
 * Additional options, for internal needs:
 *
 * - `chunkSize` - size of generated data chunks (16K by default)
 * - `raw` (Boolean) - do raw deflate
 * - `gzip` (Boolean) - create gzip wrapper
 * - `header` (Object) - custom header for gzip
 *   - `text` (Boolean) - true if compressed data believed to be text
 *   - `time` (Number) - modification time, unix timestamp
 *   - `os` (Number) - operation system code
 *   - `extra` (Array) - array of bytes with extra data (max 65536)
 *   - `name` (String) - file name (binary string)
 *   - `comment` (String) - comment (binary string)
 *   - `hcrc` (Boolean) - true if header crc should be added
 *
 * ##### Example:
 *
 * ```javascript
 * const pako = require('pako')
 *   , chunk1 = new Uint8Array([1,2,3,4,5,6,7,8,9])
 *   , chunk2 = new Uint8Array([10,11,12,13,14,15,16,17,18,19]);
 *
 * const deflate = new pako.Deflate({ level: 3});
 *
 * deflate.push(chunk1, false);
 * deflate.push(chunk2, true);  // true -> last chunk
 *
 * if (deflate.err) { throw new Error(deflate.err); }
 *
 * console.log(deflate.result);
 * ```
 **/
function Deflate$1(options) {
  this.options = common.assign({
    level: Z_DEFAULT_COMPRESSION,
    method: Z_DEFLATED$1,
    chunkSize: 16384,
    windowBits: 15,
    memLevel: 8,
    strategy: Z_DEFAULT_STRATEGY
  }, options || {});

  let opt = this.options;

  if (opt.raw && (opt.windowBits > 0)) {
    opt.windowBits = -opt.windowBits;
  }

  else if (opt.gzip && (opt.windowBits > 0) && (opt.windowBits < 16)) {
    opt.windowBits += 16;
  }

  this.err    = 0;      // error code, if happens (0 = Z_OK)
  this.msg    = '';     // error message
  this.ended  = false;  // used to avoid multiple onEnd() calls
  this.chunks = [];     // chunks of compressed data

  this.strm = new zstream();
  this.strm.avail_out = 0;

  let status = deflate_1$2.deflateInit2(
    this.strm,
    opt.level,
    opt.method,
    opt.windowBits,
    opt.memLevel,
    opt.strategy
  );

  if (status !== Z_OK$2) {
    throw new Error(messages[status]);
  }

  if (opt.header) {
    deflate_1$2.deflateSetHeader(this.strm, opt.header);
  }

  if (opt.dictionary) {
    let dict;
    // Convert data if needed
    if (typeof opt.dictionary === 'string') {
      // If we need to compress text, change encoding to utf8.
      dict = strings.string2buf(opt.dictionary);
    } else if (toString$1.call(opt.dictionary) === '[object ArrayBuffer]') {
      dict = new Uint8Array(opt.dictionary);
    } else {
      dict = opt.dictionary;
    }

    status = deflate_1$2.deflateSetDictionary(this.strm, dict);

    if (status !== Z_OK$2) {
      throw new Error(messages[status]);
    }

    this._dict_set = true;
  }
}

/**
 * Deflate#push(data[, flush_mode]) -> Boolean
 * - data (Uint8Array|ArrayBuffer|String): input data. Strings will be
 *   converted to utf8 byte sequence.
 * - flush_mode (Number|Boolean): 0..6 for corresponding Z_NO_FLUSH..Z_TREE modes.
 *   See constants. Skipped or `false` means Z_NO_FLUSH, `true` means Z_FINISH.
 *
 * Sends input data to deflate pipe, generating [[Deflate#onData]] calls with
 * new compressed chunks. Returns `true` on success. The last data block must
 * have `flush_mode` Z_FINISH (or `true`). That will flush internal pending
 * buffers and call [[Deflate#onEnd]].
 *
 * On fail call [[Deflate#onEnd]] with error code and return false.
 *
 * ##### Example
 *
 * ```javascript
 * push(chunk, false); // push one of data chunks
 * ...
 * push(chunk, true);  // push last chunk
 * ```
 **/
Deflate$1.prototype.push = function (data, flush_mode) {
  const strm = this.strm;
  const chunkSize = this.options.chunkSize;
  let status, _flush_mode;

  if (this.ended) { return false; }

  if (flush_mode === ~~flush_mode) _flush_mode = flush_mode;
  else _flush_mode = flush_mode === true ? Z_FINISH$2 : Z_NO_FLUSH$1;

  // Convert data if needed
  if (typeof data === 'string') {
    // If we need to compress text, change encoding to utf8.
    strm.input = strings.string2buf(data);
  } else if (toString$1.call(data) === '[object ArrayBuffer]') {
    strm.input = new Uint8Array(data);
  } else {
    strm.input = data;
  }

  strm.next_in = 0;
  strm.avail_in = strm.input.length;

  for (;;) {
    if (strm.avail_out === 0) {
      strm.output = new Uint8Array(chunkSize);
      strm.next_out = 0;
      strm.avail_out = chunkSize;
    }

    // Make sure avail_out > 6 to avoid repeating markers
    if ((_flush_mode === Z_SYNC_FLUSH || _flush_mode === Z_FULL_FLUSH) && strm.avail_out <= 6) {
      this.onData(strm.output.subarray(0, strm.next_out));
      strm.avail_out = 0;
      continue;
    }

    status = deflate_1$2.deflate(strm, _flush_mode);

    // Ended => flush and finish
    if (status === Z_STREAM_END$2) {
      if (strm.next_out > 0) {
        this.onData(strm.output.subarray(0, strm.next_out));
      }
      status = deflate_1$2.deflateEnd(this.strm);
      this.onEnd(status);
      this.ended = true;
      return status === Z_OK$2;
    }

    // Flush if out buffer full
    if (strm.avail_out === 0) {
      this.onData(strm.output);
      continue;
    }

    // Flush if requested and has data
    if (_flush_mode > 0 && strm.next_out > 0) {
      this.onData(strm.output.subarray(0, strm.next_out));
      strm.avail_out = 0;
      continue;
    }

    if (strm.avail_in === 0) break;
  }

  return true;
};


/**
 * Deflate#onData(chunk) -> Void
 * - chunk (Uint8Array): output data.
 *
 * By default, stores data blocks in `chunks[]` property and glue
 * those in `onEnd`. Override this handler, if you need another behaviour.
 **/
Deflate$1.prototype.onData = function (chunk) {
  this.chunks.push(chunk);
};


/**
 * Deflate#onEnd(status) -> Void
 * - status (Number): deflate status. 0 (Z_OK) on success,
 *   other if not.
 *
 * Called once after you tell deflate that the input stream is
 * complete (Z_FINISH). By default - join collected chunks,
 * free memory and fill `results` / `err` properties.
 **/
Deflate$1.prototype.onEnd = function (status) {
  // On success - join
  if (status === Z_OK$2) {
    this.result = common.flattenChunks(this.chunks);
  }
  this.chunks = [];
  this.err = status;
  this.msg = this.strm.msg;
};


/**
 * deflate(data[, options]) -> Uint8Array
 * - data (Uint8Array|String): input data to compress.
 * - options (Object): zlib deflate options.
 *
 * Compress `data` with deflate algorithm and `options`.
 *
 * Supported options are:
 *
 * - level
 * - windowBits
 * - memLevel
 * - strategy
 * - dictionary
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information on these.
 *
 * Sugar (options):
 *
 * - `raw` (Boolean) - say that we work with raw stream, if you don't wish to specify
 *   negative windowBits implicitly.
 *
 * ##### Example:
 *
 * ```javascript
 * const pako = require('pako')
 * const data = new Uint8Array([1,2,3,4,5,6,7,8,9]);
 *
 * console.log(pako.deflate(data));
 * ```
 **/
function deflate$1(input, options) {
  const deflator = new Deflate$1(options);

  deflator.push(input, true);

  // That will never happens, if you don't cheat with options :)
  if (deflator.err) { throw deflator.msg || messages[deflator.err]; }

  return deflator.result;
}


/**
 * deflateRaw(data[, options]) -> Uint8Array
 * - data (Uint8Array|String): input data to compress.
 * - options (Object): zlib deflate options.
 *
 * The same as [[deflate]], but creates raw data, without wrapper
 * (header and adler32 crc).
 **/
function deflateRaw$1(input, options) {
  options = options || {};
  options.raw = true;
  return deflate$1(input, options);
}


/**
 * gzip(data[, options]) -> Uint8Array
 * - data (Uint8Array|String): input data to compress.
 * - options (Object): zlib deflate options.
 *
 * The same as [[deflate]], but create gzip wrapper instead of
 * deflate one.
 **/
function gzip$1(input, options) {
  options = options || {};
  options.gzip = true;
  return deflate$1(input, options);
}


var Deflate_1$1 = Deflate$1;
var deflate_2 = deflate$1;
var deflateRaw_1$1 = deflateRaw$1;
var gzip_1$1 = gzip$1;
var constants$1 = constants$2;

var deflate_1$1 = {
	Deflate: Deflate_1$1,
	deflate: deflate_2,
	deflateRaw: deflateRaw_1$1,
	gzip: gzip_1$1,
	constants: constants$1
};

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

// See state defs from inflate.js
const BAD$1 = 30;       /* got a data error -- remain here until reset */
const TYPE$1 = 12;      /* i: waiting for type bits, including last-flag bit */

/*
   Decode literal, length, and distance codes and write out the resulting
   literal and match bytes until either not enough input or output is
   available, an end-of-block is encountered, or a data error is encountered.
   When large enough input and output buffers are supplied to inflate(), for
   example, a 16K input buffer and a 64K output buffer, more than 95% of the
   inflate execution time is spent in this routine.

   Entry assumptions:

        state.mode === LEN
        strm.avail_in >= 6
        strm.avail_out >= 258
        start >= strm.avail_out
        state.bits < 8

   On return, state.mode is one of:

        LEN -- ran out of enough output space or enough available input
        TYPE -- reached end of block code, inflate() to interpret next block
        BAD -- error in block data

   Notes:

    - The maximum input bits used by a length/distance pair is 15 bits for the
      length code, 5 bits for the length extra, 15 bits for the distance code,
      and 13 bits for the distance extra.  This totals 48 bits, or six bytes.
      Therefore if strm.avail_in >= 6, then there is enough input to avoid
      checking for available input while decoding.

    - The maximum bytes that a single length/distance pair can output is 258
      bytes, which is the maximum length that can be coded.  inflate_fast()
      requires strm.avail_out >= 258 for each loop to avoid checking for
      output space.
 */
var inffast = function inflate_fast(strm, start) {
  let _in;                    /* local strm.input */
  let last;                   /* have enough input while in < last */
  let _out;                   /* local strm.output */
  let beg;                    /* inflate()'s initial strm.output */
  let end;                    /* while out < end, enough space available */
//#ifdef INFLATE_STRICT
  let dmax;                   /* maximum distance from zlib header */
//#endif
  let wsize;                  /* window size or zero if not using window */
  let whave;                  /* valid bytes in the window */
  let wnext;                  /* window write index */
  // Use `s_window` instead `window`, avoid conflict with instrumentation tools
  let s_window;               /* allocated sliding window, if wsize != 0 */
  let hold;                   /* local strm.hold */
  let bits;                   /* local strm.bits */
  let lcode;                  /* local strm.lencode */
  let dcode;                  /* local strm.distcode */
  let lmask;                  /* mask for first level of length codes */
  let dmask;                  /* mask for first level of distance codes */
  let here;                   /* retrieved table entry */
  let op;                     /* code bits, operation, extra bits, or */
                              /*  window position, window bytes to copy */
  let len;                    /* match length, unused bytes */
  let dist;                   /* match distance */
  let from;                   /* where to copy match from */
  let from_source;


  let input, output; // JS specific, because we have no pointers

  /* copy state to local variables */
  const state = strm.state;
  //here = state.here;
  _in = strm.next_in;
  input = strm.input;
  last = _in + (strm.avail_in - 5);
  _out = strm.next_out;
  output = strm.output;
  beg = _out - (start - strm.avail_out);
  end = _out + (strm.avail_out - 257);
//#ifdef INFLATE_STRICT
  dmax = state.dmax;
//#endif
  wsize = state.wsize;
  whave = state.whave;
  wnext = state.wnext;
  s_window = state.window;
  hold = state.hold;
  bits = state.bits;
  lcode = state.lencode;
  dcode = state.distcode;
  lmask = (1 << state.lenbits) - 1;
  dmask = (1 << state.distbits) - 1;


  /* decode literals and length/distances until end-of-block or not enough
     input data or output space */

  top:
  do {
    if (bits < 15) {
      hold += input[_in++] << bits;
      bits += 8;
      hold += input[_in++] << bits;
      bits += 8;
    }

    here = lcode[hold & lmask];

    dolen:
    for (;;) { // Goto emulation
      op = here >>> 24/*here.bits*/;
      hold >>>= op;
      bits -= op;
      op = (here >>> 16) & 0xff/*here.op*/;
      if (op === 0) {                          /* literal */
        //Tracevv((stderr, here.val >= 0x20 && here.val < 0x7f ?
        //        "inflate:         literal '%c'\n" :
        //        "inflate:         literal 0x%02x\n", here.val));
        output[_out++] = here & 0xffff/*here.val*/;
      }
      else if (op & 16) {                     /* length base */
        len = here & 0xffff/*here.val*/;
        op &= 15;                           /* number of extra bits */
        if (op) {
          if (bits < op) {
            hold += input[_in++] << bits;
            bits += 8;
          }
          len += hold & ((1 << op) - 1);
          hold >>>= op;
          bits -= op;
        }
        //Tracevv((stderr, "inflate:         length %u\n", len));
        if (bits < 15) {
          hold += input[_in++] << bits;
          bits += 8;
          hold += input[_in++] << bits;
          bits += 8;
        }
        here = dcode[hold & dmask];

        dodist:
        for (;;) { // goto emulation
          op = here >>> 24/*here.bits*/;
          hold >>>= op;
          bits -= op;
          op = (here >>> 16) & 0xff/*here.op*/;

          if (op & 16) {                      /* distance base */
            dist = here & 0xffff/*here.val*/;
            op &= 15;                       /* number of extra bits */
            if (bits < op) {
              hold += input[_in++] << bits;
              bits += 8;
              if (bits < op) {
                hold += input[_in++] << bits;
                bits += 8;
              }
            }
            dist += hold & ((1 << op) - 1);
//#ifdef INFLATE_STRICT
            if (dist > dmax) {
              strm.msg = 'invalid distance too far back';
              state.mode = BAD$1;
              break top;
            }
//#endif
            hold >>>= op;
            bits -= op;
            //Tracevv((stderr, "inflate:         distance %u\n", dist));
            op = _out - beg;                /* max distance in output */
            if (dist > op) {                /* see if copy from window */
              op = dist - op;               /* distance back in window */
              if (op > whave) {
                if (state.sane) {
                  strm.msg = 'invalid distance too far back';
                  state.mode = BAD$1;
                  break top;
                }

// (!) This block is disabled in zlib defaults,
// don't enable it for binary compatibility
//#ifdef INFLATE_ALLOW_INVALID_DISTANCE_TOOFAR_ARRR
//                if (len <= op - whave) {
//                  do {
//                    output[_out++] = 0;
//                  } while (--len);
//                  continue top;
//                }
//                len -= op - whave;
//                do {
//                  output[_out++] = 0;
//                } while (--op > whave);
//                if (op === 0) {
//                  from = _out - dist;
//                  do {
//                    output[_out++] = output[from++];
//                  } while (--len);
//                  continue top;
//                }
//#endif
              }
              from = 0; // window index
              from_source = s_window;
              if (wnext === 0) {           /* very common case */
                from += wsize - op;
                if (op < len) {         /* some from window */
                  len -= op;
                  do {
                    output[_out++] = s_window[from++];
                  } while (--op);
                  from = _out - dist;  /* rest from output */
                  from_source = output;
                }
              }
              else if (wnext < op) {      /* wrap around window */
                from += wsize + wnext - op;
                op -= wnext;
                if (op < len) {         /* some from end of window */
                  len -= op;
                  do {
                    output[_out++] = s_window[from++];
                  } while (--op);
                  from = 0;
                  if (wnext < len) {  /* some from start of window */
                    op = wnext;
                    len -= op;
                    do {
                      output[_out++] = s_window[from++];
                    } while (--op);
                    from = _out - dist;      /* rest from output */
                    from_source = output;
                  }
                }
              }
              else {                      /* contiguous in window */
                from += wnext - op;
                if (op < len) {         /* some from window */
                  len -= op;
                  do {
                    output[_out++] = s_window[from++];
                  } while (--op);
                  from = _out - dist;  /* rest from output */
                  from_source = output;
                }
              }
              while (len > 2) {
                output[_out++] = from_source[from++];
                output[_out++] = from_source[from++];
                output[_out++] = from_source[from++];
                len -= 3;
              }
              if (len) {
                output[_out++] = from_source[from++];
                if (len > 1) {
                  output[_out++] = from_source[from++];
                }
              }
            }
            else {
              from = _out - dist;          /* copy direct from output */
              do {                        /* minimum length is three */
                output[_out++] = output[from++];
                output[_out++] = output[from++];
                output[_out++] = output[from++];
                len -= 3;
              } while (len > 2);
              if (len) {
                output[_out++] = output[from++];
                if (len > 1) {
                  output[_out++] = output[from++];
                }
              }
            }
          }
          else if ((op & 64) === 0) {          /* 2nd level distance code */
            here = dcode[(here & 0xffff)/*here.val*/ + (hold & ((1 << op) - 1))];
            continue dodist;
          }
          else {
            strm.msg = 'invalid distance code';
            state.mode = BAD$1;
            break top;
          }

          break; // need to emulate goto via "continue"
        }
      }
      else if ((op & 64) === 0) {              /* 2nd level length code */
        here = lcode[(here & 0xffff)/*here.val*/ + (hold & ((1 << op) - 1))];
        continue dolen;
      }
      else if (op & 32) {                     /* end-of-block */
        //Tracevv((stderr, "inflate:         end of block\n"));
        state.mode = TYPE$1;
        break top;
      }
      else {
        strm.msg = 'invalid literal/length code';
        state.mode = BAD$1;
        break top;
      }

      break; // need to emulate goto via "continue"
    }
  } while (_in < last && _out < end);

  /* return unused bytes (on entry, bits < 8, so in won't go too far back) */
  len = bits >> 3;
  _in -= len;
  bits -= len << 3;
  hold &= (1 << bits) - 1;

  /* update state and return */
  strm.next_in = _in;
  strm.next_out = _out;
  strm.avail_in = (_in < last ? 5 + (last - _in) : 5 - (_in - last));
  strm.avail_out = (_out < end ? 257 + (end - _out) : 257 - (_out - end));
  state.hold = hold;
  state.bits = bits;
  return;
};

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

const MAXBITS = 15;
const ENOUGH_LENS$1 = 852;
const ENOUGH_DISTS$1 = 592;
//const ENOUGH = (ENOUGH_LENS+ENOUGH_DISTS);

const CODES$1 = 0;
const LENS$1 = 1;
const DISTS$1 = 2;

const lbase = new Uint16Array([ /* Length codes 257..285 base */
  3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31,
  35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0
]);

const lext = new Uint8Array([ /* Length codes 257..285 extra */
  16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18,
  19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78
]);

const dbase = new Uint16Array([ /* Distance codes 0..29 base */
  1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193,
  257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145,
  8193, 12289, 16385, 24577, 0, 0
]);

const dext = new Uint8Array([ /* Distance codes 0..29 extra */
  16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22,
  23, 23, 24, 24, 25, 25, 26, 26, 27, 27,
  28, 28, 29, 29, 64, 64
]);

const inflate_table = (type, lens, lens_index, codes, table, table_index, work, opts) =>
{
  const bits = opts.bits;
      //here = opts.here; /* table entry for duplication */

  let len = 0;               /* a code's length in bits */
  let sym = 0;               /* index of code symbols */
  let min = 0, max = 0;          /* minimum and maximum code lengths */
  let root = 0;              /* number of index bits for root table */
  let curr = 0;              /* number of index bits for current table */
  let drop = 0;              /* code bits to drop for sub-table */
  let left = 0;                   /* number of prefix codes available */
  let used = 0;              /* code entries in table used */
  let huff = 0;              /* Huffman code */
  let incr;              /* for incrementing code, index */
  let fill;              /* index for replicating entries */
  let low;               /* low bits for current root entry */
  let mask;              /* mask for low root bits */
  let next;             /* next available space in table */
  let base = null;     /* base value table to use */
  let base_index = 0;
//  let shoextra;    /* extra bits table to use */
  let end;                    /* use base and extra for symbol > end */
  const count = new Uint16Array(MAXBITS + 1); //[MAXBITS+1];    /* number of codes of each length */
  const offs = new Uint16Array(MAXBITS + 1); //[MAXBITS+1];     /* offsets in table for each length */
  let extra = null;
  let extra_index = 0;

  let here_bits, here_op, here_val;

  /*
   Process a set of code lengths to create a canonical Huffman code.  The
   code lengths are lens[0..codes-1].  Each length corresponds to the
   symbols 0..codes-1.  The Huffman code is generated by first sorting the
   symbols by length from short to long, and retaining the symbol order
   for codes with equal lengths.  Then the code starts with all zero bits
   for the first code of the shortest length, and the codes are integer
   increments for the same length, and zeros are appended as the length
   increases.  For the deflate format, these bits are stored backwards
   from their more natural integer increment ordering, and so when the
   decoding tables are built in the large loop below, the integer codes
   are incremented backwards.

   This routine assumes, but does not check, that all of the entries in
   lens[] are in the range 0..MAXBITS.  The caller must assure this.
   1..MAXBITS is interpreted as that code length.  zero means that that
   symbol does not occur in this code.

   The codes are sorted by computing a count of codes for each length,
   creating from that a table of starting indices for each length in the
   sorted table, and then entering the symbols in order in the sorted
   table.  The sorted table is work[], with that space being provided by
   the caller.

   The length counts are used for other purposes as well, i.e. finding
   the minimum and maximum length codes, determining if there are any
   codes at all, checking for a valid set of lengths, and looking ahead
   at length counts to determine sub-table sizes when building the
   decoding tables.
   */

  /* accumulate lengths for codes (assumes lens[] all in 0..MAXBITS) */
  for (len = 0; len <= MAXBITS; len++) {
    count[len] = 0;
  }
  for (sym = 0; sym < codes; sym++) {
    count[lens[lens_index + sym]]++;
  }

  /* bound code lengths, force root to be within code lengths */
  root = bits;
  for (max = MAXBITS; max >= 1; max--) {
    if (count[max] !== 0) { break; }
  }
  if (root > max) {
    root = max;
  }
  if (max === 0) {                     /* no symbols to code at all */
    //table.op[opts.table_index] = 64;  //here.op = (var char)64;    /* invalid code marker */
    //table.bits[opts.table_index] = 1;   //here.bits = (var char)1;
    //table.val[opts.table_index++] = 0;   //here.val = (var short)0;
    table[table_index++] = (1 << 24) | (64 << 16) | 0;


    //table.op[opts.table_index] = 64;
    //table.bits[opts.table_index] = 1;
    //table.val[opts.table_index++] = 0;
    table[table_index++] = (1 << 24) | (64 << 16) | 0;

    opts.bits = 1;
    return 0;     /* no symbols, but wait for decoding to report error */
  }
  for (min = 1; min < max; min++) {
    if (count[min] !== 0) { break; }
  }
  if (root < min) {
    root = min;
  }

  /* check for an over-subscribed or incomplete set of lengths */
  left = 1;
  for (len = 1; len <= MAXBITS; len++) {
    left <<= 1;
    left -= count[len];
    if (left < 0) {
      return -1;
    }        /* over-subscribed */
  }
  if (left > 0 && (type === CODES$1 || max !== 1)) {
    return -1;                      /* incomplete set */
  }

  /* generate offsets into symbol table for each length for sorting */
  offs[1] = 0;
  for (len = 1; len < MAXBITS; len++) {
    offs[len + 1] = offs[len] + count[len];
  }

  /* sort symbols by length, by symbol order within each length */
  for (sym = 0; sym < codes; sym++) {
    if (lens[lens_index + sym] !== 0) {
      work[offs[lens[lens_index + sym]]++] = sym;
    }
  }

  /*
   Create and fill in decoding tables.  In this loop, the table being
   filled is at next and has curr index bits.  The code being used is huff
   with length len.  That code is converted to an index by dropping drop
   bits off of the bottom.  For codes where len is less than drop + curr,
   those top drop + curr - len bits are incremented through all values to
   fill the table with replicated entries.

   root is the number of index bits for the root table.  When len exceeds
   root, sub-tables are created pointed to by the root entry with an index
   of the low root bits of huff.  This is saved in low to check for when a
   new sub-table should be started.  drop is zero when the root table is
   being filled, and drop is root when sub-tables are being filled.

   When a new sub-table is needed, it is necessary to look ahead in the
   code lengths to determine what size sub-table is needed.  The length
   counts are used for this, and so count[] is decremented as codes are
   entered in the tables.

   used keeps track of how many table entries have been allocated from the
   provided *table space.  It is checked for LENS and DIST tables against
   the constants ENOUGH_LENS and ENOUGH_DISTS to guard against changes in
   the initial root table size constants.  See the comments in inftrees.h
   for more information.

   sym increments through all symbols, and the loop terminates when
   all codes of length max, i.e. all codes, have been processed.  This
   routine permits incomplete codes, so another loop after this one fills
   in the rest of the decoding tables with invalid code markers.
   */

  /* set up for code type */
  // poor man optimization - use if-else instead of switch,
  // to avoid deopts in old v8
  if (type === CODES$1) {
    base = extra = work;    /* dummy value--not used */
    end = 19;

  } else if (type === LENS$1) {
    base = lbase;
    base_index -= 257;
    extra = lext;
    extra_index -= 257;
    end = 256;

  } else {                    /* DISTS */
    base = dbase;
    extra = dext;
    end = -1;
  }

  /* initialize opts for loop */
  huff = 0;                   /* starting code */
  sym = 0;                    /* starting code symbol */
  len = min;                  /* starting code length */
  next = table_index;              /* current table to fill in */
  curr = root;                /* current table index bits */
  drop = 0;                   /* current bits to drop from code for index */
  low = -1;                   /* trigger new sub-table when len > root */
  used = 1 << root;          /* use root table entries */
  mask = used - 1;            /* mask for comparing low */

  /* check available table space */
  if ((type === LENS$1 && used > ENOUGH_LENS$1) ||
    (type === DISTS$1 && used > ENOUGH_DISTS$1)) {
    return 1;
  }

  /* process all codes and make table entries */
  for (;;) {
    /* create table entry */
    here_bits = len - drop;
    if (work[sym] < end) {
      here_op = 0;
      here_val = work[sym];
    }
    else if (work[sym] > end) {
      here_op = extra[extra_index + work[sym]];
      here_val = base[base_index + work[sym]];
    }
    else {
      here_op = 32 + 64;         /* end of block */
      here_val = 0;
    }

    /* replicate for those indices with low len bits equal to huff */
    incr = 1 << (len - drop);
    fill = 1 << curr;
    min = fill;                 /* save offset to next table */
    do {
      fill -= incr;
      table[next + (huff >> drop) + fill] = (here_bits << 24) | (here_op << 16) | here_val |0;
    } while (fill !== 0);

    /* backwards increment the len-bit code huff */
    incr = 1 << (len - 1);
    while (huff & incr) {
      incr >>= 1;
    }
    if (incr !== 0) {
      huff &= incr - 1;
      huff += incr;
    } else {
      huff = 0;
    }

    /* go to next symbol, update count, len */
    sym++;
    if (--count[len] === 0) {
      if (len === max) { break; }
      len = lens[lens_index + work[sym]];
    }

    /* create new sub-table if needed */
    if (len > root && (huff & mask) !== low) {
      /* if first time, transition to sub-tables */
      if (drop === 0) {
        drop = root;
      }

      /* increment past last table */
      next += min;            /* here min is 1 << curr */

      /* determine length of next table */
      curr = len - drop;
      left = 1 << curr;
      while (curr + drop < max) {
        left -= count[curr + drop];
        if (left <= 0) { break; }
        curr++;
        left <<= 1;
      }

      /* check for enough space */
      used += 1 << curr;
      if ((type === LENS$1 && used > ENOUGH_LENS$1) ||
        (type === DISTS$1 && used > ENOUGH_DISTS$1)) {
        return 1;
      }

      /* point entry in root table to sub-table */
      low = huff & mask;
      /*table.op[low] = curr;
      table.bits[low] = root;
      table.val[low] = next - opts.table_index;*/
      table[low] = (root << 24) | (curr << 16) | (next - table_index) |0;
    }
  }

  /* fill in remaining table entry if code is incomplete (guaranteed to have
   at most one remaining entry, since if the code is incomplete, the
   maximum code length that was allowed to get this far is one bit) */
  if (huff !== 0) {
    //table.op[next + huff] = 64;            /* invalid code marker */
    //table.bits[next + huff] = len - drop;
    //table.val[next + huff] = 0;
    table[next + huff] = ((len - drop) << 24) | (64 << 16) |0;
  }

  /* set return parameters */
  //opts.table_index += used;
  opts.bits = root;
  return 0;
};


var inftrees = inflate_table;

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.






const CODES = 0;
const LENS = 1;
const DISTS = 2;

/* Public constants ==========================================================*/
/* ===========================================================================*/

const {
  Z_FINISH: Z_FINISH$1, Z_BLOCK, Z_TREES,
  Z_OK: Z_OK$1, Z_STREAM_END: Z_STREAM_END$1, Z_NEED_DICT: Z_NEED_DICT$1, Z_STREAM_ERROR: Z_STREAM_ERROR$1, Z_DATA_ERROR: Z_DATA_ERROR$1, Z_MEM_ERROR: Z_MEM_ERROR$1, Z_BUF_ERROR,
  Z_DEFLATED
} = constants$2;


/* STATES ====================================================================*/
/* ===========================================================================*/


const    HEAD = 1;       /* i: waiting for magic header */
const    FLAGS = 2;      /* i: waiting for method and flags (gzip) */
const    TIME = 3;       /* i: waiting for modification time (gzip) */
const    OS = 4;         /* i: waiting for extra flags and operating system (gzip) */
const    EXLEN = 5;      /* i: waiting for extra length (gzip) */
const    EXTRA = 6;      /* i: waiting for extra bytes (gzip) */
const    NAME = 7;       /* i: waiting for end of file name (gzip) */
const    COMMENT = 8;    /* i: waiting for end of comment (gzip) */
const    HCRC = 9;       /* i: waiting for header crc (gzip) */
const    DICTID = 10;    /* i: waiting for dictionary check value */
const    DICT = 11;      /* waiting for inflateSetDictionary() call */
const        TYPE = 12;      /* i: waiting for type bits, including last-flag bit */
const        TYPEDO = 13;    /* i: same, but skip check to exit inflate on new block */
const        STORED = 14;    /* i: waiting for stored size (length and complement) */
const        COPY_ = 15;     /* i/o: same as COPY below, but only first time in */
const        COPY = 16;      /* i/o: waiting for input or output to copy stored block */
const        TABLE = 17;     /* i: waiting for dynamic block table lengths */
const        LENLENS = 18;   /* i: waiting for code length code lengths */
const        CODELENS = 19;  /* i: waiting for length/lit and distance code lengths */
const            LEN_ = 20;      /* i: same as LEN below, but only first time in */
const            LEN = 21;       /* i: waiting for length/lit/eob code */
const            LENEXT = 22;    /* i: waiting for length extra bits */
const            DIST = 23;      /* i: waiting for distance code */
const            DISTEXT = 24;   /* i: waiting for distance extra bits */
const            MATCH = 25;     /* o: waiting for output space to copy string */
const            LIT = 26;       /* o: waiting for output space to write literal */
const    CHECK = 27;     /* i: waiting for 32-bit check value */
const    LENGTH = 28;    /* i: waiting for 32-bit length (gzip) */
const    DONE = 29;      /* finished check, done -- remain here until reset */
const    BAD = 30;       /* got a data error -- remain here until reset */
const    MEM = 31;       /* got an inflate() memory error -- remain here until reset */
const    SYNC = 32;      /* looking for synchronization bytes to restart inflate() */

/* ===========================================================================*/



const ENOUGH_LENS = 852;
const ENOUGH_DISTS = 592;
//const ENOUGH =  (ENOUGH_LENS+ENOUGH_DISTS);

const MAX_WBITS = 15;
/* 32K LZ77 window */
const DEF_WBITS = MAX_WBITS;


const zswap32 = (q) => {

  return  (((q >>> 24) & 0xff) +
          ((q >>> 8) & 0xff00) +
          ((q & 0xff00) << 8) +
          ((q & 0xff) << 24));
};


function InflateState() {
  this.mode = 0;             /* current inflate mode */
  this.last = false;          /* true if processing last block */
  this.wrap = 0;              /* bit 0 true for zlib, bit 1 true for gzip */
  this.havedict = false;      /* true if dictionary provided */
  this.flags = 0;             /* gzip header method and flags (0 if zlib) */
  this.dmax = 0;              /* zlib header max distance (INFLATE_STRICT) */
  this.check = 0;             /* protected copy of check value */
  this.total = 0;             /* protected copy of output count */
  // TODO: may be {}
  this.head = null;           /* where to save gzip header information */

  /* sliding window */
  this.wbits = 0;             /* log base 2 of requested window size */
  this.wsize = 0;             /* window size or zero if not using window */
  this.whave = 0;             /* valid bytes in the window */
  this.wnext = 0;             /* window write index */
  this.window = null;         /* allocated sliding window, if needed */

  /* bit accumulator */
  this.hold = 0;              /* input bit accumulator */
  this.bits = 0;              /* number of bits in "in" */

  /* for string and stored block copying */
  this.length = 0;            /* literal or length of data to copy */
  this.offset = 0;            /* distance back to copy string from */

  /* for table and code decoding */
  this.extra = 0;             /* extra bits needed */

  /* fixed and dynamic code tables */
  this.lencode = null;          /* starting table for length/literal codes */
  this.distcode = null;         /* starting table for distance codes */
  this.lenbits = 0;           /* index bits for lencode */
  this.distbits = 0;          /* index bits for distcode */

  /* dynamic table building */
  this.ncode = 0;             /* number of code length code lengths */
  this.nlen = 0;              /* number of length code lengths */
  this.ndist = 0;             /* number of distance code lengths */
  this.have = 0;              /* number of code lengths in lens[] */
  this.next = null;              /* next available space in codes[] */

  this.lens = new Uint16Array(320); /* temporary storage for code lengths */
  this.work = new Uint16Array(288); /* work area for code table building */

  /*
   because we don't have pointers in js, we use lencode and distcode directly
   as buffers so we don't need codes
  */
  //this.codes = new Int32Array(ENOUGH);       /* space for code tables */
  this.lendyn = null;              /* dynamic table for length/literal codes (JS specific) */
  this.distdyn = null;             /* dynamic table for distance codes (JS specific) */
  this.sane = 0;                   /* if false, allow invalid distance too far */
  this.back = 0;                   /* bits back of last unprocessed length/lit */
  this.was = 0;                    /* initial length of match */
}


const inflateResetKeep = (strm) => {

  if (!strm || !strm.state) { return Z_STREAM_ERROR$1; }
  const state = strm.state;
  strm.total_in = strm.total_out = state.total = 0;
  strm.msg = ''; /*Z_NULL*/
  if (state.wrap) {       /* to support ill-conceived Java test suite */
    strm.adler = state.wrap & 1;
  }
  state.mode = HEAD;
  state.last = 0;
  state.havedict = 0;
  state.dmax = 32768;
  state.head = null/*Z_NULL*/;
  state.hold = 0;
  state.bits = 0;
  //state.lencode = state.distcode = state.next = state.codes;
  state.lencode = state.lendyn = new Int32Array(ENOUGH_LENS);
  state.distcode = state.distdyn = new Int32Array(ENOUGH_DISTS);

  state.sane = 1;
  state.back = -1;
  //Tracev((stderr, "inflate: reset\n"));
  return Z_OK$1;
};


const inflateReset = (strm) => {

  if (!strm || !strm.state) { return Z_STREAM_ERROR$1; }
  const state = strm.state;
  state.wsize = 0;
  state.whave = 0;
  state.wnext = 0;
  return inflateResetKeep(strm);

};


const inflateReset2 = (strm, windowBits) => {
  let wrap;

  /* get the state */
  if (!strm || !strm.state) { return Z_STREAM_ERROR$1; }
  const state = strm.state;

  /* extract wrap request from windowBits parameter */
  if (windowBits < 0) {
    wrap = 0;
    windowBits = -windowBits;
  }
  else {
    wrap = (windowBits >> 4) + 1;
    if (windowBits < 48) {
      windowBits &= 15;
    }
  }

  /* set number of window bits, free window if different */
  if (windowBits && (windowBits < 8 || windowBits > 15)) {
    return Z_STREAM_ERROR$1;
  }
  if (state.window !== null && state.wbits !== windowBits) {
    state.window = null;
  }

  /* update state and reset the rest of it */
  state.wrap = wrap;
  state.wbits = windowBits;
  return inflateReset(strm);
};


const inflateInit2 = (strm, windowBits) => {

  if (!strm) { return Z_STREAM_ERROR$1; }
  //strm.msg = Z_NULL;                 /* in case we return an error */

  const state = new InflateState();

  //if (state === Z_NULL) return Z_MEM_ERROR;
  //Tracev((stderr, "inflate: allocated\n"));
  strm.state = state;
  state.window = null/*Z_NULL*/;
  const ret = inflateReset2(strm, windowBits);
  if (ret !== Z_OK$1) {
    strm.state = null/*Z_NULL*/;
  }
  return ret;
};


const inflateInit = (strm) => {

  return inflateInit2(strm, DEF_WBITS);
};


/*
 Return state with length and distance decoding tables and index sizes set to
 fixed code decoding.  Normally this returns fixed tables from inffixed.h.
 If BUILDFIXED is defined, then instead this routine builds the tables the
 first time it's called, and returns those tables the first time and
 thereafter.  This reduces the size of the code by about 2K bytes, in
 exchange for a little execution time.  However, BUILDFIXED should not be
 used for threaded applications, since the rewriting of the tables and virgin
 may not be thread-safe.
 */
let virgin = true;

let lenfix, distfix; // We have no pointers in JS, so keep tables separate


const fixedtables = (state) => {

  /* build fixed huffman tables if first call (may not be thread safe) */
  if (virgin) {
    lenfix = new Int32Array(512);
    distfix = new Int32Array(32);

    /* literal/length table */
    let sym = 0;
    while (sym < 144) { state.lens[sym++] = 8; }
    while (sym < 256) { state.lens[sym++] = 9; }
    while (sym < 280) { state.lens[sym++] = 7; }
    while (sym < 288) { state.lens[sym++] = 8; }

    inftrees(LENS,  state.lens, 0, 288, lenfix,   0, state.work, { bits: 9 });

    /* distance table */
    sym = 0;
    while (sym < 32) { state.lens[sym++] = 5; }

    inftrees(DISTS, state.lens, 0, 32,   distfix, 0, state.work, { bits: 5 });

    /* do this just once */
    virgin = false;
  }

  state.lencode = lenfix;
  state.lenbits = 9;
  state.distcode = distfix;
  state.distbits = 5;
};


/*
 Update the window with the last wsize (normally 32K) bytes written before
 returning.  If window does not exist yet, create it.  This is only called
 when a window is already in use, or when output has been written during this
 inflate call, but the end of the deflate stream has not been reached yet.
 It is also called to create a window for dictionary data when a dictionary
 is loaded.

 Providing output buffers larger than 32K to inflate() should provide a speed
 advantage, since only the last 32K of output is copied to the sliding window
 upon return from inflate(), and since all distances after the first 32K of
 output will fall in the output data, making match copies simpler and faster.
 The advantage may be dependent on the size of the processor's data caches.
 */
const updatewindow = (strm, src, end, copy) => {

  let dist;
  const state = strm.state;

  /* if it hasn't been done already, allocate space for the window */
  if (state.window === null) {
    state.wsize = 1 << state.wbits;
    state.wnext = 0;
    state.whave = 0;

    state.window = new Uint8Array(state.wsize);
  }

  /* copy state->wsize or less output bytes into the circular window */
  if (copy >= state.wsize) {
    state.window.set(src.subarray(end - state.wsize, end), 0);
    state.wnext = 0;
    state.whave = state.wsize;
  }
  else {
    dist = state.wsize - state.wnext;
    if (dist > copy) {
      dist = copy;
    }
    //zmemcpy(state->window + state->wnext, end - copy, dist);
    state.window.set(src.subarray(end - copy, end - copy + dist), state.wnext);
    copy -= dist;
    if (copy) {
      //zmemcpy(state->window, end - copy, copy);
      state.window.set(src.subarray(end - copy, end), 0);
      state.wnext = copy;
      state.whave = state.wsize;
    }
    else {
      state.wnext += dist;
      if (state.wnext === state.wsize) { state.wnext = 0; }
      if (state.whave < state.wsize) { state.whave += dist; }
    }
  }
  return 0;
};


const inflate$2 = (strm, flush) => {

  let state;
  let input, output;          // input/output buffers
  let next;                   /* next input INDEX */
  let put;                    /* next output INDEX */
  let have, left;             /* available input and output */
  let hold;                   /* bit buffer */
  let bits;                   /* bits in bit buffer */
  let _in, _out;              /* save starting available input and output */
  let copy;                   /* number of stored or match bytes to copy */
  let from;                   /* where to copy match bytes from */
  let from_source;
  let here = 0;               /* current decoding table entry */
  let here_bits, here_op, here_val; // paked "here" denormalized (JS specific)
  //let last;                   /* parent table entry */
  let last_bits, last_op, last_val; // paked "last" denormalized (JS specific)
  let len;                    /* length to copy for repeats, bits to drop */
  let ret;                    /* return code */
  const hbuf = new Uint8Array(4);    /* buffer for gzip header crc calculation */
  let opts;

  let n; // temporary variable for NEED_BITS

  const order = /* permutation of code lengths */
    new Uint8Array([ 16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15 ]);


  if (!strm || !strm.state || !strm.output ||
      (!strm.input && strm.avail_in !== 0)) {
    return Z_STREAM_ERROR$1;
  }

  state = strm.state;
  if (state.mode === TYPE) { state.mode = TYPEDO; }    /* skip check */


  //--- LOAD() ---
  put = strm.next_out;
  output = strm.output;
  left = strm.avail_out;
  next = strm.next_in;
  input = strm.input;
  have = strm.avail_in;
  hold = state.hold;
  bits = state.bits;
  //---

  _in = have;
  _out = left;
  ret = Z_OK$1;

  inf_leave: // goto emulation
  for (;;) {
    switch (state.mode) {
      case HEAD:
        if (state.wrap === 0) {
          state.mode = TYPEDO;
          break;
        }
        //=== NEEDBITS(16);
        while (bits < 16) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        if ((state.wrap & 2) && hold === 0x8b1f) {  /* gzip header */
          state.check = 0/*crc32(0L, Z_NULL, 0)*/;
          //=== CRC2(state.check, hold);
          hbuf[0] = hold & 0xff;
          hbuf[1] = (hold >>> 8) & 0xff;
          state.check = crc32_1(state.check, hbuf, 2, 0);
          //===//

          //=== INITBITS();
          hold = 0;
          bits = 0;
          //===//
          state.mode = FLAGS;
          break;
        }
        state.flags = 0;           /* expect zlib header */
        if (state.head) {
          state.head.done = false;
        }
        if (!(state.wrap & 1) ||   /* check if zlib header allowed */
          (((hold & 0xff)/*BITS(8)*/ << 8) + (hold >> 8)) % 31) {
          strm.msg = 'incorrect header check';
          state.mode = BAD;
          break;
        }
        if ((hold & 0x0f)/*BITS(4)*/ !== Z_DEFLATED) {
          strm.msg = 'unknown compression method';
          state.mode = BAD;
          break;
        }
        //--- DROPBITS(4) ---//
        hold >>>= 4;
        bits -= 4;
        //---//
        len = (hold & 0x0f)/*BITS(4)*/ + 8;
        if (state.wbits === 0) {
          state.wbits = len;
        }
        else if (len > state.wbits) {
          strm.msg = 'invalid window size';
          state.mode = BAD;
          break;
        }

        // !!! pako patch. Force use `options.windowBits` if passed.
        // Required to always use max window size by default.
        state.dmax = 1 << state.wbits;
        //state.dmax = 1 << len;

        //Tracev((stderr, "inflate:   zlib header ok\n"));
        strm.adler = state.check = 1/*adler32(0L, Z_NULL, 0)*/;
        state.mode = hold & 0x200 ? DICTID : TYPE;
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        break;
      case FLAGS:
        //=== NEEDBITS(16); */
        while (bits < 16) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        state.flags = hold;
        if ((state.flags & 0xff) !== Z_DEFLATED) {
          strm.msg = 'unknown compression method';
          state.mode = BAD;
          break;
        }
        if (state.flags & 0xe000) {
          strm.msg = 'unknown header flags set';
          state.mode = BAD;
          break;
        }
        if (state.head) {
          state.head.text = ((hold >> 8) & 1);
        }
        if (state.flags & 0x0200) {
          //=== CRC2(state.check, hold);
          hbuf[0] = hold & 0xff;
          hbuf[1] = (hold >>> 8) & 0xff;
          state.check = crc32_1(state.check, hbuf, 2, 0);
          //===//
        }
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        state.mode = TIME;
        /* falls through */
      case TIME:
        //=== NEEDBITS(32); */
        while (bits < 32) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        if (state.head) {
          state.head.time = hold;
        }
        if (state.flags & 0x0200) {
          //=== CRC4(state.check, hold)
          hbuf[0] = hold & 0xff;
          hbuf[1] = (hold >>> 8) & 0xff;
          hbuf[2] = (hold >>> 16) & 0xff;
          hbuf[3] = (hold >>> 24) & 0xff;
          state.check = crc32_1(state.check, hbuf, 4, 0);
          //===
        }
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        state.mode = OS;
        /* falls through */
      case OS:
        //=== NEEDBITS(16); */
        while (bits < 16) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        if (state.head) {
          state.head.xflags = (hold & 0xff);
          state.head.os = (hold >> 8);
        }
        if (state.flags & 0x0200) {
          //=== CRC2(state.check, hold);
          hbuf[0] = hold & 0xff;
          hbuf[1] = (hold >>> 8) & 0xff;
          state.check = crc32_1(state.check, hbuf, 2, 0);
          //===//
        }
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        state.mode = EXLEN;
        /* falls through */
      case EXLEN:
        if (state.flags & 0x0400) {
          //=== NEEDBITS(16); */
          while (bits < 16) {
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          state.length = hold;
          if (state.head) {
            state.head.extra_len = hold;
          }
          if (state.flags & 0x0200) {
            //=== CRC2(state.check, hold);
            hbuf[0] = hold & 0xff;
            hbuf[1] = (hold >>> 8) & 0xff;
            state.check = crc32_1(state.check, hbuf, 2, 0);
            //===//
          }
          //=== INITBITS();
          hold = 0;
          bits = 0;
          //===//
        }
        else if (state.head) {
          state.head.extra = null/*Z_NULL*/;
        }
        state.mode = EXTRA;
        /* falls through */
      case EXTRA:
        if (state.flags & 0x0400) {
          copy = state.length;
          if (copy > have) { copy = have; }
          if (copy) {
            if (state.head) {
              len = state.head.extra_len - state.length;
              if (!state.head.extra) {
                // Use untyped array for more convenient processing later
                state.head.extra = new Uint8Array(state.head.extra_len);
              }
              state.head.extra.set(
                input.subarray(
                  next,
                  // extra field is limited to 65536 bytes
                  // - no need for additional size check
                  next + copy
                ),
                /*len + copy > state.head.extra_max - len ? state.head.extra_max : copy,*/
                len
              );
              //zmemcpy(state.head.extra + len, next,
              //        len + copy > state.head.extra_max ?
              //        state.head.extra_max - len : copy);
            }
            if (state.flags & 0x0200) {
              state.check = crc32_1(state.check, input, copy, next);
            }
            have -= copy;
            next += copy;
            state.length -= copy;
          }
          if (state.length) { break inf_leave; }
        }
        state.length = 0;
        state.mode = NAME;
        /* falls through */
      case NAME:
        if (state.flags & 0x0800) {
          if (have === 0) { break inf_leave; }
          copy = 0;
          do {
            // TODO: 2 or 1 bytes?
            len = input[next + copy++];
            /* use constant limit because in js we should not preallocate memory */
            if (state.head && len &&
                (state.length < 65536 /*state.head.name_max*/)) {
              state.head.name += String.fromCharCode(len);
            }
          } while (len && copy < have);

          if (state.flags & 0x0200) {
            state.check = crc32_1(state.check, input, copy, next);
          }
          have -= copy;
          next += copy;
          if (len) { break inf_leave; }
        }
        else if (state.head) {
          state.head.name = null;
        }
        state.length = 0;
        state.mode = COMMENT;
        /* falls through */
      case COMMENT:
        if (state.flags & 0x1000) {
          if (have === 0) { break inf_leave; }
          copy = 0;
          do {
            len = input[next + copy++];
            /* use constant limit because in js we should not preallocate memory */
            if (state.head && len &&
                (state.length < 65536 /*state.head.comm_max*/)) {
              state.head.comment += String.fromCharCode(len);
            }
          } while (len && copy < have);
          if (state.flags & 0x0200) {
            state.check = crc32_1(state.check, input, copy, next);
          }
          have -= copy;
          next += copy;
          if (len) { break inf_leave; }
        }
        else if (state.head) {
          state.head.comment = null;
        }
        state.mode = HCRC;
        /* falls through */
      case HCRC:
        if (state.flags & 0x0200) {
          //=== NEEDBITS(16); */
          while (bits < 16) {
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          if (hold !== (state.check & 0xffff)) {
            strm.msg = 'header crc mismatch';
            state.mode = BAD;
            break;
          }
          //=== INITBITS();
          hold = 0;
          bits = 0;
          //===//
        }
        if (state.head) {
          state.head.hcrc = ((state.flags >> 9) & 1);
          state.head.done = true;
        }
        strm.adler = state.check = 0;
        state.mode = TYPE;
        break;
      case DICTID:
        //=== NEEDBITS(32); */
        while (bits < 32) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        strm.adler = state.check = zswap32(hold);
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        state.mode = DICT;
        /* falls through */
      case DICT:
        if (state.havedict === 0) {
          //--- RESTORE() ---
          strm.next_out = put;
          strm.avail_out = left;
          strm.next_in = next;
          strm.avail_in = have;
          state.hold = hold;
          state.bits = bits;
          //---
          return Z_NEED_DICT$1;
        }
        strm.adler = state.check = 1/*adler32(0L, Z_NULL, 0)*/;
        state.mode = TYPE;
        /* falls through */
      case TYPE:
        if (flush === Z_BLOCK || flush === Z_TREES) { break inf_leave; }
        /* falls through */
      case TYPEDO:
        if (state.last) {
          //--- BYTEBITS() ---//
          hold >>>= bits & 7;
          bits -= bits & 7;
          //---//
          state.mode = CHECK;
          break;
        }
        //=== NEEDBITS(3); */
        while (bits < 3) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        state.last = (hold & 0x01)/*BITS(1)*/;
        //--- DROPBITS(1) ---//
        hold >>>= 1;
        bits -= 1;
        //---//

        switch ((hold & 0x03)/*BITS(2)*/) {
          case 0:                             /* stored block */
            //Tracev((stderr, "inflate:     stored block%s\n",
            //        state.last ? " (last)" : ""));
            state.mode = STORED;
            break;
          case 1:                             /* fixed block */
            fixedtables(state);
            //Tracev((stderr, "inflate:     fixed codes block%s\n",
            //        state.last ? " (last)" : ""));
            state.mode = LEN_;             /* decode codes */
            if (flush === Z_TREES) {
              //--- DROPBITS(2) ---//
              hold >>>= 2;
              bits -= 2;
              //---//
              break inf_leave;
            }
            break;
          case 2:                             /* dynamic block */
            //Tracev((stderr, "inflate:     dynamic codes block%s\n",
            //        state.last ? " (last)" : ""));
            state.mode = TABLE;
            break;
          case 3:
            strm.msg = 'invalid block type';
            state.mode = BAD;
        }
        //--- DROPBITS(2) ---//
        hold >>>= 2;
        bits -= 2;
        //---//
        break;
      case STORED:
        //--- BYTEBITS() ---// /* go to byte boundary */
        hold >>>= bits & 7;
        bits -= bits & 7;
        //---//
        //=== NEEDBITS(32); */
        while (bits < 32) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        if ((hold & 0xffff) !== ((hold >>> 16) ^ 0xffff)) {
          strm.msg = 'invalid stored block lengths';
          state.mode = BAD;
          break;
        }
        state.length = hold & 0xffff;
        //Tracev((stderr, "inflate:       stored length %u\n",
        //        state.length));
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        state.mode = COPY_;
        if (flush === Z_TREES) { break inf_leave; }
        /* falls through */
      case COPY_:
        state.mode = COPY;
        /* falls through */
      case COPY:
        copy = state.length;
        if (copy) {
          if (copy > have) { copy = have; }
          if (copy > left) { copy = left; }
          if (copy === 0) { break inf_leave; }
          //--- zmemcpy(put, next, copy); ---
          output.set(input.subarray(next, next + copy), put);
          //---//
          have -= copy;
          next += copy;
          left -= copy;
          put += copy;
          state.length -= copy;
          break;
        }
        //Tracev((stderr, "inflate:       stored end\n"));
        state.mode = TYPE;
        break;
      case TABLE:
        //=== NEEDBITS(14); */
        while (bits < 14) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        state.nlen = (hold & 0x1f)/*BITS(5)*/ + 257;
        //--- DROPBITS(5) ---//
        hold >>>= 5;
        bits -= 5;
        //---//
        state.ndist = (hold & 0x1f)/*BITS(5)*/ + 1;
        //--- DROPBITS(5) ---//
        hold >>>= 5;
        bits -= 5;
        //---//
        state.ncode = (hold & 0x0f)/*BITS(4)*/ + 4;
        //--- DROPBITS(4) ---//
        hold >>>= 4;
        bits -= 4;
        //---//
//#ifndef PKZIP_BUG_WORKAROUND
        if (state.nlen > 286 || state.ndist > 30) {
          strm.msg = 'too many length or distance symbols';
          state.mode = BAD;
          break;
        }
//#endif
        //Tracev((stderr, "inflate:       table sizes ok\n"));
        state.have = 0;
        state.mode = LENLENS;
        /* falls through */
      case LENLENS:
        while (state.have < state.ncode) {
          //=== NEEDBITS(3);
          while (bits < 3) {
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          state.lens[order[state.have++]] = (hold & 0x07);//BITS(3);
          //--- DROPBITS(3) ---//
          hold >>>= 3;
          bits -= 3;
          //---//
        }
        while (state.have < 19) {
          state.lens[order[state.have++]] = 0;
        }
        // We have separate tables & no pointers. 2 commented lines below not needed.
        //state.next = state.codes;
        //state.lencode = state.next;
        // Switch to use dynamic table
        state.lencode = state.lendyn;
        state.lenbits = 7;

        opts = { bits: state.lenbits };
        ret = inftrees(CODES, state.lens, 0, 19, state.lencode, 0, state.work, opts);
        state.lenbits = opts.bits;

        if (ret) {
          strm.msg = 'invalid code lengths set';
          state.mode = BAD;
          break;
        }
        //Tracev((stderr, "inflate:       code lengths ok\n"));
        state.have = 0;
        state.mode = CODELENS;
        /* falls through */
      case CODELENS:
        while (state.have < state.nlen + state.ndist) {
          for (;;) {
            here = state.lencode[hold & ((1 << state.lenbits) - 1)];/*BITS(state.lenbits)*/
            here_bits = here >>> 24;
            here_op = (here >>> 16) & 0xff;
            here_val = here & 0xffff;

            if ((here_bits) <= bits) { break; }
            //--- PULLBYTE() ---//
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
            //---//
          }
          if (here_val < 16) {
            //--- DROPBITS(here.bits) ---//
            hold >>>= here_bits;
            bits -= here_bits;
            //---//
            state.lens[state.have++] = here_val;
          }
          else {
            if (here_val === 16) {
              //=== NEEDBITS(here.bits + 2);
              n = here_bits + 2;
              while (bits < n) {
                if (have === 0) { break inf_leave; }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              //===//
              //--- DROPBITS(here.bits) ---//
              hold >>>= here_bits;
              bits -= here_bits;
              //---//
              if (state.have === 0) {
                strm.msg = 'invalid bit length repeat';
                state.mode = BAD;
                break;
              }
              len = state.lens[state.have - 1];
              copy = 3 + (hold & 0x03);//BITS(2);
              //--- DROPBITS(2) ---//
              hold >>>= 2;
              bits -= 2;
              //---//
            }
            else if (here_val === 17) {
              //=== NEEDBITS(here.bits + 3);
              n = here_bits + 3;
              while (bits < n) {
                if (have === 0) { break inf_leave; }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              //===//
              //--- DROPBITS(here.bits) ---//
              hold >>>= here_bits;
              bits -= here_bits;
              //---//
              len = 0;
              copy = 3 + (hold & 0x07);//BITS(3);
              //--- DROPBITS(3) ---//
              hold >>>= 3;
              bits -= 3;
              //---//
            }
            else {
              //=== NEEDBITS(here.bits + 7);
              n = here_bits + 7;
              while (bits < n) {
                if (have === 0) { break inf_leave; }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              //===//
              //--- DROPBITS(here.bits) ---//
              hold >>>= here_bits;
              bits -= here_bits;
              //---//
              len = 0;
              copy = 11 + (hold & 0x7f);//BITS(7);
              //--- DROPBITS(7) ---//
              hold >>>= 7;
              bits -= 7;
              //---//
            }
            if (state.have + copy > state.nlen + state.ndist) {
              strm.msg = 'invalid bit length repeat';
              state.mode = BAD;
              break;
            }
            while (copy--) {
              state.lens[state.have++] = len;
            }
          }
        }

        /* handle error breaks in while */
        if (state.mode === BAD) { break; }

        /* check for end-of-block code (better have one) */
        if (state.lens[256] === 0) {
          strm.msg = 'invalid code -- missing end-of-block';
          state.mode = BAD;
          break;
        }

        /* build code tables -- note: do not change the lenbits or distbits
           values here (9 and 6) without reading the comments in inftrees.h
           concerning the ENOUGH constants, which depend on those values */
        state.lenbits = 9;

        opts = { bits: state.lenbits };
        ret = inftrees(LENS, state.lens, 0, state.nlen, state.lencode, 0, state.work, opts);
        // We have separate tables & no pointers. 2 commented lines below not needed.
        // state.next_index = opts.table_index;
        state.lenbits = opts.bits;
        // state.lencode = state.next;

        if (ret) {
          strm.msg = 'invalid literal/lengths set';
          state.mode = BAD;
          break;
        }

        state.distbits = 6;
        //state.distcode.copy(state.codes);
        // Switch to use dynamic table
        state.distcode = state.distdyn;
        opts = { bits: state.distbits };
        ret = inftrees(DISTS, state.lens, state.nlen, state.ndist, state.distcode, 0, state.work, opts);
        // We have separate tables & no pointers. 2 commented lines below not needed.
        // state.next_index = opts.table_index;
        state.distbits = opts.bits;
        // state.distcode = state.next;

        if (ret) {
          strm.msg = 'invalid distances set';
          state.mode = BAD;
          break;
        }
        //Tracev((stderr, 'inflate:       codes ok\n'));
        state.mode = LEN_;
        if (flush === Z_TREES) { break inf_leave; }
        /* falls through */
      case LEN_:
        state.mode = LEN;
        /* falls through */
      case LEN:
        if (have >= 6 && left >= 258) {
          //--- RESTORE() ---
          strm.next_out = put;
          strm.avail_out = left;
          strm.next_in = next;
          strm.avail_in = have;
          state.hold = hold;
          state.bits = bits;
          //---
          inffast(strm, _out);
          //--- LOAD() ---
          put = strm.next_out;
          output = strm.output;
          left = strm.avail_out;
          next = strm.next_in;
          input = strm.input;
          have = strm.avail_in;
          hold = state.hold;
          bits = state.bits;
          //---

          if (state.mode === TYPE) {
            state.back = -1;
          }
          break;
        }
        state.back = 0;
        for (;;) {
          here = state.lencode[hold & ((1 << state.lenbits) - 1)];  /*BITS(state.lenbits)*/
          here_bits = here >>> 24;
          here_op = (here >>> 16) & 0xff;
          here_val = here & 0xffff;

          if (here_bits <= bits) { break; }
          //--- PULLBYTE() ---//
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
          //---//
        }
        if (here_op && (here_op & 0xf0) === 0) {
          last_bits = here_bits;
          last_op = here_op;
          last_val = here_val;
          for (;;) {
            here = state.lencode[last_val +
                    ((hold & ((1 << (last_bits + last_op)) - 1))/*BITS(last.bits + last.op)*/ >> last_bits)];
            here_bits = here >>> 24;
            here_op = (here >>> 16) & 0xff;
            here_val = here & 0xffff;

            if ((last_bits + here_bits) <= bits) { break; }
            //--- PULLBYTE() ---//
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
            //---//
          }
          //--- DROPBITS(last.bits) ---//
          hold >>>= last_bits;
          bits -= last_bits;
          //---//
          state.back += last_bits;
        }
        //--- DROPBITS(here.bits) ---//
        hold >>>= here_bits;
        bits -= here_bits;
        //---//
        state.back += here_bits;
        state.length = here_val;
        if (here_op === 0) {
          //Tracevv((stderr, here.val >= 0x20 && here.val < 0x7f ?
          //        "inflate:         literal '%c'\n" :
          //        "inflate:         literal 0x%02x\n", here.val));
          state.mode = LIT;
          break;
        }
        if (here_op & 32) {
          //Tracevv((stderr, "inflate:         end of block\n"));
          state.back = -1;
          state.mode = TYPE;
          break;
        }
        if (here_op & 64) {
          strm.msg = 'invalid literal/length code';
          state.mode = BAD;
          break;
        }
        state.extra = here_op & 15;
        state.mode = LENEXT;
        /* falls through */
      case LENEXT:
        if (state.extra) {
          //=== NEEDBITS(state.extra);
          n = state.extra;
          while (bits < n) {
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          state.length += hold & ((1 << state.extra) - 1)/*BITS(state.extra)*/;
          //--- DROPBITS(state.extra) ---//
          hold >>>= state.extra;
          bits -= state.extra;
          //---//
          state.back += state.extra;
        }
        //Tracevv((stderr, "inflate:         length %u\n", state.length));
        state.was = state.length;
        state.mode = DIST;
        /* falls through */
      case DIST:
        for (;;) {
          here = state.distcode[hold & ((1 << state.distbits) - 1)];/*BITS(state.distbits)*/
          here_bits = here >>> 24;
          here_op = (here >>> 16) & 0xff;
          here_val = here & 0xffff;

          if ((here_bits) <= bits) { break; }
          //--- PULLBYTE() ---//
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
          //---//
        }
        if ((here_op & 0xf0) === 0) {
          last_bits = here_bits;
          last_op = here_op;
          last_val = here_val;
          for (;;) {
            here = state.distcode[last_val +
                    ((hold & ((1 << (last_bits + last_op)) - 1))/*BITS(last.bits + last.op)*/ >> last_bits)];
            here_bits = here >>> 24;
            here_op = (here >>> 16) & 0xff;
            here_val = here & 0xffff;

            if ((last_bits + here_bits) <= bits) { break; }
            //--- PULLBYTE() ---//
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
            //---//
          }
          //--- DROPBITS(last.bits) ---//
          hold >>>= last_bits;
          bits -= last_bits;
          //---//
          state.back += last_bits;
        }
        //--- DROPBITS(here.bits) ---//
        hold >>>= here_bits;
        bits -= here_bits;
        //---//
        state.back += here_bits;
        if (here_op & 64) {
          strm.msg = 'invalid distance code';
          state.mode = BAD;
          break;
        }
        state.offset = here_val;
        state.extra = (here_op) & 15;
        state.mode = DISTEXT;
        /* falls through */
      case DISTEXT:
        if (state.extra) {
          //=== NEEDBITS(state.extra);
          n = state.extra;
          while (bits < n) {
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          state.offset += hold & ((1 << state.extra) - 1)/*BITS(state.extra)*/;
          //--- DROPBITS(state.extra) ---//
          hold >>>= state.extra;
          bits -= state.extra;
          //---//
          state.back += state.extra;
        }
//#ifdef INFLATE_STRICT
        if (state.offset > state.dmax) {
          strm.msg = 'invalid distance too far back';
          state.mode = BAD;
          break;
        }
//#endif
        //Tracevv((stderr, "inflate:         distance %u\n", state.offset));
        state.mode = MATCH;
        /* falls through */
      case MATCH:
        if (left === 0) { break inf_leave; }
        copy = _out - left;
        if (state.offset > copy) {         /* copy from window */
          copy = state.offset - copy;
          if (copy > state.whave) {
            if (state.sane) {
              strm.msg = 'invalid distance too far back';
              state.mode = BAD;
              break;
            }
// (!) This block is disabled in zlib defaults,
// don't enable it for binary compatibility
//#ifdef INFLATE_ALLOW_INVALID_DISTANCE_TOOFAR_ARRR
//          Trace((stderr, "inflate.c too far\n"));
//          copy -= state.whave;
//          if (copy > state.length) { copy = state.length; }
//          if (copy > left) { copy = left; }
//          left -= copy;
//          state.length -= copy;
//          do {
//            output[put++] = 0;
//          } while (--copy);
//          if (state.length === 0) { state.mode = LEN; }
//          break;
//#endif
          }
          if (copy > state.wnext) {
            copy -= state.wnext;
            from = state.wsize - copy;
          }
          else {
            from = state.wnext - copy;
          }
          if (copy > state.length) { copy = state.length; }
          from_source = state.window;
        }
        else {                              /* copy from output */
          from_source = output;
          from = put - state.offset;
          copy = state.length;
        }
        if (copy > left) { copy = left; }
        left -= copy;
        state.length -= copy;
        do {
          output[put++] = from_source[from++];
        } while (--copy);
        if (state.length === 0) { state.mode = LEN; }
        break;
      case LIT:
        if (left === 0) { break inf_leave; }
        output[put++] = state.length;
        left--;
        state.mode = LEN;
        break;
      case CHECK:
        if (state.wrap) {
          //=== NEEDBITS(32);
          while (bits < 32) {
            if (have === 0) { break inf_leave; }
            have--;
            // Use '|' instead of '+' to make sure that result is signed
            hold |= input[next++] << bits;
            bits += 8;
          }
          //===//
          _out -= left;
          strm.total_out += _out;
          state.total += _out;
          if (_out) {
            strm.adler = state.check =
                /*UPDATE(state.check, put - _out, _out);*/
                (state.flags ? crc32_1(state.check, output, _out, put - _out) : adler32_1(state.check, output, _out, put - _out));

          }
          _out = left;
          // NB: crc32 stored as signed 32-bit int, zswap32 returns signed too
          if ((state.flags ? hold : zswap32(hold)) !== state.check) {
            strm.msg = 'incorrect data check';
            state.mode = BAD;
            break;
          }
          //=== INITBITS();
          hold = 0;
          bits = 0;
          //===//
          //Tracev((stderr, "inflate:   check matches trailer\n"));
        }
        state.mode = LENGTH;
        /* falls through */
      case LENGTH:
        if (state.wrap && state.flags) {
          //=== NEEDBITS(32);
          while (bits < 32) {
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          if (hold !== (state.total & 0xffffffff)) {
            strm.msg = 'incorrect length check';
            state.mode = BAD;
            break;
          }
          //=== INITBITS();
          hold = 0;
          bits = 0;
          //===//
          //Tracev((stderr, "inflate:   length matches trailer\n"));
        }
        state.mode = DONE;
        /* falls through */
      case DONE:
        ret = Z_STREAM_END$1;
        break inf_leave;
      case BAD:
        ret = Z_DATA_ERROR$1;
        break inf_leave;
      case MEM:
        return Z_MEM_ERROR$1;
      case SYNC:
        /* falls through */
      default:
        return Z_STREAM_ERROR$1;
    }
  }

  // inf_leave <- here is real place for "goto inf_leave", emulated via "break inf_leave"

  /*
     Return from inflate(), updating the total counts and the check value.
     If there was no progress during the inflate() call, return a buffer
     error.  Call updatewindow() to create and/or update the window state.
     Note: a memory error from inflate() is non-recoverable.
   */

  //--- RESTORE() ---
  strm.next_out = put;
  strm.avail_out = left;
  strm.next_in = next;
  strm.avail_in = have;
  state.hold = hold;
  state.bits = bits;
  //---

  if (state.wsize || (_out !== strm.avail_out && state.mode < BAD &&
                      (state.mode < CHECK || flush !== Z_FINISH$1))) {
    if (updatewindow(strm, strm.output, strm.next_out, _out - strm.avail_out)) ;
  }
  _in -= strm.avail_in;
  _out -= strm.avail_out;
  strm.total_in += _in;
  strm.total_out += _out;
  state.total += _out;
  if (state.wrap && _out) {
    strm.adler = state.check = /*UPDATE(state.check, strm.next_out - _out, _out);*/
      (state.flags ? crc32_1(state.check, output, _out, strm.next_out - _out) : adler32_1(state.check, output, _out, strm.next_out - _out));
  }
  strm.data_type = state.bits + (state.last ? 64 : 0) +
                    (state.mode === TYPE ? 128 : 0) +
                    (state.mode === LEN_ || state.mode === COPY_ ? 256 : 0);
  if (((_in === 0 && _out === 0) || flush === Z_FINISH$1) && ret === Z_OK$1) {
    ret = Z_BUF_ERROR;
  }
  return ret;
};


const inflateEnd = (strm) => {

  if (!strm || !strm.state /*|| strm->zfree == (free_func)0*/) {
    return Z_STREAM_ERROR$1;
  }

  let state = strm.state;
  if (state.window) {
    state.window = null;
  }
  strm.state = null;
  return Z_OK$1;
};


const inflateGetHeader = (strm, head) => {

  /* check state */
  if (!strm || !strm.state) { return Z_STREAM_ERROR$1; }
  const state = strm.state;
  if ((state.wrap & 2) === 0) { return Z_STREAM_ERROR$1; }

  /* save header structure */
  state.head = head;
  head.done = false;
  return Z_OK$1;
};


const inflateSetDictionary = (strm, dictionary) => {
  const dictLength = dictionary.length;

  let state;
  let dictid;
  let ret;

  /* check state */
  if (!strm /* == Z_NULL */ || !strm.state /* == Z_NULL */) { return Z_STREAM_ERROR$1; }
  state = strm.state;

  if (state.wrap !== 0 && state.mode !== DICT) {
    return Z_STREAM_ERROR$1;
  }

  /* check for correct dictionary identifier */
  if (state.mode === DICT) {
    dictid = 1; /* adler32(0, null, 0)*/
    /* dictid = adler32(dictid, dictionary, dictLength); */
    dictid = adler32_1(dictid, dictionary, dictLength, 0);
    if (dictid !== state.check) {
      return Z_DATA_ERROR$1;
    }
  }
  /* copy dictionary to window using updatewindow(), which will amend the
   existing dictionary if appropriate */
  ret = updatewindow(strm, dictionary, dictLength, dictLength);
  if (ret) {
    state.mode = MEM;
    return Z_MEM_ERROR$1;
  }
  state.havedict = 1;
  // Tracev((stderr, "inflate:   dictionary set\n"));
  return Z_OK$1;
};


var inflateReset_1 = inflateReset;
var inflateReset2_1 = inflateReset2;
var inflateResetKeep_1 = inflateResetKeep;
var inflateInit_1 = inflateInit;
var inflateInit2_1 = inflateInit2;
var inflate_2$1 = inflate$2;
var inflateEnd_1 = inflateEnd;
var inflateGetHeader_1 = inflateGetHeader;
var inflateSetDictionary_1 = inflateSetDictionary;
var inflateInfo = 'pako inflate (from Nodeca project)';

/* Not implemented
module.exports.inflateCopy = inflateCopy;
module.exports.inflateGetDictionary = inflateGetDictionary;
module.exports.inflateMark = inflateMark;
module.exports.inflatePrime = inflatePrime;
module.exports.inflateSync = inflateSync;
module.exports.inflateSyncPoint = inflateSyncPoint;
module.exports.inflateUndermine = inflateUndermine;
*/

var inflate_1$2 = {
	inflateReset: inflateReset_1,
	inflateReset2: inflateReset2_1,
	inflateResetKeep: inflateResetKeep_1,
	inflateInit: inflateInit_1,
	inflateInit2: inflateInit2_1,
	inflate: inflate_2$1,
	inflateEnd: inflateEnd_1,
	inflateGetHeader: inflateGetHeader_1,
	inflateSetDictionary: inflateSetDictionary_1,
	inflateInfo: inflateInfo
};

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

function GZheader() {
  /* true if compressed data believed to be text */
  this.text       = 0;
  /* modification time */
  this.time       = 0;
  /* extra flags (not used when writing a gzip file) */
  this.xflags     = 0;
  /* operating system */
  this.os         = 0;
  /* pointer to extra field or Z_NULL if none */
  this.extra      = null;
  /* extra field length (valid if extra != Z_NULL) */
  this.extra_len  = 0; // Actually, we don't need it in JS,
                       // but leave for few code modifications

  //
  // Setup limits is not necessary because in js we should not preallocate memory
  // for inflate use constant limit in 65536 bytes
  //

  /* space at extra (only when reading header) */
  // this.extra_max  = 0;
  /* pointer to zero-terminated file name or Z_NULL */
  this.name       = '';
  /* space at name (only when reading header) */
  // this.name_max   = 0;
  /* pointer to zero-terminated comment or Z_NULL */
  this.comment    = '';
  /* space at comment (only when reading header) */
  // this.comm_max   = 0;
  /* true if there was or will be a header crc */
  this.hcrc       = 0;
  /* true when done reading gzip header (not used when writing a gzip file) */
  this.done       = false;
}

var gzheader = GZheader;

const toString = Object.prototype.toString;

/* Public constants ==========================================================*/
/* ===========================================================================*/

const {
  Z_NO_FLUSH, Z_FINISH,
  Z_OK, Z_STREAM_END, Z_NEED_DICT, Z_STREAM_ERROR, Z_DATA_ERROR, Z_MEM_ERROR
} = constants$2;

/* ===========================================================================*/


/**
 * class Inflate
 *
 * Generic JS-style wrapper for zlib calls. If you don't need
 * streaming behaviour - use more simple functions: [[inflate]]
 * and [[inflateRaw]].
 **/

/* internal
 * inflate.chunks -> Array
 *
 * Chunks of output data, if [[Inflate#onData]] not overridden.
 **/

/**
 * Inflate.result -> Uint8Array|String
 *
 * Uncompressed result, generated by default [[Inflate#onData]]
 * and [[Inflate#onEnd]] handlers. Filled after you push last chunk
 * (call [[Inflate#push]] with `Z_FINISH` / `true` param).
 **/

/**
 * Inflate.err -> Number
 *
 * Error code after inflate finished. 0 (Z_OK) on success.
 * Should be checked if broken data possible.
 **/

/**
 * Inflate.msg -> String
 *
 * Error message, if [[Inflate.err]] != 0
 **/


/**
 * new Inflate(options)
 * - options (Object): zlib inflate options.
 *
 * Creates new inflator instance with specified params. Throws exception
 * on bad params. Supported options:
 *
 * - `windowBits`
 * - `dictionary`
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information on these.
 *
 * Additional options, for internal needs:
 *
 * - `chunkSize` - size of generated data chunks (16K by default)
 * - `raw` (Boolean) - do raw inflate
 * - `to` (String) - if equal to 'string', then result will be converted
 *   from utf8 to utf16 (javascript) string. When string output requested,
 *   chunk length can differ from `chunkSize`, depending on content.
 *
 * By default, when no options set, autodetect deflate/gzip data format via
 * wrapper header.
 *
 * ##### Example:
 *
 * ```javascript
 * const pako = require('pako')
 * const chunk1 = new Uint8Array([1,2,3,4,5,6,7,8,9])
 * const chunk2 = new Uint8Array([10,11,12,13,14,15,16,17,18,19]);
 *
 * const inflate = new pako.Inflate({ level: 3});
 *
 * inflate.push(chunk1, false);
 * inflate.push(chunk2, true);  // true -> last chunk
 *
 * if (inflate.err) { throw new Error(inflate.err); }
 *
 * console.log(inflate.result);
 * ```
 **/
function Inflate$1(options) {
  this.options = common.assign({
    chunkSize: 1024 * 64,
    windowBits: 15,
    to: ''
  }, options || {});

  const opt = this.options;

  // Force window size for `raw` data, if not set directly,
  // because we have no header for autodetect.
  if (opt.raw && (opt.windowBits >= 0) && (opt.windowBits < 16)) {
    opt.windowBits = -opt.windowBits;
    if (opt.windowBits === 0) { opt.windowBits = -15; }
  }

  // If `windowBits` not defined (and mode not raw) - set autodetect flag for gzip/deflate
  if ((opt.windowBits >= 0) && (opt.windowBits < 16) &&
      !(options && options.windowBits)) {
    opt.windowBits += 32;
  }

  // Gzip header has no info about windows size, we can do autodetect only
  // for deflate. So, if window size not set, force it to max when gzip possible
  if ((opt.windowBits > 15) && (opt.windowBits < 48)) {
    // bit 3 (16) -> gzipped data
    // bit 4 (32) -> autodetect gzip/deflate
    if ((opt.windowBits & 15) === 0) {
      opt.windowBits |= 15;
    }
  }

  this.err    = 0;      // error code, if happens (0 = Z_OK)
  this.msg    = '';     // error message
  this.ended  = false;  // used to avoid multiple onEnd() calls
  this.chunks = [];     // chunks of compressed data

  this.strm   = new zstream();
  this.strm.avail_out = 0;

  let status  = inflate_1$2.inflateInit2(
    this.strm,
    opt.windowBits
  );

  if (status !== Z_OK) {
    throw new Error(messages[status]);
  }

  this.header = new gzheader();

  inflate_1$2.inflateGetHeader(this.strm, this.header);

  // Setup dictionary
  if (opt.dictionary) {
    // Convert data if needed
    if (typeof opt.dictionary === 'string') {
      opt.dictionary = strings.string2buf(opt.dictionary);
    } else if (toString.call(opt.dictionary) === '[object ArrayBuffer]') {
      opt.dictionary = new Uint8Array(opt.dictionary);
    }
    if (opt.raw) { //In raw mode we need to set the dictionary early
      status = inflate_1$2.inflateSetDictionary(this.strm, opt.dictionary);
      if (status !== Z_OK) {
        throw new Error(messages[status]);
      }
    }
  }
}

/**
 * Inflate#push(data[, flush_mode]) -> Boolean
 * - data (Uint8Array|ArrayBuffer): input data
 * - flush_mode (Number|Boolean): 0..6 for corresponding Z_NO_FLUSH..Z_TREE
 *   flush modes. See constants. Skipped or `false` means Z_NO_FLUSH,
 *   `true` means Z_FINISH.
 *
 * Sends input data to inflate pipe, generating [[Inflate#onData]] calls with
 * new output chunks. Returns `true` on success. If end of stream detected,
 * [[Inflate#onEnd]] will be called.
 *
 * `flush_mode` is not needed for normal operation, because end of stream
 * detected automatically. You may try to use it for advanced things, but
 * this functionality was not tested.
 *
 * On fail call [[Inflate#onEnd]] with error code and return false.
 *
 * ##### Example
 *
 * ```javascript
 * push(chunk, false); // push one of data chunks
 * ...
 * push(chunk, true);  // push last chunk
 * ```
 **/
Inflate$1.prototype.push = function (data, flush_mode) {
  const strm = this.strm;
  const chunkSize = this.options.chunkSize;
  const dictionary = this.options.dictionary;
  let status, _flush_mode, last_avail_out;

  if (this.ended) return false;

  if (flush_mode === ~~flush_mode) _flush_mode = flush_mode;
  else _flush_mode = flush_mode === true ? Z_FINISH : Z_NO_FLUSH;

  // Convert data if needed
  if (toString.call(data) === '[object ArrayBuffer]') {
    strm.input = new Uint8Array(data);
  } else {
    strm.input = data;
  }

  strm.next_in = 0;
  strm.avail_in = strm.input.length;

  for (;;) {
    if (strm.avail_out === 0) {
      strm.output = new Uint8Array(chunkSize);
      strm.next_out = 0;
      strm.avail_out = chunkSize;
    }

    status = inflate_1$2.inflate(strm, _flush_mode);

    if (status === Z_NEED_DICT && dictionary) {
      status = inflate_1$2.inflateSetDictionary(strm, dictionary);

      if (status === Z_OK) {
        status = inflate_1$2.inflate(strm, _flush_mode);
      } else if (status === Z_DATA_ERROR) {
        // Replace code with more verbose
        status = Z_NEED_DICT;
      }
    }

    // Skip snyc markers if more data follows and not raw mode
    while (strm.avail_in > 0 &&
           status === Z_STREAM_END &&
           strm.state.wrap > 0 &&
           data[strm.next_in] !== 0)
    {
      inflate_1$2.inflateReset(strm);
      status = inflate_1$2.inflate(strm, _flush_mode);
    }

    switch (status) {
      case Z_STREAM_ERROR:
      case Z_DATA_ERROR:
      case Z_NEED_DICT:
      case Z_MEM_ERROR:
        this.onEnd(status);
        this.ended = true;
        return false;
    }

    // Remember real `avail_out` value, because we may patch out buffer content
    // to align utf8 strings boundaries.
    last_avail_out = strm.avail_out;

    if (strm.next_out) {
      if (strm.avail_out === 0 || status === Z_STREAM_END) {

        if (this.options.to === 'string') {

          let next_out_utf8 = strings.utf8border(strm.output, strm.next_out);

          let tail = strm.next_out - next_out_utf8;
          let utf8str = strings.buf2string(strm.output, next_out_utf8);

          // move tail & realign counters
          strm.next_out = tail;
          strm.avail_out = chunkSize - tail;
          if (tail) strm.output.set(strm.output.subarray(next_out_utf8, next_out_utf8 + tail), 0);

          this.onData(utf8str);

        } else {
          this.onData(strm.output.length === strm.next_out ? strm.output : strm.output.subarray(0, strm.next_out));
        }
      }
    }

    // Must repeat iteration if out buffer is full
    if (status === Z_OK && last_avail_out === 0) continue;

    // Finalize if end of stream reached.
    if (status === Z_STREAM_END) {
      status = inflate_1$2.inflateEnd(this.strm);
      this.onEnd(status);
      this.ended = true;
      return true;
    }

    if (strm.avail_in === 0) break;
  }

  return true;
};


/**
 * Inflate#onData(chunk) -> Void
 * - chunk (Uint8Array|String): output data. When string output requested,
 *   each chunk will be string.
 *
 * By default, stores data blocks in `chunks[]` property and glue
 * those in `onEnd`. Override this handler, if you need another behaviour.
 **/
Inflate$1.prototype.onData = function (chunk) {
  this.chunks.push(chunk);
};


/**
 * Inflate#onEnd(status) -> Void
 * - status (Number): inflate status. 0 (Z_OK) on success,
 *   other if not.
 *
 * Called either after you tell inflate that the input stream is
 * complete (Z_FINISH). By default - join collected chunks,
 * free memory and fill `results` / `err` properties.
 **/
Inflate$1.prototype.onEnd = function (status) {
  // On success - join
  if (status === Z_OK) {
    if (this.options.to === 'string') {
      this.result = this.chunks.join('');
    } else {
      this.result = common.flattenChunks(this.chunks);
    }
  }
  this.chunks = [];
  this.err = status;
  this.msg = this.strm.msg;
};


/**
 * inflate(data[, options]) -> Uint8Array|String
 * - data (Uint8Array): input data to decompress.
 * - options (Object): zlib inflate options.
 *
 * Decompress `data` with inflate/ungzip and `options`. Autodetect
 * format via wrapper header by default. That's why we don't provide
 * separate `ungzip` method.
 *
 * Supported options are:
 *
 * - windowBits
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information.
 *
 * Sugar (options):
 *
 * - `raw` (Boolean) - say that we work with raw stream, if you don't wish to specify
 *   negative windowBits implicitly.
 * - `to` (String) - if equal to 'string', then result will be converted
 *   from utf8 to utf16 (javascript) string. When string output requested,
 *   chunk length can differ from `chunkSize`, depending on content.
 *
 *
 * ##### Example:
 *
 * ```javascript
 * const pako = require('pako');
 * const input = pako.deflate(new Uint8Array([1,2,3,4,5,6,7,8,9]));
 * let output;
 *
 * try {
 *   output = pako.inflate(input);
 * } catch (err) {
 *   console.log(err);
 * }
 * ```
 **/
function inflate$1(input, options) {
  const inflator = new Inflate$1(options);

  inflator.push(input);

  // That will never happens, if you don't cheat with options :)
  if (inflator.err) throw inflator.msg || messages[inflator.err];

  return inflator.result;
}


/**
 * inflateRaw(data[, options]) -> Uint8Array|String
 * - data (Uint8Array): input data to decompress.
 * - options (Object): zlib inflate options.
 *
 * The same as [[inflate]], but creates raw data, without wrapper
 * (header and adler32 crc).
 **/
function inflateRaw$1(input, options) {
  options = options || {};
  options.raw = true;
  return inflate$1(input, options);
}


/**
 * ungzip(data[, options]) -> Uint8Array|String
 * - data (Uint8Array): input data to decompress.
 * - options (Object): zlib inflate options.
 *
 * Just shortcut to [[inflate]], because it autodetects format
 * by header.content. Done for convenience.
 **/


var Inflate_1$1 = Inflate$1;
var inflate_2 = inflate$1;
var inflateRaw_1$1 = inflateRaw$1;
var ungzip$1 = inflate$1;
var constants = constants$2;

var inflate_1$1 = {
	Inflate: Inflate_1$1,
	inflate: inflate_2,
	inflateRaw: inflateRaw_1$1,
	ungzip: ungzip$1,
	constants: constants
};

const { Deflate, deflate, deflateRaw, gzip } = deflate_1$1;

const { Inflate, inflate, inflateRaw, ungzip } = inflate_1$1;



var Deflate_1 = Deflate;
var deflate_1 = deflate;
var deflateRaw_1 = deflateRaw;
var gzip_1 = gzip;
var Inflate_1 = Inflate;
var inflate_1 = inflate;
var inflateRaw_1 = inflateRaw;
var ungzip_1 = ungzip;
var constants_1 = constants$2;

var pako = {
	Deflate: Deflate_1,
	deflate: deflate_1,
	deflateRaw: deflateRaw_1,
	gzip: gzip_1,
	Inflate: Inflate_1,
	inflate: inflate_1,
	inflateRaw: inflateRaw_1,
	ungzip: ungzip_1,
	constants: constants_1
};




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var deepslate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! deepslate */ "./node_modules/deepslate/dist/deepslate.esm.js");
/* harmony import */ var _BuilderData_BiomeBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BuilderData/BiomeBuilder */ "./src/BuilderData/BiomeBuilder.ts");
/* harmony import */ var _Vanilla_VanillaBiomes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Vanilla/VanillaBiomes */ "./src/Vanilla/VanillaBiomes.ts");
/* harmony import */ var _UI_UI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UI/UI */ "./src/UI/UI.ts");




var close_elements = document.getElementsByClassName("closable_vertical");
var _loop_1 = function (i) {
    close_elements[i].getElementsByClassName("button")[0].onclick = function (evt) {
        close_elements[i].classList.toggle("closed");
    };
};
for (var i = 0; i < close_elements.length; i++) {
    _loop_1(i);
}
var continentalnesses = [
    ['Mushroom Field', new deepslate__WEBPACK_IMPORTED_MODULE_0__.Climate.Param(-1.2, -1.05)],
    ['Deep Ocean', new deepslate__WEBPACK_IMPORTED_MODULE_0__.Climate.Param(-1.05, -0.455)],
    ['Ocean', new deepslate__WEBPACK_IMPORTED_MODULE_0__.Climate.Param(-0.455, -0.19)],
    ['Coast', new deepslate__WEBPACK_IMPORTED_MODULE_0__.Climate.Param(-0.19, -0.11)],
    ['Near Inland', new deepslate__WEBPACK_IMPORTED_MODULE_0__.Climate.Param(-0.11, 0.03)],
    ['Mid Inland', new deepslate__WEBPACK_IMPORTED_MODULE_0__.Climate.Param(0.03, 0.3)],
    ['Far Inland', new deepslate__WEBPACK_IMPORTED_MODULE_0__.Climate.Param(0.3, 1.0)]
];
var erosions = [
    ['0', new deepslate__WEBPACK_IMPORTED_MODULE_0__.Climate.Param(-1.0, -0.78)],
    ['1', new deepslate__WEBPACK_IMPORTED_MODULE_0__.Climate.Param(-0.78, -0.375)],
    ['2', new deepslate__WEBPACK_IMPORTED_MODULE_0__.Climate.Param(-0.375, -0.2225)],
    ['3', new deepslate__WEBPACK_IMPORTED_MODULE_0__.Climate.Param(-0.2225, 0.05)],
    ['4', new deepslate__WEBPACK_IMPORTED_MODULE_0__.Climate.Param(0.05, 0.45)],
    ['5', new deepslate__WEBPACK_IMPORTED_MODULE_0__.Climate.Param(0.45, 0.55)],
    ['6', new deepslate__WEBPACK_IMPORTED_MODULE_0__.Climate.Param(0.55, 1.0)],
];
var weirdnesses = [
    ['Mid Slice A2', new deepslate__WEBPACK_IMPORTED_MODULE_0__.Climate.Param(-1.0, -0.93333334)],
    ['High Slice A2', new deepslate__WEBPACK_IMPORTED_MODULE_0__.Climate.Param(-0.93333334, -0.7666667)],
    ['Peaks A', new deepslate__WEBPACK_IMPORTED_MODULE_0__.Climate.Param(-0.7666667, -0.56666666)],
    ['High Slice A', new deepslate__WEBPACK_IMPORTED_MODULE_0__.Climate.Param(-0.56666666, -0.4)],
    ['Mid Slice A', new deepslate__WEBPACK_IMPORTED_MODULE_0__.Climate.Param(-0.4, -0.26666668)],
    ['Low Slice A', new deepslate__WEBPACK_IMPORTED_MODULE_0__.Climate.Param(-0.26666668, -0.05)],
    ['Valley', new deepslate__WEBPACK_IMPORTED_MODULE_0__.Climate.Param(-0.05, 0.05)],
    ['Low Slice B', new deepslate__WEBPACK_IMPORTED_MODULE_0__.Climate.Param(0.05, 0.26666668)],
    ['Mid Slice B', new deepslate__WEBPACK_IMPORTED_MODULE_0__.Climate.Param(0.26666668, 0.4)],
    ['High Slice B', new deepslate__WEBPACK_IMPORTED_MODULE_0__.Climate.Param(0.4, 0.56666666)],
    ['Peaks B', new deepslate__WEBPACK_IMPORTED_MODULE_0__.Climate.Param(0.56666666, 0.7666667)],
    ['High Slice B2', new deepslate__WEBPACK_IMPORTED_MODULE_0__.Climate.Param(0.7666667, 0.93333334)],
    ['Mid Slice B2', new deepslate__WEBPACK_IMPORTED_MODULE_0__.Climate.Param(0.93333334, 1.0)],
];
var temperatures = [
    ['forzen', new deepslate__WEBPACK_IMPORTED_MODULE_0__.Climate.Param(-1.0, -0.45)],
    ['cold', new deepslate__WEBPACK_IMPORTED_MODULE_0__.Climate.Param(-0.45, -0.15)],
    ['normal', new deepslate__WEBPACK_IMPORTED_MODULE_0__.Climate.Param(-0.15, 0.2)],
    ['warm', new deepslate__WEBPACK_IMPORTED_MODULE_0__.Climate.Param(0.2, 0.55)],
    ['hot', new deepslate__WEBPACK_IMPORTED_MODULE_0__.Climate.Param(0.55, 1.0)],
];
var humidities = [
    ['very dry', new deepslate__WEBPACK_IMPORTED_MODULE_0__.Climate.Param(-1.0, -0.3)],
    ['dry', new deepslate__WEBPACK_IMPORTED_MODULE_0__.Climate.Param(-0.3, -0.1)],
    ['normal', new deepslate__WEBPACK_IMPORTED_MODULE_0__.Climate.Param(-0.1, 0.1)],
    ['humid', new deepslate__WEBPACK_IMPORTED_MODULE_0__.Climate.Param(0.1, 0.3)],
    ['very humid', new deepslate__WEBPACK_IMPORTED_MODULE_0__.Climate.Param(0.3, 1.0)],
];
var builder = new _BuilderData_BiomeBuilder__WEBPACK_IMPORTED_MODULE_1__.BiomeBuilder(continentalnesses, erosions, weirdnesses, temperatures, humidities);
_Vanilla_VanillaBiomes__WEBPACK_IMPORTED_MODULE_2__.VanillaBiomes.registerVanillaBiomes(builder);
_UI_UI__WEBPACK_IMPORTED_MODULE_3__.UI.create(builder);
//const valley_slice = Slice.create(builder, "Valley", 6)
//valley_slice.set(3, 2, "River")
//valley_slice.set(3, 3, "Middle")
//const slice_grid = SliceGrid.createSliceGridHTML(builder, valley_slice)
//document.getElementById("sliceEditor").appendChild(slice_grid)

})();

/******/ })()
;