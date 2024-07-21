package ru.hse.gazefilter.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document
public class GazeTrackingSession {
    @Id
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

    /**
     * append new gazes' data
     * @param gazes new gazes' data
     */
    public void addGazes(List<Gaze> gazes) {
        this.gazes.addAll(gazes);
    }
}
