class ClientSideJS {
    /*

        TODO: Pause the video if the cursor is not moving

    */

    constructor() {
        //this.scrubOnMouseMove3();
        this.previousOffsetX = -1;
        //this.transitionVideoLoop();
    }

    scrubOnMouseMove2() {
        const SPEED_MULTIPLIER = 5;
        const TIME_INCREASE = 0.01 * SPEED_MULTIPLIER;
        const INTERVAL_SPEED = 25 / SPEED_MULTIPLIER;
        const VIDEO_LENGTH = 20.02;
        const STARTING_TIME = VIDEO_LENGTH / 2;
        const STARTING_PLAYBACK_RATE = 0.5;
        const video = document.querySelector("video");
        let playInterval;

        video.currentTime = STARTING_TIME;
        video.playbackRate = STARTING_PLAYBACK_RATE;

        let timeout;

        const play = () => {
            playInterval = setInterval(() => {
                video.currentTime += TIME_INCREASE;
            }, INTERVAL_SPEED);
        };
        const rewind = () => {
            playInterval = setInterval(() => {
                video.currentTime -= TIME_INCREASE;
            }, INTERVAL_SPEED);
        };
        const pause = () => {
            video.pause();
            clearInterval(playInterval);
        };

        let rightShouldMove = true;
        let leftShouldMove = true;

        document
            .querySelector("#mainstage")
            .addEventListener("mousemove", (e) => {
                const movingRight = e.offsetX > this.previousOffsetX;
                const movingLeft = e.offsetX < this.previousOffsetX;

                if (movingRight && rightShouldMove) {
                    rightShouldMove = false;
                    leftShouldMove = true;
                    pause();
                    rewind();
                } else if (movingLeft && leftShouldMove) {
                    leftShouldMove = false;
                    rightShouldMove = true;
                    pause();
                    play();
                }

                this.previousOffsetX = e.offsetX;

                if (timeout) clearTimeout(timeout);
                timeout = setTimeout(() => {
                    pause();
                    video.play();
                }, 25);
            });
    }

    scrubOnMouseMove3() {
        const SPEED_MULTIPLIER = 10;
        const TIME_INCREASE = 0.01 * SPEED_MULTIPLIER;
        const INTERVAL_SPEED = 25 / SPEED_MULTIPLIER;
        const VIDEO_LENGTH = 20.02;
        const STARTING_TIME = VIDEO_LENGTH / 2;
        const STARTING_PLAYBACK_RATE = 0.5;

        const video = document.querySelector("video");
        video.currentTime = STARTING_TIME;
        video.playbackRate = STARTING_PLAYBACK_RATE;

        let playInterval;
        const play = () => {
            playInterval = setInterval(() => {
                video.currentTime += TIME_INCREASE;
            }, INTERVAL_SPEED);
        };
        const rewind = () => {
            playInterval = setInterval(() => {
                video.currentTime -= TIME_INCREASE;
            }, INTERVAL_SPEED);
        };
        const pause = () => {
            video.pause();
            clearInterval(playInterval);
        };

        setTimeout(() => {
            setInterval(() => {
                rewind();
            }, VIDEO_LENGTH / 2);
        }, VIDEO_LENGTH / 2);
    }

    transitionVideoLoop() {
        const VIDEO_LENGTH = 20.02;
        setInterval(() => {
            document
                .querySelector("video#video")
                .addEventListener("ended", () => {
                    console.log("video ended");
                    document
                        .querySelector("#mainstage")
                        .classList.add("transition");
                    setTimeout(() => {
                        document
                            .querySelector("#mainstage")
                            .classList.remove("transition");
                    }, 1000);
                });
        }, VIDEO_LENGTH * 1000);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    new ClientSideJS();
});
