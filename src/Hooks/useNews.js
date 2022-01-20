import { useEffect, useState } from "react";

const useDoctor = () => {
    const [news, setNews] = useState([]);
    useEffect(() => {
        fetch("https://api.currentsapi.services/v1/search?keywords=covid19&language=en&apiKey=2C--5HQdFDhX5yGc0ATnnqX2BsTXYAhc2AA2fRHuiC8x44f1")
            .then((res) => res.json())
            .then((data) => {
                const newsSet = new Set(data.news);
                const news = Array.from(newsSet);
                setNews(news)
            });
    }, []);

    return { news };
}

export default useDoctor;