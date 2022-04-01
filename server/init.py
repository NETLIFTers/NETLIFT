from pymongo import MongoClient


def db():
    client = MongoClient('localhost', 27017)
    db = client['netLift']
    # users = db['users']
    # workouts = db['workouts']
    # lifts = db['lifts']
    # exercises = db['exercises']
    return db
