let WASM_URL = "./gazefilter/gazefilter.wasm";
let BUFFER_SIZE = 100;
let buffer = [];

let sessionStarted = false;
let currentSessionUuid = null;

setUp().then(() => {
    document.getElementById("start_button").addEventListener("click", onStartButtonClick)
});


/**
 * Perform the actions necessary for the gazefilter library to work
 * @returns {Promise<void>}
 */
async function setUp() {
    // Initialize WASM module
    await gazefilter.init(WASM_URL);

    await connectDevice();
}

/**
 * Connect to first available device
 * @returns {Promise<void>}
 */
async function connectDevice() {
    // Add listener to log if device has been connected or disconnected
    gazefilter.tracker.addListener("change", device => {
        if (device) {
            console.assert(gazefilter.tracker.videoElement());

            let {id, width, height, label, frameRate} = device;

            console.log("connected", {id, width, height, label, frameRate});
        } else {
            console.log("disconnected");
        }
    });

    // Connect to device
    if (gazefilter.tracker.isReady()) {
        await gazefilter.tracker.connect();
    } else {
        console.error("Cannot connect to device");
    }
}

function onStartButtonClick(event) {
    if (sessionStarted) {
        // session has been finished

        // Send the remaining coordinates
        sendCoordinates(currentSessionUuid,buffer.slice());
        // Clean buffer
        buffer = [];
        // Change button text
        event.target.innerText = "Начать сессию";
        // Change status
        sessionStarted = false;
        // Switch off listeners
        gazefilter.tracker.removeListener("filter", onCoordinatesPredicted)
        window.removeEventListener("click", onMouseClick);
    } else {
        //session has been started

        //visualize();
        calibrate();
        gazefilter.tracker.addListener("filter", onCoordinatesPredicted)
        sessionStarted = true;
        currentSessionUuid = crypto.randomUUID();
        console.log(`Session with id ${currentSessionUuid} has started`);
        event.target.innerText = "Завершить сессию";
    }
}

/**
 *  Visualize real-time face tracking
 */
function visualize() {
    let canvas = document.getElementById("tracker-canvas");
    console.log(canvas);
    gazefilter.visualizer.setCanvas(canvas);
}

/**
 * Switch on calibration process
 */
function calibrate() {
    // enable mouse calibration
    window.addEventListener("click", onMouseClick);

    // listen calibration process
    gazefilter.tracker.addListener("calib", onCalib);
}

function onMouseClick(event) {
    gazefilter.tracker.calibrate(
        event.timeStamp,
        event.screenX,  // in pixels
        event.screenY,  // in pixels
        0.5
    )
}

function onCalib(response) {
    console.log("calibration error: ", response.errorValue);
    if (response.errorCode === 0) {
        console.log("calibration success");
    }
}

/**
 * Set the position of the element
 * @param element the element to set the position for
 * @param x x coordinate in px
 * @param y y coordinate in px
 */
function setPosition(element, x, y) {
    element.style.position = "absolute";
    element.style.left = x + "px";
    element.style.top = y + "px";
}

function onCoordinatesPredicted(event) {
    if (event.eventType === 2) {                // if face is still here and can be tracked
        let gazePoint = event.bestGazePoint()   // Best gaze point of left or right eye.
        let x = gazePoint[0];
        let y = gazePoint[1];
        if (!isNaN(x) && !isNaN(y)) {
            // Write coordinates
            document.getElementById("x").innerText = "x = " + x;
            document.getElementById("y").innerText = "y = " + y;
            // Set position to X
            setPosition(
                document.getElementById("target"),
                Math.round(x - window.screenLeft),
                Math.round(y - window.screenTop)
            );
            // Save coordinates to buffer
            buffer.push({
                timestamp: event.timestamp,
                x: x,
                y: y
            });
            // Send buffer if it's full
            if (buffer.length >= BUFFER_SIZE) {
                sendCoordinates(currentSessionUuid, buffer.slice());
                buffer = [];
            }
        }
    }
}

/**
 * Send coordinates with session id to server
 * @param uuid
 * @param coordinates
 */
function sendCoordinates(uuid, coordinates) {
    let pack = {
        sessionUuid: uuid,
        gazes: coordinates
    }

    $.ajax({
        url: "/gaze",
        type: "post",
        data: JSON.stringify(pack),
        contentType: 'application/json',
        success: function () {
            console.log("data have been sent");
        }
    })
}
