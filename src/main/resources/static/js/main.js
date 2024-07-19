let WASM_URL = "./gazefilter/gazefilter.wasm";
let BUFFER_SIZE = 100;
let buffer = [];

let sessionStarted = false;
let currentSessionUuid = null;

function setPosition(element, x, y) {
    element.style.position = "absolute";
    element.style.left = x + "px";
    element.style.top = y + "px";
}

function onCoordinatesPredicted(event) {
    if (event.eventType === 2) {
        let gazePoint = event.bestGazePoint()
        let x = gazePoint[0];
        let y = gazePoint[1];
        if (!isNaN(x) && !isNaN(y)) {
            document.getElementById("x").innerText = "x = " + x;
            document.getElementById("y").innerText = "y = " + y;
            setPosition(
                document.getElementById("target"),
                Math.round(x - window.screenLeft),
                Math.round(y - window.screenTop)
            );
            buffer.push({
                timestamp: event.timestamp,
                x: x,
                y: y
            });
            if (buffer.length >= BUFFER_SIZE) {
                sendCoordinates(currentSessionUuid, buffer.slice());
                buffer = [];
            }
        }
    } else {
        //console.log(event.timestamp, event.eventType, event.detected);
    }
}

async function setUp() {
    await gazefilter.init(WASM_URL);
    await connectDevice();
}

async function connectDevice() {
    gazefilter.tracker.addListener("change", device => {
        if (device) {
            console.assert(gazefilter.tracker.videoElement());

            let {id, width, height, label, frameRate} = device;

            console.log("connected", {id, width, height, label, frameRate});
        } else {
            console.log("disconnected");
        }
    });

    if (gazefilter.tracker.isReady()) {
        await gazefilter.tracker.connect();
    }
}

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

function onStartButtonClick(event) {
    if (sessionStarted) {
        sendCoordinates(currentSessionUuid,buffer.slice());
        buffer = [];
        event.target.innerText = "Начать сессию";
        sessionStarted = false;
        gazefilter.tracker.removeListener("filter", onCoordinatesPredicted)
        window.removeEventListener("click", onMouseClick);
    } else {
        //visualize();
        calibrate();
        gazefilter.tracker.addListener("filter", onCoordinatesPredicted)
        sessionStarted = true;
        currentSessionUuid = crypto.randomUUID();
        console.log(`Session with id ${currentSessionUuid} has started`);
        event.target.innerText = "Завершить сессию";
    }
}

function visualize() {
    let canvas = document.getElementById("tracker-canvas");
    console.log(canvas);
    gazefilter.visualizer.setCanvas(canvas);
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

function calibrate() {
    // enable mouse calibration
    window.addEventListener("click", onMouseClick);

    // listen calibration process
    gazefilter.tracker.addListener("calib", onCalib);
}

setUp().then(() => {
    document.getElementById("start_button").addEventListener("click", onStartButtonClick)
});
