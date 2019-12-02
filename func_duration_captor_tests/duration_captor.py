from datetime import datetime


def duration_captor(function, parameters, metrics_logger):
    start_time = datetime.now()
    try:
        return function(parameters)
    finally:
        duration = (datetime.now() - start_time).microseconds / 1000
        metrics_logger.add_metrics('duration', duration)
