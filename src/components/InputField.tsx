import React, { useRef, useState } from "react";
import "./styles.css";

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <div>
            <form 
                className="input" 
                onSubmit={ (e) => {
                    handleAdd(e);
                    inputRef.current?.blur();
                }}
            >
                <input
                    ref={inputRef}
                    value={todo}
                    type="input"
                    placeholder="Add a task"
                    className="input__box"
                    onChange={(e) => setTodo(e.target.value)}
                />
                <button
                    className="input_submit"
                    type="submit"
                >
                    Add
                </button>
            </form>

        </div>
    )
}

export default InputField