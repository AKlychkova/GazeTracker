package ru.hse.gazefilter.models;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface GazeTrackingRepository extends MongoRepository<GazeTrackingSession, String> {

}
