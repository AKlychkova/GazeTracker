package ru.hse.gazefilter.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import ru.hse.gazefilter.models.GazeTrackingRepository;
import ru.hse.gazefilter.models.GazeTrackingSession;
import ru.hse.gazefilter.models.Packet;

@RestController
@RequestMapping("/gaze")
public class GazeController {
    @Autowired
    private GazeTrackingRepository repo;

    @RequestMapping(method= RequestMethod.POST)
    public void postGazes(@RequestBody Packet packet) {
        var session = repo.findById(packet.sessionUuid());
        if (session.isPresent()) {      // If session already exists in db
            // Append gazes' coordinates
            session.get().addGazes(packet.gazes());
            // Save
            repo.save(session.get());
        } else {                        // If session does not exist in db
            repo.save(new GazeTrackingSession(packet.sessionUuid(), packet.gazes()));
        }
    }
}
