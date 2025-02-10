import { ValidationRule } from "@/components/input-field/useInput";

export const loginInputValidation: ValidationRule[] = [
    {
        type: "required",
        errorMsg: "Обязательное поле",
    },
    {
        type: "maxLength",
        value: 15,
        errorMsg: "Имя должно содержать максимум 15 символов",
    },
    {
        type: "minLength",
        value: 3,
        errorMsg: "Имя должно содержать минимум 3 символа",
    }
]