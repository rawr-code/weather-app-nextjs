"use client";
import { useSearch } from "@hooks";

import dayjs from "dayjs";
import "dayjs/locale/es";

// Organisms
import {
  ForecastList,
  TodayForecastList,
  VisitedList,
  WeatherHero,
} from "@organisms";

dayjs.locale("es");

export default function Home() {
  const { data, value, loading, handleChange } = useSearch();

  return (
    <div className="w-screen h-screen bg-dark-bg">
      <main className="mx-auto flex min-h-screen w-full max-w-screen-2xl flex-row space-x-6 px-24 py-48">
        <div className="flex flex-1 flex-col space-y-5">
          <div className="flex h-14 items-center rounded-xl bg-dark-card px-6">
            <input
              type="text"
              name="input-field"
              autoComplete="off"
              placeholder="Search for cities"
              className="w-full border-none bg-transparent text-dark-text outline-none"
              value={value}
              onChange={(event) => handleChange(event.target.value)}
            />
          </div>
          <WeatherHero data={data} />
          <TodayForecastList data={data?.forecast?.today} />
          <div className="h-60 rounded-3xl bg-dark-card p-6">
            <h2 className="text-sm font-bold uppercase text-dark-label">
              Air conditions
            </h2>
            <div className="mt-4 flex flex-row space-x-20">
              <div className="flex items-center">
                <svg
                  viewBox="0 0 256 512"
                  className="mr-4 h-10 w-10 fill-dark-label"
                >
                  <path d="M192 384c0 35.346-28.654 64-64 64s-64-28.654-64-64c0-23.685 12.876-44.349 32-55.417V224c0-17.673 14.327-32 32-32s32 14.327 32 32v104.583c19.124 11.068 32 31.732 32 55.417zm32-84.653c19.912 22.563 32 52.194 32 84.653 0 70.696-57.303 128-128 128-.299 0-.609-.001-.909-.003C56.789 511.509-.357 453.636.002 383.333.166 351.135 12.225 321.755 32 299.347V96c0-53.019 42.981-96 96-96s96 42.981 96 96v203.347zM208 384c0-34.339-19.37-52.19-32-66.502V96c0-26.467-21.533-48-48-48S80 69.533 80 96v221.498c-12.732 14.428-31.825 32.1-31.999 66.08-.224 43.876 35.563 80.116 79.423 80.42L128 464c44.112 0 80-35.888 80-80z"></path>
                </svg>
                <div>
                  <p className="text-lg text-dark-label">Sensación real</p>
                  {data?.main.feels_like && (
                    <p className="text-3xl font-bold text-dark-text">
                      {Math.trunc(data.main.feels_like)}°
                    </p>
                  )}
                </div>
              </div>
              <div className="flex items-center">
                <svg
                  viewBox="0 0 512 512"
                  className="mr-4 h-10 w-10 fill-dark-label"
                >
                  <path d="M156.7 256H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h142.2c15.9 0 30.8 10.9 33.4 26.6 3.3 20-12.1 37.4-31.6 37.4-14.1 0-26.1-9.2-30.4-21.9-2.1-6.3-8.6-10.1-15.2-10.1H81.6c-9.8 0-17.7 8.8-15.9 18.4 8.6 44.1 47.6 77.6 94.2 77.6 57.1 0 102.7-50.1 95.2-108.6C249 291 205.4 256 156.7 256zM16 224h336c59.7 0 106.8-54.8 93.8-116.7-7.6-36.2-36.9-65.5-73.1-73.1-55.4-11.6-105.1 24.9-114.9 75.5-1.9 9.6 6.1 18.3 15.8 18.3h32.8c6.7 0 13.1-3.8 15.2-10.1C325.9 105.2 337.9 96 352 96c19.4 0 34.9 17.4 31.6 37.4-2.6 15.7-17.4 26.6-33.4 26.6H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16zm384 32H243.7c19.3 16.6 33.2 38.8 39.8 64H400c26.5 0 48 21.5 48 48s-21.5 48-48 48c-17.9 0-33.3-9.9-41.6-24.4-2.9-5-8.7-7.6-14.5-7.6h-33.8c-10.9 0-19 10.8-15.3 21.1 17.8 50.6 70.5 84.8 129.4 72.3 41.2-8.7 75.1-41.6 84.7-82.7C526 321.5 470.5 256 400 256z"></path>
                </svg>
                <div>
                  <p className="text-lg text-dark-label">Viento</p>
                  {data?.main.feels_like && (
                    <p className="text-3xl font-bold text-dark-text">
                      {data.wind.speed} km/h
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-5">
          <ForecastList data={data?.forecast?.week} />
          <VisitedList loading={loading} onClick={handleChange} />
        </div>
      </main>
    </div>
  );
}
