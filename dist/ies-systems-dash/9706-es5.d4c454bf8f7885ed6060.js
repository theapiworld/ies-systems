(self.webpackChunkies_systems_dash=self.webpackChunkies_systems_dash||[]).push([[9706],{9706:function(e,t,n){"use strict";n.r(t),n.d(t,{createSwipeBackGesture:function(){return s}});var r=n(2377),a=n(7279);n(960);var s=function(e,t,n,s,i){var u=e.ownerDocument.defaultView;return(0,a.createGesture)({el:e,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:function(e){return e.startX<=50&&t()},onStart:n,onMove:function(e){s(e.deltaX/u.innerWidth)},onEnd:function(e){var t=u.innerWidth,n=e.deltaX/t,a=e.velocityX,s=a>=0&&(a>.2||e.deltaX>t/2),c=(s?1-n:n)*t,o=0;if(c>5){var d=c/Math.abs(a);o=Math.min(d,540)}i(s,n<=0?.01:(0,r.j)(0,n,.9999),o)}})}}}]);