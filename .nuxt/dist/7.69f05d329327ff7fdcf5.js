webpackJsonp([7],{pEZm:function(x,F){x.exports='\x3c!--TAG javascript /TAG--\x3e\n\x3c!--DESC 关于setTimeout的一些理解，老鸟可绕道 /DESC--\x3e\n<h1 id="settimeout-">setTimeout&#x7684;&#x90A3;&#x4E9B;&#x4E8B;&#x513F;</h1>\n<blockquote>\n<p>&#x5982;&#x679C;&#x61C2;setTimeout&#xFF0C;&#x53EF;&#x4EE5;&#x76F4;&#x63A5;&#x770B;&#x7B2C;3&#x8282;&#xFF0C;&#x524D;&#x9762;&#x4E24;&#x8282;&#x4E5F;&#x53EF;&#x4EE5;&#x5F53;&#x6BB5;&#x5B50;&#x770B;&#x4E00;&#x4E0B;&#x3002;\n&#x5982;&#x679C;&#x4E0D;&#x662F;&#x5F88;&#x61C2;setTimeout&#xFF0C;&#x770B;&#x4E0B;1&#xFF0C;2&#x4E24;&#x8282;&#x5E94;&#x8BE5;&#x4F1A;&#x6709;&#x4E00;&#x4E9B;&#x6536;&#x83B7;&#x3002;</p>\n</blockquote>\n<h3 id="1-javascript-">1 JavaScript&#x8FD0;&#x884C;&#x73AF;&#x5883;</h3>\n<p>&#x4E4B;&#x524D;<a href="http://imweb.io/topic/56592b8a823633e31839fc01">&#x5173;&#x4E8E;service worker&#x4ECB;&#x7ECD;&#x7684;&#x6587;&#x7AE0;</a>&#x4E2D;&#xFF0C;&#x8FD9;&#x6837;&#x63CF;&#x8FF0;&#x4E86;&#x6D4F;&#x89C8;&#x5668;&#x73AF;&#x5883;&#x4E0B;Javascript&#x73AF;&#x5883;&#xFF1A;&quot;<em>&#x6BCF;&#x4E2A;&#x9875;&#x9762;&#x7684;javascript&#x8FD0;&#x884C;&#x4E3B;&#x7EBF;&#x7A0B;&#x90FD;&#x662F;&#x4E00;&#x4E2A;Boss</em>&quot;&#x3001;&quot;<em>Boss&#x5F88;&#x5389;&#x5BB3;&#xFF0C;&#x5728;&#x9875;&#x9762;&#x4E0A;&#x6307;&#x70B9;&#x6C5F;&#x5C71;&#xFF0C;&#x547C;&#x98CE;&#x5524;&#x96E8;&#x3002;&#x4F46;&#x4ED6;&#x6709;&#x4E2A;&#x5C40;&#x9650;&#xFF1A;&#x540C;&#x4E00;&#x65F6;&#x523B;&#x53EA;&#x505A;&#x4E00;&#x4EF6;&#x4E8B;&#xFF08;&#x5355;&#x7EBF;&#x7A0B;&#xFF09;</em>&quot;&#x3002;</p>\n<p>&#x4EE5;&#x4E0A;&#x4F53;&#x73B0;&#x4E86;Javascript&#x5728;&#x6D4F;&#x89C8;&#x5668;&#x8FD0;&#x884C;&#x73AF;&#x5883;&#x4E2D;&#x7684;&#x5C40;&#x9650;&#x6027;&#xFF0C;&#x5355;&#x7EBF;&#x7A0B;&#x3002;&#x5B9E;&#x9645;&#x4E0A;&#xFF0C;&#x4E0D;&#x4EC5;&#x662F;&#x5728;&#x6D4F;&#x89C8;&#x5668;&#x73AF;&#x5883;&#x4E2D;&#xFF0C;&#x5728;Nodejs&#x73AF;&#x5883;&#x4E2D;&#x7684;javascript&#x4E5F;&#x662F;&#x5355;&#x7EBF;&#x7A0B;&#x7684;&#x3002;&#x5728;&#x4E0D;&#x4F7F;&#x7528;&#x5176;&#x5B83;&#x65B0;&#x5458;&#x5DE5;&#xFF08;webworker&#x7B49;&#xFF09;&#x7684;&#x60C5;&#x51B5;&#x4E0B;&#xFF0C;JS&#x662F;&#x5982;&#x4F55;&#x5728;&#x5355;&#x7EBF;&#x7A0B;&#x4E0A;&#x5904;&#x7406;&#x590D;&#x6742;&#x7684;&#x64CD;&#x4F5C;&#x548C;&#x903B;&#x8F91;&#xFF0C;&#x4EE5;&#x81F3;&#x4E8E;&#x5728;&#x7528;&#x6237;&#x770B;&#x6765;&#x53EF;&#x4EE5;&#x540C;&#x65F6;&#x54CD;&#x5E94;&#x4E0D;&#x540C;&#x7684;&#x64CD;&#x4F5C;&#x7684;&#x5462;&#xFF1F;</p>\n<p>&#x6211;&#x4EEC;&#x8FD8;&#x662F;&#x4EE5;Boss&#x6765;&#x79F0;&#x547C;javascript&#x7684;&#x4E3B;&#x7EBF;&#x7A0B;&#x5427;&#x3002;Boss&#x4E3A;&#x4E86;&#x66F4;&#x591A;&#x66F4;&#x5FEB;&#x5730;&#x5904;&#x7406;&#x7528;&#x6237;&#x7684;&#x9700;&#x6C42;&#xFF0C;&#x4F1A;&#x4E0D;&#x505C;&#x5730;&#x63A5;&#x6536;&#x4EFB;&#x52A1;&#x6765;&#x6267;&#x884C;&#x3002;&#x4E3A;&#x4E86;&#x8FDB;&#x4E00;&#x6B65;&#x63D0;&#x4EA4;&#x6548;&#x7387;&#xFF0C;&#x4ED6;&#x4F18;&#x5148;&#x6267;&#x884C;&#x6700;&#x7D27;&#x6025;&#x7684;&#x4EFB;&#x52A1;&#xFF08;&#x5373;&#x523B;&#x8981;&#x6267;&#x884C;&#xFF09;&#xFF0C;&#x5982;&#x679C;&#x4F60;&#x8981;&#x548C;&#x4ED6;&#x8BF4;&quot;&#x7B49;&#x4E0B;&#xFF08;3&#x79D2;&#x540E; /  &#x5982;&#x679C;&#x6709;&#x6211;&#x70B9;&#x4E86;&#x6309;&#x94AE; / &#x5982;&#x679C;&#x6536;&#x5230;&#x4E86;&#x670D;&#x52A1;&#x5668;&#x7684;&#x54CD;&#x5E94;&#xFF09;&#x5E2E;&#x6211;&#x5728;&#x63A7;&#x5236;&#x53F0;&#x6253;&#x4E00;&#x4E2A;log&#x5427;&#x3002;&quot;&#xFF0C;BOSS&#x4E0D;&#x4F1A;&#x4E13;&#x95E8;&#x7B49;&#x7740;&#x53BB;&#x6267;&#x884C;&#x4F60;&#x7684;&#x9700;&#x6C42;&#xFF0C;&#x800C;&#x662F;&#x9ED8;&#x9ED8;&#x5730;&#x628A;&#x4F60;&#x8FD9;&#x4E2A;&quot;&#x4F2A;&#x9700;&#x6C42;&quot;&#x8BB0;&#x5728;&#x4E00;&#x4E2A;&quot;&#x5C0F;&#x672C;&#x672C;&quot;&#x4E0A;&#xFF0C;&#x7136;&#x540E;&#x62CD;&#x62CD;&#x80F8;&#x812F;&#x548C;&#x4F60;&#x8BF4;&#xFF1A;&quot;&#x6211;&#x4FDD;&#x8BC1;(I promise!)&quot;&#xFF0C;&#x63A5;&#x7740;&#x7EE7;&#x7EED;&#x505A;&#x624B;&#x5934;&#x4E0A;&#x7684;&#x4E8B;&#xFF0C;&#x7B49;BOSS&#x624B;&#x5934;&#x4E0A;&#x4E8B;&#x60C5;&#x505A;&#x5B8C;&#x4E86;&#xFF0C;&#x4F1A;&#x4ECE;&#x5C0F;&#x672C;&#x672C;&#x4E0A;&#x9009;&#x62E9;<strong>&#x6700;&#x65E9;&#x8BB0;&#x5F55;&#x7684;&#x6CA1;&#x88AB;&#x6267;&#x884C;</strong>&#x7684;&#x4EFB;&#x52A1;&#x6765;&#x6267;&#x884C;&#x3002;</p>\n<p>BOSS&#x80FD;&#x529B;&#x548C;&#x65F6;&#x95F4;&#x6709;&#x9650;&#xFF0C;&#x80FD;&#x505A;&#x7684;&#x53EA;&#x6709;&#x8FD9;&#x4E48;&#x591A;&#x4E86;&#x3002;&#x4ED6;Promise&#x4F1A;&#x5E2E;&#x4F60;&#x505A;&#x7684;&#x4EFB;&#x52A1;&#x80AF;&#x5B9A;&#x4F1A;&#x505A;&#xFF08;&#x53EA;&#x8981;&#x4ED6;&#x6CA1;&#x6709;&#x731D;&#x6B7B;&#x3002;&#x3002;&#xFF09;&#xFF0C;&#x4F46;&#x65F6;&#x95F4;&#x4E0A;&#x53EF;&#x80FD;&#x5E76;&#x4E0D;&#x4E00;&#x5B9A;&#x4E25;&#x683C;&#x7B26;&#x5408;&#x4F60;&#x7684;&#x8981;&#x6C42;&#xFF0C;&#x6BD5;&#x7ADF;&#x5C0F;&#x672C;&#x672C;&#x4E0A;&#x53EF;&#x80FD;&#x4E0D;&#x4EC5;&#x53EA;&#x6709;&#x4E00;&#x6761;&#x4EFB;&#x52A1;&#x3002;</p>\n<blockquote>\n<p>&#x60F3;&#x4E25;&#x8083;&#x4E86;&#x89E3;JavaScript&#x8FD0;&#x884C;&#x73AF;&#x5883;&#x7684;&#x540C;&#x5B66;&#x53EF;&#x4EE5;&#x770B;&#x4E00;&#x4E0B;<a href="http://www.ruanyifeng.com/blog/2014/10/event-loop.html">&#x300A;JavaScript &#x8FD0;&#x884C;&#x673A;&#x5236;&#x8BE6;&#x89E3;&#xFF1A;&#x518D;&#x8C08;Event Loop&#x300B;</a></p>\n</blockquote>\n<h3 id="2-settimeout">2 &#x7406;&#x89E3;setTimeout</h3>\n<p>&#x54B3;&#x54B3;&#x3002;&#x3002;&#x662F;&#x65F6;&#x5019;&#x4E25;&#x8083;&#x4E00;&#x4E0B;&#x4E86;&#xFF0C;&#x6211;&#x4EEC;&#x6539;&#x4E00;&#x4E0B;&#x4EE5;&#x4E0A;&#x7684;&#x79F0;&#x547C;&#x65B9;&#x5F0F;&#xFF1A;</p>\n<ul>\n<li>JS&#x4E3B;&#x7EBF;&#x7A0B; =&gt; BOSS</li>\n<li>&#x540C;&#x6B65;&#x4EFB;&#x52A1; =&gt; BOSS&#x624B;&#x5934;&#x4E0A;&#x6B63;&#x5728;&#x505A;&#x7684;&#x4EFB;&#x52A1;</li>\n<li>&#x5F02;&#x6B65;&#x4EFB;&#x52A1;&#xFF08;&#x961F;&#x5217;&#xFF09; =&gt; BOSS&#x7684;&#x5C0F;&#x672C;&#x672C;&#x4E0A;&#x7684;&#x4EFB;&#x52A1;</li>\n</ul>\n<p>setTimeout&#x8FD9;&#x4E2A;&#x65B9;&#x6CD5;&#x76F8;&#x4FE1;&#x5F88;&#x591A;&#x521D;&#x5B66;&#x8005;&#x90FD;&#x6709;&#x8FC7;&#x8BEF;&#x89E3;&#xFF1A;&#x8BA9;JS&#x4ECE;&#x73B0;&#x5728;&#x5F00;&#x59CB;&#xFF0C;&#x7ECF;&#x8FC7;&#x6307;&#x5B9A;&#x7684;&#x65F6;&#x95F4;&#x540E;&#xFF0C;&#x6267;&#x884C;&#x76F8;&#x5E94;&#x7684;&#x51FD;&#x6570;&#x3002;</p>\n<p>&#x4ECE;&#x65B9;&#x6CD5;&#x540D;&#x548C;&#x5927;&#x90E8;&#x5206;&#x73B0;&#x8C61;&#x6765;&#x770B;&#xFF0C;&#x5F88;&#x5BB9;&#x6613;&#x4EA7;&#x751F;&#x4EE5;&#x4E0A;&#x7684;&#x8BEF;&#x89E3;&#x3002;&#x5728;&#x6211;&#x4EEC;&#x7406;&#x89E3;&#x4E86;JS&#x4E3B;&#x7EBF;&#x7A0B;&#x7684;&#x7279;&#x70B9;&#x540E;&#xFF0C;&#x77E5;&#x9053;&#x4E86;&#x5B83;&#x4F1A;&#x4F18;&#x5148;&#x5B8C;&#x6210;&#x540C;&#x6B65;&#x4EFB;&#x52A1;&#xFF0C;&#x5728;&#x540C;&#x6B65;&#x4EFB;&#x52A1;&#x6267;&#x884C;&#x8FC7;&#x7A0B;&#x4E2D;&#xFF0C;&#x4E0D;&#x4F1A;&#x6267;&#x884C;&#x5176;&#x5B83;&#x4EFB;&#x52A1;&#x3002;</p>\n<p>&#x5B9E;&#x9645;&#x4E0A;&#xFF0C;setTimeout&#x505A;&#x7684;&#x4E8B;&#x60C5;&#x662F;&#xFF1A;<strong>&#x5728;&#x6307;&#x5B9A;delay&#x65F6;&#x95F4;&#x540E;&#xFF0C;&#x5C06;&#x6307;&#x5B9A;&#x65B9;&#x6CD5;&#x4F5C;&#x4E3A;&#x5F02;&#x6B65;&#x4EFB;&#x52A1;&#x6DFB;&#x52A0;&#x5230;&#x5F02;&#x6B65;&#x4EFB;&#x52A1;&#x961F;&#x5217;&#x4E2D;</strong>&#x3002;</p>\n<p>&#x6240;&#x4EE5;&#xFF0C;&#x5982;&#x679C;setTimeout&#x7684;&#x5B9A;&#x65F6;&#x5230;&#x4E86;&#x6267;&#x884C;&#x65F6;&#x95F4;&#xFF0C;JS&#x4E3B;&#x7EBF;&#x7A0B;&#x4ECD;&#x7136;&#x8FD8;&#x5728;&#x6267;&#x884C;&#x540C;&#x6B65;&#x4EFB;&#x52A1;&#xFF0C;setTimeout&#x6240;&#x6307;&#x5B9A;&#x7684;&#x65B9;&#x6CD5;&#x5E76;&#x4E0D;&#x4F1A;&#x7ACB;&#x523B;&#x6267;&#x884C;&#x3002;\n&#x66F4;&#x60E8;&#x7684;&#x662F;&#xFF0C;&#x5373;&#x4F7F;JS&#x4E3B;&#x7EBF;&#x7A0B;&#x6267;&#x884C;&#x5B8C;&#x4E86;&#x540C;&#x6B65;&#x4EFB;&#x52A1;&#xFF0C;&#x4E5F;&#x4E0D;&#x4E00;&#x5B9A;&#x4F1A;&#x6267;&#x884C;setTimeout&#x6307;&#x5B9A;&#x7684;&#x65B9;&#x6CD5;&#xFF0C;&#x56E0;&#x4E3A;&#x5F02;&#x6B65;&#x4EFB;&#x52A1;&#x961F;&#x5217;&#x4E2D;&#x53EF;&#x80FD;&#x6709;&#x66F4;&#x65E9;&#x52A0;&#x5165;&#x7684;&#x5F02;&#x6B65;&#x4EFB;&#x52A1;&#x3002;</p>\n<p>&#x6700;&#x60E8;&#x7684;&#x662F;&#xFF0C;&#x5373;&#x4F7F;&#x5929;&#x65F6;&#x5730;&#x5229;&#x4EBA;&#x548C;&#xFF0C;&#x5230;&#x4E86;&#x5B9A;&#x65F6;&#x7684;&#x65F6;&#x95F4;&#x65F6;&#xFF0C;JS&#x4E3B;&#x7EBF;&#x7A0B;&#x7A7A;&#x95F2;&#xFF0C;&#x5F02;&#x6B65;&#x4EFB;&#x52A1;&#x961F;&#x5217;&#x4E2D;&#x53EA;&#x6709;setTimeout&#x6267;&#x884C;&#x7684;&#x65B9;&#x6CD5;&#xFF0C;&#x8FD9;&#x4E2A;&#x65B9;&#x6CD5;&#x7684;&#x6267;&#x884C;&#x65F6;&#x95F4;&#x4E5F;&#x5E76;&#x4E0D;&#x662F;&#x7CBE;&#x786E;&#x7684;delay&#x65F6;&#x95F4;&#xFF08;&#x7CBE;&#x786E;&#x5230;&#x6BEB;&#x79D2;&#xFF09;&#xFF0C;&#x56E0;&#x4E3A;&#x6D4F;&#x89C8;&#x5668;&#x4E0A;&#x7684;&#x8BA1;&#x65F6;&#x5668;&#x7CBE;&#x786E;&#x5EA6;&#x6709;&#x9650;&#xFF1A;&#xFF08;&#x4EE5;&#x4E0B;&#x6458;&#x81EA;&#x300A;Javascript&#x9AD8;&#x7EA7;&#x7A0B;&#x5E8F;&#x8BBE;&#x8BA1;&#xFF08;&#x7B2C;&#x4E09;&#x7248;&#xFF09;&#x300B;&#xFF09;</p>\n<ul>\n<li>IE8&#x53CA;&#x66F4;&#x65E9;&#x7248;&#x672C;&#x7684;&#x8BA1;&#x65F6;&#x5668;&#x7CBE;&#x5EA6;&#x4E3A;15.625ms</li>\n<li>IE9&#x53CA;&#x66F4;&#x665A;&#x7248;&#x672C;&#x7684;&#x8BA1;&#x65F6;&#x5668;&#x7CBE;&#x5EA6;&#x4E3A;4ms</li>\n<li>Firefox&#x548C;Safari&#x7684;&#x8BA1;&#x65F6;&#x5668;&#x7CBE;&#x5EA6;&#x5927;&#x7EA6;&#x4E3A;10ms</li>\n<li>Chrome&#x7684;&#x8BA1;&#x65F6;&#x5668;&#x7CBE;&#x5EA6;&#x4E3A;4ms</li>\n</ul>\n<p>&#x7EB5;&#x4F7F;setTimeout&#x6709;&#x4E9B;&#x4E0D;&#x5C3D;&#x4EBA;&#x610F;&#xFF0C;&#x4F46;&#x8FD9;&#x4E9B;&#x7455;&#x75B5;&#x5728;&#x5927;&#x90E8;&#x5206;&#x60C5;&#x51B5;&#x4E0B;&#xFF0C;&#x7528;&#x6237;&#x65E0;&#x6CD5;&#x611F;&#x77E5;&#x51FA;&#x6765;&#x3002;\n&#x5F88;&#x591A;&#x65F6;&#x5019;&#xFF0C;setTimeout&#x771F;&#x6B63;&#x610F;&#x56FE;&#x4E0D;&#x662F;&#x7528;&#x6765;&#x6EE1;&#x8DB3;&#x5F3A;&#x8FEB;&#x8005;&#x7684;&#x7CBE;&#x786E;&#x9700;&#x6C42;&#xFF0C;&#x800C;&#x662F;&#x4E00;&#x79CD;&#x6001;&#x5EA6;&#xFF0C;&#x4E00;&#x79CD;&#x4E2D;&#x534E;&#x540D;&#x65CF;&#x4F20;&#x627F;&#x5DF2;&#x4E45;&#x7684;&#x8C26;&#x8BA9;&#x7F8E;&#x5FB7;&#xFF1A;<strong>&quot;You can you up!&quot;</strong>&#x3002;&#x8D2F;&#x5F7B;&#x4E86;&#x6B64;&#x7CBE;&#x795E;&#x7684;&#x4EE3;&#x7801;&#xFF0C;&#x4F1A;&#x8BA9;&#x6574;&#x4E2A;JS&#x8FD0;&#x884C;&#x73AF;&#x5883;&#x548C;&#x8C10;&#x8FD0;&#x884C;&#x3002;</p>\n<blockquote>\n<p>&#x7ED9;setTimeout&#x4E00;&#x53E5;&#x8BC4;&#x4EF7;&#x5C31;&#x662F;&#xFF1A;&quot;&#x4E0A;&#x5584;&#x82E5;&#x6C34;&#xFF0C;&#x6C34;&#x5584;&#x5229;&#x4E07;&#x7269;&#x800C;&#x4E0D;&#x4E89;&#x3002;&quot; -- &#x6458;&#x81EA;&#x300A;&#x9053;&#x5FB7;&#x7ECF;&#x300B;</p>\n</blockquote>\n<h3 id="3-settimeout-">3 setTimeout&#x5E94;&#x7528;&#x4F8B;&#x5B50;</h3>\n<h4 id="3-1-setinterval-">3.1 &#x66FF;&#x6362;setInterval&#x6765;&#x5B9E;&#x73B0;&#x91CD;&#x590D;&#x5B9A;&#x65F6;</h4>\n<p>setTimeout&#x6709;&#x4E2A;&#x54E5;&#x54E5;&#xFF1A;setInterval&#x3002;&#x4ED6;&#x54E5;&#x770B;&#x8D77;&#x6765;&#x53FC;&#x53FC;&#x7684;&#xFF0C;&#x53EF;&#x4EE5;&#x5FAA;&#x73AF;&#x5730;&#x6BCF;&#x9694;&#x4E00;&#x4E2A;delay&#x5C31;&#x5411;&#x5F02;&#x6B65;&#x4EFB;&#x52A1;&#x961F;&#x5217;&#x4E2D;&#x6DFB;&#x52A0;&#x4E00;&#x4E2A;&#x4EFB;&#x52A1;&#x3002;&#x5B9E;&#x9645;&#x4E0A;setInterval&#x7528;&#x8D77;&#x6765;&#x771F;&#x5730;&#x987A;&#x6ED1;&#x5417;&#xFF1F;&#x4EE5;&#x4E0B;YY&#x4E00;&#x6BB5;setTimeout&#x8868;&#x54E5;&#x7684;&#x5BF9;&#x8BDD;&#xFF1A;</p>\n<blockquote>\n<p> setTimeout&#xFF1A; &#x6B27;&#x59AE;&#x6851;\n setInterval&#xFF1A;&#x7EB3;&#x6CE5;&#xFF1F;\n setTimeout&#xFF1A;&#x6211;&#x53D1;&#x73B0;&#x4F60;&#x53EF;&#x80FD;&#x6709;bug&#xFF01;\n setInterval&#xFF1A;&#x6211;&#x611A;&#x8822;&#x7684;&#x5F1F;&#x5F1F;&#x554A;&#x3002;&#x3002;&#x80AF;&#x5B9A;&#x662F;&#x4F60;&#x4F7F;&#x7528;&#x7684;&#x65B9;&#x6CD5;&#x4E0D;&#x5BF9;&#xFF01;\n setTimeout&#xFF1A;&#x8003;&#x8651;&#x5230;JS&#x8FD0;&#x884C;&#x73AF;&#x5883;&#x7684;&#x7279;&#x70B9;&#xFF0C;&#x4F60;&#x7684;&#x5B9A;&#x65F6;&#x65B9;&#x6CD5;&#x53EF;&#x80FD;&#x4F1A;&#x8FDE;&#x7EED;&#x6267;&#x884C;&#xFF0C;&#x4E4B;&#x95F4;&#x6CA1;&#x6709;&#x9884;&#x671F;&#x7684;&#x95F4;&#x9694;&#x3002;\n  setInterval&#xFF1A;Too young too simple! &#x4F60;&#x662F;&#x8BF4;JS&#x4E3B;&#x7EBF;&#x7A0B;&#x7684;&#x6B65;&#x540C;&#x4EFB;&#x52A1;&#x6267;&#x884C;&#x65F6;&#x95F4;&#x5F88;&#x957F;&#xFF0C;&#x5E76;&#x4E14;&#x5F02;&#x6B65;&#x961F;&#x5217;&#x4E2D;&#x53EA;&#x6709;&#x6211;&#x5728;&#x5F80;&#x5176;&#x4E2D;&#x6DFB;&#x52A0;&#x4EFB;&#x52A1;&#xFF0C;&#x5BFC;&#x81F4;&#x6211;&#x5728;&#x5F02;&#x6B65;&#x961F;&#x5217;&#x4E2D;&#x91CD;&#x590D;&#x6DFB;&#x52A0;&#x7684;&#x4EFB;&#x52A1;&#x6CA1;&#x6709;&#x53CA;&#x65F6;&#x88AB;&#x6267;&#x884C;&#xFF0C;&#x7136;&#x540E;JS&#x4E3B;&#x7EBF;&#x7A0B;&#x7A7A;&#x95F2;&#x540E;&#xFF0C;&#x6211;&#x6DFB;&#x52A0;&#x7684;&#x591A;&#x4E2A;&#x4EFB;&#x52A1;&#x5C31;&#x4F1A;&#x8FDE;&#x7EED;&#x6267;&#x884C;&#xFF0C;&#x662F;&#x5417;&#xFF1F;\n setTimeout&#xFF1A;&#x5176;&#x5B9E;&#x6211;&#x60F3;&#x8BF4;&#x7684;&#x662F;&#x3002;&#x3002;&#x3002;\n setInterval&#xFF1A;&#x673A;&#x667A;&#x7684;&#x4E3A;&#x5144;&#x65E9;&#x5C31;&#x6599;&#x5230;&#x4E86;&#x8FD9;&#x4E00;&#x70B9;&#xFF0C;&#x4E8E;&#x662F;&#x6211;&#x5728;&#x5F80;&#x5F02;&#x6B65;&#x961F;&#x5217;&#x4E2D;&#x6DFB;&#x52A0;&#x4EFB;&#x52A1;&#x7684;&#x65F6;&#x5019;&#xFF0C;&#x7279;&#x610F;&#x68C0;&#x6D4B;&#x4E86;&#x961F;&#x5217;&#x4E2D;&#x662F;&#x5426;&#x5DF2;&#x7ECF;&#x6709;&#x4E86;&#x6211;&#x4E4B;&#x524D;&#x6DFB;&#x52A0;&#x7684;&#x4EFB;&#x52A1;&#xFF0C;&#x5982;&#x679C;&#x6709;&#x7684;&#x8BDD;&#xFF0C;&#x4E3A;&#x5144;&#x5C31;&#x4E0D;&#x518D;&#x91CD;&#x590D;&#x6DFB;&#x52A0;&#x3002;\n setTimeout&#xFF1A;&#x4F60;&#x8BF4;&#x7684;&#x90A3;&#x4E2A;&#x68C0;&#x6D4B;&#x673A;&#x5236;&#x6211;&#x77E5;&#x9053;&#xFF0C;&#x6211;&#x60F3;&#x8BF4;&#x7684;&#x662F;&#xFF0C;&#x5F53;JS&#x4E3B;&#x7EBF;&#x7A0B;&#x4E2D;&#x6B63;&#x5728;&#x6267;&#x884C;&#x4F60;&#x6DFB;&#x52A0;&#x7684;&#x4EFB;&#x52A1;&#xFF0C;&#x5982;&#x679C;&#x6B64;&#x65F6;&#x5F02;&#x6B65;&#x4EFB;&#x52A1;&#x961F;&#x5217;&#x4E3A;&#x7A7A;&#xFF0C;&#x4F60;&#x518D;&#x5411;&#x961F;&#x5217;&#x4E2D;&#x6DFB;&#x52A0;&#x5F02;&#x6B65;&#x4EFB;&#x52A1;&#x65F6;&#xFF0C;JS&#x4E3B;&#x7EBF;&#x7A0B;&#x6267;&#x884C;&#x5B8C;&#x4F60;&#x4E0A;&#x6B21;&#x6DFB;&#x52A0;&#x7684;&#x4EFB;&#x52A1;&#xFF0C;&#x4F1A;&#x7ACB;&#x523B;&#x6267;&#x884C;&#x4F60;&#x8FD9;&#x6B21;&#x6DFB;&#x52A0;&#x7684;&#x4EFB;&#x52A1;&#x3002;\n setInterval&#xFF1A;&#x3002;&#x3002;&#x3002;&#x3002;&#x8FD9;&#x662F;&#x6CA1;&#x529E;&#x6CD5;&#x7684;&#x554A;&#xFF0C;&#x6211;&#x53EA;&#x80FD;&#x68C0;&#x6D4B;&#x961F;&#x5217;&#x4E2D;&#x7684;&#x4EFB;&#x52A1;&#xFF0C;&#x6CA1;&#x6CD5;&#x68C0;&#x6D4B;&#x6B63;&#x5728;&#x6267;&#x884C;&#x7684;&#x4EFB;&#x52A1;&#x3002;You can you up?\n setTimeout&#xFF1A;&#x8BF7;&#x770B;&#x4E0B;&#x9762;&#x4EE3;&#x7801;&#xFF1A;</p>\n</blockquote>\n<pre class="hljs">setTimeout(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{\n    doWhatYouWantTo();\n    setTimeout(<span class="hljs-built_in">arguments</span>.callee, <span class="hljs-number">100</span>)\n}, <span class="hljs-number">100</span>);\n</pre>\n<blockquote>\n<p>setInterval&#xFF1A; &#xFF08;&#x6342;&#x773C;&#x3002;&#x3002;&#x3002;&#xFF09;&#x597D;&#x4EAE;&#x7684;&#x4EE3;&#x7801;&#xFF01;&#x4F60;&#x8D62;&#x4E86;...</p>\n</blockquote>\n<p>&#x4F7F;&#x7528;&#x4EE5;&#x4E0A;setTimeout&#x94FE;&#x5F0F;&#x8C03;&#x7528;&#x7684;&#x65B9;&#x5F0F;&#xFF0C;&#x53EF;&#x4EE5;&#x4FDD;&#x8BC1;&#x5728;&#x4E0B;&#x4E00;&#x6B21;&#x5B9A;&#x65F6;&#x5668;&#x4EE3;&#x7801;&#x6267;&#x884C;&#x4E4B;&#x524D;&#xFF0C;&#x81F3;&#x5C11;&#x8981;&#x7B49;&#x5F85;&#x6307;&#x5B9A;&#x7684;&#x65F6;&#x95F4;&#x95F4;&#x9694;&#xFF0C;&#x907F;&#x514D;&#x8FDE;&#x7EED;&#x7684;&#x8FD0;&#x884C;&#x3002;</p>\n<h4 id="3-2-">3.2 &#x9632;&#x6B62;&#x4E8B;&#x4EF6;&#x75AF;&#x72C2;&#x89E6;&#x53D1;</h4>\n<p>&#x9664;&#x4E86;&#x70B9;&#x51FB;&#x8FD9;&#x79CD;&#x5355;&#x6B21;&#x4E8B;&#x4EF6;&#xFF0C;&#x6D4F;&#x89C8;&#x5668;&#x4E0A;&#x6709;&#x4E00;&#x4E9B;&#x4F1A;&#x75AF;&#x72C2;&#x89E6;&#x53D1;&#x7684;&#x4E8B;&#x4EF6;&#xFF0C;&#x4F8B;&#x5982;onreaize&#x4E8B;&#x4EF6;&#x3002;&#x5982;&#x679C;&#x7ED9;&#x8FD9;&#x4E2A;&#x4E8B;&#x4EF6;&#x7ED1;&#x5B9A;&#x4E86;&#x5904;&#x7406;&#x51FD;&#x6570;&#xFF0C;&#x5728;&#x6D4F;&#x89C8;&#x5668;&#x7A97;&#x53E3;&#x5927;&#x5C0F;&#x6539;&#x53D8;&#x7684;&#x65F6;&#x5019;&#x4F1A;&#x5F88;&#x9AD8;&#x9891;&#x5730;&#x89E6;&#x53D1;&#x5904;&#x7406;&#x51FD;&#x6570;&#x3002;&#x5982;&#x679C;&#x5904;&#x7406;&#x51FD;&#x6570;&#x4E2D;&#x6709;DOM&#x64CD;&#x4F5C;&#x7684;&#x8BDD;&#xFF0C;&#x5BF9;&#x9875;&#x9762;&#x6027;&#x80FD;&#x5F71;&#x54CD;&#x4F1A;&#x5F88;&#x5927;&#xFF0C;&#x5C24;&#x5176;&#x662F;&#x5728;IE&#x6D4F;&#x89C8;&#x5668;&#x4E2D;&#xFF0C;&#x751A;&#x81F3;&#x53EF;&#x80FD;&#x8BA9;&#x6D4F;&#x89C8;&#x5668;&#x5D29;&#x6E83;&#x3002;</p>\n<p>&#x5982;&#x679C;&#x4F60;&#x5B9E;&#x5728;&#x9700;&#x8981;&#x5728;&#x8FD9;&#x7C7B;&#x4E8B;&#x4EF6;&#x4E0A;&#x7ED1;&#x5B9A;&#x64CD;&#x4F5C;DOM&#x7684;&#x51FD;&#x6570;&#xFF0C;&#x90A3;&#x4E48;&#x53EF;&#x4EE5;&#x8003;&#x8651;&#x4E00;&#x4E0B;&#x9650;&#x5236;&#x4E00;&#x4E0B;&#x4E8B;&#x4EF6;&#x6267;&#x884C;&#x7684;&#x65F6;&#x95F4;&#x95F4;&#x9694;&#xFF0C;&#x81F3;&#x5C11;&#x4E0D;&#x8981;&#x90A3;&#x4E48;&#x9891;&#x7E41;&#x3002;&#x81F3;&#x4E8E;&#x8BBE;&#x7F6E;&#x591A;&#x5C11;&#x65F6;&#x95F4;&#x95F4;&#x9694;&#xFF0C;&#x770B;&#x5177;&#x4F53;&#x573A;&#x666F;&#x548C;&#x9700;&#x6C42;&#x3002;&#x4EE5;&#x4E0B;&#x4EE3;&#x7801;&#x662F;&#x5229;&#x7528;setTimeout&#x6765;&#x5B9E;&#x73B0;&#x4E8B;&#x4EF6;&#x6267;&#x884C;&#x9891;&#x7387;&#x63A7;&#x5236;&#xFF1A;</p>\n<pre class="hljs"><span class="hljs-comment">/**\n * &#x9650;&#x5236;method&#x6267;&#x884C;&#x9891;&#x6B21;&#xFF0C;&#x5F53;&#x65B9;&#x6CD5;100ms&#x4E4B;&#x5185;&#x6CA1;&#x6709;\n * &#x518D;&#x6B21;&#x88AB;&#x8C03;&#x7528;&#x65F6;&#xFF0C;&#x624D;&#x6267;&#x884C;method&#x65B9;&#x6CD5;\n * @param  {function} method  &#x88AB;&#x9650;&#x5236;&#x7684;&#x65B9;&#x6CD5;\n * @param  {Object} context method&#x6267;&#x884C;&#x7684;&#x4E0A;&#x4E0B;&#x6587;\n */</span>\n<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">throttle</span>(<span class="hljs-params">method, context</span>) </span>{\n    clearTimeout(method.tid);\n\n    method.tid = setTimeout(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{\n        method.call(context);\n    }, <span class="hljs-number">100</span>);\n}\n\n<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">fnResize</span>(<span class="hljs-params"></span>) </span>{\n    <span class="hljs-built_in">console</span>.log(<span class="hljs-number">111</span>);\n}\n\n<span class="hljs-built_in">window</span>.onresize = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{\n    throttle(fnResize);\n}\n</pre>\n<h4 id="3-3-ie-gif-">3.3 IE&#x4E0B;&#x91CD;&#x65B0;&#x64AD;&#x653E;&#x5355;&#x6B21;gif&#x52A8;&#x753B;</h4>\n<p>&#x6709;&#x8FD9;&#x6837;&#x4E00;&#x4E2A;&#x9700;&#x6C42;&#xFF1A;&#x8BBE;&#x8BA1;&#x7ED9;&#x4E86;&#x4E00;&#x4E2A;gif&#x52A8;&#x753B;&#xFF0C;gif&#x672C;&#x8EAB;&#x662F;&#x5355;&#x6B21;&#x64AD;&#x653E;&#x7684;&#x3002;&#x4EA7;&#x54C1;&#x8981;&#x6C42;&#x9875;&#x9762;&#x52A0;&#x8F7D;&#x65F6;&#x52A8;&#x753B;&#x64AD;&#x653E;&#x4E00;&#x6B21;&#x3002;&#x540E;&#x7EED;&#x7528;&#x6237;&#x53EA;&#x8981;&#x9F20;&#x6807;hover&#x5230;&#x52A8;&#x753B;&#x4E0A;&#xFF0C;&#x52A8;&#x753B;&#x5C31;&#x91CD;&#x65B0;&#x64AD;&#x653E;&#x4E00;&#x6B21;&#x3002;&#x5229;&#x7528;&#x641C;&#x7D22;&#x5F15;&#x64CE;&#x7684;&#x5F3A;&#x5927;&#x529F;&#x80FD;&#xFF0C;&#x5F88;&#x5FEB;&#x627E;&#x5230;&#x4E86;&#x5B9E;&#x73B0;&#x65B9;&#x6848;:</p>\n<pre class="hljs">$logo.on(<span class="hljs-string">&apos;mouseenter&apos;</span>, <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{ <span class="hljs-comment">// hover&#x65F6;&#x91CD;&#x65B0;&#x64AD;&#x653E;gif&#x52A8;&#x753B;</span>\n    <span class="hljs-keyword">var</span> $logoImg = $(<span class="hljs-keyword">this</span>).find(<span class="hljs-string">&apos;img&apos;</span>);\n    $logoImg.attr(<span class="hljs-string">&apos;src&apos;</span>, <span class="hljs-string">&apos;&apos;</span>); <span class="hljs-comment">// &#x5C06;img&#x7684;src&#x7F6E;&#x4E3A;&#x7A7A;</span>\n    $logoImg.attr(<span class="hljs-string">&apos;src&apos;</span>, _opt.logoImg); <span class="hljs-comment">// &#x91CD;&#x65B0;&#x8BBE;&#x7F6E;src&#x4E3A;gif&#x94FE;&#x63A5;&#xFF0C;&#x4EE5;&#x5B9E;&#x73B0;&#x91CD;&#x65B0;&#x64AD;&#x653E;</span>\n});\n</pre>\n<p>&#x5728;chrome&#x7B49;&#x6D4F;&#x89C8;&#x5668;&#x4E0A;&#x9A8C;&#x8BC1;&#x6CA1;&#x95EE;&#x9898;&#x540E;&#xFF0C;&#x6309;&#x7167;&#x60EF;&#x4F8B;&#xFF0C;&#x5728;IE&#x4E0A;&#x51FA;&#x95EE;&#x9898;&#x4E86;&#x3002;&#x3002;&#x3002;gif&#x5E76;&#x6CA1;&#x6709;&#x91CD;&#x65B0;&#x64AD;&#x653E;&#x4E00;&#x6B21;&#x3002;\n&#x5F53;&#x65F6;&#x60F3;&#x7684;&#x662F;&#xFF0C;&#x53EF;&#x80FD;&#x662F;IE&#x53CD;&#x5E94;&#x592A;&#x6162;&#x4E86;&#xFF0C;&#x5728;src&#x5C5E;&#x6027;&#x91CD;&#x7F6E;&#x7684;&#x90A3;&#x4E2A;&#x95F4;&#x9694;&#x5185;&#xFF0C;&#x6CA1;&#x6709;&#x610F;&#x8BC6;&#x5230;&#x8FD9;&#x4E00;&#x70B9;&#x3002;&#x4E8E;&#x662F;&#x5C31;&#x5C1D;&#x8BD5;&#x52A0;&#x4E86;&#x4E2A;setTimeout&#xFF0C;&#x628A;&#x91CD;&#x65B0;&#x8BBE;&#x7F6E;src&#x7684;&#x64CD;&#x4F5C;&#x4E22;&#x5230;&#x4E86;&#x5F02;&#x6B65;&#x4EFB;&#x52A1;&#x961F;&#x5217;&#x4E2D;&#x3002;</p>\n<pre class="hljs">$logo.on(<span class="hljs-string">&apos;mouseenter&apos;</span>, <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{ <span class="hljs-comment">// hover&#x65F6;&#x91CD;&#x65B0;&#x64AD;&#x653E;gif&#x52A8;&#x753B;</span>\n    <span class="hljs-keyword">var</span> $logoImg = $(<span class="hljs-keyword">this</span>).find(<span class="hljs-string">&apos;img&apos;</span>);\n    $logoImg.attr(<span class="hljs-string">&apos;src&apos;</span>, <span class="hljs-string">&apos;&apos;</span>);\n    setTimeout(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{ <span class="hljs-comment">// IE&#x4E0B;&#x8981;&#x8FD9;&#x6837;&#x641E;&#xFF0C;&#x4E0D;&#x7136;&#x4E0D;&#x80FD;&#x91CD;&#x65B0;&#x64AD;&#x653E;&#x52A8;&#x753B;</span>\n        $logoImg.attr(<span class="hljs-string">&apos;src&apos;</span>, _opt.logoImg);\n    }, <span class="hljs-number">0</span>);\n});\n</pre>\n<p>&#x867D;&#x7136;&#x6CA1;&#x6709;&#x4ECE;&#x6839;&#x672C;&#x4E0A;&#x7406;&#x89E3;&#x4E3A;&#x4EC0;&#x4E48;IE&#x4F1A;&#x8FD9;&#x6837;&#xFF0C;&#x4F46;&#x662F;setTimeout&#x5DF2;&#x7136;&#x89E3;&#x51B3;&#x4E86;&#x8FD9;&#x4E2A;&#x95EE;&#x9898;&#x3002;&#x3002;</p>\n<h4 id="3-4-blur-">3.4 blur&#x4E8B;&#x4EF6;&#x5EF6;&#x65F6;&#x751F;&#x6548;</h4>\n<p>&#x7ECF;&#x5E38;&#x6709;&#x8FD9;&#x79CD;&#x573A;&#x666F;&#xFF1A;&#x76D1;&#x63A7;input&#x6216;&#x8005;textarea&#x4E2D;&#x6587;&#x672C;&#x7684;&#x53D8;&#x5316;&#xFF0C;&#x7136;&#x540E;&#x89E6;&#x53D1;&#x67D0;&#x4E2A;&#x4E8B;&#x4EF6;&#x5904;&#x7406;&#x7A0B;&#x5E8F;&#x3002;&#x8003;&#x8651;&#x5230;&#x9664;&#x4E86;&#x952E;&#x76D8;&#x8F93;&#x5165;&#xFF0C;&#x8FD8;&#x6709;&#x9F20;&#x6807;&#x7684;&#x7C98;&#x8D34;&#x548C;&#x526A;&#x5207;&#x64CD;&#x4F5C;&#xFF0C;&#x6BD4;&#x8F83;&#x5B8C;&#x6574;&#x7684;&#x76D1;&#x63A7;&#x8F93;&#x5165;&#x5185;&#x5BB9;&#x6539;&#x53D8;&#x7684;&#x65B9;&#x6CD5;&#x662F;&#xFF1A;</p>\n<pre class="hljs"><span class="hljs-comment">// &#x54CD;&#x5E94;&#x952E;&#x76D8;&#x8F93;&#x5165;&#xFF0C;&#x7C98;&#x8D34;&#x548C;&#x526A;&#x5207;&#x4E8B;&#x4EF6;</span>\n$(<span class="hljs-string">&apos;#input&apos;</span>).on(<span class="hljs-string">&apos;keyup paste cut&apos;</span>, <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{\n    <span class="hljs-built_in">console</span>.log($(<span class="hljs-keyword">this</span>).val());\n});\n</pre>\n<p>&#x4EE5;&#x4E0A;&#x4EE3;&#x7801;&#x5728;&#x952E;&#x76D8;&#x8F93;&#x5165;&#x573A;&#x666F;&#x4E0B;&#xFF0C;&#x80FD;&#x591F;&#x5728;&#x63A7;&#x5236;&#x53F0;&#x8F93;&#x5165;&#x6700;&#x65B0;&#x7684;&#x8F93;&#x5165;&#x6846;&#x5185;&#x6587;&#x672C;&#x3002;&#x4F46;&#x662F;&#x5F53;&#x4F7F;&#x7528;&#x9F20;&#x6807;&#x53F3;&#x952E;&#x64CD;&#x4F5C;&#x8FDB;&#x884C;&#x7C98;&#x8D34;&#x6216;&#x526A;&#x5207;&#x65F6;&#xFF0C;&#x63A7;&#x5236;&#x53F0;&#x8F93;&#x5165;&#x7684;&#x6587;&#x672C;&#x5185;&#x5BB9;&#x662F;&#x64CD;&#x4F5C;&#x524D;&#x7684;&#x65E7;&#x5185;&#x5BB9;&#x3002;&#x4E3A;&#x4E86;&#x83B7;&#x53D6;&#x64CD;&#x4F5C;&#x540E;&#x7684;&#x65B0;&#x6587;&#x672C;&#x5185;&#x5BB9;&#xFF0C;&#x53EF;&#x4EE5;&#x5C06;&#x5BF9;&#x6587;&#x672C;&#x7684;&#x83B7;&#x53D6;&#x548C;&#x5904;&#x7406;&#x653E;&#x5728;setTimeout&#x4E2D;&#x5EF6;&#x65F6;&#x6267;&#x884C;&#xFF1A;</p>\n<pre class="hljs"><span class="hljs-comment">// &#x54CD;&#x5E94;&#x952E;&#x76D8;&#x8F93;&#x5165;&#xFF0C;&#x7C98;&#x8D34;&#x548C;&#x526A;&#x5207;&#x4E8B;&#x4EF6;</span>\n$(<span class="hljs-string">&apos;#input&apos;</span>).on(<span class="hljs-string">&apos;keyup paste cut&apos;</span>, <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{\n    <span class="hljs-keyword">var</span> $<span class="hljs-keyword">this</span> = $(<span class="hljs-keyword">this</span>);\n    setTimeout(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>)</span>{ <span class="hljs-comment">// &#x4F7F;&#x9F20;&#x6807;&#x7C98;&#x8D34;&#x548C;&#x526A;&#x5207;&#x65F6;&#xFF0C;&#x8F93;&#x5165;&#x6846;&#x5185;&#x5185;&#x5BB9;&#x4E3A;&#x6700;&#x65B0;</span>\n        <span class="hljs-built_in">console</span>.log($<span class="hljs-keyword">this</span>.val());\n    }, <span class="hljs-number">0</span>)\n});\n</pre>\n<h4 id="3-5-">3.5 &#x66F4;&#x591A;&#x7528;&#x6CD5;&#xFF1F;</h4>\n<p>setTimeout&#x80FD;&#x591F;&#x5F71;&#x54CD;&#x4EE3;&#x7801;&#x7684;&#x6267;&#x884C;&#x987A;&#x5E8F;&#x548C;&#x65F6;&#x673A;&#xFF0C;&#x5408;&#x7406;&#x4F7F;&#x7528;&#x80FD;&#x591F;&#x8BA9;&#x66F4;&#x91CD;&#x8981;&#x7684;&#x4EE3;&#x7801;&#x4F18;&#x5148;&#x6267;&#x884C;&#xFF0C;&#x4E5F;&#x53EF;&#x4EE5;FIX&#x67D0;&#x4E9B;&#x573A;&#x666F;&#x4E0B;&#x7684;&#x5947;&#x602A;&#x7684;bug&#x3002;&#x4E0A;&#x9762;&#x53EA;&#x5217;&#x4E3E;&#x4E86;4&#x79CD;&#x5E94;&#x7528;&#x7684;&#x573A;&#x666F;&#xFF0C;&#x66F4;&#x591A;&#x7684;&#x7528;&#x6CD5;&#x6B22;&#x8FCE;&#x5927;&#x5BB6;&#x8BA8;&#x8BBA;&#x548C;&#x8865;&#x5145;&#x3002;</p>\n'}});
//# sourceMappingURL=7.69f05d329327ff7fdcf5.js.map