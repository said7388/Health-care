import { useEffect, useState } from "react";

const useDoctor = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch("./doctors.json")
            .then((res) => res.json())
            .then((data) => setDoctors(data));
    }, []);

    return {doctors};
}

export default useDoctor;