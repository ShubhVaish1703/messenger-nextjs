'use client';
import Input from "@/app/components/inputs/Input";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { FieldValues } from "react-hook-form";
import { SubmitHandler } from "react-hook-form";


type Variant = 'LOGIN' | 'REGISTER';

const AuthForm = () => {
    const [variant, setVariant] = useState<Variant>('LOGIN');
    const [isLoading, setIsLoading] = useState(false);

    const toogleVariant = useCallback(() => {
        if (variant === 'LOGIN') {
            setVariant('REGISTER')
        }
        else {
            setVariant('LOGIN');
        }
    }, [variant]);

    const {
        register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: ''
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);
        if (variant === 'REGISTER') {
            // Axios Register
        }

        if (variant === 'LOGIN') {
            // NextAuth SignIn
        }
    }

    const socialAction = (action: string) => {
        setIsLoading(true);

        // NextAuth Social Sign In
    }

    return (
        <div
            className="
                mt-8
                sm:mx-auto
                sm:w-full
                sm:max-w-md
            ">
            <div
                className="
                bg-white
                px-4 
                py-8
                shadow
                sm:rounded-lg
                sm:px-10
                "
            >
                <form
                    className="space-y-6"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <Input />
                </form>
            </div>
        </div>
    )
}

export default AuthForm