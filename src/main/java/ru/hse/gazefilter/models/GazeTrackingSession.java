package ru.hse.gazefilter.models;

import java.util.List;

public class GazeTrackingSession {
    private final String uuid;
    private final List<Gaze> gazes;

    public GazeTrackingSession(String uuid, List<Gaze> gazes) {
        this.uuid = uuid;
        this.gazes = gazes;
    }

    public String getUuid() {
        return uuid;
    }

    public List<Gaze> getGazes() {
        return List.copyOf(gazes);
    }

    public void addGazes(List<Gaze> gazes) {
        this.gazes.addAll(gazes);
    }
}
