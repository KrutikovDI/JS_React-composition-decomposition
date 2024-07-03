export interface IWeather {
    data: WeatherData,
    header: string
}

export interface WeatherData {
    png: string,
    temp: string,
    morning: string,
    day: string
}

export interface IVisited {
    header: string,
    data: IData[],
}

export interface IData {
    name: string,
    text: string,
    addit: string
}