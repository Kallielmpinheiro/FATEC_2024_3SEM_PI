from datetime import time

def timeChoices():
    TIME_CHOICES = [
        (time(hour, 0).strftime('%H:%M'), time(hour + 1, 0).strftime('%H:%M'))
            for hour in range(0, 24)
                if hour < 23
    ]

    TIME_CHOICES.append(('23:00', '00:00'))
    return  TIME_CHOICES