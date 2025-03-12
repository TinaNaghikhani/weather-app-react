interface IProps {
    name?: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string,
    label?: string,
    className: string,
    id?: string,
    type: string,
    error?: string,
    value:string,
}
export default function Input({ name, onChange, placeholder, label, className, id, type, error, value }: IProps) {
    return (
        <div className="flex flex-col gap-2 items-center">
            <label htmlFor={id} className="flex self-center text-indigo-900">{label}</label>
            <input value={value} type={type} placeholder={placeholder} name={name} className={className} onChange={onChange} id={id} />
            <span className='text-xs text-red-500  '>{error}</span>
        </div>
    )
}
