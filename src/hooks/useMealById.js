import { useEffect, useState } from "react"
import { axiosInstance } from "../utils/axiosInstance";

const useMeal = (mealId) => {
    const [meal, setMeals] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchMeal = async () => {
            setLoading(true);
            try {
                const { status, data } = await axiosInstance.get(`/meal/${mealId}`);
                if (status === 200) {
                    setMeals(data);
                    setLoading(false);
                    setError('')
                }
            } catch (error) {
                setLoading(false);
                setError(error.response.data.message)
            }
        }
        fetchMeal();
    }, [mealId])
    return {
        meal, loading, error
    }
}

export default useMeal;