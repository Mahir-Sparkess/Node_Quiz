/**
 * @module api/getQuiz
 */

import axios from "axios";

const instance = axios.create({
    baseURL: "https://opentdb.com",
});

export async function getQuiz(params) {
    const { amount, category, difficulty, type } = params;
    try {
        let url = `/api.php?amount=${amount}`;
        if (category) {
            url += `&category=${category}`;
        }
        if (difficulty) {
            url += `&difficulty=${difficulty}`;
        }
        if (type) {
            url += `&type=${type}`;
        }

        const response = await instance.get(url);

        return response.data;
    } catch (error) {
        console.error(error);
    }
}
