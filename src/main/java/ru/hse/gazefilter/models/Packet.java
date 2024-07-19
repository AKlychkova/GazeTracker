package ru.hse.gazefilter.models;

import java.util.List;

public record Packet(String sessionUuid, List<Gaze> gazes) {

}
