import { useEffect, useState } from "react";

const useDoctor = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch("https://meddical.herokuapp.com/doctors")
            .then((res) => res.json())
            .then((data) => setDoctors(data));
    }, []);

    return { doctors };
}

export default useDoctor;