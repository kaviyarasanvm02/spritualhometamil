"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Pause, RefreshCw } from "lucide-react";

interface AudioPlayerProps {
    src: string;
    title: string;
}

export default function AudioPlayer({ src, title }: AudioPlayerProps) {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const updateTime = () => setCurrentTime(audio.currentTime);
        const updateDuration = () => setDuration(audio.duration);
        const onEnded = () => setIsPlaying(false);

        audio.addEventListener("timeupdate", updateTime);
        audio.addEventListener("loadedmetadata", updateDuration);
        audio.addEventListener("ended", onEnded);

        return () => {
            audio.removeEventListener("timeupdate", updateTime);
            audio.removeEventListener("loadedmetadata", updateDuration);
            audio.removeEventListener("ended", onEnded);
        };
    }, []);

    const togglePlay = () => {
        if (!audioRef.current) return;
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!audioRef.current) return;
        const time = Number(e.target.value);
        audioRef.current.currentTime = time;
        setCurrentTime(time);
    };

    const formatTime = (time: number) => {
        if (isNaN(time)) return "0:00";
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, "0")}`;
    };

    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow duration-300">
            <audio ref={audioRef} src={src} preload="metadata" />

            <div className="flex items-center gap-4">
                <button
                    onClick={togglePlay}
                    className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-amber-500 text-white hover:bg-amber-600 transition-colors shadow-lg shadow-amber-500/30"
                >
                    {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-1" />}
                </button>

                <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 truncate mb-1">
                        {title}
                    </h3>

                    <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                        <span>{formatTime(currentTime)}</span>
                        <input
                            type="range"
                            min={0}
                            max={duration || 0}
                            value={currentTime}
                            onChange={handleSeek}
                            className="flex-1 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-amber-500"
                        />
                        <span>{formatTime(duration)}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
