/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ScrollVideo.ts":
/*!****************************!*\
  !*** ./src/ScrollVideo.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ScrollVideo = void 0;
var ScrollVideo = /** @class */ (function () {
    function ScrollVideo(video, fps) {
        if (fps === void 0) { fps = 30; }
        var _this = this;
        this.video = video;
        this.fps = fps;
        this.renderedImages = [];
        this.canvas = document.createElement('canvas');
        this.scrollEventRunning = false;
        video.addEventListener('loadeddata', function () { return _this.startRendering(); });
        video.addEventListener('ended', function () { return _this.stopRendering(); });
        document.addEventListener('scroll', function () { return _this.onScroll(); });
        this.canvas.style.position = 'sticky';
        this.canvas.style.top = '0px';
        this.canvas.classList.add('scroll-video');
        video.style.visibility = 'hidden';
        this.video.muted = true;
        this.video.playbackRate = 10;
        this.video.play();
    }
    ScrollVideo.prototype.startRendering = function () {
        var _this = this;
        this.canvas.width = this.video.videoWidth;
        this.canvas.height = this.video.videoHeight;
        this.renderInterval = setInterval(function () {
            var canvas = document.createElement('canvas');
            var ctx = canvas.getContext('2d');
            canvas.width = _this.video.videoWidth;
            canvas.height = _this.video.videoHeight;
            ctx.drawImage(_this.video, 0, 0);
            canvas.classList.add('scroll-video');
            _this.renderedImages.push(canvas);
            document.body.appendChild(canvas);
        }, 25);
    };
    ScrollVideo.prototype.stopRendering = function () {
        clearInterval(this.renderInterval);
        console.log(this.renderedImages);
        this.video.parentNode.replaceChild(this.canvas, this.video);
    };
    ScrollVideo.prototype.onScroll = function () {
        var _this = this;
        if (this.scrollEventRunning)
            return;
        this.scrollEventRunning = true;
        var box = this.canvas.getBoundingClientRect();
        console.log('visible', box.top);
        window.setTimeout(function () { return _this.scrollEventRunning = false; }, 50);
    };
    return ScrollVideo;
}());
exports.ScrollVideo = ScrollVideo;


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
var ScrollVideo_1 = __webpack_require__(/*! ./ScrollVideo */ "./src/ScrollVideo.ts");
var scrollVideo = document.getElementById('scroll-video');
var scrollVideoTs = new ScrollVideo_1.ScrollVideo(scrollVideo);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQsZ0NBQWdDO0FBQzNGLHNEQUFzRCwrQkFBK0I7QUFDckYsMERBQTBELDBCQUEwQjtBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsMENBQTBDO0FBQ2xGO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsbUJBQW1COzs7Ozs7O1VDdERuQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7Ozs7Ozs7O0FDdEJhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELG9CQUFvQixtQkFBTyxDQUFDLDJDQUFlO0FBQzNDO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zY3JvbGwtdmlkZW8vLi9zcmMvU2Nyb2xsVmlkZW8udHMiLCJ3ZWJwYWNrOi8vc2Nyb2xsLXZpZGVvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Njcm9sbC12aWRlby8uL3NyYy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5TY3JvbGxWaWRlbyA9IHZvaWQgMDtcbnZhciBTY3JvbGxWaWRlbyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTY3JvbGxWaWRlbyh2aWRlbywgZnBzKSB7XG4gICAgICAgIGlmIChmcHMgPT09IHZvaWQgMCkgeyBmcHMgPSAzMDsgfVxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLnZpZGVvID0gdmlkZW87XG4gICAgICAgIHRoaXMuZnBzID0gZnBzO1xuICAgICAgICB0aGlzLnJlbmRlcmVkSW1hZ2VzID0gW107XG4gICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgIHRoaXMuc2Nyb2xsRXZlbnRSdW5uaW5nID0gZmFsc2U7XG4gICAgICAgIHZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWRlZGRhdGEnLCBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5zdGFydFJlbmRlcmluZygpOyB9KTtcbiAgICAgICAgdmlkZW8uYWRkRXZlbnRMaXN0ZW5lcignZW5kZWQnLCBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5zdG9wUmVuZGVyaW5nKCk7IH0pO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5vblNjcm9sbCgpOyB9KTtcbiAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUucG9zaXRpb24gPSAnc3RpY2t5JztcbiAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUudG9wID0gJzBweCc7XG4gICAgICAgIHRoaXMuY2FudmFzLmNsYXNzTGlzdC5hZGQoJ3Njcm9sbC12aWRlbycpO1xuICAgICAgICB2aWRlby5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICAgIHRoaXMudmlkZW8ubXV0ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnZpZGVvLnBsYXliYWNrUmF0ZSA9IDEwO1xuICAgICAgICB0aGlzLnZpZGVvLnBsYXkoKTtcbiAgICB9XG4gICAgU2Nyb2xsVmlkZW8ucHJvdG90eXBlLnN0YXJ0UmVuZGVyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHRoaXMudmlkZW8udmlkZW9XaWR0aDtcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gdGhpcy52aWRlby52aWRlb0hlaWdodDtcbiAgICAgICAgdGhpcy5yZW5kZXJJbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgICAgIHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgICAgIGNhbnZhcy53aWR0aCA9IF90aGlzLnZpZGVvLnZpZGVvV2lkdGg7XG4gICAgICAgICAgICBjYW52YXMuaGVpZ2h0ID0gX3RoaXMudmlkZW8udmlkZW9IZWlnaHQ7XG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKF90aGlzLnZpZGVvLCAwLCAwKTtcbiAgICAgICAgICAgIGNhbnZhcy5jbGFzc0xpc3QuYWRkKCdzY3JvbGwtdmlkZW8nKTtcbiAgICAgICAgICAgIF90aGlzLnJlbmRlcmVkSW1hZ2VzLnB1c2goY2FudmFzKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY2FudmFzKTtcbiAgICAgICAgfSwgMjUpO1xuICAgIH07XG4gICAgU2Nyb2xsVmlkZW8ucHJvdG90eXBlLnN0b3BSZW5kZXJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5yZW5kZXJJbnRlcnZhbCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucmVuZGVyZWRJbWFnZXMpO1xuICAgICAgICB0aGlzLnZpZGVvLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKHRoaXMuY2FudmFzLCB0aGlzLnZpZGVvKTtcbiAgICB9O1xuICAgIFNjcm9sbFZpZGVvLnByb3RvdHlwZS5vblNjcm9sbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMuc2Nyb2xsRXZlbnRSdW5uaW5nKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB0aGlzLnNjcm9sbEV2ZW50UnVubmluZyA9IHRydWU7XG4gICAgICAgIHZhciBib3ggPSB0aGlzLmNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgY29uc29sZS5sb2coJ3Zpc2libGUnLCBib3gudG9wKTtcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuc2Nyb2xsRXZlbnRSdW5uaW5nID0gZmFsc2U7IH0sIDUwKTtcbiAgICB9O1xuICAgIHJldHVybiBTY3JvbGxWaWRlbztcbn0oKSk7XG5leHBvcnRzLlNjcm9sbFZpZGVvID0gU2Nyb2xsVmlkZW87XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgU2Nyb2xsVmlkZW9fMSA9IHJlcXVpcmUoXCIuL1Njcm9sbFZpZGVvXCIpO1xudmFyIHNjcm9sbFZpZGVvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Njcm9sbC12aWRlbycpO1xudmFyIHNjcm9sbFZpZGVvVHMgPSBuZXcgU2Nyb2xsVmlkZW9fMS5TY3JvbGxWaWRlbyhzY3JvbGxWaWRlbyk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=