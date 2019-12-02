from unittest import TestCase, main
from unittest.mock import MagicMock
from time import sleep
from duration_captor import duration_captor
from metrics_logger import MetricsLogger

WAIT_TIME = 600


def mock_func(wait_time_ms):
    sleep(wait_time_ms / 1000)
    return wait_time_ms


def mock_func_w_exception():
    raise Exception


class TestDurationCaptor(TestCase):
    def test_func_duration_captor(self):
        mock_ml = MetricsLogger()
        mock_ml.add_metrics = MagicMock()
        return_value = duration_captor(mock_func, WAIT_TIME, mock_ml)
        self.assertEqual(return_value, WAIT_TIME)
        mock_ml.add_metrics.assert_called_once()
        args, kwargs = mock_ml.add_metrics.call_args
        self.assertEqual(args[0], 'duration')
        self.assertGreater(args[1], WAIT_TIME)

    def test_func_duration_captor(self):
        mock_ml = MetricsLogger()
        mock_ml.add_metrics = MagicMock()
        self.assertRaises(Exception, duration_captor, mock_func_w_exception, None, mock_ml)
        mock_ml.add_metrics.assert_called_once()
        args, kwargs = mock_ml.add_metrics.call_args
        self.assertEqual(args[0], 'duration')


if __name__ == '__main__':
    main()
