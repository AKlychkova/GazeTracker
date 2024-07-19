package ru.hse.gazefilter.controllers;

import org.springframework.web.bind.annotation.*;
import ru.hse.gazefilter.models.Packet;

@RestController
@RequestMapping("/gaze")
public class GazeController {

    @RequestMapping(method= RequestMethod.POST)
    public void postGazes(@RequestBody Packet packet) {
        System.out.println(packet.sessionUuid() + " " + packet.gazes().size());
    }
}
