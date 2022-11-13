from fastapi import FastAPI

app = FastAPI()

color_db = [{"color_name": "RED"}, {"color_name": "BLUE"}, {"color_name": "GREEN"}, {"color_name": "PINK"}, {"color_name": "YELLOW"}]


@app.get("/colors/")
def read_color(start: int = 0, end: int = 5):
    return color_db[start : start + end]