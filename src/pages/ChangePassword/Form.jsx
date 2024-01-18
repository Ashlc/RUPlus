import React from "react";

function Form() {
    const data = [
        {
            id: "password",
            text: "",
            type: "password",
            placeholder: "Senha atual",
        },
        {
            id: "newPassword",
            text: "EMAIL",
            type: "password",
            placeholder: "Nova senha",
        },
        {
            id: "confirmPassword",
            text: "EMAIL",
            type: "password",
            placeholder: "Confirme a nova senha",
        },
    ];

    const fields = data.map((e) => {
        return (
            <div className="flex flex-col w-full">
                <input
                    id={e.id}
                    type={e.type}
                    placeholder={e.placeholder}
                    className="text-midnight rounded-md h-8 px-2 border-silver border focus:outline-stdorange text-sm"
                />
            </div>
        );
    });

    return fields;
}

export default Form;
