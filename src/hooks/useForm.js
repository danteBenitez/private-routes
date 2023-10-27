import { useState } from "react";

export function useForm(initialState) {
    const [form, setForm] = useState(initialState);

    const handleChange = (e) => setForm({
        ...form,
        [e.target.name]: e.target.value
    });

    const resetForm = () => {
        const newForm = {};
        for (const key of Object.keys(form)) {
            newForm[key] = '';
        }
        setForm(newForm);
    }

    return {
        form,
        handleChange,
        resetForm
    }
}