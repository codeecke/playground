export class ScrollVideo {
    private renderedImages: HTMLCanvasElement[] = [];
    private canvas = document.createElement('canvas');
    private renderInterval: any
    private scrollEventRunning: boolean = false;

    constructor(private video: HTMLVideoElement, private fps = 30) {
        video.addEventListener('loadeddata', () => this.startRendering())
        video.addEventListener('ended', () => this.stopRendering())
        document.addEventListener('scroll', () => this.onScroll())

        this.canvas.style.position = 'sticky'
        this.canvas.style.top = '0px'
        this.canvas.classList.add('scroll-video')

        video.style.visibility = 'hidden'

        this.video.muted = true
        this.video.playbackRate = 10
        this.video.play()
    }

    startRendering() {


        this.canvas.width = this.video.videoWidth
        this.canvas.height = this.video.videoHeight

        this.renderInterval = setInterval(() => {
            const canvas = document.createElement('canvas')
            const ctx = canvas.getContext('2d')

            canvas.width = this.video.videoWidth
            canvas.height = this.video.videoHeight

            ctx.drawImage(this.video, 0, 0)
            canvas.classList.add('scroll-video')
            this.renderedImages.push(canvas)
        }, 25)
    }

    stopRendering() {
        clearInterval(this.renderInterval)
        console.log(this.renderedImages)
        this.video.parentNode.replaceChild(
            this.canvas,
            this.video
        )
    }

    onScroll() {
        if (this.scrollEventRunning) return
        this.scrollEventRunning = true
        const box = this.canvas.getBoundingClientRect()
        console.log('visible', box.top)
        window.setTimeout(() => this.scrollEventRunning = false, 50)
    }
}