export default function TextInput(props) {
    const { label, name, placeholder } = props;

    return (
        <div className="relative w-full rounded-lg border-2 border-zinc-900 bg-white px-5 hover:border-zinc-500 mb-4">
            <input
                type="text"
                name={name}
                id={name}
                placeholder={placeholder}
                className={`
                    peer w-full rounded-md px-3 py-3
                    placeholder:text-transparent
                    focus:border-gray-500 focus:outline-none
                `}
            />
            <label
                htmlFor={name}
                className={`
                    pointer-events-none absolute top-0 left-0 ml-3 origin-left
                    -translate-y-1/2 transform bg-zinc-800 px-1 text-sm text-white
                    transition-all duration-300 ease-in-out
                    peer-placeholder-shown:top-1/2 peer-placeholder-shown:ml-4
                    peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                    peer-focus:-top-0 peer-focus:ml-3 peer-focus:text-sm
                    peer-focus:text-gray-800 peer-focus:bg-zinc-800 peer-focus:text-white rounded
                    peer-placeholder-shown:text-gray-500 peer-placeholder-shown:bg-white
                `}
            >
                {label}
            </label>
        </div>
    )
}